import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { RootState } from "../../redux/store";

interface IProps {
  children: any;
  exact: boolean;
  path: string;
}

export const PrivateRoute: FC<IProps> = ({ children, ...rest }) => {
  const user: any = useSelector((state: RootState) => state.user);

  return !user.data.token ? (
    <Route {...rest}>{children}</Route>
  ) : (
    <Redirect to="/login" />
  );
};
