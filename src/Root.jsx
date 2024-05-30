import FeedbackBoard from "./Pages/FeedbackBoard.jsx";
import AddFeedbackPage from "./Pages/AddFeedbackPage.jsx";
import DetailsPage from "./Pages/DetailsPage.jsx";

import { Route, Routes, ScrollRestoration } from "react-router-dom";
import EditFeedbackPage from "./Pages/EditFeedbackPage.jsx";

const Root = () => {

  return (
    <>
      <ScrollRestoration />
      <Routes>
        <Route path="/" element={<FeedbackBoard />} />
        <Route path="add-feedback" element={<AddFeedbackPage />} />
        <Route path="/:feedbackTitle" element={<DetailsPage />}  />
        <Route path="/edit/:editFeedbackTitle" element={<EditFeedbackPage />} />     
      </Routes>
    </>

  )
}

export default Root
