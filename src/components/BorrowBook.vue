<template>
    <v-table
    fixed-header
    height="calc( 100vh - 65px )"
  >
    <thead>
      <tr>
        <th class="text-left">
          Tên Sách
        </th>
        <th class="text-left">
          Ảnh
        </th>
        <th class="text-left">
          Số Lượng
        </th>
        <th class="text-left">
          Ngày Mượn
        </th>
        <th class="text-left">
          Ngày Trả
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in borrowStore.listBook"
        :key="item.name"
      >
        <td>{{ item.title }}</td>
        <td class="text-left">
            <img :src="item.image" alt="">
        </td>
        <td>{{ item.quantity }}</td>
        <td>{{ item.date[0] }}</td>
        <td>{{item.date[1]}}</td>
      </tr>
    </tbody>
  </v-table>
</template>
<script setup name="BorrowBook">
import { reactive } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useBorrowBook } from '../store/listBook';

const borrowStore = useBorrowBook();
</script>