let word = document.querySelector("#searchword");
let wordx = document.querySelector("#searchword2");
let wordy = document.querySelector("#searchword3");
let word2x = document.querySelector("#searchword4");
let word2y = document.querySelector("#searchword5");
let wordsa = document.querySelector("#searchword6");
let player;
let validi = [];
let ok1 = 0;
let ok2 = 0;
let input;
let img;
let buton = document.querySelector("#buttt");
let buton2 = document.querySelector("#but2");
let buton3 = document.querySelector("#but3");
let spikes;
let letmove = 0;
let decktext = document.getElementById("dec");
let selection = 0;
let stageWidth = [31, 18];
let tilenum = -1;
let playtesting = false;
let selectedFloor = 0;
let floornum = 0;
let floors;
let spikeMode = false;
let selectedTile = "0";
let tiles = [[], [], [], [], [], [], [], [], [], [], [], []];
let floorXs = [];
let floorYs = [];
let floorWidths = [];
let floorHeights = [];
let spikeXs = [];
let spikeYs = [];
let spikenum = 0;
let floorMode = false;
let tileType = 0;
let mousepress = false;
let rightpress = false;
let leftpress = false;
let showFrame = true;
let tilePos = [[], []];
let spawnPos = [1, 1];

function preload() {
  floors = new Group();
  spikes = new Group();
  test = loadImage("ezgif-3-01df8a46d0-1.png (4).png");
  things0 = loadImage("tile006.png");
  tiles[0].push(things0);
  things1 = loadImage("tile007.png");
  tiles[0].push(things1);
  things2 = loadImage("tile008.png");
  tiles[0].push(things2);
  things3 = loadImage("tile009.png");
  tiles[0].push(things3);
  things4 = loadImage("tile010.png");
  tiles[0].push(things4);
  things5 = loadImage("tile028.png");
  tiles[0].push(things5);
  things6 = loadImage("tile029.png");
  tiles[0].push(things6);
  things7 = loadImage("tile030.png");
  tiles[0].push(things7);
  things8 = loadImage("tile031.png");
  tiles[0].push(things8);
  things9 = loadImage("tile032.png");
  tiles[0].push(things9);
  things10 = loadImage("tile050.png");
  tiles[0].push(things10);
  things11 = loadImage("tile051.png");
  tiles[0].push(things11);
  things12 = loadImage("tile052.png");
  tiles[0].push(things12);

  things0 = loadImage("tile000.png");
  tiles[1].push(things0);
  things1 = loadImage("tile001.png");
  tiles[1].push(things1);
  things2 = loadImage("tile002-1.png");
  tiles[1].push(things2);
  things3 = loadImage("tile003.png");
  tiles[1].push(things3);
  things4 = loadImage("tile004.png");
  tiles[1].push(things4);
  things5 = loadImage("tile022.png");
  tiles[1].push(things5);
  things6 = loadImage("tile023.png");
  tiles[1].push(things6);
  things7 = loadImage("tile024.png");
  tiles[1].push(things7);
  things8 = loadImage("tile025.png");
  tiles[1].push(things8);
  things9 = loadImage("tile026.png");
  tiles[1].push(things9);
  things10 = loadImage("tile044.png");
  tiles[1].push(things10);
  things11 = loadImage("tile045.png");
  tiles[1].push(things11);
  things12 = loadImage("tile046.png");
  tiles[1].push(things12);

  things0 = loadImage("tile012.png");
  tiles[2].push(things0);
  things1 = loadImage("tile013.png");
  tiles[2].push(things1);
  things2 = loadImage("tile014.png");
  tiles[2].push(things2);
  things3 = loadImage("tile015.png");
  tiles[2].push(things3);
  things4 = loadImage("tile034.png");
  tiles[2].push(things4);
  things5 = loadImage("tile035.png");
  tiles[2].push(things5);
  things6 = loadImage("tile036.png");
  tiles[2].push(things6);
  things7 = loadImage("tile037.png");
  tiles[2].push(things7);
  things8 = loadImage("tile057.png");
  tiles[2].push(things8);
  things9 = loadImage("tile058.png");
  tiles[2].push(things9);
  things10 = loadImage("tile059.png");
  tiles[2].push(things10);
  things11 = loadImage("New Piskel-1.png (8).png");
  tiles[2].push(things11);
  things12 = loadImage("New Piskel-1.png (8).png");
  tiles[2].push(things12);

  things0 = loadImage("tile094.png");
  tiles[3].push(things0);
  things1 = loadImage("tile095.png");
  tiles[3].push(things1);
  things2 = loadImage("tile096.png");
  tiles[3].push(things2);
  things3 = loadImage("tile097.png");
  tiles[3].push(things3);
  things4 = loadImage("tile098.png");
  tiles[3].push(things4);
  things5 = loadImage("tile116.png");
  tiles[3].push(things5);
  things6 = loadImage("tile117.png");
  tiles[3].push(things6);
  things7 = loadImage("tile118.png");
  tiles[3].push(things7);
  things8 = loadImage("tile119.png");
  tiles[3].push(things8);
  things9 = loadImage("tile120.png");
  tiles[3].push(things9);
  things10 = loadImage("tile138.png");
  tiles[3].push(things10);
  things11 = loadImage("tile139.png");
  tiles[3].push(things11);
  things12 = loadImage("tile140.png");
  tiles[3].push(things12);

  things0 = loadImage("tile182.png");
  tiles[4].push(things0);
  things1 = loadImage("tile183.png");
  tiles[4].push(things1);
  things2 = loadImage("tile184.png");
  tiles[4].push(things2);
  things3 = loadImage("tile185.png");
  tiles[4].push(things3);
  things4 = loadImage("tile186.png");
  tiles[4].push(things4);
  things5 = loadImage("tile204.png");
  tiles[4].push(things5);
  things6 = loadImage("tile205.png");
  tiles[4].push(things6);
  things7 = loadImage("tile206.png");
  tiles[4].push(things7);
  things8 = loadImage("tile207.png");
  tiles[4].push(things8);
  things9 = loadImage("tile208.png");
  tiles[4].push(things9);
  things10 = loadImage("tile226.png");
  tiles[4].push(things10);
  things11 = loadImage("tile227.png");
  tiles[4].push(things11);
  things12 = loadImage("tile228.png");
  tiles[4].push(things12);

  for (i = 0; i <= 4; i++) {
    things13 = loadImage("ezgif-4-1a0b4e78f3-1.png-1.png.png");
    tiles[i].push(things13);
    things14 = loadImage("ezgif-4-1a0b4e78f3-1.png-1.png (1)-1.png");
    tiles[i].push(things14);
    things15 = loadImage("ezgif-4-1a0b4e78f3-1.png-1.png (2)-1.png");
    tiles[i].push(things15);
    things16 = loadImage("ezgif-4-1a0b4e78f3-1.png-1.png (3).png");
    tiles[i].push(things16);
    things17 = loadImage("New Piskel-1.png (8).png");
    tiles[i].push(things17);
  }
}

