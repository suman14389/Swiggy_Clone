import { useState, useEffect } from "react";
import Shimmer from "./Components/Shimmer";
import { useParams } from "react-router-dom";

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

    return <div className="restro-menu-container">
        <div className="res-info-menu">
            <h1>{resInfo?.name}</h1>
            <p className="font-size-12">{resInfo?.cuisines.join(', ')} </p>
            <p className="font-size-12">{resInfo.avgRating} star, {resInfo.totalRatingsString} </p>
        </div> 
        <div className="res-menu-items">
            {
                menuItems.map((item) => {
                    return <div className="res-menu-item" key={item.card.info.id}>
                        <div>
                            <h3>{item.card.info.name}</h3>
                            <h4> Rs.{item.card.info.defaultPrice || item.card.info.price/100}</h4>
                            <p style={{'margin-top': '20px'}}> {item.card.info.ratings.aggregatedRating.rating} star ({item.card.info.ratings.aggregatedRating.ratingCount}) </p>
                            <p style={{'margin-top': '10px'}}>{item.card.info.description} </p>
                        </div>
                        {
                            item.card.info.showImage && 
                                <img alt="res-menu-image" 
                                    className="res-menu-image"
                                    src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+item.card.info.imageId} 
                                />
                        }
                    </div>
                })
            }
        </div>
    </div>
}

export default RestroMenu;