import React from "react";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import Button from "@mui/material/Button";

const MarkdownPreview = () => {
  const [value, setValue] = useState("");

  const handlesave = ()=> {
    //value 고대로 저장해서 server로 보내야함. 이건 추후에 백엔드랑 회의 후 정해야할 듯
    console.log(value);
  };

  return(
    <div>
      <MDEditor
        height={350}
        value={value}
        onChange={setValue}
      />
      <Button
        onClick={handlesave}
        variant="contained"
        color="success">
                저장
      </Button>
    </div>
  );
};

export default MarkdownPreview;
