// oklch(0.708 0 0)
// 

const Loading = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex-col gap-4 w-full flex items-center justify-center">
        <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
          <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-[oklch(44.3%_0.11_240.79)]
 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
