import { Carusel } from "@ui";
import Modelx from "@images/modelx.png";
import Modelx_text from "@images/modelx_text.png";
import {Footer} from "@components"

const index = () => {
  const clas = "activeModelx"
  return (
    <>
      <section>
        <Carusel img={Modelx} text={Modelx_text} />
      </section>
      <Footer clas={clas}/>
    </>
  );
};

export default index;
