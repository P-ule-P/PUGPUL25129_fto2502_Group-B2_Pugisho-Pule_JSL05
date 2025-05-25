/**
 * @param {Task[]} tasks
 * Renders tasks grouped by status.
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
          .map((t) => `<li><p>${t.title}</p></li>`)
          .join("")}
      </ul>
    `;

    container.appendChild(section);
  });
}
