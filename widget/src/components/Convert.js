import React, { useEffect, useState } from "react";

const Convert = ({ language, text }) => {
  useEffect(() => {
    console.log("New language or text");
  }, [language, text]);

  return <div>Convert</div>;
};

export default Convert;
