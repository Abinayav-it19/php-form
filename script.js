document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const contact = document.getElementById("contact").value;

    // Validate form fields
    if (name && email && password && contact) {
        // If all fields are filled, create a table row and display the submitted data
        const table = document.getElementById("submittedTable");
        const newRow = table.insertRow(-1);
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);

        cell1.innerHTML = name;
        cell2.innerHTML = email;
        cell3.innerHTML = password;
        cell4.innerHTML = contact;

        // Clear form fields after submission
        document.getElementById("myForm").reset();
    } else {
        alert("Please fill in all fields.");
    }
});
