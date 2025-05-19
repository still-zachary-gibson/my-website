let deck = [
  "hA",
  "hK",
  "hQ",
  "hJ",
  "h10",
  "h9",
  "h8",
  "h7",
  "h6",
  "h5",
  "h4",
  "h3",
  "h2",
  "cA",
  "cK",
  "cQ",
  "cJ",
  "c10",
  "c9",
  "c8",
  "c7",
  "c6",
  "c5",
  "c4",
  "c3",
  "c2",
  "sA",
  "sK",
  "sQ",
  "sJ",
  "s10",
  "s9",
  "s8",
  "s7",
  "s6",
  "s5",
  "s4",
  "s3",
  "s2",
  "dA",
  "dK",
  "dQ",
  "dJ",
  "d10",
  "d9",
  "d8",
  "d7",
  "d6",
  "d5",
  "d4",
  "d3",
  "d2",
];
let thing1 = [];
let thing2 = [];
let thing3 = [];
let thing4 = [];
let thing5 = [];
let thing6 = [];
let thing7 = [];
let diamond = ["d0"];
let spade = ["s0"];
let heart = ["h0"];
let club = ["c0"];
let whattgu = 0;
let decktext = document.getElementById("dec");
let thin1text = document.getElementById("thin1");
let thin2text = document.getElementById("thin2");
let thin3text = document.getElementById("thin3");
let thin4text = document.getElementById("thin4");
let thin5text = document.getElementById("thin5");
let thin6text = document.getElementById("thin6");
let thin7text = document.getElementById("thin7");
let thinstext = document.getElementById("thins");
let thinhtext = document.getElementById("thinh");
let thindtext = document.getElementById("thind");
let thinctext = document.getElementById("thinc");
let efkjwwkjnerjhe = document.getElementById("yeah");
let infotext = document.getElementById("info");
let doshit = 0;
let idkman1 = null;
let idkman2 = null;
let isclick = 0;

//alert("TEST ME")

//function setup() {
  deck.sort(() => Math.random() - 0.5);

  setupreal();
//}
function setupreal() {
  for (var i = 0; i <= 0; i++) {
    var randomfuckin = Math.floor(Math.random() * deck.length);
    thing1[thing1.length] = deck[randomfuckin];
    const x = deck.splice(randomfuckin, 1);
  }
  for (var i = 0; i <= 1; i++) {
    var randomfuckin = Math.floor(Math.random() * deck.length);
    thing2[thing2.length] = deck[randomfuckin];
    const x = deck.splice(randomfuckin, 1);
  }
  for (var i = 0; i <= 2; i++) {
    var randomfuckin = Math.floor(Math.random() * deck.length);
    thing3[thing3.length] = deck[randomfuckin];
    const x = deck.splice(randomfuckin, 1);
  }
  for (var i = 0; i <= 3; i++) {
    var randomfuckin = Math.floor(Math.random() * deck.length);
    thing4[thing4.length] = deck[randomfuckin];
    const x = deck.splice(randomfuckin, 1);
  }
  for (var i = 0; i <= 4; i++) {
    var randomfuckin = Math.floor(Math.random() * deck.length);
    thing5[thing5.length] = deck[randomfuckin];
    const x = deck.splice(randomfuckin, 1);
  }
  for (var i = 0; i <= 5; i++) {
    var randomfuckin = Math.floor(Math.random() * deck.length);
    thing6[thing6.length] = deck[randomfuckin];
    const x = deck.splice(randomfuckin, 1);
  }
  for (var i = 0; i <= 6; i++) {
    var randomfuckin = Math.floor(Math.random() * deck.length);
    thing7[thing7.length] = deck[randomfuckin];
    const x = deck.splice(randomfuckin, 1);
  }
  decktext.innerHTML = "D: " + deck[0];
  thin1.innerHTML = "1: " + thing1;
  thin2.innerHTML = "2: " + thing2;
  thin3.innerHTML = "3: " + thing3;
  thin4.innerHTML = "4: " + thing4;
  thin5.innerHTML = "5: " + thing5;
  thin6.innerHTML = "6: " + thing6;
  thin7.innerHTML = "7: " + thing7;
  thind.innerHTML = "D: [Empty]";
  thinh.innerHTML = "H: [Empty]";
  thinc.innerHTML = "C: [Empty]";
  thins.innerHTML = "S: [Empty]";
}

