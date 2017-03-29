const subButton = document.getElementById('sub-button');


var guestData = () => {
  event.preventDefault();
  const json = {
    'guestName':document.getElementById('GET-name').value,
    'guestNumber':document.getElementById('GET-number').value
  }
  console.log(json)
}

subButton.addEventListener('click', guestData, false)
