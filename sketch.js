//
// 1setup enviorment
// 2translate to the middle-bottom and draw a verticle line

let len;
let angle=0;
let slider;

function setup() {
    createCanvas(400, 400);
    len = 100;
    slider=createSlider(0,TWO_PI,PI/3,0.01);
}

function draw() {
    background(0);
    translate(width / 2, height);
    angle=slider.value();
    branch(len);
}

function branch(len) {
    // 3repalce draw a verticle line as a function branch and call it
// (1)translate to the end of the line
// (2)rotate an angle to left and draw the line
// (3)rotate an angle to right and draw the line
// (4)surround (2)(3) with push and pop matrix
// (5)reduce the len of next branch
// (6)if len >num then call branch recursively
    stroke(255);
    line(0, 0, 0, -len);
    translate(0, -len);
    len *= 0.6;
    push();
    rotate(angle);
    line(0, 0, 0, -len);
    if (len > 2) {
        branch(len);
    }
    pop();
    push();

    rotate(-angle);
    line(0, 0, 0, -len);
    if (len > 2) {
        branch(len);
    }
    pop();


}




