// eslint-disable-next-line no-unused-vars
async function sendData() {
    document.getElementById('error').innerHTML = '';
    const rawData = await fetch('http://54.173.213.126:80/user/signin', {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        })
    });
    if (rawData.status === 200) {
        window.location.href = 'http://54.173.213.126:80/mainPage';
    } else {
        document.getElementById('error').innerHTML = 'Please check your login data!';
    }
}
