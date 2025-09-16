
import { Plus, X } from 'lucide-react';

const SideBarHeader = () => {
  return (
    <div className="p-4 border-b border-gray-700">
      <div className="flex items-center justify-between">
        <button className="flex items-center gap-2 text-white hover:bg-gray-700 p-2 rounded-md transition-colors">
          <Plus size={16} />
          <span className="text-sm">New chat</span>
        </button>
        <button className="text-white hover:bg-gray-700 p-2 rounded-md transition-colors">
          <X size={16} />
        </button>
      </div>
    </div>
  );
};


export default SideBarHeader;
