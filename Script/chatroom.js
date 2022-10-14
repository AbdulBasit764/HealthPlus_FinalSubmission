let msgs_1;
let ids;

let get_message_chat = localStorage.getItem("doctor");

if (!get_message_chat) {
  msgs_1 = [];
  ids = 1;
} else {
  msgs_1 = JSON.parse(get_message_chat);
  ids = msgs_1.length;
}

for (let b = 0; b < msgs_1.length; b++) {
  const msg = msgs_1[b];
  let msg_2;

  if (msg.sent_by == "doctor") {
    msg_2 = `
     <div class="messages-2">
     <img src="img/team-3.jpg" class="rounded-circle" width="45" height="45" alt="">
         <p class="font-weight bg-white p-2 mx-2 mt-3"> ${msg.text}</p>
     </div>
     `;
  } else {
    msg_2 = `
     <div class="messages">
        <p class="font-weight text-white p-2  mt-3 mx-2">${msg.text}</p> 
     <img src="img/eht_dp.png" class="rounded-circle" width="45" height="45" alt="">
     </div>
        `;
  }

  document.getElementById("all-messages").innerHTML += msg_2;
}

function send_msg_from_dr() {
  let send_input_value = document.getElementById("send_msg_from_dr").value;

  let html_msg = `
        <div class="messages">        
          <p class="font-weight text-white p-2 mt-3 mx-2">${send_input_value}</p>
          <img src="img/eht_dp.png" class="rounded-circle" width="45" height="45" alt="">
        </div>
    `;

  document.getElementById("all-messages").innerHTML += html_msg;

  let patient = {
    id: ids,
    text: send_input_value,
    sent_by: "patient",
  };
  msgs_1.push(patient);
  localStorage.setItem("doctor", JSON.stringify(msgs_1));
  document.getElementById("send_msg_from_dr").value = "";
  let scroll_value = document.getElementById('chatting-area');
 scroll_value.scrollTop = 10000 ;
}



$('#send_msg_from_dr').on("keyup", function (e) {
  if (e.key === "Enter") {
    send_msg_from_dr();
  }
  let scroll_value = document.getElementById('chatting-area');
 scroll_value.scrollTop = 10000 ;
});