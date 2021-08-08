import { useRouter } from 'next/dist/client/router';
import Head from 'next/head'
import Header from '../Components/Header';
import SearchResults from '../Components/SearchResults';


import Response from '../Response';

function Search({results}) {
    console.log(results);
    const router = useRouter();
    return (
        <div>
            <Head>
                <title>{router.query.term}-Dark Search</title>
            </Head>

           <Header />
           
           {/* Search Results */}
           <SearchResults results={results}/>
        </div>
    )
}

export default Search;

export async function getServerSideProps(context) {
    const useDummyData=false;
    const startIndex = context.query.start || "0";
    const data = useDummyData ? Response :await fetch (
        `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}
        &start=${startIndex}`
        ).then((response) => response.json());

        return{
            props : {
                results:data,
            },
        };
}
