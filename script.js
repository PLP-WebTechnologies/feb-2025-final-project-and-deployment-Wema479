document.getElementById('addPostButton').addEventListener('click', function() {
    const postTitle = document.getElementById('postTitle').value.trim();
    const postContent = document.getElementById('postContent').value.trim();

    if (postTitle && postContent) {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${postTitle}</strong><p>${postContent}</p>`;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(deleteButton);
        document.getElementById('postList').appendChild(li);

        // Clear input fields
        document.getElementById('postTitle').value = '';
        document.getElementById('postContent').value = '';
    } else {
        alert('Please fill in both fields!');
    }
});
