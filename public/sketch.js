let growth_1_01;
let growth_1_02;
let growth_1_03;
let growth_1_04;
let growth_1_05;
let growth_1_06;
let growth_1_07;
let growth_1_08;
let growth_1_09;
let growth_1_10;
let growth_1_11;
let growth_1_12;
let growth_1_13;
let growth_1_14;
let growth_1_15;
let growth_1_16;
let growth_1_17;
let growth_1_arr = [];
let growth_1_index = 0;

let growth_1_droopy_01;
let growth_1_droopy_02;
let growth_1_droopy_03;
let growth_1_droopy_04;
let growth_1_droopy_05;
let growth_1_droopy_06;
let growth_1_droopy_07;
let growth_1_droopy_08;
let growth_1_droopy_09;
let growth_1_droopy_10;
let growth_1_droopy_11;
let growth_1_droopy_12;
let growth_1_droopy_13;
let growth_1_droopy_14;
let growth_1_droopy_15;
let growth_1_droopy_16;
let growth_1_droopy_17;
let growth_1_droopy_18;
let growth_1_droopy_19;
let growth_1_droopy_20;
let growth_1_droopy_21;
let growth_1_droopy_arr = [];
let growth_1_droopy_index = 0;

let growth_2_01;
let growth_2_02;
let growth_2_03;
let growth_2_04;
let growth_2_05;
let growth_2_06;
let growth_2_07;
let growth_2_08;
let growth_2_09;
let growth_2_10;
let growth_2_11;
let growth_2_12;
let growth_2_13;
let growth_2_14;
let growth_2_15;
let growth_2_16;
let growth_2_17;
let growth_2_18;
let growth_2_19;
let growth_2_arr = [];
let growth_2_index = 0;

let growth_2_droopy_01;
let growth_2_droopy_02;
let growth_2_droopy_03;
let growth_2_droopy_04;
let growth_2_droopy_05;
let growth_2_droopy_06;
let growth_2_droopy_07;
let growth_2_droopy_08;
let growth_2_droopy_09;
let growth_2_droopy_10;
let growth_2_droopy_11;
let growth_2_droopy_12;
let growth_2_droopy_13;
let growth_2_droopy_14;
let growth_2_droopy_15;
let growth_2_droopy_16;
let growth_2_droopy_17;
let growth_2_droopy_18;
let growth_2_droopy_19;
let growth_2_droopy_arr = [];
let growth_2_droopy_index = 0;

let growth_3_01;
let growth_3_02;
let growth_3_03;
let growth_3_04;
let growth_3_05;
let growth_3_06;
let growth_3_07;
let growth_3_08;
let growth_3_09;
let growth_3_10;
let growth_3_11;
let growth_3_12;
let growth_3_13;
let growth_3_14;
let growth_3_15;
let growth_3_16;
let growth_3_17;
let growth_3_18;
let growth_3_19;
let growth_3_arr = [];
let growth_3_index = 0;


let growth_3_droopy_01;
let growth_3_droopy_02;
let growth_3_droopy_03;
let growth_3_droopy_04;
let growth_3_droopy_05;
let growth_3_droopy_06;
let growth_3_droopy_07;
let growth_3_droopy_08;
let growth_3_droopy_09;
let growth_3_droopy_10;
let growth_3_droopy_11;
let growth_3_droopy_12;
let growth_3_droopy_13;
let growth_3_droopy_14;
let growth_3_droopy_15;
let growth_3_droopy_16;
let growth_3_droopy_17;
let growth_3_droopy_18;
let growth_3_droopy_19;
let growth_3_droopy_arr = [];
let growth_3_droopy_index = 0;

let growth_4_01;
let growth_4_02;
let growth_4_03;
let growth_4_04;
let growth_4_05;
let growth_4_06;
let growth_4_07;
let growth_4_08;
let growth_4_09;
let growth_4_10;
let growth_4_11;
let growth_4_12;
let growth_4_13;
let growth_4_14;
let growth_4_15;
let growth_4_16;
let growth_4_17;
let growth_4_arr = [];
let growth_4_index = 0;



let windowW;
let windowH;
let createDate;
let timeData;

let minuteTime;
let time;
let lat;
let lon;
let testBrowser;
let currentTemp;
let hot = 90;
let cold = 15;
let tempBool;
let standardHours;
let meridiem;
//water bool == true if too much
//true water bool trumps temp bool 
let waterBool;

let waterGauge1;
let waterGauge2;
let waterGauge3;
let waterGauge4;
let waterGaugeArr;
let gaugeIndex = 0;

let ground;
let stars;




