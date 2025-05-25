# Career Development Plan 🎓

---

## Project Description 🧾

A simple, JavaScript-driven Kanban board tailored for monitoring career growth milestones. It presents tasks in a clear visual layout across three workflow stages—🔵 TODO, 🟣 DOING, and 🟢 DONE—using interactive cards and a modal-based editing system. Built with vanilla JavaScript, it features local storage persistence, form validation, and a mobile-responsive design without external dependencies.

---

## Technologies Used 👨🏽‍💻

<img src="./assets/image.png" alt="alt HTML" width="50" height="50" />

<img src="./assets/image-1.png" alt="alt HTML" width="50" height="50" />

<img src="./assets/image-4.png" alt="alt HTML" width="50" height="50" />

<img src="./assets/image-2.png" alt="alt HTML" width="90" height="50" />

---

## Features 🛠️

##### ✅ Task Visualization

- Add new tasks via modal form with title, description, and status selection
- Tasks persist in browser's local storage
- Real-time task count per column
- Color-coded status indicators (blue, purple, green)

##### ✅ Interactive UI

- Clean modal interface with form validation
- Responsive design for all screen sizes
- Mobile-optimized header with compact add button
- Visual feedback for required fields

##### ✅ Data Persistence

- Automatic saving to local storage
- Loads previous state on page refresh
- Fallback to initial demo tasks if no data exists

---

## Setup Instructions 🧩

1. Clone or download the repository
2. Open `index.html` in any modern browser
3. The app will automatically:
   - Load saved tasks from local storage OR
   - Initialize with demo tasks if first visit
4. No build tools or dependencies required

---

## Usage Instructions 🪄

### Adding Tasks ➕

1. Click "+ Add New Task" button (desktop) or "+" (mobile)
2. Fill in the form:
   - Title (required)
   - Description (required)
   - Select status from dropdown
3. Click "Create Task" to save

### Viewing Tasks 📺

- Tasks automatically organize into columns by status
- Column headers show current task count
- Color dots indicate status type

---

## Future Enhancements 🚀

- Drag-and-drop task reordering
- Task editing functionality
- Multiple board support
- Dark mode toggle
