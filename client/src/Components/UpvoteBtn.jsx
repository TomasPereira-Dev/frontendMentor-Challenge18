import axios from "axios";

const UpvoteBtn = ({suggestion, isMobile}) => {

    const upvoteHandler = async (title) => {
        axios.post("http://localhost:3000/upvote_feedback", {
            title: title,
            upvotedBy: "currentUser"
        });
    };

    if(!isMobile) return (
        <button className="hidden flex-col self-start items-center gap-2 p-2 text-text1 text-sm font-bold bg-background1 rounded-lg md:flex" onClick={() => {upvoteHandler(suggestion.title)}}>   
            <img src="./shared/icon-arrow-up.svg" alt=" " /> {suggestion[0] ? suggestion[0].upvotes : suggestion.upvotes}
        </button>
    );

    return (
        <button className="flex items-center gap-2 px-4 py-1 text-text1 text-sm font-bold bg-background1 rounded-lg md:hidden"><img src="./shared/icon-arrow-up.svg" alt=" " /> {suggestion[0] ? suggestion[0].upvotes : suggestion.upvotes}</button>
    );
    
}

export default UpvoteBtn