//database variable count
//need date so it doesnt count in the same day 
let days;
let day;
let dayIndex;
let loadData;
function preload() {
  growth_1_01 = loadImage('growth1/sage_1_00.png');
  growth_1_02 = loadImage('growth1/sage_1_01.png');
  growth_1_03 = loadImage('growth1/sage_1_02.png');
  growth_1_04 = loadImage('growth1/sage_1_03.png');
  growth_1_05 = loadImage('growth1/sage_1_04.png');
  growth_1_06 = loadImage('growth1/sage_1_05.png');
  growth_1_07 = loadImage('growth1/sage_1_06.png');
  growth_1_08 = loadImage('growth1/sage_1_07.png');
  growth_1_09 = loadImage('growth1/sage_1_08.png');
  growth_1_10 = loadImage('growth1/sage_1_09.png');
  growth_1_11 = loadImage('growth1/sage_1_10.png');
  growth_1_12 = loadImage('growth1/sage_1_11.png');
  growth_1_13 = loadImage('growth1/sage_1_12.png');
  growth_1_14 = loadImage('growth1/sage_1_13.png');
  growth_1_15 = loadImage('growth1/sage_1_14.png');
  growth_1_16 = loadImage('growth1/sage_1_15.png');
  growth_1_17 = loadImage('growth1/sage_1_16.png');
  growth_1_18 = loadImage('growth1/sage_1_17.png');
  growth_1_19 = loadImage('growth1/sage_1_18.png');
  growth_1_20 = loadImage('growth1/sage_1_19.png');

  growth_1_droopy_01 = loadImage('growth1_droopy/growth_1_00.png');
  growth_1_droopy_02 = loadImage('growth1_droopy/growth_1_01.png');
  growth_1_droopy_03 = loadImage('growth1_droopy/growth_1_02.png');
  growth_1_droopy_04 = loadImage('growth1_droopy/growth_1_03.png');
  growth_1_droopy_05 = loadImage('growth1_droopy/growth_1_04.png');
  growth_1_droopy_06 = loadImage('growth1_droopy/growth_1_05.png');
  growth_1_droopy_07 = loadImage('growth1_droopy/growth_1_06.png');
  growth_1_droopy_08 = loadImage('growth1_droopy/growth_1_07.png');
  growth_1_droopy_09 = loadImage('growth1_droopy/growth_1_08.png');
  growth_1_droopy_10 = loadImage('growth1_droopy/growth_1_09.png');
  growth_1_droopy_11 = loadImage('growth1_droopy/growth_1_10.png');
  growth_1_droopy_12 = loadImage('growth1_droopy/growth_1_11.png');
  growth_1_droopy_13 = loadImage('growth1_droopy/growth_1_12.png');
  growth_1_droopy_14 = loadImage('growth1_droopy/growth_1_13.png');
  growth_1_droopy_15 = loadImage('growth1_droopy/growth_1_14.png');
  growth_1_droopy_16 = loadImage('growth1_droopy/growth_1_15.png');
  growth_1_droopy_17 = loadImage('growth1_droopy/growth_1_16.png');
  growth_1_droopy_18 = loadImage('growth1_droopy/growth_1_17.png');
  growth_1_droopy_19 = loadImage('growth1_droopy/growth_1_18.png');
  growth_1_droopy_20 = loadImage('growth1_droopy/growth_1_19.png');
  growth_1_droopy_21 = loadImage('growth1_droopy/growth_1_20.png');

  growth_2_01 = loadImage('growth2/sage_2_00.png');
  growth_2_02 = loadImage('growth2/sage_2_01.png');
  growth_2_03 = loadImage('growth2/sage_2_02.png');
  growth_2_04 = loadImage('growth2/sage_2_03.png');
  growth_2_05 = loadImage('growth2/sage_2_04.png');
  growth_2_06 = loadImage('growth2/sage_2_05.png');
  growth_2_07 = loadImage('growth2/sage_2_06.png');
  growth_2_08 = loadImage('growth2/sage_2_07.png');
  growth_2_09 = loadImage('growth2/sage_2_08.png');
  growth_2_10 = loadImage('growth2/sage_2_09.png');
  growth_2_11 = loadImage('growth2/sage_2_10.png');
  growth_2_12 = loadImage('growth2/sage_2_11.png');
  growth_2_13 = loadImage('growth2/sage_2_12.png');
  growth_2_14 = loadImage('growth2/sage_2_13.png');
  growth_2_15 = loadImage('growth2/sage_2_14.png');
  growth_2_16 = loadImage('growth2/sage_2_15.png');
  growth_2_17 = loadImage('growth2/sage_2_16.png');
  growth_2_18 = loadImage('growth2/sage_2_17.png');
  growth_2_19 = loadImage('growth2/sage_2_18.png');

  growth_2_droopy_01 = loadImage('growth2_droopy/growth_2_00.png');
  growth_2_droopy_02 = loadImage('growth2_droopy/growth_2_01.png');
  growth_2_droopy_03 = loadImage('growth2_droopy/growth_2_02.png');
  growth_2_droopy_04 = loadImage('growth2_droopy/growth_2_03.png');
  growth_2_droopy_05 = loadImage('growth2_droopy/growth_2_04.png');
  growth_2_droopy_06 = loadImage('growth2_droopy/growth_2_05.png');
  growth_2_droopy_07 = loadImage('growth2_droopy/growth_2_06.png');
  growth_2_droopy_08 = loadImage('growth2_droopy/growth_2_07.png');
  growth_2_droopy_09 = loadImage('growth2_droopy/growth_2_08.png');
  growth_2_droopy_10 = loadImage('growth2_droopy/growth_2_09.png');
  growth_2_droopy_11 = loadImage('growth2_droopy/growth_2_10.png');
  growth_2_droopy_12 = loadImage('growth2_droopy/growth_2_11.png');
  growth_2_droopy_13 = loadImage('growth2_droopy/growth_2_12.png');
  growth_2_droopy_14 = loadImage('growth2_droopy/growth_2_13.png');
  growth_2_droopy_15 = loadImage('growth2_droopy/growth_2_14.png');
  growth_2_droopy_16 = loadImage('growth2_droopy/growth_2_15.png');
  growth_2_droopy_17 = loadImage('growth2_droopy/growth_2_16.png');
  growth_2_droopy_18 = loadImage('growth2_droopy/growth_2_17.png');
  growth_2_droopy_19 = loadImage('growth2_droopy/growth_2_18.png');

  growth_3_01 = loadImage('growth3/sage_3_00.png');
  growth_3_02 = loadImage('growth3/sage_3_01.png');
  growth_3_03 = loadImage('growth3/sage_3_02.png');
  growth_3_04 = loadImage('growth3/sage_3_03.png');
  growth_3_05 = loadImage('growth3/sage_3_04.png');
  growth_3_06 = loadImage('growth3/sage_3_05.png');
  growth_3_07 = loadImage('growth3/sage_3_06.png');
  growth_3_08 = loadImage('growth3/sage_3_07.png');
  growth_3_09 = loadImage('growth3/sage_3_08.png');
  growth_3_10 = loadImage('growth3/sage_3_09.png');
  growth_3_11 = loadImage('growth3/sage_3_10.png');
  growth_3_12 = loadImage('growth3/sage_3_11.png');
  growth_3_13 = loadImage('growth3/sage_3_12.png');
  growth_3_14 = loadImage('growth3/sage_3_13.png');
  growth_3_15 = loadImage('growth3/sage_3_14.png');
  growth_3_16 = loadImage('growth3/sage_3_15.png');
  growth_3_17 = loadImage('growth3/sage_3_16.png');
  growth_3_18 = loadImage('growth3/sage_3_17.png');
  growth_3_19 = loadImage('growth3/sage_3_18.png');
  growth_3_20 = loadImage('growth3/sage_3_19.png');
  growth_3_21 = loadImage('growth3/sage_3_20.png');
  growth_3_22 = loadImage('growth3/sage_3_21.png');

  growth_3_droopy_01 = loadImage('growth3_droopy/sage_03_00.png');
  growth_3_droopy_02 = loadImage('growth3_droopy/sage_03_01.png');
  growth_3_droopy_03 = loadImage('growth3_droopy/sage_03_02.png');
  growth_3_droopy_04 = loadImage('growth3_droopy/sage_03_03.png');
  growth_3_droopy_05 = loadImage('growth3_droopy/sage_03_04.png');
  growth_3_droopy_06 = loadImage('growth3_droopy/sage_03_05.png');
  growth_3_droopy_07 = loadImage('growth3_droopy/sage_03_06.png');
  growth_3_droopy_08 = loadImage('growth3_droopy/sage_03_07.png');
  growth_3_droopy_09 = loadImage('growth3_droopy/sage_03_08.png');
  growth_3_droopy_10 = loadImage('growth3_droopy/sage_03_09.png');
  growth_3_droopy_11 = loadImage('growth3_droopy/sage_03_10.png');
  growth_3_droopy_12 = loadImage('growth3_droopy/sage_03_11.png');
  growth_3_droopy_13 = loadImage('growth3_droopy/sage_03_12.png');
  growth_3_droopy_14 = loadImage('growth3_droopy/sage_03_13.png');
  growth_3_droopy_15 = loadImage('growth3_droopy/sage_03_14.png');
  growth_3_droopy_16 = loadImage('growth3_droopy/sage_03_15.png');
  growth_3_droopy_17 = loadImage('growth3_droopy/sage_03_16.png');
  growth_3_droopy_18 = loadImage('growth3_droopy/sage_03_17.png');
  growth_3_droopy_19 = loadImage('growth3_droopy/sage_03_18.png');
  growth_3_droopy_20 = loadImage('growth3_droopy/sage_03_19.png');
  growth_3_droopy_21 = loadImage('growth3_droopy/sage_03_20.png');
  growth_3_droopy_22 = loadImage('growth3_droopy/sage_03_21.png');

  growth_4_01 = loadImage('growth4/sage_4_00.png');
  growth_4_02 = loadImage('growth4/sage_4_01.png');
  growth_4_03 = loadImage('growth4/sage_4_02.png');
  growth_4_04 = loadImage('growth4/sage_4_03.png');
  growth_4_05 = loadImage('growth4/sage_4_04.png');
  growth_4_06 = loadImage('growth4/sage_4_05.png');
  growth_4_07 = loadImage('growth4/sage_4_06.png');
  growth_4_08 = loadImage('growth4/sage_4_07.png');
  growth_4_09 = loadImage('growth4/sage_4_08.png');
  growth_4_10 = loadImage('growth4/sage_4_09.png');
  growth_4_11 = loadImage('growth4/sage_4_10.png');
  growth_4_12 = loadImage('growth4/sage_4_11.png');
  growth_4_13 = loadImage('growth4/sage_4_12.png');
  growth_4_14 = loadImage('growth4/sage_4_13.png');
  growth_4_15 = loadImage('growth4/sage_4_14.png');
  growth_4_16 = loadImage('growth4/sage_4_15.png');

  waterGauge1 = loadImage('waterGauge/1.png');
  waterGauge2 = loadImage('waterGauge/2.png');
  waterGauge3 = loadImage('waterGauge/3.png');
  waterGauge4 = loadImage('waterGauge/4.png');

  ground = loadImage('background/test.png');
  stars = loadImage('background/stars.png');
  
  loadData = loadJSON("db.json");
  //2 functions --> get existing json info
  //overwirite existing data
}  

