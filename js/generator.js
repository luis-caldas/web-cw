/*************
 * Generator *
 *************/

'use strict';

/***********
 * Globals *
 ***********/

const morseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
const morseListLenght = morseList.length;

const morseMatrix = [
	".-"    , "-..."  , "-.-."  , "-.."   , "."     ,
	"..-."  , "--."   , "...."  , ".."    , ".---"  ,
	"-.-"   , ".-.."  , "--"    , "-."    , "---"   ,
	".--."  , "--.-"  , ".-."   , "..."   , "-"     ,
	"..-"   , "...-"  , ".--"   , "-..-"  , "-.--"  ,
	"--.."  ,
	".----" , "..---" , "...--" , "....-" , "....." ,
	"-...." , "--..." , "---.." , "----." , "-----"
];

const morseBt = "-...-";

const betweenCharsDit = 3;

function generateRandom(sizeString) {

	// initiate vars
	let outputString = [];

	// iterate n times and generate string
	for (let i = 0; i < sizeString; ++i) {
		let randomIndex = Math.floor(Math.random() * morseListLenght);
		let chosenChar = morseList.charAt(randomIndex);
		outputString.push(chosenChar); 
	}

	// return the string output
	return outputString;

}

function groupCharList(groupSize, rowSize, charList) {

	// calculate list lenght
	let charListLength = charList.length;

	// set html linebreak and spacer
	let breaker = "<br>";
	let spacer = "&nbsp;";

	// create output string beforehand
	let outputString = "";

	// iterate the list and generate a new string
	// with the right sizes
	for (let i = 0; i < charListLength; ++i) {

		// add char to the list
		outputString += charList[i];

		// identify if we should break line
		if (i != (charListLength - 1)) {
			if ((i != 0) && ((i + 1) % groupSize == 0))
				outputString += breaker;
			else
				outputString += spacer;
			if ((i != 0) && (((i + 1) / groupSize) % rowSize == 0))
				outputString += breaker;
		}

	}

	// return the organized list
	return outputString;

}
