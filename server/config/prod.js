// module.exports = {
//     secret: process.env.SECRET,
//     mongoURI: process.env.MONGO_URI
// }

module.exports = {
    secret: 'SUPERSECRETPW7463733',
    postgresql: `${process.env.DATABASE_URL}?ssl=true`
}