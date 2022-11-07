import axios from "axios";
import crypto_utils from "@/utils/crypto_utils";
import Vue from "vue";

export function get_target_dir(target_dir, that) {
    that.loading = true
    var url = that.api.dir_v2_api
    var params = {}
    if (target_dir !== "") {
        params = {"dir": processCurrentDir(target_dir)}
    }
    axios
        .get(url, {params: params})
        .then(function (res) {
            var data = res.data
            if (data.status) {
                if (data.locked_resources === []) {
                    that.folders = data.folders
                } else {
                    var temp = []
                    for (var i = 0; i < data.folders.length; i++) {
                        if (data.locked_resources.indexOf(data.folders[i]) === -1) {
                            temp.push(data.folders[i])
                        }
                    }
                    that.folders = temp
                }
                that.files = data.files
                that.locked_resources = data.locked_resources
                that.current_dir = processCurrentDir(data.current_dir)
            } else {
                that.$message.error(that.$t("message.sorry_for_err"));
            }
            that.loading = false
        })
        .catch(function () { // 请求失败处理
            that.loading = false
            that.$message.error(that.$t("message.sorry_for_err"));
        });
}

export function getDeleteOneDir(current_dir) {
    var dir = current_dir.split("").reverse();
    var index;
    for (var i = 0; i < dir.length - 2; i++) {
        if (dir[i + 1] == "|") {
            index = i + 1;
            break;
        }
    }
    var back_dir = current_dir.substring(0, current_dir.length - index)
    if (back_dir[back_dir.length - 1] == "|") {
        back_dir = back_dir.substring(0, back_dir.length - 1)
    }
    return back_dir
}

export function processCurrentDir(current_dir) {
    var temp_dir = decodeURIComponent(current_dir).replace("||", "|")
    if (temp_dir[0] === "|") {
        temp_dir = temp_dir.substring(1, temp_dir.length)
    }
    if (temp_dir[temp_dir.length - 1] === "|") {
        temp_dir = temp_dir.substring(0, temp_dir.length - 1)
    }
    return temp_dir
}

export function is_string_year(string) {
    try {
        var year = parseInt(string)
        return year >= 1960 && year <= 2030;

    } catch (e) {
        return false
    }

}

//第一种，使用while循环
export function time_sleep(delay) {
    var start = (new Date()).getTime();
    while ((new Date()).getTime() - start < delay) {
        const re = "wait"
        re + "123"
    }
}

export function downloadFile(dir, that) {
    // const temp = dir.split(".")
    // const suffix = temp[temp.length - 1]
    //
    // if (suffix.indexOf("pdf") !== -1) {
    //     const download_url = that.api.pdf_view_api + dir
    //     window.open(download_url.replace("&", "%26"), "_blank");
    // } else {
    //     const download_url = that.api.file_download_api + dir
    //     window.open(download_url.replace("&", "%26"), "_blank");
    // }
    Vue.prototype.valid_click += 1
    const temp = dir.split(".")
    const suffix = temp[temp.length - 1]
    var params = {}
    params[randomString(Math.floor(Math.random() + 1))] = randomString(Math.floor(Math.random() + 1))
    params["dir"] = dir
    params = addTimeStamp(params)
    const base_info = encodeURIComponent(crypto_utils.encrypt(randomString(that.const.useless_string_len) + JSON.stringify(params), 1)
        .replace(new RegExp("/", "gm"), that.const.replace_target))
    if (suffix.indexOf("pdf") !== -1) {
        const download_url = that.api.pdf_view_api_v3 + encodeURIComponent("/paperdownload/dir_v3/" + base_info)
        window.open(download_url.replace(new RegExp("&", "gm"), "%26"), "_blank");
    } else {
        const download_url = that.api.dir_v3_api + base_info
        window.open(download_url.replace(new RegExp("&", "gm"), "%26"), "_blank");
    }
}

// export function downloadFile_v3(dir, file, that) {
//     const temp = dir.split(".")
//     const suffix = temp[temp.length - 1]
//     var params = {}
//     params[randomString(Math.floor(Math.random() * 3 + 4))] = randomString(Math.floor(Math.random() * 10 + 2))
//     params["dir"] = dir
//     const target_url = encodeURIComponent(randomString(that.const.useless_string_len) + crypto_utils.encrypt(JSON.stringify(params), 1)
//         .replace(new RegExp("/", "gm"), that.const.replace_target))
//     if (suffix.indexOf("pdf") !== -1) {
//         const download_url = that.api.pdf_view_api_v3 + target_url
//         window.open(download_url.replace("&", "%26"), "_blank");
//     } else {
//         const download_url = that.api.dir_v3_api + target_url
//         window.open(download_url.replace("&", "%26"), "_blank");
//     }
// }

export function split_array(target_array, target_size) {
    var result_array = []
    var temp_array = []
    var cnt = 0
    for (var i = 0; i < target_array.length; i++) {
        if (cnt >= target_size) {
            result_array.push(temp_array)
            temp_array = [target_array[i]]
            cnt = 1
        } else {
            temp_array.push(target_array[i])
            cnt += 1
        }
    }
    if (temp_array !== []) {
        result_array.push(temp_array)
    }
    return result_array

    // var result_array = []
    // var temp_array = []
    // var cnt = 0
    // for (var i = 0; i < target_array.length; i++) {
    //     if (temp_array.length >= target_size) {
    //         result_array.push(temp_array)
    //         temp_array = [target_array[i]]
    //         cnt = 1
    //     } else {
    //         temp_array.push(target_array[i])
    //         cnt += 1
    //     }
    // }
    // if (temp_array !== []) {
    //     result_array.push(temp_array)
    // }
    // // console.log(result_array)
    // return result_array
}

