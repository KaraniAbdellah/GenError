import { Send } from "lucide-react";

const MainComponent = () => {
  return (
    <div className="bg-zinc-800 w-[80%] p-8 flex justify-center items-center">
      <div className="max-w-2xl w-full space-y-8">
        <div className="relative">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Type your error here..."
              className="w-full px-6 py-4 pr-14 bg-zinc-700 border border-green-400 text-white 
              placeholder-green-400 text-lg focus:outline-0 rounded-sm"
            />
            <button className="cursor-pointer absolute right-3 p-2 bg-gradient-to-r from-green-400 to-green-800 rounded-sm">
              <Send className="text-white" size={20} />
            </button>
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-green-500/20 to-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
