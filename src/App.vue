<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link tag="a" class="navbar-brand" to="/"
          >شغل مصممين</router-link
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link tag="a" class="nav-link active" to="/"
                >الصفحة الرئيسية</router-link
              >
            </li>
            <li class="nav-item">
              <router-link tag="a" class="nav-link active" to="/new"
                >احدث الوظائف</router-link
              >
            </li>
          </ul>
          <span class="navbar-text">
            <a class="btn btn-success text-white mx-1" style="background-color: rgb(0, 136, 204);border-radius: 23px;"  href="https://t.me/Designers_Jobs" >تابعنا على تلجرام</a>
            <router-link class="btn btn-success text-white mx-2" style="border-radius: 23px;" to="/add"
              >اضف اعلان
            </router-link>
          </span>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="بحث"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">بحث</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
  <router-view class="container" />
</template>



<style>
</style>
