import { AxiosError } from "axios";
import OpenWeatherError from "../ts/types/OpenWeatherError";

type ErrorEvent = {
  message: string;
};

const handleApiResponse = (error: AxiosError<OpenWeatherError>) => {
  if (error?.response?.data) {
    return { message: error.response?.data?.message };
  }
  return error;
};

const handle = (error: unknown): ErrorEvent => {
  if (error instanceof ErrorEvent) return error;
  let stringified;
  try {
    stringified = JSON.stringify(error);
  } catch {
    stringified = "[Unable to stringify the thrown error]";
  }
  const formattedError = new Error(
    `The error was thrown as is, not through an Error: ${stringified}`
  );
  return formattedError;
};

const ErroHandler = {
  handleApiResponse,
  handle,
};

Object.freeze(ErroHandler);
export default ErroHandler;
