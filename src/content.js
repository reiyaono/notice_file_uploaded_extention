window.alert('アプリ開いたね！');

const POLLING_MS = 5000;

const checkStatus = () => {
  const isComplete = Object.values(document.querySelectorAll("span.status")).reduce((result,v) => {
    result.push(v.innerText)
    return result 
   }, []).every(v => v === '完了！');
   console.log(isComplete)
};

setInterval(checkStatus, POLLING_MS);