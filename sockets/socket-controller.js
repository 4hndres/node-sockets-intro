

const socketController = (socket) => {
    console.log(`Client ${socket.id} connected :D`)

    socket.on('disconnect', () => {
      console.log(`Client ${socket.id} disconnected D:`)
    })

    socket.on('send-message', (payload, callback) => {
      const id = 123456
      callback(id)
      socket.broadcast.emit('send-message', payload)
    })
  }

module.exports = {
    socketController
}