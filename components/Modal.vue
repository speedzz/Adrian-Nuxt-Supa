<template>
    <Teleport to="body">
      <div v-if="isVisible" class="modal fade show d-block" tabindex="-1" aria-labelledby="messageModalLabel" aria-modal="true" role="dialog">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header" :class="{ 'bg-success': type === 'success', 'bg-danger': type === 'error' }">
              <h5 class="modal-title text-white" id="messageModalLabel">{{ title }}</h5>
              <button type="button" class="btn-close" @click="close" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>{{ message }}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn" :class="{ 'btn-success': type === 'success', 'btn-danger': type === 'error' }" @click="close">Close</button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="isVisible" class="modal-backdrop fade show"></div>
    </Teleport>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  
  const props = defineProps({
    show: Boolean,
    type: {
      type: String,
      default: 'success',
      validator: (value) => ['success', 'error'].includes(value)
    },
    title: {
      type: String,
      default: 'Message'
    },
    message: {
      type: String,
      required: true
    },
    autoClose: {
      type: Number,
      default: 0 // 0 means no auto-close
    }
  })
  
  const emit = defineEmits(['update:show'])
  
  const isVisible = ref(props.show)
  
  watch(() => props.show, (newValue) => {
    isVisible.value = newValue
    if (newValue && props.autoClose > 0) {
      setTimeout(() => {
        close()
      }, props.autoClose)
    }
  })
  
  const close = () => {
    isVisible.value = false
    emit('update:show', false)
  }
  </script>
  
  <style scoped>
  .modal-backdrop {
    opacity: 0.5;
  }
  </style>