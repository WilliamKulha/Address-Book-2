//Business logic

//Put Address form here so it's less cumbersome in the main code.
const addressForm = '<div class="new-address">' +
                      '<div class="form-group">' +
                        '<label for="new-type">What kind of address(Work, home, condo, etc)</label>' +
                        '<input type="text" class="form-control new-type">' +
                      '</div>' +
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
                       '<div class="form-group">' +
                         '<label for="new-zip">Zip</label>' +
                         '<input type="number" class="form-control new-zip">' +
                       '</div>' +
                     '</div>';

//Constructor for contacts.
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
}

//Constructor for addresses.
function Address(type, street, city, state, zip) {
  this.type = type
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
  return `${this.type}<br>${this.street} <br> ${this.city}, ${this.state}<br>${this.zip}`
}

//Function to empty input fields when the user has submitted the form.
function emptyForms() {
  $('#new-first-name').val("");
  $('#new-last-name').val("");
  $('.new-type').val("");
  $('.new-street').val("");
  $('.new-city').val("");
  $('.new-state').val("");
  $('.new-zip').val('');
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
      let inputtedType = $(this).find(`input.new-type`).val();
      let inputtedStreet = $(this).find(`input.new-street`).val();
      let inputtedCity = $(this).find(`input.new-city`).val();
      let inputtedState = $(this).find(`input.new-state`).val();
      let inputtedZip = $(this).find(`input.new-zip`).val();
      let newAddress = new Address(inputtedType, inputtedStreet, inputtedCity, inputtedState, inputtedZip);
      newContact.addresses.push(newAddress);
    });
    $('#contacts').append('<li><span class="contact">' + newContact.fullName() + '<span></li>');
    $('.contact').last().click(function() {
      $('#show-contact').slideDown();
      $('#show-contact h2').text(newContact.firstName);
      $('.first-name').text(newContact.firstName);
      $('.last-name').text(newContact.lastName);
      $('ul#addresses').text('');
      newContact.addresses.forEach(function(address) {
        $('ul#addresses').append(`<li>${address.fullAddress()}</li>`)
      });
    });
    emptyForms();
  });
});