function setup() {
  windowW = windowWidth/2;
  windowH = windowHeight/2;

   let canvas = createCanvas(350,450);
   canvas.parent('sketch-container');
   frameRate(5);
   growth_1_arr = [growth_1_01, growth_1_01, growth_1_01, growth_1_02, growth_1_02, growth_1_02, growth_1_03, growth_1_03, growth_1_03, growth_1_04, growth_1_04, growth_1_04, growth_1_05, growth_1_05, growth_1_05, growth_1_06, growth_1_06, growth_1_06, growth_1_07, growth_1_07, growth_1_07, growth_1_08, growth_1_08, growth_1_08, growth_1_09, growth_1_09, growth_1_09, growth_1_10, growth_1_10, growth_1_10, growth_1_11, growth_1_11, growth_1_11, growth_1_12, growth_1_12, growth_1_12, growth_1_13,  growth_1_13, growth_1_13, growth_1_14, growth_1_14, growth_1_14, growth_1_15, growth_1_15, growth_1_15, growth_1_16, growth_1_16, growth_1_16, growth_1_17, growth_1_17, growth_1_17,growth_1_18, growth_1_18, growth_1_18,growth_1_19, growth_1_19, growth_1_19,growth_1_20, growth_1_20, growth_1_20, growth_1_01, growth_1_01, growth_1_01];
   growth_1_droopy_arr = [growth_1_droopy_01, growth_1_droopy_01, growth_1_droopy_01, growth_1_droopy_02, growth_1_droopy_02, growth_1_droopy_02, growth_1_droopy_03, growth_1_droopy_03, growth_1_droopy_03, growth_1_droopy_04, growth_1_droopy_04, growth_1_droopy_04, growth_1_droopy_05, growth_1_droopy_05, growth_1_droopy_05, growth_1_droopy_06, growth_1_droopy_06, growth_1_droopy_06, growth_1_droopy_07, growth_1_droopy_07, growth_1_droopy_07, growth_1_droopy_08, growth_1_droopy_08, growth_1_droopy_08, growth_1_droopy_09, growth_1_droopy_09, growth_1_droopy_09, growth_1_droopy_10, growth_1_droopy_10, growth_1_droopy_10, growth_1_droopy_11, growth_1_droopy_11, growth_1_droopy_11, growth_1_droopy_12, growth_1_droopy_12, growth_1_droopy_12, growth_1_droopy_13,  growth_1_droopy_13, growth_1_droopy_13, growth_1_droopy_14, growth_1_droopy_14, growth_1_droopy_14, growth_1_droopy_15, growth_1_droopy_15, growth_1_droopy_15, growth_1_droopy_16, growth_1_droopy_16, growth_1_droopy_16, growth_1_droopy_17, growth_1_droopy_17, growth_1_droopy_17,growth_1_droopy_18, growth_1_droopy_18, growth_1_droopy_18,growth_1_droopy_19, growth_1_droopy_19, growth_1_droopy_19,growth_1_droopy_20, growth_1_droopy_20, growth_1_droopy_20,growth_1_droopy_21, growth_1_droopy_21, growth_1_droopy_21, growth_1_droopy_01, growth_1_droopy_01, growth_1_droopy_01];
   growth_2_arr = [growth_2_01, growth_2_01, growth_2_01, growth_2_02, growth_2_02, growth_2_02, growth_2_02, growth_2_03, growth_2_03, growth_2_03, growth_2_03, growth_2_04, growth_2_04, growth_2_04, growth_2_04, growth_2_05, growth_2_05, growth_2_05, growth_2_05, growth_2_06, growth_2_06, growth_2_06, growth_2_06, growth_2_07, growth_2_07, growth_2_07, growth_2_07, growth_2_08, growth_2_08, growth_2_08,  growth_2_08, growth_2_09, growth_2_09, growth_2_09,  growth_2_09, growth_2_10, growth_2_10, growth_2_10,  growth_2_10, growth_2_11, growth_2_11, growth_2_11, growth_2_11, growth_2_12, growth_2_12, growth_2_12,  growth_2_12, growth_2_13,  growth_2_13, growth_2_13,  growth_2_13, growth_2_14, growth_2_14, growth_2_14,  growth_2_14, growth_2_15, growth_2_15, growth_2_15, growth_2_15, growth_2_16,  growth_2_16, growth_2_16, growth_2_16, growth_2_17, growth_2_17, growth_2_17, growth_2_17,growth_2_18, growth_2_18, growth_2_18, growth_2_18,growth_2_19, growth_2_19,  growth_2_19, growth_2_19];
   growth_2_droopy_arr = [growth_2_droopy_01, growth_2_droopy_01, growth_2_droopy_01, growth_2_droopy_02, growth_2_droopy_02, growth_2_droopy_02, growth_2_droopy_02, growth_2_droopy_03, growth_2_droopy_03, growth_2_droopy_03, growth_2_droopy_03, growth_2_droopy_04, growth_2_droopy_04, growth_2_droopy_04, growth_2_droopy_04, growth_2_droopy_05, growth_2_droopy_05, growth_2_droopy_05, growth_2_droopy_05, growth_2_droopy_06, growth_2_droopy_06, growth_2_droopy_06, growth_2_droopy_06, growth_2_droopy_07, growth_2_droopy_07, growth_2_droopy_07, growth_2_droopy_07, growth_2_droopy_08, growth_2_droopy_08, growth_2_droopy_08,  growth_2_droopy_08, growth_2_droopy_09, growth_2_droopy_09, growth_2_droopy_09,  growth_2_droopy_09, growth_2_droopy_10, growth_2_droopy_10, growth_2_droopy_10,  growth_2_droopy_10, growth_2_droopy_11, growth_2_droopy_11, growth_2_droopy_11, growth_2_droopy_11, growth_2_droopy_12, growth_2_droopy_12, growth_2_droopy_12,  growth_2_droopy_12, growth_2_droopy_13,  growth_2_droopy_13, growth_2_droopy_13,  growth_2_droopy_13, growth_2_droopy_14, growth_2_droopy_14, growth_2_droopy_14,  growth_2_droopy_14, growth_2_droopy_15, growth_2_droopy_15, growth_2_droopy_15, growth_2_droopy_15, growth_2_droopy_16,  growth_2_droopy_16, growth_2_droopy_16, growth_2_droopy_16, growth_2_droopy_17, growth_2_droopy_17, growth_2_droopy_17, growth_2_droopy_17,growth_2_droopy_18, growth_2_droopy_18, growth_2_droopy_18, growth_2_droopy_18,growth_2_droopy_19, growth_2_droopy_19,  growth_2_droopy_19, growth_2_droopy_19];
   growth_3_arr = [growth_3_02, growth_3_02, growth_3_02,growth_3_03, growth_3_03, growth_3_03,growth_3_04, growth_3_04, growth_3_04, growth_3_05, growth_3_05, growth_3_05, growth_3_06, growth_3_06, growth_3_06,growth_3_07, growth_3_07, growth_3_07, growth_3_08, growth_3_08,  growth_3_08,growth_3_09, growth_3_09,  growth_3_09,growth_3_10, growth_3_10,  growth_3_10, growth_3_11, growth_3_11, growth_3_11,growth_3_12, growth_3_12,  growth_3_12, growth_3_13, growth_3_13,  growth_3_13, growth_3_14, growth_3_14, growth_3_14, growth_3_15, growth_3_15, growth_3_15, growth_3_16,  growth_3_16,  growth_3_16, growth_3_17, growth_3_17, growth_3_17, growth_3_18, growth_3_18, growth_3_18,growth_3_19,  growth_3_19, growth_3_19,growth_3_20, growth_3_20,  growth_3_20, growth_3_21,  growth_3_21, growth_3_21];
   growth_3_droopy_arr = [growth_3_droopy_02, growth_3_droopy_02, growth_3_droopy_02,growth_3_droopy_03, growth_3_droopy_03, growth_3_droopy_03,growth_3_droopy_04, growth_3_droopy_04, growth_3_droopy_04, growth_3_droopy_05, growth_3_droopy_05, growth_3_droopy_05, growth_3_droopy_06, growth_3_droopy_06, growth_3_droopy_06,growth_3_droopy_07, growth_3_droopy_07, growth_3_droopy_07, growth_3_droopy_08, growth_3_droopy_08,  growth_3_droopy_08,growth_3_droopy_09, growth_3_droopy_09,  growth_3_droopy_09,growth_3_droopy_10, growth_3_droopy_10,  growth_3_droopy_10, growth_3_droopy_11, growth_3_droopy_11, growth_3_droopy_11,growth_3_droopy_12, growth_3_droopy_12,  growth_3_droopy_12, growth_3_droopy_13, growth_3_droopy_13,  growth_3_droopy_13, growth_3_droopy_14, growth_3_droopy_14, growth_3_droopy_14, growth_3_droopy_15, growth_3_droopy_15, growth_3_droopy_15, growth_3_droopy_16,  growth_3_droopy_16,  growth_3_droopy_16, growth_3_droopy_17, growth_3_droopy_17, growth_3_droopy_17, growth_3_droopy_18, growth_3_droopy_18, growth_3_droopy_18,growth_3_droopy_19,  growth_3_droopy_19, growth_3_droopy_19,growth_3_droopy_20, growth_3_droopy_20,  growth_3_droopy_20, growth_3_droopy_21,  growth_3_droopy_21, growth_3_droopy_21, growth_3_droopy_22,  growth_3_droopy_22, growth_3_droopy_22];
   growth_4_arr = [growth_4_01, growth_4_01, growth_4_01, growth_4_02, growth_4_02, growth_4_02, growth_4_03, growth_4_03, growth_4_03, growth_4_04, growth_4_04, growth_4_04, growth_4_05, growth_4_05, growth_4_05, growth_4_06, growth_4_06, growth_4_06, growth_4_07, growth_4_07, growth_4_07, growth_4_08, growth_4_08, growth_4_08, growth_4_09, growth_4_09, growth_4_09, growth_4_10, growth_4_10, growth_4_10, growth_4_11, growth_4_11, growth_4_11, growth_4_12, growth_4_12, growth_4_12, growth_4_13,  growth_4_13, growth_4_13, growth_4_14, growth_4_14, growth_4_14, growth_4_15, growth_4_15, growth_4_15, growth_4_01, growth_4_01, growth_4_01];
   
   waterGaugeArr = [waterGauge1, waterGauge2, waterGauge3, waterGauge4];
}
geoLocationTest();
geoLocation(testBrowser);
createDate = new Date();
timeData = createDate.getHours();
console.log(timeData + "hours");




