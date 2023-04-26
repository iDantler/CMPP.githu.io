$(document).ready(function() {
    var textContainer = document.getElementById("text-container");
    var submitButton = document.querySelector(".submit-button");
    var inputBox = document.querySelector(".input-box");
    
    submitButton.addEventListener("click", function() {
      var text = inputBox.value;
      if (text !== "") {
        var newParagraph = document.createElement("p");
        newParagraph.innerText = text;
        textContainer.appendChild(newParagraph);
        inputBox.value = "";
      }
    });
  });
  