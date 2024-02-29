fetch("https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/EC4M7RF")
    .then(res => console.log(res))
    .catch(error => console.log(error))