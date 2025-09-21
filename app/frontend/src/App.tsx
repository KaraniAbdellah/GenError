import "./index.css";
// import MainSidebarComponent from "./features/Sidebar/components/MainSidebarComponent";
// import MainComponent from "./features/Main/components/MainComponent";
// import Header from "./features/Header/components/Header";
// import Footer from "./features/Footer/components/Footer";
import Page from "./features/Page";

function App() {
  return (
    <div className="h-screen bg-zinc-800 w-full">
      {/* <Header></Header> */}
      {/* <div className="flex justify-start h-[calc(100vh-61px)]">
        <MainSidebarComponent></MainSidebarComponent>
        <MainComponent></MainComponent>
      </div>
      <Footer></Footer> */}
      <Page></Page>
      <h1>ss</h1>
    </div>
  );
}

export default App;
