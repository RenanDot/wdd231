const information = new URLSearchParams(window.location.search);

const results = document.getElementById('results');

const timestamp = new Date(information.get('timestamp')).toLocaleString();

results.innerHTML = `<h2>Thank you for joining in our Chamber of Commerce, ${information.get('fname')} ${information.get('lname')}!</h2>
<p>We will sent you a confirmation email to <span>${information.get('email')}</span>.</p>
<p>These are the details about your organization:</p>
<p class="info">Phone Number: <span>${information.get('phone')}</span></p>
<p class="info">Business Name: <span>${information.get('orgname')}</span></p>
<p>Form sent on <span>${timestamp}</span></p>`;
