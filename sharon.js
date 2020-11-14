let images = ["1.jpg",
"2.jpg",
"3.jpg",
"4.jpg",
"5.jpg",
]
let images2 = ["1.jpg",
"2.jpg",
"3.jpg",
"4.jpg",
"5.jpg",
]
let images3 = ["1.jpg",
"2.jpg",
"3.jpg",
"4.jpg",
"5.jpg",
]
let images4 = ["1.jpg",
"2.jpg",
"3.jpg",
"4.jpg",
"5.jpg",
]

let topL = $("#topLeft");
let topR = $("#topRight");
let bottomL = $("#bottomLeft");
let bottomR = $("#bottomRight");

function shuffle() {


    let arrayOfImgs = "url(" + images[Math.floor(Math.random() * images.length)] + ")"
    topL.css("background-image", arrayOfImgs);
    console.log('box1');
}

function shuffle2() {

    let arrayOfImgs2 = "url(" + images2[Math.floor(Math.random() * images2.length)] + ")"

    topR.css("background-image", arrayOfImgs2);
    console.log('box2');
}

function shuffle3() {

    let arrayOfImgs3 = "url(" + images3[Math.floor(Math.random() * images3.length)] + ")"

    bottomL.css("background-image", arrayOfImgs3);
    console.log('box3');
}

function shuffle4() {

    let arrayOfImgs4 = "url(" + images4[Math.floor(Math.random() * images4.length)] + ")"

    bottomR.css("background-image", arrayOfImgs4);
    console.log('box4');
}
