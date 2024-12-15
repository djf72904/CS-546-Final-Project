const dialog = document.getElementById("favDialog");

function createCommentElement(comment) {
    // Create the main container div
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("mt-2");
    mainDiv.id = "comm-lst";

    // Create the flex container
    const flexDiv = document.createElement("div");
    flexDiv.classList.add("flex", "space-x-2", "items-center");

    // Create the avatar container
    const avatarDiv = document.createElement("div");
    avatarDiv.classList.add("avatar");

    const avatarP = document.createElement("p");
    avatarP.id = "avtr-i";
    avatarP.textContent = comment?.profile?.display_name[0]

    avatarDiv.appendChild(avatarP);

    // Create the details container
    const detailsDiv = document.createElement("div");
    detailsDiv.classList.add("flex-wrap", "justify-between");

    const nameDiv = document.createElement("div");
    nameDiv.classList.add("w-auto");

    const nameP = document.createElement("p");
    nameP.id = "avtr-name";
    nameP.textContent = comment?.profile?.display_name

    nameDiv.appendChild(nameP);

    const timeAgoP = document.createElement("p");
    timeAgoP.id = "time-ago";
    timeAgoP.classList.add("text-xs");
    timeAgoP.textContent = timeAgo(comment.timestamp)

    detailsDiv.appendChild(nameDiv);
    detailsDiv.appendChild(timeAgoP);

    // Append avatar and details to flex container
    flexDiv.appendChild(avatarDiv);
    flexDiv.appendChild(detailsDiv);

    // Create the content paragraph
    const contentP = document.createElement("p");
    contentP.id = "content-sec";
    contentP.classList.add("mt-2", "max-w-lg");
    contentP.textContent =
        comment.content;

    // Append all elements to the main container
    mainDiv.appendChild(flexDiv);
    mainDiv.appendChild(contentP);

    return mainDiv;
}

// Example usage: Appending to a DOM element with ID 'comment-section'
const commentSection = document.getElementById("comment-section");
if (commentSection) {
    const newComment = createCommentElement();
    commentSection.appendChild(newComment);
} else {
    console.error("Target element not found!");
}

/**
 * Displays a dialog by removing the "hidden" class from the dialog element.
 *
 * @return {void} This function does not return a value.
 */
function showDialog(post) {
    console.log(post)
    dialog.classList.remove("hidden");
    const commentEl = document.getElementById("comm-lst");
    document.getElementById("post-d-wpm-badge").textContent = "WPM: " + post.test.wpm
    document.getElementById("post-d-accuracy-badge").textContent = "Accuracy: " + ((post.test.missed_words.length / post.test.content.split(" ").length).toFixed(2) * 100) + "%"
    document.getElementById("post-time-ago").textContent = timeAgo(post.timestamp)

    post.comments.map(comment => {
        commentEl.insertAdjacentElement("beforeend", createCommentElement(comment))
    })
}

/**
 * Hides the dialog by adding a "hidden" class to it. This typically makes the dialog invisible in the UI.
 * @return {void} No return value.
 */
function hideDialog() {
    dialog.classList.add("hidden");
}
