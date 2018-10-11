//Business logic

//Constructor for contacts.
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}

//User logic
$(document).ready(function() {
  $('#new-contact').submit(function(event) {
    event.preventDefault();

    let contactFirstName = $('#new-first-name').val();
    let contactLastName = $('#new-last-name').val();

    let newContact = new Contact(contactFirstName, contactLastName);

    $('#contacts').append('<li><span class="contact">' + newContact.firstName + '<span></li>');
    $('#new-first-name').val("");
    $('#new-last-name').val("");
  });
});
