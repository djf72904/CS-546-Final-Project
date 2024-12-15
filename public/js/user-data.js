/**
 * Asynchronously fetches user data from the '/api/user' endpoint and updates the UI based on the user's authentication status.
 * Displays the unauthorized header if the user is not authenticated. If the user is authenticated, displays the user's information in the header.
 * Runs on every page load.
 * @return {Promise<void>} A promise that resolves when the UI is updated based on the fetched user data.
 */
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