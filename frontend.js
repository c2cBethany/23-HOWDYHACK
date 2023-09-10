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
        <td><input type="checkbox" id="habitCheckbox" ${
          habit.done ? "checked" : ""
        }></td>
      `;

      habitTableBody.appendChild(newRow);
    }
  } catch (e) {
    console.error(e);
  }
};

const handleCheckBox = async () => {
  
}

// Call habitDisplay when the page loads
window.onload = () => {
  habitDisplay();
};
