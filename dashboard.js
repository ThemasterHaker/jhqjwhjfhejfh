// dashboard.js

document.addEventListener('DOMContentLoaded', function() {
    // Fetch and display user-specific content
    fetchUserContent();
});

function fetchUserContent() {
    // Dummy data for demonstration
    const userContent = [
        { title: 'My Forums', link: 'my_forums.html' },
        { title: 'My Chat Rooms', link: 'my_chat_rooms.html' },
        { title: 'Messages', link: 'inbox.html' }
    ];

    const dashboardContainer = document.querySelector('main');
    userContent.forEach(content => {
        const item = document.createElement('p');
        item.innerHTML = `<a href="${content.link}">${content.title}</a>`;
        dashboardContainer.appendChild(item);
    });
}
