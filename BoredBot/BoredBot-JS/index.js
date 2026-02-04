/**
Challenge: 

When the button is clicked, call out to the Bored API
(URL: https://apis.scrimba.com/bored/api/activity)
and replace the h4 with the activity from the API

*/

const boredButton = document.getElementById("bored-btn")
boredButton.addEventListener("click",() => {
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {console.log(data)
          document.getElementById('activity-holder').textContent =`${data.activity}`})
})