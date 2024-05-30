export const getUsers = async () => {
    const res = await fetch('/api/Users', {
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        method: "GET",
        mode: 'no-cors'
    })
    return res.json()
}

export const addUser = async (user) => {
    const res = await fetch('/api/Users', {
        body: JSON.stringify(user),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': '*/*',
            'Content-Type': 'application/json'
        },
        method: "POST"
    })
    return res.json()
}