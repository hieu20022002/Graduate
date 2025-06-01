import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import '../styles.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
function createSparkle() {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.style.left = `${Math.random() * 100}vw`;
  sparkle.style.animationDuration = `${2 + Math.random() * 2}s`;
  sparkle.style.opacity = `${0.6 + Math.random() * 0.4}`;
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 4000);
}
setInterval(createSparkle, 250);