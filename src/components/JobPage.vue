<template>
    <div class="hello">
<div class="bd-example">
  <div class="row" v-for="(job ,index) in jobs" :key="index">
    <div class="col-4">
      <div id="list-example" class="list-group">
        <a class="list-group-item list-group-item-action active" style=" background: rgb(130,0,136); background: linear-gradient(90deg, rgba(130,0,136,1) 22%, rgba(13,110,253,1) 77%); border: #000; " href="#list-item-1">تفاصيل الوظيفة</a>
        <a class="list-group-item list-group-item-action" href="#list-item-2">الراتب ونوع العمل</a>
        <a class="list-group-item list-group-item-action" href="#list-item-3">متطلبات الوظيفة</a>
      </div>
    </div>
    <div class="col-8">
      <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scrollspy-example" tabindex="0">
        <div>
            <h1>{{job.jobTitle}}</h1>
            <h4 id="list-item-1">تفاصيل الوظيفة:</h4>
            <p>{{job.jobDesc}}</p>
            <h4 id="list-item-1">الراتب ونوع العمل:</h4>
            <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M10.75 9a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5z"></path><path fill-rule="evenodd" d="M0 3.75C0 2.784.784 2 1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0114.25 14H1.75A1.75 1.75 0 010 12.25v-8.5zm14.5 0V5h-13V3.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25zm0 2.75h-13v5.75c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V6.5z"></path></svg> الراتب: {{job.jobSalary}} </p>
            <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M6.75 0A1.75 1.75 0 005 1.75V3H1.75A1.75 1.75 0 000 4.75v8.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3H11V1.75A1.75 1.75 0 009.25 0h-2.5zM9.5 3V1.75a.25.25 0 00-.25-.25h-2.5a.25.25 0 00-.25.25V3h3zM5 4.5H1.75a.25.25 0 00-.25.25V6a2 2 0 002 2h9a2 2 0 002-2V4.75a.25.25 0 00-.25-.25H5zm-1.5 5a3.484 3.484 0 01-2-.627v4.377c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V8.873a3.484 3.484 0 01-2 .627h-9z"></path></svg> نوع العمل: {{job.jobType}} </p>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              اظهار رقم الشركة
            </button>

            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">رقم الهاتف</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    رقم الشركه:  {{job.jobNum}}
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">اغلاق</button>
                    <a class="btn btn-secondary" :href="`tel:${job.jobNum}`">اتصل</a>
                  </div>
                </div>
              </div>
            </div>


        </div>
      </div>
    </div>
    <div class="alert alert-warning d-flex align-items-center" role="alert">
      <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>
      <div>
       شغل مصممين ليست شركة توظيف وانما موقع للاعلان عن الوظائف الخالية المتاحة يوميا فى الاف الشركات بالشرق الاوسط ,ونرجو عند طلب اي مبالغ مالية من قبل المعلنين مراسلتنا فورا و عدم التعامل مع مثل هذه الشركات الوهمية .
      </div>
    </div>
        <hr class="my-3">

  </div>
</div>
    </div>
</template>

<script>
import db from "../firebase/firebaseInte"
export default {
  name: "JobPage",
  props: ["id"],
  data (){
    return {
      jobs: [],
    }
  },
  created(){
    let that = this 
    var PageError;
    function hh (){
      db.collection("jobs").where("job_id", "==", that.id).get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
              let firstDate = parseInt(doc.data().date, 10)
              const secondDate = Date.now()
              const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
              let jobData ={
                jobTitle: doc.data().title,
                jobDesc: doc.data().desc,
                jobType: doc.data().type,
                jobNum: doc.data().phone_num,
                jobSalary: doc.data().salary,
                jobDate: diffDays <= 1 ? "قبل يوم واحد" : diffDays ,
              }
              that.jobs.push(jobData)
              return PageError = 1
          });
      })
    }
      hh()
      console.log(PageError)

    // if (hh() == 1){
    //   console.log("done")
    // }else {
    //   console.log("not")
    // }


  },
  // methods:{
  //   r404(){
  //     // this.$router.push("/404")
  //     return "dd"
  //   }
  // }
};
</script>

<style scoped>
</style>
