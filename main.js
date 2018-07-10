let attackBtn = document.getElementById('attackbtn');

//works but for some reason works on every other click
attackBtn.onclick = function () {
    let moveCharacter = document.getElementById('hero');
    moveCharacter.classList.toggle('hero-attacking');
}
