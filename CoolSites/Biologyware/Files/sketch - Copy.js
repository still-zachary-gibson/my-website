function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  stroke("black");
  noSmooth();
  angleMode(DEGREES);
  frameRate(60);
  title.play("Song");

  input = createFileInput(handleScore);
}

function handleScore(file) {
  if (file.type === "text") {
    scoreInfo = file.data;
    ScoreArray = scoreInfo.split(";");
    highScoreName = ScoreArray[0].split(",");
    highScoreNum = ScoreArray[1].split(",");
    input.remove();
  }
}

let WarioMode = false;

function preload() {
  trueDoorLeft = loadImage("Elevator/SuccessLeft.png");
  trueDoorRight = loadImage("Elevator/SuccessRight.png");
  falseDoorLeft = loadImage("Elevator/FailLeft.png");
  falseDoorRight = loadImage("Elevator/FailRight.png");
  DoorLeft = loadImage("Elevator/Left.png");
  DoorRight = loadImage("Elevator/Right.png");
  Lives = loadImage("Elevator/Paper.png");
  instructMouse = loadImage("Elevator/Instruct Mouse.png");
  instructKey = loadImage("Elevator/Instruct Key.png");
  instructNone = loadImage("Elevator/Instruct No.png");
  falseLives = loadImage("Elevator/FailPaper.png");
  trueLives = loadImage("Elevator/SuccessPaper.png");

  microGame1BG = loadImage("MicroGame1/Background.png");
  trueCancerCell = loadImage("MicroGame1/CancerCellGood.png");
  falseCancerCell = loadImage("MicroGame1/CancerCellBad.png");

  Cork = loadImage("MicroGame2/Bottlecap.png");
  Bottle = loadImage("MicroGame2/Bottle.png");

  EnzymeR = loadImage("MicroGame3/EnzymeRight.png");
  EnzymeL = loadImage("MicroGame3/EnzymeLeft.png");
  EnzymeM = loadImage("MicroGame3/EnzymeMiddle.png");
  ProteinR = loadImage("MicroGame3/ProteinRight.png");
  ProteinL = loadImage("MicroGame3/ProteinLeft.png");
  ProteinM = loadImage("MicroGame3/ProteinMiddle.png");

  DNAFloor = loadImage("MicroGame4/DNA Chain.png");
  DNAPlayer = loadImage("MicroGame4/DNA.png");

  Gorilla = loadImage("MicroGame5/Gorilla.png");

  game7ProteinGuy0 = loadImage("MicroGame7/Real.png");
  game7ProteinGuy1 = loadImage("MicroGame7/Todd.png");
  game7ProteinGuy2 = loadImage("MicroGame7/Purple.png");
  game7ProteinGuy3 = loadImage("MicroGame7/No Tie.png");
  game7ProteinGuy4 = loadImage("MicroGame7/Red.png");
  game7Passport = loadImage("MicroGame7/Passport.png");

  game8Grass = loadImage("MicroGame8/Grass.png");
  game8Bug = loadImage("MicroGame8/Bug.png");
  game8Rat = loadImage("MicroGame8/Rat.png");
  game8Cat = loadImage("MicroGame8/Cat.png");
  game8Bear = loadImage("MicroGame8/Bear.png");
  game8Sun = loadImage("MicroGame8/Sun.png");
  game8Plankton = loadImage("MicroGame8/Plankton.png");
  game8Coral = loadImage("MicroGame8/Coral.png");
  game8Fish = loadImage("MicroGame8/Fish.png");
  game8Shark = loadImage("MicroGame8/Shark.png");
}

let microGamePicked = -1;
let timer = 0;
let replacer = 0;
let calmTimer = 0;
let game2ModifyY = 0;
let winning = false;
let boss = false;
let level = 0;
let speedUpCount = 6; //10
let nameToPutIn = "";
let pressedKey = "";
let gamesBeaten = 0;
let okayitsgood = false;
let mouseState = "not clicked";
let difficulty = 2;
let lives = 4;
let winOrNot = "elevator";
let door1x = -200;
let door2x = 400;
let antiDie = true;
let finalQuestions = [
  "What is the\npowerhouse\nof the cell?",
  "What is a cell\n with no nucleus?",
  "What occurs when\nmost of a\nspecies dies?",
  "What is the process\n where a cell divides?",
  "What chart is used\nto determine what\n genes are passed down?",
  "What is DNA's\n structure?",
  "What are different forms\n of genes refered to as?",
  "Who came up with\nthe concepts we use\ntoday in Genetics?",
  "What does DNA\nstand for?",
  "What are the 4\n bases of DNA?\n(Alphabetical Order!)\n(Just put spaces.)",
  "What is it called\nwhen both versions of\na trait show up?",
  "What are the 3\ncharacteristics used to\nidentify different\nchromosones?\n(Alphabetical Order!)",
];
let finalAnswers = [
  "MITOCHONDRIA",
  "PROKARYOTE",
  "BOTTLENECK EFFECT",
  "MITOSIS",
  "PUNNETT SQUARE",
  "DOUBLE HELIX",
  "ALLELES",
  "GREGOR MENDEL",
  "DEOXYRIBONUCLEIC ACID",
  "ADENINE CYTOSINE GUANINE THYMINE",
  "CODOMINANCE",
  "BANDING PATTERN CENTROMERE POSITION SIZE",
];
let finalPair = 0;
let swapArray = [];
let livey = 450;
let nameEnterScreen = false;
let foodChains = [
  ["Grass", "Bug", "Rat", "Cat", "Bear"],
  ["Sun", "Plankton", "Coral", "Fish", "Shark"],
];
let game8Chain = [];
let microGameTimes = [300, 300, 500, 300, 800, 300, 500, 600, 99999];
let microGameMode = [
  "Mouse",
  "Key",
  "Mouse",
  "Key",
  "None",
  "Mouse",
  "Mouse",
  "Mouse",
  "Key",
];
let microGameInstructions = [
  "Find It!",
  "Jump!",
  "Which Enzyme?",
  "Slot In!",
  "Stay Still.",
  "Replant!",
  "What's Wrong?",
  "Order It!",
  "Answer!",
];
let selection3 = 0;
let EnzymeOrder = [];
let EnzymeRotation = [];
let lastGame = 0;
let shiftMode = false;
let paused = false;
let highScoreNum = [0, 0, 0, 0, 0];
let TreeArray = [
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
];
let highScoreName = [
  "[Nobody]",
  "[Nobody]",
  "[Nobody]",
  "[Nobody]",
  "[Nobody]",
];
let idfkman = ["R", "M", "L"];
let zoomNum = 1;
let failClips = [
  "mamamia",
  "ohboy",
  "hey",
  "nono",
  "arghnono",
  "wah",
  "idk",
  "weh",
];
let winClips = [
  "yahoo1",
  "yahoo2",
  "excellent",
  "alright",
  "haha",
  "ok",
  "yeah",
  "ha",
  "wow",
];
let startClips = ["herewego", "goodluck"];

