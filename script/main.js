const BASE_URL = 'http://localhost:3000'

$(document).ready(function() {
  console.log('ready!')
  $(".header").hide();
  $('#main-content').hide();
  $('#signOut').hide()
  checkLogin()

  
})

function checkLogin() {
  
  if(localStorage.getItem("name") == null){
    // console.log(localStorage.getItem("Name"))
    console.log('tes')
    $('#main-content').hide();
    $(".header").show();
    $('#signOut').hide()
  } else {
    $(".header").hide();
    $('#main-content').show();
    $('#signOut').show()
  }
}

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.'
  localStorage.setItem("name", profile.getName())
  checkLogin()

}
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
      localStorage.clear()
      checkLogin()
    });

}