minuteTime = createDate.getMinutes();
console.log(minuteTime);
getTime(timeData);
//standardHours = calcHours(timeData);
//meridiem = ampm(timeData);
//displayTime(standardHours, minuteTime, meridiem );

//db vars
days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
dayIndex = createDate.getDay();
day = days[dayIndex];
getDays(day);
function draw() {
    clear();
    getJsonData(loadData);
   
    if(time == true){
        //day
        background('#B0E0E6');
    }else{
        //night
        //background('#010203');
        background(stars);
    }
    //send to function omit all the if else in draw -->notes below
    //healthy
    image(ground, 0, 350);

    if(tempBool == false){
        growth_1();
       // growth_2();
       //growth_3();
       // growth_4();
        //droopy
       // growth_4_droop();
     
    }else{
        growth_1_droop();
        //growth_2_droop();
        //growth_3_droop();
    }
  //  image(waterGaugeArr[3], 50, 180);
   

    // waterGauge(); --> draws water gauge reliant on db fill count if over water in one  week water decrease by 1 until normal cannot be below 0
}

  //function(watergaugeBool, daycounter, tempBool)
  //2 ifs then add bools
  //user can cheat unfortunately by adding all water in one day but hafta fix later
  //daycounter is primary key or date, datecounter should never increment in the same day so prolly daycounter...
  //if daycounter <=5  --> plant is healthy even if water gauge is at 0 or full add nested if inside for  water gauge is over 3--> else healthy
  //else if daycounter >5 && <= 7 -->  if water gauge is less than 3 or greater than three it will be wilty else healthy 
  //else() (>7) --> reset db daycounter starts at 1 water gauge starts at 0 
 
 /* function ampm(hours){
    switch (hours){
        case 0:
            meridiem  = "am";
           return meridiem ;
        case 1:
           meridiem  = "am";
           return meridiem ;
        case 2:
           meridiem  = "am";
           return meridiem ;           
        case 3:
           meridiem  = "am";
           return meridiem ;
        case 4:
           meridiem  = "am";
           return meridiem ;
        case 5:
           meridiem  = "am";
           return meridiem ;
        case 6:
           meridiem  = "am";
           return meridiem ;
        case 7:
           meridiem  = "am";
           return meridiem ;
        case 8:
           meridiem  = "am";
           return meridiem ;
        case 9:
           meridiem  = "am";
           return meridiem ;
        case 10:
           meridiem  = "am";
           return meridiem ;
        case 11:
           meridiem  = "am";
           return meridiem ;
        case 12:
           meridiem  = "pm";
           return meridiem ;
        case 13:
           meridiem  = "pm";
           return meridiem ;
        case 14:
           meridiem  = "pm";
           return meridiem ;
        case 15:
           meridiem  = "pm";
           return meridiem ;
        case 16:
           meridiem  = "pm";
           return meridiem ;
        case 17:
           meridiem  = "pm";
           return meridiem ;
        case 18:
           meridiem  = "pm";
           return meridiem ;
        case 19:
           meridiem  = "pm";
           return meridiem ;
        case 20:
           meridiem  = "pm";
           return meridiem ;
        case 21:
           meridiem  = "pm";
           return meridiem ;
        case 22:
           meridiem  = "pm";
           return meridiem ;
        case 23:
           meridiem  = "pm";
           return meridiem ;
        default:
            console.log("get standard meridiem  error");
    }
 }*/
