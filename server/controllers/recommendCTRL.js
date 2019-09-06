const recommendResults = [];
let index = 0;
const axios = require('axios');

module.exports = {
    getRecommend: (req, res) => {
        const {name} = req.params;

        axios.get(`https://api.rawg.io/api/games/${name}/suggested?page_size=5`).then(result => {
            const recommendObj = {
                id: index++,
                slug: result.data.results[0].slug, //Correct Syntax Confirmed
                title: result.data.results[0].name, //Correct Syntax Confirmed
                date: result.data.results[0].released, //Confirmed
                studio: result.data.results[0].developers, //Confirmed
                platforms: result.data.results[0].platforms,//Confirmed
                backgroundImage: result.data.results[0].background_image, //Confirmed
                genres: result.data.results[0].genres,
                tags: result.data.results[0].tags,
                clips: result.data.results[0].clip,
                shortScreenshots: result.data.results[0].short_screenshoots, 
                description: "",
                esrb: result.data.results[0].esrb_rating
            }

            axios.get(`https://api.rawg.io/api/games/${recommendObj.slug}/suggested?page_size=5`).then(reggie => {
                recommendObj["description"] = reggie.data.description;
                recommendResults.push(recommendObj)
                res.status(200).send(recommendResults);
            })    
        })
    }
}