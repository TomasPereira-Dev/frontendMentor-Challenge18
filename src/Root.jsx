import FeedbackBoard from "./Pages/FeedbackBoard.jsx";
import AddFeedbackPage from "./Pages/AddFeedbackPage.jsx";

import { Route, Routes, ScrollRestoration } from "react-router-dom";

const Root = () => {

  return (
    <>
      <ScrollRestoration />
      <Routes>
        <Route path="/" element={<FeedbackBoard />}/>
        <Route path="add-feedback" element={<AddFeedbackPage />} />      
      </Routes>
    </>

  )
}

export default Root
