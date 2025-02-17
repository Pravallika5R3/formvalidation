document.addEventListener("DOMContentLoaded", function () {
  // Get tab buttons
  const signupTab = document.getElementById('signup-tab');
  const loginTab = document.getElementById('login-tab');

  // Get forms
  const signupForm = document.getElementById('signup');
  const loginForm = document.getElementById('login');



  // Function to switch to signup
  function showSignup() {
    signupForm.style.display = 'block';
    loginForm.style.display = 'none';
    signupTab.parentElement.classList.add('active');
    loginTab.parentElement.classList.remove('active');
  }

  // Function to switch to login
  function showLogin() {
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
    loginTab.parentElement.classList.add('active');
    signupTab.parentElement.classList.remove('active');
  }


  // Event listeners
  signupTab.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default anchor behavior
    showSignup();
  });

  loginTab.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default anchor behavior
    showLogin();
  });

  // Show signup form by default on load
  showSignup();

});
function validationEvent() {
  let username = document.getElementById('signup-name').value;
  var format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  if (username == '') {
    document.getElementById("info").innerHTML = "Username must not be empty";
    return false;
  } else if (username != '') {
    if (username.match(format)) {
      document.getElementById("info").innerHTML = "Username must not contain any symbols";
      return false;
    } else if (username.length < 5) {
      document.getElementById("info").innerHTML = "Username must contain at least 5 characters";
      return false;
    } else if (username.length > 15) {
      document.getElementById("info").innerHTML = "Username must not exceed 10 characters";
      return false;
    } else {
      return true;
    }
  }
}
function submitValidation() {
  var phn = document.getElementById('signup-phn').value;
  var password = document.getElementById('signup-password').value;
  var cpassword = document.getElementById('signup-confirm-password').value;

  if (phn.length > 10) {
    alert("phn number must not exceed 10-digits");
    return false;
  } else if (phn.length < 10) {
    alert("Phone Number should not be 123456789 and must be a 10-digit number.");
  } else {
    true;
  }

  if (password == "" || password !== cpassword) {
    alert("confirm password not match");
    return false;
  }
  else if (password == "password" || password == username) {
  alert("password should not be password or user name");
  return false;
  }
  else {
    alert("Your details were successfully received!!")
    return true;
  }

}
