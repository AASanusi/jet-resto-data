// async function fetchDataFromExternalURL() {
//     try {
//         const response = await axios.get("https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/EC4M7RF");
//     }
//     catch {
//         console.error('Error fetching data:', error.message)
//     }
// }

// fetchDataFromExternalURL();

axios 
.get("https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/EC4M7RF")
.then(res => console.log(res))
.catch(error => console.error(error)) 