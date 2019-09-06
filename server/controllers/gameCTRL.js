const collections = [];
const newFavoriteList = ["New Favorites"];
let index = 0;

module.exports = {
    add: (req, res) => {
        // Get id, title, release date, studio, platforms, background_image,
        // genres, short_screenshots, clip(maybe), and short_Description, then store in object
        const favoriteObj = {
            index: index++,
            id: req.body.id,
            title: req.body.name,
            date: req.body.released,
            studio: req.body.developers,
            platforms: req.body.platforms,
            background_image: [req.body.background_image, req.body.background_image_additional],
            genres: req.body.genres,
            tags: req.body.tags,
            clips: "", // For some reason, this only appears on the GET for recommended games and not for the originally searched for game.
            short_screenshots: [], // Only appears on RAWG recommendations GET
            description: req.body.description_raw,
            esrb: req.body.esrb_rating.name

        }

        newFavoriteList.push(favoriteObj)
        res.status(200).send(newFavoriteList)
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