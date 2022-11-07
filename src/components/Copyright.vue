<template>
  <div class="center_col_container">
    <el-divider></el-divider>
    <div class="col-3 m-auto">
      <img src="../assets/Easypaper.png" alt="easypaper logo" class="rounded-circle img-fluid" style="width:40px">
    </div>
    <p>Copyright @EasyPaper ©2020-2021 All rights reserved.</p>
<!--    <router-link to='/terms'><p>{{ $t('copyright.terms') }}</p></router-link>-->
    <p>沪 ICP备20006912号</p>
  </div>
</template>

<script>
export default {
  name: "Copyright"
}
</script>

<style scoped>
p {
  font-size: 10px;
  color: #99a9bf;
}
</style>