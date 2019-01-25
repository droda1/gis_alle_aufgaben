const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

resizeWindow();

var anim_set = new Set();
const encounter = 10;

window.addEventListener("resize", resizeWindow);
window.addEventListener("mousedown", addToSet, true);
window.addEventListener("touchstart", addToSet, {passive: false, capture: true});

animateObject();

class flyingObject {
    constructor(time, x, y) {
        this.omegaTime = time;
        this.time = time;
        this.x = x;
        this.y = y;
        this.xSpeed = getRandomSpeed();
        this.ySpeed = getRandomSpeed();
        this.radius = 20;
        this.colour = getRandomColour();
    }

    draw(time) {
        const age = time - this.time;
        const relAge = age / encounter;

        if (relAge < 1) {
            this.moveObject();

            ctx.fillStyle = this.colour;
            const fade = (1 - relAge);
            ctx.globalAlpha = fade * fade;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            ctx.fill();
            return true;
        }

        return false;
    }

    moveObject() {
        const time = getTime();
        const age = time - this.omegaTime;

        this.x += this.xSpeed * age;
        this.y += this.ySpeed * age;

        if (this.x < this.radius) {
            this.x = 2 * this.radius - this.x;
            this.xSpeed = getRandomSpeed();
        } else if (this.x > canvas.width - this.radius) {
            this.x = 2 * (canvas.width - this.radius) - this.x;
            this.xSpeed = -getRandomSpeed();
        }

        if (this.y < this.radius) {
            this.y = 2 * this.radius - this.y;
            this.ySpeed = getRandomSpeed();
        } else if (this.y > canvas.height - this.radius) {
            this.y = 2 * (canvas.height - this.radius) - this.y;
            this.ySpeed = -getRandomSpeed();
        }

        this.omegaTime = time;
    }
}

function animateObject() {
    const time = getTime();
    ctx.fillStyle = "#000";
    ctx.globalAlpha = 0.1;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const array = Array.from(anim_set);
    for (let i = 0; i < array.length; i++) {
        const circle = array[i];
        const isAlive = circle.draw(time);

        if (!isAlive) {
            anim_set.delete(circle);
        }
    }

    requestAnimationFrame(animateObject);
}


function addToSet(event) {
    event.preventDefault();
    const time = getTime();
    if (event.type == "touchstart") {
        const touches = event.touches;
        for (let touch of touches) {
            const circle = new flyingObject(time, touch.clientX, touch.clientY);
            anim_set.add(circle);
            //console.log("touch");
        }
    } else if (event.type == "mousedown") {
        const circle = new flyingObject(time, event.clientX, event.clientY);
        anim_set.add(circle);
    }
}

function resizeWindow() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function getRandomSpeed() {
    return 2000 * Math.random();
}
function getRandomColour() {
    var r = Math.floor(255 * Math.random());
    var g = Math.floor(255 * Math.random());
    var b = Math.floor(255 * Math.random());
    return "rgb(" + r + "," + g + "," + b + ")";
}

function getTime() {
    return 0.001 * (new Date().getTime());
}