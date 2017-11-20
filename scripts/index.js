var hotel = {
    rooms: [
        {
            name: "Double Bed",
            price: "$75.00",
            available: 40
        },
        {
            name: "King Bed",
            price: "$120.00",
            available: 20
        },
        {
            name: "Luxery Suite",
            price: "$250.00",
            available: 5
        }
    ],
    name: "CareerDevs Innt"
}

// console.log(document.getElementById("label").nodeName);

for (var i = 0; i < hotel.rooms.length; i++) {
    // console.log("start");
    var radioBtn = document.createElement("INPUT"); //look up let vs. var later, coders do not like global variables can run into probems
    var radioLbl = document.createElement("LABEL"); //scope is important that's where let comes in
    radioBtn.setAttribute("type", "radio");
    radioBtn.setAttribute("name", "rooms");
    radioBtn.setAttribute("value", i); //value does not have to match the label
    radioBtn.setAttribute("id", "room" + i);
    radioLbl.innerHTML = hotel.rooms[i].name;
    // console.log("stop");
    document.getElementById("radialSection").appendChild(radioBtn); //must be done within the loop or else ERROR
    document.getElementById("radialSection").appendChild(radioLbl);
    
}
// display rooms as radio options
// on form submission confirm radio was selected 
// and checkbox checked