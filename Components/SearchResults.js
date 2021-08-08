import PaginationButton from "./PaginationButton";


function SearchResults({ results }) {
    return (
        <div className="mx-auto w-full pl-3 pr-3 px-3 sm:pl-[5%]
        md:pl-[14%] lg:pl-52">
            <p className="text-gray-400 tracking-wide text-md mb-5 mt-3">
                About {results.searchInformation?.
                formattedTotalResults} results (
                 {results.searchInformation?.
                formattedSearchTime} seconds)  </p>

                {results.items?.map((result) => (
                <div key={result.link}
                className="max-w-xl mb-8 text-white">
                     <div className="group">
                      <a href={result.link} className="text-sml text-gray-500">
                      {result.formattedUrl}
                      </a>
                      <a href={result.link} className="">
                          <h2 className="truncate text-xl text-red-600
                           font-medium group-hover:underline">{result.title}</h2>
                      </a>
                     </div>

                     <p className="line-clamp-2">{result.snippet}</p>

                     
                </div>
                ))}
        <PaginationButton />
        </div>
    )
}

export default SearchResults
