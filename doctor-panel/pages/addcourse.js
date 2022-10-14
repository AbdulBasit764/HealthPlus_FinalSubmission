let counter = 1;
let add_course_list;
let get_post = localStorage.getItem("upload_course_post");

if (get_post == null) {
  add_course_list = [];
} else {
  add_course_list = JSON.parse(get_post);
  for (let a = 0; a < add_course_list.length; a++) {
    const element = add_course_list[a];
    console.log(element["id"]);
  }
}

function AddCourseForm() {
  let institutename = document.getElementById("institutename").value;
  let email = document.getElementById("email").value;
  let courseTitle = document.getElementById("courseTitle").value;
  let selectCotegory = document.getElementById("selectCotegory").value;
  let durationCourse = document.getElementById("durationCourse").value;
  let date = document.getElementById("date").value;
  let classTiming = document.getElementById("classTiming").value;
  let imageAttach = document.getElementById("imageAttach").value;
  let educaion = document.getElementById("educaion").value;
  let dsc = document.getElementById("dsc").value;

  if (institutename && email && courseTitle && selectCotegory && durationCourse && date && 
    classTiming && imageAttach && educaion && dsc
  ) {
    let add_course_obj = {
        id: counter,
        instName: institutename,
        email: email,
        crsTitle: courseTitle,
        sltCotegory: selectCotegory,
        durationCourse: durationCourse,
        date: date,
        classTiming: classTiming,
        imageAttach: imageAttach,
        educaion: educaion,
        dsc: dsc,
      };
      counter++;
      // console.log(counter);
      add_course_list.push(add_course_obj);
      localStorage.setItem("upload_course_post", JSON.stringify(add_course_list));
      let thorough_msg = `
      <div class="alert " style='    color: #0f5132;
      background-color: #d1e7dd;' role="alert">
          <b>Succecc..!</b> Your Course has been uploaded THANK YOU..!
      </div>
              `;
      document.getElementById("alert").innerHTML = thorough_msg;
      setTimeout(() => {
        $(".alert").hide();
      }, 3000);
      console.log('good');
      console.log(add_course_list);
      document.getElementById("institutename").value = "";
      document.getElementById("email").value = "";
      document.getElementById("courseTitle").value = "";
      document.getElementById("selectCotegory").value = "";
      document.getElementById("durationCourse").value = "";
      document.getElementById("date").value = "";
      document.getElementById("classTiming").value = "";
      document.getElementById("imageAttach").value = "";
      document.getElementById("educaion").value = "";
      document.getElementById("dsc").value = "";
  
  } else {
    let thorough_blank_error = `
    <div class="alert alert-2" style='    color: #842029;
    background-color: #f8d7da;' role="alert">
        <b>Oops..!</b> Sorry. full fields input THANK YOU..!
    </div>
            `;
    document.getElementById("alert").innerHTML = thorough_blank_error;
    setTimeout(() => {
        $('.alert-2').hide()
    }, 3000);
    console.log('sorry');
   
}
}
