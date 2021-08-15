<template>
  <div class="hello">
    <div class="row justify-content-center mt-4">
      <div
        v-for="(job, index) in jobs"
        :key="index"
        class="col-xs-12 col-sm-6 col-md-4 col-lg-3 card-group"
      >
        <div class="card mx-auto my-3" style="width: 18rem;border-radius: 23px;">
          <div class="card-body">
            <h3 class="card-title mt-0 mb-3" :title="job.jobTitle">
              {{ job.jobTitle }}
            </h3>
            <p class="card-text">{{ job.jobDesc.slice(0, 80) + " ...." }}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="16"
                height="16"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.75 0A1.75 1.75 0 005 1.75V3H1.75A1.75 1.75 0 000 4.75v8.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3H11V1.75A1.75 1.75 0 009.25 0h-2.5zM9.5 3V1.75a.25.25 0 00-.25-.25h-2.5a.25.25 0 00-.25.25V3h3zM5 4.5H1.75a.25.25 0 00-.25.25V6a2 2 0 002 2h9a2 2 0 002-2V4.75a.25.25 0 00-.25-.25H5zm-1.5 5a3.484 3.484 0 01-2-.627v4.377c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V8.873a3.484 3.484 0 01-2 .627h-9z"
                ></path>
              </svg>
              {{ job.jobType }}
            </li>
            <li class="list-group-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="16"
                height="16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zm.5 4.75a.75.75 0 00-1.5 0v3.5a.75.75 0 00.471.696l2.5 1a.75.75 0 00.557-1.392L8.5 7.742V4.75z"
                ></path>
              </svg>
              {{ job.jobDate }}
            </li>
          </ul>
          <div class="card-body">
            <div class="d-grid gap-2">
              <router-link class="btn btn-primary" style="border: 0px;background: rgb(42,2,46);background: linear-gradient(90deg, rgba(42,2,46,1) 0%, rgba(130,0,136,1) 22%, rgba(13,110,253,1) 77%, rgba(1,18,43,1) 100%);" tag="a" target="_blank" :to="`/${job.jobId}`"
                >قدم الان</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "../firebase/firebaseInte";
export default {
  name: "HelloWorld",
  props: ["id"],
  data() {
    return {
      jobs: [],
    };
  },
  created() {
    db.collection("jobs")
      .orderBy("job_id")
      .limit(50)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
          let firstDate = parseInt(doc.data().date, 10);
          const secondDate = Date.now();
          const diffDays = Math.round(
            Math.abs((firstDate - secondDate) / oneDay)
          );
          let jobData = {
            jobTitle: doc.data().title,
            jobDesc: doc.data().desc,
            jobType: doc.data().type,
            jobId: doc.data().job_id,
            jobDate: diffDays <= 1 ? "قبل يوم واحد" : `قبل ${diffDays} أيام`,
          };
          this.jobs.unshift(jobData);
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
