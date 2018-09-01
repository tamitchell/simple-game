# [Goku vs Ryu: A Study of Turned-based RPG and Pokemon Mechanics](https://tamitchell.github.io/simple-game)

The objective of this project was the study and later implement the game theory and logic of Gamefreak's Pokemon franchise using character sprites such as Son Goku from Akira Toriyama's Dragon Ball Z and Ryu from Takashi Nishiyama's Street Fighter series. This study was done for educational purposes only and nothing has been used to make a profit or sale.  

With that being said, enjoy!

## What's Under the Hood? A quick look at the complexity of Pokemon Battle Systems

For someone new to the franchise a simple glance at a Pokemon battle appears as a mere Turns-based RPG game. Being turns-based, as [Scratch Wiki](https://en.scratch-wiki.info/wiki/Turn-Based_RPG) explains, "is a battle that consists of turns where a player can command their characters to perform various actions to defeat opponents." 

### Languages and Tools Used

This game was built using HTML, SASS(SCSS)/Compass, and plain ol' Vanilla Javascript.

#### Attack Noises
[Taira-Komori](http://taira-komori.jpn.org/attack01en.html) is a sound engineer living in Japan. They have recorded over 1400 by his/herself. I am allowed to use her sounds both commercial and non-commercial purposes.

#### Voices

Goku - "Dragon Ball Xenoverse 2”
			
Son Goku's voice was taken from the installment ["Dragon Ball Xenoverse 2"](https://en.wikipedia.org/wiki/Dragon_Ball_Xenoverse_2). You can find the entire games full soundboard [here](https://www.sounds-resource.com/pc_computer/dragonballxenoverse2/) provided by a dedicated team of forum-members.

Ryu's voice is taken from [Super Smash Brothers Bros 4](https://www.ssbwiki.com/Ryu_(SSB4)), however I found the actual file on [Youtube](https://www.youtube.com/watch?v=WeqWtBUhfqE).

#### Sprites

Goku's sprite is from the game from the game [“Dragon Ball Z: Extreme Butōden”](https://www.spriters-resource.com/3ds/dragonballzextremebutoden/sheet/67255/)

To create the sprites I simply downloaded them from [Spriters-Resource.com](https://www.spriters-resource.com/), clipped the individual images with an Online sprite sheet cutter / splitter / decompiler, and later recompile the image as a gif in Piskel with control speed, duration, and size.

Ryu's sprite is from the game [“Street Fighter III: New Generation"](http://wiki.shoryuken.com/Ryu_(3S)).

[Stage](https://theultralinx.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTI5MDI0MjczNjc4NTA1MjM0/do2wa2j.webp)

This image was found by Oliur on UltraLinx.com in his post titled, “Stunning Animated GIFs of Backgrounds From Old Fighting Games” However, if anyone knows the title of the original game and/or artist please contact me so I can update this reference.

### Planning

To be brief, the planning of my code went quite fast, as I anticipated a lot the issues in building this project would come from actually creating the stage and design.

#### Pseudo Code

```
function startGame(){
	//a button that leads to the start of game, characters appearing on platform, healthbars replinshing, and music playing
}

function gokuAttack(){
	//a button that causes Goku to attack his opponent, diminish some HP (Healthpoint), trigger a return attack
}

function returnAttack(){
	//an event listener, that waits for Goku's attack to finish before it responds, then attacks. 
	//also decreases Goku's health
	//should also disable Goku's moveset to control fight pace
}

function gameOver() {
	//should run when either character runs out of HP
	//should alert the user of who won and who lost
	//should carry out a losing animation
	//should disable attack buttons (for user)
	//should stop music
}

function resetGame() {
	//still debating the true purpose of this game,in theory, it should have the same functionality of startGame()
}

```

The above was my MVP (Minimal Viable Project)

### Seeing Output and Hitting Bumps


Explain what these tests test and why

```
Give an example
```

## Deployment

This was deployed on with gh-pages, but after refactoring it will be deployed to Heroku.

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

I used [Github](http://github.com/) for versioning. For the versions available, see the [tags on this repository](https://github.com/tamitchell/simple-game/tags). 

## Authors

* **Tasha Mitchell** - If you are interested in seeing more of my work, you can view my portfolio - [Tasha Mitchell](www.tamitchell.github.io)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## Acknowledgments

Thank you to my professors and classmates for their guidance and inspiration during the project!!
