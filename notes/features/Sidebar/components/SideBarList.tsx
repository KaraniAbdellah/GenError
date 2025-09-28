
const SideBarList = () => {
    const chatItems = [
      "New Chat",
      "NVM problem", 
      "Problem 1",
      "Problem 2", 
      "Problem 3",
      "Problem 4",
      "Problem 5"
    ];
  
    return (
      <div className="flex-1 overflow-y-auto p-2">
        <div className="space-y-1">
          {chatItems.map((item, index) => (
            <button 
              key={index}
              className="cursor-pointer w-full text-left px-3 py-2 text-white hover:bg-zinc-900 rounded-md transition-colors text-sm truncate"
            >
              <div className="flex items-center gap-2">
                <span className="text-xs">💬</span>
                <span>{item}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  };
  
export default SideBarList;
