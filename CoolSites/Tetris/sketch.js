function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const clamp = (n, min, max) => Math.min(Math.max(n, min), max);

const vari_copy = (n) => JSON.parse(JSON.stringify(n));

let row_index = [[], []];
let rows = [[], []];
let blocks = {
  O: [
    [
      [0, 0],
      [0, 1],
      [1, 1],
      [1, 0],
    ],
    [
      [1, 0],
      [0, 0],
      [0, 1],
      [1, 1],
    ],
    [
      [1, 1],
      [1, 0],
      [0, 0],
      [0, 1],
    ],
    [
      [0, 1],
      [1, 1],
      [1, 0],
      [0, 0],
    ],
  ],
  I: [
    [
      [-2, 0],
      [-1, 0],
      [0, 0],
      [1, 0],
    ],
    [
      [0, -2],
      [0, -1],
      [0, 0],
      [0, 1],
    ],
    [
      [2, 0],
      [1, 0],
      [0, 0],
      [-1, 0],
    ],
    [
      [0, 2],
      [0, 1],
      [0, 0],
      [0, -1],
    ],
  ],
  T: [
    [
      [-1, 0],
      [0, 0],
      [0, -1],
      [0, 1],
    ],
    [
      [0, -1],
      [0, 0],
      [1, 0],
      [-1, 0],
    ],
    [
      [1, 0],
      [0, 0],
      [0, 1],
      [0, -1],
    ],
    [
      [0, 1],
      [0, 0],
      [-1, 0],
      [1, 0],
    ],
  ],
  L: [
    [
      [-1, 0],
      [0, 0],
      [1, 0],
      [1, 1],
    ],
    [
      [0, -1],
      [0, 0],
      [0, 1],
      [-1, 1],
    ],
    [
      [1, 0],
      [0, 0],
      [-1, 0],
      [-1, -1],
    ],
    [
      [0, 1],
      [0, 0],
      [0, -1],
      [1, -1],
    ],
  ],
  J: [
    [
      [-1, 0],
      [0, 0],
      [1, 0],
      [1, -1],
    ],
    [
      [1, 1],
      [0, 1],
      [0, 0],
      [0, -1],
    ],
    [
      [-1, 1],
      [-1, 0],
      [0, 0],
      [1, 0],
    ],
    [
      [0, 0],
      [-1, -1],
      [0, -1],
      [0, 1],
    ],
  ],
  S: [
    [
      [0, 0],
      [-1, 0],
      [-1, 1],
      [0, -1],
    ],
    [
      [1, 0],
      [0, 0],
      [0, -1],
      [-1, -1],
    ],
    [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, -1],
    ],
    [
      [1, 1],
      [0, 1],
      [-1, 0],
      [0, 0],
    ],
  ],
  Z: [
    [
      [0, 0],
      [-1, 0],
      [-1, -1],
      [0, 1],
    ],
    [
      [-1, 0],
      [0, 0],
      [0, -1],
      [1, -1],
    ],
    [
      [0, 0],
      [1, 1],
      [1, 0],
      [0, -1],
    ],
    [
      [-1, 1],
      [0, 1],
      [1, 0],
      [0, 0],
    ],
  ],
  ".": [[[0, 0]]],
  "+": [
    [
      [0, 0],
      [-1, 0],
      [1, 0],
      [0, 1],
      [0, -1],
    ],
  ],
  l: [
    [
      [0, 0],
      [-1, 0],
      [1, 0],
      [1, 1],
      [1, -1],
    ],
    [
      [0, 0],
      [0, -1],
      [0, 1],
      [1, 1],
      [-1, 1],
    ],
    [
      [0, 0],
      [1, 0],
      [-1, 0],
      [-1, 1],
      [-1, -1],
    ],
    [
      [0, 0],
      [0, 1],
      [0, -1],
      [1, -1],
      [-1, -1],
    ],
  ],
  Line: [
    [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
      [0, 5],
      [0, -1],
      [0, -2],
      [0, -3],
      [0, -4],
    ],
  ],
  Bomb: [[[0, 0]]],
  Dud: [[[0, 0]]],
  "Big Bomb": [
    [
      [0, 0],
      [0, 1],
      [1, 1],
      [1, 0],
    ],
  ],
  "Big Dud": [
    [
      [0, 0],
      [0, 1],
      [1, 1],
      [1, 0],
    ],
  ],
  "Long Bomb": [
    [
      [0, 0],
      [0, 1],
    ],
  ],
  "Deep Bomb": [
    [
      [0, 0],
      [1, 0],
    ],
  ],
  Dot: [[[0, 0]]],
  Puyo: [
    [
      [0, 0],
      [1, 0],
    ],
    [
      [0, 0],
      [0, 1],
    ],
    [
      [0, 0],
      [-1, 0],
    ],
    [
      [0, 0],
      [0, -1],
    ],
  ],
  "Big Puyo": [
    [
      [0, 0],
      [1, 0],
      [-1, 0],
    ],
    [
      [0, 0],
      [0, 1],
      [0, -1],
    ],
    [
      [0, 0],
      [-1, 0],
      [1, 0],
    ],
    [
      [0, 0],
      [0, -1],
      [0, 1],
    ],
  ],
  "Mega Puyo": [
    [
      [0, 0],
      [1, 0],
      [1, 1],
      [0, 1],
      [2, 0],
      [3, 0],
      [3, 1],
      [2, 1],
    ],
    [
      [0, 0],
      [1, 0],
      [1, 1],
      [0, 1],
      [0, 2],
      [1, 2],
      [1, 3],
      [0, 3],
    ],
    [
      [0, 0],
      [1, 0],
      [1, 1],
      [0, 1],
      [-1, 0],
      [-2, 0],
      [-2, 1],
      [-1, 1],
    ],
    [
      [0, 0],
      [1, 0],
      [1, 1],
      [0, 1],
      [0, -2],
      [1, -2],
      [1, -1],
      [0, -1],
    ],
  ],
};
let cur_pos = [
  [0, 4],
  [0, 4],
];
let picked_block = [-1, -1];
let rotation = [0, 0];
let move_timer = [0, 0];
let speed = [
  0,
  1,
  2,
  2,
  3,
  3,
  4,
  5,
  5,
  6,
  7,
  7,
  8,
  9,
  10,
  10,
  10,
  12,
  12,
  14,
  15,
  15,
  16,
  18,
  18,
  20,
  20,
  20,
  22,
  24,
  30,
  35,
  40,
  45,
  50,
  50,
  50,
  50,
  50,
  50,
  60,
  60,
  60,
  65,
  65,
  70,
  71,
  72,
  73,
  74,
  80,
];

let score_txt = document.getElementById("score_points");
let score_txt_b = document.getElementById("score_points_b");
let score = [0, 0];
let lines_txt = document.getElementById("score_lines");
let lines_txt_b = document.getElementById("score_lines_b");
let lines = [0, 0];
let level_txt = document.getElementById("score_level");
let level_txt_b = document.getElementById("score_level_b");
let level = [1, 1];
let level_lines = [0, 0];
let held_txt = document.getElementById("score_held");
let held_txt_b = document.getElementById("score_held_b");
let held = [-1, -1];
let held_yet = [false, false];
let keep_show = [0, 0];
let time_txt = document.getElementById("score_time");
let time_txt_b = document.getElementById("score_time_b");

let held_array = ["X", "O", "I", "T", "L", "J", "S", "Z"];
let block_colors = {
  O: 7,
  I: 6,
  T: 5,
  L: 4,
  J: 3,
  S: 2,
  Z: 1,
  ".": 0,
};
let level_colors = [
  { O: 7, I: 6, T: 5, L: 4, J: 3, S: 2, Z: 1 },
  [],
  //{"O": 5, "I": 5, "T": 5, "L": 5,  "J": 5, "S": 5, "Z": 5},
];
let level_colors_chaos = [
  { O: 7, I: 6, T: 5, L: 4, J: 3, S: 2, Z: 1, ".": 0, "+": 3 },
  [],
  { O: 8, I: 8, T: 8, L: 8, J: 8, S: 8, Z: 8, ".": 8 },
];

let palette = [
  "black",
  "red",
  "green",
  "blue",
  "orange",
  "purple",
  "cyan",
  "yellow",
  "white",
];
let level_palettes = [
  [
    "black",
    "red",
    "green",
    "blue",
    "orange",
    "purple",
    "cyan",
    "yellow",
    "white",
  ],
  /*[
    "red",
    "green",
    "blue",
    "purple",
    "cyan",
    "black",
    "orange",
    "cyan",
    "white",
  ],
  [
    "red",
    "green",
    "blue",
    "purple",
    "cyan",
    "black",
    "orange",
    "cyan",
    "white",
  ],*/
  [],
  //['purple', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', ]
];
let level_palettes_chaos = [
  [
    "black",
    "red",
    "green",
    "blue",
    "orange",
    "purple",
    "cyan",
    "yellow",
    'rainbow_text_animated" id="shadowBox',
  ],
  [],
  //['invis', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'rainbow_text_animated" id="shadowBox']
];

let next_txt = document.getElementById("next_held");
let next_txt_b = document.getElementById("next_held_b");
let next = [
  [-1, -1, -1],
  [-1, -1, -1],
];

let cur_txt = document.getElementById("cur_held");
let cur_txt_b = document.getElementById("cur_held_b");

let lost = [false, false];
let show_block_center = false; //toggle
let started = false;

let picked_ones = [false, false, false, false, false, false, false];

let word_txt = document.getElementById("score_words");
let word_txt_b = document.getElementById("score_words_b");
let compliments = [
  ["Nice!", "Good!", "Clever!"],
  ["Great Job!", "Doing Well!", "Keep It Up!"],
  ["Amazing!", "Unmatched!", "Three-Pointer!"],
  ["TETRIS!", "PERFECT!"],
  ["IMPOSSIBLE!!!", "HOW?!?!"],
  ["?!?!?!"],
  ["FULL CLEAR!"],
];

let start_button = document.getElementById("start_button");
let pause_button = document.getElementById("pause_button");
let paused = false;

let start_level = document.getElementById("start_level");
let attack_level = document.getElementById("attack_level");
let attack_level_p = document.getElementById("attack_level_p");
let hole_level = document.getElementById("hole_level");
let start_miner = document.getElementById("whole_level");

let settings_txt = document.getElementById("settings");
let show_cent = document.getElementById("show_center");
let show_colors = document.getElementById("show_colors");
let show_colors_level = document.getElementById("show_colors_level");
let show_bg = document.getElementById("show_bg");
let check_bg = document.getElementById("check_bg");
let bg_invis = false;
let show_dark = document.getElementById("darked");

let show_wide = document.getElementById("wide");
let stretched = false;

let chaos = document.getElementById("chaos");
let chaos_2 = document.getElementById("shadowBox");
let chaos_text = document.getElementById("shadowBoxa");

let start_txt = document.getElementById("start_settings");
let start_norm = document.getElementById("standard_settings");
let start_mine = document.getElementById("miner_settings");
let start_puyo = document.getElementById("puyo_settings");
let start_snake = document.getElementById("snake_settings");
let start_art = document.getElementById("art_settings");
let start_rotate = document.getElementById("rotate_settings");
let start_sweep = document.getElementById("mine_settings");

let game_type_select = document.getElementById("game_type");
let game_type = "normal";
let type_to_num = {
  normal: 0,
  miner: 1,
  art: 2,
  puyo: 3,
  snake: 4,
  rotate: 5,
  mine: 6,
};
let type_to_name = [
  "",
  "Mining ",
  "(Custom) ",
  "Puyo-Puyo ",
  "Snake ",
  "Shifty ",
  "Minesweeper ",
];
let game_types = [
  '<option value="normal">Normal</option><option value="miner">Mining</option><option value="art">Free Draw</option><option value="puyo">Puyo Puyo</option><option value="snake">Snake</option><option value="rotate">Shifty</option><option value="mine">Mine Sweeper</option>',
  '<option value="normal">Normal</option><option value="miner">Mining</option><option value="art">Free Draw</option><option value="puyo">Puyo Puyo</option><option value="snake">Snake</option>',
];

let high_name = document.getElementById("high_score_input");

let score_index = [];
let high_scores = [
  [
    [
      ["", 0, 0, ""],
      ["", 0, 0, ""],
      ["", 0, 0, ""],
      ["", 0, 0, ""],
      ["", 0, 0, ""],
    ],
    [
      ["", 0, 0, ""],
      ["", 0, 0, ""],
      ["", 0, 0, ""],
      ["", 0, 0, ""],
      ["", 0, 0, ""],
    ],
  ],
];
let m = -1;
let highing_score = -1;

let line_names = [
  "Lines",
  "Lines",
  "Lines",
  "Clears",
  "Apples",
  "Lines",
  "Mines",
];

let key_held = [];
let chaos_levels = [
  ["X", "O", "I", "T", "L", "J", "S", "Z", "."], //level 1/start
  ["X", "O", "I", "T", "L", "J", "S", "Z", ".", "+"],
  //["X", "."], //level 2
  //["X", "O", "I", "T", "L", "J", "S", "Z", "."], //level 3, etc
];

let lines_got = [0, 0, 0, 0, 0, 0];

let grav = document.getElementById("grav");
let grav_p = document.getElementById("grav_p");
let can_hold = document.getElementById("hold");
let can_hold_r = document.getElementById("hold_rotate");
let atk = document.getElementById("atk");
let atk_p = document.getElementById("atk_p");
let attacks = false;
let atk_timer = 0;

let time_atk = document.getElementById("tt");
let time_attack = false;
let time_atk_1 = document.getElementById("tt_level");
let time_atk_2 = document.getElementById("time_level");

let atk_time_1 = document.getElementById("attack_timer1");
let atk_time_2 = document.getElementById("attack_timer2");
let at_lev = document.getElementById("atk_lvel");
let at_lev_p = document.getElementById("atk_lvel_p");

let holes = document.getElementById("holes");

let row_colors = [[], []];
let temp_row_colors = [];
let draw_colors = true;
let gravity = false;
let checked_grav = false;
let checked_dark = false;
let checked_level = true;

let startTime = [new Date(), new Date()];
let endTime = [new Date(), new Date()];
let shownTime = [0, 0];

let startPause = new Date();
let endPause = new Date();
let uncountedTime = 0;

let imported = document.getElementById("score_button_import");
let exported = document.getElementById("score_button_export");
let imported_file = document.getElementById("getFile");

let board_width = 10;
let board_height = 20;
let board_x = document.getElementById("board_x");
let board_y = document.getElementById("board_y");

let high_score_name = document.getElementById("hi_score");

let shown_next = document.getElementById("next_num");

let class_rows = [[], []];

let how_many_2_add = 0;

let do_bomb = false;
let bombs = document.getElementById("bomb");
let bomb_explosions = {
  Bomb: [-2, 3, 1, 3],
  "Big Bomb": [-4, 5, 0, 5],
  "Long Bomb": [-100, 100, 0, 1],
  "Deep Bomb": [0, 1, -100, 100],
  Dud: [0, 0, 0, 0],
  "Big Dud": [0, 0, 0, 0],
};
let chaos_bomb = [
  "Bomb",
  "Big Bomb",
  "Long Bomb",
  "Deep Bomb",
  "Dud",
  "Big Dud",
  "T",
];

let chaos_puyo = [
  "Puyo",
  "T",
  ".",
  "O",
  "L",
  "Big Puyo",
  "T",
  ".",
  "O",
  "L",
  "Big Puyo",
  "Mega Puyo",
];

let miner = false;
let drawing = false;
let draw_color = [0, 0];
let has_started_or_import = false;
let drawing_tool = document.getElementById("art_tool");
let drawing_stick = document.getElementById("art_stick");
let drawing_sticker = document.getElementById("art_sticker");
let drawing_color_1 = document.getElementById("art_color");
let drawing_color_2 = document.getElementById("art_pick");

let puyo_color = [
  [0, 0],
  [0, 0],
];
let spots_to_remove = [[], []];
let spots_to_kill = [[], []];
let how_many_cool = [0, 0];

let snake_dir = ["right", "right"];
let apple_amount = 0;
let apple_max = 1;
let snake_pos = [];

let snake_tech = document.getElementById("snake_tech");
let apple_count = document.getElementById("apple_count");
let snake_wall = document.getElementById("snake_walls");
let snake_walls = false;
let have_mercy = true;
let snake_mercy = document.getElementById("snake_mercy");
let snake_extra = document.getElementById("snake_extra");
let snake_lives = document.getElementById("snake_lives");
let lives = [0, 0];
let snake_darkness = document.getElementById("snake_light");
let snake_light = 8;
let snake_color = document.getElementById("snake_color");
let snake_show_it = 0;

let t_spun = false;
let back_to_back = 0;
let centered = false;
let centered_check = document.getElementById("page_center");
let two_trans = [0, 0]; //[210, -360]
let three_trans = 0;
let one_trans = 0;

let can_shift = document.getElementById("player_rotate");
let long_lines = document.getElementById("lines_rotate");
let cylender = document.getElementById("actual_rotate");

let keyboard_input = true;

let mine_amount = 0;
let flag_amount = 0;
let mine_diff = document.getElementById("mine_diff");
let last_mine = 0;
let mine_diff_name = "Easy";
let mine_palette = [
  "black",
  "blue",
  "green",
  "red",
  "navy",
  "brown",
  "cyan",
  "grey",
  "white_dark",
  "purple",
  "yellow",
];
mine_palette = [
  "black",
  "blue",
  "green",
  "red",
  "purple",
  "orange_dark",
  "cyan",
  "yellow_dark",
  'rainbow_text_animated" id="shadowBox',
  "purple",
  "yellow",
];

function send_message(type, update)
{
	window.parent.postMessage([type, update], '*');
}

//function setup() {
//var a = 5;
//	window.parent.postMessage(['child', window], '*');
  start_level.max = speed.length - 1;
  attack_level.max = speed.length - 1;
  attack_level_p.max = speed.length - 1;

  for (var i = 1; i <= 21; i++) {
    for (var j = 0; j < 2; j++) {
      if (j == 0) row_index[j].push(document.getElementById("row_" + i));
      else row_index[j].push(document.getElementById("row_" + i + "_b"));
      rows[j].push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      row_colors[j].push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      if (i < 21) {
        if (j == 0)
          class_rows[j].push(document.getElementsByClassName("row" + i));
        else
          class_rows[j].push(document.getElementsByClassName("row" + i + "_b"));
      }
    }
  }

  for (i = 1; i <= 5; i++) {
    score_index.push(document.getElementById("hi_score_" + i));
    //score_index[i-1].style.white_space = "nowrap"
  }
  for (i = 1; i < Object.keys(type_to_num).length; i++) {
    high_scores.push(vari_copy(high_scores[0]));
  }
  game_type_select.innerHTML = game_types[0];
//}

/*function download(text, name, type) {
  var a = document.getElementById("a");
  var file = new Blob([text], {type: type});
  a.href = URL.createObjectURL(file);
  a.download = name;
}*/

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function export_score() {
  if (drawing && exported.innerHTML == "Play") {
    exported.innerHTML = "Export Scores";
    drawing = false;
    if (two_player) {
      board_2.style.display = "inline-block";
      board_3.style.display = "inline-block";
      rows[1] = vari_copy(rows[0]);
      row_colors[1] = vari_copy(row_colors[0]);
      move_player_two();
    }
    high_name.style.display = "none";
    loaded = true;
    start_art.style.display = "none";
    start();
    return;
  }
	download("Tetris_Scores.txt", JSON.stringify(high_scores))
  //let writer = createWriter("Tetris_Scores.txt");
  //writer.write([JSON.stringify(high_scores)]);
  //writer.close();
}

