import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
const Dairy = () => {
  const { id } = useParams();
  const nav = useNavigate();

  return (
    <div>
      <Header
        title={"yyyy-mm-dd기록"}
        leftChild={<Button text={"<뒤로가기"} />}
        rightChild={<Button text={"수정하기"} />}
      />
      <Viewer />
    </div>
  ); 
};
export default Dairy;
 