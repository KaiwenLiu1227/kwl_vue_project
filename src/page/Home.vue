<template>
<div>
<ServiceDialogBox width="800px" height="1000px"/>
</div>
</template>

<script>
import TeacherPreview from "@/components/TeacherPreview";
import TeacherDetail from "@/components/TeacherDetail";
import ServiceDialogBox from "@/components/ServiceDialogBox";
export default {
  name: "Home",
  components: {ServiceDialogBox, TeacherDetail, TeacherPreview}
}
</script>

<style scoped>

</style>