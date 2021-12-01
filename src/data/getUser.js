import axios from 'axios';

const getUser  = (user)=> {
    return axios.get(`https://api.github.com/users/${user}`)
        .then(res => {
            return(res.data);
        })
}

export default getUser;