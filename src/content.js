const POLLING_MS = 2000;

const createNotifier = (fileNum) => {
  const options = {
    body: `${fileNum}件のアップロードが完了しました`,
    icon: 'https://gigafile.nu/favicon.ico'
  }
  const title = 'UploadNotifier'
  new Notification(title, options);
}

const checkStatus = () => {
  const statusDoms = document.querySelectorAll("span.status")
  if (statusDoms.length === 0) return
  const isComplete = Object.values(statusDoms).reduce((result,v) => {
    result.push(v.innerText)
    return result
   }, []).every(v => v === '完了！');
  if (!isComplete) return
  createNotifier(statusDoms.length)
  clearInterval(timer)
};

const timer = setInterval(checkStatus, POLLING_MS);
