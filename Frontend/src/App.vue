<template>
  <div id="app">
    <Header 
    :currentIndex = "index"
    :correct = "correct_num"
    :incorrect = "incorrect_num"
    />
    
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm = 6 offset = 3>
        <QuestionBox
          v-on:submited = "fixScore"
          v-if="questions.length"
          :currentQuestion = "questions [index]"
          :next = "next"
          :correct = "correct_num"
          :incorrect = "incorrect_num"
        />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

import Header from './components/Header.vue';
import QuestionBox from './components/QuestionBox.vue';

export default {
  name: 'App',
  components: {
    Header,
    QuestionBox
  },
  methods: {
    next () {
      this.index ++ ;
    },
    fixScore (correct, incorrect) {
      this.correct_num = correct;
      this.incorrect_num = incorrect; 
    }
  },
  data() {
    return {
      questions: [],
      index: 0,
      correct_num : 0,
      incorrect_num : 0   
    }
  },
  mounted: function () {
    fetch('https://opentdb.com/api.php?amount=10&category=27&type=multiple', {
      method:'get'
    }).then((res) => {
        return res.json()
    }).then ((jsonData) => {
        this.questions = jsonData.results ;
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
