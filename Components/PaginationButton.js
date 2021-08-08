
import { ChevronLeft, ChevronRight } from 'heroicons-react';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link'

function PaginationButton() {
   const router = useRouter();
   
   const startIndex = Number(router.query.start) || 0;
    return (
        <div className="flex justify-between max-w-lg text-red-800
        mb-10">
            {startIndex >=10 && (
                <Link href={`/search?term=${router.query.term}
                &start=${startIndex - 10}`}>
                <div className="flex flex-grow flex-col cursor-pointer items-center 
               hover:underline">
                <ChevronLeft className="text-red-700"/>
                  <p className=" text-red-700">Previous</p>
                </div>
                </Link>
            )}

            <Link href={`/search?term=${router.query.term}
            &start=${startIndex + 10}`}>
            <div className="flex flex-grow flex-col cursor-pointer items-center 
                hover:underline">
                <ChevronRight className="text-red-700"/>
                <p className="text-red-700">Next</p>
            </div>
            </Link>
        </div>
    )
}

export default PaginationButton
