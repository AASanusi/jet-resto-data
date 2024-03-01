// const axios = require('axios');

// axios.get("https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/EC4M7RF")

//     .then(response => {

//         const data = response.data
//         const keys = Object.keys(data)

//         if (keys) {
//             const secondKey = keys[1];
//             const restaurants = data[secondKey];



//             for (let i = 0; i < 10; i++) {
//                 console.log("Restaurant name: ", restaurants[i].name)
//                 console.log("Cuisines: ", restaurants[i].cuisines)
//                 console.log("Ratings: ", restaurants[i].rating.starRating)
//                 console.log("Address: ", restaurants[i].address)
//                 console.log("---------------------------------------------------------------------")
//             }


//         } else {
//             console.log('The response does not contain any keys.');
//         }
//     })

//     .catch(error => {
//         console.error('Error fetching data:', error);
//     });


const axios = require('axios');

axios.get("https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/lll")

    .then(response => {

        if (response.status === 200) {

            const data = response.data
            const keys = Object.keys(data)
            
            const secondKey = keys[1];
            const restaurants = data[secondKey];
            console.log(restaurants)

            for (let i = 0; i < 10; i++) {
                console.log("Restaurant name: ", restaurants[i].name)
                console.log("Cuisines: ", restaurants[i].cuisines)
                console.log("Ratings: ", restaurants[i].rating.starRating)
                console.log("Address: ", restaurants[i].address)
                console.log("---------------------------------------------------------------------")
            }
        } else {
            console.log('Error:', response.status);
        }
    })

    .catch(error => {
        console.error('Error fetching data:', error);
    });




// async function fetchDataFromExternalURL() {
//     try {
//         const response = await axios.get("https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/EC4M7RF");
//     }
//     catch {
//         console.error('Error fetching data:', error.message)
//     }
// }

// fetchDataFromExternalURL();

