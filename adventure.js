
// Strict mode makes the browser treat some common mistakes
// as errors and complain about them.
"use strict";

// The game world is a sequence of rooms in a line
// north to south.
var rooms = [
    "You have entered a cave. There is an exit to the south.",
    "You are deeper in the cave. There are exits north and south.",
    "A small stream runs through this room. There are exits north and south.",
    "You have reached the end of the cave. There is an exit to the north.",
];

// The entire state of the game is the room the player
// is currently in.
var currentRoom = 0;

// The update function updates the screen to match the
// current game state.
function update(msg) {
    $('#room-text').text(rooms[currentRoom]);
    $('#message').text(msg);
}

// These functions cause the player to move.
function goNorth() {
    currentRoom = currentRoom - 1;

    if (currentRoom < 0) {
        currentRoom = 0;
        update("You can't go any futher north.");
    }
    else {
        update("");
    }
}

function goSouth() {
    currentRoom = currentRoom + 1;
 
    if (currentRoom > rooms.length - 1) {
        currentRoom = rooms.length - 1;
        update("You can't go any further south.");
    }
    else {
        update("");
    }
}

// Call the movement functions when the
// buttons on the screen are pressed.
$('#btn-north').click(goNorth);
$('#btn-south').click(goSouth);

// Show the starting room.
update("Welcome to an adventure game.");


