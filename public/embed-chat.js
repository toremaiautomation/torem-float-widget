(function () {
  if (document.getElementById("torem-widget")) return;

  // Create the floating chat button
  const chatBtn = document.createElement("div");
  chatBtn.id = "torem-widget";

  // Logo inside the button
  chatBtn.innerHTML = `
    <img 
      src="https://torem-float-widget.vercel.app/Image.png" 
      alt="Chat" 
      style="width: 54px; height: 54px; border-radius: 50%; object-fit: cover;" 
    />
  `;

  // Base styling
  Object.assign(chatBtn.style, {
    position: "fixed",
    bottom: "20px",
    right: "-80px", // Start off-screen for animation
    width: "60px",
    height: "60px",
    background: "#ffffff",
    border: "2px solid #1f2937",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: "9999",
    boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
    opacity: "0",
    animation: "slideInRight 0.6s ease-out forwards",
  });

  // Hover effect (scale applied via CSS class to avoid overwrite)
  chatBtn.addEventListener("mouseenter", () => {
    chatBtn.style.boxShadow = "0 0 12px #3b82f6";
    chatBtn.style.transform = "scale(1.05)";
  });

  chatBtn.addEventListener("mouseleave", () => {
    chatBtn.style.boxShadow = "0 4px 8px rgba(0,0,0,0.3)";
    chatBtn.style.transform = "scale(1)";
  });

  // Click: toggle iframe
  chatBtn.onclick = function () {
    const existing = document.getElementById("torem-chat-iframe");
    if (existing) {
      existing.remove();
      return;
    }

    const iframe = document.createElement("iframe");
    iframe.id = "torem-chat-iframe";
    iframe.src = "https://yourdomain.com/chat-ui"; // Change this
    Object.assign(iframe.style, {
      position: "fixed",
      bottom: "90px",
      right: "20px",
      width: "400px",
      height: "500px",
      border: "none",
      borderRadius: "12px",
      boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
      zIndex: "9999",
    });
    document.body.appendChild(iframe);
  };

  document.body.appendChild(chatBtn);

  // Add animation CSS
  const styleTag = document.createElement("style");
  styleTag.innerHTML = `
    @keyframes slideInRight {
      0% {
        opacity: 0;
        right: -80px;
      }
      100% {
        opacity: 1;
        right: 20px;
      }
    }
  `;
  document.head.appendChild(styleTag);
})();
