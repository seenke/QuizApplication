<template>
    <div>
        <b-nav tabs>
            <b-nav-item disabled> <b>Fancy Quiz App </b> </b-nav-item>
            <b-nav-item disabled>Current question: {{currentIndex + 1}} / 10</b-nav-item>
            <b-nav-item disabled>Correct answers: {{correct}}</b-nav-item>
            <b-nav-item disabled>Incorrect answers: {{incorrect}}</b-nav-item>

        </b-nav>
    </div>
</template>

<script>
    export default {
        props: {
            currentIndex: Number,
            correct: Number,
            incorrect: Number
        }
    }
</script>