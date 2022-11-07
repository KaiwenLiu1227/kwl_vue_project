<template>
  <div class="page_basic_container space_between_row_container">
    <!--    <div style="width: 450px">-->
    <!--      <el-menu-->
    <!--          default-active="2"-->
    <!--          class="el-menu-vertical-demo"-->
    <!--      >-->
    <!--        <el-submenu index="1">-->
    <!--          <template slot="title">-->
    <!--            <i class="el-icon-location"></i>-->
    <!--            <span>筛选器</span>-->
    <!--          </template>-->
    <!--          <el-menu-item-group>-->
    <!--            <div class="flex_start_col_container filter_container " style="padding: 30px;width: 450px">-->
    <!--              <p>老师选项：</p>-->
    <!--              <el-checkbox-group class="filter_item" v-model="filterList" @change="onSortFilterChange">-->
    <!--                <el-checkbox label="price_changable">可议价</el-checkbox>-->
    <!--                <el-checkbox label="free_try">免费试听</el-checkbox>-->
    <!--                <el-checkbox label="video">试讲视频</el-checkbox>-->
    <!--                <el-checkbox label="discount">提供折扣</el-checkbox>-->
    <!--                <el-checkbox label="gold">提供折扣</el-checkbox>-->
    <!--                <el-checkbox label="no_limit" :disabled="false">无限制</el-checkbox>-->
    <!--              </el-checkbox-group>-->
    <!--              <p>排序方式:</p>-->
    <!--              &lt;!&ndash;              <el-radio-group class="filter_item">&ndash;&gt;-->
    <!--              <el-radio v-model="sortOption" label="price_rising">按价格升序排序</el-radio>-->
    <!--              <el-radio v-model="sortOption" label="price_falling">按价格升序降序</el-radio>-->
    <!--              <el-radio v-model="sortOption" label="rating">按评分排序</el-radio>-->
    <!--              &lt;!&ndash;              </el-radio-group>&ndash;&gt;-->
    <!--              <p>学科分类:</p>-->
    <!--              <el-checkbox-group class="filter_item" v-model="cataFilters" @change="onCataFilterChange">-->
    <!--                <template v-for="item in Object.keys(subject_cata_dict)">-->
    <!--                  <el-checkbox :label="item">{{ subject_cata_dict[item] }}</el-checkbox>-->
    <!--                </template>-->
    <!--              </el-checkbox-group>-->
    <!--              <div class="flex_start_row_container">-->
    <!--                <el-button @click="cataFilterSelectAll">全选</el-button>-->
    <!--                <el-button style="margin-left: 10px" @click="clearCataFilter">全不选</el-button>-->
    <!--              </div>-->
    <!--              <p>考试:</p>-->
    <!--              <el-checkbox-group class="filter_item" v-model="examFilters" @change="onExamFilterChange">-->
    <!--                <template v-for="item in exam.obj">-->
    <!--                  <el-checkbox :label="item.id">{{ item.name }}</el-checkbox>-->
    <!--                </template>-->
    <!--              </el-checkbox-group>-->
    <!--              <div class="flex_start_row_container">-->
    <!--                <el-button @click="examFilterSelectAll">全选</el-button>-->
    <!--                <el-button style="margin-left: 10px" @click="clearExamFilter">全不选</el-button>-->
    <!--              </div>-->
    <!--              <p>年级/阶段：</p>-->
    <!--              <el-checkbox-group class="filter_item" v-model="stageFilters" @change="onStageFilterChange">-->
    <!--                <template v-for="item in stage.obj">-->
    <!--                  <el-checkbox :label="item.id">{{ item.name }}</el-checkbox>-->
    <!--                </template>-->
    <!--              </el-checkbox-group>-->
    <!--              <div class="flex_start_row_container">-->
    <!--                <el-button @click="stageFilterSelectAll">全选</el-button>-->
    <!--                <el-button style="margin-left: 10px" @click="clearStageFilter">全不选</el-button>-->
    <!--              </div>-->
    <!--              <p>具体学科：</p>-->
    <!--              <el-checkbox-group class="filter_item" v-model="subjectFilters" @change="onSubjctFilterChange">-->
    <!--                <template v-for="subject in subjects">-->
    <!--                  <el-checkbox :label="subject.id" v-if="isDisplaySubject(subject)">-->
    <!--                    {{ showSubjectName(subject) }}<br>-->
    <!--                  </el-checkbox>-->
    <!--                </template>-->
    <!--              </el-checkbox-group>-->
    <!--              <div class="flex_start_row_container">-->
    <!--                <el-button @click="subjectFilterSelectAll">全选</el-button>-->
    <!--                <el-button style="margin-left: 10px" @click="clearSubjectFilter">全不选</el-button>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </el-menu-item-group>-->
    <!--        </el-submenu>-->
    <!--        <el-submenu index="2">-->
    <!--          <template slot="title">-->
    <!--            <i class="el-icon-location"></i>-->
    <!--            <span>筛选器</span>-->
    <!--          </template>-->
    <!--          <el-menu-item-group>-->
    <!--            <div class="flex_start_col_container filter_container " style="padding: 30px;width: 450px">-->
    <!--              <p>排序方式:</p>-->
    <!--              &lt;!&ndash;              <el-radio-group class="filter_item">&ndash;&gt;-->
    <!--              <el-radio v-model="sortOption" label="price_rising">按价格升序排序</el-radio>-->
    <!--              <el-radio v-model="sortOption" label="price_falling">按价格升序降序</el-radio>-->
    <!--              <el-radio v-model="sortOption" label="rating">按评分排序</el-radio>-->
    <!--              &lt;!&ndash;              </el-radio-group>&ndash;&gt;-->

    <!--            </div>-->
    <!--          </el-menu-item-group>-->
    <!--        </el-submenu>-->
    <!--      </el-menu>-->
    <!--    </div>-->
    <div class="flex_start_col_container" style="width: 100%">
      <div class="flex_start_col_container">
      </div>
      <div class="center_col_container">
        <template v-if="!show_teacher_detail">
          <div style="width: 75%;" class="hidden-md-and-down">
            <div style="padding: 10px;margin-top: 20px;margin-bottom: 10px" class="hover_shadow">
              <div class="flex_start_row_container" style="margin-bottom:4px">
                <p class="filter_title"> 考试:</p>
                <el-checkbox-group style="margin-top: auto;margin-bottom: auto" class="filter_item"
                                   v-model="examFilters"
                                   @change="onExamFilterChange" size="mini">
                  <template v-for="item in exam.obj">
                    <el-checkbox-button :label="item.id">{{ item.name }}</el-checkbox-button>
                  </template>
                </el-checkbox-group>
                <div class="flex_start_center_row_container" style="margin-top: auto;margin-bottom: auto">
                  <el-button style="margin-left: 10px" @click="examFilterSelectAll" size="mini">全选</el-button>
                  <el-button style="margin-left: 10px" @click="clearExamFilter" size="mini">全不选</el-button>
                </div>
              </div>
              <div class="flex_start_row_container" style="margin-bottom: 4px">
                <p class="filter_title">年级/阶段：</p>
                <el-checkbox-group class="filter_item" v-model="stageFilters" @change="onStageFilterChange" size="small"
                                   style="margin-top: auto;margin-bottom: auto">
                  <template v-for="item in stage.obj">
                    <el-checkbox-button :label="item.id">{{ item.name }}</el-checkbox-button>
                  </template>
                </el-checkbox-group>
                <div class="flex_start_row_container" style="margin-top: auto;margin-bottom: auto">
                  <el-button style="margin-left: 10px" @click="stageFilterSelectAll" size="mini">全选</el-button>
                  <el-button style="margin-left: 10px" @click="clearStageFilter" size="mini">全不选</el-button>
                </div>
              </div>
              <div class="flex_start_row_container" style="margin-bottom: 4px">
                <p class="filter_title">学科分类:</p>
                <el-checkbox-group style="margin-top: auto;margin-bottom: auto" class="filter_item"
                                   v-model="cataFilters"
                                   @change="onCataFilterChange" size="small">
                  <template v-for="item in Object.keys(subject_cata_dict)">
                    <el-checkbox-button :label="item">{{ subject_cata_dict[item] }}</el-checkbox-button>
                  </template>
                </el-checkbox-group>
                <div class="flex_start_row_container" style="margin-top: auto;margin-bottom: auto">
                  <el-button style="margin-left: 10px" @click="cataFilterSelectAll" size="mini">全选</el-button>
                  <el-button style="margin-left: 10px" @click="clearCataFilter" size="mini">全不选</el-button>
                </div>
              </div>
              <el-collapse>
                <el-collapse-item>
                  <template slot="title">
                    <p class="filter_title" style="font-size: medium">具体学科：</p>
                  </template>
                  <div class="flex_start_row_container" style="margin-bottom: 4px">
                    <template v-if="displaySubjects.length===0">
                      <p class="filter_title">暂无学科</p>
                    </template>
                    <el-checkbox-group v-model="subjectFilters" @change="onSubjctFilterChange" size="small"
                                       style="margin-top: auto;margin-bottom: auto">
                      <template v-for="subject in subjects">
                        <el-checkbox :label="subject.id" v-if="isDisplaySubject(subject)">
                          {{ showSubjectName(subject) }}<br>
                        </el-checkbox>
                      </template>
                    </el-checkbox-group>
                    <div class="flex_start_row_container" style="margin-top: auto;margin-bottom: auto">
                      <el-button v-if="displaySubjects.length!==0" style="margin-left: 10px" @click="subjectFilterSelectAll" size="mini">全选</el-button>
                      <el-button v-if="displaySubjects.length!==0" style="margin-left: 10px" @click="clearSubjectFilter" size="mini">全不选</el-button>
                      <el-button style="margin-left: 10px" @click="subjectSelectTotal" size="mini">所有学科</el-button>
                    </div>
                    </div>

                </el-collapse-item>
              </el-collapse>
            </div>
            <div class="flex_start_row_container hover_shadow" style="padding: 10px">
              <el-radio-group v-model="sortOption" style="margin: 3px">
                <el-radio-button label="rating">评分排序</el-radio-button>
                <el-radio-button label="price_rising">价格升序</el-radio-button>
                <el-radio-button label="price_falling">价格降序</el-radio-button>
              </el-radio-group>
              <el-checkbox-group class="filter_item" style="margin-top: 14px; margin-left: 50px" v-model="filterList" @change="onSortFilterChange">
                <el-checkbox label="price_changable">可议价</el-checkbox>
                <el-checkbox label="free_try">免费试听</el-checkbox>
                <el-checkbox label="video">有试讲视频</el-checkbox>
                <el-checkbox label="discount">提供折扣</el-checkbox>
                <el-checkbox label="no_limit" :disabled="false">无限制</el-checkbox>
              </el-checkbox-group>
            </div>
            <!--            <template v-for="(teacher,idx) in teachers">-->
            <!--              <div class="space_between_row_container">-->
            <!--                <template v-if="idx%2===0">-->
            <!--                  <TeacherPreview v-if="displayTeacherList.indexOf(teacher.id) !== -1" :teacher="teachers[idx]"-->
            <!--                                  @goToDetail="goToDetail"/>-->
            <!--                  <template v-if="idx+1<=teachers.length-1">-->
            <!--                    <TeacherPreview v-if="displayTeacherList.indexOf(teachers[idx+1].id) !== -1"-->
            <!--                                    :teacher="teachers[idx+1]"-->
            <!--                                    @goToDetail="goToDetail"/>-->
            <!--                  </template>-->
            <!--                </template>-->
            <!--              </div>-->
            <!--            </template>-->
            <div class="space_between_row_container" style=" flex-wrap:wrap">
              <template v-for="(teacher,idx) in realDisplayTeachers">
                <div style="width: 500px">
                  <TeacherPreview :teacher="teacher"
                                  @goToDetail="goToDetail"/>
                </div>
              </template>
            </div>
            <template v-if="displayTeacherList.length===0">
              <!--            <el-empty description="暂无符合条件的老师哦"></el-empty>-->
            </template>
          </div>
          <div style="width: 100%" class="hidden-lg-and-up">
            <template v-for="(teacher,idx) in realDisplayTeachers">
              <TeacherPreview :teacher="teacher" @goToDetail="goToDetail"/>
            </template>
            <template v-if="teachers.length===0">
              <!--            <el-empty description="暂无符合条件的老师哦"></el-empty>-->
            </template>
          </div>
        </template>
        <template v-else>
          <TeacherDetail :id="teacher_id" @goBack="goBack" @contact="openDialog"/>
        </template>
      </div>
    </div>
    <transition name="van-slide-up">
      <div v-show="showDialog" style="position: fixed;right: 30px;bottom: 50px;z-index: 1000">
        <ServiceDialogBox v-if="" ref="dialogbox" @close="closeDialog" width="400px" height="500px"/>
      </div>
    </transition>
  </div>
