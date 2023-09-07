const db = require('../../dbconfig');

async function getWordById(id) {
    const word = await db('wordle').select('word').select('id').where('id', id)
    return word[0];
}

module.exports = {
    getWordById
}