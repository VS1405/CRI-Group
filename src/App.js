import "./App.css";

import Logo from "./component/Logo";
import Info from "./component/Info";
import ToolPage from "./component/ToolPage";
import FooterPage from "./component/FooterPage";

function App() {
  return (
    <div className="App">
      <Logo />
      <Info />
      <ToolPage />
      <FooterPage />
    </div>
  );
}

export default App;
