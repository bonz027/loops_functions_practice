//For each problem below, write a loop that prints the given output.
//Assume a global array called animals is defined as follows:

var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

//rat cat butterfly marmot
//all but last
for(var i=0; i<4;i++){
    console.log(animals[i]);
}
console.log("----");

//rat butterfly ocelot
//every other element
for(var i=0; i<animals.length; i+=2){
    console.log(animals[i]);
}
console.log("----");

//ocelot marmot butterfly cat rat
//reverse order
for(var i=animals.length-1; i>=0; i--) {
    console.log(animals[i]);
}
console.log("----");

//rat cat cat butterfly butterfly marmot marmot ocelot
//repeat the middle elements (all but first,last)
for(var i=0; i<animals.length;i++){
    console.log(animals[i]);
    if(i!=0 && i!=animals.length-1) {
        //print middle elements a second time
        console.log(animals[i]);
    }
}
console.log("---");
console.log("loop practice3");

//For each problem below, write a loop that prints the given output.
//Some of the problems will require you to write an if statement in the loop.
//Assume a global array called students is defined as follows:

var students = [{
 name: 'Liz',
 age: 25,
 city: 'Boulder'
},{
 name: 'Meghan',
 age: 27,
 city: 'Denver'
},{
 name: 'Trent',
 age: 32,
 city: 'Boulder'
},{
 name: 'Chelsea',
 age: 24,
 city: 'Boulder'
},{
 name: 'Amir',
 age: 18,
 city: 'Denver'
}];

// 25 27 32 24 18
// print each students age
for(var i=0; i<students.length; i++){
    console.log(students[i].age);
}
console.log("---");

// Liz, Boulder Meghan, Denver Trent, Boulder Chelsea, Boulder Amir, Denver
// print each students name and city
for(var i=0; i<students.length; i++){
    console.log(students[i].name + " , " + students[i].city);
}
console.log("---");
// Liz is from Boulder Trent is from Boulder Chelsea is from Boulder
// print names of each student from Boulder
for(var i=0; i<students.length; i++){
    if(students[i].city === "Boulder") {
        console.log(students[i].name + " is from Boulder");
    }
}
console.log("---");
// Meghan is older than 25 Trent is older than 25
// print each student older than 25
for(var i=0; i<students.length; i++){
    if(students[i].age > 25) {
        console.log(students[i].name + " is older than 25");
    }
}
