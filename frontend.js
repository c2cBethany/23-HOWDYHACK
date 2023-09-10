const habitInfo = async () => {
  try {
    let url = "http://localhost:3001/hello";

    let response = await axios({
      method: "post",
      url,
      data: {
        name: document.getElementById("habitName").value,
        frequency: document.getElementById("habitFrequency").value,
      },
    });

    console.log(response);
  } catch (e) {
    console.error(e);
  }
};

// frontend.js

const habitTableBody = document.getElementById("habitTableBody"); // Replace with the actual ID of your table body element

const habitDisplay = async () => {
  try {
    let response = await axios.get("http://localhost:3001/getdata"); // Make sure this path is correct
    const habitsData = response.data;

    habitTableBody.innerHTML = "";

    for (let i = 0; i < habitsData.length; i++) {
      const habit = habitsData[i];
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td>${habit.name}</td>
        <td>${habit.frequency}</td>
        <td><input type="checkbox" class="habitCheckbox" ${
          habit.done ? "checked" : ""
        }></td>
      `;
      habitTableBody.appendChild(newRow);
    }
  } catch (e) {
    console.error(e);
  }
};

// Call habitDisplay when the page loads
window.onload = () => {
  habitDisplay();
};

// document.addEventListener('DOMContentLoaded', function () {
//     // Fetch the JSON data
//     fetch('db.json')
//       .then(response => response.json())
//       .then(data => {
//         // Get the table body element
//         const tableBody = document.getElementById('habitTableBody');

//         // Loop through the JSON data and populate the table
//         data.forEach(habit => {
//           const row = tableBody.insertRow();
//           const habitNameCell = row.insertCell(0);
//           const frequencyCell = row.insertCell(1);
//           const doneCell = row.insertCell(2);
//           const dateCell = row.insertCell(3);

//           habitNameCell.textContent = habit.habitName;
//           frequencyCell.textContent = habit.frequency;
//           doneCell.textContent = habit.done ? 'Yes' : 'No';
//           dateCell.textContent = habit.date;
//         });
//       })
//       .catch(error => console.error('Error loading JSON data:', error));
//   });

// let options = {
//   method: "POST",
//   withCredentials: true,
//   crossorigin: true,
//   mode: "no-cors",
//   credentials: "include",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   // Data
//   body: JSON.stringify({
//     name: document.getElementById("habitName").value,
//     frequency: document.getElementById("habitFrequency").value,
//   }),
// };
