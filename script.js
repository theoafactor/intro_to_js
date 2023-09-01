let student_firstname = "Jerry";
let student_lastname = "Adams";

// enter first name
let firstname = prompt("Please enter your first name: ");

// remove space 
firstname = firstname.trim();

// enter last name
let lastname = prompt("Please enter your last name: ");
lastname = lastname.trim();

if(firstname.length == 0 && lastname.length == 0){

    alert("You did not enter both first name and last name");

}else{
    if(firstname.length == 0){
        alert("You did not enter first name");
    }

    else if(lastname.length == 0){
        alert("You did not enter last name");
    }

    else if(firstname != student_firstname){
        alert("Your first name is not correct");
    }

    else if(lastname != student_lastname){
        alert("Your last name is not correct"); 
    }else{

        alert("Welcome to the app");
    }


}





