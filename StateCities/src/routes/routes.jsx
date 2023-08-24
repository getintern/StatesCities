import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Notfound from "../pages/404/Notfound";
import Home from "../pages/Home/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Home />} />
      
      <Route path="*" element={<Notfound />} />
    </Route>
  )
);

export default router;
