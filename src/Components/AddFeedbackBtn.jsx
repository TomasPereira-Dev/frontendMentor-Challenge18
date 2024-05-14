import { Link } from "react-router-dom";

const AddFeedbackBtn = () => {
    return(
        <Link className="p-3 bg-purple rounded-xl">
            <p className="text-white font-bold">+ Add Feedback</p>
        </Link>
    )
}

export default AddFeedbackBtn;