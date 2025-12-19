const User = require('../models/users');

exports.getUsers = (req, res, next) => {

    User.getAll(users => {
        res.render('users-list', {
            pageTitle: 'List Users',
            path: '/admin/users',
            users: users
        });
    });

}

exports.getAddUsers = (req, res, next) => {
    res.render('user-add', {
        pageTitle: 'Add User',
        path: '/admin/users/add-user',
    });
}

exports.postAddUsers = (req, res, next) => {
    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;
    const user = new User(name ,email, phone);
    user.save();
    res.redirect('/admin/users');
}