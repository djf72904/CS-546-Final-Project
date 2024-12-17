const alertEl = document.getElementById('alert-el');

function showAlert(message){
    alertEl.classList.remove('hidden');
    alertEl.innerHTML = message;
    setTimeout(function(){
        alertEl.innerHTML = "";
        alertEl.classList.add('hidden');
    }, 3000)
}