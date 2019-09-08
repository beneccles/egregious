const searchResults = []
let index = 1;
const mockdata = require('./mockdata')

module.exports = {
    //Prep getResults to wait for processing
    getResults: async (req, res) => {
        const { search } = req.params;
        let retArray = [];
        let searchData = [];
        const {results} = mockdata;

    for (let i = 0; i < results.length; i++) {
        const searchObj = {
            id: index++,
            slug:               results[i].slug, 
            title:              results[i].name, 
            date:               results[i].released, 
            studio:             "",// Placeholder for studio
            platforms:          results[i].platforms,
            backgroundImage:    results[i].background_image, 
            genres:             results[i].genres,
            tags:               results[i].tags,
            clips:              results[i].clip,
            shortScreenshots:   results[i].short_screenshoots,
            description: "",    // Placeholder for data from second API call
            esrb:               results[i].esrb_rating
        }
        searchData.push(searchObj)
        // await axios.get(`https://api.rawg.io/api/games/${searchObj.slug}`).then(reggie => {
        //             console.log(reggie.data.developers)
        //             searchObj["description"] = reggie.data.description;
        //             searchObj['studio'] = reggie.data.developers;
        //             searchData.push(searchObj);
        //         })
    }
        // Let searchData = axios.get, but only once it has been resolved.
        // let searchData = await axios.get(`https://api.rawg.io/api/games?page_size=10&search=${req.params.search}`).then(async result => {
        //     const { results } = result.data
        //     for (let i = 0; i < results.length; i++) {
        //         console.log(results[i].developers)
        //         const searchObj = {
        //             id: index++,
        //             slug:               results[i].slug, 
        //             title:              results[i].name, 
        //             date:               results[i].released, 
        //             studio:             "",// Placeholder for studio
        //             platforms:          results[i].platforms,
        //             backgroundImage:    results[i].background_image, 
        //             genres:             results[i].genres,
        //             tags:               results[i].tags,
        //             clips:              results[i].clip,
        //             shortScreenshots:   results[i].short_screenshoots,
        //             description: "",    // Placeholder for data from second API call
        //             esrb:               results[i].esrb_rating
        //         }
        //         // Continue only once the second api call is resolved.
        //         await axios.get(`https://api.rawg.io/api/games/${searchObj.slug}`).then(reggie => {
        //             console.log(reggie.data.developers)
        //             searchObj["description"] = reggie.data.description;
        //             searchObj['studio'] = reggie.data.developers;
        //         })
        //         // Push object to array
        //         retArray.push(searchObj)
        //     }
            // Return array to be assigned to the value of searchData
            // return retArray;
        //})
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
