import React, { useState, useEffect } from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import { prTemplateState } from "../../../recoil/templateState";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";

const BodyBox = styled.div`
  display: flex;
  max-height: 52rem;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

export default function TemplateBody() {
  const [data, setData] = useState([]);
  const url = process.env.REACT_APP_SERVER_URL+"/file/readme/";
  const params = "64ed835fc7efe914a8d14a51";
  const [selectValue, setSelectValue] = useRecoilState(prTemplateState);

  useEffect(() => {
    let completed = false;

    async function get() {
      const result = await axios.get(url + params);
      if (!completed) setData(result.data);
      console.log(result);
    }
    get();
    return() => {
      completed = true;
    };
  }, []);

  return (
    <BodyBox><Typography id="PR-desc" variant="h4" gutterBottom color="textSecondary" m={2} >
      {selectValue.content}
    </Typography></BodyBox>
  );
}
