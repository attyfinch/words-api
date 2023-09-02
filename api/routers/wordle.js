const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('5 letter words')
    res.status(200).json({message: 'Wordle router reqdy to go'})
})

module.exports = router;