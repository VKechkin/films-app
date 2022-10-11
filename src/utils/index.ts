import axios from "axios";

import { IData } from "@interfaces";

const URL = process.env.REACT_APP_URL || "";

export const requestInstance = axios.create({
  baseURL: URL,
});

export const getUpdateData = (data: IData) => {
  const newData = data.data.map((element) => {
    return {
      ...element,
      favourites: false,
      score: {
        script: 1,
        actors: 1,
        operator: 1,
      },
    };
  });

  return newData;
};
