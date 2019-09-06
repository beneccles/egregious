const searchResults = []
let index = 1;
const axios = require('axios')

module.exports = {
    getResults: (req, res) => {

        const {search} = req.params;
        
        axios.get(`https://api.rawg.io/api/games?page_size=10&search=${req.params.search}`).then(result => {
            const searchObj = {
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

            axios.get(`https://api.rawg.io/api/games/${searchObj.slug}`).then(reggie => {
                searchObj["description"] = reggie.data.description;
                searchResults.push(searchObj)
                res.status(200).send(searchResults);
            })    

        })
        console.log(searchResults.length)
    },
    deleteResults: (req,res) => {
        console.log(searchResults);
        searchResults.splice(0,searchResults.length);
        res.status(200).send(searchResults);
    },
    searchResults

}
