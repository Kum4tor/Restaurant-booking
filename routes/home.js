const router = require('express').Router();
const verify = require('./verifyToken');
const booking = require('../model/booking');
const User = require("../model/User");

router.get('/home',verify, async (req,res) => {
    const user_token = req.user;
    const user_id = user_token._id;
    
    const user_details = await User.findOne({ _id: user_id });
    const name = user_details.name;
    res.send(name);
})

router.post('/book',verify, async (req, res) => {
    const user_token = req.user;
    const user_id = user_token._id;

    const book = new booking({
        user_id : user_id,
        table_type : req.body.table_type,
        session_time : req.body.session_time,
        no_of_seats : req.body.no_of_seats,
        Book_time : req.body.Book_time
    });
    try {
        const savedbook = await book.save();
        res.send(savedbook);
    }
    catch (err) {
        res.status(400).send(err);
    }
});  

router.get('/bdetails',verify, async (req,res) => {
    const user_token = req.user;
    const user_id = user_token._id;
    
    const bookingDetails = await booking.find({ user_id: user_id });
    // const date = bookingDetails.Book_time.getDate();
    // bookingDetails.Book_time = date
    if(bookingDetails) res.send(bookingDetails);
    else res.send("No details found");

})






module.exports = router;


