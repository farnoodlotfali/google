import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Avatar from "../components/Avatar";
import { useRouter } from "next/router";
import { useRef } from "react";
import HeaderOptions from "./HeaderOptions";

const Header = () => {
  const router = useRouter();
  const searchValue = useRef();

  const search = (e) => {
    e.preventDefault();

    const term = searchValue.current.value;

    if (!term) {
      return;
    }

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          height={40}
          width={120}
          onClick={() => router.push("/")}
          className="cursor-pointer"
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        />
        <form className=" flex flex-grow border border-gray-200 rounded-full shadow-lg px-6 max-w-3xl items-center py-3 ml-10 mr-5 ">
          <input
            type="text"
            className="flex-grow w-full focus:outline-none"
            ref={searchValue}
          />
          <XIcon
            onClick={() => (searchValue.current.value = "")}
            className="h-7 text-gray-500 sm:mr-3  cursor-pointer transition duration-100 transform hover:scale-125"
          />
          <MicrophoneIcon className="h-6  mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button type="submit" onClick={search} hidden>
            search
          </button>
        </form>
        <Avatar
          className="ml-auto"
          url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYAHZ0lpBtlP8lXebTIEtnA5-gDxLrPaL-CA&usqp=CAU"
        />
      </div>
      <HeaderOptions />
    </header>
  );
};

export default Header;
