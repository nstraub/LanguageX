export default function () {
    let questions = [
        {
            question: "Bonjour",
            answer: "Hello",
        },
        {
            question: "Au revoir",
            answer: "Goodbye",
        },
        {
            question: "Je suis",
            answer: "I am",
        },
        {
            question: "fromage",
            answer: "cheese",
        },
        {
            question: "visage",
            answer: "face",
        },
        {
            question: "entrepreneur",
            answer: "businessman",
        },
        {
            question: "je ne sais quoi",
            answer: "special something",
        },
        {
            question: "meurtre",
            answer: "murder",
        },
        {
            question: "chein",
            answer: "dog",
        },
        {
            question: "femme",
            answer: "woman",
        }
    ];

    questions.forEach(function (question) {
        question.weight = 1;
    });

    return questions;
}