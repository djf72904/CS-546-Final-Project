const dialog = document.getElementById("favDialog");

function timeAgo(timestamp) {
    const now = Date.now();
    const elapsed = now - timestamp;

    // Calculate time intervals
    const seconds = Math.floor(elapsed / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const years = Math.floor(days / 365);

    // Return the appropriate string
    if (seconds < 60) {
        return `${seconds}s ago`;
    } else if (minutes < 60) {
        return `${minutes}m ago`;
    } else if (hours < 24) {
        return `${hours}h ago`;
    } else if (days < 7) {
        return `${days}d ago`;
    } else if (weeks < 52) {
        return `${weeks}w ago`;
    } else {
        return `${years}y ago`;
    }
}

/**
 * Displays a dialog by removing the "hidden" class from the dialog element.
 *
 * @return {void} This function does not return a value.
 */
function showDialog(wpm, accuracy, content, user, timestamp, song, level, time) {
    dialog.classList.remove("hidden");
    document.getElementById("wpm-badge").innerText = `WPM: ${wpm}`;
    document.getElementById("acc-badge").innerText = `Accuracy: ${accuracy}%`;
    document.getElementById("content-sec").innerText = content;
    document.getElementById("avtr-i").innerText = user[0];
    document.getElementById("username").innerText = user;
    document.getElementById("time-taken").innerText = timeAgo((timestamp));
    document.getElementById("song-badge-inner").innerText = song;
    document.getElementById("lvl-badge").innerText = "Level: " + level + "";
    console.log(timeAgo(timestamp))
    if(time > 0){
        document.getElementById("time-badge").innerText = "Time: " + time + "s";
    }
    else{
        document.getElementById("time-badge-cont").style.display = "none";
    }
}

/**
 * Hides the dialog by adding a "hidden" class to it. This typically makes the dialog invisible in the UI.
 * @return {void} No return value.
 */
function hideDialog() {
    dialog.classList.add("hidden");
}
