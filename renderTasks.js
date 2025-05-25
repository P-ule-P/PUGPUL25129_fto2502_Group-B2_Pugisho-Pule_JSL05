/**
 * Renders tasks grouped into their respective status columns: TODO, DOING, and DONE.
 *
 * Each task is inserted into a dynamic section with a color-coded header and task list.
 *
 * @param {Task[]} tasks - An array of task objects to display.
 * @typedef {Object} Task
 * @property {number} id - Unique identifier for the task.
 * @property {string} title - Title of the task.
 * @property {string} description - Description of the task.
 * @property {'todo'|'doing'|'done'} status - Current status of the task.
 *
 * @returns {void}
 */
export function renderTasks(tasks) {
  const container = document.querySelector(".card-column-main");
  container.innerHTML = "";

  const columns = ["todo", "doing", "done"];
  const colors = {
    todo: "#49c4e5",
    doing: "#8471f2",
    done: "#219c90",
  };

  columns.forEach((status) => {
    const section = document.createElement("div");
    section.className = "column-div";

    // Create the column header with status label and count
    section.innerHTML = `
      <div class="column-head-div">
        <span class="dot" style="background-color: ${colors[status]}"></span>
        <p class="columnHeader">${status.toUpperCase()} (${
      tasks.filter((t) => t.status === status).length
    })</p>
      </div>

      <ul class="tasks-container ${status}">
        ${tasks
          .filter((t) => t.status === status)
          .map(
            (t) => `
              <li data-task-id="${t.id}">
                <p>${t.title}</p>
              </li>
            `
          )
          .join("")}
      </ul>
    `;

    container.appendChild(section);
  });
}
