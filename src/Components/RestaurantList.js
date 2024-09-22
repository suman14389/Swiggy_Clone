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
    return <div className="w-60 border-2 border-solid border-black bg-slate-200 rounded-lg p-2 max-h-62 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
        <img 
            alt="restro-image" 
            className="w-full h-52"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+data.cloudinaryImageId} 
        />
        <div className="restro-info">
            <h3 className="font-bold">{data.name}</h3>
            <p>{data.cuisines.join(", ")}</p>
            <p className="font-bold">{data.avgRating} stars</p>
            <p >{data.minDeliveryTime} - {data.maxDeliveryTime} Minutes</p>
        </div>
    </div>
}

const RestaurantList = ({list}) => {

    return <div className="flex flex-wrap gap-10">
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