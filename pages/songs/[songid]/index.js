import { SongDetails } from "@/Components/pages";
import { useRouter } from "next/router";

function SongDetailsPage() {

    const route = useRouter();
    const {query : {songid}} = route;

    return ( 
        <SongDetails songid={songid} />
     );
}

export default SongDetailsPage;