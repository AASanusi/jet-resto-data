fetch("https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/EC4M7RF")
    .then(response => {
        if(response.ok) {
            const data = response.json()
        } else {
            throw new Error("Data could not be fetched")
        }
    })
    .then(data => console.log('Response data', data))
    .catch(error => console.log(error))