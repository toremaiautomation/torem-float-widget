(function () {
  if (document.getElementById("torem-widget")) return;

  const chatBtn = document.createElement("div");
  chatBtn.id = "torem-widget";
  chatBtn.innerHTML = "💬";
  Object.assign(chatBtn.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "60px",
    height: "60px",
    background: "#1f2937",
    color: "#fff",
    fontSize: "28px",
    fontWeight: "bold",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    zIndex: "9999",
    boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
  });

  chatBtn.onclick = function () {
    const existing = document.getElementById("torem-chat-iframe");
    if (existing) {
      existing.remove();
      return;
    }

    const iframe = document.createElement("iframe");
    iframe.id = "torem-chat-iframe";
    iframe.src = "https://toremai.com/chat-ui";
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
})();
