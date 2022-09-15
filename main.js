var sidemeu = document.getElementById("sidemenu");

function openmenu(){
    sidemeu.style.right = "0";
}

function closemenu(){
    sidemeu.style.right = "-200px";
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbzKhbTw-FwULOqnHI0fYXwTPip8nAHhfIrxhofC8qE2Xml7SvcCxPBcnJTXdRi_WdqrRA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})

    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })

    .catch(error => console.error('Error!', error.message))
})