imported_file.addEventListener("change", (event) => {
  if (
    event.target.files[0].name.startsWith("Tetris_Scores") &&
    event.target.files[0].name.endsWith(".txt") && !drawing
  ) {
    const reader = new FileReader();
    reader.onload = handleFileLoad;
    reader.readAsText(event.target.files[0]);
  } else if (drawing) {
    const reader2 = new FileReader();
    reader2.onload = handleFileLoad2;
    reader2.readAsText(event.target.files[0]);
  }
});
let loaded = false;
let erase_it = 0;

let xtra_br = document.getElementById("extra_break");

let board_1 = document.getElementById("board_1");
let board_2 = document.getElementById("board_2");
let board_3 = document.getElementById("board_3");
let two_toggle = document.getElementById("two_player");
let two_section = document.getElementById("two_section");
let two_player = 0;
let workin_with_two = 0;
let attack_two = document.getElementById("two_attack");
let attack_two_p = document.getElementById("two_attack_p");

function move_player_two(width_t = 1) {
  board_2.style.transform =
    "translate(" + -two_trans[0] + "px, " + -two_trans[1] + "px)"; //reset
  board_3.style.transform = "translateY(" + -three_trans + "px)";
  //board_1.style.display = "inline";
  two_trans = [
    board_width * 10 * width_t + 110,
    -360 - 18 * clamp(board_height - 20, 0, 1021021),
  ];
  if (game_type == "rotate" && cylender.checked) two_trans[0] = 3 + board_width*2 - board_width*2*width_t;
  if (game_type == "mine") two_trans[0] = board_width*2 - (board_width*width_t*2);
  three_trans = -342 - 18 * clamp(board_height - 20, 0, 1021021);
  board_2.style.transform =
    "translate(" + two_trans[0] + "px, " + two_trans[1] + "px)";
  board_3.style.transform = "translateY(" + three_trans + "px)";
  board_2.style.position = "relative";
  board_1.style.position = "relative";
  /*if(centered && two_player && board_2.style.display == "inline-block")
  {
    board_1.style.display = "inline-block";
    board_1.style.transform = "translateX(" + -one_trans + "px)";
    board_2.style.transform =
      "translate(" + -two_trans[0] + "px, " + -two_trans[1] + "px)"; //reset
    board_3.style.transform = "translateY(" + -three_trans + "px)";
    one_trans = -two_trans[0]/2
    board_1.style.transform = "translateX(" + one_trans + "px)";
    two_trans = [-two_trans[0]/4, 0];
    board_2.style.transform =
      "translate(" + two_trans[0] + "px, " + two_trans[1] + "px)";
    three_trans = 20
    board_3.style.transform = "translateY(" + three_trans + "px)";
  }*/
	send_message("resize", [[board_width, two_player, width_t, cylender.checked, drawing], board_height])
}

function handleFileLoad(event) {
  //console.log(event);
  if (
    JSON.parse(event.target.result).length == Object.keys(type_to_num).length &&
    JSON.parse(event.target.result)[0].length == 2 &&
    JSON.parse(event.target.result)[0][0].length == 5 &&
    JSON.parse(event.target.result)[0][0][0].length == 4
  ) {
    has_started_or_import = true;
    high_scores = JSON.parse(event.target.result);
    high_score_display();
    imported.style.display = "none";
  }
}

function handleFileLoad2(event) {
  //console.log(event);
  {
    board_width = JSON.parse(event.target.result)[2][0];
    board_height = JSON.parse(event.target.result)[2][1];
    loaded = true;
    start();
    rows[0] = JSON.parse(event.target.result)[0];
    row_colors[0] = JSON.parse(event.target.result)[1];
    high_name.value = JSON.parse(event.target.result)[3];
    level[0] = JSON.parse(event.target.result)[4];
  }
}



function high_score_display() {
  if (two_player) {
    high_score_name.style.display = "none";
    for (i = 0; i < 5; i++) {
      score_index[i].innerHTML = "";
    }
    return;
  }
  var is_chaos = chaos.checked ? 1 : 0;
  if (is_chaos) {
    //if(high_score_name !== null)
    if (
      high_score_name.innerHTML ==
      type_to_name[type_to_num[game_type]] + "Highscores:"
    )
      high_score_name.innerHTML =
        type_to_name[type_to_num[game_type]] +
        'Highscores <span id="shadowBox" class="rainbow rainbow_text_animated">[CHAOS]</span>:';
  } else {
    //if(high_score_name !== null)
    if (
      high_score_name.innerHTML !=
      type_to_name[type_to_num[game_type]] + "Highscores:"
    )
      high_score_name.innerHTML =
        type_to_name[type_to_num[game_type]] + "Highscores:";
  }
  //if(high_score_name !== null)
  var awesome = show_wide.checked ? "-block" : "";
  if (high_scores[type_to_num[game_type]][is_chaos][0][0] != "")
    high_score_name.style.display = "inline" + awesome;
  else high_score_name.style.display = "none";
  for (i = 0; i < 5; i++) {
    //if(score_index[i] !== null)
    //{
    if (high_scores[type_to_num[game_type]][is_chaos][i][0] != "") {
      if (
        typeof high_scores[type_to_num[game_type]][is_chaos][i][3] ===
        "undefined"
      )
        high_scores[type_to_num[game_type]][is_chaos][i][3] = "";
      var cool_string = high_scores[type_to_num[game_type]][is_chaos][
        i
      ][3].split("<br/>");
      var awesome_fumler = 0;
      for (var l = 0; l < cool_string.length; l++) {
        if (clamp(cool_string[l].length * 7 + 40, 60, 400) > awesome_fumler) {
          awesome_fumler = clamp(cool_string[l].length * 7 + 40, 60, 400);
        }
      }
      var oh_my = line_names[type_to_num[game_type]].substring(
        0,
        clamp(
          Math.floor(
            line_names[type_to_num[game_type]].length -
              ((high_scores[type_to_num[game_type]][is_chaos][i][2] / 2) *
                high_scores[type_to_num[game_type]][is_chaos][i][2]) /
                2 +
              ((((high_scores[type_to_num[game_type]][is_chaos][i][2] / 2) *
                high_scores[type_to_num[game_type]][is_chaos][i][2]) /
                2) *
                high_scores[type_to_num[game_type]][is_chaos][i][2]) /
                2
          ),
          line_names[type_to_num[game_type]].length - 1,
          line_names[type_to_num[game_type]].length
        )
      );
      if (
        score_index[i].innerHTML !=
        i +
          1 +
          ". " +
          high_scores[type_to_num[game_type]][is_chaos][i][0] +
          ", " +
          high_scores[type_to_num[game_type]][is_chaos][i][1] +
          " (" +
          high_scores[type_to_num[game_type]][is_chaos][i][2] +
          " " +
          oh_my +
          ")" +
          '<span class="tooltiptext_' +
          (i + 1) +
          '" style="width:' +
          awesome_fumler +
          'px">' +
          high_scores[type_to_num[game_type]][is_chaos][i][3] +
          "</span>"
      ) {
        score_index[i].innerHTML =
          i +
          1 +
          ". " +
          high_scores[type_to_num[game_type]][is_chaos][i][0] +
          ", " +
          high_scores[type_to_num[game_type]][is_chaos][i][1] +
          " (" +
          high_scores[type_to_num[game_type]][is_chaos][i][2] +
          " " +
          oh_my +
          ")";
        if (high_scores[type_to_num[game_type]][is_chaos][i][3] != "") {
          score_index[i].className = "tooltip_" + (i + 1) + " row" + (i + 8);
          score_index[i].innerHTML +=
            '<span class="tooltiptext_' +
            (i + 1) +
            '" style="width:' +
            awesome_fumler +
            'px">' +
            high_scores[type_to_num[game_type]][is_chaos][i][3] +
            "</span>";
        }
      }
    }
    //}
    //if(score_index[i] !== null)
    else score_index[i].innerHTML = "";
  }
}

