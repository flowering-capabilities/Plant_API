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
let time;
let lat;
let lon;
let testBrowser;
let currentTemp;
let hot = 90;
let cold = 15;
let tempBool;
//water bool == true if too much
//true water bool trumps temp bool 
let waterBool;
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
  
  
}  

function setup() {
  windowW = windowWidth/2;
  windowH = windowHeight/2;
   createCanvas(800, 800);
   frameRate(5);
   growth_1_arr = [growth_1_01, growth_1_01, growth_1_01, growth_1_02, growth_1_02, growth_1_02, growth_1_03, growth_1_03, growth_1_03, growth_1_04, growth_1_04, growth_1_04, growth_1_05, growth_1_05, growth_1_05, growth_1_06, growth_1_06, growth_1_06, growth_1_07, growth_1_07, growth_1_07, growth_1_08, growth_1_08, growth_1_08, growth_1_09, growth_1_09, growth_1_09, growth_1_10, growth_1_10, growth_1_10, growth_1_11, growth_1_11, growth_1_11, growth_1_12, growth_1_12, growth_1_12, growth_1_13,  growth_1_13, growth_1_13, growth_1_14, growth_1_14, growth_1_14, growth_1_15, growth_1_15, growth_1_15, growth_1_16, growth_1_16, growth_1_16, growth_1_17, growth_1_17, growth_1_17,growth_1_18, growth_1_18, growth_1_18,growth_1_19, growth_1_19, growth_1_19,growth_1_20, growth_1_20, growth_1_20, growth_1_01, growth_1_01, growth_1_01];
   growth_1_droopy_arr = [growth_1_droopy_01, growth_1_droopy_01, growth_1_droopy_01, growth_1_droopy_02, growth_1_droopy_02, growth_1_droopy_02, growth_1_droopy_03, growth_1_droopy_03, growth_1_droopy_03, growth_1_droopy_04, growth_1_droopy_04, growth_1_droopy_04, growth_1_droopy_05, growth_1_droopy_05, growth_1_droopy_05, growth_1_droopy_06, growth_1_droopy_06, growth_1_droopy_06, growth_1_droopy_07, growth_1_droopy_07, growth_1_droopy_07, growth_1_droopy_08, growth_1_droopy_08, growth_1_droopy_08, growth_1_droopy_09, growth_1_droopy_09, growth_1_droopy_09, growth_1_droopy_10, growth_1_droopy_10, growth_1_droopy_10, growth_1_droopy_11, growth_1_droopy_11, growth_1_droopy_11, growth_1_droopy_12, growth_1_droopy_12, growth_1_droopy_12, growth_1_droopy_13,  growth_1_droopy_13, growth_1_droopy_13, growth_1_droopy_14, growth_1_droopy_14, growth_1_droopy_14, growth_1_droopy_15, growth_1_droopy_15, growth_1_droopy_15, growth_1_droopy_16, growth_1_droopy_16, growth_1_droopy_16, growth_1_droopy_17, growth_1_droopy_17, growth_1_droopy_17,growth_1_droopy_18, growth_1_droopy_18, growth_1_droopy_18,growth_1_droopy_19, growth_1_droopy_19, growth_1_droopy_19,growth_1_droopy_20, growth_1_droopy_20, growth_1_droopy_20,growth_1_droopy_21, growth_1_droopy_21, growth_1_droopy_21, growth_1_droopy_01, growth_1_droopy_01, growth_1_droopy_01];
   growth_2_arr = [growth_2_01, growth_2_01, growth_2_01, growth_2_02, growth_2_02, growth_2_02, growth_2_02, growth_2_03, growth_2_03, growth_2_03, growth_2_03, growth_2_04, growth_2_04, growth_2_04, growth_2_04, growth_2_05, growth_2_05, growth_2_05, growth_2_05, growth_2_06, growth_2_06, growth_2_06, growth_2_06, growth_2_07, growth_2_07, growth_2_07, growth_2_07, growth_2_08, growth_2_08, growth_2_08,  growth_2_08, growth_2_09, growth_2_09, growth_2_09,  growth_2_09, growth_2_10, growth_2_10, growth_2_10,  growth_2_10, growth_2_11, growth_2_11, growth_2_11, growth_2_11, growth_2_12, growth_2_12, growth_2_12,  growth_2_12, growth_2_13,  growth_2_13, growth_2_13,  growth_2_13, growth_2_14, growth_2_14, growth_2_14,  growth_2_14, growth_2_15, growth_2_15, growth_2_15, growth_2_15, growth_2_16,  growth_2_16, growth_2_16, growth_2_16, growth_2_17, growth_2_17, growth_2_17, growth_2_17,growth_2_18, growth_2_18, growth_2_18, growth_2_18,growth_2_19, growth_2_19,  growth_2_19, growth_2_19];
   growth_2_droopy_arr = [growth_2_droopy_01, growth_2_droopy_01, growth_2_droopy_01, growth_2_droopy_02, growth_2_droopy_02, growth_2_droopy_02, growth_2_droopy_02, growth_2_droopy_03, growth_2_droopy_03, growth_2_droopy_03, growth_2_droopy_03, growth_2_droopy_04, growth_2_droopy_04, growth_2_droopy_04, growth_2_droopy_04, growth_2_droopy_05, growth_2_droopy_05, growth_2_droopy_05, growth_2_droopy_05, growth_2_droopy_06, growth_2_droopy_06, growth_2_droopy_06, growth_2_droopy_06, growth_2_droopy_07, growth_2_droopy_07, growth_2_droopy_07, growth_2_droopy_07, growth_2_droopy_08, growth_2_droopy_08, growth_2_droopy_08,  growth_2_droopy_08, growth_2_droopy_09, growth_2_droopy_09, growth_2_droopy_09,  growth_2_droopy_09, growth_2_droopy_10, growth_2_droopy_10, growth_2_droopy_10,  growth_2_droopy_10, growth_2_droopy_11, growth_2_droopy_11, growth_2_droopy_11, growth_2_droopy_11, growth_2_droopy_12, growth_2_droopy_12, growth_2_droopy_12,  growth_2_droopy_12, growth_2_droopy_13,  growth_2_droopy_13, growth_2_droopy_13,  growth_2_droopy_13, growth_2_droopy_14, growth_2_droopy_14, growth_2_droopy_14,  growth_2_droopy_14, growth_2_droopy_15, growth_2_droopy_15, growth_2_droopy_15, growth_2_droopy_15, growth_2_droopy_16,  growth_2_droopy_16, growth_2_droopy_16, growth_2_droopy_16, growth_2_droopy_17, growth_2_droopy_17, growth_2_droopy_17, growth_2_droopy_17,growth_2_droopy_18, growth_2_droopy_18, growth_2_droopy_18, growth_2_droopy_18,growth_2_droopy_19, growth_2_droopy_19,  growth_2_droopy_19, growth_2_droopy_19];
   growth_3_arr = [growth_3_02, growth_3_02, growth_3_02,growth_3_03, growth_3_03, growth_3_03,growth_3_04, growth_3_04, growth_3_04, growth_3_05, growth_3_05, growth_3_05, growth_3_06, growth_3_06, growth_3_06,growth_3_07, growth_3_07, growth_3_07, growth_3_08, growth_3_08,  growth_3_08,growth_3_09, growth_3_09,  growth_3_09,growth_3_10, growth_3_10,  growth_3_10, growth_3_11, growth_3_11, growth_3_11,growth_3_12, growth_3_12,  growth_3_12, growth_3_13, growth_3_13,  growth_3_13, growth_3_14, growth_3_14, growth_3_14, growth_3_15, growth_3_15, growth_3_15, growth_3_16,  growth_3_16,  growth_3_16, growth_3_17, growth_3_17, growth_3_17, growth_3_18, growth_3_18, growth_3_18,growth_3_19,  growth_3_19, growth_3_19,growth_3_20, growth_3_20,  growth_3_20, growth_3_21,  growth_3_21, growth_3_21];
   growth_3_droopy_arr = [growth_3_droopy_02, growth_3_droopy_02, growth_3_droopy_02,growth_3_droopy_03, growth_3_droopy_03, growth_3_droopy_03,growth_3_droopy_04, growth_3_droopy_04, growth_3_droopy_04, growth_3_droopy_05, growth_3_droopy_05, growth_3_droopy_05, growth_3_droopy_06, growth_3_droopy_06, growth_3_droopy_06,growth_3_droopy_07, growth_3_droopy_07, growth_3_droopy_07, growth_3_droopy_08, growth_3_droopy_08,  growth_3_droopy_08,growth_3_droopy_09, growth_3_droopy_09,  growth_3_droopy_09,growth_3_droopy_10, growth_3_droopy_10,  growth_3_droopy_10, growth_3_droopy_11, growth_3_droopy_11, growth_3_droopy_11,growth_3_droopy_12, growth_3_droopy_12,  growth_3_droopy_12, growth_3_droopy_13, growth_3_droopy_13,  growth_3_droopy_13, growth_3_droopy_14, growth_3_droopy_14, growth_3_droopy_14, growth_3_droopy_15, growth_3_droopy_15, growth_3_droopy_15, growth_3_droopy_16,  growth_3_droopy_16,  growth_3_droopy_16, growth_3_droopy_17, growth_3_droopy_17, growth_3_droopy_17, growth_3_droopy_18, growth_3_droopy_18, growth_3_droopy_18,growth_3_droopy_19,  growth_3_droopy_19, growth_3_droopy_19,growth_3_droopy_20, growth_3_droopy_20,  growth_3_droopy_20, growth_3_droopy_21,  growth_3_droopy_21, growth_3_droopy_21, growth_3_droopy_22,  growth_3_droopy_22, growth_3_droopy_22];
   growth_4_arr = [growth_4_01, growth_4_01, growth_4_01, growth_4_02, growth_4_02, growth_4_02, growth_4_03, growth_4_03, growth_4_03, growth_4_04, growth_4_04, growth_4_04, growth_4_05, growth_4_05, growth_4_05, growth_4_06, growth_4_06, growth_4_06, growth_4_07, growth_4_07, growth_4_07, growth_4_08, growth_4_08, growth_4_08, growth_4_09, growth_4_09, growth_4_09, growth_4_10, growth_4_10, growth_4_10, growth_4_11, growth_4_11, growth_4_11, growth_4_12, growth_4_12, growth_4_12, growth_4_13,  growth_4_13, growth_4_13, growth_4_14, growth_4_14, growth_4_14, growth_4_15, growth_4_15, growth_4_15, growth_4_01, growth_4_01, growth_4_01];
}
geoLocationTest();
geoLocation(testBrowser);
createDate = new Date();
timeData = createDate.getHours();
console.log(timeData);
getTime(timeData);
function draw() {
    clear();
   
    if(time == true){
        //day
        background('#B0E0E6');
    }else{
        //night
        background('#222222');
    }
    /* growth_1();
     growth_2();
     growth_3();
     growth_4();*/
     growth_1_droop();
     growth_2_droop();
     growth_3_droop();
     //console.log(mouseX);
    // waterGauge();
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
              time = false;
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
        });
        }else{
            console.log("geolocation IS NOT available " + testBrowser);
      }
  }


  function weatherPlants(current){
      //too hot (more than 90)
     
      //too cold (less than 15)

      //perfect else

      //need healthy or wilty bool for other functions 
      //water bool && functions --> add later**********
      if(current >= hot){
            tempBool = true;
      }else if(current < cold){
            tempBool = true;
      }else{
            tempBool = false;
      }

  }

  function waterGauge(){
      let c = color('#1cb2f5');
      fill(c);
      rect(600, 30, 100, 300, 10);
  }

  function growth_1(){
    image(growth_1_arr[growth_1_index], 130, 180);
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
    image(growth_1_droopy_arr[growth_1_droopy_index], 130, 180);
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
  image(growth_2_arr[growth_2_index], 200, 200);
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
    image(growth_2_droopy_arr[growth_2_droopy_index], 200, 200);
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
  image(growth_3_arr[growth_3_index], 300, 300);
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
    image(growth_3_droopy_arr[growth_3_droopy_index], 300, 300);
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
    image(growth_4_arr[growth_4_index], 400, 400);
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
 

  

