const recommendResults = [];
let index = 0;
const axios = require('axios');

module.exports = {
    getRecommend: async (req, res) => {
        const { name } = req.params;
        let retArray = []

        let searchData = await axios.get(`https://api.rawg.io/api/games/${name}/suggested?page_size=5`).then(async result => {
            const { results } = result.data

            for (let i = 0; i < results.length; i++) {
                const recommendObj = {
                    id: index++,
                    slug:               results[i].slug, 
                    title:              results[i].name, 
                    date:               results[i].released, 
                    studio:             results[i].developers, 
                    platforms:          results[i].platforms,
                    backgroundImage:    results[i].background_image, 
                    genres:             results[i].genres,
                    tags:               results[i].tags,
                    clips:              results[i].clip,
                    shortScreenshots:   results[i].short_screenshoots,
                    description: "",    // Placeholder for data from second API call
                    esrb:               results[i].esrb_rating
                }

                await axios.get(`https://api.rawg.io/api/games/${recommendObj.slug}`).then(reggie => {
                    recommendObj["description"] = reggie.data.description;

                })

                retArray.push(recommendObj)

            }
            return retArray;


        })
        res.status(200).send(searchData);
    },
    deleteRecommend: (req, res) => {
        let { deleteIndex } = req.param;

        recommendResults.splice(deleteIndex, recommendResults.length)
        res.status(200).send(recommendResults);
    }
}