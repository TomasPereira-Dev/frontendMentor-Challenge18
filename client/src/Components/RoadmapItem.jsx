const RoadmapItem = ({title, description, status, category, upvotes, comments}) => {
    return(
        <li className={`flex flex-col gap-4 p-6 bg-white border-t-8 ${status === "planned" ? 'border-t-orange' : status === "in-progress" ? 'border-t-purple' : 'border-t-blue'} rounded-lg`}> 
            <div className="relative ml-3">
                <p className={`flex items-center text-sm text-slate-500
                ${status === "planned" ? 'before:bg-orange' : status === "in-progress" ? 'before:bg-purple' : 'before:bg-blue'} 
                before:content-[''] before:absolute before:-left-3 before:p-1 before:rounded-full`}>{status}</p>
            </div>
            
            <div>
                <h3 className="text-sm text-text1 font-bold">{title}</h3>
                <p className="my-2 text-sm text-slate-500">{description}</p>
                <p className="w-fit px-3 py-1 text-sm text-text2 font-bold bg-background1 rounded-lg">{category}</p>
            </div>

            <div className="flex justify-between items-center">
                <button className="flex justify-between items-center gap-2 px-3 py-1 text-sm text-text1 font-bold bg-background1 rounded-lg">
                    <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 6l4-4 4 4" stroke="#4661E6" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
                    <span>{upvotes}</span>
                </button>
                <div className="flex items-center gap-2">
                    <img src="/shared/icon-comments.svg" alt=" " />
                    <p className="text-sm text-text1 font-bold">{comments ? comments.length : 0}</p>
                </div>
            </div>  
        </li>
    )
}

export default RoadmapItem;