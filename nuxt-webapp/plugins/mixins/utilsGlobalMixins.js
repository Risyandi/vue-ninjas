export default {
  methods: {
    truncateText(text, maxLength) {
      if (text.length > maxLength) {
        text = text.substr(0, maxLength - 1) + '…';
      }
      return text;
    }
  }
}