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


//    attackEnemy(enemyReturnsAttack());

let disableMoveset = document.querySelector('.container.controls').classList.add()


//works but for some reason works on every other click
let attackEnemy = attackBtn.onclick = function (event, callback) {
    //animation
    let moveCharacter = document.getElementById('hero');
    moveCharacter.classList.toggle('hero-attacking');

    //sound-effect

    let attackSound = new soundBoard("strongpunch.mp3");

    attackSound.play();

    //damage dealt to enemy

    let enemyDamageAmt = document.getElementById('healthEnemy').value -= 50;

    enemyHealth.innerHTML.value = enemyDamageAmt;

    callback();
}

//enemy returns attack
function enemyReturnsAttack() {

    enemyAutoAttack();


    //define enemy attacks
    function enemyAutoAttack() {

        let moveCharacter = document.querySelector('#enemy');
        moveCharacter.removeAttribute('src', 'https://i.imgur.com/yGp0EuO.gif');


        moveCharacter.setAttribute('src', 'https://piskel-imgstore-b.appspot.com/img/1271386b-853b-11e8-859f-a1429c5c6181.gif');

        moveCharacter.style.width = "500px";

        moveCharacter.style.transform = "scaleX(-1)"

        let heroDamageAmt = document.getElementById('healthHero').value -= 150;

    }
}
