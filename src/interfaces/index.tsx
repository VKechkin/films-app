import { TFilm } from "@types";

export interface IProps {
  children?: React.ReactNode;
}

export interface IPropsCard extends IProps {
  film: TFilm;
  onChangeFavorites: (id: number) => void;
}

export interface IPropsUpdateRating extends IProps {
  onClose: () => void;
  isOpen: boolean;
  score: {
    script: number;
    actors: number;
    operator: number;
  };
}

export interface IPropsButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export interface IGetPost {
  id: number;
}

export interface IPropsButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export interface IData {
  data: TFilm[];
}
