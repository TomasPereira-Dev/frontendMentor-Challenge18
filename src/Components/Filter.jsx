import { useState, useEffect, useRef } from "react";
import data from "../../data.json";

const Filter = ({setSuggestions}) => {

    const [selectedFilter, setSelectedFilter] = useState("All");

    const allBtnRef = useRef("");
    const uiBtnRef = useRef("");
    const uxBtnRef = useRef("");
    const enhancementBtnRef = useRef("");
    const bugBtnRef = useRef("");
    const featureBtnRef = useRef("");

    const selectedFilterHandler = (filter) => {
        setSelectedFilter(filter);
        if(filter !== "All"){
            setSuggestions(data.productRequests.filter((request) => request.category === filter.toLowerCase()));
        }else{
            setSuggestions(data.productRequests); 
        }
    }

    useEffect(() => {setSelectedFilter("All")}, []);

    return(
        <div className="flex flex-wrap gap-x-2 gap-y-4 p-6 bg-white rounded-lg">
            <button className={`${selectedFilter == allBtnRef.current.textContent ? 'text-white bg-background3' : 'text-text2 bg-background1'} text-sm px-4 py-1 font-bold rounded-lg`} ref={allBtnRef} onClick={(e) => {selectedFilterHandler(e.target.innerText)} }>All</button>
            <button className={`${selectedFilter == uiBtnRef.current.textContent ? 'text-white bg-background3' : 'text-text2 bg-background1'} text-sm px-4 py-1 font-bold rounded-lg`} ref={uiBtnRef} onClick={(e) => {selectedFilterHandler(e.target.innerText)} }>UI</button>
            <button className={`${selectedFilter == uxBtnRef.current.textContent ? 'text-white bg-background3' : 'text-text2 bg-background1'} text-sm px-4 py-1 font-bold rounded-lg`} ref={uxBtnRef} onClick={(e) => {selectedFilterHandler(e.target.innerText)} }>UX</button>
            <button className={`${selectedFilter == enhancementBtnRef.current.textContent ? 'text-white bg-background3' : 'text-text2 bg-background1'} text-sm px-4 py-1 font-bold rounded-lg`} ref={enhancementBtnRef} onClick={(e) => {selectedFilterHandler(e.target.innerText)} }>Enhancement</button>
            <button className={`${selectedFilter == bugBtnRef.current.textContent ? 'text-white bg-background3' : 'text-text2 bg-background1'} text-sm px-4 py-1 font-bold rounded-lg`} ref={bugBtnRef} onClick={(e) => {selectedFilterHandler(e.target.innerText)} }>Bug</button>
            <button className={`${selectedFilter == featureBtnRef.current.textContent ? 'text-white bg-background3' : 'text-text2 bg-background1'} text-sm px-4 py-1 font-bold rounded-lg`} ref={featureBtnRef} onClick={(e) => {selectedFilterHandler(e.target.innerText)} }>Feature</button>
        </div>
    )
}

export default Filter;