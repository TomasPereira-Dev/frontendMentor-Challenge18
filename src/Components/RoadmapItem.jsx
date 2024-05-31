const RoadmapItem = () => {
    return(
        <li className=" flex flex-col p-6 bg-white border-t-8 border-t-orange rounded-lg">
            <div className="relative ml-3">
                <p className="flex items-center text-sm text-slate-500 
                before:content-[''] before:absolute before:-left-3 before:p-1 before:rounded-full before:bg-orange">item state</p>
            </div>
            
            <div>
                <h3 className="text-sm text-text1 font-bold">item title</h3>
                <p className="text-sm text-slate-500">item description</p>
                <p className="w-fit px-3 py-1 text-sm text-text2 font-bold bg-background1 rounded-lg">item category</p>
            </div>

            <div className="flex justify-between items-center">
                <button className="flex justify-between items-center gap-2 px-3 py-1 text-sm text-text1 font-bold bg-background1 rounded-lg">
                    <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 6l4-4 4 4" stroke="#4661E6" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
                    <span>upvotes amount</span>
                </button>
                <div className="flex items-center gap-2">
                    <img src="/shared/icon-comments.svg" alt=" " />
                    <p>amount</p>
                </div>
            </div>  
        </li>
    )
}

export default RoadmapItem;