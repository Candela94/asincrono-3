

//Ver dónde tenemos que hacer click, en este caso, en ul y en li


const li    = document.querySelectorAll('.li')
const bloque    = document.querySelectorAll('.bloque')


//cuando hacemos click en li
// a todos los li le quitaremos la clase activo
//a todos los bloque tb se la quitamos 
//.li con posicion le añadiremos la clase activo, lo mismo con el bloque que hemos hecho click


//Recorremos todos los li
li.forEach(   ( cadaLi, i) =>{


    //asignamos un click a cada uno de ellos 
    li[i].addEventListener("click", ()=>{
        // otra vez los recorremos 
        li.forEach(   (cadaLi, i) => {


            //quitamos clase activo de cada li y bloque
            li[i].classList.remove('activo')
            bloque[i].classList.remove('activo')
        })

            //añadimos la clase activo al hacer click
            li[i].classList.add('activo')
            bloque[i].classList.add('activo')
    })

})