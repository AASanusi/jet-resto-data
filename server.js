const axios = require('axios');
const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('public'));


app.get('/restaurantdata', async (request, response) => {

    try {
        // Get the value of the "postcode" query parameter from the request
        const postcode = request.query.postcode;

        if (!postcode) {
            // Return an error response if the postcode is not provided
            return response.status(400).send("Postcode parameter is required");
        }

        // Fetch restaurant data based on the provided postcode
        const getApi = await axios.get(`https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/${postcode}?limit=10`);

        if (getApi.status === 200) {
            const data = getApi.data
            
            const restaurants = data['restaurants'];

            if (restaurants.length > 0) {

                for (let i = 0; i < restaurants.length; i++) {
                    console.log("Restaurant name: ", restaurants[i].name);
                    console.log("Cuisines: ", restaurants[i].cuisines);
                    console.log("Ratings: ", restaurants[i].rating.starRating);
                    console.log("Address: ", restaurants[i].address);
                    console.log("---------------------------------------------------------------------");
                }
            } else {
                console.log('There are no results found');
            }

            // Send the fetched data back to the client
            response.status(200).json(restaurants);

        } else {
            console.log(`Failed to fetch data. Status: ${getApi.status}`)
        }

    } catch (error) {
        console.error('Error fetching data:', error.message);
    };


});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});




