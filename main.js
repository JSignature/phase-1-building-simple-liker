// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.querySelector("#modal")
modal.classList.add("hidden")
const emptyHearts = document.querySelectorAll(".like-glyph")
for (element of emptyHearts) {
   element.addEventListener("click", e => {
     mimicServerCall()
     .then(() => {
      // if ((e.target.textContent = EMPTY_HEART) || (e.target.textContent = "&#x2661")){
      //  console.log(e.target.textContent)
      //   e.target.textContent = FULL_HEART
      //   console.log(e.target.textContent)
       
       
      // }
      // else   {
      //   e.target.textContent = EMPTY_HEART
      // }
     e.target.textContent = FULL_HEART
      e.target.classList.toggle("activated-heart")
     })
     .catch((error) => {
       const errMessage = document.querySelector("#modal-message")
       errMessage.textContent = error
      modal.classList.remove("hidden")
      setTimeout(() => {
        modal.classList.add("hidden")
      }, 3000);
     })
   })

}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
