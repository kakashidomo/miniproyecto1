document.addEventListener('DOMContentLoaded', () => {
    const addEmailBtn = document.getElementById('addEmailbtn');
    const emailInput = document.getElementById('emailInput');
    const modal = document.getElementById('modal');
    const alertMessage = document.getElementById('alerta');
    const dismissButton = document.getElementById('modalDismissButton');

    const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

    addEmailBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const emailValue = emailInput.value.trim();

        if (!isValidEmail(emailValue)) {
            alertMessage.classList.remove('d-none');
        } else {
            alertMessage.classList.add('d-none');
            modal.classList.remove('d-none');
        }
    });

    dismissButton.addEventListener('click', () => {
        modal.classList.add('d-none');
    });
});