let music = new Howl({
  src: [
    "Sounds/WarioWare, Inc. All Characters Jingles Microgames Win & Lose Music (128).mp3",
  ],
  volume: 0.8,
  sprite: {
    intro: [138000, 1670],
    jingle: [2100, 1670],
    win: [6100, 1520],
    lose: [140000, 1520],
    speedUp: [146400, 3520],
    gameOver: [175550, 3520],
    bossWin: [155600, 3000],
    bossLose: [172400, 2000],
  },
});

let voice = new Howl({
  src: ["Sounds/Wario Land 4 - Wario Voice Clips (64).mp3"],
  volume: 1,
  sprite: {
    yahoo1: [11850, 1510],
    yahoo2: [16750, 1510],
    excellent: [23550, 1510],
    herewego: [31450, 1500],
    mamamia: [41050, 1500],
    ohboy: [43590, 1500],
    alright: [49200, 1500],
    goodluck: [57705, 1500],
    hey: [69950, 1500],
    haha: [78150, 1500],
    ok: [83000, 1500],
    yeah: [89200, 1500],
    nono: [98100, 1500],
    arghnono: [100150, 1500],
    wah: [104500, 1500],
    idk: [112700, 1500],
    ha: [118000, 1500],
    weh: [119800, 1500],
    wow: [121800, 1500],
  },
});

let title = new Howl({
  src: [
    "Sounds/main-menu-warioware-inc-mega-microgames-ost-128-ytshorts.savetube.me.mp3",
  ],
  volume: 0.8,
  sprite: {
    Song: [0, 8150, false],
    Song2: [8150, 24300, true],
  },
});

let funnyThing = 0;

title.on("end", function (mama) {
  if (funnyThing != mama) {
    title.stop();
    title.play("Song2");
    funnyThing = mama;
  }
});

let idkmafu = "fuck";

music.on("play", function (mama) {
  idkmafu = mama;
});

let song1 = new Howl({
  src: [
    "Sounds/MicroGames/that-stupid-pit-sonic-shorts-volume-8-128-ytshorts.savetube.me.mp3",
  ],
  volume: 0.8,
  sprite: {
    Song: [0, 10000],
  },
});
let song2 = new Howl({
  src: [
    "Sounds/MicroGames/overworld-theme-super-mario-run-soundtrack-ost-128-ytshorts.savetube.me.mp3",
  ],
  volume: 0.8,
  sprite: {
    Song: [1000, 10000],
  },
});
let song3 = new Howl({
  src: [
    "Sounds/MicroGames/title-screen-brain-age-2-more-training-in-minutes-a-day-ost-128-ytshorts.savetube.me.mp3",
  ],
  volume: 0.8,
  sprite: {
    Song: [3760, 10000],
  },
});
let song4 = new Howl({
  src: [
    "Sounds/MicroGames/break-the-targets-super-smash-bros-melee-128-ytshorts.savetube.me.mp3",
  ],
  volume: 0.6,
  sprite: {
    Song: [7000, 10000],
  },
});

let song5 = new Howl({
  src: [
    "Sounds/MicroGames/break-the-targets-super-smash-bros-melee-128-ytshorts.savetube.me.mp3",
  ],
  volume: 0,
  sprite: {
    Song: [7000, 10000],
  },
});

let song6 = new Howl({
  src: [
    "Sounds/MicroGames/lost-woods-the-legend-of-zelda-ocarina-of-time-128-ytshorts.savetube.me.mp3",
  ],
  volume: 0.6,
  sprite: {
    Song: [2150, 10000],
  },
});

let song7 = new Howl({
  src: [
    "Sounds/MicroGames/papers-please-theme-song-128-ytshorts.savetube.me.mp3",
  ],
  volume: 0.6,
  sprite: {
    Song: [2210, 10000],
  },
});

let song8 = new Howl({
  src: ["Sounds/MicroGames/jeopardy-theme-128-ytshorts.savetube.me.mp3"],
  volume: 0.6,
  sprite: {
    Song: [1110, 10000],
  },
});

let song9 = new Howl({
  src: [
    "Sounds/MicroGames/wario-s-touch-training-boss-you-break-it-you-buy-it-warioware-touched-soundtrack-128-ytshorts.savetube.me.mp3",
  ],
  volume: 0.6,
  sprite: {
    Song: [0, 8000, true],
  },
});

