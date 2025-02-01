const validIds = ["12345", "67890"]; // Example valid IDs

function verifyId() {
    const idNumber = document.getElementById("idNumber").value;
    if (validIds.includes(idNumber)) {
        document.getElementById("verification").style.display = "none";
        document.getElementById("voting").style.display = "block";
    } else {
        alert("Invalid ID. Please try again.");
    }
}

function submitVote() {
    const candidates = document.getElementsByName("candidate");
    let selectedCandidate = null;
    for (const candidate of candidates) {
        if (candidate.checked) {
            selectedCandidate = candidate.value;
            break;
        }
    }

    if (selectedCandidate) {
        document.getElementById("voting").style.display = "none";
        document.getElementById("certificate").style.display = "block";
        document.getElementById("congratsMessage").innerText = `Congratulations for voting for ${selectedCandidate}!`;
    } else {
        alert("Please select a candidate.");
    }
}
