 <script src="https://accounts.google.com/gsi/client" async defer></script>
    <script>
        function handleCredentialResponse(response) {
            try {
                const decodedCredential = JSON.parse(atob(response.credential.split('.')[1]));
                const email = decodedCredential.email;

                if (email) {
                    document.querySelector('.login-container').style.display = 'none';
                    document.querySelector('.chat-container').style.display = 'block';
                } else {
                    alert('Login Failed');
                }
            } catch (error) {
                console.error('Error parsing credential:', error);
                alert('Invalid login response.');
            }
        }

        window.onload = function () {
            google.accounts.id.initialize({
                client_id: '73447116297-npdqevudsf5ra409arvs1o64o8sskdbi.apps.googleusercontent.com',
                callback: handleCredentialResponse
            });

            google.accounts.id.renderButton(
                document.getElementById('google-login-button'),
                { theme: 'outline', size: 'large' }
            );
        };

        function sendMessage() {
            const input = document.getElementById('message-input');
            const messageText = input.value.trim();
            if (messageText) {
                const chatContent = document.querySelector('.chat-content');
                const messageDiv = document.createElement('div');
                messageDiv.className = 'message visitor';
                messageDiv.innerHTML = `<div class="bubble">${messageText}</div>`;
                chatContent.appendChild(messageDiv);
                input.value = '';
                chatContent.scrollTop = chatContent.scrollHeight;
            }
        }
    </script>
