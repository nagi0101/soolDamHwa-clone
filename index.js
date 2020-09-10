const hDateRemain = document.querySelector(".subscribeRemain p strong");
const qnaHeaders = document.querySelectorAll(".qna__header");
const qnaAnswers = document.querySelectorAll(".qna__answer");
let qnaAnswerShowing = null;
let mediaQuery = window.matchMedia("(min-width: 1180px)");
const QNASHOWING = "qna__answer-showing";

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

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function closeAnswer() {
  const header = qnaAnswerShowing.previousElementSibling;
  const icon = header.lastElementChild;
  icon.classList.remove("fa-angle-down");
  icon.classList.add("fa-angle-up");
  qnaAnswerShowing.classList.remove(QNASHOWING);
  // sleep(500).then(() => {
  //   header.style.borderBottom = "1px rgb(200, 200, 200) solid";
  // });
}

function showAnswer(item) {
  const answer = item.nextElementSibling;
  const icon = item.lastElementChild;
  answer.classList.add(QNASHOWING);
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

// const mainBanner = document.querySelector(".mainBanner");
// const mbTitle = mainBanner.querySelector(".mainBanner__title");
// const DATAAOS = "data-aos";
// const DATAAOSDUR = "data-aos-duration";
// const DURTIME = "1000";
// function handleMainBanner(mediaQuery) {
//   if (mediaQuery) {
//     const att_data_aos = document.createAttribute(DATAAOS);
//     att_data_aos.value = "fade-right";
//     const att_data_aos_dur = document.createAttribute(DATAAOSDUR);
//     att_data_aos_dur.value = DURTIME;
//     mbTitle.setAttributeNode(att_data_aos);
//     mbTitle.setAttributeNode(att_data_aos_dur);
//   } else {
//     mbTitle.removeAttributeNode(DATAAOS);
//     mbTitle.removeAttributeNode(DATAAOSDUR);
//   }
// }

const sidebar = document.querySelector(".side-bar");
const menuBtn = document.querySelector(".header-normal .fa-bars");
const SIDEBAR_SHOWING = "side-bar-showing";
const HEADER_BAR_BTN = "fa-bars";
const HEADER_X_BTN = "fa-times";
function handleShowingSidebar() {
  // // if sidebar is showing
  // if (sidebar.classList.contains(SIDEBARSHOWING)) {
  //   sidebar.classList.remove(SIDEBARSHOWING);
  // }
  // // if sidebar is not showing
  // else {
  //   sidebar.classList.add(SIDEBARSHOWING);
  // }
  sidebar.classList.toggle(SIDEBAR_SHOWING);
  menuBtn.classList.toggle(HEADER_BAR_BTN);
  menuBtn.classList.toggle(HEADER_X_BTN);
}

function handleSidebar() {
  menuBtn.addEventListener("click", handleShowingSidebar);
}

function init() {
  setDate();
  handleQna();
  // handleMainBanner(mediaQuery);
  // mediaQuery.addListener(handleMainBanner);
  handleSidebar();
}

init();
