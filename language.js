var animationSpeed = 400;
var classArray = [];

function words2Faces(userText) {
  var userTextL = userText.toLowerCase();
  var punc = /[ï¿½`~\"\/'_\-[\]{}()*+!?%&.,\\^$|#@<>|+=;:\u2018\u2019\u201C\u201D]/g;
  var noPunc = userTextL.replace(punc,"");
  var words = noPunc.split("");

  for (var i = 0; i < words.length; i++) {
    if (words[i] === " ") {
      words.splice(i, 1);
    } else if (words.indexOf(words[i]) == words.length) {
      return false;
    }
  }

  var allofEm = words;

  for (var i = 0; i < allofEm.length; i++) {
    if (allofEm[i] == "a") {
      allofEm[i] = "asl-A";
    } else if (allofEm[i] == "b") {
      allofEm[i] = "asl-B";
    } else if (allofEm[i] == "c") {
      allofEm[i] = "asl-C";
    } else if (allofEm[i] == "d") {
      allofEm[i] = "asl-D";
    } else if (allofEm[i] == "e") {
      allofEm[i] = "asl-E";
    } else if (allofEm[i] == "f") {
      allofEm[i] = "asl-F";
    } else if (allofEm[i] == "g") {
      allofEm[i] = "asl-G";
    } else if (allofEm[i] == "h") {
      allofEm[i] = "asl-H";
    } else if (allofEm[i] == "i") {
      allofEm[i] = "asl-I";
    } else if (allofEm[i] == "j") {
      allofEm[i] = "asl-J";
    } else if (allofEm[i] == "k") {
      allofEm[i] = "asl-K";
    } else if (allofEm[i] == "l") {
      allofEm[i] = "asl-L";
    } else if (allofEm[i] == "m") {
      allofEm[i] = "asl-M";
    } else if (allofEm[i] == "n") {
      allofEm[i] = "asl-N";
    } else if (allofEm[i] == "o") {
      allofEm[i] = "asl-O";
    } else if (allofEm[i] == "p") {
      allofEm[i] = "asl-P";
    } else if (allofEm[i] == "q") {
      allofEm[i] = "asl-Q";
    } else if (allofEm[i] == "r") {
      allofEm[i] = "asl-R";
    } else if (allofEm[i] == "s") {
      allofEm[i] = "asl-S";
    } else if (allofEm[i] == "t") {
      allofEm[i] = "asl-T";
    } else if (allofEm[i] == "u") {
      allofEm[i] = "asl-U";
    } else if (allofEm[i] == "v") {
      allofEm[i] = "asl-V";
    } else if (allofEm[i] == "w") {
      allofEm[i] = "asl-W";
    } else if (allofEm[i] == "x") {
      allofEm[i] = "asl-X";
    } else if (allofEm[i] == "y") {
      allofEm[i] = "asl-Y";
    } else if (allofEm[i] == "z") {
      allofEm[i] = "asl-Z";
    }
  }

  
  //add a rest face at the end
  //allofEm.push("rest");

  //this function spits out an array of class names coresponding to the animation face of each phoneme when called
  return allofEm;
} //END

function loopEm(putMeHere) {
  classArray = [];
  var userText = document.getElementById("what2Say").value;
  classArray = words2Faces(userText);

  var classChanges = 0;

function nextClass() {
  gsap.delayedCall(animationSpeed / 1000, function() {
    if (classChanges != 0) {
      classArray.push(classArray.shift());
    }

    var c = document.getElementById(putMeHere);
    c.className = "asl";
    c.classList.add(classArray[0]);

    classChanges++;

    if (classChanges < classArray.length + 1) {
      nextClass();
    } else {
      c.className = "";
      c.classList.add("asl");
      c.classList.add(classArray[classArray.length - 1]);
      return false;
    }
  });
}

  nextClass();

  document.getElementById("spelledOut").innerHTML = "";

  for (var i = 0; i < classArray.length; i++) {
    var className = classArray[i];
    var title = className.charAt(4);

    if (className === "asl-U" || className === "asl-W" || className === "asl-R" || className === "asl-K" || className === "asl-Z" || className === "asl-V" || className === "asl-B" || className === "asl-F" || className === "asl-D") {
      document.getElementById("spelledOut").innerHTML += "<span class='asl3 " + className + "' title='" + title + "'></span><br/>";
    } else if (className === "asl-g" || className === "asl-h") {
      document.getElementById("spelledOut").innerHTML += "<span class='asl4 " + className + "' title='" + title + "'></span><br/>";
    } else {
      document.getElementById("spelledOut").innerHTML += "<span class='asl2 " + className + "' title='" + title + "'></span><br/>";
    }
  }
}

function aslContainer() {
  loopEm("aslContainer");
}

document.getElementById("aslContainer").addEventListener("click", aslContainer);
document.addEventListener("keydown", keyDownHandler, false);

function keyDownHandler(e) {
  if (e.keyCode == 13) {
    loopEm("aslContainer");
  }
}