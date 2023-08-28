import * as React from "react";
import Typography from "@mui/material/Typography";
import dummyPRTemplate from "../../../dummy/dummyPRTemplate.json";

export default function TemplateBody() {
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