/*function calcHours(sthours){
    switch (sthours){
        case 0:
           sthours = 12;
           return sthours;
        case 1:
           sthours = 1;
           return sthours;
        case 2:
           sthours = 2;
           return sthours;           
        case 3:
           sthours = 3;
           return sthours;
        case 4:
           sthours = 4;
           return sthours;
        case 5:
           sthours = 5;
           return sthours;
        case 6:
           sthours = 6;
           return sthours;
        case 7:
           sthours = 7;
           return sthours;
        case 8:
           sthours = 8;
           return sthours;
        case 9:
           sthours = 9;
           return sthours;
        case 10:
           sthours = 10;
           return sthours;
        case 11:
           sthours = 11;
           return sthours;
        case 12:
           sthours = 12;
           return sthours;
        case 13:
           sthours = 1;
           return sthours;
        case 14:
           sthours = 2;
           return sthours;
        case 15:
           sthours = 3;
           return sthours;
        case 16:
           sthours = 4;
           return sthours;
        case 17:
           sthours = 5;
           return sthours;
        case 18:
           sthours = 6;
           return sthours;
        case 19:
           sthours = 7;
           return sthours;
        case 20:
           sthours = 8;
           return sthours;
        case 21:
           sthours = 9;
           return sthours;
        case 22:
           sthours = 10;
           return sthours;
        case 23:
           sthours = 11;
           return sthours;
        default:
            console.log("get standard standard hours error");
    }
 }*/
 function getJsonData(data){
          console.log(data.name);
           data.name = "momo";
         
 }
 function getDays(data){
   
   console.log("day " + data );
 }
