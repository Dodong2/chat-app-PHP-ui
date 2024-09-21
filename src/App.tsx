
/********** react library **********/
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/********** PWA **********/
import './validations/ServiceWorkerValidation'
/********** CSS **********/
import './assets/css/App.css'
import './assets/css/color.css'
import './assets/css/default.css'
import './assets/css/media.css'



function App() {


  //Pages
  // const User = lazy(() => import('./pages/User'))
  // const Home = lazy(() => import("./pages/Home"));
  const ChatsPages = lazy(() => import("./pages/ChatsPages"))
  

  return (
    <>
      <Router>
        <Suspense fallback={<>Loading...</>}>
          <Routes>
            <Route path="/" element={<ChatsPages />} />
            {/* <Route path="/" element={<User/>}/> */}
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
