let check_form_list;
$('#payment-success-card').hide(50)

let get_data = localStorage.getItem("checkOut_data");

if (!get_data) {
  check_form_list = [];
} else {
  check_form_list = JSON.parse(get_data);
}

const reg_checkOut_form = () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let education = document.getElementById("education").value;
  let city = document.getElementById("city").value;
  let classSelect = document.getElementById("classSelect").value;
  let cardNumber = document.getElementById("cardNumber").value;
  let cardExpiry = document.getElementById("cardExpiry").value;
  let CVV = document.getElementById("CVV").value;
  let check_form_obj = {
    'name': name,
    'email': email,
    'education': education,
    'city': city,
    'classSelect': classSelect,
    'cardNumber': cardNumber,
    'cardExpiry': cardExpiry,
    'CVV': CVV,
  };
  check_form_list.push(check_form_obj);
  console.log(check_form_list);
  localStorage.setItem("checkOut_data", JSON.stringify(check_form_list));
  document.getElementById("name").value = '';
  document.getElementById("email").value = '';
  document.getElementById("education").value = '';
  document.getElementById("city").value = '';
  document.getElementById("classSelect").value = '';
  document.getElementById("cardNumber").value = '';
  document.getElementById("cardExpiry").value = '';
  document.getElementById("CVV").value = '';
  $('#reg-form').hide(150)
  
  let spinner = `
  <div class="spinner">
    <div class="spinner-border text-info" role="status">
    </div>
    <!-- <span class="fs-5 text-secondary mx-2">Loading...</span> -->
  </div>
      `
      document.getElementById('spinner').innerHTML = spinner
      $('#payment-success-card').show(150)
  
};
