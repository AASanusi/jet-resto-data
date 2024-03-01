const axios = require('axios');

axios.get("https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/EC4M7RF")

  .then(response => {

    const data = response.data
    const keys = Object.keys(data)

    if (keys) {
        const secondKey = keys[1];
        const restaurants = data[secondKey];
        
        

        for(let i=0; i < 9; i++){
            
        }
        
        // console.log("Restaurant name: ", restaurants[0].name)
        // console.log("Cuisines: ", restaurants[0].cuisines)
        // console.log("Ratings: ", restaurants[0].rating.starRating)
        // console.log("Address: ", restaurants[0].address)
        

      } else {
        console.log('The response does not contain any keys.');
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

