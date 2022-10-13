



let th=document.createElement("thead");
th.setAttribute("class","thead-dark");
 

let t=document.createElement("tr");

let s1=document.createElement("th");
s1.setAttribute("scope","col");
s1.innerHTML="first";

let s2=document.createElement("th");
s2.setAttribute("scope","col");
s2.innerHTML="middle";

let s3=document.createElement("th");
s3.setAttribute("scope","col");
s3.innerHTML="last";



let bod=document.createElement("tbody");

let t1=document.createElement("tr");

let td1=document.createElement("td");
td1.innerHTML="mark";

let td2=document.createElement("td");
td2.innerHTML="antony";

let td3=document.createElement("td");
td3.innerHTML="basha";


let ele=document.createElement("table");
ele.setAttribute("class","table");

t.append(s1,s2,s3);
th.append(t);

t1.append(td1,td2,td3);

bod.append(t1);

ele.append(th,bod);

document.body.append(ele);





   















