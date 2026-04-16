// object singleton (constructor)

// const jsuser ={}

const jsuser = new Object()
jsuser.id=1;
jsuser.name="samay"
jsuser.isLoggedIn="false"

// console.log(jsuser)

const user = {
    email:"samay@gmail.com",
    fullname: {
        username :{
            name:"nikhil",
            lastname:"siddhapura"
        }
    }
}

console.log(user.fullname.username.lastname)