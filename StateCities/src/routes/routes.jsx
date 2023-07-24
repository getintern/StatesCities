import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Doc from "../pages/doc/Doc";
import Navbar from "../components/Navbar/Navbar";
import Notfound from "../pages/404/Notfound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<Doc />} />
      <Route path="*" element={<Notfound />} />
    </Route>
  )
);

export default router;
