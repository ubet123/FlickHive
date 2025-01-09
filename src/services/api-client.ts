import axios from "axios";

export default axios.create({
    baseURL:'https://api.themoviedb.org/3',
    params:{
        api_key:"13688332598c340abd73366a7cd6f6d7",
    },

});