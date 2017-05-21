'use strict';

var slider = document.getElementById('slider');
var label = document.getElementById('label');
var btn = document.getElementById('btn');
var result = document.getElementById('result');

function getPassword() {
  var seed = 'abcdefghijklmnopqrstuvwxyz';
  var len = slider.value;
  var pwd = '';

  // for (var i = 0; i < len; i++) {
  //   pwd += seed[Math.floor(Math.random() * seed.length)];
  // }

  while (len--) {
    pwd += seed[Math.floor(Math.random() * seed.length)];
  }

  result.value = pwd;
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
