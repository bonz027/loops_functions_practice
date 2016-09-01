/ function practice2

//getName
function getName (object) {
    return object.name;
}

console.log( getName({name:"Luisa", age:25}));

//totalLetters
function totalLetters (arrayOfStrings) {
    var totalChars = 0;
    for (var i=0; i<arrayOfStrings.length; i++) {
        totalChars += arrayOfStrings[i].length;
    }
    return totalChars;
}

console.log(totalLetters(["javascript", "is", "awesome"]));

//keyValue
function keyValue (key, value) {
    var newObj = new Object();
    newObj[key] = value;
    return newObj;
}

console.log(keyValue("city", "Denver"));

//negativeIndex
function negativeIndex(array, negOffset) {
    if(negOffset <0) {
        return array[array.length+(negOffset%array.length)];
    }else {
        return array[negOffset%array.length];
    }
}

console.log(negativeIndex(["a","b","c","d","e"], -2));
console.log(negativeIndex(["jerry","sarah","sally"], -1));

//removeM
function removeM (string) {
    return string.split("m").join("");
}

var str1 = "family";
var str2 = "memory";
console.log(removeM(str1) + " from " + str1);
console.log(removeM(str2) + " from " + str2);

//printObject
function printObject(object) {
    for (var key in object) {
        console.log(key+ " is " + object[key] );
    }
}

printObject({a:10, b:20, c:30});
printObject({ firstName:"pork", lastName:"chops"});

//vowels
function vowels(str) {
    var result = [];
    for (var i=0; i<str.length; i++) {
        if(("aeiou".indexOf(str[i])) > -1) {
            // found a vowel, push this to result
            result.push(str[i]);
        }
    }
    return result;
}

console.log( vowels("alabama"));
console.log( vowels("what evil odd ducks!"));

//twins
function twins (myArray) {
    if (myArray.length%2 !== 0) {
        //length is odd, can't have matched all matched pairs
        return false;
    }else {
        // loop thru array, comparing adj pairs
        for (var i=0; i<myArray.length; i+=2) {
            //console.log("comparing " +myArray[i] + ":" + myArray[i+1]);
            if(myArray[i] !== myArray[i+1]) {
                //found a mismatch
                return false;
            }
        }
        return true;
    }
}

console.log(twins(["a","a","b","b","c","c"]));
console.log(twins(["a","a","b","c","d","d"]));
console.log(twins(["a","a","b","z"]));
console.log(twins(["a","a", undefined]));

//or
function or(myArray) {
    for(var i=0; i<myArray.length; i++) {
        if(myArray[i] === true) {
            return true;
        }
    }
    return false;
}
console.log("or function");
console.log(or([false,false,true,false]));
console.log(or([false,false,false]));
console.log(or([]));

//unique
function unique(myArray) {
    var result=[];
    // loop thru each element and push to result array if the current element
    // does not already exist in result array
    for (var i=0; i<myArray.length; i++) {
        if(result.indexOf(myArray[i]) === -1) {
            //current element not found, push it
            result.push(myArray[i]);
        }
    }
    return result;
}

console.log(unique(["a","b","a","c","d","d"]));
console.log(unique(["todd","avery","maria","avery"]));
