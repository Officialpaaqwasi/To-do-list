const button = document.getElementById('input-text');

button.addEventListener('click', function() {
  if (button.style.backgroundColor === 'red') {
    button.style.backgroundColor = 'blue';
  } else {
    button.style.backgroundColor = 'red';
  }
});


function bringToTop() {
  const input = document.getElementById('input-field').value;
  const output = document.getElementById('output');
  
  output.innerText = input;
  output.style.position = 'fixed';
  output.style.top = '0';
}