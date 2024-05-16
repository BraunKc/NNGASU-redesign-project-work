function setRole(value) {
    localStorage.setItem('role', value);
    if (value == 'noname') {
        showPage('noname');
        howToReset('show');
    }
    return;
}

function setWhere(value) {
    localStorage.setItem('where', value);
    showPage(localStorage.getItem('role'), value);
    howToReset('show');
    return;
}
