<template>
    <div>
    <b-jumbotron header="" lead="Bootstrap v4 Components for Vue.js 2">

        <template v-slot:lead>
            {{currentQuestion.question}}
        </template>

        <hr class="my-4">

        <p v-for = "(answer,index) in answers" v-bind:key="answer" 
        v-on:click = "selectAnswer(index)"
        >
        
            <b-list-group-item button 
            :class = "{ 'selected' : (selectedIndex === index && answerCorrectness=== null),  'correct' : (answerCorrectness === true && correctIndex === index), 'incorrect' : (answerCorrectness === false && index === selectedIndex) }"
            :disabled = "submited === true"
            > 
            
            {{answer}} 
            
            </b-list-group-item>

        </p>

        <b-button variant="primary"
        @click = "submitAnswer"
        :disabled = "(selectedIndex == null || submited)"
        >
        Submit
        </b-button>
        
        <b-button variant="success" href="#" v-on:click = "next" :disabled = "submited === false">Next</b-button>
    </b-jumbotron>
</div>
</template>

<script>
    export default {
        props: {
            currentQuestion: Object,
            next: Function,
            correct: Number,
            incorrect: Number
        },
        data() {
            return {
                selectedIndex: null,
                shuffledAnswers: [],
                correctIndex: null,
                answerCorrectness: null,
                submited : false
            }
        },
        watch: {
            currentQuestion : {
                immediate:true,
                handler () {
                    this.selectedIndex = null
                    this.shuffleAnswers()
                    this.submited = false
                    this.answerCorrectness = null
                }
            }
        },
        computed: {
            answers () {
                let answers = [...this.currentQuestion.incorrect_answers]
                answers.push (this.currentQuestion.correct_answer)
                return answers               
            }
        },
        methods: {
            
            selectAnswer (index) {
                if (this.submited) {
                    return
                }
                this.answerCorrectness = null;
                this.selectedIndex = index;
                console.log (index);
            },
            shuffle(a) {
                var j, x, i;
                for (i = a.length - 1; i > 0; i--) {
                    j = Math.floor(Math.random() * (i + 1));
                    x = a[i];
                    a[i] = a[j];
                    a[j] = x;
                }
                return a;
            },
            shuffleAnswers () {
                let answers = [...this.currentQuestion.incorrect_answers, this.currentQuestion.correct_answer]
                this.shuffledAnswers = this.shuffle (answers)
                this.correctIndex = this.shuffledAnswers.indexOf(this.currentQuestion.correct_answer)
            },
            submitAnswer () {
                let isCorrect = false;
                this.submited = true;
                if (this.selectedIndex == this.correctIndex ) {
                    isCorrect = true
                } 
                if (isCorrect) {
                    ++ this.correct;
                }else {
                    ++this.incorrect;
                }
                
                this.$emit('submited',this.correct,this.incorrect);
                this.answerCorrectness = isCorrect;
            }

            
        }
    }
</script>

<style scoped>
.btn {
    margin: 0 5px;
}
.list-group-item:hover {
    background-color: #EEEE;
}
.selected {
    background-color: lightblue;
}
.correct {
    background-color: lightgreen;
}
.incorrect {
    background-color: lightcoral;
}
</style>