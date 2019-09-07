const collections = [];
const newFavoriteList = ["New Favorites"];
const recieveCtrl = require("./recieveCTRL")

module.exports = {
    add: (req, res) => {
        let {favoriteObj} = req.body;
        newFavoriteList.push(req.body);
        res.status(200).send(newFavoriteList);
    },
    rename: (req, res) => {
        //Rename favorites list
        const { id } = req.params
        const { newName } = req.body
        const index = newFavoriteList.findIndex(el => el.id === +id)
        const oldName = newFavoriteList[index].shift()

        if (newName) {
            newFavoriteList[index][0].unshift(newName);
        } else {
            newFavoriteList[index][0].unshift(oldName);
        }

        res.statusw(200).send(newFavoriteList);
    },
    send: () => {
        res.status(200).send(newFavoriteList)
    },
    remove: (req, res) => {
        const { id } = req.params
        const index = newFavoriteList.findIndex(el => el.id === +id)
        newFavoriteList.splice(index, 1)
        res.status(200).send(newFavoriteList)
    }
}