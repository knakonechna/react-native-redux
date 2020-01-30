import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../actions/getTodosList";

export default function() {
  const dispatch = useDispatch();
  const { todos, isLoading } = useSelector(state => state.fetchToDos);
  const [ todoData, setData] = useState(todos);

  useEffect(() => {
      dispatch(fetchTodos()).then(data => setData(data.payload))
  }, []);

  return { todoData, isLoading };
}
