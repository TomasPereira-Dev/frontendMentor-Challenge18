import { Link } from "react-router-dom";
import data from "../../data.json";

const RoadmapPreview = () => {

    const planned = data.productRequests.filter((request) => request.status === "planned").length;
    const inProgress = data.productRequests.filter((request) => request.status === "in-progress").length;
    const live = data.productRequests.filter((request) => request.status === "live").length;

    return(
        <div className="flex flex-col gap-8 p-6 bg-white rounded-lg">
            <div className="flex justify-between items-center">
                <h2 className="font-bold md:text-lg">Roadmap</h2>
                <Link className="text-text2 hover:underline">View</Link>
            </div>
            <ul className="flex flex-col gap-2 text-slate-500">
                <li className="flex justify-between items-center before:absolute before:content-[''] before:p-1 before:bg-orange before:rounded-full"><p className="ml-4">Planned</p> <p className="font-bold">{planned}</p></li>
                <li className="flex justify-between items-center before:absolute before:content-[''] before:p-1 before:bg-purple before:rounded-full" ><p className="ml-4">In Progress</p> <p className="font-bold">{inProgress}</p></li>
                <li className="flex justify-between items-center before:absolute before:content-[''] before:p-1 before:bg-blue before:rounded-full"><p className="ml-4">Live</p> <p className="font-bold">{live}</p></li>
            </ul>
        </div>
    )
}

export default RoadmapPreview;