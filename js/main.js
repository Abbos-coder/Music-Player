let music = document.querySelector(".wrapper audio");
let playMusic = document.getElementById("play");
let playBtn = document.querySelector("i.fa-play");
let counter = 1;
const imgPlay = document.querySelector(".plaer__images");
let currentTimeMusic = document.querySelector(".plaer__current--time");
let durationTime = document.querySelector(".plaer__duration");

playMusic.addEventListener("click", function () {
   if (playBtn.classList.contains("fa-play")) {
      this.classList.replace("fa-play", "fa-pause");
      music.play();
      imgPlay.style.animation = "play 7s linear infinite";
   } else {
      this.classList.replace("fa-pause", "fa-play");
      music.pause();
      imgPlay.style.animation = null;
   }
   setInterval(() => {
      currentTimeMusic.textContent = (music.currentTime / 60).toFixed(2);
		durationTime.textContent = (music.duration / 60).toFixed(2);
		plaerRange.innerHTML = `<input type="range" name="range" id="range" min="0" max="${music.duration}" value="${music.currentTime}">`;
   }, 10);
});

let musicList = [
   (one = {
      index: 1,
      name: "Faydee Karra",
      musicName: "Better Days",
      url: "./audio/Arman_Cekin-Better_Days_(ft._Faydee__Karra).mp3",
      imgUrl: "./img/2.png",
      bgColor: "#ff97b7",
   }),
   (two = {
      index: 2,
      name: "RYVN feat. Kevin Adler",
      musicName: "Happily Sad",
      url:
         "./audio/music_for_youtube]   RYVN feat. Kevin Adler   Happily Sad.mp3",
      imgUrl: "./img/3.png",
      bgColor: "#81b29a",
   }),
   (three = {
      index: 3,
      name: "Криста Янгс feat Julia Ross",
      musicName: "Rest in Paradise",
      url:
         "./audio/Rest_in_Paradise_feat_Криста_Янгс_и_Julia_Ross_32Stitch.m4a",
      imgUrl: "./img/6.png",
      bgColor: "#ffb4a2",
   }),
   (four = {
      index: 4,
      name: "Shine Moore",
      musicName: "Skvor",
      url: "./audio/Shine - Skvor.m4a",
      imgUrl: "./img/4.png",
      bgColor: "#5bc0eb",
   }),
   (five = {
      index: 5,
      name: "Lani Rose",
      musicName: "Damaged",
      url: "./audio/Lani_Rose-Damaged.mp3",
      imgUrl: "./img/6.jpg",
      bgColor: "#bdd5ea",
   }),
   (six = {
      index: 6,
      name: "Jaron A",
      musicName: "Catch",
      url: "./audio/Catch - Jaron.m4a",
      imgUrl: "./img/4.jpg",
      bgColor: "#c1fba4",
   }),
];

let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let link = document.querySelector(".link");

let singerName = document.querySelector(".plaer__title");
let musicName = document.querySelector(".plaer__subtitle");
let plaerImg = document.querySelector(".plaer__img img");

next.addEventListener("click", function () {
   counter++;
   counter == musicList.length + 1 ? (counter = 1) : null;
   console.log(counter);

   for (let i = 0; i < musicList.length; i++) {
      let id = musicList[i].index;
      if (counter == id) {
         music.src = musicList[i].url;
         singerName.textContent = musicList[i].name;
         musicName.textContent = musicList[i].musicName;
         plaerImg.src = musicList[i].imgUrl;
         document.querySelector(".plaer").style.background =
            musicList[i].bgColor;
         document.querySelector(".plaer").style.transition = "ease-in .5s";
      }
   }
   playBtn.classList.replace("fa-pause", "fa-play");
   music.pause();
   imgPlay.style.animation = null;
   document.getElementById("range").value = 0;
});

prev.addEventListener("click", function () {
   counter--;
   counter == 0 ? (counter = musicList.length) : null;
   if (counter == -1) {
      counter = musicList.length;
   }
   console.log(counter);

   for (let i = 0; i < musicList.length; i++) {
      let id = musicList[i].index;
      if (counter == id) {
         music.src = musicList[i].url;
         singerName.textContent = musicList[i].name;
         musicName.textContent = musicList[i].musicName;
         plaerImg.src = musicList[i].imgUrl;
         document.querySelector(".plaer").style.background =
            musicList[i].bgColor;
         document.querySelector(".plaer").style.transition = "ease-in .5s";
      }
   }
   playBtn.classList.replace("fa-pause", "fa-play");
   music.pause();
   imgPlay.style.animation = null;
   document.getElementById("range").value = 0;
});
document.querySelector(".plaer").style.background = "#ff97b7";
document.body.style.background = "#33658a";

const range = (document.getElementById("range").oninput = musicTime);
let plaerRange = document.querySelector(".plaer__range--out");

function musicTime() {
   let rangeValue = this.value;
   music.currentTime = rangeValue;
   setInterval(() => {
     
   }, 500);
}

const loader = document.querySelector('.loader')

setTimeout(() => {
	loader.style.opacity = '0'
	loader.style.visibility = 'hidden'
}, 2500);