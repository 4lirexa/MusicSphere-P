import { ArtistDetails } from "@/Components/pages";
import { useRouter } from "next/router";

function ArtistDetailsPage() {

    const route = useRouter();
    const {query : {id}} = route;

    return ( 
        <ArtistDetails artistId={id} />
     );
}

export default ArtistDetailsPage;