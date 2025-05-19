let piano = document.querySelector("div");
let mesasge = document.querySelector("span");
let tableletter = ["", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
let clickcount = 0;
let thefunnyclick = 0;
let gotten = 0;
let yeahuh = false;
let victory = false;
let idkman = false;
function setup() {
  for (var i = 1; i <= 10; i++) {
    coolinlet = tableletter[i];
    for (var j = 1; j <= 10; j++) {
      thingradarhj = coolinlet + String(j);
      thingradarhj = document.getElementById(thingradarhj);
      thingradarhj.style.fontSize = "2px";
    }
  }
}

piano.addEventListener(
  "pointerdown",
  (event) => {
    if (victory == false) {
      var thing = document.getElementById(event.target.id);
      while (yeahuh == false) {
        doesthiswinig = 0;

        string = thing.id;
        coolinlet = string.charAt(0);
        coolinnum = string.charAt(1);
        if (coolinnum == "1") {
          coolin0 = string.charAt(2);
          if (coolin0 == "0") {
            coolinnum = "10";
          }
        }
        if (coolinlet == "j") {
          yeahuh = true;
        } else {
          for (var i = 0; i <= 10; i++) {
            if (coolinlet == tableletter[i]) {
              idkman = tableletter[i + 1] + coolinnum;
              idkman2 = document.getElementById(idkman);
            }
          }
          if (idkman2.style.fontSize !== "64px") {
            thing = idkman2;
            string2 = thing.id;
            coolinlet2 = string2.charAt(0);
            if (coolinlet2 == "j") {
              yeahuh = true;
            }
          } else {
            yeahuh = true;
          }
        }
      }

      if (thing.style.fontSize !== "64px") {
        thing.style.fontSize = "64px";
        if (clickcount % 2 == 0) {
          mesasge.innerHTML =
            "It's connect 4! First one to make a row of 4 wins! Yellow's turn!";
          thing.style.backgroundColor = "#EB1128";
          idkman = false;
          stoploop = 0;
          thing2 = thing;
          doesthiswinig = 0;
          while (idkman == false && stoploop < 8) {
            string = thing.id;
            coolinlet = string.charAt(0);
            coolinnum = string.charAt(1);
            if (coolinnum == "1") {
              coolin0 = string.charAt(2);
              if (coolin0 == "0") {
                coolinnum = "10";
              }
            }
            if (coolinlet == "j") {
              idkman = true;
            } else {
              for (var k = 0; k <= 10; k++) {
                if (coolinlet == tableletter[k]) {
                  idkman = tableletter[k + 1] + coolinnum;
                  idkman2 = document.getElementById(idkman);
                }
              }
              if (idkman2.style.backgroundColor != "rgb(235, 17, 40)") {
                idkman = true;
              } else {
                doesthiswinig++;
                thing = idkman2;
                idkman = false;
                string = thing.id;
                if (doesthiswinig == 3) {
                  mesasge.innerHTML = "RED WINS!<br>Click to restart!";
                  victory = true;
                  idkman = true;
                }
              }
            }
            stoploop++;
          }
          idkman = false;
          stoploop = 0;
          doesthiswinig = 0;
          thing = thing2;
          while (idkman == false && stoploop < 8) {
            string = thing.id;
            coolinlet = string.charAt(0);
            coolinnum = string.charAt(1);
            if (coolinnum == "1") {
              coolin0 = string.charAt(2);
              if (coolin0 == "0") {
                coolinnum = "10";
              }
            }
            if (coolinnum == "10") {
              idkman = true;
            } else {
              realnbum = parseInt(coolinnum) + 1;
              idkman = coolinlet + realnbum;
              idkman2 = document.getElementById(idkman);

              if (idkman2.style.backgroundColor != "rgb(235, 17, 40)") {
                idkman = true;
              } else {
                doesthiswinig++;
                thing = idkman2;
                idkman = false;
                string = thing.id;
                if (doesthiswinig == 3) {
                  mesasge.innerHTML = "RED WINS!<br>Click to restart!";
                  victory = true;
                  idkman = true;
                }
              }
            }
            stoploop++;
          }
          idkman = false;
          stoploop = 0;
          doesthiswinig = 0;
          thing = thing2;
          while (idkman == false && stoploop < 8) {
            string = thing.id;
            coolinlet = string.charAt(0);
            coolinnum = string.charAt(1);
            if (coolinnum == "1") {
              coolin0 = string.charAt(2);
              if (coolin0 == "0") {
                coolinnum = "10";
              }
            }
            if (coolinnum == "1") {
              idkman = true;
            } else {
              realnbum = parseInt(coolinnum) - 1;
              idkman = coolinlet + realnbum;
              idkman2 = document.getElementById(idkman);

              if (idkman2.style.backgroundColor != "rgb(235, 17, 40)") {
                idkman = true;
              } else {
                doesthiswinig++;
                thing = idkman2;
                idkman = false;
                string = thing.id;
                if (doesthiswinig == 3) {
                  mesasge.innerHTML = "RED WINS!<br>Click to restart!";
                  victory = true;
                  idkman = true;
                }
              }
            }
            stoploop++;
          }
          idkman = false;
          stoploop = 0;
          doesthiswinig = 0;
          thing = thing2;
          while (idkman == false && stoploop < 8) {
            string = thing.id;
            coolinlet = string.charAt(0);
            coolinnum = string.charAt(1);
            if (coolinnum == "1") {
              coolin0 = string.charAt(2);
              if (coolin0 == "0") {
                coolinnum = "10";
              }
            }
            if (coolinnum == "10" || coolinlet == "j") {
              idkman = true;
            } else {
              realnbum = parseInt(coolinnum) + 1;
              for (var k = 0; k <= 10; k++) {
                if (coolinlet == tableletter[k]) {
                  idkman = tableletter[k + 1] + realnbum;
                  idkman2 = document.getElementById(idkman);
                }
              }

              if (idkman2.style.backgroundColor != "rgb(235, 17, 40)") {
                idkman = true;
              } else {
                doesthiswinig++;
                thing = idkman2;
                idkman = false;
                string = thing.id;
                if (doesthiswinig == 3) {
                  mesasge.innerHTML = "RED WINS!<br>Click to restart!";
                  victory = true;
                  idkman = true;
                }
              }
            }
            stoploop++;
          }

          doesthiswinig = 0;
          idkman = false;
          stoploop = 0;
          thing = thing2;
          while (idkman == false && stoploop < 8) {
            string = thing.id;
            coolinlet = string.charAt(0);
            coolinnum = string.charAt(1);
            if (coolinnum == "1") {
              coolin0 = string.charAt(2);
              if (coolin0 == "0") {
                coolinnum = "10";
              }
            }
            if (coolinnum == "1" || coolinlet == "j") {
              idkman = true;
            } else {
              realnbum = parseInt(coolinnum) - 1;
              for (var k = 0; k <= 10; k++) {
                if (coolinlet == tableletter[k]) {
                  idkman = tableletter[k + 1] + realnbum;
                  idkman2 = document.getElementById(idkman);
                }
              }

              if (idkman2.style.backgroundColor != "rgb(235, 17, 40)") {
                idkman = true;
              } else {
                doesthiswinig++;
                thing = idkman2;
                idkman = false;
                string = thing.id;
                if (doesthiswinig == 3) {
                  mesasge.innerHTML = "RED WINS!<br>Click to restart!";
                  victory = true;
                  idkman = true;
                }
              }
            }
            stoploop++;
          }
          idkman = false;
          stoploop = 0;
          doesthiswinig = 0;
          thing = thing2;
          while (idkman == false && stoploop < 8) {
            string = thing.id;
            coolinlet = string.charAt(0);
            coolinnum = string.charAt(1);
            if (coolinnum == "1") {
              coolin0 = string.charAt(2);
              if (coolin0 == "0") {
                coolinnum = "10";
              }
            }
            if (coolinnum == "10" || coolinlet == "a") {
              idkman = true;
            } else {
              realnbum = parseInt(coolinnum) + 1;
              for (var k = 0; k <= 10; k++) {
                if (coolinlet == tableletter[k]) {
                  idkman = tableletter[k - 1] + realnbum;
                  idkman2 = document.getElementById(idkman);
                }
              }

              if (idkman2.style.backgroundColor != "rgb(235, 17, 40)") {
                idkman = true;
              } else {
                doesthiswinig++;
                thing = idkman2;
                idkman = false;
                string = thing.id;
                if (doesthiswinig == 3) {
                  mesasge.innerHTML = "RED WINS!<br>Click to restart!";
                  victory = true;
                  idkman = true;
                }
              }
            }
            stoploop++;
          }

          doesthiswinig = 0;
          idkman = false;
          stoploop = 0;
          thing = thing2;
          while (idkman == false && stoploop < 8) {
            string = thing.id;
            coolinlet = string.charAt(0);
            coolinnum = string.charAt(1);
            if (coolinnum == "1") {
              coolin0 = string.charAt(2);
              if (coolin0 == "0") {
                coolinnum = "10";
              }
            }
            if (coolinnum == "1" || coolinlet == "a") {
              idkman = true;
            } else {
              realnbum = parseInt(coolinnum) - 1;
              for (var k = 0; k <= 10; k++) {
                if (coolinlet == tableletter[k]) {
                  idkman = tableletter[k - 1] + realnbum;
                  idkman2 = document.getElementById(idkman);
                }
              }

              if (idkman2.style.backgroundColor != "rgb(235, 17, 40)") {
                idkman = true;
              } else {
                doesthiswinig++;
                thing = idkman2;
                idkman = false;
                string = thing.id;
                if (doesthiswinig == 3) {
                  mesasge.innerHTML = "RED WINS!<br>Click to restart!";
                  victory = true;
                  idkman = true;
                }
              }
            }
            stoploop++;
          }
        } else {
          mesasge.innerHTML =
            "It's connect 4! First one to make a row of 4 wins! Red's turn!";
          thing.style.backgroundColor = "#FFF307";
          idkman = false;
          stoploop = 0;
          thing2 = thing;
          doesthiswinig = 0;
          while (idkman == false && stoploop < 8) {
            string = thing.id;
            coolinlet = string.charAt(0);
            coolinnum = string.charAt(1);
            if (coolinnum == "1") {
              coolin0 = string.charAt(2);
              if (coolin0 == "0") {
                coolinnum = "10";
              }
            }
            if (coolinlet == "j") {
              idkman = true;
            } else {
              for (var k = 0; k <= 10; k++) {
                if (coolinlet == tableletter[k]) {
                  idkman = tableletter[k + 1] + coolinnum;
                  idkman2 = document.getElementById(idkman);
                }
              }
              if (idkman2.style.backgroundColor != "rgb(255, 243, 7)") {
                idkman = true;
              } else {
                doesthiswinig++;
                thing = idkman2;
                idkman = false;
                string = thing.id;
                if (doesthiswinig == 3) {
                  mesasge.innerHTML = "YELLOW WINS!<br>Click to restart!";
                  victory = true;
                  idkman = true;
                }
              }
            }
            stoploop++;
          }
          idkman = false;
          stoploop = 0;
          doesthiswinig = 0;
          thing = thing2;
          while (idkman == false && stoploop < 8) {
            string = thing.id;
            coolinlet = string.charAt(0);
            coolinnum = string.charAt(1);
            if (coolinnum == "1") {
              coolin0 = string.charAt(2);
              if (coolin0 == "0") {
                coolinnum = "10";
              }
            }
            if (coolinnum == "10") {
              idkman = true;
            } else {
              realnbum = parseInt(coolinnum) + 1;
              idkman = coolinlet + realnbum;
              idkman2 = document.getElementById(idkman);

              if (idkman2.style.backgroundColor != "rgb(255, 243, 7)") {
                idkman = true;
              } else {
                doesthiswinig++;
                thing = idkman2;
                idkman = false;
                string = thing.id;
                if (doesthiswinig == 3) {
                  mesasge.innerHTML = "YELLOW WINS!<br>Click to restart!";
                  victory = true;
                  idkman = true;
                }
              }
            }
            stoploop++;
          }
          idkman = false;
          stoploop = 0;
          doesthiswinig = 0;
          thing = thing2;
          while (idkman == false && stoploop < 8) {
            string = thing.id;
            coolinlet = string.charAt(0);
            coolinnum = string.charAt(1);
            if (coolinnum == "1") {
              coolin0 = string.charAt(2);
              if (coolin0 == "0") {
                coolinnum = "10";
              }
            }
            if (coolinnum == "1") {
              idkman = true;
            } else {
              realnbum = parseInt(coolinnum) - 1;
              idkman = coolinlet + realnbum;
              idkman2 = document.getElementById(idkman);

              if (idkman2.style.backgroundColor != "rgb(255, 243, 7)") {
                idkman = true;
              } else {
                doesthiswinig++;
                thing = idkman2;
                idkman = false;
                string = thing.id;
                if (doesthiswinig == 3) {
                  mesasge.innerHTML = "YELLOW WINS!<br>Click to restart!";
                  victory = true;
                  idkman = true;
                }
              }
            }
            stoploop++;
          }
          idkman = false;
          stoploop = 0;
          doesthiswinig = 0;
          thing = thing2;
          while (idkman == false && stoploop < 8) {
            string = thing.id;
            coolinlet = string.charAt(0);
            coolinnum = string.charAt(1);
            if (coolinnum == "1") {
              coolin0 = string.charAt(2);
              if (coolin0 == "0") {
                coolinnum = "10";
              }
            }
            if (coolinnum == "10" || coolinlet == "j") {
              idkman = true;
            } else {
              realnbum = parseInt(coolinnum) + 1;
              for (var k = 0; k <= 10; k++) {
                if (coolinlet == tableletter[k]) {
                  idkman = tableletter[k + 1] + realnbum;
                  idkman2 = document.getElementById(idkman);
                }
              }

              if (idkman2.style.backgroundColor != "rgb(255, 243, 7)") {
                idkman = true;
              } else {
                doesthiswinig++;
                thing = idkman2;
                idkman = false;
                string = thing.id;
                if (doesthiswinig == 3) {
                  mesasge.innerHTML = "YELLOW WINS!<br>Click to restart!";
                  victory = true;
                  idkman = true;
                }
              }
            }
            stoploop++;
          }

          doesthiswinig = 0;
          idkman = false;
          stoploop = 0;
          thing = thing2;
          while (idkman == false && stoploop < 8) {
            string = thing.id;
            coolinlet = string.charAt(0);
            coolinnum = string.charAt(1);
            if (coolinnum == "1") {
              coolin0 = string.charAt(2);
              if (coolin0 == "0") {
                coolinnum = "10";
              }
            }
            if (coolinnum == "1" || coolinlet == "j") {
              idkman = true;
            } else {
              realnbum = parseInt(coolinnum) - 1;
              for (var k = 0; k <= 10; k++) {
                if (coolinlet == tableletter[k]) {
                  idkman = tableletter[k + 1] + realnbum;
                  idkman2 = document.getElementById(idkman);
                }
              }

              if (idkman2.style.backgroundColor != "rgb(255, 243, 7)") {
                idkman = true;
              } else {
                doesthiswinig++;
                thing = idkman2;
                idkman = false;
                string = thing.id;
                if (doesthiswinig == 3) {
                  mesasge.innerHTML = "YELLOW WINS!<br>Click to restart!";
                  victory = true;
                  idkman = true;
                }
              }
            }
            stoploop++;
          }
          idkman = false;
          stoploop = 0;
          doesthiswinig = 0;
          thing = thing2;
          while (idkman == false && stoploop < 8) {
            string = thing.id;
            coolinlet = string.charAt(0);
            coolinnum = string.charAt(1);
            if (coolinnum == "1") {
              coolin0 = string.charAt(2);
              if (coolin0 == "0") {
                coolinnum = "10";
              }
            }
            if (coolinnum == "10" || coolinlet == "a") {
              idkman = true;
            } else {
              realnbum = parseInt(coolinnum) + 1;
              for (var k = 0; k <= 10; k++) {
                if (coolinlet == tableletter[k]) {
                  idkman = tableletter[k - 1] + realnbum;
                  idkman2 = document.getElementById(idkman);
                }
              }

              if (idkman2.style.backgroundColor != "rgb(255, 243, 7)") {
                idkman = true;
              } else {
                doesthiswinig++;
                thing = idkman2;
                idkman = false;
                string = thing.id;
                if (doesthiswinig == 3) {
                  mesasge.innerHTML = "YELLOW WINS!<br>Click to restart!";
                  victory = true;
                  idkman = true;
                }
              }
            }
            stoploop++;
          }

          doesthiswinig = 0;
          idkman = false;
          stoploop = 0;
          thing = thing2;
          while (idkman == false && stoploop < 8) {
            string = thing.id;
            coolinlet = string.charAt(0);
            coolinnum = string.charAt(1);
            if (coolinnum == "1") {
              coolin0 = string.charAt(2);
              if (coolin0 == "0") {
                coolinnum = "10";
              }
            }
            if (coolinnum == "1" || coolinlet == "a") {
              idkman = true;
            } else {
              realnbum = parseInt(coolinnum) - 1;
              for (var k = 0; k <= 10; k++) {
                if (coolinlet == tableletter[k]) {
                  idkman = tableletter[k - 1] + realnbum;
                  idkman2 = document.getElementById(idkman);
                }
              }

              if (idkman2.style.backgroundColor != "rgb(255, 243, 7)") {
                idkman = true;
              } else {
                doesthiswinig++;
                thing = idkman2;
                idkman = false;
                string = thing.id;
                if (doesthiswinig == 3) {
                  mesasge.innerHTML = "YELLOW WINS!<br>Click to restart!";
                  victory = true;
                  idkman = true;
                }
              }
            }
            stoploop++;
          }
        }
        didthesoftloc = 0;
        for (var i = 1; i <= 10; i++) {
          coolinlet = tableletter[i];
          for (var j = 1; j <= 10; j++) {
            thingradarhj = coolinlet + String(j);
            thingradarhj = document.getElementById(thingradarhj);
            if (thingradarhj.style.fontSize == "64px") {
              didthesoftloc++;
            }
          }
        }
        console.log(didthesoftloc);
        if (didthesoftloc >= 100) {
          mesasge.innerHTML = "IT'S A DRAW!<br>Click to restart!";
          victory = true;
        }
        clickcount++;
        idkman = false;
        yeahuh = false;
      }
    }
    else
    {
	location.reload()
    }
  },
  false
);
