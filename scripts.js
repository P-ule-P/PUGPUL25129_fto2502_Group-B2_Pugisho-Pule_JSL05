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

document.addEventListener("DOMContentLoaded", () => {
  initializeTasks();
  setupTaskModal();
});

function initializeTasks() {
  const taskListItems = document.querySelectorAll("li[data-task-id]");

  taskListItems.forEach((listItem) => {
    const taskId = parseInt(listItem.dataset.taskId);
    if (!isNaN(taskId)) {
      const task = initialTasks.find((t) => t.id === taskId);

      if (task) {
        const taskElement = document.createElement("p");
        taskElement.textContent = task.title;
        listItem.appendChild(taskElement);

        listItem.addEventListener("click", () => {
          openTaskModal(task);
        });
      }
    }
  });
}

function setupTaskModal() {
  const modal = document.getElementById("taskModal");
  if (!modal) return;

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

  const closeBtn = modal.querySelector(".close-btn");
  if (closeBtn) {
    closeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.close();
    });
  }
}

function openTaskModal(task) {
  const modal = document.getElementById("taskModal");
  const titleInput = document.getElementById("task-title");
  const descInput = document.getElementById("task-desc");
  const statusSelect = document.getElementById("task-status");

  if (!modal || !titleInput || !descInput || !statusSelect) return;

  titleInput.value = task.title;
  descInput.value = task.description;
  statusSelect.value = task.status;

  modal.dataset.taskId = task.id;
  modal.showModal();
}
