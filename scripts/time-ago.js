export function timeAgo(timestamp) {
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