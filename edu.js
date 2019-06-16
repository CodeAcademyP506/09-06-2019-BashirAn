var esas=document.getElementById("esas")
esas.style.margin="0px"
esas.style.backgroundColor="rgba(234, 227, 227, 0.45)"
 var fonsekil=document.getElementById("fonsekil")
fonsekil.style.height="80px"
fonsekil.style.width="100%"
fonsekil.style.backgroundImage='url("apple.jpg")'
fonsekil.style.backgroundRepeat="no-repeat"
fonsekil.style.backgroundSize="cover"
var axtar=document.getElementById("axtar")
axtar.style.width="60%"
axtar.style.margin="0px auto"
axtar.style.padding="20px 30px"


axtar.style.backgroundColor="white"

axtar.style.transform="translateY(-50%)"
var axtaris=document.getElementsByClassName("axtaris")
var courseKey=document.getElementById("course-key")
courseKey.style.padding="10px 150px 10px 10px"
var category=document.getElementById("category")
category.style.padding="10px"
var button1=document.getElementById("button1")
button1.style.borderLeft="1px solid gray"
button1.style.margin="10px"
button1.style.marginLeft="80px"
courseKey.innerHTML="Coure Keyword"
category.innerHTML="All Categories<span id='downArrow'></span>"
var downArrow=document.getElementById("downArrow")
downArrow.style.paddingLeft="110px"
axtar.style.display="flex"
for(let i=0;i<axtaris.length;i++){
    axtaris[i].style.margin="10px"
    axtaris[i].style.border="1px solid gray"
}
var button2=document.getElementById("button2")
button2.innerHTML="Search Course"
button2.style.color="white"
button2.style.padding="10px 30px"
button2.style.backgroundColor="orange"
button2.style.margin="0px 30px"
button2.style.boxShadow="white 3px 3px, 5px 4px 4px orange"

var offerSection=document.getElementById("offer")

var offerHeading=document.getElementById("offer-heading")
offerHeading.style.textAlign="center"
offerHeading.innerHTML="<h1 id='heading'>OFFERING THE BEST<br>IN EDUCATION TO THE WORLD</h1><p>Sign-up today to join over 6 million lerners already on ALLISON</p>"
var heading=document.getElementById("heading")
heading.style.margin="0px"
heading.style.fontSize="40px"
heading.style.color="black"
offerSection.style.fontFamily="Trebuchet MS"
var container=document.getElementById("container")
container.style.width="60%"

container.style.margin="0px auto"
var ourOffers=document.getElementById("our-offers")
ourOffers.style.display="flex"
ourOffers.style.marginTop="40px"

var box=document.getElementsByClassName(" box")
var icons=document.getElementsByClassName("icon")
var circles=document.getElementsByClassName("circle")
var image=document.getElementsByClassName("globe")
globe.style.width="80px"
globe.style.height="80px"
globe.style.marginLeft="-437px"
var textHeading=["Best Learning Communities","Online Teaching Jobs","Learn Courses Online","Book Library & Store"]
var h4=document.getElementsByTagName("h4")
var info=document.getElementsByClassName("info")
for(let i=0;i<box.length;i++){
 
    box[i].style.width="30%"
    box[i].style.textAlign="center"
    if(i!=box.length-1){
        box[i].style.marginRight="20px"
    }
    
}
for(let i=0;i<icons.length;i++){
    icons[i].style.fontSize="30px"
    icons[i].style.padding="20px"
}

var colors=["red","green","blue","turquoise"]

 for(let i=0;i<circles.length;i++){
    
      circles[i].style.width="80px"
      circles[i].style.height="80px"
      circles[i].style.borderRadius="50%"
    circles[i].style.backgroundColor=colors[i]
     circles[i].style.color="white"
     circles[i].style.transform="translateX(93%)"
 }
for(let i=0;i<h4.length;i++){
    h4[i].innerText=textHeading[i]
    h4[i].style.color="black"
}
for(let i=0;i<info.length;i++){
    info[i].style.margin="0px"
    info[i].innerHTML="The idea is to keep the discussions going after class ends"
}

