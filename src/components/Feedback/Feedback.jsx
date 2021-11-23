import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setComments,
  setFeeling,
  setSupport,
  setUnderstanding,
} from "../../redux/actions/feedbackAction";
import Comment from "../Comment/Comment";
import Feelings from "../Feelings/Feelings";
import Review from "../Review/Review";
import Support from "../Support/Support";
import Understanding from "../Understanding/Understanding";

const Feedback = () => {
  const { next } = useSelector((state) => state.feedback);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name;
    if (name === "feeling") {
      dispatch(setFeeling(e.target.value));
    } else if (name === "understanding") {
      dispatch(setUnderstanding(e.target.value));
    } else if (name === "support") {
      dispatch(setSupport(e.target.value));
    } else {
      dispatch(setComments(e.target.value));
    }
  };

  switch (next) {
    case 1:
      return <Feelings handleChange={handleChange} />;
    case 2:
      return <Understanding handleChange={handleChange} />;
    case 3:
      return <Support handleChange={handleChange} />;
    case 4:
      return <Comment handleChange={handleChange} />;
    case 5:
      return <Review />;
  }
};

export default Feedback;
