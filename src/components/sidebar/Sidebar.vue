<template>
  <a-layout>
    <a-layout-sider
      v-model:collapsed="collapsed"
      :trigger="null"
      collapsible
      collapsedWidth="0"
      width="320"
      class="container"
    >
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <router-link to="/" class="router-link">
          <a-menu-item key="1">
            <dashboard-outlined />
            <span>{{ $t("Dashboard") }}</span>
          </a-menu-item>
        </router-link>
        <router-link to="/todos" class="router-link">
          <a-menu-item key="2">
            <CheckCircleOutlined />
            <span>{{ $t("Todos") }}</span>
          </a-menu-item>
        </router-link>
        <router-link to="weather" class="router-link">
          <a-menu-item key="3">
            <AntCloudOutlined />
            <span>{{ $t("Weather") }}</span>
          </a-menu-item>
        </router-link>
        <router-link to="profile" class="router-link">
          <a-menu-item key="4">
            <UserOutlined />
            <span>{{ $t("Profile") }}</span>
          </a-menu-item>
        </router-link>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="colapsed-icon">
        <menu-unfold-outlined
          v-if="collapsed"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <slot></slot>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import {
  DashboardOutlined,
  CheckCircleOutlined,
  AntCloudOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";

const selectedKeys = ref<string[]>(["1"]);
const collapsed = ref<boolean>(false);
</script>

<style scoped>
.container {
  position: absolute;
  z-index: 90;
  height: 100vh;
}
.colapsed-icon {
  position: absolute;
  top: 0%;
  color: #fff;
  padding: 0;
  font-size: 30px;
  margin-left: 12px;
}
</style>
