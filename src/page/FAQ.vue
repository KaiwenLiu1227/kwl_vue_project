<template>
  <div class="center_col_container">
    <ServiceDialogBox width="600px" height="600px" :showClose="false"/>
  </div>
</template>

<script>
import ServiceDialogBox from "@/components/ServiceDialogBox";

export default {
  name: "FAQ",
  components: {ServiceDialogBox}
}
</script>

<style scoped>

</style>