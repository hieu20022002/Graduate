import React from "react";

interface InvitationProps {
  guestName: string;
}

const Invitation: React.FC<InvitationProps> = ({ guestName }) => (
  <div className="container">
    <div className="invitation-card">
      {/* ...existing glitter and decoration code... */}

      <div className="card-content">
        <h3 className="pre-heading">Thư mời đến dự</h3>
        <h1 className="main-heading">Lễ Tốt Nghiệp</h1>
        <div className="photo-container">
          <div className="photo-frame">
            <div className="photo-placeholder">
              <img src="/avt.JPG" className="photo" alt="Graduate" />
            </div>
          </div>
        </div>

        <h2 className="graduate-name">Minh Hiếu</h2>

        <p className="invitation-text">
          Thân mời <span className="highlight">{guestName}</span> đến dự lễ tốt
          nghiệp của Minh Hiếu. Và cùng tạo nên thêm kỷ niệm đáng nhớ với Minh
          Hiếu nhé.
        </p>

        <div className="details-container">
          <div className="detail-item">
            <div className="detail-icon date-icon"></div>
            <div className="detail-text">
              <h4>DATE & TIME</h4>
              <p>Saturday, June 7, 2025</p>
              <p>11:30 AM - 12:15 PM</p>
            </div>
          </div>

          <div className="detail-item">
            <div className="detail-icon location-icon"></div>
            <div className="detail-text">
              <h4>LOCATION</h4>
              <p>University of Information Technology</p>
              <p>Vietnam National University, HCM City</p>
              <a
                href="https://www.google.com/maps?q=UIT"
                target="_blank"
                rel="noopener noreferrer"
                className="map-link"
              >
                View on Google Maps
              </a>
            </div>
          </div>

          {/* Thêm phần contact */}
            <div className="detail-item">
              <div className="detail-icon phone-icon" aria-label="Phone"></div>
              <div className="detail-text">
                <h4>CONTACT</h4>
                <p>Minh Hiếu</p>
                <a 
                  href="tel:+84328357464" 
                  className="phone-link"
                  aria-label="Call Minh Hieu"
                >
                  0328.357.464
                </a>
              </div>
            </div>
        </div>

        <div className="rsvp-section">
          <p>
            Sự có mặt của <span className="highlight">{guestName}</span> là niềm
            hạnh phúc đối với Minh Hiếu. Cảm ơn{" "}
            <span className="highlight">{guestName}</span> vì đã là một phần kỷ
            niệm đẹp với Minh Hiếu.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Invitation;