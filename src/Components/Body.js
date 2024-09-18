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
    
    return <div className="body">
        <div className="search-container">
            <input type="text" value={searchRestro} onChange={handleSearch}/>
            <button>Search</button>
        </div>
        {
            filteredRestroList.length ? <RestaurantList list={filteredRestroList}/> : <h6 className="zero-restros-state">There are no restaurants</h6>
        }
    </div>
}

export default Body;