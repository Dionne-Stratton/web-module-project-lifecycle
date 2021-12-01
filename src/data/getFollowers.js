import axios from 'axios';

const getFollowers  = (user)=> {
    return axios.get(`https://api.github.com/users/${user}/followers`)
        .then(res => {
            return(res.data);
        })
}

export default getFollowers;