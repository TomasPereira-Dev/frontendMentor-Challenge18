import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../../data.json";

const MobileMenu = ({selectionHandler , suggestions ,setSuggestions}) => {
    const [selectedFilter, setSelectedFilter] = useState("");

    const allBtnRef = useRef("");
    const uiBtnRef = useRef("");
    const uxBtnRef = useRef("");
    const enhancementBtnRef = useRef("");
    const bugBtnRef = useRef("");
    const featureBtnRef = useRef("");

    const planned = data.productRequests.filter((request) => request.status === "planned").length;
    const inProgress = data.productRequests.filter((request) => request.status === "in-progress").length;
    const live = data.productRequests.filter((request) => request.status === "live").length;

    useEffect(() => setSelectedFilter("All"), []);

    const selectedFilterHandler = (filter) => {
        setSelectedFilter(filter);
        if(filter != "All"){
            setSuggestions(data.productRequests.filter((request) => request.category === filter.toLowerCase()));
        }else{
            setSuggestions(selectionHandler("Most Upvotes")); 
        }
    }

    return (
        <div className="absolute top-[4.5rem] flex justify-end w-full h-full bg-black/50">
            <div className="flex flex-col p-6 gap-8 w-3/4 bg-background1">
                <div className={`${'md:flex'} hidden items-end p-6 bg-headerBg bg-cover rounded-lg`}>
                    <div className="flex flex-col">
                        <p className="text-white font-bold">Frontend Mentor</p>
                        <p className="text-sm text-white font-bold">Feedback Board</p>  
                    </div>
                </div>
                <div className="flex flex-wrap gap-x-2 gap-y-4 p-6 bg-white rounded-lg">
                    <button className={`${selectedFilter == allBtnRef.current.textContent ? 'text-white bg-background3' : 'text-text2 bg-background1'} text-sm px-4 py-1 font-bold rounded-lg`} ref={allBtnRef} onClick={(e) => {selectedFilterHandler(e.target.innerText)} }>All</button>
                    <button className={`${selectedFilter == uiBtnRef.current.textContent ? 'text-white bg-background3' : 'text-text2 bg-background1'} text-sm px-4 py-1 font-bold rounded-lg`} ref={uiBtnRef} onClick={(e) => {selectedFilterHandler(e.target.innerText)} }>UI</button>
                    <button className={`${selectedFilter == uxBtnRef.current.textContent ? 'text-white bg-background3' : 'text-text2 bg-background1'} text-sm px-4 py-1 font-bold rounded-lg`} ref={uxBtnRef} onClick={(e) => {selectedFilterHandler(e.target.innerText)} }>UX</button>
                    <button className={`${selectedFilter == enhancementBtnRef.current.textContent ? 'text-white bg-background3' : 'text-text2 bg-background1'} text-sm px-4 py-1 font-bold rounded-lg`} ref={enhancementBtnRef} onClick={(e) => {selectedFilterHandler(e.target.innerText)} }>Enhancement</button>
                    <button className={`${selectedFilter == bugBtnRef.current.textContent ? 'text-white bg-background3' : 'text-text2 bg-background1'} text-sm px-4 py-1 font-bold rounded-lg`} ref={bugBtnRef} onClick={(e) => {selectedFilterHandler(e.target.innerText)} }>Bug</button>
                    <button className={`${selectedFilter == featureBtnRef.current.textContent ? 'text-white bg-background3' : 'text-text2 bg-background1'} text-sm px-4 py-1 font-bold rounded-lg`} ref={featureBtnRef} onClick={(e) => {selectedFilterHandler(e.target.innerText)} }>Feature</button>
                </div>
                <div className="flex flex-col gap-8 p-6 bg-white rounded-lg">
                    <div className="flex justify-between items-center">
                        <p className="font-bold">Roadmap</p>
                        <Link className="text-text2 hover:underline">View</Link>
                    </div>
                    <ul className="flex flex-col gap-2 text-slate-500">
                        <li className="flex justify-between items-center before:absolute before:content-[''] before:p-1 before:bg-orange before:rounded-full"><p className="ml-4">Planned</p> <p className="font-bold">{planned}</p></li>
                        <li className="flex justify-between items-center before:absolute before:content-[''] before:p-1 before:bg-purple before:rounded-full" ><p className="ml-4">In Progress</p> <p className="font-bold">{inProgress}</p></li>
                        <li className="flex justify-between items-center before:absolute before:content-[''] before:p-1 before:bg-blue before:rounded-full"><p className="ml-4">Live</p> <p className="font-bold">{live}</p></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MobileMenu;
