import { requestInstance } from "@utils";

import { IData } from "@interfaces";

const getFilms = () => requestInstance.get<IData>("");

export const filmService = { getFilms };
