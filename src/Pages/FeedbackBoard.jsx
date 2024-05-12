import { useState } from "react";
import { Link } from "react-router-dom";
const FeedbackBoard = () => {
    const [selectedSort, setSelectedSort] = useState("Most Upvotes");
    return (
        <>
        <header className="flex justify-between items-center p-4 bg-mobileHeaderBg bg-cover">
            <div className="">
                <p className="text-white font-bold">Frontend Mentor</p>
                <p className="text-xs text-white font-bold">Feedback Board</p>
            </div>
            <div className="">
                <img src="./shared/mobile/icon-hamburger.svg" alt=" " />
            </div>
        </header>
        <div className="flex justify-between items-center p-4 text-sm bg-background2">
            <div className="flex items-center gap-2 w-fit">
                <p className="text-white">Sort by: <span className="font-bold">{selectedSort}</span></p>
                <img src="./shared/icon-arrow-down.svg" alt=" " />
            </div>
            <Link className="px-4 py-2 bg-purple rounded-lg">
                <p className="text-white font-bold">+ Add Feedback</p>
            </Link>
        </div>
        </>
    )
}

export default FeedbackBoard;