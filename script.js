document.addEventListener('DOMContentLoaded', function() {
  // Photo upload functionality
  const photoUpload = document.getElementById('photo-upload');
  const photoPlaceholder = document.querySelector('.photo-placeholder');
  
  photoUpload.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file && file.type.match('image.*')) {
      const reader = new FileReader();
      
      reader.onload = function(e) {
        // Remove the placeholder text
        while (photoPlaceholder.firstChild) {
          photoPlaceholder.removeChild(photoPlaceholder.firstChild);
        }
        
        // Create and set the image
        const img = document.createElement('img');
        img.src = e.target.result;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        photoPlaceholder.appendChild(img);
      };
      
      reader.readAsDataURL(file);
    }
  });
  
  // Add subtle hover effects to the card
  const card = document.querySelector('.invitation-card');
  
  card.addEventListener('mousemove', function(e) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top;  // y position within the element
    
    // Calculate rotation based on mouse position
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Limit the rotation to a small amount
    const rotateY = ((x - centerX) / centerX) * 3; // max 3 degrees
    const rotateX = ((y - centerY) / centerY) * 3; // max 3 degrees
    
    // Apply the rotation
    card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
  });
  
  // Reset the card position when mouse leaves
  card.addEventListener('mouseleave', function() {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    setTimeout(() => {
      card.style.transition = 'transform 0.5s ease';
    }, 100);
  });
  
  // Add smooth transition on mouse enter
  card.addEventListener('mouseenter', function() {
    card.style.transition = 'transform 0.1s ease';
  });
  
  // Create animated particles for a more festive feel
  createParticles();
});

function createParticles() {
  const card = document.querySelector('.invitation-card');
  const container = document.createElement('div');
  container.className = 'particles-container';
  container.style.position = 'absolute';
  container.style.top = '0';
  container.style.left = '0';
  container.style.width = '100%';
  container.style.height = '100%';
  container.style.overflow = 'hidden';
  container.style.pointerEvents = 'none';
  container.style.zIndex = '1';
  
  card.appendChild(container);
  
  // Create 20 particles
  for (let i = 0; i < 20; i++) {
    createParticle(container);
  }
}

function createParticle(container) {
  const particle = document.createElement('div');
  
  // Random size between 2-4px
  const size = Math.random() * 2 + 2;
  
  particle.style.position = 'absolute';
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.background = 'rgba(212, 175, 55, 0.7)';
  particle.style.borderRadius = '50%';
  particle.style.boxShadow = '0 0 5px rgba(212, 175, 55, 0.5)';
  
  // Random starting position
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  particle.style.left = `${x}%`;
  particle.style.top = `${y}%`;
  
  // Random duration between 10-20s
  const duration = Math.random() * 10 + 10;
  
  // Randomly choose animation
  const animations = [
    'particle-float-1',
    'particle-float-2',
    'particle-float-3'
  ];
  const animation = animations[Math.floor(Math.random() * animations.length)];
  
  particle.style.animation = `${animation} ${duration}s infinite linear`;
  
  // Add the particle to the container
  container.appendChild(particle);
  
  // Create keyframes dynamically
  if (!document.getElementById('particle-animations')) {
    const style = document.createElement('style');
    style.id = 'particle-animations';
    style.innerHTML = `
      @keyframes particle-float-1 {
        0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(-100px) translateX(20px); }
      }
      
      @keyframes particle-float-2 {
        0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(-100px) translateX(-20px); }
      }
      
      @keyframes particle-float-3 {
        0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(-80px); }
      }
    `;
    document.head.appendChild(style);
  }
}