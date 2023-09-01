import React, { useState, useEffect } from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import dummyPRTemplate from "../../../dummy/dummyPRTemplate.json";

export default function TemplateBody() {
  const [data, setData] = useState([]);
  const url = "http://ec2-54-180-138-136.ap-northeast-2.compute.amazonaws.com:8080/file/pr/";
  const params = "64f175c218eed0c9b21a2f2e";

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
    <div>
      {dummyPRTemplate.dummyPRTemplate.map((it)=>{
        return(
          <div key = {it.content}>
            <Typography id="PR-desc" variant="h4" gutterBottom color="textSecondary" m={2}>
              {it.content}
            </Typography>
          </div>
        );
      })}</div>
  );
}
