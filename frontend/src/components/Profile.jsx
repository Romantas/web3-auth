import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

export default function Profile() {
  const history = useHistory();
  const token = useSelector((s) => s.auth.token);
  useEffect(() => {
    !token && history.push("/");
  }, [history, token]);
  return <p>token: {token}</p>;
}
