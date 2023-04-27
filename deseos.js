$(document).ready(function() {
  var textContainer = document.getElementById("text-container");
  var submitButton = document.querySelector(".submit-button");
  var inputBox = document.querySelector(".input-box");
  
  // Obtener el deseo del día actual del objeto localStorage
  var today = new Date().toLocaleDateString();
  var todayWish = localStorage.getItem(today);
  
  if (todayWish) {
    // Si ya hay un deseo para hoy, mostrarlo en el contenedor
    var newParagraph = document.createElement("p");
    newParagraph.innerText = todayWish;
    textContainer.appendChild(newParagraph);
  }
  
  submitButton.addEventListener("click", function() {
    var text = inputBox.value;
    if (text !== "") {
      if (todayWish) {
        // Si ya hay un deseo para hoy, lanzar un error
        alert("Ya has ingresado un deseo para hoy.");
      } else {
        // Si no hay un deseo para hoy, agregarlo y almacenarlo en el objeto localStorage
        var newParagraph = document.createElement("p");
        newParagraph.innerText = text;
        textContainer.appendChild(newParagraph);
        inputBox.value = "";
        
        localStorage.setItem(today, text);
        
        // Enviar el deseo a la hoja de cálculo
        $.ajax({
          url:"https://api.apispreadsheets.com/data/sF94Hh0T9oktrxei/",
          type:"post",
          data:{
            "Deseos:": text
          },
          success: function(){
            alert("Tu deseo está siendo procesado ♥")
          },
          error: function(){
            alert("Aiudaa, me caí... Awanta tantito.")
          }
        });
      }
    }
  });
});

//localStorage.clear();