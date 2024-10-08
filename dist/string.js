"use strict";
const searchA = (text) => {
    let cont = 0;
    let validation = false;
    if (text.includes("a")) {
        validation = true;
    }
    const search = text.split(" ").filter((word) => {
        word.includes("a") ? cont++ : cont;
    });
    return { cont, validation };
};
const text = "I am a software developer";
const { cont, validation } = searchA(text);
if (validation) {
    console.log(`The letter 'a' was found ${cont} times`);
}
else {
    console.log(`The letter 'a' was not found`);
}
