/* ===============================
   OWNER MODE
================================ */
let isOwner = sessionStorage.getItem("isOwner") === "true" || false;
const OWNER_PASS = "vedant007";

if (isOwner) {
    document.body.classList.add("admin-enabled");
}

window.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "l") {
        e.preventDefault();
        const pass = prompt("Enter Owner Password:");
        if (pass === OWNER_PASS) {
            isOwner = true;
            sessionStorage.setItem("isOwner", "true");
            document.body.classList.add("admin-enabled");
            alert("✅ Owner mode enabled!");
        } else {
            alert("❌ Incorrect password");
        }
    }
});

/* ===============================
   SAVE & LOAD SYSTEM (The "Save" and "Refresh" fix)
================================ */
function saveAllData() {
    if (!isOwner) return alert("❌ Only owner can save changes.");
    
    const profileImg = document.getElementById("profileImg").src;
    // Save the profile image string to local storage
    localStorage.setItem("savedProfile", profileImg);
    alert("💾 All changes saved to this browser!");
}

// Load saved data when the page opens
window.addEventListener("load", () => {
    const savedProfile = localStorage.getItem("savedProfile");
    if (savedProfile) {
        document.getElementById("profileImg").src = savedProfile;
    }
});

/* ===============================
   PROFILE UPLOAD
================================ */
function loadProfile(e) {
    if (!isOwner) {
        const pass = prompt("Enter Owner Password:");
        if (pass !== OWNER_PASS) return alert("❌ Incorrect password");
        isOwner = true;
        sessionStorage.setItem("isOwner", "true");
        document.body.classList.add("admin-enabled");
    }

    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            document.getElementById("profileImg").src = event.target.result;
        };
        reader.readAsDataURL(file);
    }
}

/* ===============================
   CERTIFICATE UPLOAD & REMOVE
================================ */
function addCert(input) {
    if (!isOwner) {
        const pass = prompt("Enter Owner Password:");
        if (pass !== OWNER_PASS) return alert("❌ Incorrect password");
        isOwner = true;
        sessionStorage.setItem("isOwner", "true");
        document.body.classList.add("admin-enabled");
    }

    if (input.files[0]) {
        const container = document.createElement("div");
        container.className = "cert-item";
        container.style.marginTop = "10px";

        const img = document.createElement("img");
        img.src = URL.createObjectURL(input.files[0]);
        img.style.width = "200px";
        img.style.display = "block";

        // REMOVE BUTTON
        const removeBtn = document.createElement("button");
        removeBtn.innerText = "Remove 🗑️";
        removeBtn.style.backgroundColor = "#ef4444";
        removeBtn.style.color = "white";
        removeBtn.style.border = "none";
        removeBtn.style.padding = "5px 10px";
        removeBtn.style.cursor = "pointer";
        removeBtn.onclick = function() {
            container.remove();
        };

        container.appendChild(img);
        container.appendChild(removeBtn);
        input.parentElement.appendChild(container);
    }
}

/* ===============================
   THEME & CLOCK & CHART
================================ */
function toggleTheme() {
    document.body.classList.toggle("dark");
}

function updateClock() {
    const clock = document.getElementById("clock");
    if (clock) clock.innerText = new Date().toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

const ctx = document.getElementById("radarChart");
if (ctx) {
    new Chart(ctx, {
        type: "radar",
        data: {
            labels: ["Web", "C++", "Python", "DSA", "Leadership"],
            datasets: [{
                label: "Skills",
                data: [85, 75, 70, 80, 90],
                backgroundColor: "rgba(22,163,74,0.2)",
                borderColor: "#16a34a",
                pointBackgroundColor: "#16a34a"
            }]
        },
        options: { scales: { r: { min: 0, max: 100, ticks: { display: false } } } }
    });
}