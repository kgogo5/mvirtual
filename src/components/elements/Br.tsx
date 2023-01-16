import { useRecoilValue } from "recoil";
import { mobile } from "../../atom";

const Br = () => {
  const isMobile = useRecoilValue(mobile);

  return isMobile ? <> </> : <br />;
};

export default Br;
