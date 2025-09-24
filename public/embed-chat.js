(function () {
  if (document.getElementById("torem-widget")) return;

  // Create the floating chat button
  const chatBtn = document.createElement("div");
  chatBtn.id = "torem-widget";

  // Logo image inside button
  chatBtn.innerHTML = '<img src="https://torem-float-widget.vercel.app/Image.png" alt="Chat" style="width: 54px; height: 54px; border-radius: 50%; object-fit: cover;" />';

  // Style the button
  Object.assign(chatBtn.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
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
    transition: "all 0.2s ease",
    opacity: "0",
    transform: "translateY(20px)",
    animation: "slideIn 0.5s ease-out forwards"
  });

  // Hover animation
  chatBtn.onmouseenter = function () {
    chatBtn.style.transform = "scale(1.1)";
    chatBtn.style.boxShadow = "0 0 12px #3b82f6";
  };

  chatBtn.onmouseleave = function () {
    chatBtn.style.transform = "scale(1)";
    chatBtn.style.boxShadow = "0 4px 8px rgba(0,0,0,0.3)";
  };

  // Toggle iframe on button click
  chatBtn.onclick = function () {
    const existing = document.getElementById("torem-chat-iframe");
    if (existing) {
      existing.remove();
      return;
    }

    const iframe = document.createElement("iframe");
    iframe.id = "torem-chat-iframe";
    iframe.src = "https://yourdomain.com/chat-ui"; // 🔁 Replace with real chat UI URL
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

  // Add button and animation style to document
  document.body.appendChild(chatBtn);

  const styleTag = document.createElement("style");
  styleTag.innerHTML = `
    @keyframes slideIn {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(styleTag);
})();
