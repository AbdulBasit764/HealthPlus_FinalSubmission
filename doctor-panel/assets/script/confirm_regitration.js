
let count = 1;

let students_reg_request = localStorage.getItem('checkOut_data');
let parse_students_reg_request;


if (!students_reg_request) {
    parse_students_reg_request = []
    $('#reg-data-all').hide()
}else{
    $('#reg-data-all').show()
    $('.no_reg_data').hide()
    parse_students_reg_request = JSON.parse(students_reg_request);
    for (let i = 0; i < parse_students_reg_request.length; i++) {
        const registrations = parse_students_reg_request[i];
        let registrations_card = `
        <div class="col-md-6 my-3">
        <div class="card text-start  p-3">
            <div class="d-flex align-items-center">
                <img class="rounded-circle" width="55" src="/img/team-1.jpg" alt="Title">
                <div class="mx-3">
                    <h6 class="p-0 m-0">${registrations.name}</h6>
                    <p class="p-0 m-0 text-secondary">3min ago</p>
                </div>
            </div>
            <div class="mx-1 mt-3">
                <div class="d-flex align-items-center">
                    <h6 class="p-0 m-0">Education :</h6>
                    <p class="p-0 m-0 mx-2">${registrations.education}</p>
                </div>
                <div class="d-flex align-items-center">
                    <h6 class="p-0 m-0">Course duration :</h6>
                    <p class="p-0 m-0 mx-2">6 Month</p>
                </div>
                <p class="d-flex align-items-center p-0 m-0 my-1 mt-2">
                    <i class="material-icons">mail</i> <span class="mx-2">${registrations.email}</span>
                </p>
                <div class="d-flex align-items-center">
                    <p class="d-flex align-items-center p-0 m-0 my-1 w-50">
                        <i class="material-icons">person</i> <span class="mx-2">${registrations.city}</span>
                    </p>
                    <p class="d-flex align-items-center justify-content-end p-0 m-0 my-1  w-50 ">
                        <i class="material-icons">school</i> <span class="mx-2">${registrations.classSelect}</span>
                    </p>
                </div>
                <p class="d-flex align-items-center p-0 m-0 my-1">
                    <i class="material-icons">schedule</i> <span class="mx-2">3:00pm to 5:00pm</span>
                </p>
            </div>
            <div>
                
            </div>
            <button onclick="confirmRegistration(${count})" id="confirm_reg${count}" type="button" class="btn btn-primary mt-2 btn-sm mb-0 mx-1">
                <span class="spinner-border mx-2 spinner-border-sm" id='spinner${count}' style="display: none;" role="status" aria-hidden="true"></span>
                Confirm Registration</button>
        </div>
    </div>

                `
                document.getElementById('registration_students_card').innerHTML += registrations_card
        
                count++
    }

}





var confirm_reg_msg_list = []
let count_2 = 552;


let get_msg = localStorage.getItem('confirm_reg_msg')

if (get_msg) {
    confirm_reg_msg_list = JSON.parse(get_msg)
}else{
    confirm_reg_msg_list = [];
}

function confirmRegistration(count) {
    $(`#confirm_reg${count}`).addClass('disabled')
    $(`#spinner${count}`).show()
    setTimeout(() => {
        $(`#spinner${count}`).hide()
        $(`#confirm_reg${count}`).html('Registration Successfull')
    }, 1000);
    let confirm_reg_msg_obj = {
        'course_confirm' : `THANK YOU! For Contacting Us Your Registration has beed Successfull.Your Class Start 02/01/2023 Your id id is #ST${count_2}`,
        'type' : 'course'
    }
    count_2++
    confirm_reg_msg_list.push(confirm_reg_msg_obj)
    localStorage.setItem('confirm_reg_msg', JSON.stringify(confirm_reg_msg_list))
    // console.log(count_2);
}