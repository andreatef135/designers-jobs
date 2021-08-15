<template>
  <div>

    <div class="alert alert-success text-center my-5" role="alert">
      <h4 class="alert-heading">اضافة طلب مصمم جرافيك مجانا</h4>
      <p>ملحوظه: سيتم مراجعه طلبك ونشره على الموقع خلال 24 ساعة.</p>
      <hr>
      <div class="d-grid gap-2">
      <a class="btn btn-primary"
        href="javascript:void(
          window.open(
            'https://form.jotform.com/212243031337543',
            'blank',
            'scrollbars=yes,
            toolbar=no,
            width=700,
            height=500'
          )
        )
      ">
        اضافة طلب
      </a>
      </div>
    </div>


  </div>
</template>


<script>

export default {
  name: "AddJob",
  components: {
  },
  props: ["id"],
}
</script>
