const searchResults = []
let index = 1;
const axios = require('axios')

module.exports = {
    //Prep getResults to wait for processing
    getResults: async (req, res) => {
        const { search } = req.params;
        let retArray = [];

        // Let searchData = axios.get, but only once it has been resolved.
        let searchData = await axios.get(`https://api.rawg.io/api/games?page_size=10&search=${req.params.search}`).then(async result => {
            const { results } = result.data

            for (let i = 0; i < results.length; i++) {

                const searchObj = {
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

                // Continue only once the second api call is resolved.
                await axios.get(`https://api.rawg.io/api/games/${searchObj.slug}`).then(reggie => {
                    searchObj["description"] = reggie.data.description;
                    
                })

                // Push object to array
                retArray.push(searchObj)

            }

            // Return array to be assigned to the value of searchData
            return retArray;



        })

        // Send out searchData when the endpoint is called.
        res.status(200).send(searchData);
    },
    deleteResults: (req, res) => {
        console.log(searchResults);
        searchResults.splice(0, searchResults.length);
        res.status(200).send(searchResults);
    },
    returnResults: () => {
        return searchResults;
    }
    

}