function draw() {
  //console.log(getTargetFrameRate() - frameRate())
  scale(zoomNum);
  //console.log(music._sprite)
  if (microGamePicked == -1) {
    background("lightblue");
    textSize(64);
    fill("white");
    strokeWeight(2);
    text("Biologyware", width / (2 * zoomNum), height / (3 * zoomNum));

    textSize(32);
    text(
      "Press Enter to Start",
      width / (2 * zoomNum),
      height / (1.5 * zoomNum)
    );
    if (getTargetFrameRate() - frameRate() > 10 && okayitsgood == false) {
      background("black");
      text("psst, wait a bit", width / (2 * zoomNum), height / (3 * zoomNum));
      text(
        Math.floor(frameRate()) + " FPS",
        width / (2 * zoomNum),
        height / (1.5 * zoomNum)
      );
    } else {
      okayitsgood = true;
      if (pressedKey == "=Pressed") {
        zoomNum++;
        nameToPutIn = "";
        resizeCanvas(400 * zoomNum, 400 * zoomNum);
      }
      if (pressedKey == "-Pressed") {
        if (zoomNum > 1) {
          zoomNum--;
          resizeCanvas(400 * zoomNum, 400 * zoomNum);
        }
      }
      if (pressedKey == "wPressed") {
        if (WarioMode == true) {
          voice.stop();
          WarioMode = false;
          voice.play("wah");
        } else {
          voice.stop();
          WarioMode = true;
          voice.play("ha");
        }
      }
      if (pressedKey == "EnterPressed") {
        if (WarioMode == true) {
          voice.play(startClips[Math.floor(Math.random() * startClips.length)]);
        }
        title.stop();
        music.play("intro");
        level = 0;
        gamesBeaten = 0;
        microGamePicked = 0;
        calmTimer = 1990;
        timer = -100;
        winOrNot = "";
      }
    }
  } else {
    if (microGamePicked == 0) {
      if (lives > 0) {
        title.stop();
      }
      if (
        (pressedKey == "EnterPressed" || pressedKey == "EscapePressed") &&
        paused == false &&
        lives > 0
      ) {
        antiDie = music.playing();
        idkmanthisisdumb = music.seek();
        music.stop();
        paused = true;
        noLoop();
      }
      if (calmTimer > 1560) {
        background("lightblue");
        if (calmTimer < 1570) {
          calmTimer = 304;
        }
      }
      calmTimer -= difficulty * 2;
      if (lives == 0) {
        calmTimer = 99;
      }
      if (calmTimer <= 0 && calmTimer > -10) {
        calmTimer = -100;
        microGamePicked = Math.ceil(Math.random() * microGameTimes.length);
        while (
          microGamePicked == lastGame ||
          (microGamePicked == 9 && boss == false)
        ) {
          microGamePicked = Math.ceil(Math.random() * microGameTimes.length);
        }
        //microGamePicked = 9;
        if (boss == true) {
          microGamePicked = 9;
          if (WarioMode == true) {
            voice.play(
              startClips[Math.floor(Math.random() * startClips.length)]
            );
          }
        }
        timer = microGameTimes[microGamePicked - 1];
        winning = false;
        startRunningIt = 50;
        eval("setup" + microGamePicked + "()");
        eval("song" + microGamePicked).play("Song");
        eval("song" + microGamePicked).rate(difficulty / 2);
      }
    }

    if (microGamePicked != 0) {
      eval("draw" + microGamePicked + "()");
      colorThing = (timer / microGameTimes[microGamePicked - 1]) * 255;
      fill(255, colorThing, colorThing);

      stroke("black");
      strokeWeight(2);
      if (boss == false) {
        rect(10, 380, (timer / microGameTimes[microGamePicked - 1]) * 380, 10);
      }
    }
    if (timer > -1) {
      timer -= difficulty;
    }

    if (timer <= 0 && timer > -10) {
      calmTimer = 1560;
      timer = -100;
      if (boss == true) {
        if (level < 2) {
          level++;
        }
        if (winning == true && lives < 4) {
          lives++;
        }
      }
      boss = false;
      eval("song" + microGamePicked).stop();
      lastGame = microGamePicked;
      if (winning == false) {
        lives--;
        if (lives > 0) {
          music.play("lose");
        } else {
          music.rate(1);
          music.play("gameOver");
          music.rate(1);
          for (i = 0; i < 5; i++) {
            if (gamesBeaten > highScoreNum[i]) {
              nameEnterScreen = true;
              replacer = i;
              i = 7;
              nameToPutIn = "";
            }
          }
        }

        if (WarioMode == true) {
          if (
            microGamePicked != 5 &&
            microGamePicked != 4 &&
            microGamePicked != 9 &&
            microGamePicked != 2 &&
            !(microGamePicked == 3 && hasClicked3 == true) &&
            microGamePicked != 7
          ) {
            voice.play(failClips[Math.floor(Math.random() * failClips.length)]);
          }
        }
      } else {
        music.play("win");
        if (WarioMode == true) {
          if (
            microGamePicked != 1 &&
            microGamePicked != 3 &&
            microGamePicked != 4 &&
            microGamePicked != 6 &&
            microGamePicked != 7 &&
            microGamePicked != 8 &&
            microGamePicked != 9
          ) {
            voice.play(winClips[Math.floor(Math.random() * winClips.length)]);
          }
        }
      }
      music.rate(difficulty / 2);
      // eval("unload" + microGamePicked + "()");
      microGamePicked = 0;
      gamesBeaten++;
      winOrNot = winning;
    }
    if (calmTimer > 0 || startRunningIt > 0) {
      if (calmTimer > 0) {
        if (door1x < 0) {
          door1x += 4 * difficulty;
        }
        if (door2x > 200) {
          door2x -= 4 * difficulty;
        }
        if (livey > 300) {
          livey -= 4 * difficulty;
        }
      } else {
        if (door1x > -200) {
          door1x -= 8 * difficulty;
        }
        if (door2x < 400) {
          door2x += 8 * difficulty;
        }
        if (livey < 450) {
          livey += 8 * difficulty;
        }
      }
      textToSay = gamesBeaten;
      if (calmTimer < 1180 && calmTimer > 300) {
        if (gamesBeaten % speedUpCount == 0 && gamesBeaten != 0 && lives > 0) {
          if (gamesBeaten % (speedUpCount * 3) == 0 /*&& boss == false*/) {
            difficulty = 2;
            boss = true;
            music.rate(1);
            if (winOrNot !== "") {
              music.play("speedUp");
            }
            textToSay = "Boss Stage!";
          } else {
            textToSay = "Speed UP!";
            if (winOrNot !== "") {
              music.play("speedUp");
            } else {
              if (calmTimer < 310) {
                difficulty++;
                calmTimer = 300;
              }
            }
          }
        } else {
          calmTimer = 300;
        }
        winOrNot = "";
      }
      if (calmTimer == 300) {
        music.play("jingle");
      }
      if (winOrNot === "") {
        theMultipler = 0;
      } else {
        theMultipler = 200;
      }
      image(
        eval(winOrNot + "DoorLeft"),
        door1x,
        0,
        200,
        400,
        (Math.floor(frameCount / 2) % 4) * theMultipler,
        0,
        200,
        400
      );
      image(
        eval(winOrNot + "DoorRight"),
        door2x,
        0,
        200,
        400,
        (Math.floor(frameCount / 2) % 4) * theMultipler,
        0,
        200,
        400
      );
      for (i = 4 - lives; i < 4; i++) {
        image(
          eval(winOrNot + "Lives"),
          width / (3 * zoomNum) + 45 + 60 * (i - 2),
          livey,
          100,
          100,
          (Math.floor(frameCount / 2) % 4) * 50,
          0,
          50,
          50
        );
      }
      if (calmTimer > 0) {
        textSize(30);
        fill("white");
        text(textToSay, width / (2 * zoomNum), 30);
      }
      if (calmTimer <= 0 && startRunningIt > 0) {
        textShit = 230 - startRunningIt * 4;
        if (textShit > 120) {
          textShit = 0.01;
        }
        if (textShit > 80) {
          textShit = 80;
        }
        textSize(textShit);
        strokeWeight(textShit / 16);
        text(
          microGameInstructions[microGamePicked - 1],
          width / (2 * zoomNum),
          height / (2 * zoomNum)
        );
        image(
          eval("instruct" + microGameMode[microGamePicked - 1]),
          width / zoomNum - 50,
          height / zoomNum - 50
        );
      }
      music.rate(difficulty / 2);
      if (lives == 0) {
        if (music.playing() == false && title.playing() == false) {
          title.play("Song");
        }
        textSize(64);
        strokeWeight(2);
        text("GAME OVER", width / (2 * zoomNum), 70);
        textSize(32);
        text(
          "Press Enter to Retry",
          width / (2 * zoomNum),
          height / zoomNum - 50
        );
        if (nameEnterScreen == true) {
          textSize(48);
          text(
            "New High Score!",
            width / (2 * zoomNum),
            height / (3 * zoomNum)
          );
          blahblah = pressedKey.split("P");
          if (blahblah[0].length == 1 && nameToPutIn.length < 10) {
            if (shiftMode == true) {
              blahblah[0] = blahblah[0].toUpperCase();
            }
            nameToPutIn = nameToPutIn + blahblah[0];
          }
          if (pressedKey == "BackspacePressed" && nameToPutIn.length >= 1) {
            nameToPutIn = nameToPutIn.substring(0, nameToPutIn.length - 1);
          }
          textSize(24);
          text(nameToPutIn, width / (2 * zoomNum), height / (2 * zoomNum));
          if (pressedKey == "EnterPressed") {
            nameEnterScreen = false;
            for (i = 5; i > replacer; i--) {
              highScoreNum[i] = highScoreNum[i - 1];
              highScoreName[i] = highScoreName[i - 1];
            }
            highScoreNum[replacer] = gamesBeaten;
            highScoreName[replacer] = nameToPutIn;
          }
        } else {
          push();
          textAlign(LEFT, CENTER);
          for (i = 0; i < 5; i++) {
            text(
              i + 1 + ". " + highScoreName[i] + ": " + highScoreNum[i],
              20,
              120 + 40 * i
            );
          }
          pop();
          if (pressedKey == "sPressed") {
            saveInfo = "";
            for (i = 0; i < 5; i++) {
              saveInfo = saveInfo + highScoreName[i];
              if (i < 4) {
                saveInfo = saveInfo + ", ";
              } else {
                saveInfo = saveInfo + "; ";
              }
            }
            for (i = 0; i < 5; i++) {
              saveInfo = saveInfo + highScoreNum[i];
              if (i < 4) {
                saveInfo = saveInfo + ", ";
              }
            }
            let writer = createWriter("HighScoreInfo.txt");
            writer.write([saveInfo]);
            writer.close();
          }
          if (pressedKey == "=Pressed") {
            zoomNum++;
            resizeCanvas(400 * zoomNum, 400 * zoomNum);
          }
          if (pressedKey == "-Pressed") {
            if (zoomNum > 1) {
              zoomNum--;
              resizeCanvas(400 * zoomNum, 400 * zoomNum);
            }
          }
          if (pressedKey == "EnterPressed") {
            title.stop();
            if (pressedKey == "wPressed") {
              if (WarioMode == true) {
                voice.stop();
                WarioMode = false;
                voice.play("wah");
              } else {
                voice.stop();
                WarioMode = true;
                voice.play("ha");
              }
            }
            gamesBeaten = 0;
            microGamePicked = 0;
            calmTimer = 1990;
            difficulty = 2;
            level = 0;
            timer = -100;
            music.rate(1);
            lives = 4;
            music.play("intro");
            if (WarioMode == true) {
              voice.play(
                startClips[Math.floor(Math.random() * startClips.length)]
              );
            }
            winOrNot = "";
          }
          if (pressedKey == "EscapePressed") {
            door1x = -200;
            door2x = 400;
            livey = 450;
            microGamePicked = -1;
            gamesBeaten = 0;
            difficulty = 2;
            level = 0;
            timer = -100;
            music.rate(1);
            lives = 4;
            music.stop();
            antiDie = false;
          }
        }
      }
    }
  }
  if (mouseState == "clicked") {
    mouseState = "holding";
  }
  if (mouseState == "released") {
    mouseState = "not clicked";
  }
  blahblah = pressedKey.split("P");
  blahblah2 = pressedKey.split("R");
  for (i = 0; i <= blahblah.length; i++) {
    if (blahblah[i] == "ressed") {
      pressedKey = "";
      for (j = 0; j < i; j++) {
        pressedKey = pressedKey + blahblah[j];
      }
      pressedKey = pressedKey + "Held";
    }
    if (blahblah2[i] == "eleased") {
      pressedKey = "";
    }
  }
  if (paused == true) {
    fill(0, 0, 0, 100);
    square(-10, -10, width * 2);
    fill("white");
    text("Paused", width / (2 * zoomNum), height / (2 * zoomNum));
  }
  if (paused == "nah") {
    paused = false;
  }
}

