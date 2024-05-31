const getUsersApi = () => {
    return fetch ('https://66505580ec9b4a4a6031a3aa.mockapi.io/users/users')
    .then((response) => response.json())
    .then((users)=> {
        const usersInfo = users.map((item)=>{
            return{
                name: item.name,
                email: item.email,
                username: item.username,
                id: item.id
            };
        });
        return usersInfo;
    });
};

export default getUsersApi;