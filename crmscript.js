document.addEventListener("DOMContentLoaded", () => {
    const addClientLink = document.getElementById("add-client-link");
    const viewClientsLink = document.getElementById("view-clients-link");
    const content = document.getElementById("content");

    addClientLink.addEventListener("click", () => {
        // Clear the content and load the "Add Client" form
        content.innerHTML = `
            <h2>Add Client</h2>
            <form id="add-client-form">
                <label for="clientName">Client Name:</label>
                <input type="text" id="clientName" required>
                <br>
                <label for="contactEmail">Contact Email:</label>
                <input type="email" id="contactEmail" required>
                <br>
                <button type="submit">Save</button>
            </form>
        `;

        const addClientForm = document.getElementById("add-client-form");

        addClientForm.addEventListener("submit", (e) => {
            e.preventDefault();

            // Process and save client data (you can add AJAX requests here)
            // For simplicity, we'll just display a success message
            content.innerHTML = "<p>Client added successfully!</p>";
        });
    });

    viewClientsLink.addEventListener("click", () => {
        // Clear the content and load the "View Clients" page
        content.innerHTML = "<h2>View Clients</h2>";

        // Fetch and display the list of clients (you can add AJAX requests here)
        // For simplicity, we'll just display a placeholder message
        setTimeout(() => {
            content.innerHTML += "<p>No clients found.</p>";
        }, 1000);
    });

    fetch("https://your-api-endpoint.com/clients")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the JSON response
    })
    .then((clients) => {
        if (clients.length === 0) {
            content.innerHTML += "<p>No clients found.</p>";
        } else {const clientList = document.createElement("ul");
        clients.forEach((client) => {
            const listItem = document.createElement("li");
            listItem.textContent = client.name; // Adjust as per your data structure
            clientList.appendChild(listItem);
        });
        content.appendChild(clientList);
    }
})
.catch((error) => {
    console.error("Error fetching client list:", error);
    content.innerHTML += "<p>An error occurred while fetching the client list.</p>";
});


});
