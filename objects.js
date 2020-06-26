function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
    this.login = function () {
        console.log(this.email, 'has logged in');
    }
}

var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@ninjas.com', 'Yoshi');

console.log(userOne);
userTwo.login();

/*
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login() {
        console.log(this.email, 'just logged in');
        return this;
    }
    logout() {
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore() {
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
    }
}

class Admin extends User {
    deleteUser(user) {
        users = users.filter(u => {
            return u.email != user.email;
        })
    }
}
*/

/*
var admin = new Admin('shaun@ninjas.com', 'Shaun');

var users = [userOne, userTwo, admin];

// admin.deleteUser(userTwo);
userOne.deleteUser(userTwo);

console.log(users);
*/