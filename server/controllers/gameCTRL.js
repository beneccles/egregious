const collections = [];
const favoriteList = [];
const recieveCtrl = require("./recieveCTRL")

module.exports = {
    add: (req, res) => {
        // POST DATA
        favoriteList.push(req.body);
        res.status(200).send(favoriteList);
    },
    rename: (req, res) => {
        //Rename favorites list
        // PUT DATA
        const { id } = req.params
        const { newName } = req.body
        const index = favoriteList.findIndex(el => el.id === +id)
        const oldName = favoriteList[index].shift()

        if (newName) {
            favoriteList[index][0].unshift(newName);
        } else {
            favoriteList[index][0].unshift(oldName);
        }

        res.statusw(200).send(favoriteList);
    },
    send: () => {
        // GET DATA
        res.status(200).send(favoriteList)
    },
    remove: (req, res) => {
        // DELETE DATA
        const { id } = req.params
        const index = favoriteList.findIndex(el => el.id === +id)
        favoriteList.splice(index, 1)
        res.status(200).send(favoriteList)
    }
}