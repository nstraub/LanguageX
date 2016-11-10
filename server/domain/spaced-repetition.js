export default function (questions, isAnswerCorrect) {
    var currentQuestion = questions.shift();
    if (isAnswerCorrect) {
        currentQuestion.weight *= 2;
    } else {
        currentQuestion.weight = 1;
    }

    questions.splice(currentQuestion.weight, 0, currentQuestion);
}