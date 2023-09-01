function checkUsernameAndPassword(settings = "on"){

    const username = prompt("Enter username: ").trim()
    const password = prompt("Enter password: ").trim()

    if(username.length === 0 || password.length === 0){
        if(settings === "on"){
            checkUsernameAndPassword()
        }else{

            alert("Username or password not entered")

        }
    }else{

        alert("Welcome")

    }
    
}


checkUsernameAndPassword("on")






