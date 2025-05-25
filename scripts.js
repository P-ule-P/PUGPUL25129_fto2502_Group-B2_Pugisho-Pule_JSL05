import { initialTasks } from "./initialData.js";
import { loadTasks, saveTasks } from "./storage.js";
import { renderTasks } from "./renderTasks.js";
import { setupModal } from "./modal.js";

/**
 * Initializes the application on DOMContentLoaded.
 *
 * - Loads tasks from localStorage if available, otherwise uses initial data.
 * - Saves loaded tasks to localStorage (if not already present).
 * - Renders the task board based on current task list.
 * - Sets up modal functionality for creating and editing tasks.
 *
 * @returns {void}
 */
document.addEventListener("DOMContentLoaded", () => {
  const stored = loadTasks(initialTasks); // Load tasks from storage or fallback
  renderTasks(stored); // Render the task board
  saveTasks(stored); // Ensure localStorage is initialized
  setupModal(); // Set up task modal behavior
});
