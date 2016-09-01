var getMoreVictims = true;
var getMoreVolunteers = true;

function DisasterVictim (name, phone, address) {
    this.name = name;
    this.phone = phone;
    this.address = address;
};

DisasterVictim.prototype.toString = function victimToString() {
   var ret = "\nName: " + this.name + "\nPhone: " + this.phone + "\nAddress: " + this.address + "\n";
   return ret;
}

function DisasterVolunteer (name, phone, address) {
    this.name = name;
    this.phone = phone;
    this.address = address;
};

DisasterVolunteer.prototype.toString = function volunteerToString() {
    var ret = "\nName: " + this.name + "\nPhone: " + this.phone + "\nAddress: " + this.address + "\n";
    return ret;
}


var name, phone, address;
var victimArray = [];
var volunteerArray = [];

// prompt for disaster victim input
while(getMoreVictims) {

    getMoreVictims = confirm("Do you have another victim to enter? \n Please enter ok for yes or cancel for no");
    if (getMoreVictims) {

        name = prompt( "Please enter name for this victim", "no name");
        phone = prompt("Please enter phone for this victim", "xxx-xxx-xxxx");
        address = prompt("Please enter address for this victim", "no address");
        var newVictim = new DisasterVictim (name, phone, address);
        // add new victim to victim's array
        victimArray.push(newVictim);
    }
}

// prompt for volunteer input
while(getMoreVolunteers) {

    getMoreVolunteers = confirm("Do you have another volunteer to enter? \n Please enter ok for yes or cancel for no");
    if (getMoreVolunteers) {

        name = prompt( "Please enter name for this volunteer", "no name");
        phone = prompt("Please enter phone for this volunteer", "xxx-xxx-xxxx");
        address = prompt("Please enter address for this volunteer", "no address");
        var newVolunteer = new DisasterVolunteer (name, phone, address);
        // add new volunteer to volunteer's array
        volunteerArray.push(newVolunteer);
    }
}

// print out, in a single alert, the number of persons in need, the number of volunteers,
// and a list of all persons in need and all volunteers. You may format this in any way
// that looks reasonable
var numVictims = ("there are: " + victimArray.length + " victims");
var numVolunteers = ("\nthere are: " + volunteerArray.length + " volunteers");

// build up string representation of victim list
//var victimList = JSON.stringify(victimArray);
var victimList = "";
for (var i=0; i<victimArray.length; i++) {
    victimList = victimList + victimArray[i].toString();
}

//var volunteerList = JSON.stringify(volunteerArray);
var volunteerList = "";
for (var i=0; i< volunteerArray.length; i++) {
    volunteerList = volunteerList + volunteerArray[i].toString();
}

alert(numVictims + numVolunteers + "\n\nVictim List\n" + victimList + "\n\nVolunteer List\n" + volunteerList);

// Bonus II:
//After all of the above,
//
// 1) prompt the user to enter the name of a person in need.
// 2) find that person in victim list
// 3) get that victims address
// 4) search volunteer array to find each volunteer that matches address
// 5) display an alert that lists all the volunteers that are available to
//    help on the same street
