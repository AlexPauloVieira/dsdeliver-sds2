import axios from "axios";

const API_URL = "http://192.168.15.64:8080";
//const API_URL = "https://alex-dsdeliver-sds2.herokuapp.com";

export function fetchOrders() {
  return axios(`${API_URL}/orders`);
}
