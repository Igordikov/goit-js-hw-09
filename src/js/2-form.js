
// step1=============

let formData = {
    email: "",
    message: "",
}



// step2=============

const form = document.querySelector('.feedback-form');

form.addEventListener('input', (event) => {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});


window.addEventListener('load', () => {
    const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (savedFormData) {
        formData = savedFormData;
        for (let field in formData) {
            form.elements[field].value = formData[field];
        }
    }
});


form.addEventListener('submit', (event) => {
    event.preventDefault();
    for (let field in formData) {
        if (!formData[field].trim()) {
            
            alert('Будь ласка, заповніть усі поля');
            return;
        }

    }
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData = {email:"", message: ""};
    form.reset();
});













