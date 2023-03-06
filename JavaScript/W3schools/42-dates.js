//Date objects are static. The "clock" is not "running".
//The computer clock is ticking, date objects are not.
const a = Date();
console.log(a);

//Date() - takes argument as year, month, day, hour, minute, second and millisecond.
//JavaScript months are count from 0 to 11. 0-january and 11 -december.
const b = new Date(2020, 8, 25, 5, 45, 55, 30);
console.log(b);

//date get methods
const c = new Date();
console.log("Date methods");
console.log(c.getFullYear());
console.log(c.getMonth());
console.log(c.getDate());
console.log(c.getDay());
console.log(c.getHours());
console.log(c.getMinutes());
console.log(c.getSeconds());
console.log(c.getMilliseconds());
console.log(c.getTime());


//date set method
const today = new Date();
const someday = new Date();
someday.setFullYear(2100,0,1);

if(someday > today){
    let text = "date is before 1 Jan 2100";
    console.log(text);
}
else{
    let text = "date is after 1 Jan 2100";
    console.log(text);
}
