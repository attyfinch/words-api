const db = require('../../dbconfig');

/* 
    MVP request to prove db can be queried. Does not pertiain to Wordle functionality.
    This is primarily used for QA.
*/
async function getWordById(id) {
    const word = await db('wordle').select('word').select('id').where('id', id)
    return word[0];
};

/* 
    Wordle query
    - Req.body from POST request passed into below function.  
    - Returns Word count and word list.
    - Word list contains word and corresponding ranking score.
    - Word list is sorted based on word ranking in descending order
*/
async function getWords(filter) {
    const words = await db('wordle')
        .select('word').select('rank')
        .andWhere('char1', 'like', `%${filter.positions[0]}%`)
        .andWhere('char2', 'like', `%${filter.positions[1]}%`)
        .andWhere('char3', 'like', `%${filter.positions[2]}%`)
        .andWhere('char4', 'like', `%${filter.positions[3]}%`)
        .andWhere('char5', 'like', `%${filter.positions[4]}%`)
        .andWhere('word', 'like', `%${filter.include[0]}%`)
        .andWhere('word', 'like', `%${filter.include[1]}%`)
        .andWhere('word', 'like', `%${filter.include[2]}%`)
        .andWhere('word', 'like', `%${filter.include[3]}%`)
        .andWhere('word', 'like', `%${filter.include[4]}%`)
        .andWhereNot('word', 'like', `%${filter.exclude[0]}%`)
        .andWhereNot('word', 'like', `%${filter.exclude[1]}%`)
        .andWhereNot('word', 'like', `%${filter.exclude[2]}%`)
        .andWhereNot('word', 'like', `%${filter.exclude[3]}%`)
        .andWhereNot('word', 'like', `%${filter.exclude[4]}%`)
        .andWhereNot('word', 'like', `%${filter.exclude[5]}%`)
        .andWhereNot('word', 'like', `%${filter.exclude[6]}%`)
        .andWhereNot('word', 'like', `%${filter.exclude[7]}%`)
        .andWhereNot('word', 'like', `%${filter.exclude[8]}%`)
        .andWhereNot('word', 'like', `%${filter.exclude[9]}%`)
        .andWhereNot('word', 'like', `%${filter.exclude[10]}%`)
        .andWhereNot('word', 'like', `%${filter.exclude[11]}%`)
        .andWhereNot('word', 'like', `%${filter.exclude[12]}%`)
        .andWhereNot('word', 'like', `%${filter.exclude[13]}%`)
        .andWhereNot('word', 'like', `%${filter.exclude[14]}%`)
        .andWhereNot('char1', 'like', `%${filter.char1Exclude[0]}%`)
        .andWhereNot('char1', 'like', `%${filter.char1Exclude[1]}%`)
        .andWhereNot('char1', 'like', `%${filter.char1Exclude[2]}%`)
        .andWhereNot('char1', 'like', `%${filter.char1Exclude[3]}%`)
        .andWhereNot('char1', 'like', `%${filter.char1Exclude[4]}%`)
        .andWhereNot('char2', 'like', `%${filter.char2Exclude[0]}%`)
        .andWhereNot('char2', 'like', `%${filter.char2Exclude[1]}%`)
        .andWhereNot('char2', 'like', `%${filter.char2Exclude[2]}%`)
        .andWhereNot('char2', 'like', `%${filter.char2Exclude[3]}%`)
        .andWhereNot('char2', 'like', `%${filter.char2Exclude[4]}%`)
        .andWhereNot('char3', 'like', `%${filter.char3Exclude[0]}%`)
        .andWhereNot('char3', 'like', `%${filter.char3Exclude[1]}%`)
        .andWhereNot('char3', 'like', `%${filter.char3Exclude[2]}%`)
        .andWhereNot('char3', 'like', `%${filter.char3Exclude[3]}%`)
        .andWhereNot('char3', 'like', `%${filter.char3Exclude[4]}%`)
        .andWhereNot('char4', 'like', `%${filter.char4Exclude[0]}%`)
        .andWhereNot('char4', 'like', `%${filter.char4Exclude[1]}%`)
        .andWhereNot('char4', 'like', `%${filter.char4Exclude[2]}%`)
        .andWhereNot('char4', 'like', `%${filter.char4Exclude[3]}%`)
        .andWhereNot('char4', 'like', `%${filter.char4Exclude[4]}%`)
        .andWhereNot('char5', 'like', `%${filter.char5Exclude[0]}%`)
        .andWhereNot('char5', 'like', `%${filter.char5Exclude[1]}%`)
        .andWhereNot('char5', 'like', `%${filter.char5Exclude[2]}%`)
        .andWhereNot('char5', 'like', `%${filter.char5Exclude[3]}%`)
        .andWhereNot('char5', 'like', `%${filter.char5Exclude[4]}%`)

    let response = {
        wordsReturned: words.length,
        wordlist: words.sort((a,b) => b.rank-a.rank)
    }
    
    return response;
};



module.exports = {
    getWordById,
    getWords
}