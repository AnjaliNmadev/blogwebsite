

/*sign up and login form*/
const tabButtons = document.querySelectorAll('.tab-btn');
    const forms = document.querySelectorAll('.form-container form');

    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        forms.forEach(form => form.classList.remove('active'));

        button.classList.add('active');
        document.querySelector(button.dataset.target).classList.add('active');
      });
    });

