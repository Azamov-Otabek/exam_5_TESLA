import { Carusel } from "@ui";
import Model3 from "@images/model3.png";
import Model3_text from "@images/model3_text.png";
import {Footer} from "@components"

const index = () => {
  const clas = "activeModel3"
  return (
    <>
      <section>
        <Carusel img={Model3} text={Model3_text} />
      </section>
      <Footer clas={clas}/>
    </>
  );
};

export default index;
