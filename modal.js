import { saveTasks, loadTasks } from "./storage.js";
import { renderTasks } from "./renderTasks.js";

/**
 * Initializes modal behavior and form submission
 */
export function setupModal() {
  const modal = document.getElementById("taskModal");
  const form = document.getElementById("taskForm");
  const openBtn = document.getElementById("openModalBtn");
  const closeBtn = modal.querySelector(".close-btn");
  const titleInput = document.getElementById("task-title");
  const descInput = document.getElementById("task-desc");
  const statusSelect = document.getElementById("task-status");

  // Open modal for new task
  openBtn.addEventListener("click", () => {
    form.reset();
    statusSelect.value = "todo"; // Reset to default status
    modal.showModal();
  });

  // Close modal
  closeBtn.addEventListener("click", () => modal.close());

  // Click handler for existing tasks
  document.addEventListener("click", (e) => {
    const taskElement = e.target.closest(".tasks-container li");
    if (!taskElement) return;

    const tasks = loadTasks();
    const taskId = Number(taskElement.dataset.taskId);
    const task = tasks.find((t) => t.id === taskId);

    if (task) {
      titleInput.value = task.title;
      descInput.value = task.description;
      statusSelect.value = task.status;
      modal.showModal();
    }
  });

  // Form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = titleInput.value.trim();
    const desc = descInput.value.trim();
    const status = statusSelect.value;

    if (!title || !desc) {
      form.reportValidity();
      return;
    }

    const tasks = loadTasks();
    const updatedTasks = [
      ...tasks,
      {
        id: Date.now(),
        title,
        description: desc,
        status,
      },
    ];

    saveTasks(updatedTasks);
    renderTasks(updatedTasks);
    modal.close();
    form.reset();
  });
}
