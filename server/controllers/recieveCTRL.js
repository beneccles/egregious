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
            

            // Array member 2
            if (result.data.results.length >= 2) {
            const searchObj2 = {
                id: index++,
                slug: result.data.results[1].slug, //Correct Syntax Confirmed
                title: result.data.results[1].name, //Correct Syntax Confirmed
                date: result.data.results[1].released, //Confirmed
                studio: result.data.results[1].developers, //Confirmed
                platforms: result.data.results[1].platforms,//Confirmed
                backgroundImage: result.data.results[1].background_image, //Confirmed
                genres: result.data.results[1].genres,
                tags: result.data.results[1].tags,
                clips: result.data.results[1].clip,
                shortScreenshots: result.data.results[1].short_screenshoots, 
                description: "",
                esrb: result.data.results[1].esrb_rating
    
            }

            axios.get(`https://api.rawg.io/api/games/${searchObj2.slug}`).then(reggie => {
                searchObj2["description"] = reggie.data.description;
                searchResults.push(searchObj2)
            })    
            }

            // Array member 3
            if (result.data.results.length >= 3) {
                const searchObj3 = {
                    id: index++,
                    slug: result.data.results[2].slug, //Correct Syntax Confirmed
                    title: result.data.results[2].name, //Correct Syntax Confirmed
                    date: result.data.results[2].released, //Confirmed
                    studio: result.data.results[2].developers, //Confirmed
                    platforms: result.data.results[2].platforms,//Confirmed
                    backgroundImage: result.data.results[2].background_image, //Confirmed
                    genres: result.data.results[2].genres,
                    tags: result.data.results[2].tags,
                    clips: result.data.results[2].clip,
                    shortScreenshots: result.data.results[2].short_screenshoots, 
                    description: "",
                    esrb: result.data.results[2].esrb_rating
        
                }
    
                axios.get(`https://api.rawg.io/api/games/${searchObj3.slug}`).then(reggie => {
                    searchObj3["description"] = reggie.data.description;
                    searchResults.push(searchObj3)
                })    
                }

                // Array member 4
            if (result.data.results.length >= 4) {
                const searchObj3 = {
                    id: index++,
                    slug: result.data.results[3].slug, //Correct Syntax Confirmed
                    title: result.data.results[3].name, //Correct Syntax Confirmed
                    date: result.data.results[3].released, //Confirmed
                    studio: result.data.results[3].developers, //Confirmed
                    platforms: result.data.results[3].platforms,//Confirmed
                    backgroundImage: result.data.results[3].background_image, //Confirmed
                    genres: result.data.results[3].genres,
                    tags: result.data.results[3].tags,
                    clips: result.data.results[3].clip,
                    shortScreenshots: result.data.results[3].short_screenshoots, 
                    description: "",
                    esrb: result.data.results[3].esrb_rating
        
                }
    
                axios.get(`https://api.rawg.io/api/games/${searchObj3.slug}`).then(reggie => {
                    searchObj3["description"] = reggie.data.description;
                    searchResults.push(searchObj3)
                })    
                }

                // Array member 5
            if (result.data.results.length <= 5) {
                const searchObj4 = {
                    id: index++,
                    slug: result.data.results[4].slug, //Correct Syntax Confirmed
                    title: result.data.results[4].name, //Correct Syntax Confirmed
                    date: result.data.results[4].released, //Confirmed
                    studio: result.data.results[4].developers, //Confirmed
                    platforms: result.data.results[4].platforms,//Confirmed
                    backgroundImage: result.data.results[4].background_image, //Confirmed
                    genres: result.data.results[4].genres,
                    tags: result.data.results[4].tags,
                    clips: result.data.results[4].clip,
                    shortScreenshots: result.data.results[4].short_screenshoots, 
                    description: "",
                    esrb: result.data.results[4].esrb_rating
        
                }
    
                axios.get(`https://api.rawg.io/api/games/${searchObj4.slug}`).then(reggie => {
                    searchObj4["description"] = reggie.data.description;
                    searchResults.push(searchObj4)
                })    
                }

            axios.get(`https://api.rawg.io/api/games/${searchObj.slug}`).then(reggie => {
                searchObj["description"] = reggie.data.description;
                searchResults.push(searchObj)
                res.status(200).send(searchResults);
            })   

        })
        console.log
    },
    deleteResults: (req,res) => {
        console.log(searchResults);
        searchResults.splice(0,searchResults.length);
        res.status(200).send(searchResults);
    },
    searchResults

}
