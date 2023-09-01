let student_firstname = "Jerry";
let student_lastname = "Adams";

// enter first name
let firstname = prompt("Please enter your first name: ");

// remove space 
firstname = firstname.trim();

// enter last name
let lastname = prompt("Please enter your last name: ");
lastname = lastname.trim();

if(firstname.length == 0 || lastname.length == 0){
    alert("You did not enter your first name or last name ")
}else{

    if(firstname != student_firstname || lastname != student_lastname){
        alert("Invalid first name or last name entered");
    }else{
        alert("Welcome to the web app!")
    }


}