function mousePressed() {
  if (paused == true) {
    paused = false;
    loop();
  }
  mouseState = "clicked";
}
function mouseReleased() {
  mouseState = "released";
}

function keyPressed() {
  if (key == "Shift") {
    shiftMode = true;
  }
  pressedKey = key + "Pressed";
  if (paused == true) {
    if (key != "=" && key != "-" && key != "w") {
      paused = "nah";
      if (key == "Escape") {
        door1x = -200;
        door2x = 400;
        livey = 450;
        microGamePicked = -1;
        gamesBeaten = 0;
        difficulty = 2;
        level = 0;
        timer = -100;
        music.rate(1);
        lives = 4;
        music.stop();
        title.play("Song");
        antiDie = false;
      }
      if (key == "Enter") {
        pressedKey = key + "Held";
      }
      if (antiDie == true && key != "Escape") {
        music.play(idkmafu);
        music.seek(idkmanthisisdumb, idkmafu);
      }
      loop();
    } else {
      if (key == "=") {
        zoomNum++;
        resizeCanvas(400 * zoomNum, 400 * zoomNum);
      }
      if (key == "-") {
        if (zoomNum > 1) {
          zoomNum--;
          resizeCanvas(400 * zoomNum, 400 * zoomNum);
        }
      }
      if (key == "w") {
        if (WarioMode == true) {
          voice.stop();
          WarioMode = false;
          voice.play("wah");
        } else {
          voice.stop();
          WarioMode = true;
          voice.play("ha");
        }
      }
    }
  }
}
function keyReleased() {
  pressedKey = key + "Released";

  if (key == "Shift") {
    shiftMode = false;
  }
}

