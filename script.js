  const dueDate = new Date("2026-04-16T18:00:00");
  const timeEl = document.getElementById("timeRemaining");
  const checkbox = document.getElementById("checkbox");
  const title = document.querySelector(".title");
  const statusEl = document.getElementById("status");

  function updateTime() {
    const now = new Date();
    const diff = dueDate - now;

    if (diff <= 0) {
      const hours = Math.floor(Math.abs(diff) / (1000 * 60 * 60));
      timeEl.textContent = hours === 0
        ? "Due now!"
        : `Overdue by ${hours} hour${hours > 1 ? "s" : ""}`;
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days > 1) timeEl.textContent = `Due in ${days} days`;
    else if (days === 1) timeEl.textContent = "Due tomorrow";
    else {
      const hours = Math.floor(diff / (1000 * 60 * 60));
      timeEl.textContent = `Due in ${hours} hours`;
    }
  }

  updateTime();
  setInterval(updateTime, 60000);

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      title.classList.add("completed");
      statusEl.textContent = "Done";
    } else {
      title.classList.remove("completed");
      statusEl.textContent = "Pending";
    }
  });

