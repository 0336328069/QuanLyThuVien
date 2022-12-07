<template>
    <div>
        <v-btn class="my-5 ml-5" @click.stop="onShowPopupAdd">Add New Book</v-btn>
        <v-table
            fixed-header
            height="calc( 100vh - 65px )"
        >
            <thead>
            <tr>
                <th class="text-left">
                Name
                </th>
                <th class="text-left">
                Image
                </th>
                <th class="text-left">
                Calories
                </th>
                <th class="text-left">
                Quantity
                </th>
                <th class="text-left">
                </th>
            </tr>
            </thead>
            <tbody>
            <tr
                v-for="item in listBook.data"
                :key="item.name"
            >
                <td>{{ item.title }}</td>
                <td class="text-left">
                    <img :src="item.image" alt="">
                </td>
                <td>{{ item.subtitle }}</td>
                <td>{{item.quantity}}</td>
                <td class="p-0">
                    <div class="w-full grid grid-cols-1 mt-4">
                        <v-btn class="mb-2 rounded-full !font-bold !text-[#0091A8]">
                            rental
                        </v-btn>
                        <v-btn class="mb-2 rounded-full !font-bold !text-[#0091A8]">
                            EDIT
                        </v-btn>
                        <v-btn class="rounded-full !font-bold !text-[#CB3838]">
                            DELETE
                        </v-btn>
                    </div>
                </td>
            </tr>
            </tbody>
        </v-table>
    </div>
    <CustomPopup v-if="isShowPopupAdd" v-model:isShow="isShowPopupAdd"></CustomPopup>
</template>
<script setup name="Book">
import { reactive, ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import books from "../assets/data/Book.json";
import CustomPopup from '../components/Popup.vue';

const listBook = reactive({
    data: []
})
const isShowPopupAdd = ref(false);

const onShowPopupAdd = () => {
    isShowPopupAdd.value = true;
}
onMounted(async () => {
    listBook.data = [...books].splice(1,11);
})
</script>