function draw0() {}

function draw5() {
  if (winning == false) {
    background("red");
    push();

    scale(1, -1);

    image(
      Gorilla,
      width / (2 * zoomNum) - 300 / 2,
      -height / (2 * zoomNum) - 384 / 2
    );

    pop();
  } else {
    background("lightblue");
    image(
      Gorilla,
      width / (2 * zoomNum) - 300 / 2,
      height / (2 * zoomNum) - 384 / 2
    );
  }
  if (startRunningIt < 0) {
    play5();
  } else {
    startRunningIt -= difficulty - 1;

    saveMouseX = mouseX;
    saveMouseY = mouseY;
  }
  if (winning == false) {
    timer--;
  }
}

function play5() {
  if (mouseX != saveMouseX || mouseY != saveMouseY || pressedKey != "") {
    if (winning == true) {
      timer = timer / 4;
      if (WarioMode == true) {
        voice.play(failClips[Math.floor(Math.random() * failClips.length)]);
      }
    }
    winning = false;
  }
}

function draw1() {
  image(microGame1BG, 0, 0);
  if (winning == false) {
    background(0, 0, 0, 100);
  }
  if (startRunningIt < 0) {
    play1();
  } else {
    startRunningIt -= difficulty;
  }
  image(
    eval(winning + "CancerCell"),
    game1SquareX,
    game1SquareY,
    100,
    100,
    (Math.floor(frameCount / 3) % 4) * 100,
    0,
    100,
    100
  );
}

function draw4() {
  background("lightgrey");
  if (startRunningIt < 0) {
    play4();
  } else {
    startRunningIt -= difficulty;
  }
  image(DNAFloor, DNAChainX - 800, 400 - 64, 1600, 64);
  image(DNAPlayer, DNAX, DNAY, 18 * 2, 17 * 2);
}

function play4() {
  if (winning == "idkman") {
    DNAY += difficulty * 2;
    if (pressedKey == "ArrowLeftPressed" || pressedKey == "ArrowLeftHeld") {
      DNAX -= difficulty * 2;
    }
    if (pressedKey == "ArrowRightPressed" || pressedKey == "ArrowRightHeld") {
      DNAX += difficulty * 2;
    }
    DNAX += level * windDirection * (difficulty / 2);
    if (DNAX > 400 - 36) {
      DNAX = 400 - 36;
    }
    if (DNAX < 0) {
      DNAX = 0;
    }
    if (DNAY > 400 - 90) {
      if (DNAX + 8 > DNAChainX - 16 && DNAX + 8 < DNAChainX + 16) {
        if (WarioMode == true) {
          voice.play(winClips[Math.floor(Math.random() * winClips.length)]);
        }
        DNAY = 400 - 64;
        DNAX = DNAChainX - 2;
        winning = true;
      } else {
        DNAY = 400 - 96;
        if (WarioMode == true) {
          voice.play(failClips[Math.floor(Math.random() * failClips.length)]);
        }
        winning = false;
      }
    }
    if (timer < 10) {
      winning = false;
      if (WarioMode == true) {
        voice.play(failClips[Math.floor(Math.random() * failClips.length)]);
      }
    }
  }
}

