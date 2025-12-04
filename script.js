    // small UX touches
    document.getElementById('year').textContent = new Date().getFullYear();
    // sample ChatGPT link updater (explain this to client when handing off)
    document.getElementById('chat-link').addEventListener('click', function(e){
      e.preventDefault();
      alert('To update the ChatGPT link, replace the href in #chat-link with your ChatGPT URL.');
    });
