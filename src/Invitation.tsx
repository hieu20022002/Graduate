import React from "react";

interface InvitationProps {
  guestName: string;
}

const Invitation: React.FC<InvitationProps> = ({ guestName }) => (
  <div className="container">
    <div className="invitation-card">
      {/* ...glitter and decoration elements... */}
      <div className="card-content">
        <h3 className="pre-heading">Thư mời đến dự</h3>
        <h1 className="main-heading">Lễ Tốt Nghiệp</h1>
        <h2 className="honoree">của</h2>
        {/* ...photo... */}
        <h2 className="graduate-name">Minh Hiếu</h2>
        <p className="invitation-text">
          Thân mời <span className="highlight">{guestName}</span> đến dự lễ tốt
          nghiệp của Minh Hiếu. Và cùng tạo nên thêm kỷ niệm đáng nhớ với Minh
          Hiếu nhé.
        </p>
        {/* ...details... */}
        <div className="rsvp-section">
          <p>
            Sự có mặt của <span className="highlight">{guestName}</span> là niềm
            hạnh phúc đối với Minh Hiếu. Cảm ơn
            <span className="highlight">{guestName}</span> vì đã là một phần kỷ
            niệm đẹp với Minh Hiếu.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Invitation;