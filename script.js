const skillInput = document.getElementById("skill-input");
const addSkills = document.getElementById("add-skills");
const skillContainer = document.querySelector(".Inputskillcard");

function addskills() {
    const SkillInput = skillInput.value.trim();
    if (SkillInput === "") {
        alert("Please try again");
        return;
    }

    const Cardskill = document.createElement("div");
    Cardskill.classList.add("skill-card");

    const Nameinput = document.createElement("p");
    Nameinput.classList.add("skill-name");
    Nameinput.textContent = SkillInput;

    const buttonclose = document.createElement("button");
    buttonclose.classList.add("close-btn");
    buttonclose.innerHTML = "x";

    buttonclose.addEventListener("click", () => Cardskill.remove());

    Cardskill.appendChild(Nameinput);
    Cardskill.appendChild(buttonclose);
    skillContainer.appendChild(Cardskill);

    skillInput.value = "";
}

addSkills.addEventListener("click", addskills);
