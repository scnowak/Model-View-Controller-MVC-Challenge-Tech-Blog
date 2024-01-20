const postFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#newPost').value.trim();
    const content = document.querySelector('#content').value.trim();
    console.log (title, content)
    if (title && content) {
      const response = await fetch('/api/posts/', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
  document
    .querySelector('#create-new-post')
    .addEventListener('click', postFormHandler);