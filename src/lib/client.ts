

import { Diagnostic } from "./logger";


const axios = require("axios").default;


// console.log(token);
// let header: any;
// if (!token) {
//   header = {
//     Authorization: `Anonymous`,
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Headers": "X-Requested-With",
//   };
// } else {
//   header = {
//     Authorization: `Bearer ${token}`,
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Headers": "X-Requested-With",
//   };
// }

const   header = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "X-Requested-With",
    };

export async function GET(endPoint: string) {
  try {
    const result = await axios.get(`${endPoint}`, { headers: header });
    return result;
  } catch (error) {
    console.log(
      `[API ERROR : Method: GET; Endpoint: ${endPoint}]`,
      error.toJSON()
    );
    return error.response;
  }
}

export async function POST(endPoint: string, payload: Object) {
  try {
  
    const result = await axios.post(`${endPoint}`, payload, {
      headers: header,
    });
    Diagnostic("SUCCESS ON POST, returning", result);
    return result;
  } catch (error) {
    console.log(`[API ERROR : Method: POST; Endpoint: ${endPoint}]`, error);
    Diagnostic("ERROR ON POST, returning", error);
    return error.response;
  }
}

export function DELETE(endPoint: string, params: Object) {
  axios
    .delete(`${endPoint}`, { headers: header, params: params })
    .then((result: any) => {
      return result;
    })
    .catch((error: any) => {
      return error;
    });
}

export function PUT(endPoint: string, params: Object) {
  let HEADER = {
    Authorization: `Anonymous`,
    "Access-Control-Allow-Origin": "*",
  };
  axios
    .put(`${endPoint}`, { headers: HEADER, params: params })
    .then((result: any) => {
      return result;
    })
    .catch((error: any) => {
      return error;
    });
}
