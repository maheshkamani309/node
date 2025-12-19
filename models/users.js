const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'users.json'
);

const getUsersFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            return cb([]);
        } else {
            if(fileContent == ''){
                return cb([]);
            }
            cb(JSON.parse(fileContent));
        }
    });
};


module.exports = class User {
    constructor(name, email, phone){
        this.name   = name;
        this.email  = email;
        this.phone  = phone;
    }

    save() {
        getUsersFromFile( users => {
            users.push(this);
            fs.writeFile(p, JSON.stringify(users), (err) => {
                console.log(err);
            });
        });
    }

    static getAll(callBack){
        getUsersFromFile(callBack);
    }

}