 function num(number){
    if (number > 0 ){
        return "positive"
    }  
     else if (number == 0){
         return "zero"    
     }   
    else{
        return "negative"
    }
}


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


function hour(day){
    if ( day == "saturday" || day == "sunday" ){
        return "it's a weekend"
    }  
    else{
        return "weekday"
    }
}

 
function traffic(light){
    if (light == "green" ){
        return "go"
    }
     else if (light == "yellow"){
         return "slow"    
     }   
    else if("red"){
        return "stop"
    }
}
 
function user(role){
    if (role == "admin" ){
        return "Welcome Admin"
    }
     else if (role == "editor"){
         return "Welcome Editor"    
     }   
    else if(role == "viewer"){
        return "Welcome Viewer"
    }
    else{
        return "Role not recognised"
    }
}

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
