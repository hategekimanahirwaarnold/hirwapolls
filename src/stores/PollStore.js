import { writable } from "svelte/store";
const PollStore = writable([
    {
        id: 1,
        question: 'Are you human being',
        answerA: 'I am animal',
        answerB: 'I am Human',
        votesA: 9,
        votesB: 15
    }
]);

export default PollStore;
