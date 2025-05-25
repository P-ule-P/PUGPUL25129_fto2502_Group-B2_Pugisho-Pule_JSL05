import { initialTasks } from "./initialData.js";
import { loadTasks, saveTasks } from "./storage.js";
import { renderTasks } from "./renderTasks.js";
import { setupModal } from "./modal.js";

document.addEventListener("DOMContentLoaded", () => {
  const stored = loadTasks(initialTasks);
  renderTasks(stored);
  saveTasks(stored); // Ensures persistence on first load
  setupModal();
});
