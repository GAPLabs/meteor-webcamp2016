Template.messageList.helpers({
  messages() {
    return Messages.find();
  }
});

Template.message.helpers({
  isMyMessage() {
    if (Meteor.user() && Meteor.user().username == this.username) {
      return "mine";
    } else {
      return "";
    }
  }
});

Template.messageForm.events({
  "submit #message-form"(event) {
    event.preventDefault();

    Messages.insert({
      username: Meteor.user().username,
      text: event.target.messageBox.value,
      createdAt: new Date()
    });

    event.target.messageBox.value = "";
  }
});

Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});
