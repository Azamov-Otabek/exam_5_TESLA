import "./style.scss";
import { Carusel } from "@ui";
import ModelS from "@images/models.png";
import ModelS_text from "@images/Models_text.png";
import {Footer} from "@components"

const index = () => {
  const clas = "activeHome"
  return (
    <>
      <section>
        <Carusel img={ModelS} text={ModelS_text} />
      </section>
      <Footer clas={clas}/>
    </>
  );
};

export default index;
