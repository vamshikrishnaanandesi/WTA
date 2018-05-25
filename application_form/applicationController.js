var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var User = require('./application');
var Submit = require('./application.js');

// CREATES A NEW USER
router.post('/', function (req, res) {
    User.create({
            question_name : req.body.question_name,
            question_actual_answer : req.body.question_actual_answer,
        }, 
        function (err, user) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(user);
        });
});

// User answered question

router.post('/user_answered', function (req, res) {
    User.create({
            question_user_answered : req.body.question_user_answered,
        }, 
        function (err, ques) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(ques);
        });
});

//RETURNS ALL THE USERS IN THE DATABASE
// router.get('/', function (req, res) {
//     User.find({}, function (err, appl) {
//         if (err) return res.status(500).send("There was a problem finding the users.");
//         res.status(200).send(appl);
//     });
// });

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', function (req, res) {
    User.findById(req.params.id, function (err, appls) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!appls) return res.status(404).send("No user found.");
        res.status(200).send(appls);
    });
});

router.get('/', function (req, res) {
    Submit
    .find()
    .select("_id question_name question_actual_answer question_user_answered")
    .populate('user_details')
    .exec(function (err, subm) {
        if (err) return res.status(500).send("Tere was a problem finding the user.");
        if (!subm) return res.status(404).send("No user found");
        res.status(200).send(subm);
    });
});

module.exports = router;