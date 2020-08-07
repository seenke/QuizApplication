<template>
  <div id="app">
    <div id="quizContainer" v-if = "this.index < 10">
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
    </div>
    
</template>

<script>

import Header from './components/Header.vue';
import QuestionBox from './components/QuestionBox.vue';
// import ScorePublish from './components/ScorePublish';

export default {
  name: 'App',
  components: {
    Header,
    QuestionBox
  },
  watch : {
    index: {
      immediate: true,
      handler () {      
        if (this.index > 10) {
          //We clear local storage after quiz is finished
          localStorage.clear ();
        }
        //If there exsists index in localStorage and quiz is not started, 
        //it means page was refresh so we fetch data from localStorage
        if (localStorage.getItem("index") && this.started === false) {
            this.updateFromLocStorage();
        }else {
          localStorage.setItem("index",this.index);
        }
        
        //Annoting start of quiz and saving index to localStorage
        this.started = true;
      }
    },
    questions: {
      immediate: true,
      handler () {
        console.log(this.questions);
        if (this.questions === []) {
            this.fetchQuestions();
        }
      }
    }
  },
  methods: {
    next () {
      this.index ++ ;
      if (this.index > 10) {
        localStorage.clear()
      }
    },
    resetToDefault () {
      this.questions = [];
      this.index = 0;
      this.correct_num = 0;
      this.incorrect_num = 0;
      this.started = false;
    },
    fixScore (correct, incorrect) {
      this.correct_num = correct;
      localStorage.setItem("correct_num",this.correct_num);
      this.incorrect_num = incorrect;
      localStorage.setItem("incorrect_num",this.incorrect_num);
    },
    updateFromLocStorage() {
    console.log("updating from local storage")
    this.index = parseInt (localStorage.getItem("index"))
    console.log(localStorage.getItem("questions"))
    this.questions = JSON.parse (localStorage.getItem("questions"));
    this.correct_num = parseInt (localStorage.getItem("correct_num"));
    this.incorrect_num = parseInt (localStorage.getItem("incorrect_num"));
    },
    fetchQuestions () {
      if (localStorage.getItem("questions")) {
      return;
      }
      fetch('https://opentdb.com/api.php?amount=10&category=27&type=multiple', {
        method:'get'
      }).then((res) => {
          return res.json()
      }).then ((jsonData) => {
          this.questions = jsonData.results ;
          localStorage.setItem("questions",JSON.stringify (this.questions) );
      })
    },
    printAll () {
      console.log(this.questions,this.index,this.correct_num,this.incorrect_num,this.started)
    }
  },
  data() {
    return {
      questions: [],
      index: 0,
      correct_num : 0,
      incorrect_num : 0,
      started: false  
    }
  },
  mounted: function () {
    //this.printAll()
    //this.resetToDefault();
    this.fetchQuestions();
    localStorage.clear()
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
