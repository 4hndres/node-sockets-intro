const socket = io()

// HTML REFERENCES
const Online     = document.querySelector('#lblOnline')
const Offline    = document.querySelector('#lblOffline')
const txtMessage = document.querySelector('#txtMessage')
const btnSend    = document.querySelector('#btnSend')

socket.on('connect', () => {
    console.log('App Client Connected')
    lblOffline.style.display = 'none'
    lblOnline.style.display = ''
})

socket.on('disconnect', () => {
    console.log('App Client Disonnected')
    lblOnline.style.display = 'none'
    lblOffline.style.display = ''
})

socket.on('send-message', (payload) => {
    console.log(payload)
})

btnSend.addEventListener('click', () => {
    const message = txtMessage.value
    const payload = {
        "id":"abc123",
        "date": new Date().getTime(),
        "message": message
    }
    socket.emit('send-message', payload, (id) => {
        console.log(`From the server you've created the id ${id}`)
    })
})