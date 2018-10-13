//Business logic

//Put Address form here so it's less cumbersome in the main code.
const addressForm = '<div class="new-address">' +
                       '<div class="form-group">' +
                         '<label for="new-street">Street</label>' +
                         '<input type="text" class="form-control new-street">' +
                       '</div>' +
                       '<div class="form-group">' +
                         '<label for="new-city">City</label>' +
                         '<input type="text" class="form-control new-city">' +
                       '</div>' +
                       '<div class="form-group">' +
                         '<label for="new-state">State</label>' +
                         '<input type="text" class="form-control new-state">' +
                       '</div>' +
                     '</div>';

//Constructor for contacts.
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
}

//Constructor for addresses.
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

//New method for address prototype to return full addresses.
Address.prototype.fullAddress = function() {
  return `${this.street} <br> ${this.city}, ${this.state}<br>${this.zip}`
}
//User logic
$(document).ready(function() {
  $('#add-address').click(function() {
    $('#new-addresses').append(addressForm);
  });

  $('#new-contact').submit(function(event) {
    event.preventDefault();

    let contactFirstName = $('#new-first-name').val();
    let contactLastName = $('#new-last-name').val();

    let newContact = new Contact(contactFirstName, contactLastName);

    $('.new-address').each(function() {
      let inputtedStreet = $(this).find(`input.new-street`).val();
      let inputtedCity = $(this).find(`input.new-city`).val();
      let inputtedState = $(this).find(`input.new-state`).val();
      let inputtedZip = $(this).find(`input.new-zip`).val();
      let newAddress = new Address(inputtedStreet, inputtedCity, inputtedState, inputtedZip);
      newContact.addresses.push(newAddress);
    });
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
