import React from "react";

import { Menu } from "@components/Menu";

import { IProps } from "@interfaces";

import "./style.scss";

const Rating: React.FC<IProps> = () => {
  return (
    <div className="content-wrapper">
      <Menu />
      <div className="list-wrapper">Rating</div>
    </div>
  );
};

export { Rating };
