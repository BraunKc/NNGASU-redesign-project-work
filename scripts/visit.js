function saveLastVisit() {
    const now = new Date().toISOString();
    localStorage.setItem('lastVisit', now);
}
function timeDiffenece(pastDate, currentDate) {
    pastDate = new Date(pastDate);
    currentDate = currentDate ? new Date(currentDate) : new Date();
    const diffMilliseconds = currentDate - pastDate;

    // const seconds = Math.round(diffMilliseconds / 1000);
    const days = Math.round(diffMilliseconds / (1000 * 60 * 60 * 24));
    return days;
}
function dateChecker() {
    if(localStorage.getItem('lastVisit') == undefined) {
        saveLastVisit();
    } else {
        if(document.getElementById('howToReset').style.display != 'flex' && localStorage.getItem('role') != undefined && timeDiffenece(localStorage.getItem('lastVisit')) > 7) {
            localStorage.removeItem('howToReset');
            howToReset('show');
            saveLastVisit();
        } else {
            saveLastVisit();
        }
    }
}
dateChecker();
