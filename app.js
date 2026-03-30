const quotes = [
  "看啊，看啊，這是誰來了？",
  "義重如山岳，死輕如鴻毛",
  "你好，同志",
  "歡迎，夥伴",
  "開始戰鬥吧",
  "來日再會",
  "一場光榮的戰鬥",
  "英勇獻身的好日子",
  "幸會",
  "首屈一指",
  "沒想到你竟有這等實力",
  "天皇表示贊同",
  "刮目相看",
  "精美絕倫",
  "眾人之上，強者之列",
  "啊，不！",
  "真是有趣的策略",
  "這行不通",
  "抱歉，老伙計",
  "運氣不佳啊伙計",
  "不可能！",
  "你是個可怕的對手",
  "我很抱歉",
  "別灰心",
  "我喜歡你的風格",
  "勝券在握",
  "我發現你缺乏專注",
  "俄羅斯母親會碾碎你！",
  "那太糟糕了",
  "這不會花太多時間",
  "你的名字我記下了",
  "醉生夢死",
  "嗚哇！",
  "抱歉，我的好夥伴",
  "糟糕透了",
  "生死榮辱",
  "榮譽屬於帝國！",
  "一切榮耀屬於紅軍！",
  "為了國王和祖國！",
  "準備好被碾碎吧！",
  "現在是私事了",
  "一切抵抗都是徒勞",
  "大敵當前",
  "痛心疾首",
  "我未曾死亡，只是悄然隱去",
  "再累也不能倒下",
  "勝利的果實在變質",
  "你將功績永世長存",
  "如此少數英雄竟能拯救芸芸眾生",
  "猶如待宰的羔羊",
  "不錯的嘗試",
  "自業自得",
  "無風不起浪",
  "我們將在海灘上戰鬥",
  "不錯，但非拾遺之才",
  "你可以跑，但無處藏身",
  "一期一會",
  "給他們點真正的好事",
  "我們將一戰到底",
  "現在，我有天秤",
  "贏家只有一個",
  "弱肉強食",
  "你，燃起來了嗎？",
  "決一死戰",
  "輓歌 奏起吧",
  "那本會是一場災難",
  "死而復生",
  "俄羅斯將來歡迎你",
  "熱血，辛勞，眼淚和汗水",
  "給英勇的士兵更多武器",
  "我等候在兵營門旁",
  "我心牽掛後方",
  "假如明天戰爭",
  "我們還會相遇",
  "清楚明白",
  "我們應速戰速決",
  "完蛋",
  "我親愛的朋友",
  "引擎加速",
  "屬於你們的節日終將到來",
  "很有啟發性",
  "普通崛起",
  "需要幫忙嗎？",
  "我打錯了",
  "看我的",
  "至少你嘗試過",
  "到我懷裡來",
  "我要瘋了",
  "轉瞬即逝",
  "發生什麼事了？",
  "給我看點新花樣",
  "美味！",
  "你這可憐蟲",
  "菲言厚行",
  "生有涯，藝無涯",
  "欸，欸，噢！",
  "為何拼殺，為何赴死？",
  "再次向突破口沖鋒",
  "不見棺材不落淚",
  "沙漠之狐向您致敬",
  "赴死之時",
  "冷酷無情的敵人",
  "軟肋",
  "就此肅滅",
  "笑死了，菜鳥",
  "虎！虎！虎！",
  "望勝者實至名歸",
  "此即吾衛",
  "長揖而終",
  "七上八下",
  "保持冷靜，繼續前行",
  "你累了嗎，士兵？",
  "後勤在幹嘛？",
  "萬歲",
  "勝利屬於人民",
  "天佑吾王！",
  "力量換取和平",
  "狂熱而無用的抵抗",
  "一步也不許後退！",
  "人生幾何",
  "了不起的蓋茨比",
  "此戰值得銘記",
  "向著勝利前進！",
  "最光輝的時刻",
  "因利益而集結",
  "幹得好，長官",
  "一切按計畫進行",
];

const buttonLabels = [
  "自刎歸天",
  "是啊吃什麼",
  "亂世害了你啊",
  "這就不奇怪了",
  "呱",
  "不求同生但求不死",
  "寧我負人勿人負我",
  "恭喜爹可以撐地了",
  "換大盞",
  "接著奏樂接著舞",
  "你走了我們吃什麼",
];

const imageSources = [
  "images/image-01.jpg.jpg",
  "images/image-02.jpg.jpg",
  "images/image-03.jpg.jpg",
  "images/image-04.jpg.jpg",
  "images/image-05.jpg.jpg",
  "images/image-06.jpg.avif",
  "images/image-07.jpg.jpg",
  "images/image-08.jpg.jpg",
  "images/image-09.jpg.jpg",
  "images/image-10.jpg.jpg",
  "images/image-11.jpg.jpg",
  "images/image-12.jpg.avif",
];

const quoteText = document.getElementById("quoteText");
const quoteScreen = document.getElementById("quoteScreen");
const btnText = document.getElementById("btnText");
const actionBtn = document.getElementById("actionBtn");
const autoToggle = document.getElementById("autoToggle");
const toggleIcon = document.getElementById("toggleIcon");
const toggleLabel = document.getElementById("toggleLabel");
const speedRange = document.getElementById("speedRange");
const speedValue = document.getElementById("speedValue");
const imageProgress = document.getElementById("imageProgress");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");

