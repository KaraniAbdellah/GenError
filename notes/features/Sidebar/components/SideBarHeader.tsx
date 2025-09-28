import { Plus, X } from 'lucide-react';

const SideBarHeader = () => {
  return (
    <div className="p-2 border-b border-green-400">
      <div className="flex items-center justify-between">
        <button className="cursor-pointer flex items-center gap-2 text-white hover:bg-zinc-900 p-2 rounded-md transition-colors">
          <Plus size={16} />
          <span className="text-sm">New chat</span>
        </button>
        <button className="cursor-pointer text-white hover:bg-zinc-900 p-2 rounded-md transition-colors">
          <X size={16} />
        </button>
      </div>
    </div>
  );
};


export default SideBarHeader;
