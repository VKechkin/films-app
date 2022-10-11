import React from "react";

import { Card } from "@components/Card";

import { IProps } from "@interfaces";

import { setList } from "@store/filmSlice";

import { useAppDispatch, useAppSelector } from "@hooks";

import "./style.scss";

const FilmList: React.FC<IProps> = () => {
  const dispatch = useAppDispatch();

  const films = useAppSelector((state) => state.film.list);

  const handleChangeFavorites = (id: number) => {
    const newList = films.map((item) => {
      if (item.id === id) {
        return {
          id: item.id,
          name: item.name,
          description: item.description,
          src: item.src,
          score: item.score,
          favourites: !item.favourites,
        };
      } else {
        return item;
      }
    });
    dispatch(setList(newList));
  };

  return (
    <div className="list-wrapper">
      {films.map((item) => (
        <Card
          film={item}
          key={item.id}
          onChangeFavorites={handleChangeFavorites}
        />
      ))}
    </div>
  );
};

export { FilmList };
