
var year=document.getElementById("year")
var month=document.getElementById("month")
var dates=document.getElementById("dates")

document.getElementById("btn").addEventListener("click",function(){
  var week=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  var day=week[new Date(year.value + "/" + month.value + "/" + dates.value).getDay()]
  console.log(day)
  
})
