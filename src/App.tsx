import React from "react";
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import Invitation from "./Invitation";
import guests from "../public/guests.json";

const InvitationPage = () => {
  const { guestSlug } = useParams();
  const guest = guests.find(g => g.route === `/invitation/${guestSlug}`);
  const guestName = guest?.name || "Quý khách";

  return <Invitation guestName={guestName} />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/invitation/:guestSlug" element={<InvitationPage />} />
        <Route path="/" element={<div>Trang chủ</div>} />
        <Route path="*" element={<div>Trang không tồn tại</div>} />
      </Routes>
    </Router>
  );
}

export default App;