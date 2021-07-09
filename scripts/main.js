let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    console.log(mySrc)
    if (mySrc === 'images/me.png') {
        myImage.setAttribute('src', "images/me2.jpg");
    } else {
        myImage.setAttribute('src', 'images/me.png')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name: ');
    myName = capitzlize(myName);
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool ' + myName;
    }
}

function capitzlize(name) {
    let capName = name[0].toUpperCase()+ name.slice(1);
    return capName;
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = "Mozilla is cool " + storedName;
}

myButton.onclick = function () {
    setUserName();
}