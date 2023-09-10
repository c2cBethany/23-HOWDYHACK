const habitForm = document.getElementById("habitForm");
const habitTable = document.getElementById("habitTable");
const habitTableBody = document.getElementById("habitTableBody");
const habitData = [];

habitForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const habitName = document.getElementById("habitName").value;
  const habitFrequency = document.getElementById("habitFrequency").value;

  const newHabit = {
    name: habitName,
    frequency: habitFrequency,
    done: false,
  };

  habitData.push(newHabit);

  // Sort habits by frequency (daily < weekly < monthly < yearly)
  habitData.sort((a, b) => {
    const frequencyOrder = ["daily", "weekly", "monthly", "yearly"];
    return frequencyOrder.indexOf(a.frequency) - frequencyOrder.indexOf(b.frequency);
  });

  updateTable();

  habitForm.reset();
});

function updateTable() {
  // Clear the existing table content
  habitTableBody.innerHTML = "";

  // Loop through the habitData array and populate the table
  for (const habit of habitData) {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${habit.name}</td>
      <td>${habit.frequency}</td>
      <td><input type="checkbox" class="habitCheckbox" ${habit.done ? "checked" : ""}></td>
      <td><button class="deleteButton">Delete</button></td>
    `;

    newRow.querySelector(".habitCheckbox").addEventListener("change", function () {
      // Toggle the "done" status when the checkbox is changed
      habit.done = !habit.done;
    });

    newRow.querySelector(".deleteButton").addEventListener("click", function () {
      // Remove the habit when the delete button is clicked
      const index = habitData.indexOf(habit);
      if (index > -1) {
        habitData.splice(index, 1);
        updateTable();
      }
    });

    habitTableBody.appendChild(newRow);
  }

  // Show the table
  habitTable.classList.remove("hidden");
}
