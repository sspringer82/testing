class Logger {
  log(msg, sev) {
    if (sev === 'info') {
      console.log(msg);
    }
  }
}