const button = document.querySelector('.button')
const input = document.querySelector('.inputtext')
const lista = document.querySelector('.lista')
let tarefas = []
 


button.addEventListener('click', ()=> {
    
    tarefas.push(input.value)

    mostrarTarefa()

 
})

function mostrarTarefa(){
    let NovaTarefa = ''
    tarefas.forEach((tarefa,index)=> {
        

        NovaTarefa +=  ` 
        <li class="tarefa">
          <p> ${tarefa} </p>
           <img src="./assets/lixeira-icon.png" alt="lixeira-icon" class="lixeira" onclick="lixeira(${index})">
       </li>`
    })

    lista.innerHTML= NovaTarefa
    console.log(tarefas)
}


function lixeira(posicao) {
    tarefas.splice(posicao,1)
    mostrarTarefa()
}



