function User(username, id, password) {
    this.username = username
    this.id = id
    this.password = password

    return this
}

const UserOne = new User("mack walker", "mack@gmail.com", "06062003")
const UserTwo = new User("rahul kumar ", "rahul@gmail.com", "06062003")
console.log(UserTwo)

const User2 = {
    name: "Elon musk",
    databaseName: "teraoppp",
    getFunction: function () {
        console.log(`User Name is  : ${this.databaseName}`)
        // return this -> this is used to return the whole class or object in which "this" is included
    }

}

console.log(User2.getFunction())
// User2.getFunction() -> thsi thing will not return undefine