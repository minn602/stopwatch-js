'use strict';
//자바스크립트를 이용한 스탑와치 기능 구현하기
//  1. start btn을 누르면 초단위로 스탑와치 타이머가 시작된다.
//  2. stop btn을 누르면 타이머가 멈춘다.
//  3. reset btn을 누르면 time lap에 시간이 추가되고 display는 00:00으로 리셋된다.
const display = document.querySelector('.display');

let intervalId = 0,
    minutes = 0,
    seconds = 0,
    displayArr = display.innerText.split(':');

function startBtnHandler() {
  const startBtn = document.querySelector('.start-btn');

  startBtn.addEventListener('click', () =>{
    intervalId = setInterval(() => {
      if (!parseInt(displayArr[1])) {
        seconds += 1;
        if (seconds > 59) {
          seconds = 0;
          minutes += 1;
        }
        display.innerText = `${minutes < 10 ? `0${minutes}` : minutes}:${
          seconds < 10 ? `0${seconds}` : seconds}`;
      } else {
        seconds = parseInt(displayArr[1]);
        seconds += 1;
        if (seconds > 59) {
          seconds = 0;
          minutes += 1;
        }
        display.innerText = `${minutes < 10 ? `0${minutes}` : minutes}:${
          seconds < 10 ? `0${seconds}` : seconds}`;
      }
    }, 1000)
})
}

function stopBtnHandler() {
  const stopBtn = document.querySelector('.stop-btn');
  stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
  })
  minutes = parseInt(displayArr[0]);
  seconds = parseInt(displayArr[1]);
}

function resetBtnHandler() {
  const resetBtn = document.querySelector('.reset-btn'),
        display = document.querySelector('.display');
  resetBtn.addEventListener('click', () => {
    const timelapList = document.querySelector('.timelap-list');
    const li = document.createElement('li');
    li.innerText = display.innerText;
    timelapList.appendChild(li);
    display.innerText = `00:00`;
    clearInterval(intervalId);
    seconds = 0;
    minutes = 0;
  })
}

function init() {
  startBtnHandler();
  stopBtnHandler();
  resetBtnHandler();
}

init();
