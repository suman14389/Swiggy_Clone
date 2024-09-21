import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import Accordion from "../Utils/Accordion";

const RestroMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const [menuItems, setMenuItems] = useState(null);

    const {id: resId} = useParams();
    

    useEffect(()=> {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId="+resId);
        const data = await response.json();
        setResInfo(data?.data?.cards[2]?.card?.card?.info);
        setMenuItems(data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
        console.log(data?.data?.cards[2]?.card?.card?.info);
        console.log(data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    }

    if(resInfo === null || menuItems === null){
        return <Shimmer width={1000} height={200} />
    }

    console.log(menuItems);

    return <div className="mt-8 mx-48">
        <div className="border border-solid bg-gray-400 p-4 rounded-md text-center">
            <h1 className="font-bold">{resInfo?.name}</h1>
            <p >{resInfo?.cuisines.join(', ')} </p>
            <p className="font-bold">{resInfo.avgRating} star, {resInfo.totalRatingsString} </p>
        </div> 
        <div className="w-full">
            {
                menuItems.map((item) => {
                    return <Accordion title={item.card.info.name}>
                        <div className="flex justify-between border border-light border-black my-4 p-4 rounded-md w-full" key={item.card.info.id}>
                            <div className="me-6 w-5/7">
                                <h3 className="font-bold">{item.card.info.name}</h3>
                                <h4> Rs. {item.card.info.defaultPrice || item.card.info.price/100}</h4>
                                {
                                    item.card.info.ratings.aggregatedRating.rating ? (<p className="mt-4 font-bold"> {item.card.info.ratings.aggregatedRating.rating} star ({item.card.info.ratings.aggregatedRating.ratingCount}) </p>) : null
                                }
                                <p className="mt-3 max-w-3xl">{item.card.info.description} </p>
                            </div>
                            <div className="flex flex-col justify-center items-center w-2/7">
                                {
                                    item.card.info.showImage &&
                                        <img alt="res-menu-image"
                                            className="w-32 h-28 rounded-md object-cover"
                                            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+item.card.info.imageId} 
                                        />
                                }
                                <button className="bg-green-400 rounded-md p-2 mt-2 w-full cursor-pointer">Add + </button>
                            </div>
                        </div>
                    </Accordion>
                })
            }  
        </div>
    </div>
}

export default RestroMenu;