import { company } from "utils/constants";

const freeNowServer = process.env.REACT_APP_SERVER;

export async function fetchFreeVehicles() {
    const response = await fetch(`${freeNowServer}/${company.freeNow}/vehicles`);

    try {
        if(response.ok){
            return await response.json();
        }else {
            return Promise.reject(response.statusText);
        }

    }catch(err) {
        return Promise.reject(err);
    }
   
}

export async function fetchShareVehicles() {
    const response = await fetch(`${freeNowServer}/${company.shareNow}/vehicles`);
    try {
        if(response.ok){
            return await response.json();
        }else {
            return Promise.reject(response.statusText);
        }

    }catch(err) {
        return Promise.reject(err);
    }
}