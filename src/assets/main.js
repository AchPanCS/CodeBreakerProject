let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');

    if (answer.value = '' || attempt.value = '') {
      setHiddenFields();
    }

    if(!validateInput(input.value)){
      return;
    }
    attempt.value++;

}

function setHiddenFields() {
  answer.value = Math.floor(Math.random() * 10000).toString();
  while(answer.value.length < 4) {
    answer.value = '0' + answer.value;
  };
  attempt.value = 0;
}

function setMessage(message) {
  document.getElementById('message').innerHTML = message;
}

function validateInput(input){
  if (input.length != 4){
    setMessage('Guesses must be exactly 4 characters long.');
    return false;
  }
  return true;
}

function getResults(input){
  let result = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">'
  for ( i = 0; i < input.length; i++){
    let temp = '';
    if(answer.value.includes(input[i])){
      temp = '<span class="glyphicon glyphicon-transfer"></span>';
      if(input[i] == answer.value[i]){
        temp = '<span class="glyphicon glyphicon-ok"></span>';
      }
    } else {
      temp = '<span class="glyphicon glyphicon-remove"></span>';
    };
    result.concat(temp);
  };
  result.concat('</div>')
  document.getElementById('results').innerHTML = result;
}
