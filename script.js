/* ===== Matrix + Login + Site Logic ===== */

// ---- Matrix Effect (login screen only) ----
const canvas = document.getElementById("matrix");
const ctx = canvas ? canvas.getContext("2d") : null;

let matrixTimer = null;
if (canvas && ctx) {
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  const letters = "01H4K3R";
  const fontSize = 16;
  let columns = Math.floor(canvas.width / fontSize);
  let drops = Array(columns).fill(1);

  function draw() {
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff00";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
      const text = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  matrixTimer = setInterval(draw, 33);
}

// ---- Login Handling ----
const loginBtn = document.getElementById("loginBtn");
const errorEl = document.getElementById("error");

function stopMatrixAndShowSite() {
  // Stop animation + hide canvas + switch theme
  if (matrixTimer) {
    clearInterval(matrixTimer);
    matrixTimer = null;
  }
  if (canvas) {
    canvas.remove(); // pura canvas hata do
  }
  document.body.classList.remove("hacker-mode"); // scroll + hacker theme off

  // Hide login, show site
  document.getElementById("login-page").classList.add("hidden");
  document.getElementById("site-content").classList.remove("hidden");
}

// Default credentials (change here)
const VALID_USER = "H4K3R";
const VALID_PASS = "H4K3R";

function tryLogin() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  if (user === VALID_USER && pass === VALID_PASS) {
    errorEl.style.display = "none";
    stopMatrixAndShowSite();
  } else {
    errorEl.style.display = "block";
  }
}

if (loginBtn) {
  loginBtn.addEventListener("click", tryLogin);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !document.getElementById("site-content")?.classList.contains("hidden")) return;
    if (e.key === "Enter") tryLogin();
  });
}

/* ===== Your site JS (Payment popup) ===== */
const searchBtn = document.getElementById("searchBtn");
const resultDiv = document.getElementById("result");

if (searchBtn && resultDiv) {
  searchBtn.addEventListener("click", () => {
    const input = document.getElementById("searchInput").value.trim();

    if (input === "") {
      alert("Please enter a number or CNIC");
      return;
    }

    // Show EasyPaisa payment details (receipt style with close btn)
    resultDiv.innerHTML = `
      <div id="receiptBox" style="position:relative; max-width:400px; margin:20px auto; background:#111; border:2px solid #0f0; border-radius:12px; padding:20px; box-shadow:0 0 25px #0f0; text-align:center;">
        <button onclick="document.getElementById('receiptBox').remove();" 
          style="position:absolute; top:8px; right:10px; background:#ff0000; color:#fff; border:none; border-radius:50%; width:28px; height:28px; font-weight:bold; cursor:pointer;">
          ✖
        </button>

        <h2 style="color:#00ff00; margin-bottom:10px;">💳 Payment Required</h2>
        <p style="color:#ccc; font-size:14px;">To view details for:</p>
        <p style="color:#0f0; font-weight:bold; font-size:18px; margin-bottom:15px;">${input}</p>

        <div style="background:#000; border-radius:8px; padding:15px; text-align:left; color:#0f0; box-shadow:0 0 15px #0f0 inset;">
          <p><strong>Method:</strong> EasyPaisa</p>
          <p><strong>Account Holder:</strong> Usama Ahmed</p>
          <p><strong>Account Number:</strong> 03079970288</p>
          <p><strong>Amount:</strong> Rs.500</p>
        </div>

        <p style="margin-top:18px; color:#ccc; font-size:14px;">
          After payment, send screenshot to WhatsApp for verification:
        </p>

        <a href="https://wa.me/923190831123?text=Hi%20Sir!%20I%20have%20paid%20for%20details%20of%20${input}" 
          target="_blank"
          style="display:inline-block; margin-top:12px; padding:12px 20px; background:#0f0; color:#000; border-radius:8px; font-weight:bold; text-decoration:none; box-shadow:0 0 15px #0f0;">
          📱 Send Payment Screenshot
        </a>
      </div>
    `;
  });
}
