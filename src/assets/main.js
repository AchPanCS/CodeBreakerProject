let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}

function setHiddenFields() {
  let answer = Math.floor(Math.random() * 1000);
  answer.toString();
  while(answer.length < 4) {
    answer = '0' + answer;
  };
  let attempt = 0;
}
