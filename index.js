require("dotenv").config();
const server = require('./api/server')

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
    console.log(`Live on port ${PORT}. Let's go hunting.`)
})

server.get('/', (req, res) => {
    res.status(200).json({message: "Let's go hunting"})
})