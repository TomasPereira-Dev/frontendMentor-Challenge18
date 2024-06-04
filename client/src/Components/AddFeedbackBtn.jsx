import { Link } from "react-router-dom";

const AddFeedbackBtn = () => {
    return(
        <Link to="/add-feedback" className="p-3 bg-purple rounded-xl md:px-6">
            <p className="text-white font-bold">+ Add Feedback</p>
        </Link>
    )
}

export default AddFeedbackBtn;