let counter = 1;
let confirm_list = [];
let get_appoin_request = localStorage.getItem("appoitment");
let no_data = document.getElementById("no_data");
let confirm2 = "confirm";
let parse_get_appoin_request;

if (!get_appoin_request) {
  parse_get_appoin_request = [];
  $("#all-appointments").hide();
  $("#appointment-error").removeClass("no-data");
} else {
  $("#appointment-error").addClass("no-data");
  $("#all-appointments").show();
  parse_get_appoin_request = JSON.parse(get_appoin_request);

  for (let i = 0; i < parse_get_appoin_request.length; i++) {
    const element = parse_get_appoin_request[i];
    let html_elem = `
        <div class="card p-3 m-3 rounded-2">
        <div class="d-flex align-items-center ">
          <div class="d-flex align-items-center w-50 ">
            <img src="/img/about_3.webp" class="rounded-circle" width="50" height="50" alt="">
            <div class="mx-2">
              <h6 class="p-0 m-0">${element.first_name} ${element.last_name}</h6>
              <p class="m-0 p-0">3m ago</p>
            </div>
          </div>
          <div class="w-50 text-end">
            <i class="material-icons more_vert"  title="chat">more_vert</i>
          </div>
        </div>

        <div class="my-3 d-flex mx-5 ">
          <div class="d-flex align-items-center">
            <i class="material-icons mx-2">calendar_month</i>
            <span>${element.date}</span>
          </div>
          <div class="mx-5 d-flex align-items-center">
            <i class="material-icons mx-2">schedule</i>
            <span>${element.time}</span>
          </div>
        </div>
        <div class="mx-5 my-3 d-flex align-items-center">
          <button type="button" onclick='confirm(${counter})'  id='confirm-${counter}' class="mx-2 p-1 mx-1 button2 d-flex align-items-center">
            <i class="material-icons fs-4">done</i> <span class="mx-1"> Accept </span>
            </button>
            <div class=' w-100 d-flex align-items-center justify-content-end'>
            <div>
            <h6 class='mx-2' id='pending-${counter}'></h6>
              <button type="button" onclick='cancel(${counter})' style='background-color:rgba(5, 91, 112, 0.788);'  class="p-1 px-2 mx-2 id='cancel-${counter}'  button3 d-flex align-items-center">
                 Confirm task </span>
                </button>
                </div>
            </div>
          </div>

        <div class="mx-5 px-2">
          <h5 class="m-0 p-0">Discription</h5>
          <p class="text-secondary p-0 m-0">
          ${element.dsc}
          </p>
        </div>
        </div>
      </div>
                    `;
    document.getElementById("appointment-data").innerHTML += html_elem;
    counter++;
  }
}

// let get_msg_2 = localStorage.getItem("message2");
// let parse_get_msg_2;
// if (get_msg_2 == null) {
//   parse_get_msg_2 = [];
// } else {
//   parse_get_msg_2 = JSON.parse(get_msg_2);

//   for (let y = 0; y < parse_get_msg_2.length; y++) {
//     const elementy = parse_get_msg_2[y];
//     let msg_2 = `
//       <div class="messages-2">
//       <img class="rounded-circle mx-1 dr-dp-2" src="/img/doctor-3.jpeg" width="40" height="40"
//       alt="Title">
//       <p class="font-weight bg-white p-2 mx-2 mt-3">${elementy.msg}</p>
//   </div>
//     `;
//     document.getElementById("all-messages").innerHTML += msg_2;
//   }
// }

let get_msg = localStorage.getItem('confirm_reg_msg')

if (get_msg) {
  confirm_list = JSON.parse(get_msg)
}else{
  confirm_list = [];
}

function confirm(counter) {
  let full_year = new Date();
  let date = full_year.getMonth();
  let mm = full_year.getDate();
  let year = full_year.getFullYear();

  let confirm_response = `THANK YOU! For Contacting Us Your Appointment has been received and Your i'd <code> RG002${counter} </code>`;
  console.log(date, mm, year);
  let confirm_obj = {
    'appointment_confirm': confirm_response,
    'date': date + "/" + mm + "/" + year,
    'id': counter,
    'type' : 'appointment'
  };
  confirm_list.push(confirm_obj);
  localStorage.setItem("confirm_reg_msg", JSON.stringify(confirm_list));
  document.getElementById(`pending-${counter}`).innerHTML = "Pending...";
  counter++;
}
