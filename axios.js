const axios = require('axios');
axios.get("https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/EC4M7RF")
  .then(response => {
    const data = data.response
    const keys = Object.keys(data)
    console.log(response.data);
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

