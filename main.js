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

    let damageAmt = document.getElementById('healthEnemy').value -= 50;

    enemyHealth.innerHTML.value = damageAmt;
}
