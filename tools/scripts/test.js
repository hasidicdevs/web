$('document').ready(function() {
  // Load the JSON data
  $.getJSON("json/data.json", function(data) {
    
    
    let myArr = []

    $.each(data, function(index, obj) { myArr.push(obj) });

    // Populate the select box with options
    for(let i = 0; i < myArr.length; i++){
      
      let optionElement = $("<option>").attr("value", myArr[i].domain).text(myArr[i].domain);
      $("#mySelect").append(optionElement);
    
    }

    // Add event listener to the select box
    $("#mySelect").on("change", function() {

      // Get the value of the selected option
      const selectedDomain = $(this).val();

      // Find the object with the matching domain
      const selectedClient = myArr.find(
        client => client.domain === selectedDomain
      );

      $("#client-domain").text(`Domain: ${selectedClient.domain}`)
      $("#client-status").text(selectedClient.status)
      $("#client-name").text(`${selectedClient.name} <${selectedClient.email}>`);
      $("#client-phone").text(selectedClient.phone_number);
      $("#client-address-street").text( selectedClient.address.street )
      $("#client-address-city").text(
        `${selectedClient.address.city}, ${selectedClient.address.state_code} ${selectedClient.address.zip_code}`
      )
    
    });
  })
})