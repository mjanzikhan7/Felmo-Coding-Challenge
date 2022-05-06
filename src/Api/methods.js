
export const postWithFormData = (url, data) => {
    return fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data'
        },
        method: "POST",
        body: data
    }).then(response => response.json())
        .catch((error) => {
            console.error(error);
        });
}

export const getData = (url, token) => {
    return fetch(url,{
        method:"GET",
        headers:{'Authorization': 'Bearer '+token}
    })
        .then((response) => response.json())
        .catch((error) => {
            console.error(error);
        });
}