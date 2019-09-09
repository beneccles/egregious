const collections = [];
let favoriteList = [];
const recieveCtrl = require("./recieveCTRL")

module.exports = {
    add: (req, res) => {
        // POST DATA
        favoriteList.push(req.body);
        res.status(200).send(favoriteList);
    },
    removeSingle: (req, res) => {
        // Remove a single item and update
        // PUT DATA
        const {id} = req.params;

        // Find the game id in the array, then compare against id.
        const index = favoriteList.findIndex(game => game.id === +id)
        favoriteList.splice(index, 1)
        res.status(200).send(favoriteList);
    },
    send: () => {
        // GET DATA
        res.status(200).send(favoriteList)
    },
    remove: (req, res) => {
        // DELETE DATA
        favoriteList = [];
        res.status(200).send(favoriteList)
    }
}