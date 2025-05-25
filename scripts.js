import { initialTasks } from "./initialData.js";

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
