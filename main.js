studentArray=[];
function submit(){
displaystudentarray=[];
for (var j = 1; j <=4; j++) {
var namestudent=document.getElementById("student"+j).value;
console.log(namestudent);
studentArray.push(namestudent);
}
console.log(studentArray);
var namelength=studentArray.length;
console.log(namelength);
for (var k = 0; k < namelength; k++) {
displaystudentarray.push("<h4>NAME-"+studentArray[k]+"</h4>");
console.log(displaystudentarray);
}
document.getElementById("displaynamewithcommas").innerHTML=displaystudentarray;
var removecomma=displaystudentarray.join(" ");
document.getElementById("displaynamewithoutcommas").innerHTML=removecommas;

document.getElementById("submitbutton").style.display="none";
document.getElementById("sortbutton").style.display="inline-block";
}
function sort(){
studentArray.sort();
document.getElementById("displayname").innerHTML=studentArray
}
function newupdate(){
document.getElementById("displaynamewithoutcommas").innerHTML="<h1>"+namestudent+"</h1>"
}
function searching()
{
var s=document.getElementById("value").value;
var found=0;
var j;  
for (let j = 0; j < studentArray.length; j++){
    if (s==studentArray[j]){
     found=found+1;
    }
        
    }

document.getElementById("p2").innerHTML="name found "+found+" time/s"; console.log("found name "+found+" time/s");  
}    


