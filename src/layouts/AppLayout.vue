<template>
  <v-app class="AppLayout">
    <v-app-bar app dark color="primary">
      <v-toolbar-title>App Layout</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon dark>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon dark>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <v-btn icon dark>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn icon dark>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Application </v-list-item-title>
          <v-list-item-subtitle> subtext </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <v-fade-transition>
          <router-view></router-view>
        </v-fade-transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'AppLayout',
  data() {
    return {
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
        { title: 'About', icon: 'mdi-help-box', to: '/about' },
      ],
      right: null,
    }
  },
})
</script>

<style lang="scss" scoped>
.AppLayout {
  background-color: red;
}
</style>
