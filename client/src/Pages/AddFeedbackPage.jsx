import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const AddFeedbackPage = () => {

    const [category, setCategory] = useState("Feature");
    const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

    const navigate = useNavigate();


    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = (data) => console.log(data);

    const featureRef = useRef("");
    const uiRef= useRef("");
    const uxRef = useRef("");
    const enhancementRef = useRef("");
    const bugRef = useRef("");

    console.log(watch("category"))

    return(
        <main className="flex flex-col justify-center items-center h-dvh p-6 my-16">
            <div>
                <button onClick={() => {navigate(-1)}} className="flex items-center gap-4 mb-10">
                    <img src="./shared/icon-arrow-left.svg" alt=" " />
                    <p className="text-slate-500 text-xs font-bold">Go Back</p>
                </button>
                <div className="relative flex flex-col gap-6 px-6 py-10 pb-6 bg-white rounded-lg shadow">
                    <div className="absolute left-6 -top-4 w-10">
                        <img src="./shared/icon-new-feedback.svg" alt=" " />
                    </div>
        
                    <h1 className="text-lg text-text1 font-bold">Create New Feedback</h1>
        
                    <form className="flex flex-col gap-4" id="form" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <div className="mb-2">
                                <h2 className="text-sm text-text1 font-bold md:text-base">Feedback Title</h2>
                                <p className="text-sm text-slate-500">Add a short, descriptive headline</p>
                            </div>
                            <input className={`w-full px-4 py-3 text-sm bg-background1 rounded-lg ${errors.feedbackTitle ? 'outline outline-1 outline-red-500 caret-red-500' : 'outline-none'}`} {...register("feedbackTitle", {required: true, pattern: /\S/})} type="text" />
                            {errors.feedbackTitle && <span className="text-sm text-red-500">this is required</span>}
                        </div>
                        <div>
                            <div className="mb-2" >
                                <h2 className="text-sm text-text1 font-bold md:text-base">Category</h2>
                                <p className="text-sm text-slate-500">Choose a categoy for your feedback</p>
                                <div className="relative px-4 py-3 w-full bg-background1 rounded-lg cursor-pointer" defaultValue={"Feature"} {...register("category")} onClick={() => {setDropdownIsOpen(!dropdownIsOpen)}}>
                                    <div className="flex justify-between items-center">
                                        <p className="text-text1 text-sm">{category}</p>
                                        <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4 4-4" stroke="#4661E6" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
                                    </div>
                                    <ul className={`absolute top-full left-0 ${dropdownIsOpen ? 'block' : 'hidden'} w-full bg-white rounded-b-lg divide-y shadow-lg`}>
                                        <li className={`flex justify-between items-center px-4 py-3 ${category === featureRef.current.textContent ? 'text-purple' : 'text-text1'} cursor-pointer`} onClick={(e) => {setCategory(e.target.innerText)}}><p ref={featureRef}>Feature</p> <img className={`${category === featureRef.current.textContent ? 'block': 'hidden' }`} src="./shared/icon-check.svg" alt=" " /></li>
                                        <li className={`flex justify-between items-center px-4 py-3 ${category === uiRef.current.textContent ? 'text-purple' : 'text-text1'} cursor-pointer`} onClick={(e) => {setCategory(e.target.innerText)}}><p ref={uiRef}>UI</p> <img className={`${category === uiRef.current.textContent ? 'block': 'hidden' }`} src="./shared/icon-check.svg" alt=" " /></li>
                                        <li className={`flex justify-between items-center px-4 py-3 ${category === uxRef.current.textContent ? 'text-purple' : 'text-text1'} cursor-pointer`} onClick={(e) => {setCategory(e.target.innerText)}}><p ref={uxRef}>UX</p><img className={`${category === uxRef.current.textContent ? 'block': 'hidden' }`} src="./shared/icon-check.svg" alt=" " /></li>
                                        <li className={`flex justify-between items-center px-4 py-3 ${category === enhancementRef.current.textContent ? 'text-purple' : 'text-text1'} cursor-pointer`} onClick={(e) => {setCategory(e.target.innerText)}}><p ref={enhancementRef}>Enhancement</p> <img className={`${category === enhancementRef.current.textContent ? 'block': 'hidden' }`} src="./shared/icon-check.svg" alt=" " /></li>
                                        <li className={`flex justify-between items-center px-4 py-3 ${category === bugRef.current.textContent ? 'text-purple' : 'text-text1'} cursor-pointer`} onClick={(e) => {setCategory(e.target.innerText)}}><p ref={bugRef}>Bug</p> <img className={`${category === bugRef.current.textContent ? 'block': 'hidden' }`} src="./shared/icon-check.svg" alt=" " /></li>
                                    </ul> 
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="mb-2">
                                <h2 className="text-sm text-text1 font-bold md:text-base">Feedback Detail</h2>
                                <p className="text-sm text-slate-500">Include any specific comments on what should be improved, added, etc.</p>
                            </div>
                            <input className={`w-full px-4 py-3 text-sm bg-background1  rounded-lg ${errors.feedbackDetail ? 'outline outline-1 outline-red-500 caret-red-500' : 'outline-none'}`} {...register("feedbackDetail", {required: true, pattern: /\S/})} type="text" />
                            {errors.feedbackDetail && <span className="text-sm text-red-500">this is required</span>}
                        </div>
                    </form>  
                    <div className="flex flex-col">
                        <button className="w-full py-3 mb-4 text-white text-xs font-bold bg-purple rounded-lg" form="form" >Add Feedback</button>
                        <Link className="py-3 text-white text-xs text-center font-bold bg-background2 rounded-lg" to="/" >Cancel</Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AddFeedbackPage;