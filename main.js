const prompt = require('prompt-sync')({sigint: true});

let userPrompt = String(prompt("Would you like to deconstruct or construct a color: "));

userPrompt = userPrompt.toLowerCase();

if (userPrompt === "deconstruct")
{
    let prompt1 = String(prompt("Purple, Orange, or Green? "));

    if (prompt1 === "purple")
    {
        console.log("red + blue");

    } else if (prompt1 ==="orange")
    {
        console.log("red + yellow");

    } else if (prompt1 === "green") 
    {
        console.log("yellow + blue");

    } else {console.log("error")}

} else if (userPrompt === "construct")

{
    let prompt2 = String(prompt("Please enter your first color (red, blue, yellow): "));
    let prompt3 = String(prompt("Please enter your second color(red, blue, yellow): "));
    prompt2 = prompt2.toLowerCase();
    prompt3 = prompt3.toLowerCase();

    if (prompt2 === "red" && prompt3 === "blue")
    {
        console.log("purple");

    } else if (prompt2 === "blue" && prompt3 === "red")
     {
        console.log("purple");

     } else if (prompt2 === "yellow" && prompt3 === "blue")
     {
        console.log("green");

     } else if (prompt2 === "blue" && prompt3 === "yellow")
     {
        console.log("green");
     } else if (prompt2 === "red" && prompt3 === "yellow")
     {
        console.log("orange");
     } else if (prompt2 === "yellow" && prompt3 === "red" )
     {
        console.log("orange");
     }

}

 else {console.log("error");}
