//The core Firebase JS SDK is always required and must be listed first 

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCCRrcMDxxkq5CLjPwfOFeFLy3C6P6uJMc",
    authDomain: "form-349bc.firebaseapp.com",
    databaseURL: "https://form-349bc.firebaseio.com",
    projectId: "form-349bc",
    storageBucket: "form-349bc.appspot.com",
    messagingSenderId: "966823677686",
    appId: "1:966823677686:web:ee1e18aec7fb3c2236e6d7",
    measurementId: "G-4SL35W6DF1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}