// alert("hello");
const py = prompt("Enter current year: ");
const mt = prompt("Enter your birth month: ");
const date = prompt("Enter your birhDate: ");
const st = date+" "+mt+" "+py;
console.log(st);
// console.log(typeof(st));
mtNum = new Date(st).getMonth();
// console.log(mtNum);
const now = new Date();
presMnum = now.getMonth();
presDate = now.getDate();
// console.log(presMnum,presDate);
if(mtNum==presMnum)
{
    if(date>=presDate){
        year = py;
    } 
    else{
        y = Number(py)+1;
        year = String(y);
        
    }
}
else if(mtNum<presMnum)
{
    y = Number(py)+1;
    year = String(y);
}
else
{
    year = py;
}
str = date+" "+mt+" "+year;
console.log(str);


const end_date = str+" 12:00 AM";
// const end_date = "16 May 2023 9:05 PM"; // use proper format like 10:00 PM not 10PM ; there must be 
//spacing between string even between 10:00 and PM
document.getElementById("endDate").innerText = end_date;
const inputs = $("input");

// function for the last date of timer to end
function clock(){
    const endTime = new Date(end_date);
    const nowTime = new Date();
    const diff = (endTime - nowTime); //this diff is in miliseconds
    const diffTime = diff/1000; // now it's in seconds
    if (diffTime<0){
        return;
    }


    // converting into remaining days
    const days = Math.floor(diffTime/3600/24);
    // converting into remaining hours to reach final date
    const hours = Math.floor(diffTime/3600%24);
    // converting to into remaining minutes
    const minutes = Math.floor(diffTime/60%60);
    // converting to into remaining seconds
    const seconds = Math.floor(diffTime%60);  //since diffTime is in seconds so to get remaining seconds we will divide by 60 
    //and use it's remainder(modulus)

    inputs[0].value = days;
    inputs[1].value = hours;
    inputs[2].value = minutes;
    inputs[3].value = seconds;
}
// initial call
clock();
 setInterval(function(){
    clock();
 },1000);