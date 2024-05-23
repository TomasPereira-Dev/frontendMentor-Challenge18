import { useState } from "react";
import { Link ,useNavigate, useParams } from "react-router-dom";
import data from "../../data.json";


const DetailsPage = () => {

    const [isReplyOpen, setIsReplyOpen] = useState(false); 

    const navigate = useNavigate();
    const {feedbackTitle} = useParams();
    
    const suggestion = data.productRequests.filter((suggestion) => suggestion.title == feedbackTitle);
    const categoryToUpperCase = suggestion[0].category.charAt(0).toUpperCase() + suggestion[0].category.slice(1);

    return(
        <main className="flex flex-col items-center gap-8 p-6">
            <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center">
                    <div>
                        <button className="flex items-center gap-2 text-sm text-slate-500 font-semibold" onClick={() => navigate(-1)}>
                            <img src="./shared/icon-arrow-left.svg" alt=" " />
                            <span>Go back</span>
                        </button>
                    </div>
                    <Link className="px-4 py-2 text-sm text-white font-bold bg-background3 rounded-lg" to="/"><p>Edit Feedback</p></Link>
                </div>
                <div className="flex flex-col gap-6 p-6 bg-white rounded-lg md:flex-row md:justify-between md:p-8">
                    <div className="flex flex-col gap-8 md:flex-row">
                        <button className="hidden flex-col self-start items-center gap-2 p-2 text-text1 text-sm font-bold bg-background1 rounded-lg
                        md:flex"><img src="./shared/icon-arrow-up.svg" alt=" " /> {suggestion[0].upvotes}</button>
                        <Link to={`/${suggestion[0].title}`} className="flex flex-col gap-2">
                            <h2 className="text-text1 font-bold text-sm md:text-lg">{suggestion[0].title}</h2>
                            <p className="text-slate-500 text-sm md:text-base">{suggestion[0].description}</p>
                            <p className="w-fit px-4 py-1 text-text2 text-sm font-bold bg-background1 rounded-lg">{categoryToUpperCase}</p>
                        </Link>

                        <div className="flex justify-between">
                            <button className="flex items-center gap-2 px-4 py-1 text-text1 text-sm font-bold bg-background1 rounded-lg md:hidden"><img src="./shared/icon-arrow-up.svg" alt=" " /> {suggestion[0].upvotes}</button>
                            <div className="flex items-center gap-2 md:hidden">
                                <img src="./shared/icon-comments.svg" alt=" " />
                                <p className="text-sm font-bold">{suggestion[0].comments ? suggestion[0].comments.length : 0}</p>
                            </div>
                        </div>
                    </div>

                    <div className="hidden items-center gap-2 md:flex">
                        <img src="./shared/icon-comments.svg" alt=" " />
                        <p className="text-sm font-bold">{suggestion[0].comments ? suggestion[0].comments.length : 0}</p>
                    </div>
                </div>
                <div className="flex flex-col p-6 bg-white rounded-lg">
                    <h2 className="text-text1 text-lg font-bold">{suggestion[0].comments ? suggestion[0].comments.length : 0} Comments</h2>
                    <ul className="flex flex-col gap-4 divide-y">
                        {suggestion[0].comments && suggestion[0].comments.map((comment) => 
                            <li className="py-4" key={comment.id}>
                                <div className="flex justify-between items-center mb-4">
                                    <div className="flex items-center gap-4">
                                        <img className="w-10 rounded-full" src={comment.user.image} alt=" " />
                                        <div>
                                            <p className="text-sm text-text1 font-bold">{comment.user.name}</p>
                                            <p className="text-xs text-slate-500">@{comment.user.username}</p>
                                        </div>
                                    </div>
                                    <button id={comment.id} className="text-sm text-text2 font-bold">Reply</button>
                                </div>
                                <p className="text-sm text-slate-500">{comment.content}</p>

                                <form className="flex flex-col mt-4" >
                                    <textarea className="p-6 my-4 text-sm bg-background1 rounded-lg border-none outline-1 outline-blue resize-none focus:outline" placeholder="Type your reply here" rows="2" maxLength="250"/>
                                    <button className="px-4 py-3 text-sm text-white font-bold bg-purple rounded-lg">Post Reply</button>
                                </form>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </main>
    )  
}

export default DetailsPage;