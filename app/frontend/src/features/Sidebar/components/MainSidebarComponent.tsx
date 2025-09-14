import SideBarHeader from "./SideBarHeader";
import SideBarList from "./SideBarList";
import SideBarFooter from "./SideBarFooter";

const MainSidebarComponent = () => {
  return (
    <div className="bg-sky-500 w-[20%]">
      <SideBarHeader></SideBarHeader>
      <SideBarList></SideBarList>
      <SideBarFooter></SideBarFooter>
    </div>
  );
};

export default MainSidebarComponent;
