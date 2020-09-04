const hDateRemain = document.querySelector(".subscribeRemain p strong");

function setDate() {
  const DateToday = new Date();
  let payingDay = new Date(DateToday.getFullYear(), DateToday.getMonth(), 21);

  if (DateToday.getDate() > 21) {
    payingDay = new Date(DateToday.getFullYear(), DateToday.getMonth() + 1, 21);
  }
  if (DateToday.getMonth() === 11) {
    payingDay = new Date(DateToday.getFullYear() + 1, 0, 21);
  }
  console.log(payingDay);

  const msRemain = payingDay.getTime() - DateToday.getTime();
  const dateRemain = msRemain / (1000 * 60 * 60 * 24);

  hDateRemain.innerHTML = Math.ceil(dateRemain) + "일";
}

function init() {
  setDate();
}

init();
