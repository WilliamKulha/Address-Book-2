//Business logic

//Constructor for contacts.
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.address = [];
}

function Address(street, city, state, zip) {
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
}

//add new method for the contact prototype so it doesn't have to be instantiated every time the object is.
Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}
//User logic
$(document).ready(function() {
  $('#new-contact').submit(function(event) {
    event.preventDefault();

    let contactFirstName = $('#new-first-name').val();
    let contactLastName = $('#new-last-name').val();

    let newContact = new Contact(contactFirstName, contactLastName);

    $('#contacts').append('<li><span class="contact">' + newContact.fullName() + '<span></li>');
    $('.contact').last().click(function() {
      $('#show-contact').slideDown();
      $('#show-contact h2').text(newContact.firstName);
      $('.first-name').text(newContact.firstName);
      $('.last-name').text(newContact.lastName);
    })
    $('#new-first-name').val("");
    $('#new-last-name').val("");
  });
});
