let canShowConfidentialData = false

const toggleCanShowConfidentialData = () => {
    canShowConfidentialData = !canShowConfidentialData
    if (canShowConfidentialData) {
        document.getElementById("confidential-data").style.display = "block"
    } else {
        document.getElementById("confidential-data").style.display = "none"
    }
}
