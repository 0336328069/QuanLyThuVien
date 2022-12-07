<template >
    <!-- <v-list lines="one">
        <v-list-item
            v-for="(item,index) in navMenuList.data"
            :key="`item.title_${index}`"
            :title="item.title"
            :subtitle="item.slug"
            @click="onClickItem(item.slug)"
        ></v-list-item>
    </v-list> -->
    <v-expansion-panels>
        <v-expansion-panel class="nav-menu--item" v-for="(item, index) in navMenuList.data" :key="`${item}_${index}`">
          <v-expansion-panel-title >
            <template v-slot:default="{ expanded }">
              <v-row no-gutters>
                <v-col cols="4" class="d-flex justify-start whitespace-nowrap">
                  {{item.title}}
                </v-col>
              </v-row>
            </template>
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-list-item
              class="hover:opacity-50 cursor-pointer"
              @click="onClickItem(item2.slug)"
              v-for="(item2, index) in item.listChild"
              :key="`child_${item2}_${index}`"
              :title="item2.title"
            ></v-list-item>
          </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import { router } from "../plugins/router";

const navMenuList = reactive({
    data: [
        {
            title: 'Quản Lý Sách',
            listChild: [
              {
                slug:'/borrow-book',
                title: 'Sách Mượn'
              },
              {
                slug:'/book',
                title: 'Sách Hiện Tại'
              }
            ]
        }
    ]
})

const onClickItem = (slug) => {
  router.push({ path : slug})
}
</script>

<style lang="scss">
.nav-menu--item{
    @apply bg-inherit text-white;

    .v-expansion-panel__shadow{
        box-shadow: none;
    }
}
</style>
