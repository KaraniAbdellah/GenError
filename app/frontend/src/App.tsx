import "./index.css";
import MainSidebarComponent from "./features/Sidebar/components/MainSidebarComponent";
import MainComponent from "./features/Main/components/MainComponent";
import Header from "./features/Header/components/Header";
import Footer from "./features/Footer/components/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <div className="flex justify-start">
        <MainSidebarComponent></MainSidebarComponent>
        <MainComponent></MainComponent>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
