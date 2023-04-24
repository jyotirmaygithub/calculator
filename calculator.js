// lets build calculator by using javascript
// now main task which is left in fromt of me, that is of inserting javascript to make me calculator work in a efficent way 


// lets call all css selectors one by one 
var support = " "

var for_all = document.querySelectorAll(".font_size ")
var display = document.getElementById("small_container")
var numbers = document.querySelectorAll(".numb")
var cancel = document.querySelector(".canc")
var operator = document.querySelectorAll(".operat")
var result = document.getElementsByClassName("result")[0]


let yoo  = Array.from(for_all).forEach((joo) =>{

joo.addEventListener("click",function(t) {
   console.log(t.target)
   var take  = t.target.textContent // i write this that to make easy for me to work upon

   try{
      if(take == "="){
         support = eval(support)
         display.value = support
      }
      else if(take == "C"){
         support = " "
         display.value = support
      }
      else {
         support = support + take
         display.value = support
      }
   }
   catch{
      display.value = "error"
   }
})
 })
