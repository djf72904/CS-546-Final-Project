async function getUserData() {
    const userData = await fetch('/api/user')
        .then(response => response.json())
        .then(data => {
            return data;
        })


    if (!userData) {
        document.getElementById('unath-header').style.display = 'flex';
        document.getElementById('auth-header').style.display = 'none';
        return;
    }

    if (Object.values(userData).includes("Unauthorized")) {
        document.getElementById('unath-header').style.display = 'flex';
        document.getElementById('auth-header').style.display = 'none';
    }
    if (Object.keys(userData).includes("_id")) {
        document.getElementById('unath-header').style.display = 'none';
        document.getElementById('auth-header').style.display = 'flex';
        document.getElementById('user-initial').innerText = userData.display_name.charAt(0).toUpperCase();
        document.getElementById('user-name').innerText = userData.display_name;
    }
}

document.addEventListener('DOMContentLoaded', getUserData);