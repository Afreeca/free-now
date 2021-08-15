import { company } from "utils/constants";

const freeNowServer = process.env.REACT_APP_SERVER;

export async function fetchFreeVehicles() {
    const response = await fetch(`${freeNowServer}/${company.freeNow}/vehicles`);
    return await response.json();
}

export async function fetchSharedVehicles() {
    const response = await fetch(`${freeNowServer}/${company.shareNow}/vehicles`);
    return await response.json();
}