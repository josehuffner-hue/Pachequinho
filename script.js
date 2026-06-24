document.addEventListener('DOMContentLoaded', () => {
    const likeBtn = document.getElementById('likeBtn');
    const likeCount = document.getElementById('likeCount');
    let count = 0;

    likeBtn.addEventListener('click', () => {
        count++;
        likeCount.textContent = `${count} ${count === 1 ? 'curtida' : 'curtidas'}`;
        
        // Efeito simples de clique
        likeBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            likeBtn.style.transform = 'scale(1)';
        }, 100);
    });
});
