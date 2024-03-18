function updateSliderValueText(sliderId, valueId) {
    var slider = document.getElementById(sliderId);
    var value = document.getElementById(valueId);

    var position = slider.value;

    // Determine texst based on the slider position
    var text;
    if (position <= 33) {
        text = "Low";
    } else if (position <= 66) {
        text = "Medium";
    } else {
        text = "High";
    }


    value.textContent = text;
}

document.getElementById("danceabilitySlider").addEventListener("input", function() {
    updateSliderValueText("danceabilitySlider", "danceabilityValue");
});

document.getElementById("tempoSlider").addEventListener("input", function() {
    updateSliderValueText("tempoSlider", "tempoValue");
});

function addEntry(inputId) {
    var entry = document.getElementById(inputId).value;

    
    var entryDiv = document.createElement("div");
    entryDiv.textContent = entry; // Set the text content of the div

    // Creating delete button
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", function() {
        entryDiv.remove();
        updatePanelHeight(inputId);
    });

    // Append new and delete button to the respective panel
    var panelId = inputId.replace("Input", "Entries");
    var panel = document.getElementById(panelId);
    entryDiv.appendChild(deleteButton);
    panel.appendChild(entryDiv);

    // Extend the panel based on the number of entries
    updatePanelHeight(inputId);

    // Clear input value
    clearInput(inputId);
}

function updatePanelHeight(inputId) {
    var panelId = inputId.replace("Input", "Entries");
    var panel = document.getElementById(panelId);
    var numEntries = panel.children.length;
    var panelHeight = numEntries * 20 + 100; 
    panel.parentElement.style.height = panelHeight + "px";
}

// Function to clear input value
function clearInput(inputId) {
    document.getElementById(inputId).value = ""; 
}

document.getElementById("artistInput").addEventListener("change", function() {
    addEntry("artistInput");
});

document.getElementById("songInput").addEventListener("change", function() {
    addEntry("songInput");
});

document.getElementById("genreInput").addEventListener("change", function() {
    addEntry("genreInput");
});
