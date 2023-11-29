const mongoose = require("mongoose");
const room_schema = new mongoose.Schema({
  name: String,
  secretKey: String,
});

const Room = mongoose.model("Room", room_schema);

// module.exports = Room;

async function addRoom(roomName, secretKey) {
  try {
    // const encryptedKey = cryptr.encrypt(secretKey);
    console.log('Creating Room with:', { name: roomName, secretKey: secretKey });

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

module.exports = { addRoom, Room };
// "cybersec12345"
// "algo12345"
// "ds12345"
// "os12345"
//"ai12345"
// "se12345"
