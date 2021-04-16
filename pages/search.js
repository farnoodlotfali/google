import Head from "next/head";
import { API_KEY, CONTEXT_KEY } from "../keys";
import Header from "../components/Header";
import { useRouter } from "next/router";
import Response from "../Respone";
import SearchResults from "../components/SearchResults";

const Search = ({ results }) => {
  // console.log(results);
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.term}</title>
      </Head>
      <Header />

      <SearchResults results={results} />
    </div>
  );
};

export default Search;
export const getServerSideProps = async (context) => {
  const useDummyData = false;
  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((res) => res.json());

  return {
    props: {
      results: data,
    },
  };
};
