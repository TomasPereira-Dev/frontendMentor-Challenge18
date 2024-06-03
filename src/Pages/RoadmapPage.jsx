import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import AddFeedbackBtn from "../Components/AddFeedbackBtn.jsx";
import RoadmapItem from "../Components/RoadmapItem.jsx";
import data from "../../data.json";


const RoadmapPage = () => {

    const [selectedFilter, setSelectedFilter] = useState("planned");

    const plannedRef = useRef("");

    const inProgressFeedback = data.productRequests.filter((feedback) => feedback.status === "in-progress");
    const plannedFeedback = data.productRequests.filter((feedback) => feedback.status === "planned");
    const liveFeedback = data.productRequests.filter((feedback) => feedback.status === "live");

    const plannedItems = plannedFeedback.map((item) => <RoadmapItem key={item.id} title={item.title} description={item.description} status={item.status} category={item.category} upvotes={item.upvotes} comments={item.comments} />);
    const inProgressItems = inProgressFeedback.map((item) => <RoadmapItem key={item.id} title={item.title} description={item.description} status={item.status} category={item.category} upvotes={item.upvotes} comments={item.comments} />);
    const liveItems = liveFeedback.map((item) => <RoadmapItem key={item.id} title={item.title} description={item.description} status={item.status} category={item.category} upvotes={item.upvotes} comments={item.comments} />);

    useEffect(() => { //default style for the buttons at first render.
       if (selectedFilter.toLowerCase().includes("planned")){
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
                <button ref={plannedRef} className={`py-5 text-xs text-text1 font-bold ${selectedFilter.includes("planned") ? 'border-b-4 border-orange' : null}`} onClick={() => {setSelectedFilter("planned")}}>Planned ({plannedFeedback.length})</button>
                <button className={`py-5 text-xs text-text1 font-bold  ${selectedFilter.includes("in-progress") ? 'border-b-4 border-purple' : null}`} onClick={() => {setSelectedFilter("in-progress")}}>In-Progress ({inProgressFeedback.length})</button>
                <button className={`py-5 text-xs text-text1 font-bold  ${selectedFilter.includes("live") ? 'border-b-4 border-blue' : null }`} onClick={() => {setSelectedFilter("live")}}>Live ({liveFeedback.length})</button>
            </div>
            <section className="grid p-6">
                <div className={selectedFilter === "planned" ? 'block' : 'hidden'}> 
                    <h2 className="text-lg text-text1 font-bold">Planned ({plannedFeedback.length})</h2>
                    <p className="mb-4 text-sm text-slate-500">Ideas prioritized for research</p>
                    <ul className="flex flex-col gap-4">
                        {plannedItems} 
                    </ul>
                </div>

                <div className={selectedFilter === "in-progress" ? 'block' : 'hidden'}>
                    <h2 className="text-lg text-text1 font-bold">In-Progress ({inProgressFeedback.length})</h2>
                    <p className="mb-4 text-sm text-slate-500">Currently being developed</p>
                    <ul className="flex flex-col gap-4">
                        {inProgressItems}
                    </ul>
                </div>

                <div className={selectedFilter === "live" ? 'block' : 'hidden'}>
                    <h2 className="text-lg text-text1 font-bold">Live ({liveFeedback.length})</h2>
                    <p className="mb-4 text-sm text-slate-500">Released features</p>
                    <ul className="flex flex-col gap-4">
                        {liveItems}
                    </ul>
                </div>

            </section>
        </main>
    )
}

export default RoadmapPage;