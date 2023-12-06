const Wordle = require('../models/wordle');

/*
    Positions key/value middleware complete. 

    To-do:
    - Create middleware for key/values other than Positions
    - Write more descriptive error messages
    - Spell/grammar check
*/


// Deprecated, but keeping for referene until middleware complete
async function validateReqShape(req, res, next) {
    const { positions, 
            include, 
            exclude, 
            char1Exclude, 
            char2Exclude, 
            char3Exclude, 
            char4Exclude, 
            char5Exclude
        } = req.body

    if (!positions) {
        res.status(400).json({message: "'posititions' missing from request"})
    } 
    
    if (!include) {
        res.status(400).json({message: "'include' missing from request"})
    } 
    
    if (!exclude && exclude !== '') {
        res.status(400).json({message: "'exclude' missing from request"})
    }
    
    if (!char1Exclude && char1Exclude !== '') {
        res.status(400).json({message: "'char1Exclude' missing from request"})
    }
    
    if (!char2Exclude && char2Exclude !== '') {
        res.status(400).json({message: "'char2Exclude' missing from request"})
    } 
    
    if (!char3Exclude && char3Exclude !== '') {
        res.status(400).json({message: "'char3Exclude' missing from request"})
    } 
    
    if (!char4Exclude && char4Exclude !== '') {
        res.status(400).json({message: "'char4Exclude' missing from request"})
    }
    
    if (!char5Exclude && char5Exclude !== '') {
        res.status(400).json({message: "'char5Exclude' missing from request body"})
    };
    
    next();
};

// Deprecated, but keeping for referene until middleware complete
async function validateReqValueLength(req, res, next) {

    const { positions, 
        include, 
        exclude, 
        char1Exclude, 
        char2Exclude, 
        char3Exclude, 
        char4Exclude, 
        char5Exclude
    } = req.body


    if (positions.length < 5) {
        res.status(400).json({message: "'position' value length must be 5 characters long"})
    } else if (positions.length > 5) {
        res.status(400).json({message: "'position' value length is capped at 5 characters"})
    };

    if (include.length < 5) {
        res.status(400).json({message: "'position' value length must be 5 characters long"})
    } else if (include.length > 5) {
        res.status(400).json({message: "'position' value length is capped at 15 characters"})
    };


    next()
};

async function validatePositions(req, res, next) {
    let { positions } = req.body;
    
    // Validates inclusion of key/value
    if (!positions) {
        res.status(400).json({message: "'posititions' missing from request"})
    }
    
    // Validates length of value
    if (positions.length < 5) {
        res.status(400).json({message: "'position' value length must be 5 characters long"})
    } else if (positions.length > 5) {
        res.status(400).json({message: "'position' value length is capped at 5 characters"})
    };

    // Validates character types - only letters or underscores
    const englishLetterRegex = /^[A-Za-z]$/;
    for (let i = 0; i <= positions.length-1; i++) {
        if (englishLetterRegex.test(positions[i]) === false && positions[i] !== '_') {
            res.status(400).json({message: "invalid character"})
        };
    };

    // Converts lowercase to uppercase
    positions = positions.split('');
    for (let i = 0; i <= positions.length-1; i++) {
        if (positions[i].charCodeAt() >= 97 && positions[i].charCodeAt() <= 122) {
            positions[i] = positions[i].toUpperCase()
        };
    };

    req.body.positions = positions.join('')
    next()
};

module.exports = {
    validatePositions
}