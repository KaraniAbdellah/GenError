import SideBarHeader from "./SideBarHeader";
import SideBarList from "./SideBarList";
import SideBarFooter from "./SideBarFooter";

const MainSidebarComponent = () => {
  return (
    <div className="bg-zinc-800 w-[20%] border-r border-green-400">
      <SideBarHeader></SideBarHeader>
      <SideBarList></SideBarList>
      <SideBarFooter></SideBarFooter>
    </div>
  );
};

export default MainSidebarComponent;
