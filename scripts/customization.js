const styleLink = document.querySelector('#styleLink');
const role = localStorage.getItem('role');
const where = localStorage.getItem('where');

showPage(role, where);

function showPage(role, where) {
  var roleStyles = {
    'noname': 'styles/nonameStyles.css',
    'applicant': 'styles/applicantStyles.css',
    'student': 'styles/studentStyles.css',
    'default': 'styles/startStyles.css'
  };
  addLoadingMask();

  role = role ?? null;
  where = where ?? null;
  role = (where == null && role != 'noname') ? null : role;

  function setDisplay(selector, displayValue) {
      document.querySelectorAll(selector).forEach(element => {
          element.style.display = displayValue;
      });
  }

  setDisplay('.startPage', role == null ? 'flex' : 'none');
  setDisplay('.nonamePage', role == 'noname' ? 'flex' : 'none');
  setDisplay('.bothPages', (role == 'student' || role == 'applicant') ? 'flex' : 'none');
  setDisplay('.studentPage', role == 'student' ? 'flex' : 'none');
  setDisplay('.applicantPage', role == 'applicant' ? 'flex' : 'none');

  setDisplay('.college', where == 'college' ? 'flex' : 'none');
  setDisplay('.university', where == 'university' ? 'flex' : 'none');

  styleLink.href = roleStyles[role] || roleStyles['default'];

  setTimeout(removeLoadingMask, 50);
}
