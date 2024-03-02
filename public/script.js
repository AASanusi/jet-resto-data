console.log('client-side js working');

async function getRestaurantData() {
    try {
        const response = await fetch("/restaurantdata");

        if (response.ok) {
            // Parse the response body as JSON
            const data = await response.json();
            console.log("Restaurant data:", data);
        } else {
            // Handle error when response status is not ok
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

    } catch (error) {
        // Handle other errors, such as network errors
        console.error("Error fetching data:", error.message);
    }
} 

getRestaurantData();