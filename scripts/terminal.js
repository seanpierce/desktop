$(function() {
  // add realtime authentication listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    // if user is loged in
    if(firebaseUser) {
      $('.success-message-div').show();
      $('.success-message').html(
        `
        Welcome ${firebaseUser.email}<br>
        <a href="admin.html">click here</a> to access the admin portal</br>
        <a href="#" class="logout">click here</a> to log out
        `
      );
      $('.logout').click(function() {
        firebase.auth().signOut();
        $('.success-message-div').hide();
      });
    // else user is null
    } else {
      console.log("Not logged in...");
      $('.success-message-div').hide();

      let username, password;
      // username inputs
      $('.terminal-form-user').show();
      $('.terminal-form-user').submit(function(e) {
        e.preventDefault();
        username = $('.username-input').val();
        $(this).hide();
        $('.username-input').val('');
        $('.terminal-form-pass').show();
        $('.password-input').focus();
      });
      // password input
      $('.terminal-form-pass').submit(function(e) {
        e.preventDefault();
        password = $('.password-input').val();
        $(this).hide();
        $('.password-input').val('');
        // authorize
        const auth = firebase.auth();
        // log in
        const promise = auth.signInWithEmailAndPassword(username, password);
        promise.catch(function(e) {
          console.log(e.message);
          $('.failure-message-div').show();
        });
      });
    }
  });

});
