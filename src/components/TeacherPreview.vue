<template>
  <div class="flex_start_col_container hover_shadow"
       style="  padding: 20px;border-radius: 30px;width: 450px;margin-top: 20px">
    <div class="space_between_row_container">
      <div class="name_container">
        <div class="color_bar" style="width: auto;margin-bottom: 20px"></div>
        <i style="font-size: 25px;text-align: start;flex-direction: row"
           class="el-icon-user"><span style="margin-left: 5px;margin-right: 10px;">{{
            teacher.nickName
          }}&emsp;&emsp;</span></i>
        <span style="margin-top: 20px">{{ teacher.edu_degree }}</span>
      </div>
      <!--      <el-image fit="cover"  style="width: 80px;height: 80px;border-radius: 20px"-->
      <!--                src="https://himg.bdimg.com/sys/portrait/item/public.1.9a75818a.ME78sDmgTG7AwCgFLXRLxw.jpg">-->
      <!--        <div slot="error" class="image-slot">-->
      <!--          <i class="el-icon-picture-outline"></i>-->
      <!--        </div>-->
      <!--      </el-image>-->
      <img class="avatar_image" style="width: 120px;height: 120px;border-radius: 80px;"
           :src="teacher.avatar_url">
    </div>


    <div class="content_container">
      <span style="font-size: 12px"><b>擅长科目：</b>{{ teacher.subject }}<template
          v-if="teacher.subject_supplement"> ({{ teacher.subject_supplement }})</template></span>
      <span class="price_container" style="font-size: 12px"><b>费用：</b>{{ teacher.min_price }}<template
          v-if="teacher.max_price!==teacher.min_price">-{{ teacher.max_price }}</template>/小时
      <el-tag v-if="teacher.is_discount" effect="dark" size="mini" type="danger">提供折扣</el-tag>
      <el-tag style="margin-left: 5px;" v-if="teacher.is_price_changable" effect="dark" size="mini"
              type="light">可议价</el-tag>
       <el-tag style="margin-left: 5px;" v-if="teacher.is_free_try" effect="dark" size="mini"
               type="warning">免费试听</el-tag>
      <el-tag style="margin-left: 5px;" v-if="teacher.lesson_video_url" effect="dark" size="mini"
              type="success">有试讲视频</el-tag></span>
      <span><b>学生评分：</b> <el-rate
          v-model="teacher.rating_grade/20"
          style="margin-top: 5px"
          disabled
          :max="5"
          show-score
          text-color="#ff9900"
          score-template="{value}">
    </el-rate></span>
      <div style="font-size: 12px;height: 82px;" class="description"><b>简介：</b>
        <span v-html="teacher.characteristic_detail"></span>
        <!--        {{ teacher.characteristic_detail }}-->
      </div>
    </div>
    <i class="el-icon-view" style="font-size: 13px;color: dimgray;left: 5px;padding-left: 5px">阅读{{teacher.view_counts}}</i>
    <el-link @click="goToDetail" :underline="false" style="font-size: 16px" type="primary">查看详情</el-link>

  </div>
</template>

<script>
export default {
  name: "TeacherPreview",
  props: ["teacher"],
  data() {
    return {
      value: 10
    }
  },
  methods: {
    goToDetail() {
      this.$emit("goToDetail", this.teacher.id)
    }
  }
}
</script>

<style scoped>

.description {
  display: -webkit-box; /*作为弹性伸缩盒子模型显示*/
  -webkit-line-clamp: 5; /*显示的行数；如果要设置2行加...则设置为2*/
  overflow: hidden; /*超出的文本隐藏*/
  text-overflow: ellipsis; /* 溢出用省略号*/
  -webkit-box-orient: vertical; /*伸缩盒子的子元素排列：从上到下*/
}

.avatar_image:after {
  position: absolute;
  width: 80px;
  height: 80px;
  content: "";
  display: block;
  top: 0;
  left: 0;
  background: url('../assets/Easypaper.png');
  background-size: 100%;
}

.content_container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  margin-bottom: 10px;
  margin-top: 10px;
}

.price_container el-tag {
  margin-left: 5px;
}

.content_container span {
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 12px;
}


.flex_start_col_container .name_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: flex-start;
}


</style>