import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import Avatar from "../components/Avatar";
// import styles from "../styles/Home.module.css";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Footer from "../components/Footer";
import { useRef } from "react";
export default function Home() {
  const searchValue = useRef();
  const router = useRouter();
  const search = (e) => {
    e.preventDefault();
    const term = searchValue.current.value;
    if (!term) {
      return;
    }
    router.push(`/search?term=${term}`);
  };
  return (
    <div className="flex flex-col  justify-center h-screen">
      <Head>
        <title>Google</title>
      </Head>
      <header className="p-5 text-gray-700 flex w-full justify-between text-sm">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon className="w-10 h-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          <Avatar url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYAHZ0lpBtlP8lXebTIEtnA5-gDxLrPaL-CA&usqp=CAU" />
        </div>
      </header>

      <form className="flex flex-col items-center mt-44 flex-grow ">
        <Image
          height={100}
          width={300}
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        />
        <div className="flex rounded-full border border-gray-200 items-center px-5 py-3 sm:max-w-xl lg:max-w-2xl w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            ref={searchValue}
            type="text "
            className="flex-grow focus:outline-none "
          />
          <MicrophoneIcon className="h-5 " />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button onClick={search} className="btn">
            I`m Feeling Lucky
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}
