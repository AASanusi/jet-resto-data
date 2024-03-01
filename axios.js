const axios = require('axios');
axios.get("https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/EC4M7RF")
  .then(response => {
    const data = data.response
    const keys = Object.keys(data)
    if (keys.length > 0) {
        const firstKey = keys[0];
        const firstObject = data[firstKey];
       
        console.log(`First key: ${firstKey}, Value:`, firstObject);
      } else {
        console.log('The response does not contain any keys.');
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
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

