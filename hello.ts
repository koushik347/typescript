let myname:string="Koushik";
console.log("Hello, "+myname+"!");
let myclg:string="AITS";
console.log("I am studying in "+myclg+".");
let myage:number=21;
console.log("My age is "+myage+".");
let isStudent:boolean=true;
console.log("Am I a student? "+isStudent+".");
myname="10";
console.log("My name is now "+myname+".");
let skill:(string|number)[]=["Koushik",50,"true"];
console.log("All info: "+skill+".");
let tuple:[string,number,boolean]=["Koushik",21,true];
console.log("Tuple info: "+tuple+".");
let anytype:any="I can be anything";
//object type
let projectdetails:{
    projectName:string;
    duration:number;
    teamSize:number;
}={
    projectName:"TypeScript Project",
    duration:6,
    teamSize:5
};
console.log("Project Details: ",projectdetails);
//enums
enum projectStatus {
    NotStarted,
    InProgress,
    Completed
}
let currentStatus:projectStatus=projectStatus.InProgress;
console.log("Current Project Status: ",currentStatus);  
//functions
function greet(name:string):string{
    return "Hello, "+name+"!";
}



