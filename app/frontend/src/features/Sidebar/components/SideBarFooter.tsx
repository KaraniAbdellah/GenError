import { BsThreeDotsVertical } from "react-icons/bs";

const SideBarFooter = () => {
    return (
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-800 rounded-full flex items-center justify-center text-white text-sm font-semibold">
            U
          </div>
          <div className="flex-1">
            <div className="text-white text-sm font-medium">Account Info</div>
            <div className="text-gray-400 text-xs">user@example.com</div>
          </div>
          <button className="text-gray-400 hover:text-white transition-colors">
            <span className="text-lg"><BsThreeDotsVertical/></span>
          </button>
        </div>
      </div>
    );
  };

export default SideBarFooter;
