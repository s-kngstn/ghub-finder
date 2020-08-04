// Initialize / instantiate GitHub Class
const github = new GitHub();
// Initialize / instantiate UI Class
const ui = new UI();

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text by setting variable userText to whatever 'e'
  // event target is being typed into the search input. It's
  // '.value'
  const userText = e.target.value;

  if (userText !== '') {
    // The console.log is used to test if the keyup even is getting
    // the user text from the search bar
    // console.log(userText);
    //=============================//
    // Next, Make HTTP call
    github.getUser(userText).then((data) => {
      //console.log(data);
      if (data.profile.message === 'Not Found') {
        // Show an alert that says the user is not found (UI)
      } else {
        // Show user profile (UI)
        ui.showProfile(data.profile);
      }
    });
  } else {
    // Clear profile (UI)
  }
});
