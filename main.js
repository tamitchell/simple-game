/*todo:

2.print attack details in html
3.prevent character respawn after KO
4.add reset game feature
5.style progress bars
6.fade attack buttons when disabled
1.Since there aren't enough gifs for each character animation each attack style will be pieced together using a sprite stylesheet and the steps() funciton in css
6.center buttons
4.add media query for attack animation so that when screen is a certain size characters don't pass each other

DONE:
1.toggle sprite images
*/

const hero = document.getElementById("hero");
const heroHealth = document.getElementById("healthHero");

const enemy = document.getElementById("enemy");
const enemyHealth = document.getElementById("healthEnemy");

// Sound
const sound = "./media/sound/";
const backgroundSong = new Audio(sound + "jiren-theme-8bit.mp3");

const gokuAttackSound = new Audio(sound + "strongpunch.mp3");
const gokuAttackVoice = new Audio(sound + "Goku_attack_yelp.mp3");
const gokuProtectSound = new Audio(sound + "protect_goku.mp3");
const gokuProtectVoice = new Audio(sound + "goku_protect_grunt.mp3");
const gokuSlamSound = new Audio(sound + "goku_slam_attack.mp3");
const gokuSlamVoice = new Audio(sound + "goku_slam_voice.mp3");

const ryuKickAttack = new Audio(sound + "ryu_kick.mp3");
const ryuKickVoice = new Audio(sound + "ryu_kick_voice.mp3");

// Images/GIFs
const gifBaseUrl = "https://piskel-imgstore-b.appspot.com/img/";

const gokuIdle = gifBaseUrl + "28151c38-85d6-11e8-9ea2-d5f6458d0832.gif";
const gokuAttack = gifBaseUrl + "d3d7c533-864e-11e8-a59c-5760cbc9b98b.gif";
const gokuProtect = gifBaseUrl + "8439b4ab-8652-11e8-a5a6-5760cbc9b98b.gif";
const gokuSlamDunk = gifBaseUrl + "b2571ae3-86a9-11e8-8773-8bccf7076e95.gif";

const ryuIdle = gifBaseUrl + "f3a51f07-85fc-11e8-b892-a5b6aa53e4a8.gif";
const ryuKick = gifBaseUrl + "5de4a854-86af-11e8-8e20-8bccf7076e95.gif";

// Logger/Messages
const battleLog = msg => (document.getElementById("battleLog").innerHTML = msg);
const resetLog = () => battleLog("What will Goku do?");

// Buttons
let allBtn = Array.from(document.querySelectorAll(".herobtn"));

window.onload = () => {
  backgroundSong.loop = true;
  backgroundSong.play();
  enemy.style.height = "220px";
  hero.style.height = "220px";
};

function pausePlay() {
  if (backgroundSong.paused) backgroundSong.play();
  else backgroundSong.pause();
}

//method by Dr Rudolf Winter @ http://users.aber.ac.uk/ruw/misc/swapimage.php
function toggleSprite(sprite, src1, src2) {
  // let sprite = document.getElementById(id);
  let spriteSrc = sprite.src;
  if (spriteSrc === src1) {
    sprite.src = src2;
  } else {
    sprite.src = src1;
  }
  sprite.style.height = "220px";
}

function disableMoveset() {
  allBtn.map(x => {
    x.disabled = true;
    x.classList.add("fade-moveset");
  });
}

function enableMoveset() {
  allBtn.map(x => {
    x.disabled = false;
    x.classList.remove("fade-moveset");
  });
}

setHeroSprite = state => hero.setAttribute("src", state);
setEnemySprite = state => enemy.setAttribute("src", state);

//works but for some reason works on every other click
async function attack() {
  disableMoveset();
  setHeroSprite(gokuAttack);
  gokuAttackVoice.play();
  gokuAttackSound.play();
  //damage dealt to enemy
  battleLog("Goku Attacks");
  await sleep(1000);
  enemyHealth.value -= 1050;
  setHeroSprite(gokuIdle);
  enemyReturnsAttack();
}

async function protect(id) {
    disableMoveset();
    setHeroSprite(gokuProtect);
    gokuProtectSound.play();
    gokuProtectVoice.play();
    //damage dealt to enemy
    battleLog("Goku Protects");
    await sleep(1000);
    enemyHealth.value -= 1350;
    setHeroSprite(gokuIdle);
    enemyReturnsAttack();
}

async function slamDunk(id) {
    disableMoveset();
    setHeroSprite(gokuSlamDunk);
    gokuSlamSound.play();
    gokuSlamVoice.play();
    //damage dealt to enemy
    battleLog("Goku Slam Dunks");
    await sleep(1000);
    enemyHealth.value -= 1350;
    setHeroSprite(gokuIdle);
    enemyReturnsAttack();
}

//enemy returns attack
async function enemyReturnsAttack() {
  await sleep(1000);
  setEnemySprite(ryuKick);
  ryuKickAttack.play();
  ryuKickVoice.play();
  console.log(heroHealth);
  await sleep(1000);
  heroHealth.value -= 1050;
  setEnemySprite(ryuIdle);
  checkHp();
  // setTimeout(, 2000);
  enableMoveset();
}

//this function checks to see the value of each character's Health to determine whether or not one has reached 0HP
async function checkHp() {
  console.log("Checking User HP...");

  if (heroHealth <= 0) {
    await sleep(1000);
    heroLost();
  } else if (enemyHealth <= 0) {
    await sleep(1000);
    heroLost();
  } else {
    return console.log("So good so far...");
  }
}

function heroLost() {
  disableMoveset();
  battleLog("Goku fainted!");
  hero.classList.add("fainted");
}

function enemyLost() {
  disableMoveset();
  battleLog("Ryu fainted!");
  enemy.classList.add("fainted");
}

sleep = milliSeconds =>
  new Promise(resolve => setTimeout(resolve, milliSeconds));
