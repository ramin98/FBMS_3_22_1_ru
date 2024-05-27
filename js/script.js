// // script.js
// // document.addEventListener('DOMContentLoaded', (event) => {
const video = document.getElementById('video');

window.addEventListener('load', () =>{
    video.play()

})
// const playPauseButton = document.getElementById('play-pause');
// const rewindButton = document.getElementById('rewind');
// const forwardButton = document.getElementById('forward');
// const durationDisplay = document.getElementById('duration');
// let x;

// let timer
// let duration
// video.addEventListener('loadedmetadata', () => {
//     duration = Math.floor(video.duration)
//     // console.log(duration)
//     const minutes = Math.floor(duration / 60);
//     const seconds = Math.floor(duration % 60);
//     durationDisplay.textContent = `Duration: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
// });

// video.addEventListener("playing", (event) => {
//     // console.log("Video is no longer paused");
//     voice.style = `width: ${video.currentTime / 6}%;`;
//     const minutes = Math.floor(video.currentTime / 60);
//     const seconds = Math.floor(video.currentTime % 60);
//     text.textContent = `Duration: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//     // console.log(video.currentTime)  
// });

// video.addEventListener("seeking", (event) => {
//     console.log("Video is seeking a new position.");
//   });

// function automateRange() {
    
//     // timer = setInterval(() => {
//     //     // video.currentTime = x / 600 * Math.floor(duration)
//     //     voice.style = `width: ${video.currentTime / 6}%;`;
//     //     const minutes = Math.floor(video.currentTime / 60);
//     //     const seconds = Math.floor(video.currentTime % 60);
//     //     text.textContent = `Duration: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//     //     console.log(video.currentTime)
//     // }, 1000)

// }

// video.addEventListener("progress", () => {
//     console.log('progress')
// });


// playPauseButton.addEventListener('click', () => {
//     if (video.paused || video.ended) {
//         video.play();
//         automateRange()
//         playPauseButton.textContent = 'Pause';
//     } else {
//         clearInterval(timer)
//         video.pause();
//         playPauseButton.textContent = 'Play';
//     }
// });

// rewindButton.addEventListener('click', () => {
//     video.currentTime -= 10; // Rewind 10 seconds
// });

// forwardButton.addEventListener('click', () => {
//     video.currentTime += 10; // Forward 10 seconds
// });

// video.addEventListener('ended', () => {
//     playPauseButton.textContent = 'Play';
// });



// let voiceContainer = document.querySelector("#videoRangeContainer");
// let voice = document.querySelector("#videoRange");
// let text = document.querySelector("#text");

// function rangeHandler() {
//     voiceContainer.addEventListener("mousemove", rangeHandlerMove);
// }

// function rangeHandlerMove(ev) {
//     x = ev.offsetX;
//     video.currentTime = x / 600 * duration
//     voice.style = `width: ${x / 6}%;`;
//     const minutes = Math.floor(video.currentTime / 60);
//     const seconds = Math.floor(video.currentTime % 60);
//     text.textContent = `Duration: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//     // if (x >= duration) {
//     //     x = duration
//     // }
//     // console.log(duration)
// }

// function rangeHandlerRemove() {
//     voiceContainer.removeEventListener('mousemove', rangeHandlerMove)
//     automateRange()
// }

// voiceContainer.addEventListener("mousedown", () => {
//     rangeHandler()
//     automateRange()
//     video.play()
// });

// voiceContainer.addEventListener("mouseup", rangeHandlerRemove);
