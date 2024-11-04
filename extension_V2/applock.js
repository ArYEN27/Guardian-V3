const password= document.getElementById('password');
const forgotpass = document.getElementById('forgotPassword');
const passform = document.getElementById('passwordForm');
// const newpassform = document.getElementById('newpassForm');


function toggleButtonText() {
    if (forgotpass.innerHTML === '<span>Forgot Password?</span>') {
        forgotpass.innerHTML= `<span>Enter Password</span>`
      } else {
        forgotpass.innerHTML = '<span>Forgot Password?</span>';
      }
}

forgotpass.addEventListener("click", e => {
  e.preventDefault();
  password.classList.toggle("hide");
  newpass.classList.toggle("show");
  toggleButtonText();
})


async function submitForm(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const applock = {
      password: `${formData}`
  }
  
  const req = new XMLHttpRequest();
  
  req.open('POST', "http://127.0.0.1:5000/lock"); // 'POST' or 'PUT'
  
  req.setRequestHeader("Content-Type", "application/json");
  
  req.addEventListener('load', function() {
      const res = JSON.parse(req.responseText);
      console.log(res);
  });
  
  req.send(JSON.stringify(applock));

}

passform.addEventListener('submit', submitForm);



