import { ref } from 'vue'

export function useModal() {
  const showModal = ref(false)
  const modalType = ref('success')
  const modalTitle = ref('')
  const modalMessage = ref('')

  const showSuccessModal = (message: string) => {
    modalType.value = 'success'
    modalTitle.value = 'Success'
    modalMessage.value = message
    showModal.value = true
  }

  const showErrorModal = (message: string) => {
    modalType.value = 'error'
    modalTitle.value = 'Error'
    modalMessage.value = message
    showModal.value = true
  }

  return {
    showModal,
    modalType,
    modalTitle,
    modalMessage,
    showSuccessModal,
    showErrorModal
  }
}