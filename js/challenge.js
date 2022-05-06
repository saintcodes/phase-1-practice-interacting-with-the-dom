
let count = document.querySelector('#counter')
let seconds = 1
const increment = () => count.innerText = seconds++ 
let start = setInterval(increment, 1000)
const autoIncrement = () => start
autoIncrement()

const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const heart = document.querySelector('#heart')
const pause = document.querySelector('#pause')
const likeList = document.querySelector('.likes')
const commentsList = document.querySelector('#list')
const submitForm = document.getElementById('comment-form')
const commentField = document.querySelector('#comment-input')
 

const decrement = () => count.innerText = seconds--

plus.addEventListener('click', increment)
minus.addEventListener('click', decrement)
heart.addEventListener('click', logLike)
pause.addEventListener('click', pauseCount)
submitForm.addEventListener('submit', newComment)


function newComment(e) {
  e.preventDefault()
  postNew = document.createElement('p')
  postNew.innerHTML = commentField.value
  commentsList.append(postNew)
  submitForm.reset()
}

function logLike() {
  let loggedLikes = document.createElement('li')
  likeList.append(loggedLikes)
  loggedLikes.innerHTML = `${count.innerText} has been liked 1 times`
}

function pauseCount() {
  minus.disabled = !minus.disabled
  plus.disabled = !plus.disabled
  heart.disabled = !heart.disabled
  submit.disabled = !submit.disabled
  
  if (pause.innerText === 'pause') {
    pause.innerText = 'resume'
    clearInterval(start)
  } else {
    pause.innerText = 'pause'
    start = setInterval(increment, 1000)
  }
}