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
            // Extracts the array of restaurant from the data
            const restaurants = data['restaurants'];


            // Check if there are restaurants in the array
            if (restaurants.length > 0) {
                // Send the fetched data back to the client
                response.status(200).json(restaurants);
            } else {
                console.log('There are no results found');
                // Send an appropriate message back to the client
                response.status(404).send("No restaurants found for the provided postcode");
            }

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




