let latestID = 0
const competencesToLearn = new Map();

const addCompetenceToLearn = () => {
    if (competencesToLearn.size < 5) {
        latestID++
        let competencesUL = document.getElementById("wants-to-learn")
        competencesUL.innerHTML += `
            <li id="element_${latestID}">
                <input id="input_${latestID}" oninput="updateCompetence(${latestID})" type="text">
                <button onclick="removeCompetenceToLearn(${latestID})" >-</button>
            </li>
        `
        competencesToLearn.set(latestID, "")
        setCompetences()
    } else {
        alert("You already added 5 competences that you want to learn")
    }
}

const removeCompetenceToLearn = (id) => {
    let competence = document.getElementById(`element_${id}`)
    competence.remove()
    competencesToLearn.delete(id)
}

const setCompetences = () => {
    competencesToLearn.forEach((value, key, map) => {
        const competence = document.getElementById("input_" + key)
        if (competence != null) {
            competence.value = value
        }
    })
}

const updateCompetence = (id) => {
    competencesToLearn.set(id, document.getElementById("input_" + id).value)
}