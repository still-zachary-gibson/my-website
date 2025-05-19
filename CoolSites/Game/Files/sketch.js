let player;
let floor;
let floors;
let spike;
let spikes;
let win;
p5.disableFriendlyErrors = true;
let lastLevel = 2;
let ok1 = 0;
let ok2 = 0;
let finalLevel = 100;
let letmove = 0;
let loadNum = 1;
let fullyLoaded = false;
let isLevel1 = 1;
let backgroundNum = null;
let onground = true;
let fuckin = null;
let winnertime = 0;
let frameFrame = 0;
let winr = false;
let stop = 0;
let domouse = false;
let frame = 0;
let anim = 0;
let ispress = 0;
let frameAmount = [0, 9999, 10, 0, 11, 0, 9999, 10, 0, 11];
let lastanim = 0;
let frameSpeed = 0;
let frameSpeeds = [100, 1, 4, 100, 2, 100, 1, 4, 100, 2];
let dead = false;
let deadok = false;
let right = true;
let transX = 0;
let stageWidth = [31, 17, 31, 17, 38, 17, 3, 17, 3, 17, 40, 17];
let floorXs = [
  [0, 14, 25],
  [0, 10, 18, 22, 27],
  [4, 0, 13, 22, 27, 32, 14, 14, 14, 23, 36],
  [],
  [],
  [9, 16, 20, 22, 13, 34, 36, 30, 29, 9, 7, 28, 0, 0, 0, 22],
];
let floorYs = [
  [12, 10, 14],
  [11, 10, 7, 4, 14],
  [10, 13, 14, 12, 9, 3, -2, 5, 8, 3, -6],
  [],
  [],
  [12, 10, 2, 13, 2, 8, 3, 5, 11, 2, 7, -4, -4, 5, 14, 10],
];
let floorWidths = [
  [10, 11, 10],
  [6, 6, 4, 5, 5],
  [5, 9, 7, 2, 3, 2, 2, 4, 7, 4, 2],
  [],
  [],
  [4, 6, 4, 4, 8, 4, 4, 3, 4, 5, 5, 3, 2, 5, 7, 2],
];
let floorHeights = [
  [5, 16, 10],
  [7, 8, 2, 14, 4],
  [3, 4, 3, 1, 1, 14, 7, 3, 1, 2, 23],
  [],
  [],
  [5, 7, 8, 4, 3, 2, 14, 1, 2, 2, 2, 10, 9, 4, 3, 3],
];
let spikeXs = [
  [6, 18, 22],
  [24, 19, 12],
  [3, 6, 14, 29, 17, 23, 18, 13, 13, 13, 26, 20],
  [],
  [],
  [10, 9, 18, 12, 17, 27, 24, 30, 31, 31, 31, 31, 31, 24],
];
let spikeYs = [
  [11, 9, 9],
  [3, 6, 9],
  [11, 9, 13, 8, 13, 11, 7, 7, 6, 5, 2, 9],
  [],
  [],
  [11, 6, 9, 1, 1, 5, 2, 10, 4, 3, 2, 1, 0, 8],
];
let spawnPos = [2, 12, 2, 11, 2, 13, , , , ,2, 14];
let winPos = [28, 13, 29, 13, 33, 33, , , , , 38, 2];
let lives = 4;
let level = 0;
let levelmaps = [];
let levelBGmaps = [];
let levelFGmaps = [];
let levelsongs = [];
let backgrounds = [];
let playJumpSound = true;
let dumbShit = true;
let jumpSound = new Howl({
  src: ["Videogame Jump Sound Effect HD  No Copyright.mp3"],
  volume: 0.8,
  sprite: {
    C: [79, 221],
  },
});
let deathSound = new Howl({
  src: ["Mario Death - Sound Effect (HD).mp3"],
  sprite: {
    C: [75, 205],
  },
});
let undeathSound = new Howl({
  src: ["Poof Sound Effect.mp3"],
  volume: 0.6,
  sprite: {
    C: [275, 275],
  },
});
let winSound = new Howl({
  src: ["Happy Wheels victory green screen.mp3"],
  sprite: {
    C: [310, 2690],
  },
});
let winnestSound = new Howl({
  src: ["Audience Clapping - Sound Effect.mp3"],
  sprite: {
    C: [0, 7000],
  },
});
let walkSound = new Howl({
  src: ["Single Footstep In Grass.mp3"],
  volume: 0.3,
  sprite: {
    C: [160, 240],
  },
});
let song1 = new Howl({
  src: ["Super Mario Bros. Ground Theme but it's the all stars version.mp3"],
  volume: 0.6,
  loop: true,
  sprite: {
    C: [30, 36630],
  },
});
let song7 = new Howl({
  src: ["SMB2 Athletic (Concept Bit) - Super Mario Bros. 2.mp3"],
  volume: 0.6,
  sprite: {
    C: [703, 2397, false],
    B: [3101, 38360, true],
  },
});

