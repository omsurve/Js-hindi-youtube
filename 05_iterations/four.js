const myObject = {
    js:"javascript",
    cpp:"c++",
    rb:"Ruby",
    swift:"Swifty by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js","rb","cpp","py","java"]

for (const key in programming) {
    console.log(key);
}