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



export const getDiseaseApi = () => {
    try {
        http.get(`/get_translations/disease`)
            .then((res) => console.log("disease resp ", res))
            .catch((e) => console.log("disease e", e))
    } catch (e) {
        throw e;
    }
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

export const getProductByIdApi = (id) => {
    try {
        http.get(`/get_product/${id}`)
            .then((res) => {
                // handle success
                // console.log("product res", res);
            })
            .catch((e) => {
                // handle error
                // console.log("product e", e);
            })
    } catch (e) {
        throw e;
    }
}

export const getProductsApi = () => {
    try {
        axios.get('/products')
            .then(res => console.log("product res ", res))
            .catch(error => {
                console.error("products error ", error);
            });
    } catch (e) {
        throw e;
    }
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