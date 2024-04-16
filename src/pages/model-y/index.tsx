import { Carusel } from "@ui";
import Modely from "@images/modely.png";
import Modely_text from "@images/modely_text.png";
import {Footer} from "@components"

const index = () => {
  const clas = "activeModelx"
  return (
    <>
      <section>
        <Carusel img={Modely} text={Modely_text} />
      </section>
      <Footer clas={clas}/>
    </>
  );
};

export default index;
