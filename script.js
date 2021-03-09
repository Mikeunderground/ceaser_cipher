// generate random number to .shift()
let rando = Math.floor(Math.random() * 10);
console.log("random number is: " + rando);

// prompt for string to be cipher'd
let chars = " ";
let message = prompt("Input a message you would like encoded.");
message = message.toLowerCase();
console.log(message);
let encryptedMessage = " ";


// construct array of aphabet 
let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// loop through message to put all chars in to array
for (var i = 0; i < message.length; i++){
    // Goes through each letter of a string 
    console.log(message[i]);
    
    // find each letter in alphabet array
    //console.log(alphabet.indexOf(message[i]));
    chars = alphabet.indexOf(message[i]);
    console.log(chars);
    // seems to just take the index numbers and add them together

    // for loop add rando to each numbers index

    // create bring in encryptedMessage Variable and push new message there

    // break string down in to single chars and put in to an array

    
};


// .indexOf() each char and + along the array index with .shift()
// for (var i = 0; i < chars.length; i++){
//     let position = alphabet.indexOf(i)
//     let newPosition = position + rando;
//     let pulledLettter = alphabet[newPosition];
//     encryptedMessage.append(pulledLetter);
// }

// recombine string


// output string