jumpSound.on("end", function () {
  playJumpSound = true;
});
song7.once("end", function () {
  song7.play("B");
});

function preload() {
  funnyLoad = loadImage("3dgifmaker51968.gif");
  background1 = loadImage("ezgif.com-crop.png");
  background2 = loadImage("ezgif.com-crop (1).png");
  background3 = loadImage("ezgif.com-crop (2).png");
  background4 = loadImage("ezgif.com-crop (3).png");
  background5 = loadImage("ezgif.com-crop (4).png");
  background6 = loadImage("ezgif.com-crop (5).png");
  background7 = loadImage("ezgif.com-crop (6).png");
  font = loadFont("Pixeled.ttf");
  backgrounds.push(background1);
  backgrounds.push(background2);
  backgrounds.push(background3);
  backgrounds.push(background4);
  backgrounds.push(background5);
  backgrounds.push(background6);
  backgrounds.push(background7);
  PlayerSpriteSheet = loadImage("ezgif-4-cd98fbf379.png");
  liveCounter = loadImage("Idle+(32x32)-1.png (1).png");
  allLoaded = false;
  i = 0;
  while (allLoaded == false) {
    i++;
    levelmaps[i - 1] = loadImage("Levels/Level " + i + ".png");
    nofuckoff = false;
    try {
      eval(`song${i}`);
    } catch (e) {
      nofuckoff = true;
    }
    if (nofuckoff == false) {
      levelsongs[i - 1] = eval(`song${i}`);
    } else {
      levelsongs[i - 1] = "";
    }
    levelBGmaps[i - 1] = loadImage("New Piskel-1.png (9).png");
    levelFGmaps[i - 1] = loadImage("New Piskel-1.png (9).png");
    allLoaded = true;
  }
  flag = loadImage(
    "CheckpointFlagOut64x64-ezgif.com-gif-to-sprite-converter.png"
  );
  transition = loadImage("ezgif.com-gif-to-sprite-converter (14).png");
}

function setup() {
  new Canvas(400 - 128, 400 - 128, "pixelated x2");
  drawingContext.imageSmoothingEnabled = false;
  player = new Sprite(
    spawnPos[level * 2] * 16,
    spawnPos[level * 2 + 1] * 16 - 8
  );
  player.width = 16;
  player.mass = 160000;
  player.height = 16;
  player.friction = 100;
  //player.offset = {x: 0, y: 5}
  player.pixelPerfect = true;
  player.visible = false;
  allSprites.visible = false;
  //allSprites.debug = true;
  floors = new Group();
  floors.collider = "s";

  spikes = new Group();
  spikes.w = 16;
  spikes.h = 16;
  spikes.collider = "s";

  win = new Sprite(winPos[level * 2] * 16, winPos[level * 2 + 1] * 16);
  win.width = 16;
  win.height = 16;
  win.collider = "s";

  world.gravity.y = 10;
  player.bounciness = -10;
  allSprites.rotationlock = true;
  allSprites.pixelPerfect = true;

  coolAssLoader();
}

