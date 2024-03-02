const axios = require('axios');
const express = require('express');
const app = express();

const port = 3000;

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});


axios.get("https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/")

    .then(response => {

        if (response.status === 200) {
            const data = response.data
            const keys = Object.keys(data)

            const secondKey = keys[1];
            const restaurants = data[secondKey];

            if (restaurants.length > 0) {

                for (let i = 0; i < 10; i++) {
                    console.log("Restaurant name: ", restaurants[i].name)
                    console.log("Cuisines: ", restaurants[i].cuisines)
                    console.log("Ratings: ", restaurants[i].rating.starRating)
                    console.log("Address: ", restaurants[i].address)
                    console.log("---------------------------------------------------------------------")
                }
            } else {
                console.log('There are no results found');
            }

        } else {
            console.log(`Failed to fetch data. Status: ${response.status}`)
        }

    })

    .catch(error => {
        console.error('Error fetching data:', error.message);
    });



