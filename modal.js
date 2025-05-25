import { saveTasks, loadTasks } from "./storage.js";
import { renderTasks } from "./renderTasks.js";

/**
 * Initializes modal behavior and form submission.
 *
 * - Opens modal when the "Add Task" button is clicked
 * - Handles editing existing tasks when clicked
 * - Submits new tasks via the form
 * - Validates input before saving
 * - Saves new task to localStorage and re-renders task board
 *
 * @function setupModal
 * @returns {void}
 */
export function setupModal() {
  const modal = document.getElementById("taskModal");
  const form = document.getElementById("taskForm");
  const openBtn = document.getElementById("openModalBtn");
  const closeBtn = modal.querySelector(".close-btn");
  const titleInput = document.getElementById("task-title");
  const descInput = document.getElementById("task-desc");
  const statusSelect = document.getElementById("task-status");

  /**
   * Opens the modal with default empty values for creating a new task.
   */
  openBtn.addEventListener("click", () => {
    form.reset();
    statusSelect.value = "todo"; // Reset status to default
    modal.showModal();
  });

  /**
   * Closes the modal when the close button is clicked.
   */
  closeBtn.addEventListener("click", () => modal.close());

  /**
   * Opens the modal pre-filled with existing task data when a task is clicked.
   *
   * @param {MouseEvent} e - The click event on a task list item
   */
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

  /**
   * Handles form submission for creating a new task.
   * - Validates inputs
   * - Saves the new task to localStorage
   * - Re-renders tasks on the board
   *
   * @param {SubmitEvent} e - The submit event from the task form
   */
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = titleInput.value.trim();
    const desc = descInput.value.trim();
    const status = statusSelect.value;

    if (!title || !desc) {
      form.reportValidity(); // Triggers native validation tooltip
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
