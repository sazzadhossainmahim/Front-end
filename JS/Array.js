// concat
const arr1 = ["concat", "two"];
const arr2 = ["array"];
const children = arr1.concat(arr2);
document.getElementById("concat").innerHTML = children;

// constructor
const constructorElement = ["banana", "apple"]
let constructorResult = constructorElement.constructor
document.getElementById("constructor").innerHTML = constructorResult

// copywithin
const cwi = ["copics", "array", "toanotherPosition"]
document.getElementById("cwi").innerHTML = cwi.copyWithin(2, 0);


// entries

const e = ["entries", "returns", "Array", "object", "with", "key"]

const er = e.entries();
for (let el of er) {
    document.getElementById("e").innerHTML += el + " <br>"
}

// every
const Every = [32, 33, 16, 40]
document.getElementById("Every").innerHTML = Every.every(everyResult)

function everyResult(Every) {
    return Every > 18
}

// Fill
const f = ["fills", "specified", "elements"]
document.getElementById("f").innerHTML = f.fill("in Array")

// Filter

const Filter = [12, 13, 14];
document.getElementById("Filters").innerHTML =
    Filter.filter(FilterCheck)

function FilterCheck(Filter) {
    return Filter;
}

// Find 
const Finds = [3, 4, 5, 6, 70];
document.getElementById("Find").innerHTML = Finds.find(FindFunction)

function FindFunction(FindCheck) {
    return FindCheck > 11;
}
// FindIndex

const FindIndexs = [3, 10, 23, 22]
document.getElementById("FindIndex").innerHTML = FindIndexs.findIndex(FindIndexFunction)
function FindIndexFunction(FindIndexChecks) {
    return FindIndexChecks > 18;
}

// ForEach
let ForEach = "";
const ForEachItems = ["callsAFunction", "EachElementOf Array"];
ForEachItems.forEach(ForEachFunction);

document.getElementById("ForEachCall").innerHTML = ForEach;

function ForEachFunction(ForEachCalls, index) {
    ForEach += index + ":" + ForEachCalls + "<br>"
}


// From
let Froms = "ABCDEFG"
const FromArray = Array.from(Froms)
document.getElementById("FROM").innerHTML = FromArray;


// Includes
const Includes = ["pen", "ball"];
document.getElementById("INCLUDES").innerHTML = Includes.includes("pen")
// IndexOf
const IndexOff = ["pen", "ball", "cat"]
let IndexOffInit = IndexOff.indexOf("cat");
document.getElementById("INDEXOFF").innerHTML = IndexOffInit;

// isArray
const IsArray = ["cat", "Ball"];
let IsArrayInit = Array.isArray(IsArray)
document.getElementById("ISARRAY").innerHTML = IsArrayInit

// join
const Join = ["joinA", "joinB"]
let JoinInit = Join.join();
document.getElementById("JOIN").innerHTML = Join;

// keys
const Keys = ["ball", "apple", "pen"]
const KeysInit = Keys.keys();
let KeysText = "";
for (let x of KeysInit) {
    KeysText += x + "<br>"
}
document.getElementById("KEYS").innerHTML = KeysText;

// lastIndexOf
const LastIndexOf = ["apple", "Orange", "cat"]
let LastIndexOfIndex = LastIndexOf.lastIndexOf("apple")
document.getElementById("LASTINDEXOF").innerHTML = LastIndexOfIndex

// Length
const Length = ["pen", "ball"];
let Lengths = Length.length;
document.getElementById("LENGTH").innerHTML = Lengths;

// map

const Map = [3, 4, 5, 6]
const Maps = Map.map(MapFunction)
document.getElementById("MAP").innerHTML = Maps;
function MapFunction(MapsPeraMeter) {
    return MapsPeraMeter * 10
}

// pop
const Pop = ["Remove", "pop"]
Pop.pop();
document.getElementById("POP").innerHTML = Pop;

//  prototype

Array.prototype.PrototypeCase = function () {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase();
    }
};

const Prototype = ["add", "new", "properties", "to Array"]
Prototype.PrototypeCase();
document.getElementById("PROTOTYPE").innerHTML = Prototype;

// push
const Pushs = ["Add", "new", "item", "to"]
Pushs.push("array")
document.getElementById("PUSH").innerHTML = Pushs;

// reduce
const Reduces = [40, 3, 2]
document.getElementById("REDUCE").innerHTML = Reduces.reduce(ReduceFunction)

function ReduceFunction(total, num) {
    return total - num;
}

// reduceRight
const ReduceRight = [175, 50, 25]
document.getElementById("REDUCERIGHT").innerHTML = ReduceRight.reduceRight(ReduceRightFunction)
function ReduceRightFunction(sum, input) {
    sum - input;
}

// reverse
const Reverse = ["reverses", "order ", "element"]
document.getElementById("REVERSE").innerHTML = Reverse.reverse()

// shift
const Shift = ["removers", "first", "item"]
Shift.shift();

document.getElementById("SHIFT").innerHTML = Shift;

// slice
const Slice = ["returns", "selected", "array"]
const Slices = Slice.slice(1, 2)
document.getElementById("SLICE").innerHTML = Slices

// some
const Somes = [3, 10, 18, 20]
document.getElementById("SOME").innerHTML =
    Somes.some(SomeFunction)

function SomeFunction(SomePera) {
    return SomePera > 12
}

// sort 
const Sorts = ["sort", "element"]
document.getElementById("SORT").innerHTML = Sorts.sort();

// splice

const Splices = ["adds", "array", "Elements"]
Splices.splice(2, 0, "adds")
document.getElementById("SPLICE").innerHTML = Slices

// toString
const ToStrings = ["ReturnsAStringWithAllArrayValueSeparatedByCommas"]
let ToStringsValue = ToStrings.toString()
document.getElementById("TOSTRING").innerHTML = ToStringsValue


// unshift
const UnShift = ["AddNewItems", "ToTheBegeningOfArray"]
UnShift.unshift("Array")
document.getElementById("UNSHIFT").innerHTML = UnShift;

// valueoff
const ValueOff = ["returnsTheArray", "Itself"]
const ValueOffs = ValueOff.valueOf();
document.getElementById("VALUEOFF").innerHTML = ValueOffs



function ArrayOnClick() {
    var ClickX = document.getElementById("ARRAY")
    if (ClickX.style.display === "none") {
        ClickX.style.display = "block"
    }
    else {
        ClickX.style.display = "none"
    }
}