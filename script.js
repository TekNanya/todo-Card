let state = {
  title: "Build Todo Card UI",
  description: "Stage 1a HNG Frontend task. It should collapse and expand properly.",
  priority: "High",
  status: "Pending",
  dueDate: new Date("2026-04-16T18:00:00"),
  expanded: false
};

/* ELEMENTS */
const card = document.querySelector(".card");
const cardContent = document.getElementById("cardContent");
const editForm = document.getElementById("editForm");

const titleEl = document.querySelector(".title");
const descEl = document.getElementById("descText");
const statusEl = document.getElementById("status");
const statusControl = document.getElementById("statusControl");
const checkbox = document.getElementById("checkbox");

const timeRemaining = document.getElementById("timeRemaining");
const dueDateText = document.getElementById("dueDateText");
const overdue = document.getElementById("overdue");

const editBtn = document.getElementById("editBtn");
const editTitle = document.getElementById("editTitle");
const editDesc = document.getElementById("editDesc");
const editPriority = document.getElementById("editPriority");
const editDate = document.getElementById("editDate");

const expandBtn = document.getElementById("expandBtn");


function updateUI() {
  // TEXT CONTENT
  titleEl.textContent = state.title;
  descEl.textContent = state.description;

  statusEl.textContent = state.status;
  statusControl.value = state.status;

  checkbox.checked = state.status === "Done";
  titleEl.classList.toggle("completed", state.status === "Done");

  // PRIORITY BADGE
  const badge = document.getElementById("priorityText");
  badge.textContent = state.priority;
  badge.className = "badge " + state.priority.toLowerCase();

  // PRIORITY INDICATOR
  document.getElementById("priorityIndicator").style.background =
    state.priority === "High"
      ? "#ef4444"
      : state.priority === "Medium"
      ? "#f59e0b"
      : "#22c55e";

  // STATUS VISUAL STATE
  statusEl.className = "";
  if (state.status === "In Progress") {
    statusEl.classList.add("in-progress");
  }

  // EXPAND / COLLAPSE SYNC
  const collapsible = document.getElementById("collapsible");
  collapsible.style.maxHeight = state.expanded ? "none" : "60px";

  expandBtn.textContent = state.expanded ? "Show less" : "Show more";
  expandBtn.setAttribute("aria-expanded", state.expanded);

  expandBtn.style.display =
    state.description.length < 100 ? "none" : "block";

  updateTime();
}


function updateTime() {
 
  dueDateText.textContent =
    "Due " +
    state.dueDate.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric"
    });

  if (state.status === "Done") {
    timeRemaining.textContent = "Completed";
    overdue.style.display = "none";
    card.classList.remove("overdue-active");
    return;
  }

  const diff = state.dueDate - new Date();

  if (diff <= 0) {
    overdue.style.display = "block";
    card.classList.add("overdue-active");

    const h = Math.floor(Math.abs(diff) / (1000 * 60 * 60));
    timeRemaining.textContent = `Overdue by ${h} hour${h !== 1 ? "s" : ""}`;
    return;
  }

  overdue.style.display = "none";
  card.classList.remove("overdue-active");

  const m = Math.floor(diff / 60000);
  const h = Math.floor(diff / 3600000);
  const d = Math.floor(diff / 86400000);

  if (d > 0) {
  timeRemaining.textContent =
    d === 1 ? `Due in 1 day` : `Due in ${d} days`;
}
else if (h > 0) {
  timeRemaining.textContent =
    h === 1 ? `Due in 1 hour` : `Due in ${h} hours`;
}
else {
  timeRemaining.textContent =
    m === 1 ? `Due in 1 minute` : `Due in ${m} minutes`;
}
  
}


setInterval(updateTime, 60000);


statusControl.onchange = () => {
  state.status = statusControl.value;
  checkbox.checked = state.status === "Done";
  updateUI();
};

checkbox.onchange = () => {
  state.status = checkbox.checked ? "Done" : "Pending";
  updateUI();
};


expandBtn.onclick = () => {
  state.expanded = !state.expanded;
  updateUI();
};


editBtn.onclick = () => {
  editTitle.value = state.title;
  editDesc.value = state.description;
  editPriority.value = state.priority;
  editDate.value = state.dueDate.toISOString().slice(0, 16);

  cardContent.classList.add("hidden");
  editForm.style.display = "flex";

  requestAnimationFrame(() => {
    editForm.classList.add("visible");
  });
};


document.querySelector('[data-testid="test-todo-save-button"]').onclick = () => {
  state.title = editTitle.value;
  state.description = editDesc.value;
  state.priority = editPriority.value;
  state.dueDate = new Date(editDate.value);

  editForm.style.display = "none";
  cardContent.classList.remove("hidden");

  updateUI();
};

/* CANCEL */
document.querySelector('[data-testid="test-todo-cancel-button"]').onclick = () => {
  editForm.style.display = "none";
  cardContent.classList.remove("hidden");
};

/* DELETE */
function deleteTask() {
  alert("Delete clicked");
}

/* INIT */
updateUI();
