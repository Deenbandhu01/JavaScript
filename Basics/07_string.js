const firstname = "deen"
const lastname = "bandhu"
const age = 20

//console.log(firstname +lastname);

console.log(`Hello my name is ${firstname} and my age is ${age}`);

/*
[[Prototype]]:String
anchor: ƒ anchor()
at:  ƒ at()
big: ƒ big()
blink: ƒ blink()
bold: ƒ bold()
charAt: ƒ charAt()
charCodeAt: ƒ charCodeAt()
codePointAt: ƒ codePointAt()
concat: ƒ concat()
constructor: ƒ String()
endsWith: ƒ endsWith()
fixed: ƒ fixed()
fontcolo: ƒ fontcolor()
fontsize: ƒ fontsize()
includes: ƒ includes()
indexOf: ƒ indexOf()
isWellFormed: ƒ isWellFormed()
italics: ƒ italics()
lastIndexOf: ƒ lastIndexOf()
link: ƒ link()
localeCompare: ƒ localeCompare()
match: ƒ match()
matchAll: ƒ matchAll()
normalize: ƒ normalize()
padEnd: ƒ padEnd()
padStart: ƒ padStart()
repeat: ƒ repeat()
replace: ƒ replace()
replaceAll: ƒ replaceAll()
search: ƒ search()
slice: ƒ slice()
small: ƒ small()
split: ƒ split()
startsWith: ƒ startsWith()
strike: ƒ strike()
sub: ƒ sub()
substr: ƒ substr()
substring: ƒ substring()
sup: ƒ sup()
toLocaleLowerCase: ƒ toLocaleLowerCase()
toLocaleUpperCase: ƒ toLocaleUpperCase()
toLowerCase: ƒ toLowerCase()
toString: ƒ toString()
toUpperCase: ƒ toUpperCase()
toWellFormed: ƒ toWellFormed()
trim: ƒ trim()
trimEnd: ƒ trimEnd()
trimLeft: ƒ trimStart()
trimRight: ƒ trimEnd()
trimStart: ƒ trimStart()
valueOf: ƒ valueOf()
Symbol(Symbol.iterator): ƒ [Symbol.iterator]()
[[Prototype]]: Object
[[PrimitiveValue]]: ""
[[PrimitiveValue]]: "hello"
*/

const gameName = new String("heellooooe")
console.log(gameName);

console.log(gameName.length)
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase())
console.log(gameName.charAt(1))
console.log(gameName.indexOf('t'));
console.log(gameName.indexOf('e'));
console.log(gameName.__proto__);


const newString = gameName.substring(0,4);
console.log(newString);


const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "             deen        "
console.log(newStringOne)
console.log(newStringOne.trim());

const url = "https://deen.com/deen%20bandhu"
console.log(url.replace('%20','-'))
console.log(url.includes('deen'));