</template>

<script>
import TeacherPreview from "@/components/TeacherPreview";
import {get_subjects, get_teachers} from "@/utils/LSP_utils";
import TeacherDetail from "@/components/TeacherDetail";
import ServiceDialogBox from "@/components/ServiceDialogBox";
import Vue from "vue";

export default {
  name: "LectuerSelectPage",
  components: {ServiceDialogBox, TeacherDetail, TeacherPreview},
  data() {
    return {
      realDisplayTeachers: [],
      teachers: [],
      examFilters: [],
      stageFilters: [],
      subjectFilters: [],
      cataFilters: Object.keys(Vue.prototype.subject_cata_dict),
      show_teacher_detail: false,
      showDialog: false,
      teacher_id: 0,
      filterList: ["no_limit"],
      sortOption: "rating",
      stage: [],
      exam: [],
      subjects: [],
      displaySubjects: [],
      displayTeacherList: [],
      teacher_subject: [],
      subject_cata_dict: Vue.prototype.subject_cata_dict
    }
  },
  mounted() {
    let that = this
    get_subjects(that)
  },
  watch: {
    subjectFilters() {

    },
    sortOption(sortOption) {
      get_teachers(this, {"sort": sortOption, "filter": this.filterList})
    },
    teachers(teachers) {
      var displayList = []
      for (var i = 0; i < teachers.length; i++) {
        var teacher = teachers[i]
        if (this.displayTeacherList.indexOf(teacher.id) !== -1) {
          displayList.push(teacher)
        }
      }
      this.realDisplayTeachers = displayList
    }
  },
  methods: {
    updateDisplaySubjects(){
      var displaySubjects=[]
      for (var i = 0; i < this.subjects.length; i++) {
        if (this.isDisplaySubject(this.subjects[i])) {
          displaySubjects.push(this.subjects[i].id)
        }
      }
      this.displaySubjects=displaySubjects
    },
    updateRealDisplayTeachers() {
      var displayList = []
      for (var i = 0; i < this.teachers.length; i++) {
        var teacher = this.teachers[i]
        if (this.displayTeacherList.indexOf(teacher.id) !== -1) {
          displayList.push(teacher)
        }
      }
      this.realDisplayTeachers = displayList
    },
    showSubjectName(subject) {
      if (!subject.stage_id) {
        return this.exam.idToName[subject.exam_id] + " " + subject.name
      }
      return this.exam.idToName[subject.exam_id] + " " + this.stage.idToName[subject.stage_id] + " " + subject.name
    },
    isDisplaySubject(subject) {
      if (!subject.stage_id) {
        return this.examFilters.indexOf(subject.exam_id) !== -1 && this.cataFilters.indexOf(subject.subject_cata) !== -1
      }
      return this.examFilters.indexOf(subject.exam_id) !== -1
          && this.stageFilters.indexOf(subject.stage_id) !== -1
          && this.cataFilters.indexOf(subject.subject_cata) !== -1
    },
    onSubjctFilterChange() {
      var teacher_list = []
      for (var i = 0; i < this.subjectFilters.length; i++) {
        var id = this.subjectFilters[i]
        try {
          for (var j = 0; j < this.teacher_subject[id].length; j++) {
            if (teacher_list.indexOf(this.teacher_subject[id][j]) === -1) {
              teacher_list.push(this.teacher_subject[id][j])
            }
          }
        } catch (e) {

        }
      }
      this.displayTeacherList = teacher_list
      this.updateDisplaySubjects()
      this.updateRealDisplayTeachers()
    },
    clearExtraSubjectOptions() {
      var subjectFilters = []
      var subjectDisplayFilters = []
      var oldSubjectFilters = this.subjectFilters
      var subjectDict = {}

      // new coming
      for (var i = 0; i < this.subjects.length; i++) {
        if (this.isDisplaySubject(this.subjects[i]) && this.subjectDisplayFilters.indexOf(this.subjects[i].id) === -1) {
          subjectFilters.push(this.subjects[i].id)
        }
        subjectDict[this.subjects[i].id] = this.subjects[i]
      }
      // original
      for (var i = 0; i < oldSubjectFilters.length; i++) {
        if (this.isDisplaySubject(subjectDict[oldSubjectFilters[i]])) {
          subjectFilters.push(oldSubjectFilters[i])
        }
      }
      for (var i = 0; i < this.subjects.length; i++) {
        if (this.isDisplaySubject(this.subjects[i])) {
          subjectDisplayFilters.push(this.subjects[i].id)
        }
      }
      this.subjectDisplayFilters = subjectDisplayFilters
      this.subjectFilters = subjectFilters
      this.onSubjctFilterChange()
    },
    clearCataFilter() {
      this.cataFilters = []
      this.clearExtraSubjectOptions()
    },
    clearStageFilter() {
      this.stageFilters = []
      this.clearExtraSubjectOptions()
    },
    clearExamFilter() {
      this.examFilters = []
      this.clearExtraSubjectOptions()
    },
    clearSubjectFilter() {
      this.subjectFilters = []
      this.onSubjctFilterChange()
    },
    onCataFilterChange() {
      this.clearExtraSubjectOptions()
    },
    onStageFilterChange() {
      this.clearExtraSubjectOptions()
    },
    onExamFilterChange() {
      this.clearExtraSubjectOptions()
    },
    cataFilterSelectAll() {
      this.cataFilters = Object.keys(Vue.prototype.subject_cata_dict)
      this.clearExtraSubjectOptions()
    },
    examFilterSelectAll() {
      for (var i = 0; i < this.exam.obj.length; i++) {
        this.examFilters.push(this.exam.obj[i].id)
      }
      this.clearExtraSubjectOptions()
    },
    stageFilterSelectAll() {
      for (var i = 0; i < this.stage.obj.length; i++) {
        this.stageFilters.push(this.stage.obj[i].id)
      }
      this.clearExtraSubjectOptions()
    },
    subjectSelectTotal() {
      this.stageFilterSelectAll()
      this.examFilterSelectAll()
      this.cataFilterSelectAll()
      this.subjectFilterSelectAll()
    },
    subjectFilterSelectAll() {
      for (var i = 0; i < this.subjects.length; i++) {
        this.subjectFilters.push(this.subjects[i].id)
      }
      var displayTeacherList = []
      for (var i = 0; i < this.teachers.length; i++) {
        displayTeacherList.push(this.teachers[i].id)
      }
      this.displayTeacherList = displayTeacherList
      this.subjectDisplayFilters = this.subjectFilters
      this.onSubjctFilterChange()
    },
    onSortFilterChange() {
      var filterList = this.filterList
      if (filterList.length === 0) {
        filterList = ["no_limit"]
      } else if (filterList[filterList.length - 1] === "no_limit") {
        filterList = ["no_limit"]
      } else if (filterList !== ["no_limit"]) {
        delete filterList[filterList.indexOf("no_limit")]
      }
      filterList = filterList.filter(String)
      this.filterList = filterList
      get_teachers(this,
          {
            "sort":
            this.sortOption, "filter":
            this.filterList
          }
      )
    },
    closeDialog() {
      this.showDialog = false
    }
    ,
    openDialog() {
      this.showDialog = true
      let that = this
      this.$nextTick(function () {
        that.$refs.dialogbox.addResponse(that.contact_const.book_try, 1, 800)
        that.$refs.dialogbox.addResponse(that.contact_const.contact_qrcode, 2, 1200)
      })
    }
    ,
    goToDetail(id) {
      this.teacher_id = id
      this.show_teacher_detail = true
    }
    ,
    goBack() {
      this.show_teacher_detail = false
    }
  }
}
</script>

<style scoped>
.filter_container {
  width: 500px;
}

.filter_container .filter_item {
  margin-bottom: 10px;
}

.filter_title {
  margin-right: 5px;
  margin-left: 6px;
  width: 100px;
  color: grey;
}
</style>