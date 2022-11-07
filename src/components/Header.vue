<template>
  <div class="header">
    <div class="img hidden-sm-and-down">
      <img src="@/assets/Easypaper.png" alt="">
    </div>
    <div class="hidden-sm-and-down" style="width: 100%">

      <el-row type="flex" class="row-bg" justify="end">
        <el-col>
          <el-menu
              mode="horizontal"
              @select="handleSelect"
              background-color="#fff"
              text-color="#333"
              active-text-color="#0084ff"
              :default-active="active_item"
              style="flex:1; height: 60px"
          >
            <el-menu-item v-for="item in navList" :key="item.key" :index="item.name"
                          style="padding-right: 13px; padding-left: 13px;">
              <router-link :to=item.name tag="span">{{ item.navItem }}</router-link>
            </el-menu-item>
<!--            <el-submenu index="" class="el-submenu">-->
<!--              <template slot="title">-->
<!--                <span class="el-submenu">{{ $t('page.language') }}</span>-->
<!--              </template>-->
<!--              <el-menu-item @click="toEn">English</el-menu-item>-->
<!--              <el-menu-item @click="toZh">中文</el-menu-item>-->
<!--            </el-submenu>-->
          </el-menu>
        </el-col>
      </el-row>
    </div>
<!--    v-if="window_width !== 991"-->
    <div class="hidden-md-and-up" style="width: 100%;">
      <!--      <el-card class="box-card" style="width: 100%; height: 60px">-->
      <div style="float: left; margin-right: -140px; padding-left: 60px">
        <h4 style="font-family: 'DengXian Light'">EasyPaper</h4>
      </div>
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="6">
          <el-row type="flex" class="row-bg" justify="start">
            <el-col :span="2">
              <div>
                <img src="@/assets/Easypaper.png" alt="">
              </div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="4">
          <el-dropdown @command="handleDropMenuSelect" style="margin-top: 10px">
          <span class="el-dropdown-link">
            <el-button plain style="height: 40px">菜单<i
                class="el-icon-s-unfold el-icon--right"></i></el-button>
          </span>
            <el-dropdown-menu
                slot="dropdown"
                mode="horizontal"
                background-color="#fff"
                text-color="#333"
                active-text-color="#0084ff"
                style="flex:1"
            >
              <el-dropdown-item :command="item.name" v-for="item in navList" :key="item.key" :index="item.name">
                <router-link :to=item.name tag="span">{{ item.navItem }}</router-link>
              </el-dropdown-item>
              <el-dropdown-item command="toEn" divided>English</el-dropdown-item>
              <el-dropdown-item command="toZh">中文</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import crypto_utils from "@/utils/crypto_utils";
import Vue from "vue";

export default {
  data() {
    const is_show_search = this.$router.currentRoute.fullPath !== "/papersearch"
    return {
      navList: [
        {name: '/home', navItem: "首页", key: "1"},
        {name: '/discover', navItem: "在线择师", key: "2"},
        {name: '/faq', navItem: "常见问题", key: "3"},
      ],
      navNameList: []
    }
  },

  methods: {
    handleSelect(key, keyPath) {
      Vue.prototype.valid_click += 1
      if (this.$router.currentRoute !== keyPath[0]) {
        this.$router.push(keyPath[0])
      }
    },
  }
}
</script>

<style>
.el-menu-item {
  font-size: 13px !important;
}

.el-menu-item.is-active {
  color: #ea5b2c !important;
  font-size: 13px !important;
}

.el-submenu {
  font-size: 13px !important;
}

.el-submenu .is-active {
  color: #ea5b2c !important;
  font-size: 13px !important;
}

.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 2px solid #ea5b2c !important;
}

.header {
  top: 0px;
  height: 60px;
  display: flex;
  width: 100%;
  align-content: center;
  border-bottom: solid 1px #e6e6e6;
}

.img {
  background: #ffffff;
  padding-left: 12.5%;
  padding-right: 20px;
  //border-bottom: solid 1px #e6e6e6;
}

img {
  width: 40px;
  height: 40px;
  padding: 10px;
}

.NavSearchContainer {
  margin-top: 11px;
  width: 200px;
  display: flex;
  padding-right: 5%;
  float: right;
}

.reduced_navbar {
  display: flex;
  flex-direction: row;
  justify-content: right;
}


</style>
