export const Timetabs = () => {
  return (
    <div className="flex gap-1 bg-[#1E252B] rounded-full p-1 border border-gray-800 mb-6">
      <button className="flex-1 px-4 py-2 bg-[#2D353C] text-white rounded-full">
        Week
      </button>
      <button className="flex-1 px-4 py-2 text-gray-500">Month</button>
      <button className="flex-1 px-4 py-2 text-gray-500">Year</button>
    </div>
  );
};
