import React from "react";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";

const MarkdownPreview = () => {
    const [value, setValue] = useState();

    return(
        <div className="markarea">
                <MDEditor
                height={350}
                value={value}
                onChange={setValue}
                />
        </div>
    );
}

export default MarkdownPreview;
