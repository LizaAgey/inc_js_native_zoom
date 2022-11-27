// изменение

const small = document.getElementById("small")
const medium = document.getElementById("medium")
const big = document.getElementById("big")


//TRAIN 1

const smallHandler = () => {
    alert("small")
}
const mediumHandler = (event) => {
    event.stopPropagation()
    alert("medium")
}
const bigHandler = () => {
    alert("big")
}

//
// small.onclick = smallHandler
// small.onclick = null ------->> delete listener


//TRAIN2
// const smallHandler = (event) => {
//     console.log(event)
// }
//
// const showCurrentTarget  = (event) => {
//     console.log(event.currentTarget)
// };

//TRAIN3
// const getButtonId = (event) => {
//  if(event.target.tagName === "BUTTON") {
//      return alert(event.target.id)
//  }
// };
// small.addEventListener("click", getButtonId)


//for all trainings:

// small.addEventListener("click", smallHandler)
// small.addEventListener("click", showCurrentTarget)
// medium.addEventListener("click", showCurrentTarget)
// big.addEventListener("click", showCurrentTarget)

small.addEventListener("click", smallHandler)
medium.addEventListener("click", mediumHandler)
big.addEventListener("click", bigHandler)


//TRAIN4 with links <a>
const a = document.getElementById("a")

a.addEventListener("click",(event)=> {
    event.preventDefault()
    alert("prevent default a-link behavior")
})