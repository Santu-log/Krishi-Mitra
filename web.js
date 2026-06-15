 
        // Simple interactive elements
        document.addEventListener('DOMContentLoaded', function() {
            // Simulate loading data
            setTimeout(() => {
                const loadingElements = document.querySelectorAll('.loading');
                loadingElements.forEach(el => {
                    el.classList.remove('loading');
                });
            }, 1000);
            
            // Mobile menu toggle would go here in a full implementation
            // SMS send button functionality
            const smsSendBtn = document.querySelector('.fa-paper-plane').parentElement;
            const smsInput = document.querySelector('input[placeholder="Type your message..."]');
            
            smsSendBtn.addEventListener('click', function() {
                const message = smsInput.value.trim();
                if (message) {
                    // In a real app, this would send to backend
                    const chatArea = document.querySelector('.bg-gray-50.h-64');
                    const newMsg = document.createElement('div');
                    newMsg.className = 'flex justify-end mb-3';
                    newMsg.innerHTML = `
                        <div class="bg-green-100 rounded-lg p-3 max-w-xs">
                            <p>${message}</p>
                            <p class="text-xs text-gray-500 text-right mt-1">Just now</p>
                        </div>
                    `;
                    chatArea.appendChild(newMsg);
                    smsInput.value = '';
                    chatArea.scrollTop = chatArea.scrollHeight;
                    
                    // Simulate reply after 1 second
                    setTimeout(() => {
                        const replies = [
                            "Thank you for your message. Our team will respond shortly.",
                            "For immediate assistance, please call our helpline at 1800-123-4567",
                            "We've received your query and are processing it now."
                        ];
                        const reply = replies[Math.floor(Math.random() * replies.length)];
                        
                        const replyMsg = document.createElement('div');
                        replyMsg.className = 'flex mb-3';
                        replyMsg.innerHTML = `
                            <div class="bg-blue-100 rounded-lg p-3 max-w-xs">
                                <p>${reply}</p>
                                <p class="text-xs text-gray-500 text-right mt-1">Just now</p>
                            </div>
                        `;
                        chatArea.appendChild(replyMsg);
                        chatArea.scrollTop = chatArea.scrollHeight;
                    }, 1000);
                }
            });
            
            // Allow pressing Enter to send SMS
            smsInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    smsSendBtn.click();
                }
            });
        });
  