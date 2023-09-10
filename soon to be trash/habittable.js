
  const habitForm = document.getElementById("habitForm");
  const habitTableBody = document.getElementById("habitTableBody");
  const habitData = [];


//   const hhh = () => {
//     console.log("sjdflasdjf")
//   }

  habitForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const habitName = document.getElementById("habitName").value;
    const habitFrequency = document.getElementById("habitFrequency").value;

    const newHabit = {
      name: habitName,
      frequency: habitFrequency,
      done: false,
      date: getCurrentDate(),
    };

    habitData.push(newHabit);

    // Clear the existing table content
    habitTableBody.innerHTML = "";

    // Loop through the habitData array and populate the table
    for (const habit of habitData) {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td>${habit.name}</td>
        <td>${habit.frequency}</td>
        <td><input type="checkbox" class="habitCheckbox" ${habit.done ? "checked" : ""}></td>
        <td>${habit.date}</td>
      `;
      habitTableBody.appendChild(newRow);
    }

    habitForm.reset();
  });

  function getCurrentDate() {
    const currentDate = new Date();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    return `${month}/${day}`;
  }

