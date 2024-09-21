import { useEffect } from "react";
import "../App.css";
import RestaurantList from "./RestaurantList";
import { useState } from "react";
import {restaurantList} from "../Constants"

const Body = () => {

    const [searchRestro, setSearchRestro] = useState('');
    const [filteredRestroList, setFilteredRestroList] = useState([]);
    useEffect(()=> {
        fetchData();
    }, [])

    function handleSearch(e) {
        setSearchRestro(e.target.value);
    }

    function updateFilteredRestros(){
        const filtertedRestros = restaurantList.filter(function(item){
            return item.data.name.toLowerCase().includes(searchRestro.toLowerCase())
        })
        setFilteredRestroList(filtertedRestros);
    }

    async function fetchData() {
        // const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667")
        // const data = await response.json();
        // console.log(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestroList(restaurantList);
    }

    useEffect(() => {
        updateFilteredRestros();
    }, [searchRestro])

    return <div className="m-4">
        <div className="w-40 flex mb-8">
            <input className="p-2 mr-2 border-2 border-solid border-black" type="text" value={searchRestro} onChange={handleSearch}/>
            <button>Search</button>
        </div>
        {
            filteredRestroList.length ? <RestaurantList list={filteredRestroList}/> : <div className="flex items-center justify-center h-60 bg-blue-50">There are no restaurants....</div>
        }
    </div>
}

export default Body;