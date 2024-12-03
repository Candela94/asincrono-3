

//seleccionamos bloque y h2


const bloque = document.querySelectorAll(`.bloque`)
const h2 = document.querySelectorAll(`.h2`)



//qué hacer cuando haga click. 
// cuando haga click, pondremos:
// quitr clase activo de todos los bloques
// añadiremos clase activo al bloque con la posición del h2


//cogemos todas las etiquetas h2 y las recorremos con forEach
h2.forEach(  (cadaH2, i) => {

        h2[i].addEventListener("click", () => {

            //vamos a ejecutar una función que realice todo lo de la línea 13 y 14

            //1) Quitar la clase "activo" de todos los bloques:
            bloque.forEach (   (cadaBloque , i ) => {
                bloque[i].classList.remove('activo')
            })

            bloque[i].classList.add('activo')



        });

});