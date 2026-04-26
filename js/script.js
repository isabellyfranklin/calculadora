const trilho = document.getElementById('trilho')
const body = document.querySelector('body') 

trilho.addEventListener(`click`, ()=>{
    trilho.classList.toggle(`dark`)
    body.classList.toggle(`dark`)
})

function insertToDisplay(data){
    document.querySelector('#display').value += data
}

function clean(){
    document.querySelector('#display').value = " "
}

function back(){
    const  display = document.querySelector('#display')
    display.value = display.value.slice(0, -1)
}

function resultado (){
    document.querySelector('#display')
    try{
        display.value = eval(display.value)
    }catch{
        display.value = 'Deu erro'
    }
}