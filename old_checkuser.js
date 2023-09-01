const users = ["james", "john", "jerry", "mary"];

let username = prompt("Please enter your username: ");

// remove space
username = username.trim();

if(username.length == 0){
    alert("You did not enter a username")
}else{

    if(users.includes(username) == true){
        // the user is registered
        alert("Welcome " + username)
    }else{
        // the user is not registered
        alert("That username does not exist. Have you registered?")
    }


}

