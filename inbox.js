// inbox.js

document.addEventListener('DOMContentLoaded', function() {
    // Fetch and display user messages and notifications
    fetchUserMessages();
});

function fetchUserMessages() {
    // Dummy data for demonstration
    const userMessages = [
        { sender: 'admin', message: 'Welcome to Cook-Chat!' },
        { sender: 'friend1', message: 'Check out this new recipe!' }
    ];

    const inboxContainer = document.querySelector('main');
    userMessages.forEach(message => {
        const item = document.createElement('div');
        item.innerHTML = `
            <p><strong>${message.sender}:</strong> ${message.message}</p>
        `;
        inboxContainer.appendChild(item);
    });
}
