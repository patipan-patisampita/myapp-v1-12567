const db = require('../database/index')

const findPostAll = async () => {
    const [rows] = await db.query("SELECT * FROM posts")
    return rows
}

module.exports = { findPostAll }