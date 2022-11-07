<template>
  <div :style="'width: '+width+';border-radius: 30px;margin-top:20px'" class="hover_shadow">
    <div class="flex_start_col_container"
         style="font-weight: 500;font-size: 16px;padding: 15px;background-color: #e6e6e6;">
      <div class="space_between_row_container">
        <span>在线AI小助手咨询</span>
        <i v-if="showClose" class="el-icon-close" style="font-weight: 600" @click="closeWindow">关闭</i>
      </div>
    </div>
    <div id="chat_box"
         :style="'width:'+width+';background-color:white;overflow-y:auto;min-height: '+height+';height:'+height"
         class="hover_shadow">
      <div class="flex_start_col_container" style="padding-top: 8px">
        <template v-for="(record,idx) in chatData">
          <template v-if="record.direction===1">
            <!--            {{ parseInt(record.timestamp)}}-->
            <!--            {{parseInt(chatData[idx-1].timestamp) }}-->
            <div class="flex_start_col_container" style="padding-right: 10px;">
              <div class="center_col_container"
                   v-if="isShowTime(idx)">
                <p style="font-size: 12px;color: gray;">{{ formatDate(record.timestamp) }}</p>
              </div>
              <p style="font-size: 12px;color: gray;padding-left: 10px;margin-bottom: -5px">EasyPaper AI助手</p>
              <div class="flex_start_row_container" style="width: 95%">
                <img src="../assets/Easypaper.png">
                <p v-if="record.type===1" class="righttalkbubble">{{ record.content }}</p>
                <div v-if="record.type===2" class="flex_start_col_container righttalkbubble"
                     style="width: 50%;margin-top: 20px">
                  <img :src="record.content" style="width: 90%;height: auto">
                </div>
                <span v-if="record.type===3" class="righttalkbubble" v-html="record.content"></span>
              </div>
            </div>
          </template>
          <template v-if="record.direction===2">
            <div class="center_col_container" v-if="isShowTime(idx)">
              <p style="font-size: 12px;color: gray;">{{ formatDate(record.timestamp) }}</p>
            </div>
            <div class="flex_end_row_container">
              <div class="flex_end_row_container" style="width: 95%">
                <p v-if="record.type===1" class="lefttalkbubble">{{ record.content }}</p>
                <div class="flex_start_col_container">
                  <img v-if="record.type===2" :src="record.content" style="width: 70%">
                </div>
                <img src="../assets/avatar.jpg">
              </div>
            </div>
          </template>
        </template>
      </div>
    </div>
    <div class="space_between_row_container">
      <el-input @change="sendToChat" v-model="input" placeholder="请输入内容"></el-input>
      <el-popover
          placement="bottom"
          title=""
          width="200"
          trigger="manual"
          content="不能发送空白消息哦~"
          v-model="visible">
        <el-button slot="reference" @click="sendToChat">发送</el-button>
      </el-popover>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "ServiceDialogBox",
  props: {
    "width": {
      type: String,
      default: "600px"
    },
    "height": {
      type: String,
      default: "500px"
    },
    "showClose": {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      input: "",
      chatData: [],
      visible: false
    }
  },
  components: {},
  mounted() {
    let that = this
    setTimeout(function () {
      that.chatData.push({
        direction: 1,
        type: 1,
        content: that.contact_const.hello,
        timestamp: new Date().getTime()
      })
    }, 300)
  },
  watch: {
    chatData() {
      this.scrollToBottom()
    }
  },
  methods: {
    isShowTime(idx) {
      if (idx === 0) {
        return true
      } else {
        return (this.chatData[idx].timestamp - this.chatData[idx - 1].timestamp) / 1000 >= 10
      }
    },
    closeWindow() {
      this.$emit("close")
    },
    scrollToBottom() {
      this.$nextTick(() => {
        var container = this.$el.querySelector("#chat_box");
        container.scrollTop = container.scrollHeight;
      });
    },
    sendToChat() {
      if (this.input !== "") {
        this.chatData.push({
          direction: 2,
          type: 1,
          content: this.input,
          timestamp: new Date().getTime()
        })
        this.aiResponse(this.input)
        this.input = ""
      } else {
        this.visible = true
        let that = this
        if (this.blankHintTimeout) {
          clearTimeout(this.blankHintTimeout)
        }
        this.blankHintTimeout = setTimeout(function () {
          that.visible = false
        }, 1000)
      }
    },
    addResponse(response, type = 1, timeout = 0) {
      let that = this
      if (timeout === 0) {
        this.chatData.push({
          direction: 1,
          type: type,
          content: response,
          timestamp: new Date().getTime()
        })
      } else {
        setTimeout(function () {
          that.chatData.push({
            direction: 1,
            type: type,
            content: response,
            timestamp: new Date().getTime()
          })
        }, timeout)
      }
    },
    aiResponse(question) {
      let that = this
      var API_KEY = '1ggcOiME9VlZjfjuZP6I62qP'
      var SECRET_KEY = 'Y4AKWVWnNym5E88yAxltmrHdOBWVB4C2'
      const url = "https://www.ai.zqwei-tech.cn/nlp/api/get_chat_response"
      // const url = "http://localhost:8000/nlp/api/get_chat_response"
      var formData = new FormData();
      formData.append("apiId", API_KEY)
      formData.append("key", SECRET_KEY)
      formData.append("content", question)
      axios
          .post(url, formData)
          .then(function (res) {
                that.chatData.push({
                  direction: 1,
                  type: 1,
                  content: res.data.response,
                  timestamp: new Date().getTime()
                })
                if (res.data.response.indexOf("zqwei-tech") !== -1) {
                  setTimeout(function () {
                    that.chatData.push({
                      direction: 1,
                      type: 2,
                      content: that.contact_const.contact_qrcode,
                      timestamp: new Date().getTime()
                    })
                  }, 300)

                }
              }
          )
          .catch(function (error) { // 请求失败处理
            console.log(error)
          });

    },
    formatDate(now) {
      now = new Date(now)
      var year = now.getFullYear();
      var month = now.getMonth() + 1;
      var date = now.getDate();
      var hour = now.getHours();
      var minute = now.getMinutes();
      var second = now.getSeconds();
      if (hour <= 9) {
        hour = "0" + hour.toString()
      }
      if (minute <= 9) {
        minute = "0" + minute.toString()
      }
      if (second <= 9) {
        second = "0" + second.toString()
      }
      return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
    }
  }
}

</script>

<style scoped>
.righttalkbubble {
  background: #DADADA;
  position: relative;
  border-radius: 10px;
  margin-left: 10px;
  padding: 10px;
}

.righttalkbubble:before {
  content: "";
  position: absolute;
  right: 100%;
  top: 8px;
  border-top: 5px solid transparent;
  border-right: 8px solid #DADADA;
  border-bottom: 5px solid transparent;
}

.lefttalkbubble {
  background: #9EEA6A;
  position: relative;
  border-radius: 10px;
  margin-right: 10px;
  padding: 10px;
}

.lefttalkbubble:after {
  content: "";
  position: absolute;
  left: 100%;
  top: 8px;
  border-top: 5px solid transparent;
  border-left: 8px solid #9EEA6A;
  border-bottom: 5px solid transparent;
}
</style>