function draw2() {
  background("red");
  if (startRunningIt < 0) {
    play2();
  } else {
    startRunningIt -= difficulty;
  }
  if (winning == true) {
    fill("blue");
  } else {
    fill("darkblue");
  }
  strokeWeight(2);
  square(50, game2PlayerY, 50);
  fill("green");
  if (game2CarX < 300) {
    game2DrawCarX = game2CarX;
  } else {
    game2DrawCarX = 300;
  }
  image(Bottle, 300, 270);
  image(Cork, game2DrawCarX, 320);
}

function play1() {
  if (mouseState == "clicked") {
    if (
      mouseX >= game1SquareX &&
      mouseX <= game1SquareX + 100 &&
      mouseY >= game1SquareY &&
      mouseY <= game1SquareY + 100
    ) {
      if (winning == false) {
        if (WarioMode == true) {
          voice.play(winClips[Math.floor(Math.random() * winClips.length)]);
        }
      }
      winning = true;
    }
  }
}

function draw3() {
  if (winning == true) {
    background("lightgreen");
  } else {
    if (hasClicked3 == true) {
      background("darkgreen");
    } else {
      background("green");
    }
  }
  if (startRunningIt < 0) {
    play3();
  } else {
    startRunningIt -= difficulty;
  }
  for (i = 0; i <= 2; i++) {
    push();
    if (EnzymeRotation[i] == 1 || EnzymeRotation[i] == 3) {
      if (EnzymeRotation[i] == 1) {
        translate(
          260 + 50 + (10 + 50 + 120 * i),
          -(50 + 10 + 120 * i) + (260 + 50)
        );
      } else {
        translate(
          -(260 + 50) + (10 + 50 + 120 * i),
          50 + 10 + 120 * i + (260 + 50)
        );
      }
    } else {
      if (EnzymeRotation[i] == 2) {
        translate((10 + 120 * i + 50) * 2, (260 + 50) * 2);
      }
    }
    rotate(EnzymeRotation[i] * 90);
    image(eval("Enzyme" + EnzymeOrder[i]), 10 + 120 * i, 260, 100, 100);
    pop();
  }
  fill(0, 0, 0, 3);
  stroke("black");
  strokeWeight(1);
  square(width / (2 * zoomNum) - 50, 80, 100);
  if (selection3 == -1) {
    image(
      eval("Protein" + ProteinType),
      width / (2 * zoomNum) - 50,
      80,
      100,
      100
    );
  } else {
    push();
    if (EnzymeRotation[selection3] == 1 || EnzymeRotation[selection3] == 3) {
      if (EnzymeRotation[selection3] == 1) {
        translate(
          260 + 50 + (10 + 50 + 120 * selection3),
          -(50 + 10 + 120 * selection3) + (260 + 50)
        );
      } else {
        translate(
          -(260 + 50) + (10 + 50 + 120 * selection3),
          50 + 10 + 120 * selection3 + (260 + 50)
        );
      }
    } else {
      if (EnzymeRotation[selection3] == 2) {
        translate((10 + 120 * selection3 + 50) * 2, (260 + 50) * 2);
      }
    }
    rotate(EnzymeRotation[selection3] * 90);
    image(eval("Protein" + ProteinType), 10 + 120 * selection3, 260, 100, 100);
    pop();
  }
}

function play1() {
  if (mouseState == "clicked") {
    if (
      mouseX >= game1SquareX * zoomNum &&
      mouseX <= (game1SquareX + 100) * zoomNum &&
      mouseY >= game1SquareY * zoomNum &&
      mouseY <= (game1SquareY + 100) * zoomNum
    ) {
      if (clickedTimes >= level) {
        if (winning == false) {
          timer = timer / 2;
          if (WarioMode == true) {
            voice.play(winClips[Math.floor(Math.random() * winClips.length)]);
          }
        }
        winning = true;
        timer -= difficulty;
      } else {
        clickedTimes++;
        game1SquareX = Math.ceil(Math.random() * 350);
        game1SquareY = Math.ceil(Math.random() * 350);
      }
    }
  }
}

function play3() {
  if (mouseState == "clicked" && hasClicked3 == false) {
    for (i = 0; i <= 2; i++) {
      if (
        mouseX >= (20 + 120 * i) * zoomNum &&
        mouseX <= (120 + 120 * i) * zoomNum &&
        mouseY >= 260 * zoomNum &&
        mouseY <= 360 * zoomNum
      ) {
        selection3 = i;
        hasClicked3 = true;
        if (EnzymeOrder[i] == ProteinType) {
          winning = true;
          timer = timer / 2;
          if (WarioMode == true) {
            voice.play(winClips[Math.floor(Math.random() * winClips.length)]);
          }
        } else {
          if (WarioMode == true) {
            voice.play(failClips[Math.floor(Math.random() * failClips.length)]);
          }
          timer = timer / 2;
          winning = false;
        }
        i = 3;
      }
    }
  }
  if (hasClicked3 == true) {
    timer -= difficulty;
  }
}

function play2() {
  game2CarX -= 10 * (difficulty - 1);
  if (
    pressedKey == "ArrowUpPressed" &&
    game2PlayerY == 350 &&
    winning == true
  ) {
    game2ModifyY = -8 * (difficulty / 2);
  }
  game2PlayerY += game2ModifyY;
  if (game2PlayerY < 350) {
    game2ModifyY += 0.3 * (difficulty - 1);
  } else {
    game2ModifyY = 0;
    game2PlayerY = 350;
  }
  if (game2CarX > 0 && game2CarX <= 70 && game2PlayerY > 290) {
    game2CarX += 10 * (difficulty - 1);
    game2ModifyY -= 0.3 * (difficulty - 1);
    game2PlayerY -= game2ModifyY;
    if (winning == true) {
      timer = timer / 2;
      if (WarioMode == true) {
        voice.play(failClips[Math.floor(Math.random() * failClips.length)]);
      }
    }
    timer -= difficulty;
    winning = false;
  }
}

