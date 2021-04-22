// video  show and hide script-------------
// function toggle() {
//     var trailer = document.querySelector('.trailer');
//     var video = document.querySelector('video');
//     trailer.classList.toggle('active');
// }



// video show and hide script------------
const play = document.querySelector(".play");
const trailer = document.querySelector(".trailer");
const close = document.querySelector(".close");
const video = document.querySelector("video");
play.addEventListener("click", function () {
  trailer.classList.add("active");
});
close.addEventListener("click", function () {
  trailer.classList.remove("active");
  video.currentTime = 0;
  video.pause();
});


// cursor script-----------------
const cursor = document.querySelector('.cursor');
cursor.addEventListener('mousemove', function (e) {
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
})
