let counter = 1;

setInterval(() => {
  $(".spinner").hide();
  $("#all_body").show();
}, 700); //700 mili second

// let get_confirm_msg = localStorage.getItem("response");
let confirm_reg_msg = localStorage.getItem("confirm_reg_msg");
let get_reg_msg_parse;
let idss;

if (confirm_reg_msg) {
  get_reg_msg_parse = JSON.parse(confirm_reg_msg);
  idss = get_reg_msg_parse.length;
} 
else {
  get_reg_msg_parse = [];
  idss = 1;
}



for (let a = 0; a < get_reg_msg_parse.length; a++) {
  const reg_msg = get_reg_msg_parse[a];
  if (reg_msg["type"] == "appointment") {
    console.log('appointment');
    let notification_html = `
    <div class="mt-3" id='noti_2-${counter}'>
    <div  class="border text-left w-100 radius-10 notification-card my-2" >
                          <div class="">
                          <div class="row px-3 mt-2  text-secondary" style="font-size: 18px !important;">
                          <div class="w-75">
                                      <small class="">Appointment Update</small>
                                  </div>
                                  <div class="w-25  d-flex justify-content-end align-items-center">
                                  <i class="material-icons mk-pointer" onclick='remove(${counter})' id='noti1-${counter}' style="font-size: 18px;">cancel</i>
                                  </div>
                              </div>
                              <small class="mx-3 mt-1 font-size text-secondary">2022</small>
                          </div>
                          <div class="card-body py-3 pt-2 my-0">
                              <p class="card-text" style="font-size: 12px !important;">${reg_msg.appointment_confirm
                              } 
                              </p>
                          </div>
                          </div>
                          </div>
                          `;

    document.getElementById("all_notification").innerHTML +=
      notification_html;
  } else {

    let notification_html = `
    <div class="mt-3" id='noti_2-${counter}'>
    <div  class="border text-left w-100 radius-10 notification-card my-2" >
                          <div class="">
                          <div class="row px-3 mt-2  text-secondary" style="font-size: 18px !important;">
                          <div class="w-75">
                                      <small class="">Course Update</small>
                                  </div>
                                  <div class="w-25  d-flex justify-content-end align-items-center">
                                  <i class="material-icons mk-pointer" onclick='remove(${counter})' id='noti1-${counter}' style="font-size: 18px;">cancel</i>
                                  </div>
                              </div>
                              <small class="mx-3 mt-1 font-size text-secondary">2022</small>
                          </div>
                          <div class="card-body py-3 pt-2 my-0">
                              <p class="card-text" style="font-size: 12px !important;">${reg_msg.course_confirm} 
                              </p>
                          </div>
                          </div>
                          </div>
                          `;

    document.getElementById("all_notification").innerHTML +=
      notification_html;
  }
  counter++;



}


if (get_reg_msg_parse.length == 0) {
  $("#notifications").hide();
} else {
  $("#notifications").show();
  document.getElementById("notifications").innerHTML = get_reg_msg_parse.length
}



$("#searching").click(function () {
  $("#search").show(150);
});


function remove(counter) {
  $(this).hide()
  $(`#noti_2-${counter}`).remove()
}


// let get_message = localStorage.getItem('all_message');

// let messages ;
// if (get_message == null) {
//     messages = [];
// }else{
//     let arr = []
//     messages = JSON.parse(get_message);
//     for (let a = 0; a < messages.length; a++) {
//         const element = messages[a];
//         arr.push(element.id, element.message)
//     }
// }
