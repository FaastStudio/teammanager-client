export default {
  namespaced: true,
  actions: {
    async notify(context, { vm, message, title, icon, vertAlign, horzAlign, type, timeout, showClose, closeOnClick }) {
      vm.$notify({
        message: message,
        title,
        icon,
        timestamp: Date.now(),
        type: 'success',
        verticalAlign: vertAlign,
        horizontalAlign: horzAlign,
        type,
        timeout,
        showClose,
        closeOnClick
      })
    }
  }
}
