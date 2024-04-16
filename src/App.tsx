import { Routes, Route } from "react-router-dom";
import {Model_3, Model_s, Model_x, Model_y, Solar_panels, Solar_roof, ErrorPage} from '@pages'
import {Header} from '@components'
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header/>}>
            <Route path="/" element={<Model_s/>}/>
            <Route path="/model_3" element={<Model_3/>}/>
            <Route path="/model_x" element={<Model_x/>}/>
            <Route path="/model_y" element={<Model_y/>}/>
            <Route path="/solar_roof" element={<Solar_roof/>}/>
            <Route path="/solar_panels" element={<Solar_panels/>}/>
        </Route>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      
    </>
  );
};

export default App;