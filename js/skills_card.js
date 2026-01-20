const skillsContainer = document.querySelector('#list-skill-card');

function toggleSkillCard(event) {
    const isSkillCard = event.target.closest('[data-skill-card]');
    
    if (isSkillCard) {
        isSkillCard.classList.toggle('active');
    }
}

skillsContainer.addEventListener('click', (event) => toggleSkillCard(event));
