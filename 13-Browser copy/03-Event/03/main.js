const btn = document.querySelector('button');

function preventLink(event) {
 event.preventDefault();
 alert('Direct to google is disabled');
}

btn.addEventListener('click', preventLink);