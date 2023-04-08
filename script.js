var i = 0;
var images = ['https://picsum.photos/id/237/500/300', 'https://picsum.photos/seed/picsum/500/300', 'https://picsum.photos/500/300?grayscale'

];

var duration = 2000;

function slideImg() {
    document.slide.src = images[i];
    if( i < images.length -1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("slideImg()", duration);
}

window.onload = slideImg;
