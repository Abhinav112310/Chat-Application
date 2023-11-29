const Room = require('./RoomSchema');
const {add} = require("nodemon/lib/rules"); // Adjust the path as per your project structure

async function addRoom(roomName, secretKey) {
    try {
        const room = new Room({
            name: roomName,
            secretKey: secretKey
        });

        await room.save();
        console.log('Room added:', room);
    } catch (error) {
        console.error('Error adding room:', error);
    }
}


addRoom("Cyber Security","test")