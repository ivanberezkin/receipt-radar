export const SearchBar = () => {
  return (
    <div className="mt-6 mb-4 px-2">
      {/* searchbar (stoppa in din sök-komponent här) */}
      <input
        type="search"
        placeholder="Search..."
        className="w-full p-3 rounded-xl bg-[#1E252B] border border-gray-800 text-gray-300 placeholder:text-gray-600 mb-5"
      />
    </div>
  );
};
