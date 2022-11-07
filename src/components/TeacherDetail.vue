<template>
  <div class="page_basic_container center_col_container" style="width: 100%;">
    <div class="hover_shadow center_col_container" style="width: 85%;margin-top: 30px;border-radius: 20px">
      <div class="space_around_row_container" style="width: 100%">
        <div style="width: 25%">
          <el-link @click="goBack" :underline="false" type="info"
                   style="font-size: 20px;color: black;margin-top: 7px;margin-left: 10px;font-weight: 600"><i
              class="el-icon-back">返回</i>
          </el-link>
          <div class="basic_information">
            <img class="avatar_image" style="width: 120px;height: auto"
                 :src="teacher.detailed_avatar_url">
            <div style="font-size: 20px;font-weight: 600">{{ teacher.nickName }}</div>
            <div style="font-size: 18px;margin-bottom: 5px;margin-top: 5px">{{ teacher.edu_degree }}
              <el-tag style="margin-left: 5px;" v-if="idx%4===3" effect="dark" size="mini"
                      type="success">{{ tag }}
              </el-tag>
            </div>
            <div class="flex_start_col_container basic_description">
        <span style="font-size: 15px"><b>擅长科目：</b>{{ teacher.subject }}<template
            v-if="teacher.subject_supplement"> ({{ teacher.subject_supplement }})</template></span>
              <span class="price_container" style="font-size: 15px"><b>费用：</b>{{ teacher.min_price }}<template
                  v-if="teacher.max_price!==teacher.min_price">-{{ teacher.max_price }}</template>/小时</span>
              <span><b>个人标签：</b>
            <template v-for="(tag,idx) in teacher.personal_tag.split(',')">
              <el-tag style="margin-left: 5px;" v-if="idx%4===0" effect="dark" size="mini" type="danger">
                {{ tag }}
              </el-tag>
              <el-tag style="margin-left: 5px;" v-if="idx%4===1" effect="dark" size="mini"
                      type="light">
                {{ tag }}
              </el-tag>
              <el-tag style="margin-left: 5px;" v-if="idx%4===2" effect="dark" size="mini"
                      type="warning">
                {{ tag }}
              </el-tag>
              <el-tag style="margin-left: 5px;" v-if="idx%4===3" effect="dark" size="mini"
                      type="success">
                {{ tag }}
              </el-tag>
            </template>
            </span>
              <span v-if="teacher.authentication&&teacher.authentication!=='无'"><b>Ezp认证：</b>
                <el-tag style="margin-left: 5px;" effect="dark" size="mini" type="success">
               {{ teacher.authentication }}
              </el-tag></span>
              <span v-if="teacher.start_time"><b>加入时间：</b>
              {{ teacher.start_time }}
            </span>
              <span><b>学生评分：</b> <el-rate
                  v-model="teacher.rating_grade/20"
                  style="margin-top: 5px"
                  disabled
                  :max="5"
                  show-score
                  text-color="#ff9900"
                  score-template="{value}">
              </el-rate>
              </span>
              <span><el-tag v-if="teacher.is_discount" effect="dark" size="mini" type="danger">提供折扣</el-tag>
          <el-tag style="margin-left: 5px;" v-if="teacher.is_price_changable" effect="dark" size="mini"
                  type="light">可议价</el-tag>
          <el-tag style="margin-left: 5px;" v-if="teacher.is_free_try" effect="dark" size="mini"
                  type="warning">免费试听</el-tag>
          <el-tag style="margin-left: 5px;" v-if="teacher.lesson_video_url" effect="dark" size="mini"
                  type="success">有试讲视频</el-tag></span>
            </div>
          </div>
        </div>
        <div class="split_line"></div>
        <div class="flex_start_col_container description" style="width: 75%">
          <div class="description_block"><b style="font-size: 20px">试讲视频：</b>
            <br>
            <div>
              <iframe class="hover_shadow" style="height: 300px;width: 500px"
                      src="//player.bilibili.com/player.html?aid=842189320&bvid=BV1p54y1y78D&cid=236761745&page=1"
                      scrolling="yes" border="0" frameborder="no" framespacing="1" allowfullscreen="true"></iframe>
            </div>
            {{ teacher.lesson_video_url }}
          </div>
          <div class="description_block" v-if="teacher.characteristic_detail">
            <b style="font-size: 20px">风格简介：</b><br>
            <span v-html="teacher.characteristic_detail"></span></div>
          <div class="description_block" v-if="teacher.education_detail">
            <b style="font-size: 20px">教育经历：</b><br>
            <span v-html="teacher.education_detail"></span>
          </div>
          <div class="description_block" v-if="teacher.experience_detail">
            <b style="font-size: 20px">辅导经历：</b><br>
            <span v-html="teacher.experience_detail"></span>
          </div>
          <div class="description_block" v-if="teacher.ability_display">
            <b style="font-size: 20px">能力展示：</b><br>
            <span v-html="teacher.ability_display"></span>
          </div>
          <div class="description_block" v-if="teacher.past_grade_detail">
            <b style="font-size: 20px">成就成果：</b><br>
            <span v-html="teacher.past_grade_detail"></span>
          </div>
          <div class="description_block" v-if="teacher.reward_display">
            <b style="font-size: 20px">证书展示：</b><br>
            <span v-html="teacher.reward_display"></span>
          </div>
          <div class="description_block" v-if="teacher.price_detail">
            <b style="font-size: 20px">收费定价：</b><br>
            <span v-html="teacher.price_detail"></span>
          </div>
          <div class="center_col_container">
            <el-button @click="contact" v-if="teacher.is_free_try" type="primary" round>立即咨询预约试听</el-button>
            <el-button @click="contact" v-if="!teacher.is_free_try" type="primary" round>立即咨询小助手</el-button>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import {get_teacher_detail} from "@/utils/LSP_utils";
import ServiceDialogBox from "@/components/ServiceDialogBox";

export default {
  name: "TeacherDetail",
  components: {ServiceDialogBox},
  props: ["id"],
  data() {
    return {
      teacher: {}
    }
  },
  mounted() {
    get_teacher_detail(this.id, this)
  },
  methods: {
    goBack() {
      this.$emit("goBack")
    },
    contact(){
      this.$emit("contact")
    }
  }
}
</script>

<style scoped>
.description {
  padding: 20px;
  padding-left: 60px;
}

.description .description_block {
  margin-bottom: 20px;
}

.basic_description span {
  margin-bottom: 6px;
}

.basic_information {
  padding: 20px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.split_line {
  background-color: gray;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 1px;
  height: auto;
}
</style>