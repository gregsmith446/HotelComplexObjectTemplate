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
        },
        {
            name: "Penthouse",
            price: "$5,000",
            available: 2
        }
    ],
    name: "CareerDevs Innt"
}

//how to add dynacism to your site

function displayDetails(room) { //onclick event handler
        console.log("hello");
        console.log(room);
        document.getElementById("price").innerHTML = hotel.rooms[room].price;
        document.getElementById("available").innerHTML = hotel.rooms[room].available;
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
    radioBtn.setAttribute("onclick", "displayDetails(" + i + ")");
    // radioBtn.onclick = displayDetails(i);
    radioLbl.innerHTML = hotel.rooms[i].name;
    
    // console.log("stop");
    document.getElementById("radialSection").appendChild(radioBtn); //must be done within the loop or else ERROR
    document.getElementById("radialSection").appendChild(radioLbl);
}

document.getElementById("reservationForm").onsubmit = function(event) { //event in () can be anything, commonly abreviated as e
event.preventDefault();    
//check if terms are agreed to
if (!document.getElementById("confirmation").checked) { //! is used as "not" so if not checked, run this.  Bang! is opposite day.
    alert("Please agree to Terms and Condtions");
    return;
}
    var radios = document.getElementsByName("rooms");
    var roomSelection = "";
    for (var i = 0; i < radios.length; i++) {
        // console.log(radios[i]);
        if(radios[i].checked) { //check each radio button one at a time to see if it has been chosen
        roomSelection = radios[i].value; //value is a string
        break;
        //break will stop a loop without ending the function
    }
}

if(!roomSelection) { //if no room selected, say that no room selection made
    alert("No room selection made");
    return;
}

alert("Thank you for reserving the room" + hotel.rooms[parseInt(roomSelection)].name + "."); 
}


// display rooms as radio options
// on form submission confirm radio was selected 
// and checkbox checked
// ***data validation is a key concept in backend development is what you're getting what you want to get***