function setup1() {
  clickedTimes = 0;
  game1SquareX = Math.ceil(Math.random() * 350);
  game1SquareY = Math.ceil(Math.random() * 350);
}
function setup2() {
  game2CarX = 500 + Math.round((Math.random() - 0.5) * (100 * level + 1));
  game2PlayerY = 350;
  game2ModifyY = 0;
  winning = true;
}
function setup3() {
  hasClicked3 = false;
  selection3 = -1;
  EnzymeOrder[0] = idfkman[Math.floor(Math.random() * 3)];
  EnzymeOrder[1] = idfkman[Math.floor(Math.random() * 3)];
  while (EnzymeOrder[0] == EnzymeOrder[1]) {
    EnzymeOrder[1] = idfkman[Math.floor(Math.random() * 3)];
  }
  EnzymeOrder[2] = idfkman[Math.floor(Math.random() * 3)];
  while (EnzymeOrder[0] == EnzymeOrder[2] || EnzymeOrder[1] == EnzymeOrder[2]) {
    EnzymeOrder[2] = idfkman[Math.floor(Math.random() * 3)];
  }
  for (i = 0; i <= 2; i++) {
    if (level >= 2) {
      EnzymeRotation[i] = Math.floor(Math.random() * 4);
    } else {
      if (level == 1) {
        if (Math.floor(Math.random() * 2) == 0) {
          EnzymeRotation[i] = 0;
        } else {
          EnzymeRotation[i] = 2;
        }
      } else {
        EnzymeRotation[i] = 0;
      }
    }
  }
  ProteinType = idfkman[Math.floor(Math.random() * 3)];
}

function setup4() {
  winning = "idkman";
  windDirection = Math.floor(Math.random() * 3) - 1;
  DNAX = Math.floor(Math.random() * 270) + 82;
  DNAY = 10;
  DNAChainX = Math.floor(Math.random() * 350) + 10;
}

function setup5() {
  winning = true;
  timer += 50 * difficulty + 200 * level;
  saveMouseX = mouseX;
  saveMouseY = mouseY;
}

function setup6() {
  for (i = 0; i <= level; i++) {
    TreeArray[Math.floor(Math.random() * 16)] = false;
  }
  timer += 150 * level;
}

function play6() {
  if (mouseState == "clicked") {
    doYouWin = true;
    for (i = 0; i < 16; i++) {
      if (
        mouseX >= 100 * (i % 4) * zoomNum &&
        mouseX < (100 + 100 * (i % 4)) * zoomNum &&
        mouseY >= 100 * Math.floor(i / 4) * zoomNum &&
        mouseY < (100 + 100 * Math.floor(i / 4)) * zoomNum
      ) {
        TreeArray[i] = true;
      }
      if (TreeArray[i] == false) {
        doYouWin = false;
      }
    }
    if (doYouWin == true) {
      if (winning == false) {
        if (WarioMode == true) {
          voice.play(winClips[Math.floor(Math.random() * winClips.length)]);
        }
        timer = timer / 2;
      }
      winning = true;
    }
  }
  if (winning == true) {
    timer--;
  }
}

function draw6() {
  background("black");
  if (startRunningIt < 0) {
    play6();
  } else {
    startRunningIt -= difficulty;
  }
  strokeWeight(3);
  for (i = 0; i < 16; i++) {
    if (TreeArray[i] == true) {
      fill("green");
    } else {
      fill("brown");
    }
    square(100 * (i % 4), 100 * Math.floor(i / 4), 100);
  }
}

function setup7() {
  whatIsWrong = Math.floor(Math.random() * 5);
  while (whatIsWrong == level && whatIsWrong < 1) {
    whatIsWrong = Math.floor(Math.random() * 5);
  }
  winning = "idk";
  selectedOption = 0;
  circle7Y = -100;
}

function play7() {
  if (winning == "idk") {
    if (mouseState == "clicked") {
      if (
        mouseX > 220 * zoomNum &&
        mouseX < 365 * zoomNum &&
        mouseY > 80 * zoomNum &&
        mouseY < 125 * zoomNum
      ) {
        circle7Y = 100;
        if (whatIsWrong == 1) {
          winning = true;
        } else {
          winning = false;
        }
      }
      if (
        mouseX > 220 * zoomNum &&
        mouseX < 365 * zoomNum &&
        mouseY > 132 * zoomNum &&
        mouseY < 165 * zoomNum
      ) {
        circle7Y = 150;
        if (whatIsWrong == 2) {
          winning = true;
        } else {
          winning = false;
        }
      }
      if (
        mouseX > 220 * zoomNum &&
        mouseX < 370 * zoomNum &&
        mouseY > 190 * zoomNum &&
        mouseY < 255 * zoomNum
      ) {
        circle7Y = 220;
        if (whatIsWrong == 3) {
          winning = true;
        } else {
          winning = false;
        }
      }
      if (
        mouseX > 220 * zoomNum &&
        mouseX < 365 * zoomNum &&
        mouseY > 265 * zoomNum &&
        mouseY < 350 * zoomNum
      ) {
        circle7Y = 300;
        if (whatIsWrong == 4) {
          winning = true;
        } else {
          winning = false;
        }
      }

      if (mouseX < 200 * zoomNum) {
        timer = timer / 2;
      }
    }
    if (timer < 10) {
      if (whatIsWrong == 0) {
        winning = true;
      } else {
        winning = false;
      }
    }
    if (winning != "idk") {
      if (winning == true) {
        if (WarioMode == true) {
          voice.play(winClips[Math.floor(Math.random() * winClips.length)]);
        }
      } else {
        if (WarioMode == true) {
          voice.play(failClips[Math.floor(Math.random() * failClips.length)]);
        }
      }
      timer = timer / 2;
    }
  } else {
    timer--;
  }
}

