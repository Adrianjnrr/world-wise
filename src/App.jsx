import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CitiesProvider } from "./Contexts/CityContext";
import { AuthProvider } from "./Contexts/AuthContext";
import ProctedRoute from "./component/ProctedRoute";

import City from "./component/City";
import CityList from "./component/CityList";
import Form from "./component/Form";
import CountryList from "./component/CountryList";
import { Suspense, lazy } from "react";
import SpinnerFullPage from "./component/SpinnerFullPage";

const Homepage = lazy(() => import("./pages/Homepage"));
const About = lazy(() => import("./pages/About"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Login = lazy(() => import("./pages/Login"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const AppLayout = lazy(() => import("./pages/AppLayout"));

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="About" element={<About />} />
              <Route path="Pricing" element={<Pricing />} />
              <Route path="/Login" element={<Login />} />
              <Route path="*" element={<PageNotFound />} />
              <Route
                path="app"
                element={
                  <ProctedRoute>
                    <AppLayout />
                  </ProctedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
