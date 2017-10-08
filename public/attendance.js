var h1 = document.querySelector("h1");
var input = document.getElementsByTagName("input")[0];

h1.innerHTML = "Another HTML page";
h1.addEventListener("click", function(){
     h1.style.color = "purple";
});

if(event.which == 13){
     h1.innerHTML = input;
     console.log(h1);
}
