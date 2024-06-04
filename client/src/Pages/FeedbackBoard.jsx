import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import MobileMenu from "../Components/MobileMenu.jsx";
import AddFeedbackBtn from "../Components/AddFeedbackBtn.jsx";
import LogoCard from "../Components/LogoCard.jsx";
import Filter from "../Components/Filter.jsx";
import RoadmapPreview from "../Components/RoadmapPreview.jsx";
import data from "../../data.json";


const FeedbackBoard = () => {

    const [selectedSort, setSelectedSort] = useState("Most Upvotes");

    const selectionHandler = (selection) => {
        setSelectedSort(selection);

        const noCommentRequests = data.productRequests.filter((request) => !request.comments);
        const commentedRequest = data.productRequests.filter((request) => request.comments);
         
        switch(selection){
            case "Most Upvotes": 
                return setSuggestions(commentedRequest.sort((A, B) => B.upvotes - A.upvotes).concat(noCommentRequests));
            case "Least Upvotes":
                return setSuggestions(commentedRequest.sort((A, B) => A.upvotes - B.upvotes).concat(noCommentRequests));
            case "Most Comments":
                return setSuggestions(commentedRequest.sort((A, B) => B.comments.length - A.comments.length).concat(noCommentRequests));
            case "Least Comments":
                return setSuggestions(noCommentRequests.concat(commentedRequest.sort((A, B) => A.comments.length - B.comments.length)));
            default:
                return setSuggestions(commentedRequest.sort((A, B) => B.upvotes - A.upvotes).concat(noCommentRequests));
        }
    }

    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
    const [dropDownIsOpen, setDropdownIsOpen] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const mostUpvotesRef = useRef("");
    const leastUpvotesRef = useRef("");
    const mostCommentsRef = useRef("");
    const leastCommentsRef = useRef("");


    useEffect(() => { //tailwind doesn't have a way to change the <body> styles like styledComponents 
                    //this shouldn't be done, it's an exception
        if(mobileMenuIsOpen === false){ 
            document.querySelector("body").style.overflowY = "auto";
        }else{
            document.querySelector("body").style.overflowY = "hidden";
        }
        
    }, [mobileMenuIsOpen]);

    useEffect(() => {
        selectionHandler("Most Upvotes");
    }, [])

    useEffect(() => {
        axios.get("https://frontend-mentor-challenge18-server.vercel.app/").
        then(res => console.log(res))
    }, [])

    return (
        <>
        <header className={`flex justify-between items-center p-6 bg-mobileHeaderBg bg-cover md:hidden`}>
            <div>
                <p className="text-white font-bold">Frontend Mentor</p>
                <p className="text-xs text-white font-bold">Feedback Board</p>
            </div>
            <div onClick={()=> {setMobileMenuIsOpen(!mobileMenuIsOpen)}}>
                {mobileMenuIsOpen ? <img src="./shared/mobile/icon-close.svg" alt=" "/>  
                : <img src="./shared/mobile/icon-hamburger.svg" alt=" " />}
            </div>
        </header>
        <div className="hidden grid-cols-3 gap-2 px-8 my-8 mt-16 mb-12 md:grid xl:hidden">
            <LogoCard />
            <Filter setSuggestions={setSuggestions} selectionHandler={selectionHandler} />
            <RoadmapPreview />
        </div>
        {mobileMenuIsOpen && createPortal(<MobileMenu selectionHandler={selectionHandler} setSuggestions={setSuggestions}/> ,document.getElementById("mobile-menu-portal"))}
        <main className="md:px-8 lg:gap-8 lg:my-16 xl:flex xl:justify-center">
            <div className="hidden self-start w-[35%] gap-2 xl:grid">
                <LogoCard />
                <Filter setSuggestions={setSuggestions} selectionHandler={selectionHandler} />
                <RoadmapPreview />
            </div>

            <div className="w-full">
                <div className="flex justify-between p-6 py-2 text-sm bg-background2 md:rounded-lg md:p-4"  onMouseLeave={() => {setDropdownIsOpen(false)}}>
                    <div className="flex gap-4">
                        <div className="hidden items-center gap-2 md:flex">
                            <img src="./suggestions/icon-suggestions.svg" alt=" " />
                            <p className="text-white font-bold text-lg">{suggestions.length} Suggestions</p>
                        </div>
                        <div className="relative flex items-center gap-2 w-fit" onMouseEnter={() => {setDropdownIsOpen(true)}}>
                            <p className="text-white">Sort by: <span className="font-bold">{selectedSort}</span></p>
                            <img className={dropDownIsOpen ? 'rotate-180' : ''} src="./shared/icon-arrow-down.svg" alt=" " />
                            <ul className={`${dropDownIsOpen ? 'block' : 'hidden'} absolute top-[40px] w-64 bg-white rounded-lg shadow`}>
                               <li className="flex justify-between items-center px-6 py-3 text-slate-500 border-b">
                                    <button className={`${selectedSort === mostUpvotesRef.current.innerText && 'text-purple'} text-base`} ref={mostUpvotesRef} onClick={(e) => {selectionHandler(e.target.innerText)}}>Most Upvotes</button>
                                    <img className={`${selectedSort === mostUpvotesRef.current.innerText ? 'block' : 'hidden'}`} src="./shared/icon-check.svg" alt=" " />
                                </li>
                                <li className="flex justify-between items-center px-6 py-3 text-slate-500 border-b">
                                    <button className={`${selectedSort === leastUpvotesRef.current.innerText && 'text-purple'} text-base`} ref={leastUpvotesRef} onClick={(e) => {selectionHandler(e.target.innerText)}}>Least Upvotes</button>
                                    <img className={`${selectedSort === leastUpvotesRef.current.innerText ? 'block' : 'hidden'}`} src="./shared/icon-check.svg" alt=" " />
                                </li>
                                <li className="flex justify-between items-center px-6 py-3 text-slate-500 border-b">
                                    <button className={`${selectedSort === mostCommentsRef.current.innerText && 'text-purple'} text-base`} ref={mostCommentsRef} onClick={(e) => {selectionHandler(e.target.innerText)}}>Most Comments</button>
                                    <img className={`${selectedSort === mostCommentsRef.current.innerText ? 'block' : 'hidden'}`} src="./shared/icon-check.svg" alt=" " />
                                </li>
                                <li className="flex justify-between items-center px-6 py-3 text-slate-500">
                                    <button className={`${selectedSort === leastCommentsRef.current.innerText && 'text-purple'} text-base`} ref={leastCommentsRef} onClick={(e) => {selectionHandler(e.target.innerText)}}>Least Comments</button>
                                    <img className={`${selectedSort === leastCommentsRef.current.innerText ? 'block' : 'hidden'}`} src="./shared/icon-check.svg" alt=" " />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <AddFeedbackBtn />
                </div>
                <ul className="grid gap-6 p-6 md:px-0"> 
                    {suggestions.length ? suggestions.map((suggestion) => {
                           const categoryToUpperCase = suggestion.category.charAt(0).toUpperCase() + suggestion.category.slice(1);
                        return (
                            <li className="flex flex-col gap-6 p-6 bg-white rounded-lg md:flex-row md:justify-between md:p-8" key={suggestion.id}>
                            <div className="flex flex-col gap-8 md:flex-row">
                                <button className="hidden flex-col self-start items-center gap-2 p-2 text-text1 text-sm font-bold bg-background1 rounded-lg
                                md:flex"><img src="./shared/icon-arrow-up.svg" alt=" " /> {suggestion.upvotes}</button>
                                <Link to={`/${suggestion.title}`} className="flex flex-col gap-2">
                                    <h2 className="text-text1 font-bold text-sm md:text-lg">{suggestion.title}</h2>
                                    <p className="text-slate-500 text-sm md:text-base">{suggestion.description}</p>
                                    <p className="w-fit px-4 py-1 text-text2 text-sm font-bold bg-background1 rounded-lg">{categoryToUpperCase}</p>
                                </Link>
                    
                                <div className="flex justify-between">
                                    <button className="flex items-center gap-2 px-4 py-1 text-text1 text-sm font-bold bg-background1 rounded-lg md:hidden"><img src="./shared/icon-arrow-up.svg" alt=" " /> {suggestion.upvotes}</button>
                                    <div className="flex items-center gap-2 md:hidden">
                                        <img src="./shared/icon-comments.svg" alt=" " />
                                        <p className="text-sm font-bold">{suggestion.comments ? suggestion.comments.length : 0}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden items-center gap-2 md:flex">
                                <img src="./shared/icon-comments.svg" alt=" " />
                                <p className="text-sm font-bold">{suggestion.comments ? suggestion.comments.length : 0}</p>
                            </div>
                        </li>
                        )
                    }) :
                        <div className="flex flex-col justify-center items-center px-8 py-24 bg-white rounded-lg">
                            <img className="mb-10" src="./suggestions/illustration-empty.svg" alt=" " />
                            <div className="mb-6">
                                <h2 className="text-lg text-text1 text-center">There is no feedback yet.</h2>
                                <p className="text-sm text-slate-500 text-center">Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
                            </div>
                            <AddFeedbackBtn />
                        </div>
                    }
                </ul>
            </div>
        </main>
        </>
    )
}

export default FeedbackBoard;