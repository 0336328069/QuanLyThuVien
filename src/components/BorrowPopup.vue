<template>
    <v-row justify="center">
      <v-dialog
        v-model="isShowPopup"
        persistent
      >
        <template v-slot:activator="{ props }">
          <v-btn
            color="primary"
            v-bind="props"
          >
            Open Dialog
          </v-btn>
        </template>
        <v-card>
          <form @submit.prevent="onSubmit">
            <v-card-title>
              <span class="text-h5 !font-bold">BORROW BOOK</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <div class="flex">
                    <img :src="initData.image" alt="">
                    <v-row>
                        <v-col
                            cols="12"
                            sm="12"
                        >
                            <v-text-field
                            label="Tên Sách"
                            v-model="initData.title"
                            disabled
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="12"
                        >
                            <v-select
                            :items="[1, 2, 3, 4]"
                            label="Số Lượng"
                            v-model="quantity"
                            required
                            ></v-select>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="12"
                        >
                            <Datepicker v-model="date" range auto-range="5" />
                        </v-col>
                    </v-row>
                </div>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue-darken-1"
                variant="text"
                @click="isShowPopup = false"
              >
                Close
              </v-btn>
              <v-btn
                color="blue-darken-1"
                variant="text"
                type="submit"
              >
                Save
              </v-btn>
            </v-card-actions>
          </form>
        </v-card>
      </v-dialog>
    </v-row>
  </template>
  <script setup name="BorrowPopup">
  import { computed, onMounted, reactive, ref } from "@vue/runtime-core";
    import Datepicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css'
    import { useBorrowBook } from "../store/listBook"
    
    const borrowStore = useBorrowBook();
    const emits = defineEmits(['update:isShow'])
    const props = defineProps({
        isShow: Boolean,
        initData: Object
    });
    const quantity = ref(1);
    const date = ref();
    const dataProps = reactive(props.initData)

    const isShowPopup = computed({
        get(){
            return props.isShow;
        },
        set(val){
            emits('update:isShow', val);
        }
    }) 

    const onSubmit = () => {
        if(props.initData.quantity > 0){
            let borrow = {
                id: props.initData.id,
                title: props.initData.title,
                image: props.initData.image,
                quantity : quantity.value,
                date: date.value
            }

            borrowStore.addBorrowBook(borrow);
        }
    }

    // For demo purposes assign range from the current date
    onMounted(() => {
        const startDate = new Date();
        const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
        date.value = [startDate.toString(), endDate.toString()];
    })

    
  </script>