function draw7() {
  background("black");
  if (startRunningIt < 0) {
    play7();
  } else {
    startRunningIt -= difficulty;
  }
  image(game7Passport, 200, 0);
  strokeWeight(0);
  textSize(20);
  fill("black");
  if (whatIsWrong == 1) {
    text("Todd", 300, 120);
  } else {
    text("Bob", 300, 120);
  }
  if (whatIsWrong == 2) {
    text("Purple", 305, 160);
  } else {
    text("Green", 305, 160);
  }
  if (whatIsWrong == 3) {
    text("Tieless", 315, 240);
  } else {
    text("Tie", 295, 240);
  }

  if (whatIsWrong == 4) {
    text("Red", 315, 330);
  } else {
    text("Blue", 315, 330);
  }

  if (winning == true) {
    image(eval("game7ProteinGuy" + whatIsWrong), 0, 0);
  } else {
    image(game7ProteinGuy0, 0, 0);
  }
  fill(0, 0, 0, 0);
  stroke("red");
  strokeWeight(2);
  ellipse(290, circle7Y, 170, 50);
}

function draw8() {
  if (whichOneYouPicked == 0) {
    background("green");
  } else {
    background("blue");
  }
  if (startRunningIt < 0) {
    play8();
  } else {
    startRunningIt -= difficulty;
  }
  fill("blue");
  strokeWeight(2);
  textSize(20);
  for (i = 0; i < 3 + level; i++) {
    image(
      eval("game8" + game8Chain[i]),
      spaceNum + 70 * i,
      width / (2 * zoomNum) - 25,
      50,
      50,
      (Math.floor(frameCount / 2) % 4) * 50,
      0,
      50,
      50
    );
  }
}

function play8() {
  if (mouseState == "clicked" && winning == false) {
    for (i = 0; i < 3 + level; i++) {
      if (
        mouseX > (spaceNum + 70 * i) * zoomNum &&
        mouseX < (50 + spaceNum + 70 * i) * zoomNum &&
        mouseY > (width / (2 * zoomNum) - 25) * zoomNum &&
        mouseY < (width / (2 * zoomNum) + 25) * zoomNum
      ) {
        if (swapArray[0] == "") {
          swapArray[0] = game8Chain[i];
          funnySwapNum = i;
          i = 6;
        } else {
          swapArray[1] = game8Chain[i];
          game8Chain[i] = swapArray[0];
          game8Chain[funnySwapNum] = swapArray[1];
          doYouWin = true;
          swapArray[0] = "";
          swapArray[1] = "";
          for (i = 0; i < 3 + level; i++) {
            if (game8Chain[i] != foodChains[whichOneYouPicked][i]) {
              doYouWin = false;
            }
          }
          if (doYouWin == true) {
            if (WarioMode == true) {
              voice.play(winClips[Math.floor(Math.random() * winClips.length)]);
            }
            timer = timer / 2;
            winning = true;
          }
          i = 6;
        }
      }
    }
  }
  if (winning == true) {
    timer--;
  }
}

function setup8() {
  timer += 150 * level;
  if (level == 0) {
    spaceNum = 120;
  }
  if (level == 1) {
    spaceNum = 70;
  }
  if (level == 2) {
    spaceNum = 20;
  }
  whichOneYouPicked = Math.floor(Math.random() * foodChains.length);
  for (i = 0; i < 3 + level; i++) {
    game8Chain[i] = foodChains[whichOneYouPicked][i];
  }
  randomNum1 = Math.floor(Math.random() * 3 + level);
  randomNum2 = Math.floor(Math.random() * 3 + level);
  while (randomNum1 == randomNum2) {
    randomNum2 = Math.floor(Math.random() * 3 + level);
  }
  swapArray[0] = game8Chain[randomNum1];
  swapArray[1] = game8Chain[randomNum2];
  game8Chain[randomNum1] = swapArray[1];
  game8Chain[randomNum2] = swapArray[0];
  swapArray[0] = "";
  swapArray[1] = "";
}

function setup9() {
  textDump = "";
  winning = "idk";
  finalPair = Math.floor(Math.random() * (4 * (level + 1)));
}

function draw9() {
  background("white");
  if (winning == "idk" || music.playing() == true) {
    timer = 3;
  }
  if (startRunningIt < 0) {
    play9();
  } else {
    startRunningIt -= difficulty;
  }
  textSize(35);
  stroke("black");
  strokeWeight(3);
  fill("white");
  text(
    finalQuestions[finalPair],
    width / (2 * zoomNum),
    height / (4 * zoomNum)
  );
  textSize(20);
  strokeWeight(1);
  if (textDump == "") {
    text("(Type to answer.)", width / (2 * zoomNum), height / (1.5 * zoomNum));
  } else {
    text(textDump, width / (2 * zoomNum), height / (1.5 * zoomNum));
  }
}

function play9() {
  if (winning == "idk") {
    blahblah = pressedKey.split("P");
    if (blahblah[0].length == 1) {
      if (shiftMode == true) {
        blahblah[0] = blahblah[0].toUpperCase();
      }
      textDump = textDump + blahblah[0];
    }
    if (pressedKey == "BackspacePressed" && textDump.length >= 1) {
      textDump = textDump.substring(0, textDump.length - 1);
    }
    if (pressedKey == "EnterPressed") {
      song9.stop();
      if (textDump.toUpperCase() == finalAnswers[finalPair]) {
        winning = true;
        music.play("bossWin");
        if (WarioMode == true) {
          voice.play(winClips[Math.floor(Math.random() * winClips.length)]);
        }
      } else {
        music.play("bossLose");
        winning = false;
        if (WarioMode == true) {
          voice.play(failClips[Math.floor(Math.random() * failClips.length)]);
        }
      }
    }
  }
}
