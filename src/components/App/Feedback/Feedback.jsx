import React, { useState } from "react";
import Feelings from "../../Feelings/Feelings";

const Feedback = () => {
  const [feedbackData, setFeedbackData] = useState({
    feelings: "",
    understanding: "",
    support: "",
    comments: "",
  });

  const [step, setStep] = useState(1)

  const handleChange = e => {
      console.log(e.target.value)
      setFeedbackData({...feedbackData, [e.target.name]: e.target.value})
  }


  return (
    <div>
      <Feelings handleChange={handleChange} />
    </div>
  );
};

export default Feedback;
