<template>
    <v-layout>
      <v-app-bar color="grey-lighten-2">
        <HeaderComponent></HeaderComponent>
      </v-app-bar>
      <v-navigation-drawer color="grey-darken-2" permanent>
        <NavigationDrawer></NavigationDrawer>
      </v-navigation-drawer>
      <v-main>
        <v-card>
          <router-view></router-view>
        </v-card>
      </v-main>
    </v-layout>
</template>

<script lang="ts" setup name="HomePage">
import HeaderComponent from '../components/Header.vue';
import NavigationDrawer from '../components/NavigationDrawer.vue';
</script>

<style>
    
</style>