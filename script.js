function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}
class Message {
    constructor(author, time, text) {
        this.author = author
        this.time = time
        this.text = text
    }
    toHtml() {
        return `<p>${this.time} ${this.author}: ${this.text}</p>`
    }
}
class Messenger {
    constructor(){
        this.history = [];
    }
    send (author, text)
    {
        let time = gettime()
        let message = new Message(author, time, text)
        this.history.push(message)
    }
    show_history (){
        const historyArea = document.querySelector('.history')
        this.history.forEach(item => {
            let element = document.createElement('div')
            element.classList.add("line")
            element.innerHTML = item.toHtml();
            historyArea.appendChild(element)
        })
    }
}

function onlySpaces(str) { return str.trim().length === 0; }

let messenger = new Messenger()
document.querySelector('.btn-send').addEventListener('click', (event) =>
{
    let message = document.querySelector('.message').value
    if (!(message == '' || onlySpaces(message))){
    let name = document.querySelector('.name').value
    messenger.send(name, message)
    document.querySelector('.message').value = ''}
})
document.querySelector('.btn-show').addEventListener('click', (event) =>
{
    document.querySelector('.history').innerHTML = ""
    messenger.show_history()
})