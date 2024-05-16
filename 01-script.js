const form = document.querySelector('#my-form');
const table = document.querySelector('#data-table tbody');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const fname = document.querySelector('#fname').value;
  const lname = document.querySelector('#lname').value;
  const phoneNo = document.querySelector('#phone-no').value;
  const gmail = document.querySelector('#gmail').value;
  const address = document.querySelector('#address').value;

  const row = document.createElement('tr');

  const fnameCell = document.createElement('td');
  fnameCell.textContent = fname;
  row.appendChild(fnameCell);

  const lnameCell = document.createElement('td');
  lnameCell.textContent = lname;
  row.appendChild(lnameCell);

  const phoneNoCell = document.createElement('td');
  phoneNoCell.textContent = phoneNo;
  row.appendChild(phoneNoCell);

  const gmailCell = document.createElement('td');
  gmailCell.textContent = gmail;
  row.appendChild(gmailCell);

  const addressCell = document.createElement('td');
  addressCell.textContent = address;
  row.appendChild(addressCell);

  table.appendChild(row);

  // Clear the form fields
  document.querySelector('#fname').value = '';
  document.querySelector('#lname').value = '';
  document.querySelector('#phone-no').value = '';
  document.querySelector('#gmail').value = '';
  document.querySelector('#address').value = '';
});