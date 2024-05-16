const firstQ = document.getElementById('firstQ');
const secondQ = document.getElementById('secondQ');

function getSecondQ () {
    firstQ.style.display = 'none';
    secondQ.style.display = 'flex';
}

function getFirstQ () {
    firstQ.style.display = 'flex';
    secondQ.style.display = 'none';
}

document.getElementById('btnApplicant').addEventListener('click', getSecondQ);
document.getElementById('btnStudent').addEventListener('click', getSecondQ);
