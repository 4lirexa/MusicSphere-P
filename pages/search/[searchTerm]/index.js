import { Search } from "@/Components/pages";
import { useRouter } from "next/router";

function SearchPage() {

    const route = useRouter();
    const {query : {searchTerm}} = route;

    return ( 
        <Search searchTerm={searchTerm}/>
     );
}

export default SearchPage;