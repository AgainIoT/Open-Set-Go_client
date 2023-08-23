import styled from "styled-components";
import { COLOR } from "../styles/color";
import { Layout } from "../layout/Layout";
import MilestoneItem from "../components/common/MilestoneItem";
import { useState, useRef } from "react";

function MilestonePage() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (title, dueDate, description) => {
    const newItem = {
      title:"",
      dueDate:"",
      description:"",
      id: dataId.current,
    };

    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const handleAdd = () => {
    return;
  };

  return (
    <div className="MilestonePage">
      <button onClick={onCreate}>new milestone</button>
      <div>
        {data.map((it)=> (
          <MilestoneItem key={it.id} {...it}/>
        ))}
      </div>
    </div>
  );
}



export default MilestonePage;
