document.getElementById('feedback-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.target;
  const email = form.email.value;
  const message = form.message.value;
  let feedback_form_state =
    JSON.parse(localStorage.getItem('feedback_form_state')) || [];
  feedback_form_state.push({ email, message });
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedback_form_state)
  );
  form.reset();
  localStorage.removeItem(feedback_form_state);
  
  
});





