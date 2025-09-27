const hours = new Date().getHours() 

const isMorning = hours >= 4 && hours < 12 
const isAfternoon = hours >= 12 && hours < 17 
const isEvening = hours >= 17 || hours < 4 

const div = document.querySelector('#welcome')

if(isMorning){
    div.textContent = "Good Morning"
}
if(isAfternoon){
    div.textContent = "Good Afternoon"
}
if(isEvening){
    div.textContent = "Good Evening"
}
localStorage.setItem("It's a secret to everybody." , 'What are you doing? Looking for secrets? Dont put your nose where it doesnt belong. Or you might learn something you DONT like... Hee hee hee.')
