import { Header } from "../layout/Header";
import { SelectType } from "../components/common/SelectType";
import Footer from "../components/main/Footer";

function SelectTypePage() {
  return (
    <div>
      <Header burger={true} pages={[]} settings={["Logout"]} />
      <SelectType />
      <Footer />
    </div>
  );
}

export default SelectTypePage;
