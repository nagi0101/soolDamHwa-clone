const hDateRemain = document.querySelector(".subscribeRemain p strong");
const qnaHeaders = document.querySelectorAll(".qna__header");
const qnaAnswers = document.querySelectorAll(".qna__answer");
let isQnaAnswerShowing = false;
let qnaAnswerShowing = null;

const SHOWING = "qna__answer-showing";

function closeAnswer() {
  qnaAnswerShowing.classList.remove("qna__answer-showing");
}

function showAnswer(item) {
  const answer = item.nextElementSibling;
  answer.classList.add("qna__answer-showing");
  return answer;
}

function qnaClicked() {
  //클릭한 qna가 이미 보여지고 있는 qna인가?
  if (!false) {
    //qna를 처음 클릭한 것이 아닌가?
    if (isQnaAnswerShowing) {
      closeAnswer();
      qnaAnswerShowing = showAnswer(this);
    }
    //qna를 처음 클릭했는가?
    else {
      qnaAnswerShowing = showAnswer(this);
      isQnaAnswerShowing = true;
    }
  }
}

function handleQna() {
  qnaHeaders.forEach(function (item) {
    item.addEventListener("click", qnaClicked);
  });
}

function setPayingDate(dateToday) {
  if (dateToday.getDate() > 21) {
    return new Date(dateToday.getFullYear(), dateToday.getMonth() + 1, 21);
  }
  if (dateToday.getMonth() === 11) {
    return new Date(dateToday.getFullYear() + 1, 0, 21);
  } else {
    return new Date(dateToday.getFullYear(), dateToday.getMonth(), 21);
  }
}

function setDate() {
  const dateToday = new Date();
  const payingDate = setPayingDate(dateToday);
  const msRemain = payingDate.getTime() - dateToday.getTime();
  const dateRemain = msRemain / (1000 * 60 * 60 * 24);

  hDateRemain.innerHTML = Math.ceil(dateRemain) + "일";
}

function init() {
  setDate();
  handleQna();
}

init();
