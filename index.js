function myFunction() {
    document.getElementById("myForm").reset();
}
function myFunction() {
    var para = document.createElement("P");
    var t = document.createTextNode("This is a paragraph.");
    para.appendChild(t);
    document.getElementById("box").appendChild(para);
  }
  function interchange()
{
 var strDiv1Content = document.getElementById('c1').innerHTML;
 var strDiv2Content = document.getElementById('c2').innerHTML;

 document.getElementById('c1').innerHTML = strDiv2Content;
 document.getElementById('c2').innerHTML = strDiv1Content;

}
function interchange1()
{
 var strDiv1Content = document.getElementById('c3').innerHTML;
 var strDiv2Content = document.getElementById('c4').innerHTML;

 document.getElementById('c3').innerHTML = strDiv2Content;
 document.getElementById('c4').innerHTML = strDiv1Content;

}
function interchange2()
{
 var strDiv1Content = document.getElementById('c5').innerHTML;
 var strDiv2Content = document.getElementById('c6').innerHTML;

 document.getElementById('c5').innerHTML = strDiv2Content;
 document.getElementById('c6').innerHTML = strDiv1Content;

}
function interchange3()
{
 var strDiv1Content = document.getElementById('c7').innerHTML;
 var strDiv2Content = document.getElementById('c8').innerHTML;

 document.getElementById('c7').innerHTML = strDiv2Content;
 document.getElementById('c8').innerHTML = strDiv1Content;

}
function interchange4()
{
 var strDiv1Content = document.getElementById('c9').innerHTML;
 var strDiv2Content = document.getElementById('c10').innerHTML;

 document.getElementById('c9').innerHTML = strDiv2Content;
 document.getElementById('c10').innerHTML = strDiv1Content;

}



  function dragStart(event) {
    event.dataTransfer.setData("c1", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
    document.getElementById("c2").innerHTML ;
    event.target.style.border ;
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("c1");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("c2").innerHTML ;
}
function interchange()
{
 var strDiv1Content = document.getElementById('c1').innerHTML;
 var strDiv2Content = document.getElementById('c2').innerHTML;

 document.getElementById('c1').innerHTML = strDiv2Content;
 document.getElementById('c2').innerHTML = strDiv1Content;

}
function eraseText() {
    document.getElementById("myForm").value = "";
}  
function myFunction1() {

 var letter = document.getElementById("c1").value;
    var text="APPLE";
	

    document.getElementById("myForm").innerHTML = text;
	
}
function myFunction2() {
    var letter = document.getElementById("c2").value;
      var text="BALL";
	
	   document.getElementById("myForm").innerHTML = text;
}
	function myFunction3() {
    var letter = document.getElementById("c3").value;
    var text="CAT";
	
	   document.getElementById("myForm").innerHTML = text;
}
	function myFunction4() {
    var letter = document.getElementById("c4").value;
    var text="DOG";
	
	   document.getElementById("myForm").innerHTML = text;
}
	function myFunction5() {
    var letter = document.getElementById("c5").value;
    var text="ELEPHANT";
	
	   document.getElementById("myForm").innerHTML = text;
}
	function myFunction6() {
    var letter = document.getElementById("c6").value;
    var text="ORANGE";
	
   document.getElementById("myForm").innerHTML = text;
}	
function myFunction7() {
    var letter = document.getElementById("c7").value;
    var text="NUTS";
	
   document.getElementById("myForm").innerHTML = text;
}	
function myFunction8() {
    var letter = document.getElementById("c8").value;
    var text="LION";
	
   document.getElementById("myForm").innerHTML = text;
}	
function myFunction9() {
    var letter = document.getElementById("c9").value;
    var text="FINGER";
	
   document.getElementById("myForm").innerHTML = text;
}	
function myFunction10() {
    var letter = document.getElementById("c10").value;
    var text="JUG";
	
   document.getElementById("myForm").innerHTML = text;
}	
 
  function myFunction() {
    document.getElementById("myForm").reset();
}