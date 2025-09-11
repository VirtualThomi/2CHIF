const counterButton =document.getElementById(`counterButton`) as HTMLButtonElement
const decreaseButton =document.getElementById(`decreaseButton`) as HTMLButtonElement
const counter =document.getElementById(`counter`) as HTMLParagraphElement
const increment = document.getElementById(`increment`) as HTMLInputElement
const select = document.getElementById(`incrementValue`) as HTMLSelectElement

let clickCount = 0

select.addEventListener(`change`,()=>{
    increment.value=select.value
})

counterButton.addEventListener(`click`,()=>{
    clickCount+= parseInt(increment.value)
    counter.textContent =`${clickCount}`
        if(clickCount>0){
        counter.style.color="green"
    }
})
decreaseButton.addEventListener(`click`,()=>{
    clickCount-= parseInt(increment.value)       
    counter.textContent =`${clickCount}`
    if(clickCount<0){
        counter.style.color="red"
    }
})