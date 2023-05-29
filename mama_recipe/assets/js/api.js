"use strict";

// 5f803b4f
// 46609b79f9c96ced0801cd324912853d


//* Main
// 3f53d4ef
// 7187a8522e5d918f3e04ca8363cbdcba

window.ACCESS_POINT = "https://api.edamam.com/api/recipes/v2";
const APP_ID = "5f803b4f";
const API_KEY = "46609b79f9c96ced0801cd324912853d";
const TYPE = "public";

export const fetchData = async function (queries, successCallback) {
    const query = queries?.join("&")
    .replace(/,/g, "=")
    .replace(/ /g, "%20")
    .replace(/\+/g, "%2B");

    const url = `${ACCESS_POINT}?app_id=${APP_ID}&app_key=${API_KEY}&type=${TYPE}${query ? `&${query}` : ""}`;

    const response = await fetch(url);

    if(response.ok){
        const data = await response.json();
        successCallback(data);
    }
};
