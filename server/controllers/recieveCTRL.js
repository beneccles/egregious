const searchResults = []
let index = 0;
const axios = require('axios')

module.exports = {
    getResults: (req, res) => {

        axios.get(`https://api.rawg.io/api/games?page_size=10&${req.param.search}`).then(result => {
            for (let i = 0; i < 10; i++){
                const favoriteObj = {
                    id: index++,
                    slug: req.body.results[i].slug,
                    title: req.body.results[i].name,
                    date: req.body.results[i].released,
                    studio: req.body.results[i].developers,
                    platforms: req.body.results[i].platforms,
                    background_image: req.body.results[i].background_image,
                    genres: req.body.results[i].genres,
                    tags: req.body.results[i].tags,
                    clips: req.body.results[i].clip,
                    short_screenshots: req.body.results[i].short_screenshoots, 
                    description: req.body.description_raw,
                    esrb: req.body.esrb_rating.name
        
                }

                axios.get(`https://api.rawg.io/api/games/${favoriteObj.slug}`).then(result2 => {
                    favoriteObj.description = result2.data.description_raw
                })

                searchResults.push(results.data.results[i])
            };

            res.status(200).send(searchResults);

        });
    },
    deleteResults: (req,res) => {
        searchResults.splice(0,searchResults.length);
        res.status(200).send(searchResults);
    }

}
