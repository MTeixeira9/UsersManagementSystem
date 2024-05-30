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
        body: user,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        method: "POST",
        mode: 'no-cors'
    })
    return res.json()
}