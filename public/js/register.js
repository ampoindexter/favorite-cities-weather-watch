'use strict';

var $email, $password, $password2;

$(document).ready(init);

function init() {
  $email = $('#email');
  $password = $('#password');
  $password2 = $('#password2');
  $('form').on('submit', registerUser);
}

function registerUser(e) {
  e.preventDefault();
  var email = $email.val();
  var password = $password.val();
  var password2 = $password2.val();

  if (password !== password2) {
    $('.password').val('');
    return swal('Passwords must match.')
  }

  $.post('/users/register', {email: email, password: password})
  .success(function() {
    location.href = '/login';
  })
  .fail(function(err) {
    swal('Error. Check console.');
    console.log('err:', err);
  });
}