interface SearchProps {
    onSearch: (value: string) => void;
  }
  
  function Search({ onSearch }: SearchProps) {
    return (
      <input
        type="text"
        placeholder="Search by Name"
        onChange={(e) => onSearch(e.target.value)}
        className="mx-3 max-w-md w-full bg-[#F9FAFC] text-[#4A5468] border border-gray-300 p-2 rounded-lg focus:bg-[#EDEFF3] focus:outline-none placeholder:text-[#4A5468] transition"
        />
    );
  }
  
  export default Search;
  