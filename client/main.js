Template.messageList.helpers({
  messages() {
    return Messages.find();
  }
});

Template.messageForm.events({
  "submit #message-form"(event) {
    event.preventDefault();

    Messages.insert({
      username: "john_snow",
      text: event.target.messageBox.value,
      createdAt: new Date()
    });

    event.target.messageBox.value = "";
  }
});
