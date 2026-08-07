import { Routes, Route } from "react-router-dom";
import { useLanguageContext } from "./context/languageContext";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";

function App() {
  const { t } = useLanguageContext();
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
