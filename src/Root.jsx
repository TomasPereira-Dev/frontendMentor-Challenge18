import FeedbackBoard from "./Pages/FeedbackBoard.jsx";
import AddFeedbackPage from "./Pages/AddFeedbackPage.jsx";
import DetailsPage from "./Pages/DetailsPage.jsx";

import { Route, Routes, ScrollRestoration } from "react-router-dom";

const Root = () => {

  return (
    <>
      <ScrollRestoration />
      <Routes>
        <Route path="/" element={<FeedbackBoard />} />
        <Route path="add-feedback" element={<AddFeedbackPage />} /> 
        <Route path="/:feedbackTitle" element={<DetailsPage />} />     
      </Routes>
    </>

  )
}

export default Root
