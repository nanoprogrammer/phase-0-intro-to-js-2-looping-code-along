
function writeCards(people, eventName) {
    const thankYouMessages = [];
    for(let i = 0; i < people.length; i++) {
        const message = `Thank you, ${people[i]}, for the wonderful ${eventName} gift!`;
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