const fadeDuration = 260;
let lastQuote = "";
let lastButtonLabel = "";
let lastImage = "";
let quoteQueue = [];
let buttonQueue = [];
let imageQueue = [];
let isAnimating = false;
let autoTimer = null;
let autoInterval = 3200;
let imageEnabled = true;
let stepCount = 0;
const stepsToImage = 5;

function formatQuote(text) {
  return `「${text}」`;
}

function shuffleArray(items) {
  const array = [...items];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function refillQuoteQueue() {
  quoteQueue = shuffleArray(quotes);
  if (quoteQueue.length > 1 && quoteQueue[0] === lastQuote) {
    [quoteQueue[0], quoteQueue[1]] = [quoteQueue[1], quoteQueue[0]];
  }
}

function refillButtonQueue() {
  buttonQueue = shuffleArray(buttonLabels);
  if (buttonQueue.length > 1 && buttonQueue[0] === lastButtonLabel) {
    [buttonQueue[0], buttonQueue[1]] = [buttonQueue[1], buttonQueue[0]];
  }
}

function refillImageQueue() {
  imageQueue = shuffleArray(imageSources);
  if (imageQueue.length > 1 && imageQueue[0] === lastImage) {
    [imageQueue[0], imageQueue[1]] = [imageQueue[1], imageQueue[0]];
  }
}

function getNextQuote() {
  if (quoteQueue.length === 0) {
    refillQuoteQueue();
  }
  const next = quoteQueue.shift();
  lastQuote = next;
  return next;
}

function getNextButtonLabel() {
  if (buttonQueue.length === 0) {
    refillButtonQueue();
  }
  const next = buttonQueue.shift();
  lastButtonLabel = next;
  return next;
}

function getNextImage() {
  if (imageQueue.length === 0) {
    refillImageQueue();
  }
  const next = imageQueue.shift();
  lastImage = next;
  return next;
}

function fadeSwap(element, nextText) {
  element.classList.add("is-fading");
  window.setTimeout(() => {
    element.textContent = nextText;
    element.classList.remove("is-fading");
  }, fadeDuration);
}

function showImageBurst() {
  const img = document.createElement("img");
  img.src = getNextImage();
  img.alt = "";
  img.className = "image-burst";
  img.setAttribute("aria-hidden", "true");
  quoteScreen.appendChild(img);
  img.addEventListener(
    "animationend",
    () => {
      img.remove();
    },
    { once: true }
  );
}

function updateProgress() {
  const percent = (stepCount / stepsToImage) * 100;
  progressFill.style.width = `${percent}%`;
  progressText.textContent = `${stepCount}/${stepsToImage}`;
}

function advanceImageCounter() {
  stepCount += 1;
  if (stepCount >= stepsToImage) {
    if (imageEnabled) {
      showImageBurst();
    }
    updateProgress();
    stepCount = 0;
    window.setTimeout(() => {
      updateProgress();
    }, 220);
    return;
  }
  updateProgress();
}

function toggleImageEnabled() {
  imageEnabled = !imageEnabled;
  imageProgress.classList.toggle("is-paused", !imageEnabled);
  imageProgress.setAttribute("aria-pressed", String(imageEnabled));
}

function handleClick() {
  if (isAnimating) return;
  isAnimating = true;

  const nextQuote = formatQuote(getNextQuote());
  const nextLabel = getNextButtonLabel();

  fadeSwap(quoteText, nextQuote);
  fadeSwap(btnText, nextLabel);
  advanceImageCounter();

  window.setTimeout(() => {
    isAnimating = false;
  }, fadeDuration * 2 + 20);
}

function setAutoState(isPlaying) {
  autoToggle.setAttribute("aria-pressed", String(isPlaying));
  toggleIcon.textContent = isPlaying ? "⏸" : "▶";
  toggleLabel.textContent = isPlaying ? "自動輪播：播放中" : "自動輪播：已暫停";
}

function startAuto() {
  if (autoTimer) return;
  setAutoState(true);
  autoTimer = window.setInterval(() => {
    handleClick();
  }, autoInterval);
}

function stopAuto() {
  if (!autoTimer) return;
  window.clearInterval(autoTimer);
  autoTimer = null;
  setAutoState(false);
}

function toggleAuto() {
  if (autoTimer) {
    stopAuto();
  } else {
    startAuto();
  }
}

function updateSpeedDisplay(seconds) {
  speedValue.textContent = seconds.toFixed(1);
}

function updateAutoInterval(seconds) {
  autoInterval = Math.round(seconds * 100) / 100 * 1000;
  if (autoTimer) {
    stopAuto();
    startAuto();
  }
}

function init() {
  quoteText.textContent = formatQuote(getNextQuote());
  btnText.textContent = getNextButtonLabel();
  setAutoState(false);
  imageProgress.classList.toggle("is-paused", !imageEnabled);
  imageProgress.setAttribute("aria-pressed", String(imageEnabled));
  updateSpeedDisplay(parseFloat(speedRange.value));
  updateProgress();
}

actionBtn.addEventListener("click", handleClick);
autoToggle.addEventListener("click", toggleAuto);
imageProgress.addEventListener("click", toggleImageEnabled);
speedRange.addEventListener("input", (event) => {
  const seconds = parseFloat(event.target.value);
  if (Number.isNaN(seconds)) return;
  updateSpeedDisplay(seconds);
  updateAutoInterval(seconds);
});

init();
