const prompt = require('prompt-sync')({sigint: true});


let yellow = "yellow";
yellow = yellow.toLowerCase();
let blue = "blue";
blue = blue.toLowerCase();
let red = "red";
red = red.toLowerCase();
let purple = "blue + red";
let orange = "red + yellow";
let green = "yellow + blue";
let prompt1 = String(prompt("Pick a colors or two color combinations from the color wheel: "));
prompt1 = prompt1.toLowerCase();


if(prompt1.includes('blue') && prompt1.includes('red'))
{
    console.log("purple");

} else if(prompt1.includes('blue') && prompt1.includes('yellow'))
{
    console.log("green");
} else if (prompt1.includes('yellow') && prompt1.includes('red'))
{
    console.log("orange");
} else if (prompt1 === "purple")
{
    console.log(purple);
} else if (prompt1 === 'orange')
{
    console.log(orange)
} else if (prompt1 === 'green')
  {
    console.log(green)
  } else {console.log("error")} 
