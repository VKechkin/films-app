import React, { useEffect } from "react";

import { Menu } from "@components/Menu";
import { FilmList } from "@components/FilmList";

import { useAppDispatch } from "@hooks";

import { getFilmsThunk } from "@store/filmSlice";

import { IProps } from "@interfaces";

import "./style.scss";

const Main: React.FC<IProps> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFilmsThunk());
  }, []);

  return (
    <div className="content-wrapper">
      <Menu />
      <FilmList />
    </div>
  );
};

export { Main };
