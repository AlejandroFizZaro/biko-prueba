import FlowerFilter from "../FlowerFilter/FlowerFilter";
import getFlowers from "@/helpers/getFlowers";


export default async function ListOfFlowers () {
    // Defining the flower data types
    interface flower {
        id: string;
        name: string,
        binomialName: string,
        price: string,
        imgUrl: string,
        wateringsPerWeek: string,
        fertilizerType: string,
        heightInCm: number
    }

    const flowersProp = await getFlowers(); 
    
    // The server side will...
        // render the client component FlowerFilter ( it will render the flower list and give the option to filter the results)
        // send the props attached to it. ( flowers from API response )
    return(
        <>
            <FlowerFilter value={flowersProp} />
        </>
    )
}




