export const urls = [
    'https://www.swapi.tech/api/people',
    'https://www.swapi.tech/api/planets',
    'https://www.swapi.tech/api/vehicles',
]

export	function getFetch(url){
    return fetch(url)
    .then(response =>{
        if(!response.ok){
            console.log("Response from GET is not ok")
            throw Error(response.statusText);
        }
        return response.json();
    })
    .catch(error => {
        console.log('Looks like there was a problem doing GET: \n', error);
        return false
    })
}

export const makeRequest = async (url) =>{
    const res = await getFetch(url)
    const data = await res
    return data
}
