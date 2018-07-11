let attackBtn = document.getElementById('attackbtn');
let heroHealth = document.getElementById('heroHealth');
let enemyHealth = document.getElementById('enemyHealth');

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
    let moveCharacter = document.getElementById('hero');
    moveCharacter.classList.toggle('hero-attacking');

    let attackSound = new soundBoard("strongpunch.mp3");

    attackSound.play();

    enemyHealth.value -= 10;

}
