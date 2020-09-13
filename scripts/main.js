let myImage1 = document.getElementById('itachi1');
myImage1.onclick = function() {
    if(myImage1.getAttribute('src') === 'images/itachi-arrive.jpg') {
      myImage1.setAttribute('src','images/itachi-teashop.png');
    }else if(myImage1.getAttribute('src') === 'images/itachi-teashop.png') {
        myImage1.setAttribute('src','images/itachi-stopped.jpg');
    }else {
      myImage1.setAttribute('src','images/itachi-arrive.jpg');
    }}


let myImage2 = document.getElementById('itachi2');
myImage2.onclick = function() {
    if(myImage2.getAttribute('src') === 'images/itachi-bye.jpg') {
        myImage2.setAttribute('src','images/itachi-dies.jpg');
      }else if(myImage2.getAttribute('src') === 'images/itachi-dies.jpg') {
        myImage2.setAttribute('src','images/itachi-dead.png');
    } else {
        myImage2.setAttribute('src','images/itachi-bye.jpg');
      }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Itachi sees you, ' + myName;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }
