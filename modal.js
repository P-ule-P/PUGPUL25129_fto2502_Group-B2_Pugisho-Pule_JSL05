import { saveTasks, loadTasks } from "./storage.js";
import { renderTasks } from "./renderTasks.js";

/**
 * Initializes modal behavior and form submission.
 */
export function setupModal() {
  const modal = document.getElementById("taskModal");
  const form = document.getElementById("taskForm");
  const openBtn = document.getElementById("openModalBtn");
  const closeBtn = modal.querySelector(".close-btn");

  openBtn.addEventListener("click", () => modal.showModal());
  closeBtn.addEventListener("click", () => modal.close());

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = form.querySelector("#task-title").value.trim();
    const desc = form.querySelector("#task-desc").value.trim();
    const status = form.querySelector("#task-status").value;

    if (!title || !desc) {
      form.reportValidity(); // triggers browser message
      return;
    }

    const tasks = loadTasks();
    const newTask = {
      id: Date.now(),
      title,
      description: desc,
      status,
    };

    const updated = [...tasks, newTask];
    saveTasks(updated);
    renderTasks(updated);
    modal.close();
    form.reset();
  });
}
