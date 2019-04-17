import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyDZ2a5XVdx41slTElC63F4QwX7YbvICNFc";

export default {
  search: function(query) {
    const url = BASEURL + query + APIKEY
    // console.log(url)
    return axios.get(url); 
  }
};
