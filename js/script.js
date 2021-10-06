// Oculta el div inicial
const container = document.querySelector(".container")
container.hidden = true


//Declaramos las opciones de usuario y por defecto las del computador, a traves del metodo random se le asigna una opcion cada vez que el usuario manda su propia opción
const opciones = document.querySelectorAll(".opciones");
      let puntajePersona = 0;
      let puntajeComputador = 0;
  
      opciones.forEach((opcion) => {
        opcion.addEventListener("click", function () {
          const entradaPersona = this.textContent;
          console.log(entradaPersona)
  
          const OpcionesComputador = ["Piedra", "Papel", "Tijera"];
          const entradaComputador = OpcionesComputador[Math.floor(Math.random() * 3)];
          console.log(entradaComputador)
  
          comparaEntradas(entradaPersona, entradaComputador);
          actualizarResultado();
          if (verificaGanador()) {
            puntajePersona = puntajeComputador = 0;
            actualizarResultado();
          }
        });
      });
  
      //Función para comparar las entradas e ir declarando ganador o perdedor. También al comparar se suma en el puntaje global de cada uno para finalmente ver quien es el ganador
      function comparaEntradas(entradaPersona, entradaComputador) {
        const juegoActual = `${entradaPersona} vs ${entradaComputador}`;

        //Revisa empate
        if (entradaPersona === entradaComputador) {
          alertify.alert('Resultado', `${juegoActual} empate`);
          return;
        }
        
        //Revisa Piedra
        if (entradaPersona === "Piedra") {
          if (entradaComputador === "Tijera") {
            alertify.alert('Resultado',`${juegoActual} = Tú ganas`);
            puntajePersona++;
          } else {
            alertify.alert('Resultado', `${juegoActual} = El computador gana`);
            puntajeComputador++;
          }
        }
        //Revisa Papel
        else if (entradaPersona === "Papel") {
          if (entradaComputador === "Piedra") {
            alertify.alert('Resultado', `${juegoActual} = Tú ganas`);
            puntajePersona++;
          } else {
            alertify.alert('Resultado', `${juegoActual} = El computador gana`);
            puntajeComputador++;
          }
        }
        //Revisa Tijera
        else {
          if (entradaComputador === "Papel") {
            alertify.alert('Resultado', `${juegoActual} = Tú ganas`);
            puntajePersona++;
          } else {
            alertify.alert('Resultado', `${juegoActual} = El computador gana`);
            puntajeComputador++;
          }
        }
      }
      
      //Funcion para actualizar los resultados en el html
      function actualizarResultado() {
        document.querySelector("#puntaje-persona").textContent = puntajePersona;
        document.querySelector("#puntaje-computador").textContent = puntajeComputador;
      }

      //Funcion para mostrar en pantalla quién es el ganador cuando uno de los dos sume 3 puntos
      function verificaGanador() {
        if (puntajePersona === 3 || puntajeComputador === 3) {
          const ganador =
            puntajePersona === 3
              ? `Tú ganas! ${puntajePersona} a ${puntajeComputador} Felicidades! <br>
                <p>Presione 'Ok' para volver a intentarlo</p>
              `
              : `El computador gana! ${puntajeComputador} a ${puntajePersona}  Intentalo nuevamente! <br>
              <p>Presione 'Ok' para volver a intentarlo</p>`;

          alertify.confirm('Resultado Final', ganador, function(){ location.reload('') }
                , function(){ alertify.error('Cancel')});
          return true;
        }
        return false;
      }


setTimeout(() => {
    const algo = document.querySelector('.tituloEntrada').remove()
    container.hidden = false
}, 6000);

//Titulo entrada épica
var ml4 = {};
ml4.opacityIn = [0,1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 500;

anime.timeline({loop: false})
  .add({
    targets: '.ml4 .letters-1',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-1',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-2',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-2',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-3',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-3',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4',
    opacity: 0,
    duration: 500,
    delay: 500
  });


//Titulo épico 2
const textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });