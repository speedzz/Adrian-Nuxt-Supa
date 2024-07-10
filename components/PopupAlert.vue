<template>
    <div v-if="visible" :class="['alert', alertClass, 'alert-dismissible', 'fade', 'show']" role="alert">
      {{ message }}
      <button type="button" class="btn-close" @click="closeAlert" aria-label="Close"></button>
    </div>
  </template>
  
  <script setup>
  import { ref, watch, computed } from 'vue'
  
  const props = defineProps({
    message: String,
    type: {
      type: String,
      default: 'danger',
    },
    duration: {
      type: Number,
      default: 3000, // 3 seconds
    },
    autoClose: {
      type: Boolean,
      default: true, // Auto-close by default
    },
  })
  
  const visible = ref(true)
  let timeoutId = null
  
  const alertClass = computed(() => {
    return {
      'alert-success': props.type === 'success',
      'alert-danger': props.type === 'danger',
    }
  })
  
  const closeAlert = () => {
    visible.value = false
    if (timeoutId) {
      clearTimeout(timeoutId)
      timeoutId = null
    }
  }
  
  watch(() => props.message, (newMessage) => {
    if (newMessage) {
      visible.value = true
      if (props.autoClose) {
        if (timeoutId) {
          clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(() => {
          visible.value = false
        }, props.duration)
      }
    }
  })
  </script>
  
  <style scoped>
  .alert {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
  }
  </style>