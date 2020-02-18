import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategories } from "../actions/fetchCategories";

export default function() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
}
