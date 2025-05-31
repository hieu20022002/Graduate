import React from "react";
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import Invitation from "./Invitation";

const InvitationPage = () => {
  const { guest } = useParams();
  // Map guest slug to name, ví dụ lấy từ guests.json hoặc hardcode
  const guestMap: Record<string, string> = {
    "nguyen-van-a": "Nguyễn Văn A",
    "tran-van-b": "Trần Văn B",
    "le-thi-c": "Lê Thị C",
  };
  const guestName = guestMap[guest || ""] || "Quý khách";
  return <Invitation guestName={guestName} />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/invitation/:guest" element={<InvitationPage />} />
        {/* Route mặc định hoặc trang chủ */}
        <Route path="*" element={<div>Trang không tồn tại</div>} />
      </Routes>
    </Router>
  );
}

export default App;
