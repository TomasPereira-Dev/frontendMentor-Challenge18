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
        <div className="flex flex-wrap gap-x-2 gap-y-4 py-6 pr-6 pl-4 bg-white rounded-lg lg:pl-6">
            <button className={`${selectedFilter == allBtnRef.current.textContent ? 'text-white bg-background3' : 'text-text2 bg-background1'} text-sm px-4 py-1 font-bold rounded-xl`} ref={allBtnRef} onClick={(e) => {selectedFilterHandler(e.target.innerText)} }>All</button>
            <button className={`${selectedFilter == uiBtnRef.current.textContent ? 'text-white bg-background3' : 'text-text2 bg-background1'} text-sm px-4 py-1 font-bold rounded-xl`} ref={uiBtnRef} onClick={(e) => {selectedFilterHandler(e.target.innerText)} }>UI</button>
            <button className={`${selectedFilter == uxBtnRef.current.textContent ? 'text-white bg-background3' : 'text-text2 bg-background1'} text-sm px-4 py-1 font-bold rounded-xl`} ref={uxBtnRef} onClick={(e) => {selectedFilterHandler(e.target.innerText)} }>UX</button>
            <button className={`${selectedFilter == enhancementBtnRef.current.textContent ? 'text-white bg-background3' : 'text-text2 bg-background1'} text-sm px-4 py-1 font-bold rounded-xl`} ref={enhancementBtnRef} onClick={(e) => {selectedFilterHandler(e.target.innerText)} }>Enhancement</button>
            <button className={`${selectedFilter == bugBtnRef.current.textContent ? 'text-white bg-background3' : 'text-text2 bg-background1'} text-sm px-4 py-1 font-bold rounded-xl`} ref={bugBtnRef} onClick={(e) => {selectedFilterHandler(e.target.innerText)} }>Bug</button>
            <button className={`${selectedFilter == featureBtnRef.current.textContent ? 'text-white bg-background3' : 'text-text2 bg-background1'} text-sm px-4 py-1 font-bold rounded-xl`} ref={featureBtnRef} onClick={(e) => {selectedFilterHandler(e.target.innerText)} }>Feature</button>
        </div>
    )
}

export default Filter;