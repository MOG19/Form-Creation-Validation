document.addEventListener('DOMContentLoaded', function() {
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        const dataContainer = document.getElementById('api-data');

        try {
            const response = await fetch(apiUrl);
            const users = await response.json();

            // Clear the existing content
            dataContainer.innerHTML = '';

            // Create a <ul> element
            const userList = document.createElement('ul');

            // Loop through the users and create <li> elements
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });

            // Append the userList to the dataContainer
            dataContainer.appendChild(userList);
        } catch (error) {
            // Clear the existing content and show an error message
            dataContainer.innerHTML = 'Failed to load user data.';
        }
    }

    fetchUserData();
});