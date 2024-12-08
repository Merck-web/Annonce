export function useFetchData() {
    const fetchData = async (dataType) => {
        try {
            const { data } = await $fetch(`/api/main?type=${ dataType }`);
            return data;
        }
        catch (error) {
            console.error(error);
            return [];
        }
    };
    
    return {
        fetchData,
    };
}
