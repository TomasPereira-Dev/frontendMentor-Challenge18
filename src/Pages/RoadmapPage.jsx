import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import AddFeedbackBtn from "../Components/AddFeedbackBtn.jsx";
import data from "../../data.json";


const RoadmapPage = () => {

    const [selectedFilter, setSelectedFilter] = useState("Planned");

    const plannedRef = useRef("");
    const inProgressRef = useRef("");
    const liveRef = useRef("");

    const liveFeedback = data.productRequests.filter((feedback) => feedback.status === "live");
    const inProgressFeedback = data.productRequests.filter((feedback) => feedback.status === "in-progress");
    const plannedFeedback = data.productRequests.filter((feedback) => feedback.status === "planned");

    useEffect(() => { //default style for the buttons at first render.
       if (selectedFilter.includes("Planned")){
        plannedRef.current.style.borderBottom = "4px solid hsl(14, 84%, 74%)";
       } else  {
        plannedRef.current.style.borderBottom = "none";
       }
    }, [selectedFilter])

    return(
        <main>
            <nav>
                <div className="flex justify-between items-center p-6 bg-background2">
                    <div>
                        <Link to="/" className="flex gap-4 items-center">
                            <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L2 5l4-4" stroke="#FFFFFF" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
                            <p className="text-xs text-white font-bold">Go Back</p>
                        </Link>
                        <h1 className="mt-2 text-xl text-white font-bold">Roadmap</h1>
                    </div>
                    <AddFeedbackBtn />
                </div>
            </nav>
            <div className="grid grid-cols-3 border-b"> 
                <button className={`py-5 text-xs text-text1 font-bold ${selectedFilter.includes(plannedRef.current.textContent) ? 'border-b-4 border-orange' : null}`} ref={plannedRef} onClick={(e) => {setSelectedFilter(e.target.textContent)}}>Planned ({plannedFeedback.length})</button>
                <button className={`py-5 text-xs text-text1 font-bold  ${selectedFilter.includes(inProgressRef.current.textContent) ? 'border-b-4 border-purple' : null}`} ref={inProgressRef} onClick={(e) => {setSelectedFilter(e.target.textContent)}}>In-Progress ({inProgressFeedback.length})</button>
                <button className={`py-5 text-xs text-text1 font-bold  ${selectedFilter.includes(liveRef.current.textContent) ? 'border-b-4 border-blue' : null }`} ref={liveRef} onClick={(e) => {setSelectedFilter(e.target.textContent)}}>Live ({liveFeedback.length})</button>
            </div>
            <section className="grid">

            </section>
        </main>
    )
}

export default RoadmapPage;