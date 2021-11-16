
var year=document.getElementById("year")
var month=document.getElementById("month")
var dates=document.getElementById("dates")
var gender=document.getElementById("gender")
var name;

document.getElementById("btn").addEventListener("click",function(){
  var week=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  var day=week[new Date(year.value + "/" + month.value + "/" + dates.value).getDay()]

 if(gender.value === "male"){
   if(day==="Sunday"){
     name="Kwasi"
   }
   else if(day==="Monday"){
     name="Kwadwo"
   }
   else if(day==="Tuesday"){
    name="Kwabena"
  }
  else if(day==="Wednesday"){
    name="Kwaku"
  }
  else if(day==="Thursday"){
    name="Yaw"
  }
  else if(day==="Friday"){
    name="Kofi"
  }
  else if(day==="Saturday"){
    name="Kwame"
  }
  
 }
 if(gender.value === "female"){
   if(day==="Sunday"){
     name="Akosua"
   }
   else if(day==="Monday"){
     name="Adwoa"
   }
   else if(day==="Tuesday"){
    name="Abenaa"
  }
  else if(day==="Wednesday"){
    name="Akua"
  }
  else if(day==="Thursday"){
    name="Yaa"
  }
  else if(day==="Friday"){
    name="Afua"
  }
  else if(day==="Saturday"){
    name="Ama"
  }
 }
 if (year.value === ""){
   alert("Input year that you were born")
 }
 else if(year.value.length < 4|| year.value.length > 4){
   alert("Year length cannot be greater or less than 4")
 }
 if(month.value === ""){
   alert("Input month is required")
 }
 else if(month.value <= 0 || month.value >12){
   alert("Month has to be between 1 and 12")
 }
 if(dates.value === ""){
  alert("Input date is required")
}
else if(dates.value <= 0 || dates.value >31){
  alert("Dates has to be between 1 and 31")
}
else {
  document.getElementById("response").innerHTML="Your Akan name is " + name
  document.getElementById("response").style.color = "white"
}

})

