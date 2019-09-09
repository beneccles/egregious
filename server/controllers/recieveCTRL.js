const searchResults = []
let index = 1;
const mockdata = require('./mockdata')
const axios = require('axios')
let connected = true;

module.exports = {
    //Prep getResults to wait for processing
    getResults: async (req, res) => {
        const { search } = req.params;
        let searchData = [];
        // Assign Mockdata as default
        let response = mockdata;

        // if we are connected, make the axios call and WAIT until the data returns.
        if (connected) {
            try {
                response = await axios.get(`https://api.rawg.io/api/games?page_size=10&search=${search}`)
            } catch(error) {
                console.log(error)
            }
        }

        const {results} = response.data
        // Parse results and pull the information we want. While in this version I'm only using some of the data I'm grabbing,
        // I may come back later to implement more of the features that were originally planned.
        for (let i = 0; i < results.length; i++) {
            const searchObj = {
                id: index++,
                slug: results[i].slug,
                title: results[i].name,
                date: results[i].released,
                studio: "",// Placeholder for studio
                platforms: results[i].platforms,
                backgroundImage: results[i].background_image,
                genres: results[i].genres,
                tags: results[i].tags,
                clips: results[i].clip,
                shortScreenshots: results[i].short_screenshoots,
                description: "",    // Placeholder for data from second API call
                esrb: results[i].esrb_rating
            }
            searchData.push(searchObj)
        }


        // Continue only once the second api call is resolved.
        // await axios.get(`https://api.rawg.io/api/games/${searchObj.slug}`).then(reggie => {
        //     console.log(reggie.data.developers)
        //     searchObj["description"] = reggie.data.description;
        //     searchObj['studio'] = reggie.data.developers;
        // })
        // Push object to array

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
    },
    connected: (req, res) => {
        connected = !connected
        console.log(`Services are ${connected}`)
        res.status(200).send(connected)
    }


}
