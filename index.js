
function writeCards(names, event){
    const messages = []
for (let i = 0; i < names.length; i++){
    const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    messages.push(message);
}
    return messages;
}

function countDown(number) {
    let i = 0
    while (i <= number) {
        console.log(number--);
    }
}