function coolAssLoader() {
  while (fuckin == backgroundNum) {
    fuckin = random([0, 1, 2, 3, 4, 5, 6]);
  }
  backgroundNum = fuckin;
  if (levelsongs[level] != "") {
    if (level != 0) {
      for (i = level - 1; i >= 0; i--) {
        if (levelsongs[i] != "") {
          levelsongs[i].stop();
          i = -10;
        }
      }
    }
    levelsongs[level].play("C");
  }
  fuckingIDK = floors.length;
  while (floors.length <= floorXs[level].length - isLevel1) {
    if (
      fuckingIDK - level - 1 > -1 &&
      floorXs[level][fuckingIDK - level - 1] != undefined
    ) {
      let floor = new floors.Sprite();
      floor.x =
        floorXs[level][fuckingIDK - level - 1] * 16 +
        floorWidths[level][fuckingIDK - level - 1] * 8;
      floor.y =
        floorYs[level][fuckingIDK - level - 1] * 16 +
        floorHeights[level][fuckingIDK - level - 1] * 8;
      floor.w = floorWidths[level][fuckingIDK - level - 1] * 16;
      floor.h = floorHeights[level][fuckingIDK - level - 1] * 16;
    }
    fuckingIDK++;
  }
  fuckingIDK = spikes.length;
  while (spikes.length <= spikeXs[level].length - isLevel1) {
    if (
      fuckingIDK - level - 1 > -1 &&
      spikeXs[level][fuckingIDK - level - 1] != undefined
    ) {
      let spike = new spikes.Sprite();
      spike.x = spikeXs[level][fuckingIDK - level - 1] * 16 + 8;
      spike.y = spikeYs[level][fuckingIDK - level - 1] * 16 + 8;
    }
    fuckingIDK++;
  }
  if (level > 0) {
    floors[0].remove();
    spikes[0].remove();
  }
  winr = false;
  player.x = spawnPos[level * 2] * 16;
  player.y = spawnPos[level * 2 + 1] * 16 - 8;
  ispress = 0;
  player.vel.x = 0;
  player.vel.y = 0;
  win.x = winPos[level * 2] * 16;
  win.y = winPos[level * 2 + 1] * 16 - 8;
  winnertime = 0;
  frameFrame = 0;
}

