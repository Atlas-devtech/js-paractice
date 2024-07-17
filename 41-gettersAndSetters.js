class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}marsad`
    }

    set password(value){
        this._password = value
    }
}

const marsad = new User("m@marsad.ai", "abc")
console.log(marsad.email);