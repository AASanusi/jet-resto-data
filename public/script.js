console.log('client-side js working');

async function getRestaurantData() {

    try {

        const response = await fetch("/restaurantdata");

        if (response.ok) {
            const data = response
        } else {
            console.log("Response cannot be fetched")
        }

    } catch (error) {
        console.error(error.message)
    }
} 

getRestaurantData();