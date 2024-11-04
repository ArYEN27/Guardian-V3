const loginbtn = document.querySelector(".login");
const det = document.getElementById("authtxt");
const addbtn = document.getElementById("addbtn");
const lockbtn = document.getElementById("switch");
const password= document.getElementById('password');
const newpass= document.querySelector('.new-password-input');
const forgotpass = document.getElementById('forgotPassword');


function deleteSpanElement() {
    let spanElement = document.getElementById('details');
    if (spanElement) {
        spanElement.remove();
    } else {
        console.error('Span element not found');
    }
}

// function toggleButtonText() {
//     if (forgotpass.innerHTML === '<span>Forgot Password?</span>') {
//         forgotpass.innerHTML= `<span>Enter Password</span>`
//       } else {
//         forgotpass.innerHTML = '<span>Forgot Password?</span>';
//       }
// }

loginbtn.addEventListener('click', function () {
    window.open("http://127.0.0.1:5000/auth", "_blank");
})

document.addEventListener('DOMContentLoaded', function () {

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // console.log(this.textponseText);
    }
};
xhr.open("GET", "http://127.0.0.1:5000/auth", true);
xhr.onload = function() {
    let text = JSON.parse(xhr.responseText);
    console.log(text);
    console.log(text.Auth);
    if (text.status == "true") {
        deleteSpanElement(); 
        det.innerHTML = `&nbspHello ${text.User}! `
        console.log(text.User);
    }
}
xhr.send();

async function loadHTMLFile(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to load HTML file: ${response.status} ${response.statusText}`);
            }
            const htmlContent = await response.text();
            document.getElementById('container').innerHTML = htmlContent;

        } catch (error) {
            console.error(error);
        }
    }


lockbtn.addEventListener('change', function () {
        addbtn.classList.toggle("disable")
        if (addbtn.classList.contains('disable')) {
            console.log('The element has the "disable" class.');
            
        } else {
            console.log('The element does not have the "disable" class.');
            loadHTMLFile('applock.html');
        }
});


});



// JSON.stringify(xhr.textponseText)


// document.addEventListener('DOMContentLoaded', function () {

//         });





// const btn = document.getElementById("summarise");
// btn.addEventListener("click", function () {
//     btn.disabled = true;
//     btn.innerHTML = "Classifying...";
//     chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
//         let xhr = new XMLHttpRequest();
//         xhr.onreadystatechange = function() {
//             if (this.readyState == 4 && this.status == 200) {
//                 console.log(this.textponseText);
//             }
//         };
//         xhr.open("GET", "http://127.0.0.1:5000/scrapeClassify", true);
//         xhr.onload = function() {
//             let text = xhr.textponseText;
//             const p = document.getElementById("output");
//             p.innerHTML = text;
//             btn.disabled = false;
//             btn.innerHTML = "Summarise";
//         }
//         xhr.send();
//     });
// });



// Working xhr response
// const loginbtn = document.querySelector(".login");

// loginbtn.addEventListener("click", function () {
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         // console.log(this.textponseText);
//     }
// };
// xhr.open("GET", "http://127.0.0.1:5000/auth", true);
// xhr.onload = function() {
//     let text = xhr.responseText;
//     const det = document.getElementById("details");
//     console.log(text);
//     console.log(typeof(text));
//     // if (text == "False") { p.innerHTML = `<button class="login"> Log In </button> to start using the extension`; }
// }
//     xhr.send();
// });