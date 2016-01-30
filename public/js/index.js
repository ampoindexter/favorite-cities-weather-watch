'use strict'

console.log('index.js!');

var ref = new Firebase('https://aliciaweatherlogin.firebaseio.com/');

ref.set('working!');

$(document).ready(function() {
  console.log('hey!');
});