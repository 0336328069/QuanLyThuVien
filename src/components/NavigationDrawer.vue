<template >
    <v-list lines="one">
        <v-list-item
            v-for="(item,index) in navMenuList.data"
            :key="`item.title_${index}`"
            :title="item.title"
            :subtitle="item.slug"
            @click="onClickItem(item.slug)"
        ></v-list-item>
    </v-list>
</template>

<script setup>
import { reactive } from "@vue/reactivity";
import { router } from "../plugins/router";

const navMenuList = reactive({
    data: [
        {
            title: 'A',
            slug:'/item1',
        },
        {
            title: 'B',
            slug:'/item2',
        },
        {
            title: 'C',
            slug:'/item3',
        },
        {
            title: 'D',
            slug:'/item4',
        },
        {
            title: 'E',
            slug:'/item5',
        }
    ]
})

const onClickItem = (slug) => {
    router.push({path : slug})
}
</script>