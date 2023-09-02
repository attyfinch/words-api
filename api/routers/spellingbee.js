const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('spelling bee')
    res.status(200).json({message: 'Spelling Bee router reqdy to go'})
})

module.exports = router;