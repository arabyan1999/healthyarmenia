import axios from "axios";

// const headers = {
//     'Content-Type': 'text/xml; Charset=utf-8',
//     'Cache-Control': 'no-cache',
//     "Accept" : "application/json"
// }
const headers = {
    "Content-Type" : "application/json",
    "Accept" : "application/json"
};

const http = axios.create({
    // baseURL: 'https://api.tiensofficial.am/api',
    baseURL: 'http://localhost:8000/api',
    responseType: 'json',
    // withCredentials: true,
    headers,
});

export const getDiseasesApi = (lang) => {
    return http.get(`/get_diseases/${lang}`);
}

export const getProductsApi = (lang) => {
    return http.get(`/get_products/${lang}`);
}

export const getDiseaseByKeyApi = (key, lang) => {
    return http.get(`/get_disease?key=${key}&lang=${lang}`);
}

export const getProductByKeyApi = (key, lang) => {
    return http.get(`/get_product?key=${key}&lang=${lang}`);
}

export const createBookRequestApi = (data, lang) => {
    return http.post('/create_call_request', { data, lang })
}

export const createProductApi = (data) => {
    try {
        http.post("/add_product", data)
            .then(res => console.log(res))
            .catch(error => console.log(error))
    } catch (e) {
        throw e;
    }
}

export const createDiseaseApi = (data) => {
    console.log("data", data);
    try {
        http.post("/add_disease", data)
            .then(res => console.log(res))
            .catch(error => console.log(error))
    } catch (e) {
        console.log(e);
        throw e;
    }
}