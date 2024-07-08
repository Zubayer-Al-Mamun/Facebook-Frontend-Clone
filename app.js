//  Navbar part 1
let src_in = document.querySelector(".src_in");
let src_bar = document.querySelector(".src_bar");
let src_icon = document.querySelector(".src_icon");
let fb_logo = document.querySelector(".fb_logo");
let src_bk_arrow = document.querySelector("#src_bk_arrow");
let part1 = document.querySelector(".part1");
let src_sugg = document.querySelector("#src_sugg");

src_bar.addEventListener("click", () => {
  src_icon.style.display = "none";
  fb_logo.style.display = "none";
  src_bk_arrow.style.display = "block";

  part1.style.width= "320px";
  part1.style.boxShadow = "2px 0px 8px #00000031";
  part1.style.zIndex = "1";
  part1.style.backgroundColor = "#fff";

  src_sugg.style.display = "block";
  src_bar.style.width = "249px";
  src_in.style.display = "block";
  src_in.style.width = "100%";
});

src_bk_arrow.addEventListener("click", ()=>{
  console.log("bk was clicked");
  src_icon.style.display = "block";
  fb_logo.style.display = "block";
  src_bk_arrow.style.display = "none";
  src_bar.style.width = "236px";
  src_sugg.style.display = "none";
  part1.style.boxShadow = "";

})

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

