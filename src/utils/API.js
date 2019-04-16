import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "inauthor:keyes&key=AIzaSyDZ2a5XVdx41slTElC63F4QwX7YbvICNFc";

// const BASEURL = "https://www.omdbapi.com/?t=";
// const APIKEY = "&apikey=trilogy";

export default {
  
  search: function(query) { 
    return axios.get(BASEURL + query + APIKEY);  
     
  }
};
