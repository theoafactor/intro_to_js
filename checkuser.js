const users = [ 
            {
                "firstname": "James",
                "lastname": "Joseph",
                "username": "jamesuser",
                "password": "password1"

            }, 

            {
                "firstname": "Jerry",
                "lastname": "Adams",
                "username": "jerryuser",
                "password": "password2"
            },

            {
                "firstname": "Mary",
                "lastname": "Matt",
                "username": "maryuser",
                "password": "password3"
            },

            {
                "firstname": "Andrew",
                "lastname": "Jacob",
                "username": "andrewuser",
                "password": "password4"
            }

];

let username = prompt("Please enter your username: ");
let password = prompt("Please enter your password: ")

// remove space
username = username.trim();
password = password.trim();

if(username.length == 0 || password.length == 0){
    alert("You need to enter username and password")
}else{

   let users_matched = [];
   for(let i = 0; i < users.length; i++){
        if(users[i]["username"] === username && users[i]["password"] === password){
            users_matched.push(users[i])
            break;
        }
   }

   if(users_matched.length > 0){
        alert("Welcome " + users_matched[0])
   }else{
        alert("Username was not found")
   }


}

