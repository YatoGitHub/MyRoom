const CURRENT_CHAR_ID = document
    .querySelector('#room_form')
    .getAttribute('data-charid');

function processMessage(message) {
    if (message.getAttribute('data-charid') === CURRENT_CHAR_ID) {
        message.classList.add('my-message');
    }
}

// Обрабатываем сообщения, которые уже есть
document.querySelectorAll('#talks .t').forEach(processMessage);

// Следим за новыми сообщениями
const observer = new MutationObserver(mutations => {
    for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {

            if (node.nodeType !== 1) {
                continue;
            }

            if (node.classList.contains('t')) {
                processMessage(node);
            }
        }
    }
});

observer.observe(document.getElementById('talks'), {
    childList: true
});
