
function writeCards(array, eventName) {
    const thankYouMessages = [];
    for(let i = 0; i < array.length; i++) {
        const message = `Thank you, ${array[i]}, for the wonderful ${eventName} gift!`;
        thankYouMessages.push(message);
    }
    return thankYouMessages;
}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));

function countDown() {
    let number = 10;
    while(number >= 0) {
        console.log(number--);
    }
}
countDown();