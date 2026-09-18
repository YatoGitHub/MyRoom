const CURRENT_CHAR_ID = document
    .querySelector('#room_form')
    .getAttribute('data-charid');

document.querySelectorAll('#talks .t').forEach(message => {
    if (message.getAttribute('data-charid') === CURRENT_CHAR_ID) {
        message.classList.add('my-message');
    }
});
