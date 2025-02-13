const yesBtn = document.querySelector('#yesBtn');

document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("overlay").classList.add("activo");
});

document.getElementById("overlay").addEventListener("click", function(event){
    if (!event.target.closest(".popup")){
        document.getElementById("overlay").classList.remove("activo");
    }
});

const noBtn = document.querySelector('#noBtn');
const botones = document.querySelector(".botones");

noBtn.addEventListener('mouseover', function () {
    // Obtener dimensiones del contenedor y del botón
    const contenedorRect = botones.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    // Calcular límites dentro de los cuales el botón puede moverse
    const maxX = contenedorRect.width - btnRect.width;
    const maxY = contenedorRect.height - btnRect.height;

    // Generar nuevas posiciones aleatorias dentro de los límites
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

  // Aplicar la nueva posición en el eje X y Y
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
  
});

let audio = new Audio("canción.mp3");

// Mostrar la ventana emergente cuando se presiona "Sí"
yesBtn.addEventListener("click", function () {
    document.getElementById("overlay").classList.add("activo");

    // Iniciar la música
    audio.play().then(() => {
        console.log("Música reproduciéndose 🎶");
    }).catch(error => {
        console.log("Error al reproducir:", error);
    });

    audio.loop = true; // Hacer que la música se repita
});

    document.addEventListener("DOMContentLoaded", function () {
        const heartsContainer = document.createElement("div");
        heartsContainer.classList.add("hearts-container");
        document.body.appendChild(heartsContainer);

        function createHeart() {
            const heart = document.createElement("div");
            heart.classList.add("heart");

            // Posición aleatoria en el ancho de la pantalla
            heart.style.left = Math.random() * 100 + "vw";
            
            // Tamaño aleatorio
            let size = Math.random() * 20 + 10; // entre 10px y 30px
            heart.style.width = size + "px";
            heart.style.height = size + "px";

            // Duración aleatoria de animación
            heart.style.animationDuration = Math.random() * 3 + 3 + "s"; // entre 3s y 6s
            
            heartsContainer.appendChild(heart);

            // Eliminar corazones después de animación
            setTimeout(() => heart.remove(), 6000);
        }

        // Generar corazones cada 300ms para más efecto
        setInterval(createHeart, 300);
    });

    function typeWriterEffect(text, elementId, speed = 100, callback) {
        let i = 0;
        let element = document.getElementById(elementId);
        element.innerHTML = ""; // Asegurar que el texto esté vacío al inicio
        
        function typing() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(typing, speed);
            } else if (callback) {
                setTimeout(callback, 500); // Esperar un poco y luego ejecutar la función callback
            }
        }
    
        typing();
    }
    
    document.addEventListener("DOMContentLoaded", function () {
        const botones = document.querySelector(".botones");
        // Los botones ya están ocultos por CSS en el contenedor "botones"
        typeWriterEffect("¿Quieres volver conmigo?", "typewriter", 100, function() {
            botones.style.display = "flex"; 
            setTimeout(() => {
                botones.style.opacity = "1";
                botones.style.transform = "scale(1)";
}, 100);  // Pequeña espera para hacer el efecto más natural
        });
    });
