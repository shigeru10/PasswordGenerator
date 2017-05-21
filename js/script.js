'use strict';

var slider = document.getElementById('slider');
var label = document.getElementById('label');
var btn = document.getElementById('btn');
var result = document.getElementById('result');

function getPassword() {
  result.value = 'aaaaaaa';
}

slider.addEventListener('change', function() {
  label.innerHTML = this.value;
});

btn.addEventListener('click', function() {
  getPassword();
});

result.addEventListener('click', function() {
  this.select();
});

getPassword();
