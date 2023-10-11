import { useNavigate } from "react-router-dom";
import { Header } from "../layout/Header";
import { SelectType } from "../components/common/SelectType";
import Footer from "../components/main/Footer";

function SelectTypePage(){
  return(
    <><Header burger={true} pages={["Steps"]} settings={["Logout"]} />
      <SelectType />
      <Footer /></>
  );
}

export default SelectTypePage;