function draw() {
  image(backgrounds[backgroundNum], 0, 0);
  player.vel.x = 0;
  player.rotation = 0;

  if (fullyLoaded == false) {
    if ((Math.floor(loadNum * 100 - 90) / 100) % 2 == 1) {
      loadNum = Math.floor(loadNum * 100 - 95) / 100;
      nofuckoff = false;
      try {
        eval(`song${Math.floor(loadNum / 2) + 2}`);
      } catch (e) {
        nofuckoff = true;
      }
      if (nofuckoff == false) {
        levelsongs[Math.floor(loadNum / 2) + 1] = eval(
          `song${Math.floor(loadNum / 2) + 2}`
        );
      } else {
        levelsongs[Math.floor(loadNum / 2) + 1] = "";
      }
      loadNum = Math.floor(loadNum * 100 + 95) / 100;
    }
  }

  if (fullyLoaded == false) {
    //console.log(loadNum)
    loadNum = Math.floor(Math.round(loadNum * 100) + 10) / 100;
    if (loadNum % 2 == 0) {
      levelmaps[Math.floor(loadNum / 2)] = loadImage(
        "Levels/Level " + (Math.floor(loadNum / 2) + 1) + ".png",
        (fullyLoaded = false),
        (event) => {
          console.log(event);
          fullyLoaded = true;
        }
      );
    }
  }

  if (fullyLoaded == true) {
    loadinTime = millis();
    levelmaps.pop();
    levelsongs.pop();
    fullyLoaded = "PINEAPPLE";
    finalLevel = levelmaps.length;
  }

  if (dead != false) {
    ispress = 0;

    deadTime++;
  }
  // onground = false;
  if (player.vel.y > 0.5) {
    onground = false;
  }
  for (let i = 0; i < floors.length; i++) {
    if (player.colliding(floors[i])) {
      if (player.y <= floors[i].y - floors[i].h / 2) {
        if (onground == false) {
          player.vel.y = 0;
          if (dead != false) {
            player.y = floors[i].y - floors[i].h / 2 - 9.2;
          }
        }
        onground = true;
        i = floors.length;
      } else {
        if (player.y <= floors[i].y + floors[i].h / 2) {
          ispress = 0;
          if (player.x < floors[i].x) {
            letmove = 1;
            player.x = floors[i].x - floors[i].w / 2 - 10;
          } else {
            letmove = 2;
            player.x = floors[i].x + floors[i].w / 2 + 10;
          }
          ispress = 0;
        } else {
          player.vel.y = 0;
          player.y = floors[i].y + floors[i].h / 2 + 9.2;
        }
      }
    }
  }

  if (player.overlapping(spikes)) {
    player.vel.y = 0;
    if (dead == false) {
      playerDeadY = player.y;
      deathSound.play("C");
    }
    dead = 1;
  }

  if (dead != false) {
    if (deadTime >= 30) {
      player.x = spawnPos[level * 2] * 16;
      player.y = spawnPos[level * 2 + 1] * 16 - 8;
      player.vel.y = 0;
      letmove = 0;
      deadTime = 0;
      dead = false;
      deadok = true;
      lives = lives - 1;
      undeathSound.play("C");
    }
  }
  if (dead == 1) {
    player.y = playerDeadY;
  }
  if (player.overlapping(win)) {
    dothing = 0;
    if (winr == false) {
      winSound.play("C");
    }
    winr = true;
  }
  pastavazule = false;
  if (
    dead == false &&
    winr == false &&
    transX == 0 &&
    fullyLoaded == "PINEAPPLE"
  ) {
    deadTime = 0;
    if (kb.pressing("space") && onground == true) {
      onground = false;
      letmove = 0;
      if (playJumpSound == true) {
        playJumpSound = false;
        jumpSound.play("C");
      }
      player.vel.y = -4 - 0.2;
    }
    if (kb.pressing("right")) {
      if (letmove == 1) {
        pastavazule = true;
      }
      if (ispress < 20 && letmove != 1) {
        letmove = 0;
        ispress++;
      }
    } else {
      if (ispress > 0) {
        ispress--;
      }
    }
    if (kb.pressing("left")) {
      if (letmove == 2) {
        pastavazule = true;
      }
      if (ispress > -20 && letmove != 2) {
        letmove = 0;
        ispress--;
      }
    } else {
      if (ispress < 0) {
        ispress++;
      }
    }
    player.x = player.x + 3 * (ispress / 20);
    for (let i = 0; i < floors.length; i++) {
      if (player.colliding(floors[i]) && dead == false && deadok == false) {
        if (player.y > floors[i].y - floors[i].h / 2) {
          if (player.y < floors[i].y + floors[i].h / 2) {
            player.x = player.x - 3 * (ispress / 20);
            if (onground == true && ispress == 0) {
              if (player.x < floors[i].x) {
                player.x = floors[i].x - floors[i].w / 2 - 10;
              } else {
                player.x = floors[i].x + floors[i].w / 2 + 10;
              }
            }
            ispress = 0;
          }
        }
      }
    }
  }
  if (onground == false) {
    if (player.vel.y < 0) {
      anim = 3;
    } else {
      anim = 0;
    }
  } else {
    if (ispress == 0 && letmove == 0) {
      anim = 2;
    } else {
      anim = 4;
    }
    if (pastavazule == true) {
      anim = 4;
    } else {
      if (letmove != 0) {
        anim = 2;
      }
    }
  }

  if (dead != false) {
    anim = 1;
  }
  if (winr == true && onground == true) {
    anim = 2;
  }
  if (anim == 4 && frame % 6 == 5) {
    if (dumbShit == true) {
      dumbShit = false;
      walkSound.play("C");
    }
  } else {
    dumbShit = true;
  }
  if (ispress > 0) {
    right = true;
  } else {
    if (ispress < 0) {
      right = false;
    }
  }
  if (right == false) {
    anim = anim + 5;
  }
  if (lastanim != anim) {
    frame = 0;
  } else {
    if (frameSpeed > frameSpeeds[anim]) {
      frameSpeed = 0;
      frame++;
    } else {
      frameSpeed++;
    }
  }
  lastanim = anim;
  camera.x = player.x;
  camera.y = player.y - canvas.hh;

  if (player.x < 12) {
    player.x = 12;
  }

  if (player.x > stageWidth[level * 2] * 16 - 12) {
    player.x = stageWidth[level * 2] * 16 - 12;
  }
  if (camera.x <= canvas.hw) {
    camera.x = canvas.hw;
  }
  if (camera.y <= 0) {
    camera.y = 0;
  }
  if (camera.y >= -canvas.h + stageWidth[level * 2 + 1] * 16) {
    camera.y = -canvas.h + stageWidth[level * 2 + 1] * 16;
  }
  if (camera.x >= -canvas.hw + stageWidth[level * 2] * 16) {
    camera.x = -canvas.hw + stageWidth[level * 2] * 16;
  }
  if (player.y > stageWidth[level * 2 + 1] * 16 + 32 && winr == false) {
    ispress = 0;
    if (dead == false) {
      deathSound.play("C");
    }
    dead = 2;
  }

  if (winr == true) {
    frameFrame++;
    if (frameFrame > 25) {
      frameFrame = 25;
    }
    winnertime++;
  }

  image(levelmaps[level], 0 - camera.x + canvas.hw, -camera.y);
  image(
    flag,
    win.x - 32 - camera.x + canvas.hw,
    win.y - 40 - camera.y,
    64,
    64,
    64 * frameFrame,
    0,
    64,
    64
  );
  if (dead != 2) {
    image(
      PlayerSpriteSheet,
      player.x - 16 - camera.x + canvas.hw,
      player.y - camera.y - 23,
      32,
      32,
      32 * (frame % frameAmount[anim]),
      32 * anim,
      32,
      32
    );
  }

  image(liveCounter, 0, 0, 40, 20);
  textSize(10);
  fill("black");
  textFont(font);
  text(Math.ceil(lives), 43, 16);
  if (winnertime >= 50 || transX > 0) {
    if (!(transX * 8 > 448 && level >= finalLevel)) {
      transX++;
    }
    image(transition, 400 - transX * 8, 0);
    if (transX * 8 == 448) {
      unloadShit();
    }
  }
  if (transX * 8 > 1000) {
    transX = 0;
  }
  for (let i = 0; i < floors.length; i++) {
    if (
      player.colliding(floors[i]) &&
      deadok == false &&
      dead == false &&
      player.y < floors[i].y - floors[i].h / 2
    ) {
      if (player.x > floors[i].x + floors[i].w / 2) {
        if (ok1 != 0 && ispress == 0) {
          if (ok1 > 6) {
            player.x = floors[i].x + floors[i].w / 2 + 11;
          } else {
            player.x =
              player.x - (player.x - (floors[i].x + floors[i].w / 2) - ok1);
          }
        } else {
          ok1 = player.x - (floors[i].x + floors[i].w / 2);
        }
        if (ok2 != 0 && onground == true) {
          player.y = floors[i].y - floors[i].h / 2 - player.h / 2;
        } else {
          ok2 = 1;
        }
      } else {
        if (player.x < floors[i].x - floors[i].w / 2) {
          if (ok1 != 0 && ispress == 0) {
            if (ok1 < -181) {
              player.x = floors[i].x - floors[i].w / 2 - 11;
            } else {
              player.x =
                player.x - (player.x - (floors[i].x + floors[i].w / 2) - ok1);
            }
          } else {
            ok1 = player.x - (floors[i].x + floors[i].w / 2);
          }
          if (ok2 != 0 && onground == true) {
            player.y = floors[i].y - floors[i].h / 2 - player.h / 2;
          } else {
            ok2 = 1;
          }
        }
      }
      i = floors.length;
    }

    if (i == floors.length - 2) {
      ok1 = 0;
      ok2 = 0;
    }
  }

  if (dead == false) {
    deadok = false;
  } else {
    deadok = true;
  }
  if (level >= finalLevel) {
    textSize(35);
    textFont(font);
    fill("white");
    text("You Won!", 9, 106);
    textSize(10);
    text("Only took you " + (4 - lives) + " Lives, and ", 29, 156);
    text(
      "about " +
        hours +
        minutes +
        ":" +
        seconds +
        "." +
        milliseconds +
        " of your life!",
      17,
      176
    );
  }

  if (fullyLoaded == false) {
    background("black");
    textSize(25);
    textFont(font);
    fill("white");
    text("Loading...", 40, 206);
    funnyLoad.resize(50, 0);
    image(funnyLoad, canvas.hw - 25, canvas.hh - 35);
  }
  //player.vel.x = 0;
}

function unloadShit() {
  thisshit = floors.length - 1;

  for (let i = 0; i < thisshit; i++) {
    floors[0].remove();
  }
  thisshit = spikes.length - 1;
  for (let i = 0; i < thisshit; i++) {
    spikes[0].remove();
  }

  isLevel1 = 0;

  level++;

  if (level < finalLevel) {
    coolAssLoader();
  } else {
    winnestSound.play("C");
    fuckYouUh = millis() - loadinTime;
    hours = Math.floor(fuckYouUh / 3600000);
    fuckYouUh = fuckYouUh - hours * 3600000;
    if (hours > 0) {
      hours = hours + ":";
    } else {
      hours = "";
    }
    minutes = Math.floor(fuckYouUh / 60000);
    fuckYouUh = fuckYouUh - minutes * 60000;
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    seconds = Math.floor(fuckYouUh / 1000);
    fuckYouUh = fuckYouUh - seconds * 1000;
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    milliseconds = Math.floor(fuckYouUh);
    if (milliseconds < 10) {
      milliseconds = "0" + milliseconds;
    } else {
      if (seconds < 100) {
        milliseconds = "0" + seconds;
      }
    }
    level--;
    finalLevel = 0;
  }
}