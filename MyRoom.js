if (window.myRoomObserver) {
    return;
}

const CURRENT_CHAR_ID = document
    .querySelector('#room_form')
    .getAttribute('data-charid');

function processMessage(message) {
    if (message.getAttribute('data-charid') === CURRENT_CHAR_ID) {
        message.classList.add('my-message');
    }
}

document.querySelectorAll('#talks .t').forEach(processMessage);

window.myRoomObserver = new MutationObserver(mutations => {
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

window.myRoomObserver.observe(document.getElementById('talks'), {
    childList: true
});
