// charAt
let chars = "ReturnsTheCharacter"
let charsInit = chars.charAt(3);
document.getElementById("CHARAT").innerHTML = charsInit

// charCodeAt

let charCodeAts = "returnTheUnicodeOfstring"
let charCodeAtInit = charCodeAts.charCodeAt(0);
document.getElementById("CHARCODEAT").innerHTML = charCodeAtInit

// codePointAt
let codePointsAtValues = "returnsSpecificPosition"
let codePointsAtInit = codePointsAtValues.codePointAt(2);
document.getElementById("CODEPOINTAT").innerHTML = codePointsAtInit

// concat
let Concat1 = "joinsTwo"
let Concat2 ="ARRAY"
let ConcatR = Concat1.concat(Concat2)

document.getElementById("CONCAT").innerHTML = ConcatR

// endWith

let eW = "checkIfEndsWithString"
let eWR = eW.endsWith("String")

document.getElementById("ENDSWITH").innerHTML = eWR

// fromCharCode
let fCC=  String.fromCharCode(65)
document.getElementById("FCC").innerHTML =fCC;

// includes
let Iv = "returns true if a string contains specific string"
let IR = Iv.includes("truess")

document.getElementById("I").innerHTML = IR

// indexOf
let IO = "ReturnsThePositionOfTheFirstOccurenceOfAValueInAString"
let ioR = IO.indexOf("Returns")
document.getElementById("IO").innerHTML = ioR