'use strict';

var $email, $password;

$(document).ready(init);

function init() {
  $email = $('#email');
  $password = $('#password');
  $('form').on('submit', loginUser);
}

function loginUser(e) {
  e.preventDefault();
  var email = $email.val();
  var password = $password.val();

  $.post('/users/login', {email: email, password: password})
  .success(function(data) {
    console.log(data);
    location.href = '/';
  })
  .fail(function(err) {
    swal('Error. Check console.');
    console.log('err:', err);
  });
}