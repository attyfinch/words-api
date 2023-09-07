const express = require('express');
const router = express.Router();

const Words = require('../models/wordle')


router.get('/:id', (req, res) => {

    const { id } = req.params;

    Words.getWordById(id)
        .then((word) => {
            res.status(200).header('Access-Control-Allow-Origin', '*').json(word)
        })
        .catch((err) => {
            res.status(500).header('Access-Control-Allow-Origin', '*').json({message: 'words router broken'})
        })
})

router.get('/', (req, res) => {
    console.log('5 letter words')
    res.status(200).json({message: 'Wordle router reqdy to go'})
})

module.exports = router;