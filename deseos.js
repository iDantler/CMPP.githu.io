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

      // Agregar el deseo al contenedor de textos
      var newParagraph = document.createElement("p");
      newParagraph.innerText = text;
      textContainer.appendChild(newParagraph);
      inputBox.value = "";
      
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

localStorage.clear();