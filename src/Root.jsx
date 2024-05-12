import { Route, Routes, ScrollRestoration } from "react-router-dom";

import FeedbackBoard from "./Pages/FeedbackBoard.jsx";

const Root = () => {

  return (
    <>
      <ScrollRestoration />
      <Routes>
        <Route path="/" element={<FeedbackBoard />}/>
      </Routes>
    </>

  )
}

export default Root
