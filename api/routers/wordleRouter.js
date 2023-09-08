const express = require('express');
const router = express.Router();
const Words = require('../models/wordle')

/*
    Wordle POST Request
    
    EXAMPLE:
        {
            "positions": "AMBER",
            "include": "_____",
            "exclude": "",
            "char1Exclude": "",
            "char2Exclude": "",
            "char3Exclude": "D",
            "char4Exclude": "R",
            "char5Exclude": "E"
        }

        Requirements + Notes
        [1] Request body must be an object, values must be strings.
        
        [2] "positions + "include" should contain underscores where where there are  no characters. See "include" above for example where no letters are passed in.

        [3] All values in request body have max size limits. Exclude max size is 15 characters, all other values max size is 5 characters.
*/
router.post('/', (req, res) => {
    Words.getWords(req.body)
        .then((words) => {
            res.status(200).header('Access-Control-Allow-Origin', '*').json(words)
    })
    .catch((err) => {
        res.status(500).header('Access-Control-Allow-Origin', '*').json({message: 'words router broken'})
    })
})

/* 
    MVP request to prove db can be queried. Does not pertiain to Wordle functionality.
*/
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

/* Test request to confirm everything is working as expected */
router.get('/', (req, res) => {
    console.log('5 letter words')
    res.status(200).json({message: 'Wordle router reqdy to go'})
})

module.exports = router;