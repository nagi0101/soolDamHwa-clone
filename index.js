const hDateRemain = document.querySelector(".subscribeRemain p strong");
const qnaHeaders = document.querySelectorAll(".qna__header");
const qnaAnswers = document.querySelectorAll(".qna__answer");
let qnaAnswerShowing = null;

const SHOWING = "qna__answer-showing";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function closeAnswer() {
  const header = qnaAnswerShowing.previousElementSibling;
  const icon = header.lastElementChild;
  icon.classList.remove("fa-angle-down");
  icon.classList.add("fa-angle-up");
  qnaAnswerShowing.classList.remove("qna__answer-showing");
  // sleep(500).then(() => {
  //   header.style.borderBottom = "1px rgb(200, 200, 200) solid";
  // });
}

function showAnswer(item) {
  const answer = item.nextElementSibling;
  const icon = item.lastElementChild;
  answer.classList.add("qna__answer-showing");
  // item.style.borderBottom = "1px rgba(200, 200, 200, 0) solid";
  icon.classList.remove("fa-angle-up");
  icon.classList.add("fa-angle-down");
  qnaAnswerShowing = answer;
}

function qnaClicked() {
  if (this.nextElementSibling !== qnaAnswerShowing) {
    //qna를 처음 클릭한 것이 아닌가?
    if (qnaAnswerShowing) {
      closeAnswer(this);
      sleep(350).then(() => {
        showAnswer(this);
      });
      // showAnswer(this);
    }
    //qna를 처음 클릭했는가?
    else {
      showAnswer(this);
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
