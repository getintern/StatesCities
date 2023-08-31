import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Homepage from "../pages/Home/Homepage";
import Notfound from "../pages/404/Notfound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Homepage />} />
      <Route path="*" element={<Notfound />} />
    </Route>
  )
);

export default router;
