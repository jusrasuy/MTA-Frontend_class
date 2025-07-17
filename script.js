 function num(number){
    if (number > 0 ){
        return "positive number"
    }  
     else if (number == 0){
         return "zero"    
     }   
    else{
        return "Negative number"
    }
}
undefined
num(0)
'zero'
num(9)
'positive number'
num(-10)
'Negative number'

function time(hour){
    if (hour < 12 ){
        return "Good Morning"
    }  
     else if (hour >= 12 && hour <=17){
         return "Good Afternoon"    
     }   
    else{
        return "Good Evening"
    }
}
undefined
time(10)
'Good Morning'
time(15)
'Good Afternoon'
time(20)
'Good Evening'

function grade(score){
    if (score >= 90 ){
        return "Excellent"
    }  
     else if (score >= 70 && score <= 89){
         return "Good"    
     }
      else if (score >= 50 && score <= 69){
         return "Pass"    
     }
    else{
        return "Fail"
    }
}
undefined
grade(96)
'Excellent'
grade(78)
'Good'
grade(59)
'Pass'
grade(49)
'Fail'

function weather(day){
    if (day == "rainy" ){
        return "Take an umbrella"
    }  
     else if (day == "sunny"){
         return "Wear sunscreen"    
     }   
    else if(day == "cold"){
        return "Dress warm"
    }
}
undefined
weather("rainy")
'Take an umbrella'
weather("cold")
'Dress warm'
weather("sunny")
'Wear sunscreen'

function kid(age){
    if (age < 13 ){
        return "child"
    }
     else if (age >=13 && age <=19){
         return "teenager"    
     }   
    else if(age >=20 && age <=64){
        return "adults"
    }
    else{
        return "senior"
    }
}
undefined
kid(10)
'child'
kid(16)
'teenager'
kid(50)
'adults'
kid(78)
'senior'

function hour(day){
    if ( day == "saturday" || day == "sunday" ){
        return "it's a weekend"
    }  
    else{
        return "weekday"
    }
}
undefined
hour("saturday")
"it's a weekend"
hour("monday")
'weekday'

 
function traffic(light){
    if (light == "green" ){
        return "go"
    }
     else if (light == "yellow"){
         return "slow down"    
     }   
    else if("red"){
        return "stop"
    }
}
undefined
traffic("green")
'go'
traffic("red")
'stop'
traffic("yellow")
'slow down'
 
function user(role){
    if (role == "admin" ){
        return "welcome admin"
    }
     else if (role == "editor"){
         return "welcome editor"    
     }   
    else if(role == "viewer"){
        return "viewer"
    }
    else{
        return "role not recognised"
    }
}
undefined
user("admin")
'welcome admin'
user("viewer")
'viewer'
user("editor")
'welcome editor'
user("printer")
'role not recognised'

function attendance(student){
    if (student >= 100 ){
        return "perfect attendance"
    }
     else if (student >= 75 && student < 100 ){
         return "good attendance"    
     }   
    else{
        return "low attendance"
    }
}
undefined
attendance(100)
'perfect attendance'
attendance(87)
'good attendance'
attendance(60)
'low attendance'