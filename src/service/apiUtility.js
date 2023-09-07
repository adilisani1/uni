const fetchData = async (apiLink) => {
    try {
        const response = await fetch(apiLink);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("There was a problem fetching the data:", error);
        throw error;
    }
};

export default fetchData;