export function is_sth_in_list(sth, list) {
    for (var i = 0; i < list.length; i++) {
        if (list[i].indexOf(sth) !== -1) {
            return true
        }
    }
    return false
}

export function is_list_in_sth(sth, list) {
    for (var i = 0; i < list.length; i++) {
        if (sth.indexOf(list[i]) !== -1) {
            return true
        }
    }
    return false
}


export function randomString(len) {
    len = len || 32;
    var chars = 'ABCDEFGHJKMNP9gqQRSToOLVvI1lWXYZabcdefhijkmnprstwxyz2345678';
    var maxPos = chars.length;
    var pwd = '';
    for (var i = 0; i < len; i++) {
        pwd += chars[Math.floor(Math.random() * maxPos)]
    }
    return pwd;
}

export function getDecryptServerData(data) {
    try {
        var temp = crypto_utils.decrypt(data)
        data = JSON.parse(temp.substring(10, temp.length))
        return data
    } catch (e) {
        return {"status": false}
    }
}

export function generateGetUrl(url, params) {
    var param_string = ""
    const parma_keys = Object.keys(params)
    for (var i = 0; i < parma_keys.length; i++) {
        if (param_string === "") {
            param_string = parma_keys[i] + "=" + encodeURIComponent(params[parma_keys[i]])
        } else {
            param_string += "&" + parma_keys[i] + "=" + encodeURIComponent(params[parma_keys[i]])
        }
    }
    if (param_string !== "") {
        return url + "?" + param_string
    }
    return url
}

export function addTimeStamp(param) {
    param["time"] = (Date.parse(new Date()) / 1000).toFixed()
    return param
}

export function processSafeUrl(params, id = 1) {
    params[randomString(Math.floor(Math.random() * 3 + 1))] = randomString(Math.floor(Math.random() * 2 + 2))
    return encodeURIComponent(crypto_utils.encrypt(randomString(Vue.prototype.const.useless_string_len) + JSON.stringify(params), id)
        .replace(new RegExp("/", "gm"), Vue.prototype.const.replace_target))
}

export function getSfapiUrl(url, params) {
    const timestamp = (Date.parse(new Date()) / 1000).toFixed()
    var get_params = {"time": timestamp, "url": generateGetUrl(url, params)}
    return Vue.prototype.api.sfapi + encodeURI(processSafeUrl(get_params)) + "/"
}

export function updateWebDriverStatus(that) {
    // that.is_webdriver = false
    that.is_webdriver = window.navigator.webdriver
    if (that.is_webdriver === undefined) {
        that.is_sus_webdriver = true
    } else if (that.is_webdriver == undefined) {
        that.is_sus_webdriver = true
    } else if (typeof (that.is_webdriver) == "undefined") {
        that.is_sus_webdriver = true
    } else if (that.is_webdriver == null) {
        that.is_sus_webdriver = true
    } else {
        that.is_sus_webdriver = false
    }
}

// export function convertToVaildUrl(input){
//
// }
export function generateMathQuestion() {
    const chars = '123456789';
    const chars_op = '+-';
    const maxPos = chars.length;
    const expression = chars[Math.floor(Math.random() * maxPos)] + chars_op[Math.floor(Math.random() * 2)] + chars[Math.floor(Math.random() * maxPos)]
    return expression
}

export function clearClickRecord() {
    const empty = [0, 0]
    const time = Date.parse(new Date()) / 1000
    const empty_time = [time, Vue.prototype.total_click, Vue.prototype.valid_click]
    Vue.prototype.valid_click = 0
    Vue.prototype.total_click = 0
    Vue.prototype.start_time = Date.parse(new Date()) / 1000
    Vue.prototype.real_dict = {
        1: empty,
        5: empty,
        20: empty,
        60: empty,
        600: empty,
        1800: empty
    }
    Vue.prototype.record_dict = {
        1: empty_time,
        5: empty_time,
        20: empty_time,
        60: empty_time,
        600: empty_time,
        1800: empty_time
    }
}

export function isUserNotValid() {
    var time = Date.parse(new Date()) / 1000
    const keys = Object.keys(Vue.prototype.judge_dict)
    for (var i = 0; i < keys.length; i++) {
        //update
        if (time - Vue.prototype.record_dict[keys[i]][0] > keys[i]) {
            Vue.prototype.record_dict[keys[i]] = [time, Vue.prototype.total_click, Vue.prototype.valid_click]
        } else {
            Vue.prototype.real_dict[keys[i]] = [Vue.prototype.total_click - Vue.prototype.record_dict[keys[i]][1], Vue.prototype.valid_click - Vue.prototype.record_dict[keys[i]][2]]
        }
        // console.log(Vue.prototype.real_dict)
        //judge
        if (Vue.prototype.real_dict[keys[i]][0] >= Vue.prototype.judge_dict[keys[i]][0]) {
            return true
        }
        if (Vue.prototype.real_dict[keys[i]][1] >= Vue.prototype.judge_dict[keys[i]][1]) {
            return true
        }
    }
    return false
}