import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import MobileMenu from "../Components/MobileMenu";
import data from "../../data.json"


const FeedbackBoard = () => {
    const [selectedSort, setSelectedSort] = useState("Most Upvotes");
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
    const [dropDownIsOpen, setDropdownIsOpen] = useState(false);
    const mostUpvotesRef = useRef("");
    const leastUpvotesRef = useRef("");
    const mostCommentsRef = useRef("");
    const leastCommentsRef = useRef("");
    return (
        <>
        <header className="flex justify-between items-center p-4 bg-mobileHeaderBg bg-cover">
            <div>
                <p className="text-white font-bold">Frontend Mentor</p>
                <p className="text-xs text-white font-bold">Feedback Board</p>
            </div>
            <div onClick={()=> {setMobileMenuIsOpen(!mobileMenuIsOpen)}}>
                {mobileMenuIsOpen ? <img src="./shared/mobile/icon-close.svg" alt=" "/>  
                : <img src="./shared/mobile/icon-hamburger.svg" alt=" " />}
            </div>
        </header>
        {mobileMenuIsOpen && createPortal(<MobileMenu mobileMenuIsOpen={mobileMenuIsOpen}/> ,document.getElementById("mobile-menu-portal"))}
        <main>
            <div className="flex justify-between items-center p-4 text-sm bg-background2"  onMouseLeave={() => {setDropdownIsOpen(false)}}>
                <div className="relative flex items-center gap-2 w-fit" onMouseEnter={() => {setDropdownIsOpen(true)}}>
                    <p className="text-white">Sort by: <span className="font-bold">{selectedSort}</span></p>
                    <img className={dropDownIsOpen && 'rotate-180'} src="./shared/icon-arrow-down.svg" alt=" " />
                    <ul className={`${dropDownIsOpen ? 'block' : 'hidden'} absolute top-11 w-64 bg-white rounded-lg shadow`}>
                       <li className="flex justify-between items-center px-6 py-3 text-slate-500 border-b">
                            <button className={`${selectedSort === mostUpvotesRef.current.innerText && 'text-purple'} text-base`} ref={mostUpvotesRef} onClick={(e) => {setSelectedSort(e.target.innerText)}}>Most Upvotes</button>
                            <img className={`${selectedSort === mostUpvotesRef.current.innerText ? 'block' : 'hidden'}`} src="./shared/icon-check.svg" alt=" " />
                        </li>
                        <li className="flex justify-between items-center px-6 py-3 text-slate-500 border-b">
                            <button className={`${selectedSort === leastUpvotesRef.current.innerText && 'text-purple'} text-base`} ref={leastUpvotesRef} onClick={(e) => {setSelectedSort(e.target.innerText)}}>Least Upvotes</button>
                            <img className={`${selectedSort === leastUpvotesRef.current.innerText ? 'block' : 'hidden'}`} src="./shared/icon-check.svg" alt=" " />
                        </li>
                        <li className="flex justify-between items-center px-6 py-3 text-slate-500 border-b">
                            <button className={`${selectedSort === mostCommentsRef.current.innerText && 'text-purple'} text-base`} ref={mostCommentsRef} onClick={(e) => {setSelectedSort(e.target.innerText)}}>Most Comments</button>
                            <img className={`${selectedSort === mostCommentsRef.current.innerText ? 'block' : 'hidden'}`} src="./shared/icon-check.svg" alt=" " />
                        </li>
                        <li className="flex justify-between items-center px-6 py-3 text-slate-500">
                            <button className={`${selectedSort === leastCommentsRef.current.innerText && 'text-purple'} text-base`} ref={leastCommentsRef} onClick={(e) => {setSelectedSort(e.target.innerText)}}>Least Comments</button>
                            <img className={`${selectedSort === leastCommentsRef.current.innerText ? 'block' : 'hidden'}`} src="./shared/icon-check.svg" alt=" " />
                        </li>
                    </ul>
                </div>
                <Link className="px-4 py-2 bg-purple rounded-lg">
                    <p className="text-white font-bold">+ Add Feedback</p>
                </Link>
            </div>
            <ul className="grid gap-6 p-6"> 
                {Array.from(data.productRequests).map((productRequest) => {
                    const categoryToUpperCase = productRequest.category.charAt(0).toUpperCase() + productRequest.category.slice(1);
                    return (
                    <li className="flex flex-col gap-6 p-8 bg-white rounded-lg" key={productRequest.id}>
                        <div className="flex flex-col gap-2 text-sm">
                            <h2 className="text-text1 font-bold">{productRequest.title}</h2>
                            <p className="text-slate-500">{productRequest.description}</p>
                            <p className="w-fit px-4 py-1 text-text2 font-bold bg-background1 rounded-lg">{categoryToUpperCase}</p>
                        </div>
                        
                        <div className="flex justify-between">
                            <button className="flex items-center gap-2 text-text1 text-sm px-4 py-1 font-bold bg-background1 rounded-lg"><img src="./shared/icon-arrow-up.svg" alt=" " /> {productRequest.upvotes}</button>
                            <div className="flex items-center gap-2">
                                <img src="./shared/icon-comments.svg" alt=" " />
                                <p className="text-sm font-bold">{productRequest.comments ? productRequest.comments.length : 0}</p>
                            </div>
                        </div>
                    </li>

                    )
                })}
            </ul>
        </main>
        </>
    )
}

export default FeedbackBoard;