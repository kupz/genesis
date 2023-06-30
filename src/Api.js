export const imageURL = "http://api.genesis.wazzhop.com/storage/uploads/"
export const url = "http://api.genesis.wazzhop.com/api/"
// export const url = "http://localhost:8000/api/"
// export const imageURL = "http://localhost:8000/storage/uploads/"



export const guestIndex = async () => {
    let response = await fetch(`${url}guests`, {
        headers: {
            Accept: 'application/json'
        },
        method: 'GET'
    })
    if(response.ok){
        return await response.json()
    }
    else{
        console.error("Something went wrong at fetching the guest list.")
    }
    return await response.json()
}

export const guestStore = async (form) => {
    let response = await fetch(`${url}guests`,{
        method: "POST",
        headers: {
            Accept: 'application/json'
        },
        body: form
    })
    if(response.ok){
        return await response.json()
    }
    else{
        console.error("Something went wrong at creating a guest.")
    }
    return await response.json()
}