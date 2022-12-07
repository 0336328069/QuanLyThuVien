<template>
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
          Price
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
        <td>{{item.price}}</td>
        <td>
            <a :href="item.url" target="_blank" class="text-[#0091A8] hover:underline">Details</a>           
        </td>
      </tr>
    </tbody>
  </v-table>
</template>
<script setup name="BorrowBook">
import { reactive } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import books from "../assets/data/Book.json";

    const listBook = reactive({
        data: []
    })

onMounted(async () => {
    listBook.data = [...books].splice(11);
})
</script>