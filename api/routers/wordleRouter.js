const express = require('express');
const router = express.Router();
const Wordle = require('../models/wordle')
const { validateReqShape } = require('../middleware/wordleMiddleware')

/*
    Wordle POST Request
    
    EXAMPLE:
        {
            "positions": "AMBER",
            "include": "_____",
            "exclude": "____",
            "char1Exclude": "",
            "char2Exclude": "",
            "char3Exclude": "____",
            "char4Exclude": "R",
            "char5Exclude": "E"
        }

        Requirements + Notes
        [1] Request body must be an object, values must be strings.
        
        [2] "positions + "include" should contain underscores where where there are  no characters. See "include" above for example where no letters are passed in.

        [3] All values in request body have max size limits. Exclude max size is 15 characters, all other values max size is 5 characters.
*/
router.post('/', validateReqShape, (req, res, next) => {
    Wordle.getWords(req.body)
        .then((words) => {
            res.status(200).header('Access-Control-Allow-Origin', '*').json(words)
    })
    .catch(next)
});

/* 
    MVP request testing whether db can be queried or not.
    
    Does not pertiain to Wordle functionality.
*/
router.get('/:id', (req, res, next) => {

    const { id } = req.params;

    Wordle.getWordById(id)
        .then((word) => {
            if (word !== undefined) {
                res.status(200).header('Access-Control-Allow-Origin', '*').json(word)
            } else {
                res.status(404).header('Access-Control-Allow-Origin', '*').json({
                    message: `Word ID ${id} does not exist`
                })
            }
        })
        .catch(next);
});

/* Test request to confirm server is working as expected */
router.get('/', (req, res, next) => {
    try {
        res.status(200).json({message: 'Wordle router reqdy to go'})
    } catch (err) {
        next(err)
    }
});

router.use((error, req, res, next) => {
    res.status(error.status || 500).json({
      message: error.message,
      customMessage: 'There is a problem with the Wordle API Router'
    })
});


module.exports = router;