document.addEventListener("keydown", (event) => {
  if (isclick == 1) {
    isclick = 0;
  }
});
document.addEventListener("keydown", (event) => {
  if (isclick == 0) {
    var name = event.key;
    if (name === "Enter") {
    } else {
    }
    if (doshit == 0) {
      whattgu = 0;
      if (name === "1") {
        if (thing1[0] != undefined) {
          idkman1 = thing1;
          doshit = 1;
        }
      }
      if (name === "2") {
        if (thing2[0] != undefined) {
          idkman1 = thing2;
          doshit = 1;
        }
      }
      if (name === "3") {
        if (thing3[0] != undefined) {
          idkman1 = thing3;
          doshit = 1;
        }
      }
      if (name === "4") {
        if (thing4[0] != undefined) {
          idkman1 = thing4;
          doshit = 1;
        }
      }
      if (name === "5") {
        if (thing5[0] != undefined) {
          idkman1 = thing5;
          doshit = 1;
        }
      }
      if (name === "6") {
        if (thing6[0] != undefined) {
          idkman1 = thing6;
          doshit = 1;
        }
      }
      if (name === "7") {
        if (thing7[0] != undefined) {
          idkman1 = thing7;
          doshit = 1;
        }
      }
      if (name === "d") {
        if (deck[0] != undefined) {
          idkman1 = deck;
          doshit = 1;
        }
      }
    }
    if (doshit == 2) {
      if (name === "1") {
        if (idkman1 != thing1) {
          idkman2 = thing1;
          doshit = 3;
        } else {
          if (idkman1[whattgu + 1] != undefined) {
            if (
              ((idkman1[whattgu].charAt(0) == "d" ||
                idkman1[whattgu].charAt(0) == "h") &&
                (idkman1[whattgu + 1].charAt(0) == "s" ||
                  idkman1[whattgu + 1].charAt(0) == "c")) ||
              ((idkman1[whattgu].charAt(0) == "s" ||
                idkman1[whattgu].charAt(0) == "c") &&
                (idkman1[whattgu + 1].charAt(0) == "h" ||
                  idkman1[whattgu + 1].charAt(0) == "d"))
            ) {
              if (
                (idkman1[whattgu].charAt(1) == "8" &&
                  idkman1[whattgu + 1].charAt(1) == "9") ||
                (idkman1[whattgu].charAt(1) == "7" &&
                  idkman1[whattgu + 1].charAt(1) == "8") ||
                (idkman1[whattgu].charAt(1) == "6" &&
                  idkman1[whattgu + 1].charAt(1) == "7") ||
                (idkman1[whattgu].charAt(1) == "5" &&
                  idkman1[whattgu + 1].charAt(1) == "6") ||
                (idkman1[whattgu].charAt(1) == "4" &&
                  idkman1[whattgu + 1].charAt(1) == "5") ||
                (idkman1[whattgu].charAt(1) == "3" &&
                  idkman1[whattgu + 1].charAt(1) == "4") ||
                (idkman1[whattgu].charAt(1) == "2" &&
                  idkman1[whattgu + 1].charAt(1) == "3") ||
                (idkman1[whattgu].charAt(1) == "Q" &&
                  idkman1[whattgu + 1].charAt(1) == "K") ||
                (idkman1[whattgu].charAt(1) == "J" &&
                  idkman1[whattgu + 1].charAt(1) == "Q") ||
                (idkman1[whattgu].charAt(1) == "9" &&
                  idkman1[whattgu + 1].charAt(1) == "1") ||
                (idkman1[whattgu].charAt(1) == "1" &&
                  idkman1[whattgu + 1].charAt(1) == "J")
              ) {
                whattgu++;
              }
            }
          }
        }
      }
      if (name === "2") {
        if (idkman1 != thing2) {
          idkman2 = thing2;
          doshit = 3;
        } else {
          if (idkman1[whattgu + 1] != undefined) {
            if (
              ((idkman1[whattgu].charAt(0) == "d" ||
                idkman1[whattgu].charAt(0) == "h") &&
                (idkman1[whattgu + 1].charAt(0) == "s" ||
                  idkman1[whattgu + 1].charAt(0) == "c")) ||
              ((idkman1[whattgu].charAt(0) == "s" ||
                idkman1[whattgu].charAt(0) == "c") &&
                (idkman1[whattgu + 1].charAt(0) == "h" ||
                  idkman1[whattgu + 1].charAt(0) == "d"))
            ) {
              if (
                (idkman1[whattgu].charAt(1) == "8" &&
                  idkman1[whattgu + 1].charAt(1) == "9") ||
                (idkman1[whattgu].charAt(1) == "7" &&
                  idkman1[whattgu + 1].charAt(1) == "8") ||
                (idkman1[whattgu].charAt(1) == "6" &&
                  idkman1[whattgu + 1].charAt(1) == "7") ||
                (idkman1[whattgu].charAt(1) == "5" &&
                  idkman1[whattgu + 1].charAt(1) == "6") ||
                (idkman1[whattgu].charAt(1) == "4" &&
                  idkman1[whattgu + 1].charAt(1) == "5") ||
                (idkman1[whattgu].charAt(1) == "3" &&
                  idkman1[whattgu + 1].charAt(1) == "4") ||
                (idkman1[whattgu].charAt(1) == "2" &&
                  idkman1[whattgu + 1].charAt(1) == "3") ||
                (idkman1[whattgu].charAt(1) == "Q" &&
                  idkman1[whattgu + 1].charAt(1) == "K") ||
                (idkman1[whattgu].charAt(1) == "J" &&
                  idkman1[whattgu + 1].charAt(1) == "Q") ||
                (idkman1[whattgu].charAt(1) == "9" &&
                  idkman1[whattgu + 1].charAt(1) == "1") ||
                (idkman1[whattgu].charAt(1) == "1" &&
                  idkman1[whattgu + 1].charAt(1) == "J")
              ) {
                whattgu++;
              }
            }
          }
        }
      }
      if (name === "3") {
        if (idkman1 != thing3) {
          idkman2 = thing3;
          doshit = 3;
        } else {
          if (idkman1[whattgu + 1] != undefined) {
            if (
              ((idkman1[whattgu].charAt(0) == "d" ||
                idkman1[whattgu].charAt(0) == "h") &&
                (idkman1[whattgu + 1].charAt(0) == "s" ||
                  idkman1[whattgu + 1].charAt(0) == "c")) ||
              ((idkman1[whattgu].charAt(0) == "s" ||
                idkman1[whattgu].charAt(0) == "c") &&
                (idkman1[whattgu + 1].charAt(0) == "h" ||
                  idkman1[whattgu + 1].charAt(0) == "d"))
            ) {
              if (
                (idkman1[whattgu].charAt(1) == "8" &&
                  idkman1[whattgu + 1].charAt(1) == "9") ||
                (idkman1[whattgu].charAt(1) == "7" &&
                  idkman1[whattgu + 1].charAt(1) == "8") ||
                (idkman1[whattgu].charAt(1) == "6" &&
                  idkman1[whattgu + 1].charAt(1) == "7") ||
                (idkman1[whattgu].charAt(1) == "5" &&
                  idkman1[whattgu + 1].charAt(1) == "6") ||
                (idkman1[whattgu].charAt(1) == "4" &&
                  idkman1[whattgu + 1].charAt(1) == "5") ||
                (idkman1[whattgu].charAt(1) == "3" &&
                  idkman1[whattgu + 1].charAt(1) == "4") ||
                (idkman1[whattgu].charAt(1) == "2" &&
                  idkman1[whattgu + 1].charAt(1) == "3") ||
                (idkman1[whattgu].charAt(1) == "Q" &&
                  idkman1[whattgu + 1].charAt(1) == "K") ||
                (idkman1[whattgu].charAt(1) == "J" &&
                  idkman1[whattgu + 1].charAt(1) == "Q") ||
                (idkman1[whattgu].charAt(1) == "9" &&
                  idkman1[whattgu + 1].charAt(1) == "1") ||
                (idkman1[whattgu].charAt(1) == "1" &&
                  idkman1[whattgu + 1].charAt(1) == "J")
              ) {
                whattgu++;
              }
            }
          }
        }
      }
      if (name === "4") {
        if (idkman1 != thing4) {
          idkman2 = thing4;
          doshit = 3;
        } else {
          if (idkman1[whattgu + 1] != undefined) {
            if (
              ((idkman1[whattgu].charAt(0) == "d" ||
                idkman1[whattgu].charAt(0) == "h") &&
                (idkman1[whattgu + 1].charAt(0) == "s" ||
                  idkman1[whattgu + 1].charAt(0) == "c")) ||
              ((idkman1[whattgu].charAt(0) == "s" ||
                idkman1[whattgu].charAt(0) == "c") &&
                (idkman1[whattgu + 1].charAt(0) == "h" ||
                  idkman1[whattgu + 1].charAt(0) == "d"))
            ) {
              if (
                (idkman1[whattgu].charAt(1) == "8" &&
                  idkman1[whattgu + 1].charAt(1) == "9") ||
                (idkman1[whattgu].charAt(1) == "7" &&
                  idkman1[whattgu + 1].charAt(1) == "8") ||
                (idkman1[whattgu].charAt(1) == "6" &&
                  idkman1[whattgu + 1].charAt(1) == "7") ||
                (idkman1[whattgu].charAt(1) == "5" &&
                  idkman1[whattgu + 1].charAt(1) == "6") ||
                (idkman1[whattgu].charAt(1) == "4" &&
                  idkman1[whattgu + 1].charAt(1) == "5") ||
                (idkman1[whattgu].charAt(1) == "3" &&
                  idkman1[whattgu + 1].charAt(1) == "4") ||
                (idkman1[whattgu].charAt(1) == "2" &&
                  idkman1[whattgu + 1].charAt(1) == "3") ||
                (idkman1[whattgu].charAt(1) == "Q" &&
                  idkman1[whattgu + 1].charAt(1) == "K") ||
                (idkman1[whattgu].charAt(1) == "J" &&
                  idkman1[whattgu + 1].charAt(1) == "Q") ||
                (idkman1[whattgu].charAt(1) == "9" &&
                  idkman1[whattgu + 1].charAt(1) == "1") ||
                (idkman1[whattgu].charAt(1) == "1" &&
                  idkman1[whattgu + 1].charAt(1) == "J")
              ) {
                whattgu++;
              }
            }
          }
        }
      }
      if (name === "5") {
        if (idkman1 != thing5) {
          idkman2 = thing5;
          doshit = 3;
        } else {
          if (idkman1[whattgu + 1] != undefined) {
            if (
              ((idkman1[whattgu].charAt(0) == "d" ||
                idkman1[whattgu].charAt(0) == "h") &&
                (idkman1[whattgu + 1].charAt(0) == "s" ||
                  idkman1[whattgu + 1].charAt(0) == "c")) ||
              ((idkman1[whattgu].charAt(0) == "s" ||
                idkman1[whattgu].charAt(0) == "c") &&
                (idkman1[whattgu + 1].charAt(0) == "h" ||
                  idkman1[whattgu + 1].charAt(0) == "d"))
            ) {
              if (
                (idkman1[whattgu].charAt(1) == "8" &&
                  idkman1[whattgu + 1].charAt(1) == "9") ||
                (idkman1[whattgu].charAt(1) == "7" &&
                  idkman1[whattgu + 1].charAt(1) == "8") ||
                (idkman1[whattgu].charAt(1) == "6" &&
                  idkman1[whattgu + 1].charAt(1) == "7") ||
                (idkman1[whattgu].charAt(1) == "5" &&
                  idkman1[whattgu + 1].charAt(1) == "6") ||
                (idkman1[whattgu].charAt(1) == "4" &&
                  idkman1[whattgu + 1].charAt(1) == "5") ||
                (idkman1[whattgu].charAt(1) == "3" &&
                  idkman1[whattgu + 1].charAt(1) == "4") ||
                (idkman1[whattgu].charAt(1) == "2" &&
                  idkman1[whattgu + 1].charAt(1) == "3") ||
                (idkman1[whattgu].charAt(1) == "Q" &&
                  idkman1[whattgu + 1].charAt(1) == "K") ||
                (idkman1[whattgu].charAt(1) == "J" &&
                  idkman1[whattgu + 1].charAt(1) == "Q") ||
                (idkman1[whattgu].charAt(1) == "9" &&
                  idkman1[whattgu + 1].charAt(1) == "1") ||
                (idkman1[whattgu].charAt(1) == "1" &&
                  idkman1[whattgu + 1].charAt(1) == "J")
              ) {
                whattgu++;
              }
            }
          }
        }
      }
      if (name === "6") {
        if (idkman1 != thing6) {
          idkman2 = thing6;
          doshit = 3;
        } else {
          whattgu++;
        }
      }
      if (name === "7") {
        if (idkman1 != thing7) {
          idkman2 = thing7;
          doshit = 3;
        } else {
          if (idkman1[whattgu + 1] != undefined) {
            if (
              ((idkman1[whattgu].charAt(0) == "d" ||
                idkman1[whattgu].charAt(0) == "h") &&
                (idkman1[whattgu + 1].charAt(0) == "s" ||
                  idkman1[whattgu + 1].charAt(0) == "c")) ||
              ((idkman1[whattgu].charAt(0) == "s" ||
                idkman1[whattgu].charAt(0) == "c") &&
                (idkman1[whattgu + 1].charAt(0) == "h" ||
                  idkman1[whattgu + 1].charAt(0) == "d"))
            ) {
              if (
                (idkman1[whattgu].charAt(1) == "8" &&
                  idkman1[whattgu + 1].charAt(1) == "9") ||
                (idkman1[whattgu].charAt(1) == "7" &&
                  idkman1[whattgu + 1].charAt(1) == "8") ||
                (idkman1[whattgu].charAt(1) == "6" &&
                  idkman1[whattgu + 1].charAt(1) == "7") ||
                (idkman1[whattgu].charAt(1) == "5" &&
                  idkman1[whattgu + 1].charAt(1) == "6") ||
                (idkman1[whattgu].charAt(1) == "4" &&
                  idkman1[whattgu + 1].charAt(1) == "5") ||
                (idkman1[whattgu].charAt(1) == "3" &&
                  idkman1[whattgu + 1].charAt(1) == "4") ||
                (idkman1[whattgu].charAt(1) == "2" &&
                  idkman1[whattgu + 1].charAt(1) == "3") ||
                (idkman1[whattgu].charAt(1) == "Q" &&
                  idkman1[whattgu + 1].charAt(1) == "K") ||
                (idkman1[whattgu].charAt(1) == "J" &&
                  idkman1[whattgu + 1].charAt(1) == "Q") ||
                (idkman1[whattgu].charAt(1) == "9" &&
                  idkman1[whattgu + 1].charAt(1) == "1") ||
                (idkman1[whattgu].charAt(1) == "1" &&
                  idkman1[whattgu + 1].charAt(1) == "J")
              ) {
                whattgu++;
              }
            }
          }
        }
      }
      if (name === "d") {
        if (idkman1 != deck) {
          idkman2 = diamond;
          doshit = 3;
        } else {
          deck[deck.length] = deck[0];
          deck[deck.length] = deck[1];
          deck[deck.length] = deck[2];
          for (i = 0; i < deck.length; i++) {
            deck[i - 3] = deck[i];
          }
          const x = deck.splice(deck.length - 4, 3);
          doshit = 0;
        }
      }
      if (name === "h") {
        idkman2 = heart;
        doshit = 3;
      }
      if (name === "c") {
        idkman2 = club;
        doshit = 3;
      }
      if (name === "s") {
        idkman2 = spade;
        doshit = 3;
      }
    }
    if (doshit == 1) {
      doshit = 2;
    }
    if (doshit == 3) {
      spade2 = spade;
      heart2 = heart;
      club2 = club;
      diamond2 = diamond;
      if (idkman2[0] === undefined && idkman1[whattgu].charAt(1) == "K") {
        for (i = 0; i <= whattgu; i++) {
          idkman2[i] = idkman1[i];
        }
        const x = idkman1.splice(0, whattgu + 1);
      } else {
        if (
          (idkman2 == spade2 && idkman1[0].charAt(0) == "s") ||
          (idkman2 == club2 && idkman1[0].charAt(0) == "c") ||
          (idkman2 == diamond2 && idkman1[0].charAt(0) == "d") ||
          (idkman2 == heart2 && idkman1[0].charAt(0) == "h")
        ) {
          if (
            (idkman1[0].charAt(1) == "A" && idkman2[0].charAt(1) == "0") ||
            (idkman1[0].charAt(1) == "2" && idkman2[0].charAt(1) == "A") ||
            (idkman1[0].charAt(1) == "3" && idkman2[0].charAt(1) == "2") ||
            (idkman1[0].charAt(1) == "4" && idkman2[0].charAt(1) == "3") ||
            (idkman1[0].charAt(1) == "5" && idkman2[0].charAt(1) == "4") ||
            (idkman1[0].charAt(1) == "6" && idkman2[0].charAt(1) == "5") ||
            (idkman1[0].charAt(1) == "7" && idkman2[0].charAt(1) == "6") ||
            (idkman1[0].charAt(1) == "8" && idkman2[0].charAt(1) == "7") ||
            (idkman1[0].charAt(1) == "9" && idkman2[0].charAt(1) == "8") ||
            (idkman1[0].charAt(1) == "1" && idkman2[0].charAt(1) == "9") ||
            (idkman1[0].charAt(1) == "J" && idkman2[0].charAt(1) == "1") ||
            (idkman1[0].charAt(1) == "Q" && idkman2[0].charAt(1) == "J") ||
            (idkman1[0].charAt(1) == "K" && idkman2[0].charAt(1) == "Q")
          ) {
            for (i = idkman2.length; i >= 0; i--) {
              idkman2[i + 1] = idkman2[i];
            }
            idkman2[0] = idkman1[0];
            const x = idkman1.splice(0, 1);
          }
        } else {
          if (
            ((idkman1[whattgu].charAt(0) == "d" ||
              idkman1[whattgu].charAt(0) == "h") &&
              (idkman2[0].charAt(0) == "s" || idkman2[0].charAt(0) == "c")) ||
            ((idkman1[whattgu].charAt(0) == "s" ||
              idkman1[whattgu].charAt(0) == "c") &&
              (idkman2[0].charAt(0) == "h" || idkman2[0].charAt(0) == "d"))
          ) {
            if (
              (idkman1[whattgu].charAt(1) == "8" &&
                idkman2[0].charAt(1) == "9") ||
              (idkman1[whattgu].charAt(1) == "7" &&
                idkman2[0].charAt(1) == "8") ||
              (idkman1[whattgu].charAt(1) == "6" &&
                idkman2[0].charAt(1) == "7") ||
              (idkman1[whattgu].charAt(1) == "5" &&
                idkman2[0].charAt(1) == "6") ||
              (idkman1[whattgu].charAt(1) == "4" &&
                idkman2[0].charAt(1) == "5") ||
              (idkman1[whattgu].charAt(1) == "3" &&
                idkman2[0].charAt(1) == "4") ||
              (idkman1[whattgu].charAt(1) == "2" &&
                idkman2[0].charAt(1) == "3") ||
              (idkman1[whattgu].charAt(1) == "Q" &&
                idkman2[0].charAt(1) == "K") ||
              (idkman1[whattgu].charAt(1) == "J" &&
                idkman2[0].charAt(1) == "Q") ||
              (idkman1[whattgu].charAt(1) == "9" &&
                idkman2[0].charAt(1) == "1") ||
              (idkman1[whattgu].charAt(1) == "1" && idkman2[0].charAt(1) == "J")
            ) {
              for (i = idkman2.length; i >= 0; i--) {
                idkman2[i + 1 + whattgu] = idkman2[i];
              }
              for (i = 0; i <= whattgu; i++) {
                idkman2[i] = idkman1[i];
              }
              const x = idkman1.splice(0, whattgu + 1);
            }
          } else {
          }
        }
      }
      doshit = 0;
    }
    isclick = 1;
  }

  if (doshit == 2) {
    if (idkman1 != deck) {
      if (whattgu > 0) {
        infoshit = idkman1[0];
        for (i = 1; i <= whattgu; i++) {
          infoshit = infoshit + ", " + idkman1[i];
        }
        infotext.innerHTML = "Cards Selected: " + infoshit;
      } else {
        infotext.innerHTML = "Card Selected: " + idkman1[0];
      }
    } else {
      infotext.innerHTML = "Card Selected: Deck";
    }
  } else {
    infotext.innerHTML = "Card Selected: None";
  }
  if (deck[0] != undefined) {
    decktext.innerHTML = "D: " + deck[0];
  } else {
    decktext.innerHTML = "D: [Empty]";
  }
  if (thing1[0] != undefined) {
    thin1.innerHTML = "1: " + thing1;
  } else {
    thin1.innerHTML = "1: [Empty]";
  }
  if (thing2[0] != undefined) {
    thin2.innerHTML = "2: " + thing2;
  } else {
    thin2.innerHTML = "2: [Empty]";
  }
  if (thing3[0] != undefined) {
    thin3.innerHTML = "3: " + thing3;
  } else {
    thin3.innerHTML = "3: [Empty]";
  }
  if (thing4[0] != undefined) {
    thin4.innerHTML = "4: " + thing4;
  } else {
    thin4.innerHTML = "4: [Empty]";
  }
  if (thing5[0] != undefined) {
    thin5.innerHTML = "5: " + thing5;
  } else {
    thin5.innerHTML = "5: [Empty]";
  }
  if (thing6[0] != undefined) {
    thin6.innerHTML = "6: " + thing6;
  } else {
    thin6.innerHTML = "6: [Empty]";
  }
  if (thing7[0] != undefined) {
    thin7.innerHTML = "7: " + thing7;
  } else {
    thin7.innerHTML = "7: [Empty]";
  }
  if (diamond[0] == "d0") {
    thind.innerHTML = "D: [Empty]";
  } else {
    thind.innerHTML = "D: " + diamond[0];
  }
  if (heart[0] == "h0") {
    thinh.innerHTML = "H: [Empty]";
  } else {
    thinh.innerHTML = "H: " + heart[0];
  }
  if (club[0] == "c0") {
    thinc.innerHTML = "C: [Empty]";
  } else {
    thinc.innerHTML = "C: " + club[0];
  }
  if (spade[0] == "s0") {
    thins.innerHTML = "S: [Empty]";
  } else {
    thins.innerHTML = "S: " + spade[0];
  }
  if (
    spade[0] == "sK" &&
    diamond[0] == "dK" &&
    club[0] == "cK" &&
    heart[0] == "hK"
  ) {
    efkjwwkjnerjhe.innerHTML = "YOU WON!";
  }
});
