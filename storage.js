/**
 * @typedef {Object} Task
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {"todo" | "doing" | "done"} status
 */

/**
 * Load tasks from local storage or fall back to initial data.
 * @param {Task[]} fallback
 * @returns {Task[]}
 */
export function loadTasks(fallback = []) {
  const stored = localStorage.getItem("tasks");
  return stored ? JSON.parse(stored) : fallback;
}

/**
 * Save tasks to local storage.
 * @param {Task[]} tasks
 */
export function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