function displayTime(standardHours, minutes, meridiem ){
    if(minutes <= 9){
        document.getElementById('time').textContent = `${standardHours}:0${minutes} ${meridiem}`;
    }else{
        document.getElementById('time').textContent = `${standardHours}:${minutes} ${meridiem}`;
    }
    

 }
  function getTime(timeData){
       switch (timeData){
           case 0:
              time = false;
              return time;
           case 1:
              time = false;
              return time;
           case 2:
              time = false;
              return time;           
           case 3:
              time = false;
              return time;
           case 4:
              time = false;
              return time;
           case 5:
              time = false;
              return time;
           case 6:
              time = true;
              return time;
           case 7:
              time = true;
              return time;
           case 8:
              time = true;
              return time;
           case 9:
              time = true;
              return time;
           case 10:
              time = true;
              return time;
           case 11:
              time = true;
              return time;
           case 12:
              time = true;
              return time;
           case 13:
              time = true;
              return time;
           case 14:
              time = true;
              return time;
           case 15:
              time = true;
              return time;
           case 16:
              time = true;
              return time;
           case 17:
              time = true;
              return time;
           case 18:
              time = true;
              return time;
           case 19:
              time = true;
              return time;
           case 20:
              time = false;
              return time;
           case 21:
              time = false;
              return time;
           case 22:
              time = false;
              return time;
           case 23:
              time = false;
              return time;
           default:
               console.log("get hours error");
       }
  }

  function geoLocationTest(){
       if('geolocation' in navigator) {
            testBrowser = true;
            console.log(testBrowser);
            return testBrowser;
        
      }else{
            return testBrowser = false;
      }
  }

   function geoLocation(testBrowser){
        if(testBrowser == true) {
            console.log("geolocation is available " +  testBrowser);
            navigator.geolocation.getCurrentPosition(async position =>{
            console.log("latitude: " + position.coords.latitude.toFixed(2));
            lat = position.coords.latitude.toFixed(2);
            console.log("longitude: " +  position.coords.longitude.toFixed(2));
            lon = position.coords.longitude.toFixed(2);
            const api_url = `weather/${lat}/${lon}`;   
            const response = await fetch(api_url);
            const json = await response.json();
            currentTemp = json.current.temp;
            
            weatherPlants(currentTemp);
            console.log(json);
            document.getElementById('temp').textContent = currentTemp;
            let info = json.current.weather[0].description;
            let iconCode = json.current.weather[0].icon;
   //         console.log(console.log(json.current.weather[0].icon));
            displayIcon(iconCode);
            displayDescription(info);
            displayLatLon(lat, lon);
            
        });
        }else{
            console.log("geolocation IS NOT available " + testBrowser);
      }
  }

  function displayLatLon(posLat, posLong){
    document.getElementById('lat').textContent = posLat;
    document.getElementById('lon').textContent = posLong;


  }
  function displayIcon(iconCode){
    // iconImg = loadImage(`http://openweathermap.org/img/w/${iconCode}.png`);
     document.getElementById('icon').src =  `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
     image(image,100, 100);
  }
  function displayDescription(info){
    document.getElementById('description').textContent = info;
  }

  function weatherPlants(current){
      //need healthy or wilty bool for other functions 
      //water bool && functions --> add later**********
      if(current >= hot){
            //too hot (more than 90)
            tempBool = true;
      }else if(current < cold){
            //too cold (less than 15)
            tempBool = true;
      }else{
            //perfect
            tempBool = false;
      }

  }

  function waterGauge(){
 
  }

  function growth_1(){
    image(growth_1_arr[growth_1_index], 110, 325);
    if(growth_1_index < growth_1_arr.length-1){
          growth_1_index += 1;
    }else if (growth_1_index == growth_1_arr.length-1){
        for(let i=0; i < growth_1_arr.length-1; i++){
            if (growth_1_index >= 0){ 
                growth_1_index -= 1;
            }
        }     
    }
}

function growth_1_droop(){
    image(growth_1_droopy_arr[growth_1_droopy_index], 110, 325);
    if(growth_1_droopy_index < growth_1_droopy_arr.length-1){
          growth_1_droopy_index += 1;
    }else if (growth_1_droopy_index == growth_1_droopy_arr.length-1){
        for(let i=0; i < growth_1_droopy_arr.length-1; i++){
            if (growth_1_droopy_index >= 0){ 
                growth_1_droopy_index -= 1;
            }
        }     
    }
}

function growth_2(){
  image(growth_2_arr[growth_2_index], 80, 255);
  if(growth_2_index < growth_2_arr.length-1){
        growth_2_index += 1;
  }else if (growth_2_index == growth_2_arr.length-1){
      for(let i=0; i < growth_2_arr.length-1; i++){
          if (growth_2_index >= 0){ 
              growth_2_index -= 1;
          }
      }     
  }
}

function growth_2_droop(){
    image(growth_2_droopy_arr[growth_2_droopy_index], 80, 255);
    if(growth_2_droopy_index < growth_2_droopy_arr.length-1){
          growth_2_droopy_index += 1;
    }else if (growth_2_droopy_index == growth_2_droopy_arr.length-1){
        for(let i=0; i < growth_2_droopy_arr.length-1; i++){
            if (growth_2_droopy_index >= 0){ 
                growth_2_droopy_index -= 1;
            }
        }     
    }
  }

function growth_3(){
  image(growth_3_arr[growth_3_index], 100, 200);
  if(growth_3_index < growth_3_arr.length-1){
        growth_3_index += 1;
  }else if (growth_3_index == growth_3_arr.length-1){
      for(let i=0; i < growth_3_arr.length-1; i++){
          if (growth_3_index >= 0){ 
              growth_3_index -= 1;
          }
      }     
  }
}

function growth_3_droop(){
    image(growth_3_droopy_arr[growth_3_droopy_index], 100, 200);
    if(growth_3_droopy_index < growth_3_droopy_arr.length-1){
          growth_3_droopy_index += 1;
    }else if (growth_3_droopy_index == growth_3_droopy_arr.length-1){
        for(let i=0; i < growth_3_droopy_arr.length-1; i++){
            if (growth_3_droopy_index >= 0){ 
                growth_3_droopy_index -= 1;
            }
        }     
    }
  }
  
  function growth_4(){
    image(growth_4_arr[growth_4_index], 80, 125);
        if(growth_4_index < growth_4_arr.length-1){
              growth_4_index += 1;
        }else if (growth_4_index == growth_4_arr.length-1){
            for(let i=0; i < growth_4_arr.length-1; i++){
                if (growth_4_index >= 0){ 
                    growth_4_index -= 1;
                }
            }     
        }
  }

  function growth_4_droop(){
   image(growth_4_droopy_arr[growth_4_droopy_index], 80, 125);
   if(growth_4_droopy_index < growth_4_droopy_arr.length-1){
         growth_4_droopy_index += 1;
   }else if (growth_4_droopy_index == growth_4_droopy_arr.length-1){
       for(let i=0; i < growth_4_droopy_arr.length-1; i++){
           if (growth_4_droopy_index >= 0){ 
               growth_4_droopy_index -= 1;
           }
       }     
   }
 }
 

  

