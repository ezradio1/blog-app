"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
;
import { FiSearch } from "react-icons/fi";
import useIndex from "./index.hook";

const SearchInput = () => {
  const { search, setSearch, handleSearch, handleClickEnter } = useIndex();

  return (
    <div className="flex flex-col md:flex-row gap-2 justify-between">
      <Input
        icon={<FiSearch />}
        placeholder="Search blog here..."
        className="!w-full"
        withError={false}
        value={search}
        onChange={(evt) => setSearch(evt.target.value)}
        onKeyDown={handleClickEnter}
      />
      <Button onClick={handleSearch}>Search</Button>
    </div>
  );
};

export default SearchInput;
