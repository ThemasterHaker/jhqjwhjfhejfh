// index.js

document.addEventListener('DOMContentLoaded', function() {
    // Fetch and display latest forums
    fetchLatestForums();

    // Fetch and display featured chat rooms
    fetchFeaturedChatRooms();
});

function fetchLatestForums() {
    // Dummy data for demonstration
    const latestForums = [
        { name: 'General Discussion', description: 'Discuss anything here.' },
        { name: 'Recipes', description: 'Share your favorite recipes.' },
        { name: 'Cooking Techniques', description: 'Learn and discuss cooking techniques.' }
    ];

    const latestForumsList = document.getElementById('latestForums');
    latestForumsList.innerHTML = '';

    latestForums.forEach(forum => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${forum.name}</strong>: ${forum.description}`;
        latestForumsList.appendChild(listItem);
    });
}

function fetchFeaturedChatRooms() {
    // Dummy data for demonstration
    const featuredChatRooms = [
        { name: 'Recipe Exchange', topic: 'Share and discuss recipes.' },
        { name: 'Cooking Tips', topic: 'Get and share cooking tips and tricks.' },
        { name: 'Foodie Chat', topic: 'Connect with other food enthusiasts.' }
    ];

    const featuredChatRoomsList = document.getElementById('featuredChatRooms');
    featuredChatRoomsList.innerHTML = '';

    featuredChatRooms.forEach(chatRoom => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${chatRoom.name}</strong>: ${chatRoom.topic}`;
        featuredChatRoomsList.appendChild(listItem);
    });
}