function start() {
  if (!started) {
    //  two_section.style.display = "none";
  }
	move_player_two()
  var inputs = document.getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type.toLowerCase() == "number") {
      if (parseInt(inputs[i].value) > parseInt(inputs[i].max)) {
        inputs[i].value = inputs[i].max;
      } else if (parseInt(inputs[i].value) < parseInt(inputs[i].min)) {
        inputs[i].value = inputs[i].min;
      }
    }
  }
  key_held = [];
  key_held["ArrowDown"] = 0;
  key_held["ArrowRight"] = 0;
  key_held["ArrowLeft"] = 0;

  if (paused || (!(lost[0] == true && lost[1] == true) && started && drawing)) {
    word_txt_b.innerHTML = "";
    word_txt.innerHTML = "";
    start_txt.style.display = "inline";
    settings_txt.style.display = "inline";
    start_button.style.display = "inline";
    pause_button.style.display = "none";
    start_art.style.display = "none";
    if (!drawing || game_type == "mine") start_button.innerHTML = "Restart!";
    else {
      pause_button.innerHTML = "Draw";
      pause_button.style.display = "inline";
      start_button.innerHTML = "New";
      imported.style.display = "inline";
    }
    if (
      high_scores[type_to_num[game_type]][0][0] != "" &&
      !drawing &&
      !two_player
    )
      exported.style.display = "inline";
    paused = false;
    high_name.style.display = "none";
    lost = [true, true];
    if (game_type == "art") {
      if (drawing) exported.style.display = "none";
      drawing = true;
      draw_color = [0, 0];
      start_button.innerHTML = "New";
      start_button.style.display = "inline";
      pause_button.innerHTML = "Draw";
      pause_button.style.display = "inline";
    }
    return;
  }
  if (game_type == "mine") drawing = true;
  if (!drawing) has_started_or_import = true;
  lines_got = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  startTime = [new Date(), new Date()];
  endTime = [new Date(), new Date()];
  shownTime = [0, 0];
  uncountedTime = 0;
  held = [-1, -1];
  held_yet = [false, false];
  if (!drawing || game_type == "mine") exported.style.display = "none";
  else exported.style.display = "inline";
  imported.style.display = "none";
  //imported_file.style.display = "none";
  lost = [false, false];
  if (!two_player) lost[1] = true;

  if (game_type == "rotate" || game_type == "mine") lost[1] = false;
  pause_button.style.display = "inline";
  if (!drawing || game_type == "mine") pause_button.innerHTML = "Pause";
  else pause_button.innerHTML = "Save";
  started = true;
  paused = false;
  start_button.innerHTML = "Restart!";
  if (!drawing || game_type == "mine") start_button.style.display = "none";
  else start_button.innerHTML = "Quit";
  settings.style.display = "none";
  start_txt.style.display = "none";

  t_spun = [false, false];
  back_to_back = [0, 0];

  if (drawing && game_type != "mine") {
    if (!two_player) start_art.style.display = "inline";
    else {
      drawing_tool.value = "pencil";
    }
    if (drawing_tool.value == "eyedrop") drawing_tool.value = "pencil";
    exported.innerHTML = "Play";
    high_name.style.display = "block";
    high_name.placeholder = "Drawing Name";
  } else high_name.placeholder = "Enter your name!";

  if (game_type == "mine") high_name.placeholder = "Enter your name!";

  //miner = false //miner_toggle.checked

  score = [0, 0];
  level = [start_level.value, start_level.value];
  lines = [0, 0];

  gravity =
    (grav.checked && game_type == "normal") ||
    (game_type == "puyo" && grav_p.checked);
  do_bomb = bombs.checked && game_type == "normal";
  attacks =
    ((atk.checked && game_type == "normal") ||
      miner | (game_type == "puyo" && atk_p.checked)) &&
    !two_player;
  if (miner) attacks = true;
  time_attack = time_atk.checked;
  if (attacks) atk_timer = -3;
  else atk_timer = -1000;

  snake_walls = snake_wall.checked && game_type == "snake";

  if (game_type == "rotate" || game_type == "mine") two_player = 1;

  for (workin_with_two = 0; workin_with_two <= two_player; workin_with_two++) {
    if (!loaded) {
      board_width = board_x.value;
      board_height = board_y.value;

      var temp = game_type == "mine" && workin_with_two == 1 ? 1 : 0;

      move_player_two();

      for (var i = 0; i < board_height; i++) {
        for (j = 0; j < board_width; j++) {
          if (i == rows[workin_with_two].length) {
            rows[workin_with_two].push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            row_colors[workin_with_two].push([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          }
          rows[workin_with_two][i][j] = temp;
          row_colors[workin_with_two][i][j] = 0;
        }
      }
    }
    if (!drawing) {
      rows[workin_with_two][0][Math.floor(board_width / 2) - 1] = 0;
      rows[workin_with_two][0][Math.floor(board_width / 2)] = 0;
      rows[workin_with_two][0][Math.floor(board_width / 2) - 2] = 0;
    }
  }

  if (game_type == "rotate" || game_type == "mine") two_player = 0;

  loaded = false;
  var awesome = show_wide.checked ? "-block" : "";
  if (cur_txt !== null) cur_txt.style.display = "inline" + awesome;

  if (chaos.checked) {
    if (chaos_text !== null) chaos_text.style.display = "inline" + awesome;
    palette = vari_copy(level_palettes_chaos[0]);
    block_colors = vari_copy(level_colors_chaos[0]);
    if (!two_player) {
      var changed_col = vari_copy(level[0]) - 1;
      while (changed_col >= 0) {
        if (changed_col < chaos_levels.length) {
          if (chaos_levels[changed_col].length > 0) {
            held_array = vari_copy(chaos_levels[changed_col]);
            changed_col = -1;
          }
        }
        changed_col--;
      }
      changed_col = vari_copy(level[0]) - 1;
      while (changed_col >= 0) {
        if (changed_col < level_palettes_chaos.length) {
          if (level_palettes_chaos[changed_col].length > 0) {
            palette = vari_copy(level_palettes_chaos[changed_col]);
            changed_col = -1;
          }
        }
        changed_col--;
      }
      changed_col = vari_copy(level[0]) - 1;
      while (changed_col >= 0) {
        if (changed_col < level_colors_chaos.length) {
          if (Object.keys(level_colors_chaos[changed_col]).length > 0) {
            block_colors = vari_copy(level_colors_chaos[changed_col]);
            changed_col = -1;
          }
        }
        changed_col--;
      }
    }
  } else {
    if (chaos_text !== null) chaos_text.style.display = "none";
    held_array = ["X", "O", "I", "T", "L", "J", "S", "Z"];
    palette = vari_copy(level_palettes[0]);
    block_colors = vari_copy(level_colors[0]);
    var changed_col = vari_copy(level[0]) - 1;
    while (changed_col >= 0) {
      if (changed_col < level_palettes.length) {
        if (level_palettes[changed_col].length > 0) {
          palette = vari_copy(level_palettes[changed_col]);
          changed_col = -1;
        }
      }
      changed_col--;
    }
    changed_col = vari_copy(level[0]) - 1;
    while (changed_col >= 0) {
      if (changed_col < level_colors.length) {
        if (Object.keys(level_colors[changed_col]).length > 0) {
          block_colors = vari_copy(level_colors[changed_col]);
          changed_col = -1;
        }
      }
      changed_col--;
    }
  }
  //held_array = ["X", "Line", "I"]

  if (show_colors_level.checked) {
    checked_level = false;
  }

  mine_amount = level[0];

  if (drawing) level = [0, 0];

  for (workin_with_two = 0; workin_with_two <= two_player; workin_with_two++) {
    picked_ones[workin_with_two] = {};
    for (var k = 1; k < held_array.length; k++) {
      picked_ones[workin_with_two][held_array[k]] = false;
    }

    for (var i = 0; i < 3; i++) {
      var all_filled = 0;
      for (var h = 1; h < held_array.length; h++) {
        if (picked_ones[workin_with_two][held_array[h]] == true) all_filled++;
      }
      if (all_filled >= held_array.length - 1) {
        for (var k = 1; k < held_array.length; k++) {
          picked_ones[workin_with_two][held_array[k]] = false;
        }
      }
      next[workin_with_two][i] =
        held_array[getRandomInt(held_array.length - 1) + 1];
      while (
        picked_ones[workin_with_two][next[workin_with_two][i]] == true &&
        !can_hold.checked
      ) {
        next[workin_with_two][i] =
          held_array[getRandomInt(held_array.length - 1) + 1];
      }
      picked_ones[workin_with_two][next[workin_with_two][i]] = true;
    }
    if (miner) {
      next[workin_with_two] = ["Bomb", "Bomb", "Bomb"];
      var how_many_rows = parseInt(vari_copy(start_miner.value));
      for (var y = 0; y < board_height - how_many_rows; y++) {
        rows[workin_with_two][y] = vari_copy(
          rows[workin_with_two][y + how_many_rows]
        );
        row_colors[workin_with_two][y] = vari_copy(
          row_colors[workin_with_two][y + how_many_rows]
        );
      }
      var clear_block = -1;
      for (
        var x = board_height - 1;
        x > board_height - 1 - how_many_rows;
        x--
      ) {
        if (cur_pos[0] > 0) cur_pos[0]--;
        for (var z = 0; z < board_width; z++) {
          if (z != clear_block) rows[workin_with_two][x][z] = 1;
          else rows[workin_with_two][x][z] = 0;
          row_colors[workin_with_two][x][z] = 0;
        }
      }
    }

    if (drawing) {
      if (game_type != "mine") {
        board_2.style.display = "none";
        board_3.style.display = "inline";
      }
      drawing_sticker.innerHTML = "";
      for (var i = 1; i < held_array.length; i++) {
        drawing_sticker.innerHTML +=
          '<option value="' +
          held_array[i] +
          '">' +
          held_array[i] +
          "</option>";
      }
      if (chaos.checked) {
        palette.push("custom");
        drawing_tool.innerHTML =
          '<option value="pencil">Pencil/Eraser</option><option value="bucket">Fill</option><option value="bucket_bad">Erase</option><option value="eyedrop">Color Picker</option><option value="sticker">Stickers</option>';
      } else
        drawing_tool.innerHTML =
          '<option value="pencil">Pencil/Eraser</option><option value="bucket">Fill</option><option value="bucket_bad">Erase</option><option value="sticker">Stickers</option>';
    }

    if (drawing || game_type == "snake") {
      next = [
        ["Dot", "Dot", "Dot"],
        ["Dot", "Dot", "Dot"],
      ];
    }
    if (game_type == "puyo") {
      next = [
        ["Puyo", "Puyo", "Puyo"],
        ["Puyo", "Puyo", "Puyo"],
      ];
    }
    spawn_block();
  }

  if (word_txt !== null) word_txt.innerHTML = "Good luck!";
  word_txt_b.innerHTML = "Good luck!";
  keep_show = [1, 1];

  if (game_type == "snake") {
    apple_amount = [0, 0];
    apple_max = apple_count.value;
    snake_dir = ["right", "right"];
    snake_pos = [
      [[cur_pos[0][0], cur_pos[0][1], 3]],
      [[cur_pos[1][0], cur_pos[1][1], 3]],
    ];
    have_mercy = [true, true];
    if (snake_extra.checked) lives = [snake_lives.value, snake_lives.value];
    else lives = [0, 0];
    if (board_width / 2 > board_height / 2)
      snake_light = [Math.ceil(board_width / 2), Math.ceil(board_width / 2)];
    else
      snake_light = [Math.ceil(board_height / 2), Math.ceil(board_height / 2)];
    snake_show_it = [0, 0];
  }

  if (game_type == "rotate") {
    picked_block[1] = -1;
  }

  if (miner) key_held["ArrowDown"] = 15;
  if (miner && two_player) key_held["s"] = 15;

  if (game_type == "mine") {
    //picked_block[0] = -1;
    flag_amount = 0;
    picked_block[1] = -1;
    for (var i = 0; i < mine_amount; i++) {
      for (var tries = 0; tries < 100; tries++) {
        var random_x = getRandomInt(board_width);
        var random_y = getRandomInt(board_height);
        if (rows[0][random_y][random_x] == 0) {
          rows[0][random_y][random_x] = 1;
          break;
        }
      }
    }
    for (var y = 0; y < board_height; y++) {
      for (var x = 0; x < board_width; x++) {
        if (rows[0][y][x] == 0) {
          spots_to_remove = [];
          check_puyo_neighbors(x, y, 0, 0, true, false);
          var mine_neighbors = spots_to_remove.length - 1;
          if (mine_neighbors == 1) row_colors[0][y][x] = 1;
          else if (mine_neighbors == 2) row_colors[0][y][x] = 2;
          else if (mine_neighbors == 3) row_colors[0][y][x] = 3;
          else if (mine_neighbors == 4) row_colors[0][y][x] = 4;
          else if (mine_neighbors == 5) row_colors[0][y][x] = 5;
          else if (mine_neighbors == 6) row_colors[0][y][x] = 6;
          else if (mine_neighbors == 7) row_colors[0][y][x] = 7;
          else if (mine_neighbors == 8) row_colors[0][y][x] = 8;
          else if (mine_neighbors == 9) row_colors[0][y][x] = 9;
        }
      }
    }
    cur_pos[0][0] = 0
    cur_pos[0][1] = floor(board_width/2)
    cur_pos[1][0] = 0
    cur_pos[1][1] = floor(board_width/2)
    palette = vari_copy(mine_palette);
    start_art.style.display = "none";
    start_button.style.display = "none";
    exported.style.display = "none";
    pause_button.innerHTML = "Pause";
    high_name.style.display = "none";
  }
}

function pause() {
  if (drawing && game_type != "mine") {
    if (lost[0] == true) {
      started = true;
      drawing = true;
      lost = [false, true];
      loaded = true;
      paused = false;
      start();
      start();
      pause_button.style.display = "inline";
    } else {
      var awesome_name = "my_drawing";
      if (high_name.value.length > 0) awesome_name = high_name.value;
      //let writer = createWriter(awesome_name + ".txt");
      //writer.write([
      download("Tetris_Scores.txt","[" +
          JSON.stringify(rows[0]) +
          "," +
          JSON.stringify(row_colors[0]) +
          "," +
          JSON.stringify([board_width, board_height]) +
          "," +
          JSON.stringify(awesome_name) +
          "," +
          JSON.stringify(level[0]) +
          "]",
      );
      //writer.close();
      return;
    }
  }
  if (highing_score > -1) {
    pause_button.innerHTML = "Pause";
    high_name.style.display = "none";
    var chaos_checked = chaos_checked ? 1 : 0;
    if (high_name.value.length > 0)
      high_scores[type_to_num[game_type]][chaos_checked][highing_score][0] =
        high_name.value;
    else {
      high_scores[type_to_num[game_type]][chaos_checked][highing_score] = [
        "",
        0,
        0,
        "",
      ];
      for (var j = vari_copy(highing_score); j < 5; j++) {
        high_scores[type_to_num[game_type]][chaos_checked][j] = vari_copy(
          high_scores[type_to_num[game_type]][chaos_checked][j + 1]
        );
      }
    }
    high_scores[type_to_num[game_type]][chaos_checked].pop();
    high_name.value = "";
    highing_score = -1;
    start_txt.style.display = "inline";
    settings_txt.style.display = "inline";
    start_button.style.display = "inline";
    pause_button.style.display = "none";
    if (!two_player) exported.style.display = "inline";

    if (game_type == "art") {
      drawing = true;
      start_button.innerHTML = "New";
      pause_button.innerHTML = "Draw";
      pause_button.style.display = "inline";
    }

    if (game_type == "mine") {
      start_button.innerHTML = "Restart!";
      exported.innerHTML = "Export Scores";
    }

    high_score_display();
  } else {
    if (
      game_type == "art" &&
      ((lost[0] == true && lost[1] == true) || drawing)
    ) {
      drawing = true;
      lost = [false, true];
      loaded = true;
      paused = false;
      start();
      start();
      pause_button.style.display = "inline";
      imported.style.display = "inline";
      pause_button.innerHTML = "Save";
      return;
    } else {
      if (paused) {
        endPause = new Date();
        uncountedTime += endPause - startPause;
        settings.style.display = "none";
        start_button.style.display = "none";
        pause_button.innerHTML = "Pause";
        paused = false;
        start_button.innerHTML = "Restart!";
      } else {
        startPause = new Date();
        start_button.innerHTML = "Quit";
        settings.style.display = "inline";
        pause_button.innerHTML = "Resume";
        paused = true;
        start_button.style.display = "inline";
      }
    }
  }
}

function draw() {
//alert("HELL")
  var inputs = document.getElementsByTagName("input");

  // window.getSelection().empty()

  /*for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].type.toLowerCase() == "number") {
      if (parseInt(inputs[i].value) > parseInt(inputs[i].max)) {
        inputs[i].value = inputs[i].max;
      } else if (parseInt(inputs[i].value) < parseInt(inputs[i].min)) {
        inputs[i].value = inputs[i].min;
      }
    }
  }*/
  if (two_toggle.checked != two_player) {
    two_player = two_toggle.checked ? 1 : 0;
    if (two_player) {
      //attack_two.style.display = "none";
      //attack_two_p.style.display = "none";

      if (game_type == "normal" || game_type == "art") {
        chaos.style.display = "none";
        chaos_2.style.display = "none";
        chaos.checked = false;
      }
      if (game_type != "art") {
        board_2.style.display = "inline-block";
        board_3.style.display = "inline-block";
      }
      if (game_type == "rotate" || game_type == "mine") {
        game_type_select.value = "normal";
      }
      move_player_two();
    } else {
      //attack_two.style.display = "inline";
      //attack_two_p.style.display = "inline";
      chaos.style.display = "inline";
      chaos_2.style.display = "inline";
      board_2.style.display = "none";
      board_3.style.display = "inline";
      //move_player_two();
    }
    var save_me = vari_copy(game_type_select.value);
    game_type_select.innerHTML = game_types[two_player];
    game_type_select.value = save_me;
  }
  if (game_type_select.value != game_type) {
    if (game_type == "puyo") {
      if (board_x.value == 6 && board_y.value == 12) {
        board_x.value = 10;
        board_y.value = 20;
      }
    }
    if (game_type == "snake") {
      if (board_x.value == 15 && board_y.value == 17) {
        board_x.value = 10;
        board_y.value = 20;
      }
    }
    if (game_type == "mine") {
      if (board_x.value == 8 && board_y.value == 8) {
        board_x.value = 10;
        board_y.value = 20;
      } else if (
        (board_x.value == 30 || board_x.value == 16) &&
        board_y.value == 16
      ) {
        board_x.value = 10;
        board_y.value = 20;
      }
      start_level.value = 1;
    }

    if (two_player) {
      if (game_type_select.value != "art") {
        board_2.style.display = "inline-block";
        board_3.style.display = "inline-block";
      }
      move_player_two();
    } else {
      chaos.style.display = "inline";
      chaos_2.style.display = "inline";
      board_2.style.display = "none";
      board_3.style.display = "inline";
    }
    board_1.style.zIndex = "1";

    chaos.style.display = "inline";
    chaos_2.style.display = "inline";

    miner = false;
    drawing = false;
    start_level.max = speed.length - 1;
    mine_diff.value = -1;
    board_x.max = 20;
    board_y.max = 40;
    start_button.innerHTML = "Start!";
    start_norm.style.display = "none";
    start_mine.style.display = "none";
    start_puyo.style.display = "none";
    start_snake.style.display = "none";
    start_rotate.style.display = "none";
    start_sweep.style.display = "none";
    pause_button.style.display = "none";
    //lost = false
    exported.innerHTML = "Export Scores";
    imported.innerHTML = "Import Scores";
    if (!has_started_or_import) imported.style.display = "inline";
    else imported.style.display = "none";
    if (game_type_select.value == "normal") {
      start_norm.style.display = "inline";
      start_norm.appendChild(can_hold_r);
      start_norm.appendChild(can_hold);
      if (two_player) {
        chaos.style.display = "none";
        chaos_2.style.display = "none";
        chaos.checked = false;
      }
    } else if (game_type_select.value == "miner") {
      start_mine.style.display = "inline";
      miner = true;
    } else if (game_type_select.value == "art") {
      show_cent.checked = true;
      drawing = true;
      board_x.max = 40;
      board_y.max = 40;
      if (two_player) {
        chaos.style.display = "none";
        chaos_2.style.display = "none";
        chaos.checked = false;
      }
      board_2.style.display = "none";
      board_3.style.display = "inline";
      if (started) pause_button.style.display = "inline";
      pause_button.innerHTML = "Draw";
      imported.style.display = "inline";
      exported.style.display = "none";
      exported.innerHTML = "Play";
      imported.innerHTML = "Load";
      start_button.innerHTML = "New";
    } else if (game_type_select.value == "puyo") {
      start_puyo.style.display = "inline";
      if (board_x.value == 10 && board_y.value == 20) {
        board_x.value = 6;
        board_y.value = 12;
      }
    } else if (game_type_select.value == "snake") {
      start_snake.style.display = "inline";
      if (board_x.value == 10 && board_y.value == 20) {
        board_x.value = 15;
        board_y.value = 17;
      }
    } else if (game_type_select.value == "rotate") {
      start_rotate.style.display = "inline";

      start_rotate.appendChild(can_hold_r);
      start_rotate.appendChild(can_hold);
      board_2.style.display = "inline-block";
      board_3.style.display = "inline-block";
      move_player_two();
    } else if (game_type_select.value == "mine") {
      mine_diff.value = 0;
      start_level.max = Infinity;
      last_mine = -1;
      board_x.max = 40;
      board_y.max = 40;
      start_sweep.style.display = "inline";
      drawing = true;
      cylender.checked = true;
      board_1.style.zIndex = "-1";
      board_2.style.display = "inline-block";
      board_3.style.display = "inline-block";
      move_player_two();
    }
    game_type = game_type_select.value;
  }
  {
    if (centered != centered_check.checked) {
      if (centered_check.checked) document.body.style.width = "400px";
      else document.body.style.width = "";
      centered = centered_check.checked;
      //move_player_two();
    }
    window.onscroll = function () {
      return;
      window.scrollTo(0, 0);
    };
    document.body.style.overflow = "hidden";
    if (checked_dark != show_dark.checked) {
	send_message("dark_mode", show_dark.checked)
      if (show_dark.checked) {
        document.body.style.background = "black";
        var all = document.getElementsByTagName("*");
        for (var i = 0, max = all.length; i < max; i++) {
          if (all[i].id != "shadowBox" && all[i].id != "shadowBoxa")
            all[i].style.color = "white";
        }
        game_type_select.style.background = "black";
        pause_button.style.background = "black";
        start_button.style.background = "black";
        imported.style.background = "black";
        exported.style.background = "black";
        start_level.style.background = "black";
        time_atk_2.style.background = "black";
        attack_level.style.background = "black";
        attack_level_p.style.background = "black";
        shown_next.style.background = "black";
        board_x.style.background = "black";
        board_y.style.background = "black";
        hole_level.style.background = "black";
        apple_count.style.background = "black";
        start_miner.style.background = "black";
        snake_lives.style.background = "black";
        snake_color.style.background = "black";
      } else {
        document.body.style.background = "";

        var all = document.getElementsByTagName("*");
        for (var i = 0, max = all.length; i < max; i++) {
          if (all[i].id != "shadowBox" && all[i].id != "shadowBoxa")
            all[i].style.color = "";
        }
        hole_level.style.background = "";
        start_miner.style.background = "";
        game_type_select.style.background = "";
        pause_button.style.background = "";
        apple_count.style.background = "";
        start_button.style.background = "";
        imported.style.background = "";
        exported.style.background = "";
        start_level.style.background = "";
        time_atk_2.style.background = "";
        attack_level.style.background = "";
        attack_level_p.style.background = "";
        shown_next.style.background = "";
        board_x.style.background = "";
        snake_lives.style.background = "";
        board_y.style.background = "";
        snake_color.style.background = "";
      }
      checked_dark = show_dark.checked;
    }
    if (checked_level != show_colors_level.checked) {
      if (show_colors_level.checked && !two_player) {
        var changed_col = vari_copy(level[0]) - 1;
        if (chaos.checked) {
          while (changed_col >= 0) {
            if (changed_col < level_palettes_chaos.length) {
              if (level_palettes_chaos[changed_col].length > 0) {
                palette = vari_copy(level_palettes_chaos[changed_col]);
                changed_col = -1;
              }
            }
            changed_col--;
          }

          changed_col = vari_copy(level[0]) - 1;
          while (changed_col >= 0) {
            if (changed_col < level_colors_chaos.length) {
              if (Object.keys(level_colors_chaos[changed_col]).length > 0) {
                block_colors_chaos = vari_copy(level_colors_chaos[changed_col]);
                changed_col = -1;
              }
            }
            changed_col--;
          }
        } else {
          while (changed_col >= 0) {
            if (changed_col < level_palettes.length) {
              if (level_palettes[changed_col].length > 0) {
                palette = vari_copy(level_palettes[changed_col]);
                changed_col = -1;
              }
            }
            changed_col--;
          }

          changed_col = vari_copy(level[0]) - 1;
          while (changed_col >= 0) {
            if (changed_col < level_colors.length) {
              if (Object.keys(level_colors[changed_col]).length > 0) {
                block_colors = vari_copy(level_colors[changed_col]);
                changed_col = -1;
              }
            }
            changed_col--;
          }
        }
      } else {
        if (chaos.checked) {
          palette = vari_copy(level_palettes_chaos[0]);
          block_colors = vari_copy(level_colors_chaos[0]);
        } else {
          palette = vari_copy(level_palettes[0]);
          block_colors = vari_copy(level_colors[0]);
        }
      }
      if (game_type == "mine") {
        palette = vari_copy(mine_palette);
      }
      checked_level = show_colors_level.checked;
    }
    if (
      ((atk.checked && game_type == "normal") ||
        miner ||
        (atk_p.checked && game_type == "puyo")) &&
      !two_player
    ) {
      var awesome = show_wide.checked ? "-block" : "";
      at_lev.style.display = "inline" + awesome;
      attack_level.style.display = "inline" + awesome;
      at_lev_p.style.display = "inline" + awesome;
      attack_level_p.style.display = "inline" + awesome;
      atk_time_1.style.display = "inline" + awesome;
      atk_time_2.style.display = "inline" + awesome;
      snake_lives.style.display = "inline" + awesome;
    } else {
      at_lev.style.display = "none";
      attack_level.style.display = "none";
      at_lev_p.style.display = "none";
      attack_level_p.style.display = "none";
      atk_time_1.style.display = "none";
      atk_time_2.style.display = "none";
      snake_lives.style.display = "none";
    }
    if (snake_extra.checked && game_type == "snake") {
      var awesome = show_wide.checked ? "-block" : "";
      snake_lives.style.display = "inline" + awesome;
    } else snake_lives.style.display = "none";
    if (time_atk.checked) {
      var awesome = show_wide.checked ? "-block" : "";
      time_atk_1.style.display = "inline" + awesome;
      time_atk_2.style.display = "inline" + awesome;
    } else {
      time_atk_1.style.display = "none";
      time_atk_2.style.display = "none";
    }
    if (game_type == "puyo") show_colors.checked = true;
    if (game_type == "snake" && snake_wall.checked) show_colors.checked = true;
    if (game_type == "mine") show_colors.checked = true;
    if (!show_colors.checked) show_colors_level.checked = false;
    if (drawing && game_type == "art" && drawing_tool.value == "sticker") {
      art_sticker.style.display = "inline";
      art_stick.style.display = "inline";
    } else {
      art_sticker.style.display = "none";
      art_stick.style.display = "none";
    }
    if (drawing && game_type == "art" && palette[draw_color[0]] == "custom") {
      drawing_color_1.style.display = "inline";
      drawing_color_2.style.display = "inline";
    } else {
      drawing_color_1.style.display = "none";
      drawing_color_2.style.display = "none";
    }
    if (game_type == "mine") {
      if (last_mine != mine_diff.value) {
        mine_diff_name = "Custom";
        if (mine_diff.value == 0) {
          mine_diff_name = "Easy";
          start_level.value = 10;
          board_x.value = 8;
          board_y.value = 8;
        } else if (mine_diff.value == 1) {
          mine_diff_name = "Medium";
          start_level.value = 40;
          board_x.value = 16;
          board_y.value = 16;
        } else if (mine_diff.value == 2) {
          mine_diff_name = "Hard";
          start_level.value = 99;
          board_x.value = 30;
          board_y.value = 16;
        }
        last_mine = mine_diff.value;
      }
      if (
        mine_diff.value == 0 &&
        (start_level.value != 10 || board_x.value != 8 || board_y.value != 8)
      )
        mine_diff.value = 3;
      if (
        mine_diff.value == 1 &&
        (start_level.value != 40 || board_x.value != 16 || board_y.value != 16)
      )
        mine_diff.value = 3;
      if (
        mine_diff.value == 2 &&
        (start_level.value != 99 || board_x.value != 30 || board_y.value != 16)
      )
        mine_diff.value = 3;
    }
  }
  if (miner) atk_time_1.innerHTML = "MINING PROGRESS:";
  else atk_time_1.innerHTML = "ATTACK PROGRESS:";

//alert("test")
  if (!started) return;
  high_score_display();

  if (game_type == "mine") {
    board_2.style.display = "inline-block";
    board_3.style.display = "inline-block";
  }

  if (
    (game_type == "rotate" || game_type == "mine") &&
    (game_type == "mine" || lost[0] == false)
  )
    two_player = 1;
  for (workin_with_two = 0; workin_with_two <= two_player; workin_with_two++) {
    if (two_player && lost[workin_with_two] && game_type != "mine") continue;
    if (drawing && workin_with_two == 1 && game_type != "mine") continue;
    if (!snake_mercy.checked) have_mercy = false;

    if (drawing) {
      if (drawing_tool.value == "sticker") {
        picked_block[workin_with_two] = art_sticker.value;
      } else {
        //if(game_type != "mine")
        picked_block[workin_with_two] = "Dot";
        rotation[workin_with_two] = 0;
      }
      block_colors[picked_block[workin_with_two]] = draw_color[workin_with_two];
      if (palette[draw_color[workin_with_two]] == "custom") {
        var all = document.getElementsByTagName("*");
        for (var i = 0, max = all.length; i < max; i++) {
          if (all[i].className == "custom")
            all[i].style.color = drawing_color_2.value;
        }
      }
    }
    show_block_center = show_cent.checked;
    draw_colors = show_colors.checked;
    bg_invis = show_bg.checked;
    temp_rows = vari_copy(rows[workin_with_two]);
    temp_row_colors = vari_copy(row_colors[workin_with_two]);
    if (
      picked_block[workin_with_two] != -1 &&
      lost[workin_with_two] == false &&
      game_type != "mine"
    ) {
      if (game_type == "snake") {
        for (var i = 0; i < snake_pos[workin_with_two].length; i++) {
          if (snake_pos[workin_with_two][i][2] == 0) {
            snake_pos[workin_with_two].splice(i, 1);
            i--;
            continue;
          } else {
            temp_rows[snake_pos[workin_with_two][i][0]][
              snake_pos[workin_with_two][i][1]
            ] = 1;
            temp_row_colors[snake_pos[workin_with_two][i][0]][
              snake_pos[workin_with_two][i][1]
            ] = parseInt(snake_color.value);
          }
        }
      } else {
        for (
          var i = 0;
          i <
          blocks[picked_block[workin_with_two]][rotation[workin_with_two]]
            .length;
          i++
        ) {
          if (
            cur_pos[workin_with_two][0] +
              blocks[picked_block[workin_with_two]][rotation[workin_with_two]][
                i
              ][0] >=
            0
          ) {
            temp_rows[
              cur_pos[workin_with_two][0] +
                blocks[picked_block[workin_with_two]][
                  rotation[workin_with_two]
                ][i][0]
            ][
              cur_pos[workin_with_two][1] +
                blocks[picked_block[workin_with_two]][
                  rotation[workin_with_two]
                ][i][1]
            ] = 1;
            if (game_type == "puyo")
              temp_row_colors[
                cur_pos[workin_with_two][0] +
                  blocks[picked_block[workin_with_two]][
                    rotation[workin_with_two]
                  ][i][0]
              ][
                cur_pos[workin_with_two][1] +
                  blocks[picked_block[workin_with_two]][
                    rotation[workin_with_two]
                  ][i][1]
              ] = puyo_color[workin_with_two][i];
            else
              temp_row_colors[
                cur_pos[workin_with_two][0] +
                  blocks[picked_block[workin_with_two]][
                    rotation[workin_with_two]
                  ][i][0]
              ][
                cur_pos[workin_with_two][1] +
                  blocks[picked_block[workin_with_two]][
                    rotation[workin_with_two]
                  ][i][1]
              ] = block_colors[picked_block[workin_with_two]];
          }
        }
        if (drawing && two_player && game_type != "mine") {
          for (
            var i = 0;
            i < blocks[picked_block[1]][rotation[1]].length;
            i++
          ) {
            if (
              cur_pos[1][0] + blocks[picked_block[1]][rotation[1]][i][0] >=
              0
            ) {
              temp_rows[
                cur_pos[1][0] + blocks[picked_block[1]][rotation[1]][i][0]
              ][cur_pos[1][1] + blocks[picked_block[1]][rotation[1]][i][1]] = 1;
              temp_row_colors[
                cur_pos[1][0] + blocks[picked_block[1]][rotation[1]][i][0]
              ][cur_pos[1][1] + blocks[picked_block[1]][rotation[1]][i][1]] =
                draw_color[1];
            }
          }
        }
      }
    }
    var temp_how_many_2_add = vari_copy(how_many_2_add);
    var darken_it =
      workin_with_two == 1 && game_type == "rotate" && cylender.checked
        ? "_dark"
        : "";
    for (var i = 0; i < board_height; i++) {
      var cool_string = "";
      for (var j = 0; j < board_width; j++) {
        if (temp_rows[i][j] == 0) {
          if (
            workin_with_two == 1 &&
            game_type == "mine" &&
            i == cur_pos[workin_with_two][0] &&
            j == cur_pos[workin_with_two][1]
          ) {
            if (lost[0] == true) cool_string += '<span class="invis">';
            else cool_string += '<span class="half_invis">';
          } else if (workin_with_two == 0 && game_type == "mine")
            cool_string +=
              '<span class="' +
              palette[temp_row_colors[i][j]] +
              darken_it +
              '" style="animation-delay:' +
              -((shownTime[workin_with_two] - uncountedTime) / 1000) +
              "s" +
              '">';
          else if (workin_with_two == 1 && game_type == "mine" && row_colors[0][i][j] > 0)
            cool_string += '<span class="black"';
          else if (
            bg_invis ||
            (workin_with_two == 1 &&
              game_type == "rotate" &&
              cylender.checked) ||
            (workin_with_two == 1 && game_type == "mine")
          )
            cool_string += '<span class="invis">';
          else if (
            workin_with_two == 0 &&
            game_type == "rotate" &&
            cylender.checked
          )
            cool_string += '<span class="half_invis">';
          else cool_string += '<span class="' + palette[0] + darken_it + '">';
          if (
            game_type == "snake" &&
            snake_darkness.checked &&
            (i < cur_pos[workin_with_two][0] - snake_light[workin_with_two] ||
              i > cur_pos[workin_with_two][0] + snake_light[workin_with_two] ||
              j < cur_pos[workin_with_two][1] - snake_light[workin_with_two] ||
              j > cur_pos[workin_with_two][1] + snake_light[workin_with_two]) &&
            (!lost[workin_with_two] || game_type == "mine")
          )
            cool_string += "█";
          else if (
            workin_with_two == 1 &&
            game_type == "mine" &&
            i == cur_pos[workin_with_two][0] &&
            j == cur_pos[workin_with_two][1]
          )
            cool_string += "█";
          else if (
            workin_with_two == 0 &&
            game_type == "mine" &&
            temp_row_colors[i][j] == 0
          )
            cool_string += "░";
          else if (workin_with_two == 0 && game_type == "mine")
            cool_string += "▒";
          else if (workin_with_two == 1 && game_type == "mine" && row_colors[0][i][j] > 0) {
            cool_string +=
              'style="display:inline-block; width: ' + (11.5) + 'px">' +
              row_colors[0][i][j];
          } else if (check_bg.checked && i % 2 == 1) {
            if (j % 2 == 0) cool_string += "▒";
            else cool_string += "░";
          } else {
            if (j % 2 == 0) cool_string += "░";
            else cool_string += "▒";
          }

          cool_string += "</span>";
        } else {
          if (
            draw_colors &&
            !(
              game_type == "snake" &&
              snake_darkness.checked &&
              (i < cur_pos[workin_with_two][0] - snake_light[workin_with_two] ||
                i >
                  cur_pos[workin_with_two][0] + snake_light[workin_with_two] ||
                j <
                  cur_pos[workin_with_two][1] - snake_light[workin_with_two] ||
                j >
                  cur_pos[workin_with_two][1] + snake_light[workin_with_two]) &&
              (!lost[workin_with_two] || game_type == "mine") &&
              !(snake_show_it > 0 && temp_row_colors[i][j] == 1)
            )
          ) {
            cool_string += '<span class="';
            if (
              game_type == "mine" &&
              i == cur_pos[1][0] &&
              j == cur_pos[1][1] &&
              workin_with_two == 0 &&
              temp_row_colors[i][j] == 0
            )
              cool_string += "red" + darken_it;
            else if (
              game_type == "mine" &&
              i == cur_pos[workin_with_two][0] &&
              j == cur_pos[workin_with_two][1] &&
              workin_with_two == 1 &&
              temp_row_colors[i][j] == 0 &&
              lost[0] == false
            )
              cool_string += "red" + darken_it;
            else if (
              game_type == "mine" &&
              i == cur_pos[workin_with_two][0] &&
              j == cur_pos[workin_with_two][1] &&
              workin_with_two == 1 &&
              temp_row_colors[i][j] == 10 &&
              lost[0] == false
            )
              cool_string += "orange" + darken_it;
            else cool_string += palette[temp_row_colors[i][j]] + darken_it;
            cool_string += '" style="animation-delay:';
            cool_string +=
              -((shownTime[workin_with_two] - uncountedTime) / 1000) + "s";
            if (typeof temp_row_colors[i][j] !== "number") {
              cool_string += ";color:";
              cool_string += temp_row_colors[i][j];
            }
            cool_string += '">';
          }
          if (
            drawing &&
            show_block_center &&
            (rows[0][i][j] == 1 || lost[workin_with_two] == true) &&
            game_type != "mine"
          ) {
            if (
              (i == cur_pos[0][0] &&
                j == cur_pos[0][1] &&
                (row_colors[0][i][j] == draw_color[0] ||
                  (palette[draw_color[workin_with_two]] == "custom" &&
                    row_colors[0][i][j] == drawing_color_2.value))) ||
              (two_player &&
                i == cur_pos[1][0] &&
                j == cur_pos[1][1] &&
                row_colors[1][i][j] == draw_color[1])
            ) {
              cool_string +=
                '<span style="display:inline-block;width:' +
                (textWidth("▓") + 2.5) +
                'px">▓</span>';
            } else cool_string += "█";
          } else if (
            rows[workin_with_two][i][j] == 1 ||
            lost[workin_with_two] == true
          )
            cool_string += "█";
          else if (
            (i == cur_pos[workin_with_two][0] &&
              j == cur_pos[workin_with_two][1]) ||
            picked_block[workin_with_two] == 0 ||
            !show_block_center
          )
            cool_string += "█";
          else if (
            drawing &&
            two_player &&
            i == cur_pos[1][0] &&
            j == cur_pos[1][1]
          ) {
            cool_string += "█";
          } else
            cool_string +=
              '<span style="display:inline-block;width:' +
              (textWidth("▓") + 2.5) +
              'px">▓</span>';
          if (draw_colors) {
            cool_string += "</span>";
          }
        }
      }
      if (i < 21) row_index[workin_with_two][i].innerHTML = cool_string;
      else row_index[workin_with_two][20].innerHTML += "<br>" + cool_string;
    }
    if (board_height > 20) row_index[workin_with_two][20].innerHTML += "<br>";
    else {
      for (var v = board_height; v < 21; v++) {
        row_index[workin_with_two][v].innerHTML = "";
      }
    }
    var all = document.getElementsByTagName("*");
    for (var i = 0, max = all.length; i < max; i++) {
      if (all[i].className == "custom")
        all[i].style.color = drawing_color_2.value;
    }
    if (show_wide.checked != stretched) {
      if (!stretched) {
        for (var u = 0; u < 2; u++) {
          var cool_width = measureTextHeight() / textWidth("█");
          for (var i = 0; i < 21; i++) {
            var former_width = row_index[u][i].getBoundingClientRect().width;
            row_index[u][i].style.display = "inline-block";
            row_index[u][i].style.transformOrigin = "top left";
            row_index[u][i].style.transform = "scaleX(" + cool_width + ")";
            var later_width = row_index[u][i].getBoundingClientRect().width;
            var set_back = false;
            if (i < 20) {
              if (class_rows[u][i][0].style.display != "none")
                class_rows[u][i][0].style.display = "inline-block";
              class_rows[u][i][0].style.transform =
                "translateX(" + (later_width - former_width) + "px)";
            }
          }
          if (u == 1) {
            move_player_two(cool_width);
          }
        }
      } else {
        for (var u = 0; u < 2; u++) {
          for (var i = 0; i < 21; i++) {
            row_index[u][i].style.display = "inline";
            if (i < 20) {
              if (class_rows[u][i][0].style.display != "none")
                class_rows[u][i][0].style.display = "inline";
            }
            row_index[u][i].style.transform = "scaleX(1)";
          }
          if (u == 1) move_player_two();
        }
      }
      stretched = show_wide.checked;
    }
    if (show_wide.checked && board_height > 20)
      xtra_br.style.display = "inline";
    else xtra_br.style.display = "none";
    if (lost[workin_with_two] == true) {
      move_timer[workin_with_two] = 0;
      atk_timer = -10;
      if (highing_score > -1) {
        if (high_name.value.length > 0) pause_button.innerHTML = "Confirm";
        else pause_button.innerHTML = "Erase";
      }
    }
    if (!paused && !(workin_with_two == 1 && game_type == "rotate")) {
      if (move_timer[workin_with_two] < 100) {
        if (game_type == "snake")
          move_timer[workin_with_two] +=
            speed[clamp(level[workin_with_two] * 4, 0, speed.length - 1)];
        else
          move_timer[workin_with_two] +=
            speed[clamp(level[workin_with_two], 0, speed.length - 1)];
      } else {
        snake_show_it--;
        snake_light[workin_with_two] = clamp(
          snake_light[workin_with_two] - 1,
          2,
          10
        );
        keep_show[workin_with_two]--;
        if (game_type != "snake") {
          if (check_block(workin_with_two, "down")) {
            cur_pos[workin_with_two][0]++;
          } else {
            if (
              picked_block[workin_with_two].startsWith("Bomb") ||
              picked_block[workin_with_two].endsWith("mb")
            ) {
              var bomb_left = clamp(
                cur_pos[workin_with_two][1] +
                  bomb_explosions[picked_block[workin_with_two]][0],
                0,
                board_width
              );
              var bomb_right = clamp(
                cur_pos[workin_with_two][1] +
                  bomb_explosions[picked_block[workin_with_two]][1],
                0,
                board_width
              );
              var bomb_top = clamp(
                cur_pos[workin_with_two][0] +
                  bomb_explosions[picked_block[workin_with_two]][2],
                0,
                board_height
              );
              var bomb_bottom = clamp(
                cur_pos[workin_with_two][0] +
                  bomb_explosions[picked_block[workin_with_two]][3],
                0,
                board_height - 1
              );
              for (var k = bomb_top; k <= bomb_bottom; k++) {
                if (
                  k == bomb_bottom &&
                  bomb_top < board_height - 2 &&
                  picked_block[workin_with_two] != "DeepBomb"
                )
                  break;
                for (var l = bomb_left; l < bomb_right; l++) {
                  if (temp_rows[k][l] == 1) score[workin_with_two] += 10;
                  temp_rows[k][l] = 0;
                  temp_row_colors[k][l] = 0;
                }
              }
              temp_rows[cur_pos[workin_with_two][0]][
                cur_pos[workin_with_two][1]
              ] = 0;
              temp_row_colors[cur_pos[workin_with_two][0]][
                cur_pos[workin_with_two][1]
              ] = 0;
              if (miner) {
                var total_lines = 0;
                for (var k = bomb_top; k <= bomb_bottom; k++) {
                  if (
                    k == bomb_bottom &&
                    bomb_top < board_height - 2 &&
                    picked_block[workin_with_two] != "DeepBomb"
                  )
                    break;
                  var valid_line = true;
                  for (var l = 0; l < board_width; l++) {
                    if (temp_rows[k][l] == 1) valid_line = false;
                  }
                  if (valid_line) {
                    lines[workin_with_two]++;
                    total_lines++;
                    level_lines[workin_with_two]++;
                  }
                }
                if (total_lines > 0) {
                  total_lines = clamp(total_lines, 1, 6);
                  var line_scores = [100, 300, 500, 800, 3200, 10000];
                  score[workin_with_two] +=
                    line_scores[total_lines - 1] * level[workin_with_two];
                  lines_got[total_lines - 1]++;
                  keep_show[workin_with_two] = 3;
                  if (word_txt !== null)
                    word_txt.innerHTML =
                      compliments[total_lines - 1][
                        getRandomInt(compliments[total_lines - 1].length)
                      ];
                }
              }
              for (k = bomb_bottom; k >= 0; k--) {
                for (var l = bomb_left; l < bomb_right; l++) {
                  if (temp_rows[k][l] == 0) {
                  } else if (k + 2 < board_height) {
                    if (temp_rows[k + 2][l] == 0) {
                      temp_rows[k + 2][l] = 1;
                      temp_row_colors[k + 2][l] = vari_copy(
                        temp_row_colors[k][l]
                      );
                      temp_rows[k][l] = 0;
                      temp_row_colors[k][l] = 0;
                    } else {
                      if (temp_rows[k + 1][l] == 0) {
                        temp_rows[k + 1][l] = 1;
                        temp_row_colors[k + 1][l] = vari_copy(
                          temp_row_colors[k][l]
                        );
                        temp_rows[k][l] = 0;
                        temp_row_colors[k][l] = 0;
                      }
                    }
                  } else if (k + 1 < board_height) {
                    if (temp_rows[k + 1][l] == 0) {
                      temp_rows[k + 1][l] = 1;
                      temp_row_colors[k + 1][l] = vari_copy(
                        temp_row_colors[k][l]
                      );
                      temp_rows[k][l] = 0;
                      temp_row_colors[k][l] = 0;
                    }
                  }
                }
              }
            }
            score[workin_with_two] += 10;
            held_yet[workin_with_two] = false;
            rows[workin_with_two] = temp_rows;
            row_colors[workin_with_two] = temp_row_colors;
            if (!check_line()) {
              if (back_to_back[workin_with_two] > lines_got[7])
                lines_got[7] = back_to_back[workin_with_two];
              {
                if (
                  two_player &&
                  back_to_back[workin_with_two] > 0 &&
                  atk.checked &&
                  game_type == "normal"
                ) {
                  var how_many_rows = vari_copy(back_to_back[workin_with_two]);
                  var workin_with_one = workin_with_two ? 0 : 1;
                  for (var y = 0; y < board_height - how_many_rows; y++) {
                    rows[workin_with_one][y] = vari_copy(
                      rows[workin_with_one][y + how_many_rows]
                    );
                    row_colors[workin_with_one][y] = vari_copy(
                      row_colors[workin_with_one][y + how_many_rows]
                    );
                  }
                  var clear_block = getRandomInt(board_width);
                  for (
                    var x = board_height - 1;
                    x > board_height - 1 - how_many_rows;
                    x--
                  ) {
                    if (cur_pos[workin_with_one][0] > 0)
                      cur_pos[workin_with_one][0]--;
                    for (var z = 0; z < board_width; z++) {
                      if (z != clear_block) rows[workin_with_one][x][z] = 1;
                      else rows[workin_with_one][x][z] = 0;
                      if (miner && getRandomInt(6) == 0 && holes.checked)
                        rows[workin_with_one][x][z] = 0;
                      row_colors[workin_with_one][x][z] = 0;
                    }
                  }
                }
                back_to_back[workin_with_two] = 0;
              }
            } else back_to_back[workin_with_two]++;
            spawn_block();
            t_spun[workin_with_two] = false;
            if (game_type == "rotate" && can_shift.checked) wacky_rotate(true);
          }
        } else {
          var hit_self = false;

          var temp_pos = vari_copy(cur_pos[workin_with_two]);
          if (snake_dir[workin_with_two] == "down") temp_pos[0]++;
          else if (snake_dir[workin_with_two] == "up") temp_pos[0]--;
          else if (snake_dir[workin_with_two] == "right") temp_pos[1]++;
          else if (snake_dir[workin_with_two] == "left") temp_pos[1]--;
          for (var i = 0; i < snake_pos[workin_with_two].length; i++) {
            if (
              temp_pos[0] == snake_pos[workin_with_two][i][0] &&
              temp_pos[1] == snake_pos[workin_with_two][i][1]
            ) {
              hit_self = true;
              break;
            }
          }
          if (hit_self) {
            if (!have_mercy[workin_with_two]) {
              if (lives[workin_with_two] > 0) respawn_snake();
              else {
                rows[workin_with_two] = temp_rows;
                row_colors[workin_with_two] = temp_row_colors;
                spawn_block();
              }
            } else have_mercy[workin_with_two] = false;
          } else if (
            check_block(workin_with_two, snake_dir[workin_with_two]) &&
            temp_pos[0] >= 0
          ) {
            if (snake_dir[workin_with_two] == "down")
              cur_pos[workin_with_two][0]++;
            else if (snake_dir[workin_with_two] == "up")
              cur_pos[workin_with_two][0]--;
            else if (snake_dir[workin_with_two] == "right")
              cur_pos[workin_with_two][1]++;
            else if (snake_dir[workin_with_two] == "left")
              cur_pos[workin_with_two][1]--;
            score[workin_with_two]++;
            have_mercy[workin_with_two] = true;
            for (var i = 0; i < snake_pos[workin_with_two].length; i++) {
              if (snake_pos[workin_with_two][i][2] == 0) {
                snake_pos[workin_with_two].splice(i, 1);
                i--;
                break;
              } else {
                snake_pos[workin_with_two][i][2]--;
              }
            }
            snake_pos[workin_with_two].push([
              cur_pos[workin_with_two][0],
              cur_pos[workin_with_two][1],
              lines[workin_with_two] + 3,
            ]);
          } else {
            if (
              temp_pos[0] < 0 ||
              temp_pos[1] < 0 ||
              temp_pos[0] >= board_height ||
              temp_pos[1] >= board_width ||
              hit_self
            ) {
              if (!have_mercy[workin_with_two]) {
                if (lives[workin_with_two] > 0) respawn_snake();
                else {
                  rows[workin_with_two] = temp_rows;
                  row_colors[workin_with_two] = temp_row_colors;
                  spawn_block();
                }
              } else have_mercy[workin_with_two] = false;
            } else if (rows[workin_with_two][temp_pos[0]][temp_pos[1]] == 1) {
              if (row_colors[workin_with_two][temp_pos[0]][temp_pos[1]] == 1) {
                rows[workin_with_two][temp_pos[0]][temp_pos[1]] = 0;
                row_colors[workin_with_two][temp_pos[0]][temp_pos[1]] = 0;
                score[workin_with_two]++;
                have_mercy[workin_with_two] = true;
                apple_amount[workin_with_two]--;
                snake_light[workin_with_two] += 3;
                snake_show_it[workin_with_two] = 2;

                if (snake_walls) spawn_apple(1, true);

                lines[workin_with_two]++;
                if (lines[workin_with_two] % 3 == 0) {
                  level[workin_with_two]++;
                }
                if (snake_dir[workin_with_two] == "down")
                  cur_pos[workin_with_two][0]++;
                else if (snake_dir[workin_with_two] == "up")
                  cur_pos[workin_with_two][0]--;
                else if (snake_dir[workin_with_two] == "right")
                  cur_pos[workin_with_two][1]++;
                else if (snake_dir[workin_with_two] == "left")
                  cur_pos[workin_with_two][1]--;
                snake_pos[workin_with_two].push([
                  cur_pos[workin_with_two][0],
                  cur_pos[workin_with_two][1],
                  lines[workin_with_two] + 3,
                ]);
              } else {
                if (!have_mercy[workin_with_two]) {
                  if (lives[workin_with_two] > 0) respawn_snake();
                  else {
                    rows[workin_with_two] = temp_rows;
                    row_colors[workin_with_two] = temp_row_colors;
                    spawn_block();
                  }
                } else have_mercy[workin_with_two] = false;
              }
            }
          }
        }
        move_timer[workin_with_two] = 0;
        //if (game_type == "snake" && have_mercy == false && snake_mercy.checked)
        //move_timer = 50 / clamp(Math.floor(level / 3), 1, 5);
      }
      if (attacks) {
        var is_miner = miner ? 20 : 0;
        var one_to_do = game_type == "puyo" ? attack_level_p : attack_level;
        atk_timer +=
          0.1 *
          (1 / 20) *
          speed[
            clamp(
              parseInt(level[0]) + parseInt(one_to_do.value) + is_miner - 1,
              0,
              speed.length - 1
            )
          ];
      }
    }
	if("Bomb" in block_colors)
{
    if (atk_timer > -15) {

      if (floor(abs(atk_timer * 4) % 4) == 0) block_colors["Bomb"] = 0;
      else block_colors["Bomb"] = 1;
    } else {
      if (floor((move_timer[0] % 20) / 10) == 0) block_colors["Bomb"] = 0;
      else block_colors["Bomb"] = 1;
    }
}

    if (chaos.checked) {
      for (i = 1; i < chaos_bomb.length; i++) {
	if(chaos_bomb[i] in block_colors)
	{
            if (chaos_bomb[i] != "T")
          	block_colors[chaos_bomb[i]] = vari_copy(block_colors["Bomb"]);
	}
      }
    }
    if (!(lost[0] == true && lost[1] == true) && game_type == "snake") {
      if (apple_amount[workin_with_two] < apple_max)
        spawn_apple(apple_max - apple_amount[workin_with_two]);
    }

if("Dud" in block_colors)
    block_colors["Dud"] = 0;
if("Big Dud" in block_colors)
    block_colors["Big Dud"] = 0;
    if (!(lost[0] == true && lost[1] == true) && !paused)
      endTime[workin_with_two] = new Date();
    shownTime[workin_with_two] =
      endTime[workin_with_two] - startTime[workin_with_two];
    if (!paused && time_txt !== null) {
      var which_one_man = workin_with_two ? time_txt_b : time_txt;
      which_one_man.innerHTML = "";
      var curTime = Math.floor(
        (shownTime[workin_with_two] - uncountedTime) / 1000
      );
      if (time_attack) {
        curTime = time_atk_2.value * 60 - curTime;
      }
      if (time_attack && curTime < 0) {
        if (drawing) {
          time_attack = false;
          start();
          return;
        }
        if (two_player) which_one_man.innerHTML = "00:00";
        lost_game(workin_with_two);
        return;
      }
      if (curTime < 60) {
        which_one_man.innerHTML = "00:";
        if (curTime < 10) which_one_man.innerHTML += "0";
        which_one_man.innerHTML += curTime;
      } else {
        var minutes = Math.floor(curTime / 60);
        var seconds = curTime % 60;
        if (minutes >= 60) {
          var hours = Math.floor(minutes / 60);
          minutes = minutes % 60;
          which_one_man.innerHTML += hours + ":";
        }
        if (minutes < 10) which_one_man.innerHTML += "0";
        which_one_man.innerHTML += minutes + ":";
        if (seconds < 10) which_one_man.innerHTML += "0";
        which_one_man.innerHTML += seconds;
      }
    }
    if (!lost[workin_with_two]) {
      var what_score = workin_with_two ? score_txt_b : score_txt;
      what_score.innerHTML = "Score: " + score[workin_with_two];
      if (game_type == "snake")
        what_score.innerHTML = "Moves: " + score[workin_with_two];
      what_score = workin_with_two ? lines_txt_b : lines_txt;
      if (lines_txt !== null)
        what_score.innerHTML =
          line_names[type_to_num[game_type]] + ": " + lines[workin_with_two];
      what_score = workin_with_two ? level_txt_b : level_txt;
      if (level_txt !== null)
        what_score.innerHTML = "Level: " + level[workin_with_two];
    }
    var what_score = workin_with_two ? next_txt_b : next_txt;
    if (next_txt !== null) {
      if (shown_next.value > 0 && !miner) {
        what_score.innerHTML = "Next: " + next[workin_with_two][0];
        for (var i = 1; i < shown_next.value; i++) {
          what_score.innerHTML += ", " + next[workin_with_two][i];
        }
      } else what_score.innerHTML = "Next: ?";
    }
    //if (workin_with_two == 0) {
    what_score = workin_with_two ? held_txt_b : held_txt;
    if (held[workin_with_two] == -1) what_score.innerHTML = "Held: ";
    else what_score.innerHTML = "Held: " + held[workin_with_two];
    //}
    what_score = workin_with_two ? cur_txt_b : cur_txt;
    if (cur_txt !== null)
      what_score.innerHTML = "Current: " + picked_block[workin_with_two];
    if (miner || game_type == "puyo" || game_type == "snake") {
      what_score = workin_with_two ? cur_txt_b : cur_txt;
      if (!chaos.checked || game_type == "snake") what_score.innerHTML = "‎";
      what_score = workin_with_two ? next_txt_b : next_txt;
      what_score.innerHTML = "‎";
      what_score = workin_with_two ? held_txt_b : held_txt;
      what_score.innerHTML = "‎";
    }
    if (lost[workin_with_two] == true) {
      if (atk_time_2 !== null) atk_time_2.innerHTML = "[░░░░░░░░░░░░]";
      if (highing_score == -1) {
        what_score = workin_with_two ? cur_txt_b : cur_txt;
        if (cur_txt !== null) what_score.innerHTML = "‎";
        what_score = workin_with_two ? next_txt_b : next_txt;
        if (next_txt !== null) what_score.innerHTML = "GAME";
        what_score = workin_with_two ? held_txt_b : held_txt;
        if (held_txt !== null) what_score.innerHTML = "OVER!";
      } else {
        if (cur_txt !== null) cur_txt.innerHTML = "NEW";
        if (next_txt !== null) next_txt.innerHTML = "HIGH";
        if (held_txt !== null) held_txt.innerHTML = "SCORE!";
      }
    } else if (keep_show[workin_with_two] < 1) {
      what_score = workin_with_two ? word_txt_b : word_txt;
      if (word_txt !== null) what_score.innerHTML = "";
    }
    if (game_type == "snake" && snake_extra.checked && !lost[workin_with_two]) {
      what_score = workin_with_two ? word_txt_b : word_txt;
      what_score.innerHTML = "Lives: " + lives[workin_with_two];
    }
    if (attacks && atk_time_2 !== null) {
      atk_time_2.innerHTML = "[";
      //12
      for (var j = 0; j < 12; j++) {
        if (j >= atk_timer) atk_time_2.innerHTML = atk_time_2.innerHTML + "░";
        else atk_time_2.innerHTML = atk_time_2.innerHTML + "▒";
      }
      atk_time_2.innerHTML = atk_time_2.innerHTML + "]";
      if (atk_timer >= 13) {
        atk_time_2.innerHTML = '<span class="red">[▓▓▓▓▓▓▓▓▓▓▓▓]</span>';
      }
      if (atk_timer >= 15) {
        var is_miner2 = miner ? parseInt(hole_level.value) : 0;
        if (game_type == "puyo") is_miner2 = -2;
        var how_many_rows = getRandomInt(3 + is_miner2) + 1;
        if (game_type != "puyo") {
          for (var y = 0; y < board_height - how_many_rows; y++) {
            rows[workin_with_two][y] = vari_copy(
              rows[workin_with_two][y + how_many_rows]
            );
            row_colors[workin_with_two][y] = vari_copy(
              row_colors[workin_with_two][y + how_many_rows]
            );
          }
        }
        var clear_block = getRandomInt(board_width);
        if (miner || game_type == "puyo") clear_block = -1;
        if (game_type != "puyo") {
          for (
            var x = board_height - 1;
            x > board_height - 1 - how_many_rows;
            x--
          ) {
            if (cur_pos[0] > 0) cur_pos[0]--;
            for (var z = 0; z < board_width; z++) {
              if (z != clear_block) rows[workin_with_two][x][z] = 1;
              else rows[workin_with_two][x][z] = 0;
              if (miner && getRandomInt(6) == 0 && holes.checked)
                rows[workin_with_two][x][z] = 0;
              row_colors[workin_with_two][x][z] = 0;
            }
          }
        } else {
          for (var x = 0; x < 1 + how_many_rows; x++) {
            if (cur_pos[0] > 0) cur_pos[0]--;
            for (var z = 0; z < board_width; z++) {
              if (z != clear_block) rows[workin_with_two][x][z] = 1;
              else rows[workin_with_two][x][z] = 0;
              if (miner && getRandomInt(6) == 0 && holes.checked)
                rows[workin_with_two][x][z] = 0;
              row_colors[workin_with_two][x][z] = 0;
            }
          }
        }
        if (miner && two_player) {
          for (
            var x = board_height - 1;
            x > board_height - 1 - how_many_rows;
            x--
          ) {
            if (cur_pos[1] > 0) cur_pos[1]--;
            for (var z = 0; z < board_width; z++) {
              if (z != clear_block) rows[1][x][z] = 1;
              else rows[1][x][z] = 0;
              if (miner && getRandomInt(6) == 0 && holes.checked)
                rows[1][x][z] = 0;
              row_colors[1][x][z] = 0;
            }
          }
        }
        atk_timer = -5;
      }
    }
    if (drawing) {
      if (game_type != "mine" || lost[0] == false) word_txt.innerHTML = "";
      cur_txt.innerHTML = "";
      next_txt.innerHTML = "";
      if (game_type != "mine") {
        if (two_player)
          next_txt.innerHTML =
            "P2 Color: " +
            palette[draw_color[1]].substring(0, 1).toUpperCase() +
            palette[draw_color[1]].substring(1);
        held_txt.innerHTML =
          "Color: " +
          palette[draw_color[workin_with_two]].substring(0, 1).toUpperCase() +
          palette[draw_color[workin_with_two]].substring(1);
        score_txt.innerHTML = "";
        lines_txt.innerHTML = "";
        level_txt.innerHTML = "";
      } else {
        held_txt.innerHTML = "";
        lines_txt.innerHTML = "Mines: " + flag_amount + "/" + mine_amount;
        level_txt.innerHTML = "Level: " + mine_diff_name;
      }
    }
  }

  if (game_type == "rotate" || game_type == "mine") {
    two_player = 0;
    word_txt_b.innerHTML = "";
    cur_txt_b.innerHTML = "";
    next_txt_b.innerHTML = "";
    time_txt_b.innerHTML = "";
    word_txt_b.innerHTML = "";
    held_txt_b.innerHTML = "";
    score_txt_b.innerHTML = "";
    lines_txt_b.innerHTML = "";
    level_txt_b.innerHTML = "";
  }
  if (miner) key_held["ArrowDown"]++;
  if (miner && two_player) key_held["s"]++;
  keyHeld();
//draw()
}

function respawn_snake() {
  lives[workin_with_two]--;
  cur_pos[workin_with_two] = [
    Math.floor(board_height / 2) - 1,
    Math.floor(board_width / 2) - 1,
  ];
  snake_pos[workin_with_two] = [
    [
      cur_pos[workin_with_two][0],
      cur_pos[workin_with_two][1],
      lines[workin_with_two] + 3,
    ],
  ];
}

function wacky_rotate(left = true) {
  var awesome_back_up = [vari_copy(rows), vari_copy(row_colors)];
  if (left) {
    for (var o = 0; o < board_height; o++) {
      var save_value = [rows[0][o][0], row_colors[0][o][0]];
      for (var u = 0; u < 2; u++) {
        if (cylender.checked && u == 1) {
          for (var p = board_width - 1; p > -1; p--) {
            if (p > 0) {
              rows[u][o][p] = vari_copy(rows[u][o][p - 1]);
              row_colors[u][o][p] = vari_copy(row_colors[u][o][p - 1]);
            } else {
              if (u == 0) {
                rows[u][o][p] = vari_copy(rows[1][o][board_width - 1]);
                row_colors[u][o][p] = vari_copy(
                  row_colors[1][o][board_width - 1]
                );
              } else {
                rows[u][o][p] = save_value[0];
                row_colors[u][o][p] = save_value[1];
              }
            }
          }
        } else {
          for (var p = 0; p < board_width; p++) {
            if (p < board_width - 1) {
              rows[u][o][p] = vari_copy(rows[u][o][p + 1]);
              row_colors[u][o][p] = vari_copy(row_colors[u][o][p + 1]);
            } else {
              if (u == 0) {
                if (cylender.checked) {
                  rows[u][o][p] = vari_copy(rows[1][o][board_width - 1]);
                  row_colors[u][o][p] = vari_copy(
                    row_colors[1][o][board_width - 1]
                  );
                } else {
                  rows[u][o][p] = vari_copy(rows[1][o][0]);
                  row_colors[u][o][p] = vari_copy(row_colors[1][o][0]);
                }
              } else {
                rows[u][o][p] = save_value[0];
                row_colors[u][o][p] = save_value[1];
              }
            }
          }
        }
      }
    }
    if (check_block(0, "left")) cur_pos[0][1]--;
  } else {
    for (var o = board_height - 1; o > -1; o--) {
      var save_value = [
        rows[0][o][board_width - 1],
        row_colors[0][o][board_width - 1],
      ];
      for (var u = 0; u < 2; u++) {
        if (cylender.checked && u == 1) {
          for (var p = 0; p < board_width; p++) {
            if (p < board_width - 1) {
              rows[u][o][p] = vari_copy(rows[u][o][p + 1]);
              row_colors[u][o][p] = vari_copy(row_colors[u][o][p + 1]);
            } else {
              if (u == 0) {
                if (cylender.checked) {
                  rows[u][o][p] = vari_copy(rows[1][o][board_width - 1]);
                  row_colors[u][o][p] = vari_copy(
                    row_colors[1][o][board_width - 1]
                  );
                } else {
                  rows[u][o][p] = vari_copy(rows[1][o][0]);
                  row_colors[u][o][p] = vari_copy(row_colors[1][o][0]);
                }
              } else {
                rows[u][o][p] = save_value[0];
                row_colors[u][o][p] = save_value[1];
              }
            }
          }
        } else {
          for (var p = board_width - 1; p > -1; p--) {
            if (p > 0) {
              rows[u][o][p] = vari_copy(rows[u][o][p - 1]);
              row_colors[u][o][p] = vari_copy(row_colors[u][o][p - 1]);
            } else {
              if (u == 0) {
                if (cylender.checked) {
                  rows[u][o][p] = vari_copy(rows[1][o][0]);
                  row_colors[u][o][p] = vari_copy(row_colors[1][o][0]);
                } else {
                  rows[u][o][p] = vari_copy(rows[1][o][board_width - 1]);
                  row_colors[u][o][p] = vari_copy(
                    row_colors[1][o][board_width - 1]
                  );
                }
              } else {
                rows[u][o][p] = save_value[0];
                row_colors[u][o][p] = save_value[1];
              }
            }
          }
        }
      }
    }
    if (check_block(0, "right")) cur_pos[0][1]++;
  }
  if (!check_block(0, "")) {
    rows = awesome_back_up[0];
    row_colors = awesome_back_up[1];
  }
}

function check_block(
  which = workin_with_two,
  direction = "down",
  pos = cur_pos[which]
) {
  var is_true = true;
  var y_off = 0;
  var x_off = 0;
  if (direction == "down") {
    y_off = 1;
  } else if (direction == "up") {
    y_off = -1;
  } else if (direction == "right") {
    x_off = 1;
  } else if (direction == "left") {
    x_off = -1;
  }
  for (
    var i = 0;
    i < blocks[picked_block[which]][rotation[which]].length;
    i++
  ) {
    if (
      pos[0] + blocks[picked_block[which]][rotation[which]][i][0] + y_off >=
        board_height ||
      pos[1] + blocks[picked_block[which]][rotation[which]][i][1] + x_off >=
        board_width ||
      pos[1] + blocks[picked_block[which]][rotation[which]][i][1] + x_off < 0
    ) {
      is_true = false;
      //return false;
    } else if (
      pos[0] + blocks[picked_block[which]][rotation[which]][i][0] + y_off <
      0
    ) {
      is_true = is_true;
    } else if (
      rows[which][
        pos[0] + blocks[picked_block[which]][rotation[which]][i][0] + y_off
      ][pos[1] + blocks[picked_block[which]][rotation[which]][i][1] + x_off] ==
        1 &&
      !drawing
    ) {
      is_true = false;
      //return false;
    }
  }
  if (is_true) return true;
  else return false;
}

high_name.addEventListener("focusout", (event) => {
  disableKeys(true);
});

function disableKeys(entered) {
  keyboard_input = entered;
}

function check_line() {
  var got_any = false;
  if (game_type == "puyo") {
    check_puyo();
    return;
  }
  var total_lines = 0;
  for (var i = board_height - 1; i >= 0; i--) {
    var valid_line = true;
    if (miner) valid_line = false;
    for (var j = 0; j < board_width; j++) {
      if (rows[workin_with_two][i][j] == 0) valid_line = false;
    }
    if (game_type == "rotate" && long_lines.checked) {
      for (var j = 0; j < board_width; j++) {
        if (rows[1][i][j] == 0) valid_line = false;
      }
    }
    if (valid_line) {
      for (var j = 0; j < board_width; j++) {
        rows[workin_with_two][i][j] = 0;
        row_colors[workin_with_two][i][j] = 0;
      }
      for (j = vari_copy(i); j > 0; j--) {
        rows[workin_with_two][j] = rows[workin_with_two][j - 1];
        row_colors[workin_with_two][j] = row_colors[workin_with_two][j - 1];
      }
      for (var j = 0; j < board_width; j++) {
        rows[workin_with_two][0][j] = 0;
        row_colors[workin_with_two][0][j] = 0;
      }
      if (game_type == "rotate" && long_lines.checked) {
        for (var j = 0; j < board_width; j++) {
          rows[1][i][j] = 0;
          row_colors[1][i][j] = 0;
        }
        for (j = vari_copy(i); j > 0; j--) {
          rows[1][j] = rows[1][j - 1];
          row_colors[1][j] = row_colors[1][j - 1];
        }
        for (var j = 0; j < board_width; j++) {
          rows[1][0][j] = 0;
          row_colors[1][0][j] = 0;
        }
      }
      i++;
      lines[workin_with_two]++;
      total_lines++;
      level_lines[workin_with_two]++;
    }
    var line_level = 10;
    if (miner) line_level = 5;
    if (level_lines[workin_with_two] >= line_level) {
      level_lines[workin_with_two] -= line_level;
      if (!two_player) {
        if (chaos.checked) {
          if (level[workin_with_two] < chaos_levels.length) {
            if (chaos_levels[level[workin_with_two]].length > 0)
              held_array = vari_copy(chaos_levels[level[workin_with_two]]);
          }
          if (Object.keys(picked_ones).length < held_array.length) {
            for (var k = 0; k < held_array.length; k++) {
              if (k >= Object.keys(picked_ones).length)
                picked_ones[held_array[k]] = false;
            }
          }
          if (level[workin_with_two] < level_palettes_chaos.length) {
            if (level_palettes_chaos[level[workin_with_two]].length > 0)
              palette = vari_copy(level_palettes_chaos[level[workin_with_two]]);
          }
          if (level[workin_with_two] < level_colors_chaos.length) {
            if (
              Object.keys(level_colors_chaos[level[workin_with_two]]).length > 0
            )
              block_colors = vari_copy(
                level_colors_chaos[level[workin_with_two]]
              );
          }
        } else {
          if (level[workin_with_two] < level_palettes.length) {
            if (level_palettes[level[workin_with_two]].length > 0)
              palette = vari_copy(level_palettes[level[workin_with_two]]);
          }
          if (level[workin_with_two] < level_colors.length) {
            if (Object.keys(level_colors[level[workin_with_two]]).length > 0)
              block_colors = vari_copy(level_colors[level[workin_with_two]]);
          }
        }
      }
      level[workin_with_two]++;
    }
  }
  if (total_lines > 0) {
    if (t_spun[workin_with_two]) {
      lines_got[9]++;
      score[workin_with_two] += 200 * level[workin_with_two];
    }
    got_any = true;
    total_lines = clamp(total_lines, 1, 6);
    var long_bonus = game_type == "rotate" && long_lines.checked ? 3 : 1;
    if (atk_timer > -15) atk_timer = clamp(atk_timer - total_lines, -15, 222);
    var line_scores = [100, 300, 500, 800, 3200, 10000];
    score[workin_with_two] +=
      line_scores[total_lines - 1] *
      level[workin_with_two] *
      (back_to_back[workin_with_two] + 1) *
      long_bonus;
    lines_got[total_lines - 1]++;
    keep_show[workin_with_two] = 3;
    if (word_txt !== null) what_score = workin_with_two ? word_txt_b : word_txt;
    what_score.innerHTML =
      compliments[total_lines - 1][
        getRandomInt(compliments[total_lines - 1].length)
      ];
  } else if (t_spun[workin_with_two]) {
    lines_got[8]++;
    score[workin_with_two] += 50 * level[workin_with_two];
  }
  var any_blocks = false;
  var e = 0;
  while (e < board_height && !any_blocks) {
    var f = 0;
    while (f < board_width && !any_blocks) {
      if (rows[workin_with_two][e][f] == 1) any_blocks = true;
      f++;
    }
    e++;
  }
  if (game_type == "rotate") {
    var e = 0;
    while (e < board_height && !any_blocks) {
      var f = 0;
      while (f < board_width && !any_blocks) {
        if (rows[1][e][f] == 1) any_blocks = true;
        f++;
      }
      e++;
    }
  }
  if (!any_blocks) {
    keep_show[workin_with_two] = 5;
    var long_bonus = game_type == "rotate" ? 5 : 1;
    score[workin_with_two] += 5000 * level[workin_with_two] * long_bonus;
    lines_got[6]++;
    if (word_txt !== null) what_score = workin_with_two ? word_txt_b : word_txt;
    what_score.innerHTML = compliments[6][getRandomInt(compliments[6].length)];
    if (miner) {
      for (var i = board_height - 1; i > board_height - 3; i--) {
        for (var j = 0; j < board_width; j++) {
          rows[workin_with_two][i][j] == 1;
        }
      }
    }
  }
  if (gravity) {
    var y = board_height - 2;
    while (y >= 0) {
      var x = 0;
      while (x < board_width) {
        if (
          rows[workin_with_two][y][x] == 1 &&
          rows[workin_with_two][y + 1][x] == 0
        ) {
          rows[workin_with_two][y + 1][x] = 1;
          rows[workin_with_two][y][x] = 0;
          row_colors[workin_with_two][y + 1][x] = vari_copy(
            row_colors[workin_with_two][y][x]
          );
          y = board_height - 1;
          x = board_width;
          checked_grav = false;
        }
        x++;
      }
      y--;
    }
    if (!checked_grav) {
      checked_grav = true;
      check_line();
    }
  }
  checked_grav = false;
  return got_any;
}

function check_puyo() {
  if (gravity) {
    var y = board_height - 2;
    while (y >= 0) {
      var x = 0;
      while (x < board_width) {
        if (
          rows[workin_with_two][y][x] == 1 &&
          rows[workin_with_two][y + 1][x] == 0
        ) {
          rows[workin_with_two][y + 1][x] = 1;
          rows[workin_with_two][y][x] = 0;
          row_colors[workin_with_two][y + 1][x] = vari_copy(
            row_colors[workin_with_two][y][x]
          );
          y = board_height - 1;
          x = board_width;
          checked_grav = false;
        }
        x++;
      }
      y--;
    }
  }
  var chain_made = false;
  for (var i = board_height - 1; i >= 0; i--) {
    for (var j = 0; j < board_width; j++) {
      spots_to_remove = [];
      spots_to_kill = [];
      if (
        rows[workin_with_two][i][j] == 1 &&
        row_colors[workin_with_two][i][j] != 0
      ) {
        check_puyo_neighbors(j, i, row_colors[workin_with_two][i][j]);
        if (spots_to_remove.length > 3) {
          for (var z = 0; z < spots_to_remove.length; z++) {
            rows[workin_with_two][spots_to_remove[z][0]][
              spots_to_remove[z][1]
            ] = 0;
            row_colors[workin_with_two][spots_to_remove[z][0]][
              spots_to_remove[z][1]
            ] = 0;
          }
          for (var z = 0; z < spots_to_kill.length; z++) {
            rows[workin_with_two][spots_to_kill[z][0]][spots_to_kill[z][1]] = 0;
            row_colors[workin_with_two][spots_to_kill[z][0]][
              spots_to_kill[z][1]
            ] = 0;
          }
          how_many_cool++;
          lines[workin_with_two]++;
          if (atk_timer > -15)
            atk_timer = clamp(atk_timer - how_many_cool, -15, 222);
          level_lines[workin_with_two]++;
          score[workin_with_two] +=
            100 *
              (spots_to_remove.length / 2) *
              how_many_cool *
              level[workin_with_two] +
            100 * spots_to_kill.length;

          checked_grav = false;
          break;
        }
      }
    }
    if (!checked_grav) break;
  }
  if (!checked_grav) {
    checked_grav = true;
    check_puyo();
  } else {
    if (how_many_cool > 0) lines_got[how_many_cool - 1]++;
    if (two_player && how_many_cool > 0 && atk_p.checked) {
      var how_many_rows = vari_copy(back_to_back[workin_with_two]);
      var workin_with_one = workin_with_two ? 0 : 1;
      for (var y = 0; y < board_height - how_many_rows; y++) {
        rows[workin_with_one][y] = vari_copy(
          rows[workin_with_one][y + how_many_rows]
        );
        row_colors[workin_with_one][y] = vari_copy(
          row_colors[workin_with_one][y + how_many_rows]
        );
      }
      var clear_block = -1;
      for (var x = 0; x < 1 + how_many_rows; x++) {
        for (var z = 0; z < board_width; z++) {
          if (z != clear_block) rows[workin_with_one][x][z] = 1;
          else rows[workin_with_one][x][z] = 0;
          if (miner && getRandomInt(6) == 0 && holes.checked)
            rows[workin_with_one][x][z] = 0;
          row_colors[workin_with_one][x][z] = 0;
        }
      }
    }
    how_many_cool = 0;
    var line_level = 5;
    if (level_lines[workin_with_two] >= line_level) {
      level_lines[workin_with_two] -= line_level;
      if (!two_player) {
        if (chaos.checked) {
          if (level[workin_with_two] < level_palettes_chaos.length) {
            if (level_palettes_chaos[level[workin_with_two]].length > 0)
              palette = vari_copy(level_palettes_chaos[level[workin_with_two]]);
          }
        } else {
          if (level[workin_with_two] < level_palettes.length) {
            if (level_palettes[level[workin_with_two]].length > 0)
              palette = vari_copy(level_palettes[level[workin_with_two]]);
          }
        }
      }
      level[workin_with_two]++;
    }
    var any_blocks = false;
    var e = 0;
    while (e < board_height && !any_blocks) {
      var f = 0;
      while (f < board_width && !any_blocks) {
        if (rows[workin_with_two][e][f] == 1) any_blocks = true;
        f++;
      }
      e++;
    }
    if (!any_blocks) {
      keep_show[workin_with_two] = 5;
      score[workin_with_two] += 5000 * level[workin_with_two];
      lines_got[6]++;
      if (word_txt !== null)
        what_score = workin_with_two ? word_txt_b : word_txt;
      what_score.innerHTML =
        compliments[6][getRandomInt(compliments[6].length)];
    }
  }
  checked_grav = false;
}

function spawn_apple(amount, wall = false) {
  for (var a = 1; a <= amount; a++) {
    var can_end = false;
    while (can_end == false) {
      var y_pos = getRandomInt(board_height);
      var x_pos = getRandomInt(board_width);
      if (
        temp_rows[y_pos][x_pos] == 0 &&
        rows[workin_with_two][y_pos][x_pos] == 0 &&
        !(
          y_pos <= cur_pos[workin_with_two][0] + 1 &&
          y_pos >= cur_pos[workin_with_two][0] - 1
        ) &&
        !(
          x_pos <= cur_pos[workin_with_two][1] + 1 &&
          x_pos >= cur_pos[workin_with_two][1] - 1
        )
      ) {
        rows[workin_with_two][y_pos][x_pos] = 1;
        if (!wall) row_colors[workin_with_two][y_pos][x_pos] = 1;
        can_end = true;
        if (!wall) apple_amount[workin_with_two]++;
      }
    }
  }
}

function check_puyo_neighbors(
  x,
  y,
  col,
  which_board = workin_with_two,
  check_corners = false,
  spread = true,
  first_go = true
) {
  for (var z = 0; z < spots_to_remove.length; z++) {
    if (y == spots_to_remove[z][0] && x == spots_to_remove[z][1]) {
      return;
    }
  }
  spots_to_remove.push([y, x]);
  if (
    col == -2 &&
    (row_colors[which_board][y][x] != 0 || rows[which_board][y][x] != 0)
  )
    return;
  if (first_go == false) return;
  if (y > 0) {
    if (col < 0) {
      if (rows[which_board][y - 1][x] == 0)
        check_puyo_neighbors(
          x,
          y - 1,
          col,
          which_board,
          check_corners,
          spread,
          spread
        );
    } else {
      if (rows[which_board][y - 1][x] == 1) {
        if (row_colors[which_board][y - 1][x] == col)
          check_puyo_neighbors(
            x,
            y - 1,
            col,
            which_board,
            check_corners,
            spread,
            spread
          );
        else if (row_colors[which_board][y - 1][x] == 0)
          spots_to_kill.push([y - 1, x]);
      }
    }
  }
  if (y < board_height - 1) {
    if (col < 0) {
      if (rows[which_board][y + 1][x] == 0)
        check_puyo_neighbors(
          x,
          y + 1,
          col,
          which_board,
          check_corners,
          spread,
          spread
        );
    } else {
      if (rows[which_board][y + 1][x] == 1) {
        if (row_colors[which_board][y + 1][x] == col)
          check_puyo_neighbors(
            x,
            y + 1,
            col,
            which_board,
            check_corners,
            spread,
            spread
          );
        else if (row_colors[which_board][y + 1][x] == 0)
          spots_to_kill.push([y + 1, x]);
      }
    }
  }
  if (x > 0) {
    if (col < 0) {
      if (rows[which_board][y][x - 1] == 0)
        check_puyo_neighbors(
          x - 1,
          y,
          col,
          which_board,
          check_corners,
          spread,
          spread
        );
    } else {
      if (rows[which_board][y][x - 1] == 1) {
        if (row_colors[which_board][y][x - 1] == col)
          check_puyo_neighbors(
            x - 1,
            y,
            col,
            which_board,
            check_corners,
            spread,
            spread
          );
        else if (row_colors[which_board][y][x - 1] == 0)
          spots_to_kill.push([y, x - 1]);
      }
    }
  }
  if (x < board_width) {
    if (col < 0) {
      if (rows[which_board][y][x + 1] == 0)
        check_puyo_neighbors(
          x + 1,
          y,
          col,
          which_board,
          check_corners,
          spread,
          spread
        );
    } else {
      if (rows[which_board][y][x + 1] == 1) {
        if (row_colors[which_board][y][x + 1] == col)
          check_puyo_neighbors(
            x + 1,
            y,
            col,
            which_board,
            check_corners,
            spread,
            spread
          );
        else if (row_colors[which_board][y][x + 1] == 0)
          spots_to_kill.push([y, x + 1]);
      }
    }
  }
  if (check_corners) {
    if (x > 0 && y > 0) {
      if (col < 0) {
        if (rows[which_board][y - 1][x - 1] == 0)
          check_puyo_neighbors(
            x - 1,
            y - 1,
            col,
            which_board,
            check_corners,
            spread,
            spread
          );
      } else {
        if (rows[which_board][y - 1][x - 1] == 1) {
          if (row_colors[which_board][y - 1][x - 1] == col)
            check_puyo_neighbors(
              x - 1,
              y - 1,
              col,
              which_board,
              check_corners,
              spread,
              spread
            );
          else if (row_colors[which_board][y - 1][x - 1] == 0)
            spots_to_kill.push([y - 1, x - 1]);
        }
      }
    }
    if (x < board_width && y > 0) {
      if (col < 0) {
        if (rows[which_board][y - 1][x + 1] == 0)
          check_puyo_neighbors(
            x + 1,
            y - 1,
            col,
            which_board,
            check_corners,
            spread,
            spread
          );
      } else {
        if (rows[which_board][y - 1][x + 1] == 1) {
          if (row_colors[which_board][y - 1][x + 1] == col)
            check_puyo_neighbors(
              x + 1,
              y - 1,
              col,
              which_board,
              check_corners,
              spread,
              spread
            );
          else if (row_colors[which_board][y - 1][x + 1] == 0)
            spots_to_kill.push([y - 1, x + 1]);
        }
      }
    }
    if (x > 0 && y < board_height - 1) {
      if (col < 0) {
        if (rows[which_board][y + 1][x - 1] == 0)
          check_puyo_neighbors(
            x - 1,
            y + 1,
            col,
            which_board,
            check_corners,
            spread,
            spread
          );
      } else {
        if (rows[which_board][y + 1][x - 1] == 1) {
          if (row_colors[which_board][y + 1][x - 1] == col)
            check_puyo_neighbors(
              x - 1,
              y + 1,
              col,
              which_board,
              check_corners,
              spread,
              spread
            );
          else if (row_colors[which_board][y + 1][x - 1] == 0)
            spots_to_kill.push([y + 1, x - 1]);
        }
      }
    }
    if (x < board_width && y < board_height - 1) {
      if (col < 0) {
        if (rows[which_board][y + 1][x + 1] == 0)
          check_puyo_neighbors(
            x + 1,
            y + 1,
            col,
            which_board,
            check_corners,
            spread,
            spread
          );
      } else {
        if (rows[which_board][y + 1][x + 1] == 1) {
          if (row_colors[which_board][y + 1][x + 1] == col)
            check_puyo_neighbors(
              x + 1,
              y + 1,
              col,
              which_board,
              check_corners,
              spread,
              spread
            );
          else if (row_colors[which_board][y + 1][x + 1] == 0)
            spots_to_kill.push([y + 1, x + 1]);
        }
      }
    }
  }
}

function line_breka(uh, ok, lines = false) {
  var temps = high_scores[type_to_num[game_type]][uh][ok][3].split("<br/>");
  if (temps[temps.length - 1].length > 35) {
    if (!lines) {
      var supere = temps[temps.length - 1].split("(");
      var len = 0;
      for (var h = 1; h < supere.length - 1; h++) {
        len += supere[h].length + 1;
      }
      var ehbe = temps[temps.length - 1].substring(0, len);
      high_scores[type_to_num[game_type]][uh][ok][3] = "";
      for (var t = 0; t < temps.length - 1; t++) {
        high_scores[type_to_num[game_type]][uh][ok][3] += temps[t] + "<br/>";
      }
      high_scores[type_to_num[game_type]][uh][ok][3] += ehbe + "<br/>";
      high_scores[type_to_num[game_type]][uh][ok][3] +=
        "(" + supere[supere.length - 1];
    } else {
      var supere = temps[temps.length - 1].split(",");
      var len = 0;
      for (var h = 0; h < supere.length - 1; h++) {
        len += supere[h].length + 1;
      }
      var ehbe = temps[temps.length - 1].substring(0, len);
      high_scores[type_to_num[game_type]][uh][ok][3] = "";
      for (var t = 0; t < temps.length - 1; t++) {
        high_scores[type_to_num[game_type]][uh][ok][3] += temps[t] + "<br/>";
      }
      high_scores[type_to_num[game_type]][uh][ok][3] += ehbe + "<br/>";
      high_scores[type_to_num[game_type]][uh][ok][3] +=
        supere[supere.length - 1];
    }
  }
}

function line_anti(uh, ok) {
  var one_more_check = high_scores[type_to_num[game_type]][uh][ok][3].split(
    "<br/>"
  );
  if (one_more_check[one_more_check.length - 1] == "") {
    var okay_remove = "";
    for (var r = 0; r < one_more_check.length - 1; r++) {
      okay_remove += one_more_check[r].trim();
      if (r < one_more_check.length - 2) okay_remove += "<br/>";
    }
    high_scores[type_to_num[game_type]][uh][ok][3] = okay_remove;
  }
}

function lost_game(whose = workin_with_two, winning = false) {
  if (drawing && game_type != "mine") return;
  lost[whose] = true;
  if (game_type == "rotate" || game_type == "mine") {
    lost[1] = true;
    two_player = 0;
  }
  if (two_player && (lost[0] != true || lost[1] != true)) return;
  highing_score = -1;

  if (two_player) {
    if (
      time_attack &&
      time_txt.innerHTML == "00:00" &&
      time_txt_b.innerHTML == "00:00"
    ) {
      word_txt_b.innerHTML = "TIMED OUT.";
      word_txt.innerHTML = "TIMED OUT.";
    } else {
      var what_score = whose ? word_txt_b : word_txt;
      what_score.innerHTML = "WINNER!";
    }
  }

  if (game_type == "mine") {
    drawing = false;
    lines[0] = mine_amount;
    word_txt.innerHTML = winning ? "YOU WON!" : "YOU LOST.";
  }

  var chaos_checked = chaos.checked ? 1 : 0;
  var beat_ = 0;
  for (var i = 0; i < 5; i++) {
    if (score <= high_scores[type_to_num[game_type]][chaos_checked][i][1]) {
      beat_++;
    }
  }
  if (beat_ < 5 && !two_player) {
    for (var j = 5; j > beat_; j--) {
      high_scores[type_to_num[game_type]][chaos_checked][j] = vari_copy(
        high_scores[type_to_num[game_type]][chaos_checked][j - 1]
      );
    }
    highing_score = beat_;
    high_scores[type_to_num[game_type]][chaos_checked][beat_][0] = "[Name]";
    high_scores[type_to_num[game_type]][chaos_checked][beat_][1] = score[0];
    high_scores[type_to_num[game_type]][chaos_checked][beat_][2] = lines[0];
    if (time_attack) {
      var cool_thing = "";
      if (time_txt.innerHTML == "00:00") {
        var curTimer = time_atk_2.value;
        var display_time = "";
        if (curTimer < 60) {
          display_time = "00:";
          if (curTimer < 10) display_time += "0";
          display_time += curTimer;
        } else {
          var minutes = Math.floor(curTimer / 60);
          var seconds = curTimer % 60;
          if (minutes >= 60) {
            var hours = Math.floor(minutes / 60);
            minutes = minutes % 60;
            display_time += hours + ":";
          }
          if (minutes < 10) display_time += "0";
          display_time += minutes + ":";
          if (seconds < 10) display_time += "0";
          display_time += seconds;
        }
      } else {
        var curTimer = Math.floor((shownTime[0] - uncountedTime) / 1000);
        var display_time = "";
        if (curTimer < 60) {
          display_time = "00:";
          if (curTimer < 10) display_time += "0";
          display_time += curTimer;
        } else {
          var minutes = Math.floor(curTimer / 60);
          var seconds = curTimer % 60;
          if (minutes >= 60) {
            var hours = Math.floor(minutes / 60);
            minutes = minutes % 60;
            display_time += hours + ":";
          }
          if (minutes < 10) display_time += "0";
          display_time += minutes + ":";
          if (seconds < 10) display_time += "0";
          display_time += seconds;
        }
        display_time = "Lost at " + display_time;
        cool_thing = "<br/>";
      }
      high_scores[type_to_num[game_type]][chaos_checked][beat_][3] =
        "(Time Attack: " + display_time + ")";
      if (game_type == "mine")
        high_scores[type_to_num[game_type]][chaos_checked][beat_][1] =
          "Time Attack: " + display_time;
    } else {
      high_scores[type_to_num[game_type]][chaos_checked][beat_][3] =
        time_txt.innerHTML;
      if (game_type == "mine")
        high_scores[type_to_num[game_type]][chaos_checked][beat_][1] =
          time_txt.innerHTML;
    }
    if (game_type == "mine") {
      high_scores[type_to_num[game_type]][chaos_checked][beat_][1] += ", ";
      high_scores[type_to_num[game_type]][chaos_checked][beat_][1] += winning
        ? "Victory"
        : "Failure";
      high_scores[type_to_num[game_type]][chaos_checked][beat_][1] +=
        " [" + board_width + "x" + board_height + "]";
    }
    high_scores[type_to_num[game_type]][chaos_checked][beat_][3] += "<br/>";
    if (game_type == "art") {
      if (high_name.value.length > 0)
        high_scores[type_to_num[game_type]][chaos_checked][beat_][3] +=
          ' Board Name: "' + high_name.value + '"';
      else
        high_scores[type_to_num[game_type]][chaos_checked][beat_][3] +=
          " Board Name: [Unnamed]";
    }
    line_anti(chaos_checked, beat_);
    high_scores[type_to_num[game_type]][chaos_checked][beat_][3] += "<br/>";
    line_breka(chaos_checked, beat_);
    if (start_level.value > 1 && game_type != "mine")
      high_scores[type_to_num[game_type]][chaos_checked][beat_][3] +=
        " (Starting Level: " + start_level.value + ")";
    line_breka(chaos_checked, beat_);
    if (gravity && game_type != "puyo")
      high_scores[type_to_num[game_type]][chaos_checked][beat_][3] +=
        " (With gravity!)";
    line_breka(chaos_checked, beat_);
    if (snake_walls)
      high_scores[type_to_num[game_type]][chaos_checked][beat_][3] +=
        " (With walls!)";
    line_breka(chaos_checked, beat_);
    if (snake_darkness.checked && game_type == "snake")
      high_scores[type_to_num[game_type]][chaos_checked][beat_][3] +=
        " (With darkness!)";
    line_breka(chaos_checked, beat_);
    var one_to_do = attack_level;
    if (game_type == "puyo") one_to_do = attack_level_p;
    if (attacks && !miner)
      high_scores[type_to_num[game_type]][chaos_checked][beat_][3] +=
        " (With attacks, of level " + one_to_do.value + " power!)";
    line_breka(chaos_checked, beat_);
    if (do_bomb)
      high_scores[type_to_num[game_type]][chaos_checked][beat_][3] +=
        " (With bombs!)";
    if (can_hold.checked && (game_type == "normal" || game_type == "rotate"))
      high_scores[type_to_num[game_type]][chaos_checked][beat_][3] +=
        " (With true randomness!)";
    line_breka(chaos_checked, beat_);
    if (game_type == "snake" && snake_extra.checked) {
      high_scores[type_to_num[game_type]][chaos_checked][beat_][3] +=
        " (" + snake_lives.value + " extra li";
      if (snake_lives.value < 2)
        high_scores[type_to_num[game_type]][chaos_checked][beat_][3] += "fe.)";
      else
        high_scores[type_to_num[game_type]][chaos_checked][beat_][3] += "ves.)";
    }
    line_breka(chaos_checked, beat_);
    if (game_type == "snake" && apple_max > 1)
      high_scores[type_to_num[game_type]][chaos_checked][beat_][3] +=
        " (With " + apple_max + " apples at a time!)";
    if (game_type == "rotate") {
      if (cylender.checked)
        high_scores[type_to_num[game_type]][chaos_checked][beat_][3] +=
          " (Cylindrical!)";
      if (can_shift.checked)
        high_scores[type_to_num[game_type]][chaos_checked][beat_][3] +=
          " (With auto-shifting!)";
      line_breka(chaos_checked, beat_);
      if (long_lines.checked)
        high_scores[type_to_num[game_type]][chaos_checked][beat_][3] +=
          " (With longer lines!)";
    }
    line_breka(chaos_checked, beat_);
    var default_dimens = [10, 20];
    if (game_type == "puyo") default_dimens = [6, 12];
    if (game_type == "snake") default_dimens = [15, 17];
    if (board_width != default_dimens[0] || board_height != default_dimens[1])
      high_scores[type_to_num[game_type]][chaos_checked][beat_][3] +=
        " [" + board_width + "x" + board_height + "]";
    line_anti(chaos_checked, beat_);
    high_scores[type_to_num[game_type]][chaos_checked][beat_][3] += "<br/>";
    var got_before = false;
    if (lines_got[0] > 0) {
      if (got_before)
        high_scores[type_to_num[game_type]][chaos_checked][beat_][3] += ", ";
      high_scores[type_to_num[game_type]][chaos_checked][beat_][3] +=
        "Singles: " + lines_got[0];
      got_before = true;
    }
    line_breka(chaos_checked, beat_, true);
    if (lines_got[1] > 0) {
      if (got_before)
        high_scores[type_to_num[game_type]][chaos_checked][beat_][3] += ", ";
      high_scores[type_to_num[game_type]][chaos_checked][beat_][3] +=
        "Doubles: " + lines_got[1];
      got_before = true;
    }
    line_breka(chaos_checked, beat_, true);
    if (lines_got[2] > 0) {
      if (got_before)
        high_scores[type_to_num[game_type]][chaos_checked][beat_][3] += ", ";
      high_scores[type_to_num[game_type]][chaos_checked][beat_][3] +=
        "Triples: " + lines_got[2];
      got_before = true;
    }
    line_breka(chaos_checked, beat_, true);
    if (lines_got[3] > 0) {
      if (got_before)
        high_scores[type_to_num[game_type]][chaos_checked][beat_][3] += ", ";
      if (game_type == "puyo")
        high_scores[type_to_num[game_type]][chaos_checked][beat_][3] +=
          "Quadtruples: " + lines_got[3];
      else
        high_scores[type_to_num[game_type]][chaos_checked][beat_][3] +=
          "Tetris: " + lines_got[3];
      got_before = true;
    }
    line_breka(chaos_checked, beat_, true);
    if (lines_got[4] > 0) {
      if (got_before)
        high_scores[type_to_num[game_type]][chaos_checked][beat_][3] += ", ";
      high_scores[type_to_num[game_type]][chaos_checked][beat_][3] +=
        "Five-Ways: " + lines_got[4];
      got_before = true;
    }
    line_breka(chaos_checked, beat_, true);
    if (lines_got[5] > 0) {
      if (got_before)
        high_scores[type_to_num[game_type]][chaos_checked][beat_][3] += ", ";
      high_scores[type_to_num[game_type]][chaos_checked][beat_][3] +=
        "HUH?s: " + lines_got[5];
      got_before = true;
    }
    line_breka(chaos_checked, beat_, true);
    if (lines_got[6] > 0) {
      if (got_before)
        high_scores[type_to_num[game_type]][chaos_checked][beat_][3] += ", ";
      high_scores[type_to_num[game_type]][chaos_checked][beat_][3] +=
        "Full Clears: " + lines_got[6];
      got_before = true;
    }
    line_breka(chaos_checked, beat_, true);
    if (lines_got[7] > 1) {
      if (got_before)
        high_scores[type_to_num[game_type]][chaos_checked][beat_][3] += ", ";
      high_scores[type_to_num[game_type]][chaos_checked][beat_][3] +=
        "Highest Combo: " + lines_got[7];
      got_before = true;
    }
    line_breka(chaos_checked, beat_, true);
    if (lines_got[8] > 0) {
      if (got_before)
        high_scores[type_to_num[game_type]][chaos_checked][beat_][3] += ", ";
      high_scores[type_to_num[game_type]][chaos_checked][beat_][3] +=
        "Mini T-Spins: " + lines_got[7];
      got_before = true;
    }
    line_breka(chaos_checked, beat_, true);
    if (lines_got[9] > 0) {
      if (got_before)
        high_scores[type_to_num[game_type]][chaos_checked][beat_][3] += ", ";
      high_scores[type_to_num[game_type]][chaos_checked][beat_][3] +=
        "T-Spins: " + lines_got[7];
      got_before = true;
    }
    line_breka(chaos_checked, beat_, true);

    line_anti(chaos_checked, beat_);

    high_name.value = "";
  }
  if (highing_score == -1) {
    start_txt.style.display = "inline";
    settings_txt.style.display = "inline";
    start_button.style.display = "inline";
    pause_button.style.display = "none";
    if (!two_player) exported.style.display = "inline";
    if (game_type == "art") {
      drawing = true;
      imported.style.display = "inline";
      //start_button.style.display = "none";
    }
  } else {
    high_name.style.display = "block";
    pause_button.innerHTML = "Confirm";
  }
}

function spawn_block(who = workin_with_two, which = -1) {
  cur_pos[who] = [0, Math.floor(board_width / 2) - 1];
  rotation[who] = 0;
  if (drawing) {
    picked_block[who] = "Dot";
    return;
  }
  if (game_type == "snake") {
    if (next[who][2] != "Dot") {
      lost_game(who);
      return;
    } else {
      picked_block[who] = next[who][0];
      next[who][2] = "L";
      next[0][2] = "L";
      next[1][2] = "L";
      cur_pos[who] = [
        Math.floor(board_height / 2) - 1,
        Math.floor(board_width / 2) - 1,
      ];
    }
  }
  if (rows[who][0][Math.floor(board_width / 2) - 1] == 1) {
    lost_game(who);
    return;
  }
  if (which == -1) {
    var all_filled = 0;
    for (var i = 1; i < held_array.length; i++) {
      if (picked_ones[who][held_array[i]] == true) all_filled++;
    }
    if (all_filled >= held_array.length - 1) {
      for (var k = 1; k < held_array.length; k++) {
        picked_ones[who][held_array[k]] = false;
      }
    }
    picked_block[who] = next[who][0];
    for (var i = 0; i <= 1; i++) {
      next[who][i] = vari_copy(next[who][i + 1]);
    }
    if (do_bomb || miner) {
      var chance = miner ? 1 : 5 + level[who] * 5;
      if (getRandomInt(chance) == 0) {
        next[who][2] = "Bomb";
        if (chaos.checked) {
          var is_special = 10;
          if (getRandomInt(is_special) == 0) {
            next[who][2] = chaos_bomb[getRandomInt(chaos_bomb.length - 1) + 1];
          }
        }
        return;
      }
    }
    if (game_type == "puyo") {
      next[who][2] = "Puyo";
      if (chaos.checked) {
        var is_special = 10;
        if (getRandomInt(is_special) == 0) {
          next[who][2] = chaos_puyo[getRandomInt(chaos_puyo.length - 1) + 1];
        }
      }
      puyo_color[who] = [];
      for (
        var j = 0;
        j < blocks[picked_block[who]][rotation[who]].length;
        j++
      ) {
        puyo_color[who].push(getRandomInt(palette.length - 2) + 1);
      }
      return;
    }
    next[who][2] = held_array[getRandomInt(held_array.length - 1) + 1];
    while (picked_ones[who][next[who][2]] == true && !can_hold.checked) {
      next[who][2] = held_array[getRandomInt(held_array.length - 1) + 1];
    }
    picked_ones[who][next[who][2]] = true;
  } else picked_block[who] = which;

  var lowest_point = 0;
  for (var i = 0; i < blocks[picked_block[who]][rotation[who]].length; i++) {
    if (lowest_point < blocks[picked_block[who]][rotation[who]][i][0]) {
      lowest_point = blocks[picked_block[who]][rotation[who]][i][0];
    }
  }
  cur_pos[who][0] = cur_pos[who][0] - lowest_point;
}

function IgnoreAlpha(e) {
  if (!e) e = window.event;

  e.returnValue = false;
  e.cancel = true;
}

function clear_mine(y, x) {
  if (rows[1][y][x] == 0 || row_colors[1][y][x] != 0) return;
  var blank = true;
  for (var i = 0; i < board_height; i++) {
    for (var j = 0; j < board_width; j++) {
      if (rows[1][i][j] == 0) {
        blank = false;
        break;
      }
    }
    if (blank == false) break;
  }
  rows[1][y][x] = 0;
  if (rows[0][y][x] == 1) {
    if (!blank) {
      for (var i = 0; i < board_height; i++) {
        for (var j = 0; j < board_width; j++) {
          rows[1][i][j] = 0;
          row_colors[1][i][j] = 0;
        }
      }
      lost_game(0);
    } else {
      rows[0][y][x] = 0;
      for (var tries = 0; tries < 100; tries++) {
        var random_x = getRandomInt(board_width);
        var random_y = getRandomInt(board_height);
        if (
          rows[0][random_y][random_x] == 0 &&
          random_x != x &&
          random_y != y
        ) {
          rows[0][random_y][random_x] = 1;
          break;
        }
      }

      for (var r = 0; r < board_height; r++) {
        for (var t = 0; t < board_width; t++) {
          row_colors[0][r][t] = 0;
        }
      }

      for (var y = 0; y < board_height; y++) {
        for (var x = 0; x < board_width; x++) {
          if (rows[0][y][x] == 0) {
            spots_to_remove = [];
            check_puyo_neighbors(x, y, 0, 0, true, false);
            var mine_neighbors = spots_to_remove.length - 1;
            if (mine_neighbors == 1) row_colors[0][y][x] = 1;
            else if (mine_neighbors == 2) row_colors[0][y][x] = 2;
            else if (mine_neighbors == 3) row_colors[0][y][x] = 3;
            else if (mine_neighbors == 4) row_colors[0][y][x] = 4;
            else if (mine_neighbors == 5) row_colors[0][y][x] = 5;
            else if (mine_neighbors == 6) row_colors[0][y][x] = 6;
            else if (mine_neighbors == 7) row_colors[0][y][x] = 7;
            else if (mine_neighbors == 8) row_colors[0][y][x] = 8;
            else if (mine_neighbors == 9) row_colors[0][y][x] = 9;
          }
        }
      }

      spots_to_remove = [];
      check_puyo_neighbors(x, y, -2, 0, true);
      for (var i = 0; i < spots_to_remove.length; i++) {
        score[0] += 10;
        rows[1][spots_to_remove[i][0]][spots_to_remove[i][1]] = 0;
      }
    }
  } else {
    spots_to_remove = [];
    check_puyo_neighbors(x, y, -2, 0, true);
    for (var i = 0; i < spots_to_remove.length; i++) {
      score[0] += 10;
      rows[1][spots_to_remove[i][0]][spots_to_remove[i][1]] = 0;
    }
    var winner = true;
    for (var r = 0; r < board_height; r++) {
      for (var t = 0; t < board_width; t++) {
        if (rows[1][r][t] == 1 && rows[0][r][t] == 0) {
          winner = false;
          break;
        }
      }
      if (!winner) break;
    }
    if (winner) {
      for (var i = 0; i < board_height; i++) {
        for (var j = 0; j < board_width; j++) {
          rows[1][i][j] = 0;
          row_colors[1][i][j] = 0;
        }
      }
      lost_game(0, true);
    }
  }
}

function clear_flag(y, x) {
  if (rows[1][y][x] == 1) {
    if (row_colors[1][y][x] == 0) {
      flag_amount++;
      row_colors[1][y][x] = 10;
    } else {
      flag_amount--;
      row_colors[1][y][x] = 0;
    }
  }
}

//function keyPressed(event) {
document.addEventListener("keydown", (event) => {
  if (!keyboard_input) return;
  var which_player = 0;
  if (
    event.key == "Shift" &&
    started &&
    !(lost[0] == true && lost[1] == true)
  ) {
    if (!drawing) {
      pause();
      return;
    } else {
      if (drawing_tool.value == "sticker") {
        if (rotation == blocks[picked_block[which_player]].length - 1) {
          rotation[which_player] = 0;
        } else {
          rotation[which_player]++;
        }
      }
    }
  }
  if (
    event.key == "Enter" &&
    (!started ||
      (lost[0] == true && lost[1] == true && highing_score == -1) ||
      paused ||
      drawing)
  ) {
    if (!drawing) {
      start();
      return;
    } else {
      if (drawing_tool.value == "sticker") {
        if (rotation[which_player] == 0) {
          rotation[which_player] =
            blocks[picked_block[which_player]].length - 1;
        } else {
          rotation[which_player]--;
        }
      }
    }
  }
if(event.key in key_held)
{if (key_held[event.key] > 0) {return}}
  if ((lost[0] == true && lost[1] == true) || !started || paused) return;
  if (miner && (event.key == "ArrowDown" || event.key == "s")) return;
  if (game_type != "snake") key_held[event.key] = 1;
  if (event.key == "ArrowDown" || event.key == "s") {
    if ((two_player || game_type == "mine") && event.key == "ArrowDown")
      which_player = 1;
    if (lost[which_player]) {
      key_held[event.key] = 0;
      return;
    }
    if (game_type == "snake") {
      if (snake_dir[which_player] == "up") {
        return;
      }
      if (snake_dir[which_player] != "down" && snake_tech.checked) {
        move_timer[which_player] = 101;
      }
      snake_dir[which_player] = "down";
      return;
    }
    if (drawing) {
      if (cur_pos[which_player][0] < board_height - 1)
        cur_pos[which_player][0]++;
      return;
    }
    score[which_player]++;
    move_timer[which_player] += 100;
    t_spun[which_player] = false;
  }
  if (event.key == "ArrowRight" || event.key == "d") {
    if ((two_player || game_type == "mine") && event.key == "ArrowRight")
      which_player = 1;
    if (lost[which_player]) {
      key_held[event.key] = 0;
      return;
    }
    if (game_type == "snake") {
      if (snake_dir[which_player] == "left") {
        return;
      }
      if (snake_dir[which_player] != "right" && snake_tech.checked) {
        move_timer[which_player] = 101;
      }
      snake_dir[which_player] = "right";
      return;
    }
    if (check_block(which_player, "right")) cur_pos[which_player][1]++;
    t_spun[which_player] = false;
  }
  if (event.key == "ArrowLeft" || event.key == "a") {
    if ((two_player || game_type == "mine") && event.key == "ArrowLeft")
      which_player = 1;
    if (lost[which_player]) {
      key_held[event.key] = 0;
      return;
    }
    if (game_type == "snake") {
      if (snake_dir[which_player] == "right") {
        return;
      }
      if (snake_dir[which_player] != "left" && snake_tech.checked) {
        move_timer[which_player] = 101;
      }
      snake_dir[which_player] = "left";
      return;
    }
    if (check_block(which_player, "left")) cur_pos[which_player][1]--;
    t_spun[which_player] = false;
  }
  if (event.key == "ArrowUp" || event.key == "w") {
    if ((two_player || game_type == "mine") && event.key == "ArrowUp")
      which_player = 1;
    if (lost[which_player]) {
      key_held[event.key] = 0;
      return;
    }
    if (game_type == "snake") {
      if (snake_dir[which_player] == "down") {
        return;
      }
      if (snake_dir[which_player] != "up" && snake_tech.checked) {
        move_timer[which_player] = 101;
      }
      snake_dir[which_player] = "up";
      return;
    }
    if (miner) return;
    if (drawing) {
      if (cur_pos[which_player][0] > 0) cur_pos[which_player][0]--;
      return;
    }
    var suitable = true;
    var m = vari_copy(cur_pos[which_player][0]);
    var inital_val = vari_copy(cur_pos[which_player][0]);
    var lowest_point = 0;
    for (
      var i = 0;
      i < blocks[picked_block[which_player]][rotation[which_player]].length;
      i++
    ) {
      if (
        lowest_point <
        blocks[picked_block[which_player]][rotation[which_player]][i][0]
      ) {
        lowest_point =
          blocks[picked_block[which_player]][rotation[which_player]][i][0];
      }
    }
    while (suitable == true && m < board_height - 1 - lowest_point) {
      suitable = check_block(which_player, "", [m, cur_pos[which_player][1]]);
      if (suitable) m++;
      else m--;
    }
    if (m >= board_height - 1 - lowest_point) {
      var move_up = false;
      for (
        var i = 0;
        i < blocks[picked_block[which_player]][rotation[which_player]].length;
        i++
      ) {
        if (
          m +
            blocks[picked_block[which_player]][rotation[which_player]][i][0] <=
          board_height - 1
        ) {
          if (
            rows[which_player][
              m +
                blocks[picked_block[which_player]][rotation[which_player]][i][0]
            ][
              cur_pos[which_player][1] +
                blocks[picked_block[which_player]][rotation[which_player]][i][1]
            ] == 1
          )
            move_up = true;
        }
      }
      if (move_up) m--;
    }
    cur_pos[which_player][0] = m;
    score[which_player] += 2 * (cur_pos[which_player][0] - inital_val);
    move_timer[which_player] += 100;
  }
  if (event.key == "z" || event.key == ",") {
    if ((two_player || game_type == "mine") && event.key == ",")
      which_player = 1;
    if (game_type == "mine") {
      clear_mine(cur_pos[1][0], cur_pos[1][1]);
      return;
    }
    if (lost[which_player]) {
      key_held[event.key] = 0;
      return;
    }
    if (drawing) {
      draw_color[which_player]--;
      if (draw_color[which_player] < 0)
        draw_color[which_player] = palette.length - 1;
      return;
    }
    if (game_type == "snake") {
      if (snake_dir[which_player] == "left") snake_dir[which_player] = "down";
      else if (snake_dir[which_player] == "down")
        snake_dir[which_player] = "right";
      else if (snake_dir[which_player] == "right")
        snake_dir[which_player] = "up";
      else if (snake_dir[which_player] == "up")
        snake_dir[which_player] = "left";
      if (snake_tech.checked) move_timer[which_player] = 101;
    }
    if (
      rotation[which_player] ==
      blocks[picked_block[which_player]].length - 1
    ) {
      rotation[which_player] = 0;
    } else {
      rotation[which_player]++;
    }
    while (!check_block(which_player, "")) {
      if (check_block(which_player, "left")) {
        cur_pos[which_player][1]--;
        if (picked_block[which_player] == "T") t_spun[which_player] = true;
        return;
      } else if (check_block(which_player, "right")) {
        if (picked_block[which_player] == "T") t_spun[which_player] = true;
        cur_pos[which_player][1]++;
        return;
      } else if (check_block(which_player, "down")) {
        if (picked_block[which_player] == "T") t_spun[which_player] = true;
        cur_pos[which_player][0]++;
        return;
      }
      if (
        rotation[which_player] ==
        blocks[picked_block[which_player]].length - 1
      ) {
        rotation[which_player] = 0;
      } else {
        rotation[which_player]++;
      }
    }
  } else if (event.key == "x" || event.key == ".") {
    if ((two_player || game_type == "mine") && event.key == ".")
      which_player = 1;
    if (game_type == "mine") {
      clear_flag(cur_pos[1][0], cur_pos[1][1]);
      return;
    }
    if (lost[which_player]) {
      key_held[event.key] = 0;
      return;
    }
    if (drawing) {
      draw_color[which_player]++;
      if (draw_color[which_player] > palette.length - 1)
        draw_color[which_player] = 0;
      return;
    }

    if (game_type == "snake") {
      if (snake_dir[which_player] == "left") snake_dir[which_player] = "up";
      else if (snake_dir[which_player] == "down")
        snake_dir[which_player] = "left";
      else if (snake_dir[which_player] == "right")
        snake_dir[which_player] = "down";
      else if (snake_dir[which_player] == "up")
        snake_dir[which_player] = "right";
      if (snake_tech.checked) move_timer[which_player] = 101;
    }
    if (rotation[which_player] == 0) {
      rotation[which_player] = blocks[picked_block[which_player]].length - 1;
    } else {
      rotation[which_player]--;
    }
    while (!check_block(which_player, "")) {
      if (check_block(which_player, "left")) {
        if (picked_block[which_player] == "T") t_spun[which_player] = true;
        cur_pos[which_player][1]--;
        return;
      } else if (check_block(which_player, "right")) {
        if (picked_block[which_player] == "T") t_spun[which_player] = true;
        cur_pos[which_player][1]++;
        return;
      } else if (check_block(which_player, "down")) {
        if (picked_block[which_player] == "T") t_spun[which_player] = true;
        cur_pos[which_player][0]++;
        return;
      }
      if (rotation[which_player] == 0) {
        rotation[which_player] = blocks[picked_block[which_player]].length - 1;
      } else {
        rotation[which_player]--;
      }
    }
  } else if (event.key == "c" || event.key == "/") {
    if ((two_player || game_type == "mine") && event.key == "/")
      which_player = 1;
    if (lost[which_player]) {
      key_held[event.key] = 0;
      return;
    }
    if (
      miner ||
      game_type == "puyo" ||
      game_type == "snake" ||
      game_type == "mine"
    )
      return;
    if (drawing) {
      var temp_thing = vari_copy(draw_color);

      if (drawing_tool.value == "eyedrop") {
        drawing_color_2.value = row_colors[0][cur_pos[0][0]][cur_pos[0][1]];
        drawing_tool.value = "pencil";
        return;
      }
      if (palette[temp_thing[0]] == "custom") {
        draw_color[0] = drawing_color_2.value;
      }
      if (drawing_tool.value.startsWith("bucket")) {
        var fill_replace = rows[0][cur_pos[which_player][0]][
          cur_pos[which_player][1]
        ]
          ? row_colors[0][cur_pos[which_player][0]][cur_pos[which_player][1]]
          : -1;
        if (fill_replace == -1 && drawing_tool.value == "bucket_bad") return;
        spots_to_remove = [];
        spots_to_kill = [];
        check_puyo_neighbors(
          cur_pos[which_player][1],
          cur_pos[which_player][0],
          fill_replace,
          which_player
        );
        for (var z = 0; z < spots_to_remove.length; z++) {
          if (fill_replace == -1) {
            rows[0][spots_to_remove[z][0]][spots_to_remove[z][1]] = 1;
            row_colors[0][spots_to_remove[z][0]][spots_to_remove[z][1]] =
              draw_color[0];
          } else {
            if (drawing_tool.value == "bucket_bad") {
              rows[0][spots_to_remove[z][0]][spots_to_remove[z][1]] = 0;
              row_colors[0][spots_to_remove[z][0]][spots_to_remove[z][1]] = 0;
            } else
              row_colors[0][spots_to_remove[z][0]][spots_to_remove[z][1]] =
                draw_color[0];
          }
        }
      } else {
        if (
          rows[0][cur_pos[which_player][0]][cur_pos[which_player][1]] &&
          row_colors[0][cur_pos[which_player][0]][cur_pos[which_player][1]] ==
            draw_color[which_player]
        ) {
          erase_it = 1;
          rows[0][cur_pos[which_player][0]][cur_pos[which_player][1]] = 0;
          row_colors[0][cur_pos[which_player][0]][cur_pos[which_player][1]] = 0;
        } else {
          erase_it = 2;
          rows[0][cur_pos[which_player][0]][cur_pos[which_player][1]] = 1;
          row_colors[0][cur_pos[which_player][0]][cur_pos[which_player][1]] =
            draw_color[which_player];
        }
      }
      draw_color = temp_thing;
      return;
    }
    if (held_yet[which_player] == false) {
      if (held[which_player] == -1) {
        held[which_player] = picked_block[which_player];
        spawn_block(which_player);
      } else {
        var temp_hold = vari_copy(picked_block[which_player]);
        spawn_block(which_player, held[which_player]);
        held[which_player] = temp_hold;
      }
      held_yet[which_player] = true;
    }
  }
  if (event.key == "e" || event.key == "k") {
    if (game_type == "art" && drawing && !two_player) {
      var temp_list = [];
      for (var k = 0; k < drawing_tool.options.length; k++) {
        temp_list.push(drawing_tool.options[k].value);
      }
      var current_val = 0;
      for (var k = 0; k < drawing_tool.options.length; k++) {
        if (drawing_tool.value == temp_list[k]) current_val = k;
      }
      if (current_val > 0)
        drawing_tool.value =
          temp_list[(current_val - 1) % drawing_tool.options.length];
      else drawing_tool.value = temp_list[drawing_tool.options.length - 1];
      return;
    }
    if (game_type != "rotate" || can_shift.checked) return;
    wacky_rotate(true);
  } else if (event.key == "r" || event.key == "l") {
    if (game_type == "art" && drawing && !two_player) {
      var temp_list = [];
      for (var k = 0; k < drawing_tool.options.length; k++) {
        temp_list.push(drawing_tool.options[k].value);
      }
      var current_val = 0;
      for (var k = 0; k < drawing_tool.options.length; k++) {
        if (drawing_tool.value == temp_list[k]) current_val = k;
      }
      drawing_tool.value =
        temp_list[(current_val + 1) % drawing_tool.options.length];
      return;
    }
    if (game_type != "rotate" || can_shift.checked) return;
    wacky_rotate(false);
  }
})

function textWidth(text) {
  var width = 1500;
  var height = 500;

  var canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  var ctx=canvas.getContext("2d");
  ctx.save();
  //ctx.font=fontSizeFace;
  ctx.clearRect(0,0,width,height);
  ctx.fillText(text, parseInt(width * 0.1, 10), parseInt(height / 2, 10));
  ctx.restore();
  document.body.appendChild(canvas);
  var data = ctx.getImageData(0,0,width,height).data;


  var leftMost = false;
  var rightMost = false;
  for(var x=0; x<width; x++) {
    for(var y=0; (y<height) && (!leftMost); y++) {
      //console.log("x: %s y: %s index: %s", x,y, getAlphaIndexForCoordinates(x,y,width,height).toString() );
      if(data[getAlphaIndexForCoordinates(x,y,width,height)] != 0) {
        leftMost = x;
      }
    }
  }
  for(var x=width-1; x>=0; x--) {
    for(var y=height-1; (y>=0) && (!rightMost); y--) {
      //console.log("x: %s y: %s index: %s", x,y, getAlphaIndexForCoordinates(x,y,width,height).toString() );
      if(data[getAlphaIndexForCoordinates(x,y,width,height)] != 0) {
        rightMost = x;
      }
    }
  }
document.body.removeChild(canvas);
  return ((rightMost - leftMost) + 1);
}
function getAlphaIndexForCoordinates(x,y,width,height) {
  return (((width*4*y)+4*x)+3);
}

function measureTextHeight(fontSizeFace) {
  // create a temp canvas
  var width = 1000;
  var height = 60;
  var canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  var ctx = canvas.getContext("2d");

  // Draw the entire a-z/A-Z alphabet in the canvas
  var text = "█";
  ctx.save();
  //ctx.font=fontSizeFace;
  ctx.clearRect(0, 0, width, height);
  ctx.fillText(text, 0, 40);
  ctx.restore();

  // Get the pixel data from the canvas
  var data = ctx.getImageData(0, 0, width, height).data,
    first = false,
    last = false,
    r = height,
    c = 0;

  // Find the last line with a non-transparent pixel
  while (!last && r) {
    r--;
    for (c = 0; c < width; c++) {
      if (data[r * width * 4 + c * 4 + 3]) {
        last = r;
        break;
      }
    }
  }

  // Find the first line with a non-transparent pixel
  while (r) {
    r--;
    for (c = 0; c < width; c++) {
      if (data[r * width * 4 + c * 4 + 3]) {
        first = r;
        break;
      }
    }

    // If we've got it then return the height
    if (first != r) return last - first;
  }

  // error condition if we get here
  return 0;
}

function keyHeld() {
  if (!keyboard_input) return;
  if (
    (lost[0] == true && lost[1] == true) ||
    started == false ||
    paused == true
  )
    return;
  var every_ = 5;
  var min_time = 30;
  var which_player = 0;
  //min_time = min_time; // Math.floor(speed[clamp(level, 1, speed.length-1)]/5)
  for (var mykey in key_held) {
    if (
      mykey == "ArrowDown" &&
      key_held[mykey] % every_ == 0 &&
      key_held[mykey] >= min_time
    ) {
      if (two_player || game_type == "mine") which_player = 1;
      if (drawing) {
        if (
          cur_pos[which_player][0] < board_height - 1 &&
          key_held[mykey] % every_ == 0
        ) {
          cur_pos[which_player][0]++;
          key_held[mykey] = 25;
        }
        return;
      }
      score[which_player]++;
      move_timer[which_player] += 100;
      if (two_player) which_player = 0;
    }
    if (
      mykey == "s" &&
      key_held[mykey] % every_ == 0 &&
      key_held[mykey] >= min_time &&
      (two_player || key_held["ArrowDown"] == 0)
    ) {
      if (drawing) {
        if (
          cur_pos[which_player][0] < board_height - 1 &&
          key_held[mykey] % every_ == 0
        ) {
          cur_pos[which_player][0]++;
          key_held[mykey] = 25;
        }
        return;
      }
      score[which_player]++;
      move_timer[which_player] += 100;
    }
    if (
      mykey == "ArrowUp" &&
      key_held[mykey] % every_ == 0 &&
      key_held[mykey] >= min_time
    ) {
      if (two_player || game_type == "mine") which_player = 1;
      if (drawing && key_held[mykey] % every_ == 0) {
        key_held[mykey] = 25;
        if (cur_pos[which_player][0] > 0) cur_pos[which_player][0]--;
        return;
      }
      if (two_player) which_player = 0;
    }
    if (
      mykey == "w" &&
      key_held[mykey] % every_ == 0 &&
      key_held[mykey] >= min_time &&
      (two_player || key_held["ArrowUp"] == 0)
    ) {
      if (drawing && key_held[mykey] % every_ == 0) {
        key_held[mykey] = 25;
        if (cur_pos[which_player][0] > 0) cur_pos[which_player][0]--;
        return;
      }
    }
    if (
      mykey == "ArrowRight" &&
      key_held[mykey] % every_ == 0 &&
      key_held[mykey] >= min_time
    ) {
      if (two_player || game_type == "mine") which_player = 1;
      if (check_block(which_player, "right")) cur_pos[which_player][1]++;
      if (two_player) which_player = 0;
    }
    if (
      mykey == "d" &&
      key_held[mykey] % every_ == 0 &&
      key_held[mykey] >= min_time &&
      (two_player || key_held["ArrowRight"] == 0)
    ) {
      if (check_block(which_player, "right")) cur_pos[which_player][1]++;
    }
    if (
      mykey == "ArrowLeft" &&
      key_held[mykey] % every_ == 0 &&
      key_held[mykey] >= min_time
    ) {
      if (two_player || game_type == "mine") which_player = 1;
      if (check_block(which_player, "left")) cur_pos[which_player][1]--;
      if (two_player) which_player = 0;
    }
    if (
      mykey == "a" &&
      key_held[mykey] % every_ == 0 &&
      key_held[mykey] >= min_time &&
      (two_player || key_held["ArrowLeft"] == 0)
    ) {
      if (check_block(which_player, "left")) cur_pos[which_player][1]--;
    }
    if (
      mykey == "c" &&
      key_held[mykey] % every_ == 0 &&
      key_held[mykey] >= min_time &&
      drawing && drawing_tool.value == "pencil"
    ) {
      var temp_thing = vari_copy(draw_color);
      if (palette[temp_thing[0]] == "custom") {
        draw_color[0] = drawing_color_2.value;
      }
      if (
        rows[which_player][cur_pos[which_player][0]][
          cur_pos[which_player][1]
        ] &&
        row_colors[which_player][cur_pos[which_player][0]][
          cur_pos[which_player][1]
        ] == draw_color[which_player] &&
        erase_it == 1
      ) {
        rows[which_player][cur_pos[which_player][0]][
          cur_pos[which_player][1]
        ] = 0;
        row_colors[which_player][cur_pos[which_player][0]][
          cur_pos[which_player][1]
        ] = 0;
      } else if (erase_it == 2) {
        rows[0][cur_pos[which_player][0]][cur_pos[which_player][1]] = 1;
        row_colors[0][cur_pos[which_player][0]][cur_pos[which_player][1]] =
          draw_color[which_player];
      }
      draw_color = temp_thing;
    }
    if (
      mykey == "/" &&
      key_held[mykey] % every_ == 0 &&
      key_held[mykey] >= min_time &&
      drawing &&
      (two_player || key_held["c"] == 0)
    ) {
      if (two_player) which_player = 1;
      if (
        rows[which_player][cur_pos[which_player][0]][
          cur_pos[which_player][1]
        ] &&
        row_colors[which_player][cur_pos[which_player][0]][
          cur_pos[which_player][1]
        ] == draw_color[which_player] &&
        erase_it == 1
      ) {
        rows[which_player][cur_pos[which_player][0]][
          cur_pos[which_player][1]
        ] = 0;
        row_colors[which_player][cur_pos[which_player][0]][
          cur_pos[which_player][1]
        ] = 0;
      } else if (erase_it == 2) {
        rows[0][cur_pos[which_player][0]][cur_pos[which_player][1]] = 1;
        row_colors[0][cur_pos[which_player][0]][cur_pos[which_player][1]] =
          draw_color[which_player];
      }
      if (two_player) which_player = 0;
    }
    if (key_held[mykey] > 0) key_held[mykey]++;
  }
}

//function keyReleased(event) {
addEventListener("keyup", (event) => {
  if (
    (lost[0] == true && lost[1] == true) ||
    started == false ||
    paused == true
  )
    return;
//alert(key_held[event.key])
  if (miner && event.key == "ArrowDown") return;
  key_held[event.key] = 0;
  if (event.key == "c") erase_it = 0;
})

//while(true)
setInterval(draw, 10)