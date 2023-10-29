<template>
  <a-layout>
    <a-layout-sider
      v-model:collapsed="collapsed"
      :trigger="null"
      collapsible
      collapsedWidth="0"
      width="320"
    >
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <router-link to="/" class="router-link">
          <a-menu-item key="1">
            <dashboard-outlined />
            <span>Dashboard</span>
          </a-menu-item>
        </router-link>
        <router-link to="/todos" class="router-link">
          <a-menu-item key="2">
            <CheckCircleOutlined />
            <span>Todos</span>
          </a-menu-item>
        </router-link>
        <router-link to="weather" class="router-link">
          <a-menu-item key="3">
            <AntCloudOutlined />
            <span>Weather</span>
          </a-menu-item>
        </router-link>
        <router-link to="profile" class="router-link">
          <a-menu-item key="4">
            <UserOutlined />
            <span>Profile</span>
          </a-menu-item>
        </router-link>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
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

