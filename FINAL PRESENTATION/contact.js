const handleSubmit = (e) => {
    e.preventDefault();
    console.log('test');

    const name = document.querySelector('input[type="text"][name="name"]').value;
    const email = document.querySelector('input[type="email"][name="email"]').value;
    const message = document.querySelector('input[type="text"][name="message"]').value;

    const namefield = document.getElementById('namefield').innerText = name;
    const emailfield = document.getElementById('emailfield').innerText = email;
    const messagefield = document.getElementById('messagefield').innerText = message;

    document.querySelector(".confirmcontact").classList.remove("hidden");


}

const form = document.getElementById('myForm');
form.addEventListener('submit', handleSubmit);

function closeForm() {
    document.querySelector(".confirmcontact").classList.add("hidden");
  }

  const okayButton = document.getElementById('handleConfirm');

  okayButton.addEventListener('click', ()=>{
    const name = document.querySelector('input[type="text"][name="name"]').value = "";
    const email = document.querySelector('input[type="email"][name="email"]').value = "";
    const message = document.querySelector('input[type="text"][name="message"]').value = "";
    location.reload();
  })