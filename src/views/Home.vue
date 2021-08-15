<template>
  <div class="home">
    <div style="position: relative">
      <h1 class="myhead">
        شغل مصممين
        <p class="desc">فرص عمل لمصممي الجرافيك فى كل المجالات</p>
        <div class="d-grid gap-2 col-6 mx-auto">
          <router-link style=" border: 0; background: rgb(21,0,23); background: linear-gradient(90deg, rgba(21,0,23,1) 0%, rgba(130,0,136,1) 29%, rgba(0,212,255,1) 67%, rgba(0,35,42,1) 100%); " class="btn btn-primary" to="/new"
            >احدث الوظائف</router-link
          >
        </div>
      </h1>
      <img src="../assets/head.png" class="img-fluid" alt="..." />
    </div>
    <h3 class="mt-4">احدث (50) فرصه عمل متاحة:</h3>
    <HelloWorld />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>

<style scoped>
.myhead {
  position: absolute;
  color: rgb(255, 255, 255);
  width: 100%;
  text-align: center;
  margin-top: 70px;
}
.desc {
  font-size: 20px;
  margin-top: 18px;
  font-weight: 200;
}

@media (max-width: 575.98px) {
  .myhead {
    margin-top: 20px;
    font-size: 15px;
  }
  .desc {
    font-size: 10px;
    margin-top: 4px;
  }
  .btn {
    font-size: 10px;
    padding: 1px;
  }
}

@media (max-width: 767.98px) {
  .myhead {
    margin-top: 20px;
  }
  .desc {
    font-size: 15px;
    margin-top: 18px;
  }
}
</style>
