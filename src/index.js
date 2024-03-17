const main = document.querySelector('.main');

const progressBar = document.querySelector('.wrapper-progress-bar');

const changeMain = document.querySelector('.wrapper-change-main');

const btnBack = document.getElementById('btn-change-main');
btnBack.addEventListener('click', getStart);

const btn = document.getElementById('btn');
btn.addEventListener('click', getProgressBar);

const bar = document.querySelector('.bar');

const textBar = document.getElementById('text-bar-down');

function getProgressBar() {
  progressBar.style.visibility = 'visible';
  // main.style.visibility = 'hidden';

  let changePercent;
  let valueTextBar = textBar.innerHTML;
  let numValueTextBar = Number(valueTextBar) || 0;

  setTimeout(() => {
    bar.setAttribute('id', 'play-animation');

    changePercent = setInterval(() => {
      numValueTextBar += 1;
      valueTextBar = String(numValueTextBar);
      textBar.innerHTML = valueTextBar;
      // console.log(textBar.innerHTML);
    }, 90);
  }, 500);

  setTimeout(() => {
    clearInterval(changePercent);
    textBar.innerHTML = '100';
  }, 9000);

  setTimeout(() => {
    textBar.innerHTML = '0';
    bar.removeAttribute('id', 'play-animation');
    changeMain.style.visibility = 'visible';
    // progressBar.style.visibility = 'hidden';
  }, 10000);
}

function getStart() {
  changeMain.style.visibility = 'hidden';
  main.style.visibility = 'visible';
}
