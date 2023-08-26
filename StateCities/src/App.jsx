// @ts-check
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";

function App() {
  // @ts-ignore
  return <RouterProvider router={router} />;
}

export default App;
