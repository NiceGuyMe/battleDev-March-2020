const prompt = require('prompt-sync')();
let score = {}

let number_of_interviewees = 1
// function to add the colors and their number of votes in the score object
function AddColor() {
    while (true) {
        let newcolor = prompt("enter a color: ");
        if (!score[newcolor]) {
            score[newcolor] = 1;
        } else
            score[newcolor]++;
        let choice = +prompt("want to grab another color ? (yes=1/no=2)")
        if (choice == 1) {
            number_of_interviewees += 1
        } else {
            break;
        }
    }
    return score;
}
// function which displays the result

function Show() {
    // transform the object into an array
    let newtab = Object.entries(score);
    // put the votes in ascending order
    newtab.sort((a, b) => a[1] - b[1])
    // take the last two values ​​of the array
    let FirstColor = newtab.pop();
    let SecondColor = newtab.pop();
    console.log("-----------------------------------------------------------------------------------------------------------------");
    console.log(`the number of people interviewed is ${number_of_interviewees}`);
    console.log("-----------------------------------------------------------------------------------------------------------------");
    console.log("the distribution of colors is:");
    console.log(score);
    console.log("-----------------------------------------------------------------------------------------------------------------");
    console.log(`The color that has the most votes is: ${FirstColor[0]} with a total number of votes of: ${FirstColor[1]}`);
    console.log("-----------------------------------------------------------------------------------------------------------------");
    console.log(`The other color that has the most votes is: ${SecondColor[0]} with a total number of votes of : ${SecondColor[1]}`);
    console.log("------------------------------------------------------------------------------------------------------------------");
}
AddColor()
Show()
