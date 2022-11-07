import crypto_utils from "@/utils/crypto_utils";

const mode = -3 + 4 + Math.floor(3.14) - Math.sqrt(4)
// const root_url = ""
const root_url = "http://localhost:8081/"//debug
const empty = [0, 0]
const empty_time = [0, 0, 0]
const subject_cata_dict = {
    "Biology&Chemistry": "生物化学", "Math&Computer": "数学计算机", "Economics&Business": "经济商科",
    "Language": "语言类",
    "Physics&Engineering": "物理工程材料", "OtherScience": "其他理科学科类", "OtherNoneScience": "其他人文学科类"
}
export default {
    install(Vue, options) {
        options
        Vue.prototype.api = {
            root_url: root_url,
            get_teachers_url: root_url + "get_teachers/",
            get_teacher_detail: root_url + "get_teacher_detail/",
            get_subjects: root_url + "get_subjects/"
        }
        Vue.prototype.contact_const = {
            hello: "您好，我是Ezp第一代人工AI哦，可以回答你关于我们的课程&服务，教学，退款/优惠政策，上课相关，老师政策，升学规划等一系列问题哦~ 请问有什么可以帮到您的？",
            book_try: "预约试听/上课可以先添加小助手微信哦~ 微信号：zqwei-tech",
            contact_qrcode: require("../assets/contact_qrcode.jpg"),

        }
        Vue.prototype.subject_cata_dict = subject_cata_dict

    }
}

