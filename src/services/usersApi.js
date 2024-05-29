const getUsersApi = () => {
    return fetch ('https://66505467ec9b4a4a60319fe4.mockapi.io/api/menusemanal/users')
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