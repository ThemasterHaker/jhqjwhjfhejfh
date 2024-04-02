// my_forums.js

document.addEventListener('DOMContentLoaded', function() {
    // Fetch and display forums created by the user
    fetchUserForums();
});

function fetchUserForums() {
    // Dummy data for demonstration
    const userForums = [
        { name: 'Favorite Recipes', description: 'Share your favorite recipes.' },
        { name: 'Healthy Eating', description: 'Discuss healthy eating habits.' }
    ];

    const forumsContainer = document.querySelector('main');
    userForums.forEach(forum => {
        const item = document.createElement('div');
        item.innerHTML = `
            <h2>${forum.name}</h2>
            <p>${forum.description}</p>
        `;
        forumsContainer.appendChild(item);
    });
}
