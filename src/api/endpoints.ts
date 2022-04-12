import { IBusinessUser, ICreateUserRequest, ILoginUserRequest } from "../interfaces/IUser";
import { GET, POST } from "../lib/client";
import { IResponseObject } from "./response";


const url = "https://mu48dewi5j.execute-api.us-east-1.amazonaws.com/dev";

export const Api = {
  Base: url,
  POST_RegisterUser: async (
    payload: ICreateUserRequest
  ): Promise<IResponseObject<IBusinessUser>> => {
    const response = await POST(
      `${url}/users/register/legacy/individual`,
      payload
    );
    return response.data;
  },
  POST_LoginBusinessUser: async (
    payload: ILoginUserRequest
  ): Promise<IResponseObject<IBusinessUser>> => {
    const response = await POST(
      `${url}/user/login`,
      payload
    );
    return response.data;
  },
  GET_BusinessUser: async (payload: string): Promise<IResponseObject<IBusinessUser>> => {
    const response = await GET(`${url}/users/${payload}`);
    console.log("RESPONSE", payload);
    return response.data;
  }
 
};
