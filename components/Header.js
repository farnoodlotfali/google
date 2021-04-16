import { MicrophoneIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";

const Header = () => {
  const router = useRouter();
  const searchValue = useRef();

  return (
    <div>
      <Image
        height={40}
        width={120}
        onClick={() => router.push("/")}
        className="cursor-pointer"
        src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
      />
      <form className="flex border border-gray-200 rounded-full shadow-lg px-6 max-w-3xl items-center py-3 ml-10 mr-5 ">
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
      </form>
    </div>
  );
};

export default Header;
