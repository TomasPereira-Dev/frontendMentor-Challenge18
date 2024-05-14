import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import MobileMenu from "../Components/MobileMenu.jsx";
import AddFeedbackBtn from "../Components/AddFeedbackBtn.jsx";
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

    useEffect(()=> {
        selectionHandler("Most Upvotes")
    }, [])

    return (
        <>
        <header className="flex justify-between items-center p-6 bg-mobileHeaderBg bg-cover">
            <div>
                <p className="text-white font-bold">Frontend Mentor</p>
                <p className="text-xs text-white font-bold">Feedback Board</p>
            </div>
            <div onClick={()=> {setMobileMenuIsOpen(!mobileMenuIsOpen)}}>
                {mobileMenuIsOpen ? <img src="./shared/mobile/icon-close.svg" alt=" "/>  
                : <img src="./shared/mobile/icon-hamburger.svg" alt=" " />}
            </div>
        </header>
        {mobileMenuIsOpen && createPortal(<MobileMenu selectionHandler={selectionHandler} suggestions={suggestions} setSuggestions={setSuggestions}/> ,document.getElementById("mobile-menu-portal"))}
        <main>
            <div className="flex justify-between items-center px-6 py-2 text-sm bg-background2"  onMouseLeave={() => {setDropdownIsOpen(false)}}>
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
                <AddFeedbackBtn />
            </div>
            <ul className="grid gap-6 p-6"> 
                {suggestions.length ? suggestions.map((suggestion) => {
                    const categoryToUpperCase = suggestion.category.charAt(0).toUpperCase() + suggestion.category.slice(1);
                    return (
                    <li className="flex flex-col gap-6 p-6 bg-white rounded-lg" key={suggestion.id}>
                        <div className="flex flex-col gap-2 text-sm">
                            <h2 className="text-text1 font-bold">{suggestion.title}</h2>
                            <p className="text-slate-500">{suggestion.description}</p>
                            <p className="w-fit px-4 py-1 text-text2 font-bold bg-background1 rounded-lg">{categoryToUpperCase}</p>
                        </div>
                        
                        <div className="flex justify-between">
                            <button className="flex items-center gap-2 text-text1 text-sm px-4 py-1 font-bold bg-background1 rounded-lg"><img src="./shared/icon-arrow-up.svg" alt=" " /> {suggestion.upvotes}</button>
                            <div className="flex items-center gap-2">
                                <img src="./shared/icon-comments.svg" alt=" " />
                                <p className="text-sm font-bold">{suggestion.comments ? suggestion.comments.length : 0}</p>
                            </div>
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
        </main>
        </>
    )
}

export default FeedbackBoard;