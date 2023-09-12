const Wordle = require('../models/wordle');

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
    } else if (!include) {
        res.status(400).json({message: "'include' missing from request"})
    } else if (!exclude && exclude !== '') {
        res.status(400).json({message: "'exclude' missing from request"})
    } else if (!char1Exclude && char1Exclude !== '') {
        res.status(400).json({message: "'char1Exclude' missing from request"})
    } else if (!char2Exclude && char2Exclude !== '') {
        res.status(400).json({message: "'char2Exclude' missing from request"})
    } else if (!char3Exclude && char3Exclude !== '') {
        res.status(400).json({message: "'char3Exclude' missing from request"})
    } else if (!char4Exclude && char4Exclude !== '') {
        res.status(400).json({message: "'char4Exclude' missing from request"})
    } else if (!char5Exclude && char5Exclude !== '') {
        res.status(400).json({message: "'char5Exclude' missing from request body"})
    };
    
    next();
};

module.exports = {
    validateReqShape
}