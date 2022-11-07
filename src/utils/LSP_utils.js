import axios from "axios";
import crypto_utils from "@/utils/crypto_utils";
import utils from "@/utils/utils"
import Vue from "vue";
import {generateGetUrl} from "@/utils/utils";
import th from "element-ui/src/locale/lang/th";

export function get_teachers(that, params = {}, init = false) {
    var url = that.api.get_teachers_url
    url = generateGetUrl(url, params)
    axios
        .get(url)
        .then(function (res) {
                that.teachers = res.data
                if (init) {
                    that.subjectSelectTotal()
                }
                that.updateRealDisplayTeachers()
            }
        )
        .catch(function (error) { // 请求失败处理
            console.log(error)
        });
}

export function get_teacher_detail(id, that) {
    const url = generateGetUrl(that.api.get_teacher_detail, {"id": id})
    axios
        .get(url)
        .then(function (res) {
                that.teacher = res.data
            }
        )
        .catch(function (error) { // 请求失败处理
            console.log(error)
        });
}

export function get_subjects(that, params = {}) {
    var url = that.api.get_subjects
    url = generateGetUrl(url, params)
    axios
        .get(url)
        .then(function (res) {
                that.subjects = res.data.subjects
                var exam_dict = {}
                var stage_dict = {}
                var exam_dict_re = {}
                var stage_dict_re = {}
                var subject_teacher_dict = {}
                for (var i = 0; i < res.data.stage.length; i++) {
                    stage_dict[res.data.stage[i].id] = res.data.stage[i].name
                    stage_dict_re[res.data.stage[i].name] = res.data.stage[i].id
                }
                for (var i = 0; i < res.data.exam.length; i++) {
                    exam_dict[res.data.exam[i].id] = res.data.exam[i].name
                    exam_dict_re[res.data.exam[i].name] = res.data.exam[i].id
                }
                for (var i = 0; i < res.data.teacher_subject.length; i++) {
                    subject_teacher_dict[res.data.teacher_subject[i].subject_id] = []
                }
                for (var i = 0; i < res.data.teacher_subject.length; i++) {
                    subject_teacher_dict[res.data.teacher_subject[i].subject_id].push(res.data.teacher_subject[i].onetooneteacher_id)
                }
                that.teacher_subject = subject_teacher_dict
                that.exam = {idToName: exam_dict, nameToId: exam_dict_re, "obj": res.data.exam}
                that.stage = {idToName: stage_dict, nameToId: stage_dict_re, "obj": res.data.stage}
                get_teachers(that, {"sort": that.sortOption, "filter": that.filterList},true)

            }
        )
        .catch(function (error) { // 请求失败处理
            console.log(error)
        });
}
