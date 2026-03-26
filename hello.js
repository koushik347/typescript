var myname = "Koushik";
console.log("Hello, " + myname + "!");
var myclg = "AITS";
console.log("I am studying in " + myclg + ".");
var myage = 21;
console.log("My age is " + myage + ".");
var isStudent = true;
console.log("Am I a student? " + isStudent + ".");
myname = "10";
console.log("My name is now " + myname + ".");
var skill = ["Koushik", 50, "true"];
console.log("All info: " + skill + ".");
var tuple = ["Koushik", 21, true];
console.log("Tuple info: " + tuple + ".");
var anytype = "I can be anything";
//object type
var projectdetails = {
    projectName: "TypeScript Project",
    duration: 6,
    teamSize: 5
};
console.log("Project Details: ", projectdetails);
//enums
var projectStatus;
(function (projectStatus) {
    projectStatus[projectStatus["NotStarted"] = 0] = "NotStarted";
    projectStatus[projectStatus["InProgress"] = 1] = "InProgress";
    projectStatus[projectStatus["Completed"] = 2] = "Completed";
})(projectStatus || (projectStatus = {}));
var currentStatus = projectStatus.InProgress;
console.log("Current Project Status: ", currentStatus);
