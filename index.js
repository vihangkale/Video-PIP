//check if we are in pip mode

function enterPictureInPicture() {
    let videoElement = document.getElementById("video1");
    if(
        document.pictureInPictureEnabled && 
        !videoElement.disablePictureInPicture) {
            try {
                if (document.pictureInPictureElement) {
                    document.exitPictureInPicture();
                }
                videoElement.requestPictureInPicture();
            } catch(err) {
                console.error(err);
            }
    }
}