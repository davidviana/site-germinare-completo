function openVideo() {
    var video = document.getElementById("video");
    var imgvideo = document.getElementById("imgvideo");

    if (video.style.display !== "block") {
        video.style.display = "block";
        imgvideo.style.display = "none";
    } else {
        video.style.display = "none";
        imgvideo.style.display = "block";
    }
}