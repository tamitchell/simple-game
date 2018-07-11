const attackBtn = document.getElementById('attackbtn');

const heroHealth = document.getElementById('healthHero').value;

let enemyHealth = document.getElementById('healthEnemy').value;

function soundBoard(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
}

//works but for some reason works on every other click
attackBtn.onclick = function () {
    //animation
    let moveCharacter = document.getElementById('hero');
    moveCharacter.classList.toggle('hero-attacking');

    //sound-effect

    let attackSound = new soundBoard("strongpunch.mp3");

    attackSound.play();

    //damage dealt to enemy

    let enemyDamageAmt = document.getElementById('healthEnemy').value -= 50;

    enemyHealth.innerHTML.value = enemyDamageAmt;
}

//define enemy attacks
function enemyAutoAttack() {
    let moveCharacter = document.querySelector('#enemy');


    moveCharacter.removeAttribute('src', 'https://i.imgur.com/yGp0EuO.gif');


    moveCharacter.setAttribute('src', 'http://www.fightersgeneration.com/characters3/ryu-hcfk.gif');

    moveCharacter.style.width = "400px";

    moveCharacter.style.transform = "translateX(-100px)";

    moveCharacter.style.transform = "scaleX(-1)"

    let heroDamageAmt = document.getElementById('healthHero').value -= 150;

}

//enemy returns attack

function enemyReturnsAttack() {
    if (attackBtn.onclick === true) {
        enemyAutoAttack();
    }
}

//debugger;
enemyReturnsAttack();
