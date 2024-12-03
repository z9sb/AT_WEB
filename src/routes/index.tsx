import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "../views/Home.tsx";
import Protectes from "./protectes";
import Deshboard from "../views/Dashboard.tsx";
import Settings from "../views/Settings.tsx";
import Form from "../views/Form.tsx";
import SignUp from "../views/SignUp.tsx";
import Signin from "../views/Signin.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={ <Protectes />}>
        <Route path="/" index element={<Home />} />
        <Route path="/Dashboard" index element={<Deshboard />} />
        <Route path="/Settings" index element={<Settings />} />
        <Route path="/Form" index element={<Form />} />
      </Route>
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Signin" element={<Signin />} />
    </Route>
  )
);

const Index = () => {
  return <RouterProvider router={router} />;
};

export default Index;
