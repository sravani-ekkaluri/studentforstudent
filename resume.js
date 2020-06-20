function getfile(file,callback){
var xhr=new XMLHttpRequest();
xhr.overrideMimeType("Application/json");
xhr.open('GET',file,true);
xhr.onreadystatechange=function(){
  if (xhr.readyState===4 && xhr.status=="200")
  {
    callback(xhr.responseText);
  }
}
xhr.send(null);
}
getfile("json/resume.json",function(text)
{
  var data=JSON.parse(text);
  console.log(data);
  profile(data.basics);
  career(data.career);
  details(data.education);
  skills(data.skills);
})
var main=document.querySelector(".main");
var sub1=document.querySelector(".left");
var sub2=document.querySelector(".right");
function profile(pro){

  var image=document.createElement("img");
  image.src=pro.img;
  sub1.appendChild(image);
  main.appendChild(left);
  var head=document.createElement("h2");
  head.textContent=pro.name;
  sub1.appendChild(head);
  main.appendChild(left);
  var profes=document.createElement("h3");
  profes.textContent=pro.profession;
  sub1.appendChild(profes);
  main.appendChild(left);

  var mail=document.createElement("h4");
  mail.textContent=pro.email;
  sub1.appendChild(mail);
  main.appendChild(left);

  var place=document.createElement("h4");
  place.textContent=pro.place;
  sub1.appendChild(place);
  main.appendChild(left);

}
function career(c){
  var head2=document.createElement("h2");
  head2.textContent="career objectives";
  sub2.appendChild(head2);
  main.appendChild(right);
  var hr=document.createElement("hr");
  sub2.appendChild(hr);
  main.appendChild(right);


  var head1=document.createElement("h4");
  head1.textContent=c.info;
  sub2.appendChild(head1);
  main.appendChild(right);

}
function details(q){
  var qual=document.createElement("h2");
  qual.textContent="Educational details";
  sub2.appendChild(qual);
  main.appendChild(right);
  var hr=document.createElement("hr");
  sub2.appendChild(hr);
var table=document.createElement("table");

  let row='';
row +=  "<tr>"+"<th>"+"S.NO"+"</th>"+
  "<th>"+"Institute" +"</th>"+
  "<th>"+"DEGREE" +"</th>"+
  "<th>"+"YOP" +"</th>"+
  "<th>"+"Percentage"+"</th>"+
  "</tr>";



  for(i in q){

  row += "<tr>"+"<td>"+q[i].sno +"</td>"+
"<td>"+q[i].institute +"</td>"+
"<td>"+q[i].degree +"</td>"+
"<td>"+q[i].yop +"</td>"+
"<td>"+q[i].percentage+"</td>"+
"</tr>";
}
table.innerHTML=row;
sub2.appendChild(table);
main.appendChild(right);
}
function skills(f)
{
var head3=document.createElement("h2");
head3.textContent="technical skills";
sub2.appendChild(head3);
main.appendChild(right);
var ul=document.createElement(ul);
sub2.append(ul);
for(i in f)
{
  var li=document.createElement("li");
  li.textContent=f[i].information;
  ul.append(li);
}
}
