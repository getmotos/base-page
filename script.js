document.addEventListener('DOMContentLoaded', function () {
    const chatButton = document.getElementById('chatButton');
    const chatModal = document.getElementById('chatModal');
    const closeChatButton = document.getElementById('closeChatButton');
    const chatMessages = document.getElementById('chatMessages');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');

    function toggleChatModal() {
        const isHidden = chatModal.style.display === 'none' || chatModal.style.display === '';
        chatModal.style.display = isHidden ? 'block' : 'none';
        chatModal.style.opacity = isHidden ? '1' : '0';
        chatModal.style.transform = isHidden ? 'translateY(0)' : 'translateY(20px)';
    }

    function addMessage(sender, message) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', `${sender}-message`);
        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function sendMessage() {
        const message = userInput.value.trim();
        if (message) {
            addMessage('user', message);
            userInput.value = '';
            // 模拟AI回复
            setTimeout(() => {
                addMessage('ai', `AI回复：${message}`);
            }, 1000);
        }
    }

    chatButton.addEventListener('click', toggleChatModal);
    closeChatButton.addEventListener('click', toggleChatModal);
    sendButton.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    // 初始化
    chatModal.style.display = 'none';
    addMessage('ai', '你好！我是AI助手，有什么可以帮助你的吗？');

    // 新增的账号交互功能
    const bilibiliIcon = document.getElementById('bilibiliIcon');
    const wechatIcon = document.getElementById('wechatIcon');
    const accountModal = document.getElementById('accountModal');
    const accountModalTitle = document.getElementById('accountModalTitle');
    const accountMessage = document.getElementById('accountMessage');
    const accountInput = document.getElementById('accountInput');
    const submitAccount = document.getElementById('submitAccount');
    const closeAccountModal = accountModal.querySelector('.close');

    function showAccountModal(platform) {
        accountModalTitle.textContent = `请输入您的${platform}账号`;
        accountMessage.textContent = ''; // 清空消息
        accountModal.style.display = 'block';
        accountInput.value = '';
        accountInput.focus();

        submitAccount.onclick = function () {
            const account = accountInput.value.trim();
            if (account) {
                accountMessage.textContent = `拿来吧你~您的${platform}账号是：${account}`;
                accountInput.value = ''; // 清空输入框
            } else {
                accountMessage.textContent = '请输入有效的账号';
            }
        };
    }

    bilibiliIcon.addEventListener('click', function (e) {
        e.preventDefault();
        showAccountModal('哔哩哔哩');
    });

    wechatIcon.addEventListener('click', function (e) {
        e.preventDefault();
        showAccountModal('微信');
    });

    closeAccountModal.addEventListener('click', function () {
        accountModal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == accountModal) {
            accountModal.style.display = 'none';
        }
    });
});