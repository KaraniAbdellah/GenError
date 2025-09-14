import "./index.css";
import MainSidebarComponent from "./features/Sidebar/components/MainSidebarComponent";
import MainComponent from "./features/Main/components/MainComponent";
import Header from "./features/Header/components/Header";
import Footer from "./features/Footer/components/Footer";

function App() {
  return (
    <div className="h-screen">
      <Header></Header>
      <div className="flex justify-start h-[calc(100vh-100px)]">
        <MainSidebarComponent></MainSidebarComponent>
        <MainComponent></MainComponent>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
