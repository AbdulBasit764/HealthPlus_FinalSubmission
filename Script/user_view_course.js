let parse_get_recent_cours_upload;
let get_recent_cours_upload = localStorage.getItem("upload_course_post");
let course_count = 1;
let dr_dp = 1;

if (get_recent_cours_upload) {
  parse_get_recent_cours_upload = JSON.parse(get_recent_cours_upload);

  for (let i = 0; i < parse_get_recent_cours_upload.length; i++) {
    const upload_posts = parse_get_recent_cours_upload[i];
    console.log(upload_posts["sltCotegory"]);
    if (upload_posts["sltCotegory"] == "Anesthesiology") {
      let card = `
    <div class="col-md-3 my-3">
                    <a href="enrollNow.html" class="text-decoration-none text-dark" target="_blank">
                        <div class="card text-start">
                            <img class="card-img-top course-img" height="220px" src="img/course_${course_count}.jpg" alt="Title">
                            <div class="p-2">
                                <div class="d-flex align-items-center my-2 ">
                                    <img src="img/team-${dr_dp}.jpg" class="rounded-circle" width="45" height="45" alt="">
                                    <div class="mx-1">
                                        <h6 class="p-0 m-0 mx-2">Dr. Syed Maaz Hassan</h6>
                                        <div class="d-flex  align-items-center ">
                                            <i class="material-icons mx-1 fs-5 text-warning">star</i>
                                            <h6 class="p-0 m-0 ">4.6</h6>
                                            <p class="p-0 m-0 text-secondary mx-1"> (231 reviews)</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center my-2 mt-3">
                                    <img src="img/uni_logo.png" width="50" alt="">
                                    <p class="text-secondary p-0 mx-1 m-0 fw-bold">${upload_posts.instName}</p>
                                </div>
                                <div>
                                    <p class="p-0 m-0 text-secondary mb-2">
                                        ${upload_posts.dsc}
                                    </p>
                                    <p class="p-0 m-0 text-secondary mx-1">${upload_posts.educaion}. ${upload_posts.durationCourse}</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                        `;
      document.getElementById("category_2").innerHTML += card;
    } else {
      let card = `
    <div class="col-md-3 my-3">
                    <a href="enrollNow.html" class="text-decoration-none text-dark" target="_blank">
                        <div class="card text-start">
                            <img class="card-img-top course-img" height="220px" src="img/course_${course_count}.jpg" alt="Title">
                            <div class="p-2">
                                <div class="d-flex align-items-center my-2 ">
                                    <img src="img/team-${dr_dp}.jpg" class="rounded-circle" width="45" height="45" alt="">
                                    <div class="mx-1">
                                        <h6 class="p-0 m-0 mx-2">Dr. Syed Maaz Hassan</h6>
                                        <div class="d-flex  align-items-center ">
                                            <i class="material-icons mx-1 fs-5 text-warning">star</i>
                                            <h6 class="p-0 m-0 ">4.6</h6>
                                            <p class="p-0 m-0 text-secondary mx-1"> (231 reviews)</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center my-2 mt-3">
                                    <img src="img/uni_logo.png" width="50" alt="">
                                    <p class="text-secondary p-0 mx-1 m-0 fw-bold">${upload_posts.instName}</p>
                                </div>
                                <div>
                                    <p class="p-0 m-0 text-secondary mb-2">
                                        ${upload_posts.dsc}
                                    </p>
                                    <p class="p-0 m-0 text-secondary mx-1">${upload_posts.educaion}. ${upload_posts.durationCourse}</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                        `;
      document.getElementById("category_1").innerHTML += card;
    }
  }


  dr_dp++;
  course_count++;
  
  if (course_count == 11) {
      course_count = 1;
  }
  if (dr_dp == 5) {
          dr_dp = 1;
      }
} else {
  parse_get_recent_cours_upload = [];
}



