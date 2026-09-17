// Create the Report Issue button
const reportButton = document.createElement('button');

reportButton.innerText = 'Report Issue';

reportButton.style.position = 'fixed';
reportButton.style.right = '20px';
reportButton.style.bottom = '20px';
reportButton.style.padding = '12px 18px';
reportButton.style.cursor = 'pointer';

document.body.appendChild(reportButton);

// Create the popup
const popup = document.createElement('div');

popup.style.position = 'fixed';
popup.style.right = '20px';
popup.style.bottom = '70px';
popup.style.width = '300px';
popup.style.padding = '20px';
popup.style.background = 'white';
popup.style.border = '1px solid #ccc';
popup.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
popup.style.display = 'none';

popup.innerHTML = `
    <h3>Report an Issue</h3>

    <label>Title</label><br>
    <input
        id="issue-title"
        type="text"
        style="width: 100%; margin-bottom: 10px;"
    >

    <label>Description</label><br>
    <textarea
        id="issue-description"
        style="width: 100%; height: 80px;"
    ></textarea>

    <br><br>

    <button id="submit-issue">
        Submit
    </button>
`;

document.body.appendChild(popup);

// Open / close popup
reportButton.addEventListener('click', () => {
  if (popup.style.display === 'none') {
    popup.style.display = 'block';
  } else {
    popup.style.display = 'none';
  }
});

// Test submit
document.getElementById('submit-issue').addEventListener('click', () => {
  const title = document.getElementById('issue-title').value;

  const description = document.getElementById('issue-description').value;

  console.log('New Issue');
  console.log('Title:', title);
  console.log('Description:', description);

  alert('Issue submitted!');
});
