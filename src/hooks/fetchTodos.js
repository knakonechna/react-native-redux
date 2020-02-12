import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTodos } from "../actions/getTodosList";

export default function() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
}
