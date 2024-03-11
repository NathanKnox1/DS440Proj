function addEntry(inputId) {
    // Get the input value
    var entry = document.getElementById(inputId).value;

    // Create a new div element
    var entryDiv = document.createElement("div");
    entryDiv.textContent = entry; // Set the text content of the div

    // Create delete button
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
        entryDiv.remove();
        updatePanelHeight(inputId);
    });

    // Append the new div and delete button to the respective panel
    var panelId = inputId.replace("Input", "Entries");
    var panel = document.getElementById(panelId);
    entryDiv.appendChild(deleteButton);
    panel.appendChild(entryDiv);

    // Extend the panel based on the number of entries
    updatePanelHeight(inputId);
}

function updatePanelHeight(inputId) {
    var panelId = inputId.replace("Input", "Entries");
    var panel = document.getElementById(panelId);
    var numEntries = panel.children.length;
    var panelHeight = numEntries * 20 + 100; 
    panel.parentElement.style.height = panelHeight + "px";
}

// Add event listeners to input elements
document.getElementById("artistInput").addEventListener("change", function() {
    addEntry("artistInput");
});

document.getElementById("songInput").addEventListener("change", function() {
    addEntry("songInput");
});

document.getElementById("genreInput").addEventListener("change", function() {
    addEntry("genreInput");
});