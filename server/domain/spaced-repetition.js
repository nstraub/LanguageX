export default function (questions, isAnswerCorrect) {
    var currentQuestion = questions.shift();

    // if isAnswerCorrect is true, it gets coerced to 1, and the weight is doubled.
    // if it's false, it gets coerced to 0, making the whole operation 0, and passing
    // through the short-circuiting or, which resets the weight to 1 (0 || 1 === 1)
    questions.splice(currentQuestion.weight = currentQuestion.weight * isAnswerCorrect * 2 || 1, 0, currentQuestion);
}