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
                Author
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
                <td>{{item.author}}</td>
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
    data: [
        {
            id:1,
            title: "Game Hacking Academy",
            subtitle: "A Beginner Guide to Understanding Game Hacking Techniques",
            author:'Than Justien',
            quantity:2,
            image: "https://itbook.store/img/books/1001668595152.png",
            url: "https://itbook.store/books/1001668595152"
        },
        {
            id:2,
            title: "Kafka: The Definitive Guide, 2nd Edition",
            subtitle: "Real-Time Data and Stream Processing at Scale",
            author:'Lucas Tony',
            quantity: 2,
            image: "https://itbook.store/img/books/9781492043089.png",
            url: "https://itbook.store/books/9781492043089"
        },
        {
            id:4,
            title: "Deno Succinctly",
            subtitle: "",
            author:'Muramet Herera',
            quantity:2,
            image: "https://itbook.store/img/books/9781642002140.png",
            url: "https://itbook.store/books/9781642002140"
        },
        {
            id:5,
            title: "Robotics, AI, and Humanity",
            subtitle: "Science, Ethics, and Policy",
            author:'Lucian',
            quantity: 2,
            image: "https://itbook.store/img/books/9783030541729.png",
            url: "https://itbook.store/books/9783030541729"
        },
        {
            id:6,
            title: "Introduction to Autonomous Robots, 3rd Edition",
            subtitle: "",
            author:'Kenyan',
            quantity: 2,
            image: "https://itbook.store/img/books/9781493773077.png",
            url: "https://itbook.store/books/9781493773077"
        },
        {
            id:7,
            title: "Learning Go",
            subtitle: "An Idiomatic Approach to Real-World Go Programming",
            author:'Maroon',
            quantity: 2,
            image: "https://itbook.store/img/books/9781492077213.png",
            url: "https://itbook.store/books/9781492077213"
        },
        {
            id:8,
            title: "Open Workbook of Cryptology",
            subtitle: "A project-based introduction to crypto in Python",
            author:'Thomas Lucas',
            quantity:2,
            image: "https://itbook.store/img/books/1001656678502.png",
            url: "https://itbook.store/books/1001656678502"
        },
        {
            id:9,
            title: "Embracing Modern C++ Safely",
            subtitle: "",
            author:'Romelo Lukaku',
            quantity: 2,
            image: "https://itbook.store/img/books/9780137380350.png",
            url: "https://itbook.store/books/9780137380350"
        },
        {
            id:10,
            title: "Retro Gaming with Raspberry Pi, 2nd Edition",
            subtitle: "",
            author:'Kevin Debryne',
            quantity:2,
            image: "https://itbook.store/img/books/1001656317756.png",
            url: "https://itbook.store/books/1001656317756"
        },
    ]
})
const isShowPopupAdd = ref(false);

const onShowPopupAdd = () => {
    isShowPopupAdd.value = true;
}
// onMounted(async () => {
//     listBook.data = [...books].splice(1,11);
// })
</script>