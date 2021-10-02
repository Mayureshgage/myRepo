//object mosh
// const circle = {
//     radius : 1,
//     location : {
//         x: 1,
//         y: 2
//     },
//     draw: function() {
//         console.log('draw');
//     }
// };

// circle.draw();

//factory function

function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw');
        }

    };
}

const circle = createCircle(2);
//circle.draw();

//constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }

}

const another = new Circle(1);