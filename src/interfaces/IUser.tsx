export interface ICreateUserRequest {
  name: string,
  surname: string,
  password: string,
  email: string,
  verified: boolean,
  userType: UserType
}

export enum UserType {
  business,
  driver
}

export interface ICreateBusinessUserRequest extends ICreateUserRequest {
  businessName: string
}

export interface IUser extends ICreateUserRequest {
  salt: string,
  otp: string,
  _id: string
}


export interface IBusinessUser extends IUser {
  businessName: string
}



export interface IDriver extends IUser {

}

export interface ILoginUserRequest {
  email: string,
  password: string
}