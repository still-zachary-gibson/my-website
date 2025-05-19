let piano = document.querySelector("div");
let mesasge = document.querySelector("span");
let clickcount = 0;
let thefunnyclick = 0;
let gotten = 0;
piano.addEventListener(
  "pointerdown",
  (event) => {
    const thing = document.getElementById(event.target.id);
    if (clickcount < 5) {
      if (thing.style.fontSize !== "64px") {
        thing.style.fontSize = "64px";
        thing.style.backgroundColor = "#EB838E";
        clickcount++;
        mesasge.innerHTML =
          "Alright, make sure the other player isn't looking, you have " +
          (5 - clickcount) +
          " more ships to place!";
        if (clickcount == 5) {
          mesasge.innerHTML =
            "All ships have been placed! Hand it off to the other player and see how long it takes them! Try to find them all!";
          const boxes = document.querySelectorAll("div");
          for (var i in boxes) {
            if (i < 101) {
              boxes[i].style.backgroundColor = "rgb(255, 255, 255, 0)";
            }
          }
        }
      } else {
        thing.style.fontSize = "2px";
        thing.style.backgroundColor = "rgb(255, 255, 255, 0)";
        clickcount--;
        mesasge.innerHTML =
          "Alright, make sure the other player isn't looking, you have " +
          (5 - clickcount) +
          " more ships to place!";
      }
    } else {
      if (gotten < 5) {
        if (thing.style.backgroundColor == "rgba(255, 255, 255, 0)") {
          thefunnyclick++;
          mesasge.innerHTML =
            "Try to find them all!<br>Clicks: " + thefunnyclick;
          thing.style.fontSize = getComputedStyle(thing).fontSize;
          if (thing.style.fontSize == "64px") {
            gotten++;
            thing.style.backgroundColor = "#ff0000";
            if (gotten == 5) {
              mesasge.innerHTML =
                "Good job you found them all in only " +
                thefunnyclick +
                " clicks!<br>Click to restart.";
            }
          } else {
            thing.style.backgroundColor = "#000000";
          }
        }
      } else {
        mesasge.innerHTML = "Alright, make sure the other player isn't looking, you have 5 more ships to place!";
	const boxes = document.querySelectorAll("div");
        for (var i in boxes) {
          if (i < 101) {
            boxes[i].style.backgroundColor = "rgb(255, 255, 255, 0)";
            boxes[i].style.fontSize = "2px";
          }
        }

        clickcount = 0;
        thefunnyclick = 0;
        gotten = 0;
      }
    }
  },
  false
);
