import { useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const RestroCard = (data) => {


    // useEffect(()=> {
    //     fetchData();
    // }, []);

    // const fetchData = async () => {
    //     const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=68325&catalog_qa=undefined&submitAction=ENTER");
    //     const json = await data.json();
    //     console.log(json);
    // }
    return <div className="restro-card">
        <img 
            alt="restro-image" 
            className="restro-image"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+data.cloudinaryImageId} 
        />
        <div className="restro-info">
            <h3>{data.name}</h3>
            <p>{data.cuisines.join(", ")}</p>
            <p style={{fontWeight: "bold"}}>{data.avgRating} stars</p>
            <p >{data.minDeliveryTime} - {data.maxDeliveryTime} Minutes</p>
        </div>
    </div>
}

const RestaurantList = ({list}) => {

    return <div className="restaurant-list">
        {
            list.map((item) => {
                return <Link key={item.data.id} to={`/restaurants/${item.data.name.split(" ").join("-")}/${item.data.id}`} className="link">
                    <RestroCard key={item.data.id} {...item.data} />
                </Link>
            })
        }
    </div>
}

export default RestaurantList;