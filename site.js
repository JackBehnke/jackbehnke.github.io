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

const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()
document.querySelector('#next')
next.addEventListener('click', () => {
    currentImage++
    showImages()
})
document.querySelector('#prev')
prev.addEventListener('click', () => {
    currentImage--
    showImages()
})
setInterval(() => {
    currentImage++
    showImages()
}, 5000)

const todo =[
    { "text": "Buy milk", "completed": false },
    { "text": "Walk the dog", "completed": false },
    { "text": "Do homework", "completed": false }
]

// Get the list from local storage








// Create and add new list items to the DOM

const todoList = document.querySelector('.todo-list')
const input = document.querySelector('#new-todo')
const button = document.querySelector('button')
// Get the list from local storage
const todos = JSON.parse(localStorage.getItem('todo-list')) || []

const rendertodos = () => {
    // Clear the li's before we recreate them
    todoList.innerHTML = ''
    todos.forEach(todo => {
        const li = document.createElement('li')  
        li.textContent = todo.text
        li.classList.add('todo')
        todoList.append(li)
    })
}
button.addEventListener('click', () => {
    const input = input.value
    if(!input) return alert('ENTER A TODO TO CONTINUE')
    // Add a new item to the list
    todos.push({ text: input.value, completed: false })
    // Save the list to local storage
    localStorage.setItem('todo-list', JSON.stringify(todos))
    input = ''
    rendertodos()
})

const pokemon = document.querySelector('.pokemon-div')

const getRandomPokemon = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150)

        const response = await fetch(url)
        const pokemonimg = await response.json()
        return pokemonimg
}

const renderPokemon = (pokemonimg) => {

    const img = document.createElement('img')
    img.src = pokemonimg.sprites.front_default
    img.alt = pokemonimg.name
    pokemon.append(img)
    return pokemonimg
}

getRandomPokemon().then(pokemon => {
    if (pokemon) renderPokemon(pokemon)
})
loadPokemon()
