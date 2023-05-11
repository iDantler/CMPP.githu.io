$(document).ready(function() {
  var textContainer = document.getElementById("text-container");
  var submitButton = document.querySelector(".submit-button");
  var inputBox = document.querySelector(".input-box");
  
  submitButton.addEventListener("click", function() {
    var text = inputBox.value;
    if (text !== "") {
      // Obtener el deseo del local storage y comprobar si ya hay uno guardado para hoy
      var storedWish = localStorage.getItem("deseo");
      var today = new Date();
      var storedDate = new Date(storedWish);
      if (storedWish && storedDate.getDate() === today.getDate() && storedDate.getMonth() === today.getMonth() && storedDate.getFullYear() === today.getFullYear()) {
        Swal.fire({
          icon: 'error',
          title: 'Ay no :(',
          text: 'Con ese suficiente por hoy...',
          footer: '<a href="https://i.imgur.com/gyg1hJn.mp4">Ven mañana y coloca otro deseo.</a>'
        });
        return;
      }
      // Guardar el deseo en el local storage
      localStorage.setItem("deseo", today.toString());
      
      // Enviar el deseo a la hoja de cálculo usando AJAX
      $.ajax({
        url:"https://api.apispreadsheets.com/data/sF94Hh0T9oktrxei/",
        type:"post",
        data:{
          "Deseos:": text
        },
        success: function(){
          Swal.fire({
            icon: 'success',
            title: 'FIUUAAAUUUMM',
            text: 'Tu deseo está siendo procesado ♥',
          });
          setTimeout(function() {
            location.reload();
          }, 3000);
        },
        error: function(){
          console.log("There was an error :(")
        }
      });
    }
  });
});



//Esto sera para alternat el abrir y cerrar 
const toggleWidget = document.getElementById('deseo-pao');
const widgetContent = document.querySelector('.widget-content');

toggleWidget.addEventListener('click', () => {
  if (widgetContent.style.display === 'block') {
    widgetContent.style.display = 'none';
  } else {
    widgetContent.style.display = 'block';
  }
});

//Este codigo sirve para avanzar y atrasar las paginas
const pages = document.querySelectorAll('.page');
const prevButton = document.querySelector('.prev-page');
const nextButton = document.querySelector('.next-page');
const pageIndicator = document.querySelector('.page-indicator');
let currentPageIndex = 0;
const pageCount = pages.length;

function showPage(pageIndex) {
  pages.forEach((page, index) => {
    if (index === pageIndex) {
      page.style.display = 'block';
    } else {
      page.style.display = 'none';
    }
  });

  currentPageIndex = pageIndex;
  updatePageIndicator();

  if (currentPageIndex === 0) {
    prevButton.classList.add('disabled');
  } else {
    prevButton.classList.remove('disabled');
  }

  if (currentPageIndex === pageCount - 1) {
    nextButton.classList.add('disabled');
  } else {
    nextButton.classList.remove('disabled');
  }
}

function updatePageIndicator() {
  pageIndicator.textContent = `Página ${currentPageIndex + 1} de ${pageCount}`;
}

prevButton.addEventListener('click', () => {
  if (currentPageIndex > 0) {
    showPage(currentPageIndex - 1);
  }
});

nextButton.addEventListener('click', () => {
  if (currentPageIndex < pageCount - 1) {
    showPage(currentPageIndex + 1);
  }
});

showPage(currentPageIndex);

//Este sirve para cuando de click al Deseo de Shion, me lance una alerta.
const deseoPao = document.getElementById("deseo-pao");
let alertaMostrada = false;

deseoPao.addEventListener("click", () => {
  if (!alertaMostrada) {
    Swal.fire({
      icon: 'info',
      title: '¡ANTES DE CONTINUAR!',
      text: 'Esta historia no está basada en hechos reales, todo lo visto y creado en esta página es con el fin de entretener y hacer algo diferente para ti.',
    });
    alertaMostrada = true;
  }
});

//Esto redirige a la pagina sign, luego de haber dado click al Deseo de Lenguaje de Señas.
function redirectToSignLanguage() {
  window.location.href = "sign_language.html";
}


//localStorage.clear();