function setup() {
  player = new Sprite(-10, -10);
  player.vel.y = 0;
  player.width = 16;
  player.height = 16;
  player.collider = "d";
  player.friction = 100;
  //new Canvas(stageWidth[0] * 16, stageWidth[1] * 16, "pixelated x2");
  createCanvas(stageWidth[0] * 16, stageWidth[1] * 16)
  input = createFileInput(handleImage);
  input.position(205, 40);
  pixelDensity(1);
  allSprites.pixelPerfect = true;
  allSprites.visible = false;

  player.visible = true;
  player.pixelPerfect = true;
  player.color = "yellow";
  floors.color = "blue";
  spikes.color = "red";

  allSprites.collider = "null";
  world.gravity.y = 10;
  player.bounciness = -10;
  allSprites.rotationlock = true;
  drawingContext.imageSmoothingEnabled = false;
}

function handleImage(file) {
  if (file.type === "text" && file.value != "") {
    fuckinshit = file.data;
    array = fuckinshit.split("]");

    for (let i = 0; i <= tilenum; i++) {
      tilePos[i] = [];
    }
    for (let i = 1; i <= floornum; i++) {
      floors[i].remove();
    }
    for (let i = 1; i <= spikenum; i++) {
      spikes[i].remove();
    }
    tilenum = -1;
    selectedFloor = 0;
    floornum = 0;
    spikenum = 0;
    wordval = array[0];
    if (wordval != "") {
      arrayf = wordval.split("and");
      for (let i = 0; i < arrayf.length; i++) {
        tilePos[i] = arrayf[i].split(",");
        tilenum++;
      }
    }
    wordval = array[1];
    wordvaly = array[2];
    wordvalw = array[4];
    wordvalh = array[3];
    if (wordval != "") {
      arrayfx = wordval.split(", ");
      arrayfy = wordvaly.split(", ");
      arrayfw = wordvalw.split(", ");
      arrayfh = wordvalh.split(", ");
      for (let i = 1; i <= arrayfx.length; i++) {
        floornum++;
        floorXs[i] = (arrayfx[i - 1]+1-1)/10;
        floorYs[i] = arrayfy[i - 1];
        floorWidths[i] = arrayfh[i - 1];
        floorHeights[i] = arrayfw[i - 1];

        floors[i] = new Sprite();
        floors[i].w = floorWidths[i] * 16;
        floors[i].h = floorHeights[i] * 16;
        floors[i].x = floorXs[i] * 16 + floorWidths[i] * 8;
        floors[i].y = floorYs[i] * 16 + floorHeights[i] * 8;
        floors[i].color = "blue";
      }
    }
    wordval = array[5];
    wordvaly = array[6];
    if (wordval != "") {
      arrayfx = wordval.split(", ");
      arrayfy = wordvaly.split(", ");
      for (let i = 1; i <= arrayfx.length; i++) {
        spikenum++;
        spikeXs[i] = arrayfx[i - 1];
        spikeYs[i] = arrayfy[i - 1];

        spikes[i] = new Sprite();
        spikes[i].x = spikeXs[i] * 16 + 8;
        spikes[i].y = spikeYs[i] * 16 + 8;
        spikes[i].w = 16;
        spikes[i].h = 16;
        spikes[i].color = "red";
      }
    }
    stageWidth[0] = array[7];
    stageWidth[1] = array[8];
    //new Canvas(array[7] * 16, array[8] * 16, "pixelated x2");
    createCanvas(stageWidth[0] * 16, stageWidth[1] * 16)
  }
  file.value = "";
}

