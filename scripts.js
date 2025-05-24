/**
 * Initial dataset of career development tasks with their metadata.
 * @type {Array<{
 *   id: number,
 *   title: string,
 *   description: string,
 *   status: 'todo'|'doing'|'done'
 * }>}
 */
const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career 🚀",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript 💛",
    description: "Get comfortable with the fundamentals",
    status: "todo",
  },
  {
    id: 3,
    title: "Keep on Going 🏆",
    description: "You're almost there",
    status: "doing",
  },
  {
    id: 11,
    title: "Learn Data Structures and Algorithms 📚",
    description:
      "Study fundamental data structures and algorithms to solve coding problems efficiently",
    status: "doing",
  },
  {
    id: 12,
    title: "Contribute to Open Source Projects 🌐",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
  {
    id: 13,
    title: "Build Portfolio Projects 🛠️",
    description:
      "Create a portfolio showcasing your skills and projects to potential employers",
    status: "done",
  },
];

/**
 * Initializes the application when DOM content is fully loaded.
 * @listens document:DOMContentLoaded
 * @returns {void}
 */
document.addEventListener("DOMContentLoaded", () => {
  initializeTasks();
  setupTaskModal();
});

/**
 * Renders tasks into their respective columns based on status.
 * Matches DOM elements with data-task-id attributes to tasks in initialTasks.
 * Creates paragraph elements for task titles and attaches click handlers.
 * @function
 * @returns {void}
 */
function initializeTasks() {
  // Find all list items with task IDs
  const taskListItems = document.querySelectorAll("li[data-task-id]");

  taskListItems.forEach((listItem) => {
    const taskId = parseInt(listItem.dataset.taskId);
    if (!isNaN(taskId)) {
      // Find the task with the matching ID
      const task = initialTasks.find((t) => t.id === taskId);

      if (task) {
        // Makes a paragraph element to display the task title
        const taskElement = document.createElement("p");
        taskElement.textContent = task.title;
        listItem.appendChild(taskElement);

        // Adds click event to open the task modal
        listItem.addEventListener("click", () => {
          openTaskModal(task);
        });
      }
    }
  });
}

/**
 * Configures the task modal dialog behavior.
 * Sets up:
 * - Click-outside-to-close functionality
 * - Close button event handling
 * @function
 * @returns {void}
 */
function setupTaskModal() {
  const modal = document.getElementById("taskModal");
  if (!modal) return;

  // Close modal when clicking outside its content
  modal.addEventListener("click", (e) => {
    const rect = modal.getBoundingClientRect();
    const isInDialog =
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width;

    if (!isInDialog) {
      modal.close();
    }
  });

  // Close modal when clicking the X button
  const closeBtn = modal.querySelector(".close-btn");
  if (closeBtn) {
    closeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.close();
    });
  }
}

/**
 * Opens and populates the task editing modal with selected task's data.
 * @function
 * @param {Object} task - The task object to display
 * @param {number} task.id - The task's unique identifier
 * @param {string} task.title - The task's title text
 * @param {string} task.description - The task's detailed description
 * @param {'todo'|'doing'|'done'} task.status - The task's current status
 * @returns {void}
 */
function openTaskModal(task) {
  const modal = document.getElementById("taskModal");
  const titleInput = document.getElementById("task-title");
  const descInput = document.getElementById("task-desc");
  const statusSelect = document.getElementById("task-status");

  if (!modal || !titleInput || !descInput || !statusSelect) return;

  // Fills form fields with task data
  titleInput.value = task.title;
  descInput.value = task.description;
  statusSelect.value = task.status;

  // Store the current task ID for reference
  modal.dataset.taskId = task.id;

  // Display the modal dialog
  modal.showModal();
}
