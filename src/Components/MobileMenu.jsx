import { Link } from "react-router-dom";

const MobileMenu = () => {
    return (
        <div className="absolute top-[4.5rem] flex justify-end w-full h-full bg-black/50">
            <div className="flex flex-col p-6 gap-8 w-3/4 bg-background1">
                <div className={`${'md:flex'} hidden items-end p-6 bg-headerBg bg-cover rounded-lg`}>
                    <div className="flex flex-col">
                        <p className="text-white font-bold">Frontend Mentor</p>
                        <p className="text-sm text-white font-bold">Feedback Board</p> 
                    </div>
                </div>
                <div className="flex flex-wrap gap-x-2 gap-y-4 p-6 bg-white rounded-lg">
                    <button className="text-text2 text-sm px-4 py-1 font-bold bg-background1 rounded-lg">All</button>
                    <button className="text-text2 text-sm px-4 py-1 font-bold bg-background1 rounded-lg">UI</button>
                    <button className="text-text2 text-sm px-4 py-1 font-bold bg-background1 rounded-lg">UX</button>
                    <button className="text-text2 text-sm px-4 py-1 font-bold bg-background1 rounded-lg">Enhancement</button>
                    <button className="text-text2 text-sm px-4 py-1 font-bold bg-background1 rounded-lg">Bug</button>
                    <button className="text-text2 text-sm px-4 py-1 font-bold bg-background1 rounded-lg">Feature</button>
                </div>
                <div className="flex flex-col gap-8 p-6 bg-white rounded-lg">
                    <div className="flex justify-between items-center">
                        <p className="font-bold">Roadmap</p>
                        <Link className="text-text2 hover:underline">View</Link>
                    </div>
                    <ul className="flex flex-col gap-2 text-slate-500">
                        <li className="flex justify-between items-center before:absolute before:content-[''] before:p-1 before:bg-orange before:rounded-full"><p className="ml-4">Planned</p> <p>{"data"}</p></li>
                        <li className="flex justify-between items-center before:absolute before:content-[''] before:p-1 before:bg-purple before:rounded-full" ><p className="ml-4">In Progress</p> <p>{"data"}</p></li>
                        <li className="flex justify-between items-center before:absolute before:content-[''] before:p-1 before:bg-blue before:rounded-full"><p className="ml-4">Live</p> <p>{"data"}</p></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MobileMenu;
