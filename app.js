//  Navbar part 1
let src_in = document.querySelector(".src_in");
let src_bar = document.querySelector(".src_bar");
let src_icon = document.querySelector(".src_icon");
let fb_logo = document.querySelector(".fb_logo");
let src_bk_arrow = document.querySelector("#src_bk_arrow");
let part0 = document.querySelector("#part0");
let part1 = document.querySelector(".part1");
// let src_sugg = document.querySelector("#src_sugg");
var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

src_bar.addEventListener("click", () => {
  src_bk_arrow.style.display = "block";
  fb_logo.style.display = "none";
  if(screen.width > 1259){
    src_icon.style.display = "none";
    // src_in.style.width = "248px";
      // src_bar.style.width = "148px";
  }
  src_in.style.display = "block";
  src_in.style.width = "100%";
  src_bar.style.width = "248px";
  part0.style.height = "518px";
  part0.style.width = "320px";
  part0.style.backgroundColorolor = "red";
  part0.style.boxShadow = "1px 8px 10px 1px #00000031";
  part0.style.zIndex = "5";
  

//   part1.style.boxShadow = "2px 0px 8px #00000031";
//   part1.style.zIndex = "1";
//   part1.style.backgroundColor = "#fff";
//   if(screen.width < 1259){
//     src_in.style.display = "none";
//     console.log("active");
//   }
//   else{
//     src_sugg.style.display = "block";
//     part1.style.width = "320px";
//     src_in.style.display = "block";
//     src_in.style.width = "248px";
//   }
});

src_bk_arrow.addEventListener("click", () => {
//   src_sugg.style.display = "none";
  src_icon.style.display = "block";
  fb_logo.style.display = "block";
  src_bk_arrow.style.display = "none";
  src_in.style.width = "210px";
  if(screen.width <1259){
  }
  part0.style.height = "56px";
  part0.style.width = "320px";
  part0.style.boxShadow = "";

//   part1.style.boxShadow = "";
  // src_in.style.width = "210px"; 
//   if(screen.width < 1259){
//     src_bar.style.width = "40px";
//     src_in.style.display = "none";
//     src_in.style.color = "red";
//   }
});

// navbar part 2

let part2 = document.querySelector(".part2");
let home = document.querySelector("#home");
let friends = document.querySelector("#friends");
let video = document.querySelector("#video");
let store = document.querySelector("#store");
let groups = document.querySelector("#groups");
let more = document.querySelector("#more");

function btnBrdrSwitch(obj) {
  // obj.children[2].style.display="none";
  if (obj == groups) {
    groups.children[1].style.border = "2px solid #0866FF";
  } else {
    groups.children[1].style.border = "2px solid #6f747b";
  }
  obj.style.borderBottom = "3px solid #0866FF";
  obj.style.borderColor = "#0866FF";
  obj.style.color = "#0866FF";
  for (let item of part2.children) {
    if (obj != item) {
      item.style.borderBottom = "";
      item.style.color = "#6f747b";
    }
  }
}
home.style.borderBottom = "3px solid #0866FF";
home.style.color = "#0866FF";

home.addEventListener("click", function () {
  btnBrdrSwitch(this, true);
});
friends.addEventListener("click", function () {
  btnBrdrSwitch(this, true);
});
video.addEventListener("click", function () {
  btnBrdrSwitch(this, true);
});
store.addEventListener("click", function () {
  btnBrdrSwitch(this, true);
});
groups.addEventListener("click", function () {
  btnBrdrSwitch(this, true);
});
more.addEventListener("click", function () {
  btnBrdrSwitch(this, true);
});

let part3 = document.querySelector(".part3");
let plus = document.querySelector("#plus");
let menu = document.querySelector("#menu");
let sms = document.querySelector("#sms");
let notifi = document.querySelector("#notifi");
let account = document.querySelector("#account");
let sms_notifi = document.querySelector("#sms_notifi");
let notifi_notifi = document.querySelector("#notifi_notifi");

function btnPart3(obj) {
  obj.children[0].style.color = "#0866FF";
  if (obj == menu) {
    for (item of obj.children[0].children) {
      item.style.backgroundColor = "#0866FF";
    }
  }
  for (let item of part3.children) {
    if (obj != item) {
      item.children[0].style.color = "#000";
    }
    if (obj != menu) {
      for (i of menu.children[0].children) {
        i.style.backgroundColor = "#000";
      }
    }
  }
}
plus.addEventListener("click", function () {
  btnPart3(this, true);
});
menu.addEventListener("click", function () {
  btnPart3(this, true);
});
sms.addEventListener("click", function () {
  btnPart3(this, true);
  sms_notifi.parentElement.style.display = "none";
});
notifi.addEventListener("click", function () {
  btnPart3(this, true);
  notifi_notifi.parentElement.style.display = "none";
});

function notification(obj) {
  let randNum = Math.floor(Math.random() * 12);
  if (randNum > 9) {
    obj.parentElement.style.display = "block";
    obj.innerText = "9+";
  } else if (randNum > 0) {
    obj.parentElement.style.display = "block";
    obj.innerText = `${randNum}`;
  }
}
notification(sms_notifi);
notification(notifi_notifi);




//-----------Manin body part 1
let p4_p1 = document.querySelector(".p4_p1");
let see_more = document.querySelector(".see_more");
