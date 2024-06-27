import axios from "axios";

// 'Content-Type': 'text/xml; Charset=utf-8',
// 'Cache-Control': 'no-cache',
const headers = {
    "Content-Type" : "application/json",
    "Accept" : "application/json"
};

const http = axios.create({
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

export const getDiseaseByIdApi = (id) => {
    try {
        http.get(`/get_disease/${id}`)
        .then(function (response) {
            // handle success
            // console.log("disease id response", response);
        })
        .catch(function (error) {
            // handle error
            // console.log("disease id error", error);
        })
    } catch (e) {
        throw e;
    }
}

export const getProductByKeyApi = (key, lang) => {
    return http.get(`/get_product/${key}`);
}

export const createBookRequestApi = (data) => {
    return http.post('/create_call_request', data)
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