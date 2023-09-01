import React, { useState, useEffect } from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const commonStyles = {
  bgcolor: "background.paper",
  m: 1,
  borderColor: "text.secondary",
  // 사이즈 나중에 수정해야 함
  width: "115%",
  height: "45%",
};

export default function TemplateTitle(props) {
  const [data, setData] = useState([]);
  const url = "http://ec2-54-180-138-136.ap-northeast-2.compute.amazonaws.com:8080/file/pr";
  const params = {_id : "64f175c218eed0c9b21a2f2e"};

  useEffect(() => {
    let completed = false;

    async function get() {
      const result = await axios.get(url, {
        params
      });
      if (!completed) setData(result.data);
    }
    get();
    return() => {
      completed = true;
    };
  }, []);

  return (
    <div>
      {data.map((it)=>{
        return(
          <Box sx={{ ...commonStyles, borderBottom: 1 }} key = {it._id} ><Typography
            component="h1"
            id="PR-title"
            variant="h3" gutterBottom
            textColor="inherit"
            fontWeight="lg"
            m={2}
          >
            {it.title}
          </Typography>
          <Stack spacing={85} direction="row" m={2}>
            <Typography id="PR-desc" variant="h5" gutterBottom color="textSecondary">
              {it.repoName}
            </Typography>
            <Button
              variant="contained">
                        Use Template
            </Button>
          </Stack></Box>
        );
      })
      }
    </div>
  );
}
