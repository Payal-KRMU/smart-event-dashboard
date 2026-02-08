const titleInput = document.getElementById("title");
const dateInput = document.getElementById("date");
const categoryInput = document.getElementById("category");
const descInput = document.getElementById("desc");
const eventsDiv = document.getElementById("events");

document.getElementById("addBtn").addEventListener("click", addEvent);
document.getElementById("clearBtn").addEventListener("click", () => {
  eventsDiv.innerHTML = "";
});
document.getElementById("sampleBtn").addEventListener("click", addSample);

function addEvent() {
  if (!titleInput.value) return alert("Enter title");

  const div = document.createElement("div");
  div.className = "event";

  div.innerHTML = `
    <h3>${titleInput.value}</h3>
    <p>📅 ${dateInput.value}</p>
    <span>${categoryInput.value}</span>
    <p>${descInput.value}</p>
    <button class="delete">❌</button>
  `;

  eventsDiv.appendChild(div);
  clearForm();
}

function clearForm() {
  titleInput.value = "";
  dateInput.value = "";
  descInput.value = "";
}

function addSample() {
  titleInput.value = "Emifest";
  dateInput.value = "2026-01-14";
  categoryInput.value = "Social";
  descInput.value = "College fest event";
  addEvent();
}

// Event Delegation
eventsDiv.addEventListener("click", function(e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});
