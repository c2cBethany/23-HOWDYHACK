document.addEventListener("DOMContentLoaded", () => {
    const addClientLink = document.getElementById("add-client-link");
    const viewClientsLink = document.getElementById("view-clients-link");
    const content = document.getElementById("content");

    addClientLink.addEventListener("click", () => {
        // Clear the content and load the "Add Client" form
        content.innerHTML = `
            <form id="add-client-form">
                <label for="clientName">Client Name:</label>
                <input type="text" id="clientName" class="input" required>
                <br>
                <label for="contactEmail">Contact Email:</label>
                <input type="email" id="contactEmail" class="input" required>
                <br>
                <button type="submit" class="button" id="submitButton">Save</button>
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
});
