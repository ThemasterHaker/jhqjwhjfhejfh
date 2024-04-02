// user_profiles.js

document.addEventListener('DOMContentLoaded', function() {
    // Fetch and display user profile
    fetchUserProfile();
});

function fetchUserProfile() {
    // Dummy data for demonstration
    const userProfile = {
        username: 'example_user',
        email: 'example@example.com',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo consectetur, tincidunt ligula eget, ultrices turpis.'
    };

    const userProfileContainer = document.querySelector('main');
    userProfileContainer.innerHTML = `
        <section>
            <h2>${userProfile.username}</h2>
            <p><strong>Email:</strong> ${userProfile.email}</p>
            <p><strong>Bio:</strong> ${userProfile.bio}</p>
        </section>
    `;
}
