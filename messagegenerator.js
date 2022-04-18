//For this project, you will build a message generator program. Every time a user runs a program,
//they should get a new, randomized output. You’re welcome to take the project in a couple of different forms,
//like an astrology generator, inspirational message, or nonsensical jokes. To make your program truly random,
//the message that it outputs should be made up of at least three different pieces of data. 
//Take what you know of JavaScript syntax so far to build the program and customize it to your liking.



const when =["Hour", "Day", "Week", "Month", "Year"];
const what =["Good", "Bad", "Terrible", "Fantastic"];
const avoid =["Planes", "Boats", "People", "Fish"];
const lookForward =["Money", "House", "Baby", "Family"];

function get_Random_1 (when){
    return when[Math.floor(Math.random()*when.length)];
    
}

function get_Random_2 (what){
    return what[Math.floor(Math.random()*what.length)];
    
}

function get_Random_3 (avoid){
    return avoid[Math.floor(Math.random()*avoid.length)];
    
}

function get_Random_4 (lookForward){
    return lookForward[Math.floor(Math.random()*lookForward.length)];
    
}

console.log ("In a " + get_Random_1(when) + " you are going to have " +  get_Random_2(what) + " luck. But I must also warn you to avoid " + get_Random_3(avoid) + 
" because it could mean doom. But on the bright side you should be on the look out for " + get_Random_4(lookForward) + " because this could change your life " +
"in ways you couldent possable dream off.");



