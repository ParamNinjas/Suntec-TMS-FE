import { Diagnostic } from "../lib/logger";

export interface IResponseObject<T> {
  error: boolean;
  message?: string;
  result?: T;
}



