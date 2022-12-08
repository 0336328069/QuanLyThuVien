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
              <span class="text-h5 !font-bold">ADD BOOK</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                  >
                    <v-text-field
                      label="Mã Sách"
                      v-model="initData.id"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                  >
                    <v-text-field
                      label="Tên Sách"
                      v-model="initData.title"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                  >
                    <v-text-field
                      label="Link Ảnh Sách"
                      v-model="initData.image"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                  >
                    <v-text-field
                      label="Mô tả"
                      v-model="initData.subtitle"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      label="Tác giả"
                      v-model="initData.author"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                  >
                    <v-select
                      :items="[1, 2, 3, 4]"
                      label="Số Lượng"
                      v-model="initData.quantity"
                      required
                    ></v-select>
                  </v-col>
                </v-row>
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
  <script setup name="CustomPopup">
  import { computed, reactive } from "@vue/runtime-core";

    const emits = defineEmits(['update:isShow','onSubmit'])
    const props = defineProps({
        isShow: Boolean
    });
    const initData = reactive({
      id: '',
      title: '',
      subtitle: '',
      author: '',
      quantity: 1,
      image: '',
    })

    const isShowPopup = computed({
        get(){
            return props.isShow;
        },
        set(val){
            emits('update:isShow', val);
        }
    })

    const onSubmit = () => {
      emits('onSubmit', initData);
    }
  </script>