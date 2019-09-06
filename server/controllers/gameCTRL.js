const collections = [];
const newFavoriteList = ["New Favorites"];
const recieveCtrl = require("./recieveCTRL")

module.exports = {
    add: (req, res) => {
        
        //Get id, title, release date, studio, platforms, background_image,
        //genres, short_screenshots, clip(maybe), and short_Description, then store in object
        const favoriteObj = {
            id: recieveCtrl.searchResults[index].id,
            slug: searchResults[index].slug, 
            title: recieveCtrl.searchResults[index].name, 
            date: recieveCtrl.searchResults[index].released, 
            studio: recieveCtrl.searchResults[index].developers, 
            platforms: recieveCtrl.searchResults[index].platforms,
            backgroundImage: recieveCtrl.searchResults[index].background_image, 
            genres: recieveCtrl.searchResults[index].genres,
            tags: recieveCtrl.searchResults[index].tags,
            clips: recieveCtrl.searchResults[index].clip,
            shortScreenshots: recieveCtrl.searchResults[index].short_screenshoots, 
            description: "",
            esrb: recieveCtrl.searchResults[index].esrb_rating

        }

        console.log(favoriteObj.slug);

        // newFavoriteList.push(favoriteObj)
        // res.status(200).send(newFavoriteList)
    },
    rename: (req, res) => {
        //Rename favorites list
        const {id} = req.params
        const {newName} = req.body
        const index = collections.findIndex(el => el.id === +id)
        const oldName = collections[index][0].shift()
       
        if (newName) {
            collections[index][0].unshift(newName);
        } else {
            collections[index][0].unshift(oldName);
        }

        res.statusw(200).send(collections);
    },
    send: () => {
        res.status(200).send(collections)
    },
    remove: (req, res) => {
        const {id} = req.params
        const index = collections.findIndex(el => el.id === +id)
        collections.splice(index, 1)
        res.status(200).send(collections)
    }
}