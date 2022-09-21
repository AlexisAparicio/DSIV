var sum=10+15;
console.log(sum);
var myglobal=10;

//Funcion y parametros
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    var result="";
    result+= "the "+myAdjective + myNoun + myVerb + " to the Store "+ myAdverb;
    return result;
}
console.log(wordBlanks("dog ","big ","ran","quickly"))

// Arreglos y operaciones
var myArray = [50,60,70];
var myData = myArray[2]+myArray[1];
console.log(myData);


// Instanciar y reusar una funcion
function reusableFunction(){
    console.log("Hi World");
}

reusableFunction();

// funcion con Arguments 
function ourFunction(a,b){
    console.log(a-b);
}
ourFunction(20,22);

//Global Scope
function fun2(){
    var output="";
    if(typeof myglobal!= "undefined"){
        output+="myGlobal: "+ myglobal;
    }
    if(typeof oopsglobal !="undefined"){
        output+="oopsGlobal:" + oopsglobal;
    }
    console.log(output);
}

fun2();