function draw() {
  background(255);
  if (playtesting == false) {
    if (floorMode == false) {
      if (kb.pressing("f")) {
        if (fpress == false) {
          fpress = true;
          allSprites.visible = true;
          floorMode = true;

          allSprites.collider = "null";
        }
      } else {
        fpress = false;
      }
      if (kb.pressing("p")) {
        if (ppress == false) {
          ispress = 0;
          player.x = spawnPos[0] * 16;
          player.y = spawnPos[1] * 16 - 8;
          player.collider = "dynamic";
          ppress = true;
          playtesting = true;
          allSprites.visible = true;
          for (i = 1; i <= floornum; i++) {
            floors[i].collider = "s";
          }
          for (i = 1; i <= spikenum; i++) {
            spikes[i].collider = "s";
          }
        }
      } else {
        ppress = false;
      }
      if (kb.pressing("right")) {
        if (rightpress == false) {
          rightpress = true;
          selectedTile++;
          if (selectedTile == 18) {
            selectedTile = 0;
          }
        }
      } else {
        rightpress = false;
      }

      if (kb.pressing("left")) {
        if (leftpress == false) {
          leftpress = true;
          selectedTile--;
          if (selectedTile == -1) {
            selectedTile = 17;
          }
        }
      } else {
        leftpress = false;
      }
      if (kb.pressing("up")) {
        if (uppress == false) {
          uppress = true;
          tileType++;
          if (tileType == 5) {
            tileType = 0;
          }
        }
      } else {
        uppress = false;
      }
      if (kb.pressing("down") && !kb.pressing("s")) {
        if (downpress == false) {
          downpress = true;
          tileType--;
          if (tileType == -1) {
            tileType = 4;
          }
        }
      } else {
        downpress = false;
      }
      if (kb.pressing("shift")) {
        mousepress = false;
      }
      if (mouse.pressing()) {
        if (mousepress == false) {
          mousepress = true;
          if (
            floor(mouseX / 16) >= 0 &&
            floor(mouseY / 16) >= 0 &&
            floor(mouseX / 16) <= stageWidth[0] &&
            floor(mouseY / 16) <= stageWidth[1]
          ) {
            dothis = true;
            for (let i = 0; i <= tilenum; i++) {
              if (
                tilePos[i][1] == floor(mouseX / 16) &&
                tilePos[i][2] == floor(mouseY / 16)
              ) {
                tilePos[i][0] = selectedTile;
                i = tilenum;
                dothis = false;
              }
            }
            if (dothis == true) {
              tilenum++;
              tilePos[tilenum] = [];
              tilePos[tilenum][0] = selectedTile;
              tilePos[tilenum][1] = floor(Math.trunc(mouseX) / 16);
              tilePos[tilenum][2] = floor(Math.trunc(mouseY) / 16);
            }
          }
        }
      } else {
        mousepress = false;
      }
      if (kb.pressing("space")) {
        if (spacepress == false) {
          spacepress = true;
          if (showFrame == true) {
            showFrame = false;
          } else {
            showFrame = true;
          }
        }
      } else {
        spacepress = false;
      }
      if (kb.pressing("enter")) {
        const context = canvas.getContext("2d");
        context.clearRect(0, 0, canvas.width, canvas.height);
      }
    } else {
      if (spikeMode == false) {
        if (kb.pressing("q")) {
          if (qpress == false) {
            qpress = true;
            spikeMode = true;
          }
        } else {
          qpress = false;
        }
        if (kb.pressing("f")) {
          if (fpress == false) {
            fpress = true;
            allSprites.visible = false;
            floorMode = false;
          }
        } else {
          fpress = false;
        }
        if (mouse.pressing()) {
          if (mousepress == false) {
            mousepress = true;
            if (floor(mouseX / 16) >= 0 && floor(mouseY / 16) >= 0) {
              dothis = true;
              for (let i = 1; i <= floornum; i++) {
                if (
                  floor(mouseX / 16) >= floorXs[i] &&
                  floor(mouseY / 16) >= floorYs[i] &&
                  floor(mouseX / 16) <= floorXs[i] + floorWidths[i] - 1 &&
                  floor(mouseY / 16) <= floorYs[i] + floorHeights[i] - 1
                ) {
                  selectedFloor = i;
                  i = floornum;
                  dothis = false;
                }
              }
              if (dothis == true) {
                floornum++;
                selectedFloor = floornum;
                floors[selectedFloor] = new Sprite();
                floorXs[selectedFloor] = floor(mouseX / 16);
                floorYs[selectedFloor] = floor(mouseY / 16);
                floorWidths[selectedFloor] = 1;
                floorHeights[selectedFloor] = 1;
                floors[selectedFloor].x =
                  floorXs[selectedFloor] * 16 + floorWidths[selectedFloor] * 8;
                floors[selectedFloor].y =
                  floorYs[selectedFloor] * 16 + floorHeights[selectedFloor] * 8;
                floors[selectedFloor].w = floorWidths[selectedFloor] * 16;
                floors[selectedFloor].h = floorHeights[selectedFloor] * 16;
                floors[selectedFloor].color = "blue";
              }
            }
          }
        } else {
          mousepress = false;
        }
        if (floornum > 0) {
          if (kb.pressing("right")) {
            if (rightpress == false && !kb.pressing("d")) {
              rightpress = true;
              dontBeWeird = floorWidths[selectedFloor];
              floorWidths[selectedFloor] = floorWidths[selectedFloor] + 1;
              if (floorWidths[selectedFloor] - 1 - dontBeWeird != 0) {
                floorWidths[selectedFloor] = floor(
                  (dontBeWeird + 1 - 1) / 10 + 1
                );
              }
              dontBeWeird = floorXs[selectedFloor];
              floorXs[selectedFloor] = floorXs[selectedFloor] + 1;
              if (floorXs[selectedFloor] - 1 - dontBeWeird != 0) {
                floorXs[selectedFloor] = floor((dontBeWeird + 1 - 1) / 10 + 1);
              }
              floorXs[selectedFloor] = floorXs[selectedFloor] - 1;
              floorWidths[selectedFloor] = floorWidths[selectedFloor] - 1;
              floorXs[selectedFloor] = floorXs[selectedFloor] + 1;
              if (
                floorXs[selectedFloor] + floorWidths[selectedFloor] >
                stageWidth[0]
              ) {
                floorXs[selectedFloor] =
                  stageWidth[0] - floorWidths[selectedFloor];
              }
              floors[selectedFloor].x =
                floorXs[selectedFloor] * 16 + floorWidths[selectedFloor] * 8;
            }
          } else {
            rightpress = false;
          }
          if (kb.pressing("left")) {
            if (leftpress == false && !kb.pressing("a")) {
              leftpress = true;

              dontBeWeird = floorWidths[selectedFloor];
              floorWidths[selectedFloor] = floorWidths[selectedFloor] + 1;
              if (floorWidths[selectedFloor] - 1 - dontBeWeird != 0) {
                floorWidths[selectedFloor] = floor(
                  (dontBeWeird + 1 - 1) / 10 + 1
                );
              }
              floorWidths[selectedFloor] = floorWidths[selectedFloor] - 1;
              dontBeWeird = floorXs[selectedFloor];
              floorXs[selectedFloor] = floorXs[selectedFloor] + 1;
              if (floorXs[selectedFloor] - 1 - dontBeWeird != 0) {
                floorXs[selectedFloor] = floor((dontBeWeird + 1 - 1) / 10 + 1);
              }
              floorXs[selectedFloor] = floorXs[selectedFloor] - 1;
              floorXs[selectedFloor] = floorXs[selectedFloor] - 1;
              if (floorXs[selectedFloor] == -1) {
                floorXs[selectedFloor] = 0;
              }
              floors[selectedFloor].x =
                floorXs[selectedFloor] * 16 + floorWidths[selectedFloor] * 8;
            }
          } else {
            leftpress = false;
          }
          if (kb.pressing("up")) {
            if (uppress == false && !kb.pressing("w")) {
              uppress = true;
              dontBeWeird = floorYs[selectedFloor];
              floorYs[selectedFloor] = floorYs[selectedFloor] + 1;
              if (floorYs[selectedFloor] - 1 - dontBeWeird != 0) {
                floorYs[selectedFloor] = floor((dontBeWeird + 1 - 1) / 10 + 1);
              }
              floorYs[selectedFloor] = floorYs[selectedFloor] - 1;
              dontBeWeird = floorHeights[selectedFloor];
              floorHeights[selectedFloor] = floorHeights[selectedFloor] + 1;
              if (floorHeights[selectedFloor] - 1 - dontBeWeird != 0) {
                floorHeights[selectedFloor] = floor(
                  (dontBeWeird + 1 - 1) / 10 + 1
                );
              }
              floorHeights[selectedFloor] = floorHeights[selectedFloor] - 1;
              floorYs[selectedFloor] = floorYs[selectedFloor] - 1;
              if (floorYs[selectedFloor] == -floorHeights[selectedFloor]) {
                floorYs[selectedFloor] = 1 - floorHeights[selectedFloor];
              }
              floors[selectedFloor].y =
                floorYs[selectedFloor] * 16 + floorHeights[selectedFloor] * 8;
            }
          } else {
            uppress = false;
          }
          if (kb.pressing("down")) {
            if (downpress == false && !kb.pressing("s")) {
              downpress = true;

              dontBeWeird = floorYs[selectedFloor];
              floorYs[selectedFloor] = floorYs[selectedFloor] + 1;
              if (floorYs[selectedFloor] - 1 - dontBeWeird != 0) {
                floorYs[selectedFloor] = floor((dontBeWeird + 1 - 1) / 10 + 1);
              }
              floorYs[selectedFloor] = floorYs[selectedFloor] - 1;
              dontBeWeird = floorHeights[selectedFloor];
              floorHeights[selectedFloor] = floorHeights[selectedFloor] + 1;
              if (floorHeights[selectedFloor] - 1 - dontBeWeird != 0) {
                floorHeights[selectedFloor] = floor(
                  (dontBeWeird + 1 - 1) / 10 + 1
                );
              }
              floorHeights[selectedFloor] = floorHeights[selectedFloor] - 1;
              floorYs[selectedFloor] = floorYs[selectedFloor] + 1;
              if (
                floorYs[selectedFloor] + floorHeights[selectedFloor] >
                stageWidth[1]
              ) {
                floorYs[selectedFloor] =
                  stageWidth[1] - floorHeights[selectedFloor];
              }
              floors[selectedFloor].y =
                floorYs[selectedFloor] * 16 + floorHeights[selectedFloor] * 8;
            }
          } else {
            downpress = false;
          }
          if (kb.pressing("d")) {
            if (dpress == false) {
              dpress = true;

              dontBeWeird = floorXs[selectedFloor];
              floorXs[selectedFloor] = floorXs[selectedFloor] + 1;
              if (floorXs[selectedFloor] - 1 - dontBeWeird != 0) {
                floorXs[selectedFloor] = floor((dontBeWeird + 1 - 1) / 10 + 1);
              }
              floorXs[selectedFloor] = floorXs[selectedFloor] - 1;
              dontBeWeird = floorWidths[selectedFloor];
              floorWidths[selectedFloor] = floorWidths[selectedFloor] + 1;
              if (
                floorXs[selectedFloor] + floorWidths[selectedFloor] >
                stageWidth[0]
              ) {
                floorWidths[selectedFloor] = floorWidths[selectedFloor] - 1;
                if (floorWidths[selectedFloor] - 1 - dontBeWeird != 0) {
                  floorWidths[selectedFloor] = floor(
                    (dontBeWeird + 1 - 1) / 10 + 1
                  );
                }
              }
              floors[selectedFloor].w = floorWidths[selectedFloor] * 16;

              floors[selectedFloor].x =
                floorXs[selectedFloor] * 16 + floorWidths[selectedFloor] * 8;
            }
          } else {
            dpress = false;
          }
          if (kb.pressing("a")) {
            if (apress == false) {
              dontBeWeird = floorXs[selectedFloor];
              floorXs[selectedFloor] = floorXs[selectedFloor] + 1;
              if (floorXs[selectedFloor] - 1 - dontBeWeird != 0) {
                floorXs[selectedFloor] = floor((dontBeWeird + 1 - 1) / 10 + 1);
              }
              floorXs[selectedFloor] = floorXs[selectedFloor] - 1;
              apress = true;
              dontBeWeird = floorWidths[selectedFloor];

              if (floorWidths[selectedFloor] != 1) {
                floorWidths[selectedFloor] = floorWidths[selectedFloor] - 1;
                if (floorWidths[selectedFloor] + 1 - dontBeWeird != 0) {
                  floorWidths[selectedFloor] = floor(
                    (dontBeWeird + 1 - 1) / 10 - 1
                  );
                }
                floors[selectedFloor].w = floorWidths[selectedFloor] * 16;
              }
              floors[selectedFloor].x =
                floorXs[selectedFloor] * 16 + floorWidths[selectedFloor] * 8;
            }
          } else {
            apress = false;
          }
          if (kb.pressing("s")) {
            if (spress == false) {
              dontBeWeird = floorYs[selectedFloor];
              floorYs[selectedFloor] = floorYs[selectedFloor] + 1;
              if (floorYs[selectedFloor] - 1 - dontBeWeird != 0) {
                floorYs[selectedFloor] = floor((dontBeWeird + 1 - 1) / 10 + 1);
              }
              floorYs[selectedFloor] = floorYs[selectedFloor] - 1;
              dontBeWeird = floorHeights[selectedFloor];
              spress = true;
              floorHeights[selectedFloor] = floorHeights[selectedFloor] + 1;
              if (floorHeights[selectedFloor] - 1 - dontBeWeird != 0) {
                floorHeights[selectedFloor] = floor(
                  (dontBeWeird + 1 - 1) / 10 + 1
                );
              }
              if (
                floorYs[selectedFloor] + floorHeights[selectedFloor] >
                stageWidth[1]
              ) {
                floorHeights[selectedFloor] = floorHeights[selectedFloor] - 1;
              }
              floors[selectedFloor].h = floorHeights[selectedFloor] * 16;

              floors[selectedFloor].y =
                floorYs[selectedFloor] * 16 + floorHeights[selectedFloor] * 8;
            }
          } else {
            spress = false;
          }
          if (kb.pressing("w")) {
            if (wpress == false) {
              dontBeWeird = floorYs[selectedFloor];
              floorYs[selectedFloor] = floorYs[selectedFloor] + 1;
              if (floorYs[selectedFloor] - 1 - dontBeWeird != 0) {
                floorYs[selectedFloor] = floor((dontBeWeird + 1 - 1) / 10 + 1);
              }
              floorYs[selectedFloor] = floorYs[selectedFloor] - 1;
              dontBeWeird = floorHeights[selectedFloor];
              wpress = true;
              if (floorHeights[selectedFloor] != 1) {
                floorHeights[selectedFloor] = floorHeights[selectedFloor] - 1;
                if (floorHeights[selectedFloor] + 1 - dontBeWeird != 0) {
                  floorHeights[selectedFloor] = floor(
                    (dontBeWeird + 1 - 1) / 10 - 1
                  );
                }
                if (floorYs[selectedFloor] == -floorHeights[selectedFloor]) {
                  floorYs[selectedFloor] = 1 - floorHeights[selectedFloor];
                }

                floors[selectedFloor].h = floorHeights[selectedFloor] * 16;
              }
              floors[selectedFloor].y =
                floorYs[selectedFloor] * 16 + floorHeights[selectedFloor] * 8;
            }
          } else {
            wpress = false;
          }
        }
        if (kb.pressing("backspace")) {
          if (zpress == false && floornum > 0) {
            zpress = true;
            for (i = selectedFloor + 1; i <= floornum; i++) {
              floorXs[i - 1] = floorXs[i];
              floorYs[i - 1] = floorYs[i];
              floorWidths[i - 1] = floorWidths[i];
              floorHeights[i - 1] = floorHeights[i];
            }
            for (i = selectedFloor; i <= floornum; i++) {
              floors[i].x = floorXs[i] * 16 + floorWidths[i] * 8;
              floors[i].y = floorYs[i] * 16 + floorHeights[i] * 8;
              floors[i].w = floorWidths[i] * 16;
              floors[i].h = floorHeights[i] * 16;
            }
            hell = floorXs.pop();
            hell = floorYs.pop();
            hell = floorWidths.pop();
            hell = floorHeights.pop();
            floors[floornum].remove();
            if (selectedFloor == floornum) {
              selectedFloor--;
            }
            floornum--;
          }
        } else {
          zpress = false;
        }
        if (kb.pressing("p")) {
          if (pressP == false) {
            pressP = true;
            fuckingPrint = "FloorXs: [";
            for (let i = 1; i <= floornum; i++) {
              if (floorXs[i] != "") {
                fuckingPrint = fuckingPrint + floorXs[i];
                if (i != floornum && floorXs[i + 1] != "") {
                  fuckingPrint = fuckingPrint + ", ";
                }
              }
            }
            fuckingPrint = fuckingPrint + "] FloorYs: [";
            for (let i = 1; i <= floornum; i++) {
              if (floorYs[i] != "") {
                fuckingPrint = fuckingPrint + floorYs[i];
                if (i != floornum && floorYs[i + 1] != "") {
                  fuckingPrint = fuckingPrint + ", ";
                }
              }
            }
            fuckingPrint = fuckingPrint + "] FloorWidths: [";
            for (let i = 1; i <= floornum; i++) {
              if (floorWidths[i] != "") {
                fuckingPrint = fuckingPrint + floorWidths[i];
                if (i != floornum && floorWidths[i + 1] != "") {
                  fuckingPrint = fuckingPrint + ", ";
                }
              }
            }
            fuckingPrint = fuckingPrint + "] FloorHeights: [";
            for (let i = 1; i <= floornum; i++) {
              if (floorHeights[i] != "") {
                fuckingPrint = fuckingPrint + floorHeights[i];
                if (i != floornum && floorHeights[i + 1] != "") {
                  fuckingPrint = fuckingPrint + ", ";
                }
              }
            }
            decktext.innerHTML = 'Floor Codes: "' + fuckingPrint + ']"';
          }
        } else {
          pressP = false;
        }
      } else {
        if (kb.pressing("q")) {
          if (qpress == false) {
            qpress = true;
            spikeMode = false;
          }
        } else {
          qpress = false;
        }
        if (mouse.pressing()) {
          if (mousepress == false) {
            mousepress = true;
            if (floor(mouseX / 16) >= 0 && floor(mouseY / 16) >= 0) {
              dothis = true;
              for (let i = 1; i <= spikenum; i++) {
                if (
                  floor(mouseX / 16) >= 0 &&
                  floor(mouseY / 16) >= 0 &&
                  floor(mouseX / 16) <= stageWidth[0] &&
                  floor(mouseY / 16) <= stageWidth[1] &&
                  floor(mouseX / 16) == spikeXs[i] &&
                  floor(mouseY / 16) == spikeYs[i]
                ) {
                  for (j = i + 1; j <= spikenum; j++) {
                    spikeXs[i] = spikeXs[j];
                    spikeYs[i] = spikeYs[j];
                    spikes[i].x = spikeXs[i] * 16 + 8;
                    spikes[i].y = spikeYs[i] * 16 + 8;
                  }
                  hell = spikeXs.pop();
                  hell = spikeYs.pop();
                  spikes[spikenum].remove();
                  i = spikenum;
                  spikenum--;
                  dothis = false;
                }
              }
              if (dothis == true) {
                spikenum++;
                spikes[spikenum] = new Sprite();
                spikeXs[spikenum] = floor(mouseX / 16);
                spikeYs[spikenum] = floor(mouseY / 16);
                spikes[spikenum].x = spikeXs[spikenum] * 16 + 8;
                spikes[spikenum].y = spikeYs[spikenum] * 16 + 8;
                spikes[spikenum].w = 16;
                spikes[spikenum].h = 16;
                spikes[spikenum].color = "red";
              }
            }
          }
        } else {
          mousepress = false;
        }
        if (kb.pressing("p")) {
          if (pressP == false) {
            pressP = true;
            fuckingPrint = "SpikeXs: [";
            for (let i = 1; i <= spikenum; i++) {
              fuckingPrint = fuckingPrint + spikeXs[i];
              if (i != spikenum) {
                fuckingPrint = fuckingPrint + ", ";
              }
            }
            fuckingPrint = fuckingPrint + "] SpikeYs: [";
            for (let i = 1; i <= spikenum; i++) {
              fuckingPrint = fuckingPrint + spikeYs[i];
              if (i != spikenum) {
                fuckingPrint = fuckingPrint + ", ";
              }
            }
            decktext.innerHTML = 'Floor Codes: "' + fuckingPrint + ']"';
          }
        } else {
          pressP = false;
        }
      }
    }
  } else {
    player.rotation = 0;
    player.vel.x = 0;

    if (kb.pressing("p")) {
      if (ppress == false) {
        player.x = -10;
        player.y = -10;

        player.collider = "s";
        ppress = true;
        playtesting = false;
        allSprites.visible = false;
        for (i = 1; i <= floornum; i++) {
          floors[i].collider = "null";
        }
        for (i = 1; i <= spikenum; i++) {
          spikes[i].collider = "null";
        }
      }
    } else {
      ppress = false;
    }

    if (player.vel.y > 0.5) {
      onground = false;
    }
    for (let i = 1; i < floors.length; i++) {
      if (player.colliding(floors[i])) {
        if (player.y <= floors[i].y - floors[i].h / 2) {
          if (onground == false) {
            player.vel.y = 0;

            player.y = floors[i].y - floors[i].h / 2 - 9.2;
          }
          onground = true;
          i = floors.length;
        } else {
          if (player.y <= floors[i].y + floors[i].h) {
            ispress = 0;

            if (player.x < floors[i].x) {
              letmove = 1;
              player.x = floors[i].x - floors[i].w / 2 - 10;
            } else {
              letmove = 2;
              player.x = floors[i].x + floors[i].w / 2 + 10;
            }
            if (onground == false) {
            }
            ispress = 0;
          } else {
            player.vel.y = 0;
          }
        }
      }
    }

    for (let i = 1; i < spikes.length; i++) {
      if (player.overlapping(spikes[i])) {
        player.vel.y = 0;
        ispress = 0;
        player.x = spawnPos[0] * 16;
        player.y = spawnPos[1] * 16 - 8;
      }
    }

    if (player.y > stageWidth[1] * 16 + 16) {
      player.vel.y = 0;
      ispress = 0;
      player.x = spawnPos[0] * 16;
      player.y = spawnPos[1] * 16 - 8;
    }
    if (kb.pressing("space") && onground == true) {
      onground = false;
      player.vel.y = -4;
    }
    if (kb.pressing("right")) {
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
    for (let i = 1; i < floors.length; i++) {
      if (player.colliding(floors[i])) {
        if (player.y > floors[i].y - floors[i].h / 2) {
          if (player.y < floors[i].y + floors[i].h / 2) {
            player.x = player.x - 3 * (ispress / 20);

            if (onground == true && ispress == 0) {
              if (player.x < floors[i].x) {
                player.x = player.x - 1;
              } else {
                player.x = player.x + 1;
              }
            }
            ispress = 0;
          }
        }
      }
    }
    for (let i = 1; i < floors.length; i++) {
      if (player.colliding(floors[i])) {
        if (player.y < floors[i].y - floors[i].h / 2) {
          if (player.x > floors[i].x) {
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
              player.y =
                player.y - (player.y - (floors[i].y - floors[i].h / 2) - ok2);
            } else {
              ok2 = player.y - (floors[i].y - floors[i].h / 2);
            }
          } else {
            if (player.x < floors[i].x - floors[i].w / 2) {
              if (ok1 != 0 && ispress == 0) {
                if (ok1 < -181) {
                  player.x = floors[i].x - floors[i].w / 2 - 11;
                } else {
                  player.x =
                    player.x -
                    (player.x - (floors[i].x + floors[i].w / 2) - ok1);
                }
              } else {
                ok1 = player.x - (floors[i].x + floors[i].w / 2);
              }
              if (ok2 != 0 && onground == true) {
                player.y =
                  player.y - (player.y - (floors[i].y - floors[i].h / 2) - ok2);
              } else {
                ok2 = player.y - (floors[i].y - floors[i].h / 2);
              }
            }
          }
          i = floors.length;
        }
      }

      if (i == floors.length - 2) {
        ok1 = 0;
        ok2 = 0;
      }
    }
  }
  if (player.x < 12) {
    player.x = 12;
  }

  if (player.x > stageWidth[0] * 16 - 12) {
    player.x = stageWidth[0] * 16 - 12;
  }
  for (let i = 0; i <= tilenum; i++) {
    drawTheShit = true;
    if (kb.pressing("enter")) {
      if (tilePos[i][0] == 17) {
        drawTheShit = false;
      }
    }
    if (drawTheShit == true) {
      image(
        tiles[tileType][tilePos[i][0]],
        Math.trunc(tilePos[i][1] * 16),
        Math.trunc(tilePos[i][2] * 16)
      );
    }
  }
  if (playtesting == false) {
    if (showFrame == true && !kb.pressing("enter")) {
      fuckinXshit = floor(stageWidth[0] / 10) + 1;
      fuckinYshit = floor(stageWidth[1] / 10) + 1;
      for (let i = 0; i < fuckinXshit; i++) {
        for (let j = 0; j < fuckinYshit; j++) {
          image(test, i * 160, j * 160);
        }
      }
      if (floorMode == false) {
        image(tiles[tileType][selectedTile], 0, 0);
      }
    }
    if (kb.pressing("s")) {
      if (pressS == false && floorMode == false) {
        pressS = true;
        fuckingPrint = "";
        for (let i = 0; i <= tilenum; i++) {
          if (tilePos[i][0] != 17) {
            fuckingPrint = fuckingPrint + tilePos[i];
            if (i != tilenum && tilePos[i + 1][0] != 17) {
              fuckingPrint = fuckingPrint + "and";
            }
          } else {
            if (i != tilenum && tilePos[i + 1][0] != 17 && fuckingPrint != "") {
              fuckingPrint = fuckingPrint + "and";
            }
          }
        }
        decktext.innerHTML = 'Save Code: "' + fuckingPrint + '"';
      }
    } else {
      pressS = false;
    }
    if (kb.pressing("escape")) {
      decktext.innerHTML = "Save Code:";
    }

    if (kb.pressing("alt")) {
      if (pressZ == false && floorMode == false) {
        pressZ = true;
        fuckingPrint = "";
        for (let i = 0; i <= tilenum; i++) {
          if (tilePos[i][0] != 17) {
            fuckingPrint = fuckingPrint + tilePos[i];
            if (i != tilenum && tilePos[i + 1][0] != 17) {
              fuckingPrint = fuckingPrint + "and";
            }
          } else {
            if (i != tilenum && tilePos[i + 1][0] != 17 && fuckingPrint != "") {
              fuckingPrint = fuckingPrint + "and";
            }
          }
        }
        fuckingPrint = fuckingPrint + "]";
        for (let i = 1; i <= floornum + 1; i++) {
          validi[i] = false;
          if (
            floorXs[i] != "" &&
            floorXs[i] <= stageWidth[0] &&
            floorXs[i] >= 0 &&
            floorYs[i] != "" &&
            floorYs[i] <= stageWidth[1] &&
            floorYs[i] >= -floorHeights[i] &&
            floorXs[i]+1-1 == floorXs[i] &&
            floorYs[i]+1-1 == floorYs[i] &&
            floorWidths[i]+1-1 == floorWidths[i] &&
            floorHeights[i]+1-1 == floorHeights[i] &&
            floorWidths[i] != "" &&
            floorHeights[i] != ""
          ) {
            validi[i] = true;
          }
        }
        console.log(validi);
        for (let j = 0; j <= 3; j++) {
          for (let i = 1; i <= floornum + 1; i++) {
            if (validi[i] == true) {
              if (validi[i - 1] == true) {
                fuckingPrint = fuckingPrint + ", ";
              }
              if (j == 0) {
                fuckingPrint = fuckingPrint + floorXs[i];
              }
              if (j == 1) {
                fuckingPrint = fuckingPrint + floorYs[i];
              }
              if (j == 2) {
                fuckingPrint = fuckingPrint + floorWidths[i];
              }
              if (j == 3) {
                fuckingPrint = fuckingPrint + floorHeights[i];
              }
            }
          }
          fuckingPrint = fuckingPrint + "]";
        }
        for (let i = 1; i <= spikenum; i++) {
          fuckingPrint = fuckingPrint + spikeXs[i];
          if (i != spikenum) {
            fuckingPrint = fuckingPrint + ", ";
          }
        }
        fuckingPrint = fuckingPrint + "]";
        for (let i = 1; i <= spikenum; i++) {
          fuckingPrint = fuckingPrint + spikeYs[i];
          if (i != spikenum) {
            fuckingPrint = fuckingPrint + ", ";
          }
        }
        fuckingPrint = fuckingPrint + "]" + stageWidth[0] + "]" + stageWidth[1];
        savename = wordsa.value;
        if (savename == "") {
          savename = "New Level";
        }
       // let writer = createWriter(savename + ".txt");
        //writer.write([fuckingPrint]);
       // writer.close();
      }
    } else {
      pressZ = false;
    }

    if (kb.pressing("enter")) {
      if (enterPress == false) {
        enterPress = true;

        fuckingPrint = "";
        for (let i = 0; i <= tilenum; i++) {
          fuckingPrint = fuckingPrint + tilePos[i];
          if (i != tilenum) {
            fuckingPrint = fuckingPrint + "and";
          }
        }
        saveCanvas(fuckingPrint);
      }
    } else {
      enterPress = false;
    }
  }
}

buton.addEventListener("pointerdown", (event) => {
  for (let i = 0; i <= tilenum; i++) {
    tilePos[i] = [];
  }
  tilenum = -1;
  wordval = word.value;
  if (wordval != "") {
    array = wordval.split("and");
    for (let i = 0; i < array.length; i++) {
      tilePos[i] = array[i].split(",");
      tilenum++;
    }
  }
  word.value = "";
});

buton2.addEventListener("pointerdown", (event) => {
  wordxval = wordx.value;
  wordyval = wordy.value;
  if (wordxval != "" && wordyval != "") {
    spawnPos[0] = wordxval;
    spawnPos[1] = wordyval;
  }
  wordx.value = "";
  wordy.value = "";
});

buton3.addEventListener("pointerdown", (event) => {
  wordxval = word2x.value;
  wordyval = word2y.value;
  if (wordxval != "" && wordyval != "") {
    //new Canvas(wordxval * 16, wordyval * 16, "pixelated x2");
    stageWidth[0] = wordxval;
    stageWidth[1] = wordyval;
    createCanvas(stageWidth[0] * 16, stageWidth[1] * 16)
  }
  word2x.value = "";
  word2y.value = "";
});
