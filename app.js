const store = {
  name: "蓝珀咖啡·旺咖工厂店",
  address: "浙江省绍兴市越城区富盛镇上旺村文化产业园",
  masterWx: "sandlabs",
  mapUrl: "https://uri.amap.com/search?keyword=%E8%93%9D%E7%8F%80%E5%92%96%E5%95%A1%C2%B7%E6%97%BA%E5%92%96%E5%B7%A5%E5%8E%82%E5%BA%97%20%E7%BB%8D%E5%85%B4%E5%B8%82%E8%B6%8A%E5%9F%8E%E5%8C%BA%E5%AF%8C%E7%9B%9B%E9%95%87%E4%B8%8A%E6%97%BA%E6%9D%91%E6%96%87%E5%8C%96%E4%BA%A7%E4%B8%9A%E5%9B%AD&city=%E7%BB%8D%E5%85%B4&callnative=1",
};

const projects = {
  factory: {
    label: "工厂参观",
    tag: "工厂",
    time: "周六 14:00-16:30",
    desc: "看烘焙机、闻熟豆香、做一次杯测，把咖啡从生豆讲到出杯。",
    prep: (n) => [`迎宾冰美式 ${n} 杯`, `杯测杯 ${n * 3} 只`, `体验熟豆约 ${n * 45}g`, `讲解席位 ${n} 个`],
  },
  brew: {
    label: "手冲咖啡入门",
    tag: "手冲",
    time: "周二 10:30 / 周五 14:30",
    desc: "从研磨、水温、注水节奏开始，新手也能冲出一杯稳定的甜感。",
    prep: (n) => [`手冲豆约 ${n * 40}g`, `滤纸 ${n * 3} 张`, `分享杯 ${n * 2} 只`, `参数卡 ${n} 张`],
  },
  latte: {
    label: "意式拉花体验",
    tag: "拉花",
    time: "周三 14:30-16:00",
    desc: "练奶泡、心形和郁金香，带走一张在绍兴村里拍的咖啡照片。",
    prep: (n) => [`牛奶约 ${n * 450}ml`, `意式浓缩豆约 ${n * 36}g`, `练习杯 ${n * 2} 杯`, `拉花缸 / 杯具 ${n} 套`],
  },
  route: {
    label: "村路补给打卡",
    tag: "路线",
    time: "周日 09:30-12:00",
    desc: "适合公路车、摩托和自驾，工厂中转补给，再去上旺村走一圈。",
    prep: (n) => [`冰美式 / 补给饮品 ${n} 杯`, `饮用水 ${n} 瓶`, `打卡章卡 ${n} 张`, `停车 / 骑行停靠位 ${Math.ceil(n / 2)} 组`],
  },
};

const week = [
  ["周一", "咖啡知识入门", "10:30", "认识产区、处理法、风味轮", "factory"],
  ["周二", "手冲咖啡培训", "10:30", "研磨、水温、注水节奏", "brew"],
  ["周三", "意式拉花体验", "14:30", "打奶泡、心形、郁金香", "latte"],
  ["周四", "绍兴风物手作", "10:30", "挂耳包、香气瓶、咖啡渣手作", "factory"],
  ["周五", "社群杯测小局", "14:30", "3 支豆盲喝，投票选下周豆单", "brew"],
  ["周六", "工厂参观开放日", "14:00", "烘焙机演示、仓储参观、主理人答疑", "factory"],
  ["周日", "村路补给打卡", "09:30", "骑行、摩托、自驾中转补给", "route"],
];

const cultures = {
  mountain: {
    title: "会稽山风：适合深呼吸的第一口",
    text: "山线不抢戏，只在远处把一天托住。适合做工厂参观的开场：先看豆子，再喝一口清爽的冰美式。",
    items: ["山野冷萃", "工厂开放日", "村口合影点"],
  },
  boat: {
    title: "乌篷船慢：把行程放轻一点",
    text: "绍兴的慢不是无聊，是让人愿意停。旺咖把这种节奏变成休息位、盖章卡和一段不用赶路的村路。",
    items: ["盖章休息", "慢行路线", "周末补给"],
  },
  stone: {
    title: "青石板路：适合走一圈再回来",
    text: "喝完咖啡，不急着走。沿着村里走一圈，看老墙、树影和田边风，再回来带一袋熟豆回家。",
    items: ["村里散步", "手冲入门", "挂耳伴手礼"],
  },
  wine: {
    title: "黄酒风物：给咖啡一点绍兴记忆",
    text: "黄酒、梅干菜、老街和社戏，是绍兴人的味觉底色。咖啡不必模仿它们，但可以借它们讲出本地生活。",
    items: ["风味杯测", "在地甜点", "主理人故事"],
  },
};

const nearbyPlaces = {
  tea: {
    label: "富盛抹茶小镇 / 御茶村",
    time: "适合咖啡后 1-2 小时",
    mood: "茶园、抹茶、宋韵风物",
    desc: "富盛有成熟的抹茶产业和茶园风景，适合把“咖啡工厂”接到“茶乡风物”：上午看茶园，下午回旺咖做杯测或手冲。",
    tips: ["适合亲子和朋友拍照", "可做咖啡×抹茶联名活动", "建议出发前确认开放时间"],
  },
  village: {
    label: "上旺村慢走",
    time: "咖啡后 30-60 分钟",
    mood: "村路、陈列馆、创业精神",
    desc: "上旺村本身就有艰苦创业和乡村振兴的故事。喝完冰美式，沿村路走一圈，看村史、田边风和老物件，体验会更完整。",
    tips: ["适合盖章路线", "适合主理人带走讲解", "下雨天也能做短路线"],
  },
  song: {
    label: "宋六陵方向",
    time: "适合半日延展",
    mood: "宋韵、人文、茶山",
    desc: "富盛一带有深厚宋韵文脉，宋六陵和茶山可以把“绍兴的历史感”接到咖啡体验里，适合做更安静的人文路线。",
    tips: ["适合自驾串联", "适合做宋韵咖啡主题", "建议选择白天出行"],
  },
  ride: {
    label: "村路骑行 / 摩托中转",
    time: "周日 09:30 更适合",
    mood: "补水、盖章、休息",
    desc: "旺咖可以做路线中转站：补一杯冰美式，补水，盖章，停靠休息，再继续往茶园、山线或村路走。",
    tips: ["准备饮用水和停车位", "可做骑行章卡", "适合小队预约"],
  },
};

const scenes = {
  morning: {
    note: "雾气从山边升起，第一杯冰美式把周末叫醒",
  },
  road: {
    note: "车停在工厂门口，补水、盖章、继续往茶园方向走",
  },
  dusk: {
    note: "带着咖啡香和村路的风，慢慢回到绍兴城里",
  },
};

const stamps = {
  coffee: {
    label: "冰美式补给",
    title: "第一枚章：补一杯清醒",
    text: "到旺咖先点一杯冰美式，坐下来十分钟，行程就从赶路变成停留。",
  },
  factory: {
    label: "工厂参观",
    title: "第二枚章：看见咖啡从哪里来",
    text: "看烘焙机、闻熟豆香、做一次杯测，咖啡会从饮品变成有来处的故事。",
  },
  village: {
    label: "村里走一圈",
    title: "第三枚章：把上旺村走进记忆里",
    text: "沿着村路慢慢走，看山线、田边风和老物件，别急着赶下一站。",
  },
  route: {
    label: "路线合作",
    title: "第四枚章：把旺咖变成中转站",
    text: "适合骑行、摩托、自驾小队，把补给、盖章和村游串成固定路线。",
  },
};

const storedPassport = JSON.parse(localStorage.getItem("lapisPassport") || "[]");

const game = {
  canvas: null,
  ctx: null,
  width: 900,
  height: 620,
  cupX: 450,
  score: 0,
  timeLeft: 30,
  running: false,
  lastTick: 0,
  lastSpawn: 0,
  objects: [],
  keys: new Set(),
};

const state = {
  selectedProject: "factory",
  selectedCulture: "mountain",
  selectedNearby: "tea",
  selectedScene: "morning",
  passport: Array.isArray(storedPassport) ? storedPassport : [],
  people: 2,
  bookings: JSON.parse(localStorage.getItem("lapisBookings") || "[]"),
};

function $(selector) {
  return document.querySelector(selector);
}

function showToast(text) {
  const toast = $("#toast");
  toast.textContent = text;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}

async function copyText(text, okText = "已复制") {
  try {
    await navigator.clipboard.writeText(text);
    showToast(okText);
  } catch (error) {
    showToast("浏览器不支持自动复制，请手动复制");
  }
}

function gameRank(score) {
  if (score >= 260) return "村路冠军";
  if (score >= 170) return "金杯手冲";
  if (score >= 90) return "冰美式补给";
  return "待开始";
}

function updateGameHud() {
  $("#gameScore").textContent = game.score;
  $("#gameTime").textContent = Math.max(0, Math.ceil(game.timeLeft));
  $("#gameRank").textContent = gameRank(game.score);
}

function drawCup(ctx, x, y) {
  ctx.save();
  ctx.translate(x, y);
  ctx.fillStyle = "#fffdf8";
  ctx.shadowColor = "rgba(0,0,0,0.28)";
  ctx.shadowBlur = 18;
  ctx.beginPath();
  ctx.roundRect(-54, -22, 108, 54, 18);
  ctx.fill();
  ctx.shadowBlur = 0;
  ctx.strokeStyle = "#d99a3d";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(58, 2, 18, -Math.PI / 2, Math.PI / 2);
  ctx.stroke();
  ctx.fillStyle = "#203b34";
  ctx.font = "900 18px system-ui";
  ctx.textAlign = "center";
  ctx.fillText("旺咖", 0, 12);
  ctx.restore();
}

function drawBean(ctx, item) {
  ctx.save();
  ctx.translate(item.x, item.y);
  ctx.rotate(item.rotation);
  const gradient = ctx.createLinearGradient(-10, 0, 10, 0);
  gradient.addColorStop(0, item.kind === "gold" ? "#f0bf55" : "#8a4d25");
  gradient.addColorStop(0.48, item.kind === "gold" ? "#fff2b8" : "#2f241c");
  gradient.addColorStop(0.52, item.kind === "gold" ? "#b87922" : "#b87333");
  gradient.addColorStop(1, item.kind === "gold" ? "#d99a3d" : "#5f351e");
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.ellipse(0, 0, item.radius * 0.72, item.radius, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawDrop(ctx, item) {
  ctx.save();
  ctx.translate(item.x, item.y);
  ctx.fillStyle = "#26342f";
  ctx.beginPath();
  ctx.moveTo(0, -item.radius);
  ctx.bezierCurveTo(item.radius, -2, item.radius * 0.8, item.radius, 0, item.radius);
  ctx.bezierCurveTo(-item.radius * 0.8, item.radius, -item.radius, -2, 0, -item.radius);
  ctx.fill();
  ctx.restore();
}

function drawGame() {
  if (!game.ctx) return;
  const ctx = game.ctx;
  ctx.clearRect(0, 0, game.width, game.height);

  const sky = ctx.createLinearGradient(0, 0, game.width, game.height);
  sky.addColorStop(0, "#17231d");
  sky.addColorStop(0.48, "#203b34");
  sky.addColorStop(1, "#806238");
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, game.width, game.height);

  ctx.fillStyle = "rgba(255,253,248,0.08)";
  for (let i = 0; i < 32; i += 1) {
    const x = (i * 97) % game.width;
    const y = (i * 53) % (game.height * 0.55);
    ctx.beginPath();
    ctx.arc(x, y, (i % 3) + 1, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.fillStyle = "#4f744c";
  ctx.beginPath();
  ctx.moveTo(0, game.height * 0.68);
  ctx.lineTo(game.width * 0.18, game.height * 0.42);
  ctx.lineTo(game.width * 0.36, game.height * 0.63);
  ctx.lineTo(game.width * 0.54, game.height * 0.35);
  ctx.lineTo(game.width * 0.74, game.height * 0.65);
  ctx.lineTo(game.width, game.height * 0.44);
  ctx.lineTo(game.width, game.height);
  ctx.lineTo(0, game.height);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "rgba(255,253,248,0.12)";
  ctx.fillRect(0, game.height * 0.72, game.width, 3);
  ctx.fillRect(0, game.height * 0.78, game.width, 2);

  game.objects.forEach((item) => {
    if (item.type === "drop") drawDrop(ctx, item);
    else drawBean(ctx, item);
  });

  drawCup(ctx, game.cupX, game.height - 54);
}

function resizeGameCanvas() {
  if (!game.canvas) return;
  const rect = game.canvas.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  game.canvas.width = Math.floor(rect.width * dpr);
  game.canvas.height = Math.floor(rect.height * dpr);
  game.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  game.width = rect.width;
  game.height = rect.height;
  game.cupX = Math.min(Math.max(game.cupX, 58), game.width - 58);
  drawGame();
}

function spawnGameObject() {
  const roll = Math.random();
  const type = roll > 0.78 ? "drop" : "bean";
  game.objects.push({
    type,
    kind: roll < 0.12 ? "gold" : "normal",
    x: 36 + Math.random() * (game.width - 72),
    y: -30,
    radius: type === "drop" ? 15 : 18,
    speed: type === "drop" ? 230 + Math.random() * 90 : 160 + Math.random() * 110,
    rotation: Math.random() * Math.PI,
  });
}

function finishGame() {
  game.running = false;
  $("#gameOverlay").textContent = `${gameRank(game.score)} · ${game.score} 分`;
  $("#gameOverlay").classList.add("show");
  showToast(`挑战完成：${game.score} 分`);
}

function gameLoop(timestamp) {
  if (!game.running) return;
  const delta = Math.min((timestamp - game.lastTick) / 1000, 0.04);
  game.lastTick = timestamp;
  game.timeLeft -= delta;

  if (game.keys.has("ArrowLeft")) game.cupX -= 360 * delta;
  if (game.keys.has("ArrowRight")) game.cupX += 360 * delta;
  game.cupX = Math.min(Math.max(game.cupX, 58), game.width - 58);

  if (timestamp - game.lastSpawn > 520) {
    spawnGameObject();
    if (game.score > 120 && Math.random() > 0.45) spawnGameObject();
    game.lastSpawn = timestamp;
  }

  const cupY = game.height - 54;
  game.objects = game.objects.filter((item) => {
    item.y += item.speed * delta;
    item.rotation += delta * 1.8;
    const caught = Math.abs(item.x - game.cupX) < 62 && Math.abs(item.y - cupY) < 42;
    if (caught) {
      if (item.type === "drop") {
        game.score = Math.max(0, game.score - 18);
      } else {
        game.score += item.kind === "gold" ? 28 : 12;
      }
      return false;
    }
    return item.y < game.height + 40;
  });

  updateGameHud();
  drawGame();

  if (game.timeLeft <= 0) {
    finishGame();
    return;
  }
  requestAnimationFrame(gameLoop);
}

function startGame() {
  game.score = 0;
  game.timeLeft = 30;
  game.objects = [];
  game.running = true;
  game.lastTick = performance.now();
  game.lastSpawn = 0;
  $("#gameOverlay").classList.remove("show");
  updateGameHud();
  requestAnimationFrame(gameLoop);
}

function setupGame() {
  game.canvas = $("#coffeeGame");
  if (!game.canvas) return;
  game.ctx = game.canvas.getContext("2d");
  game.cupX = game.width / 2;
  resizeGameCanvas();
  updateGameHud();
  $("#gameOverlay").classList.add("show");

  game.canvas.addEventListener("pointermove", (event) => {
    const rect = game.canvas.getBoundingClientRect();
    game.cupX = Math.min(Math.max(event.clientX - rect.left, 58), game.width - 58);
    drawGame();
  });
  game.canvas.addEventListener("pointerdown", (event) => {
    const rect = game.canvas.getBoundingClientRect();
    game.cupX = Math.min(Math.max(event.clientX - rect.left, 58), game.width - 58);
    if (!game.running) startGame();
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") game.keys.add(event.key);
  });
  window.addEventListener("keyup", (event) => game.keys.delete(event.key));
  window.addEventListener("resize", resizeGameCanvas);
  $("#startGame")?.addEventListener("click", startGame);
}

function renderNotices() {
  const notices = [
    ["周六", "工厂开放日", "14:00-16:30", "factory", "预约"],
    ["周日", "村路补给打卡", "09:30-12:00", "route", "报名"],
    ["平日", "白天咖啡课", "10:30-15:30", "brew", "提醒"],
  ];
  $("#noticeList").innerHTML = notices.map(([type, title, time, project, action]) => `
    <div class="notice">
      <span class="tag">${type}</span>
      <div>
        <strong>${title}</strong>
        <small>${time}</small>
      </div>
      <button data-book="${project}">${action}</button>
    </div>
  `).join("");
}

function renderWeek() {
  $("#weekGrid").innerHTML = week.map(([day, title, time, desc, project]) => `
    <button class="week-card ${project === state.selectedProject ? "active" : ""}" data-project="${project}">
      <span class="week-day">${day}</span>
      <span>
        <strong>${title}</strong>
        <small>${time} · ${desc}</small>
      </span>
    </button>
  `).join("");
}

function renderProjects() {
  $("#projectCards").innerHTML = Object.entries(projects).map(([key, item]) => `
    <button class="project-card" data-project="${key}">
      <span class="tag">${item.tag}</span>
      <strong>${item.label}</strong>
      <p>${item.desc}</p>
    </button>
  `).join("");
  $("#projectSelect").innerHTML = Object.entries(projects).map(([key, item]) => `
    <option value="${key}">${item.label} · ${item.time}</option>
  `).join("");
}

function renderCulture() {
  const culture = cultures[state.selectedCulture];
  $("#culturePanel").innerHTML = `
    <div class="culture-art"><span>${culture.items[0]}</span></div>
    <h3>${culture.title}</h3>
    <p>${culture.text}</p>
    <div class="mini-tags">${culture.items.map((item) => `<span>${item}</span>`).join("")}</div>
  `;
  document.querySelectorAll(".culture").forEach((btn) => btn.classList.toggle("active", btn.dataset.culture === state.selectedCulture));
}

function renderNearby() {
  const place = nearbyPlaces[state.selectedNearby];
  $("#nearbyTabs").innerHTML = Object.entries(nearbyPlaces).map(([key, item]) => `
    <button class="nearby-tab ${key === state.selectedNearby ? "active" : ""}" data-nearby="${key}">${item.label}</button>
  `).join("");
  $("#nearbyDetail").innerHTML = `
    <p class="eyebrow">${place.time}</p>
    <h3>${place.label}</h3>
    <strong>${place.mood}</strong>
    <p>${place.desc}</p>
    <ul>${place.tips.map((tip) => `<li>${tip}</li>`).join("")}</ul>
  `;
  document.querySelectorAll(".map-pin").forEach((pin) => pin.classList.toggle("active", pin.dataset.nearby === state.selectedNearby));
}

function renderScene() {
  const scene = scenes[state.selectedScene];
  $("#heroScene").className = `hero-scene scene-${state.selectedScene}`;
  $("#sceneNote").textContent = scene.note;
  document.querySelectorAll(".scene-chip").forEach((btn) => btn.classList.toggle("active", btn.dataset.scene === state.selectedScene));
}

function renderPassport() {
  const completed = state.passport.length;
  $("#passportProgress").textContent = `${completed} / ${Object.keys(stamps).length}`;
  $("#stampGrid").innerHTML = Object.entries(stamps).map(([key, stamp]) => {
    const active = state.passport.includes(key);
    return `
      <button class="stamp-card ${active ? "stamped" : ""}" data-stamp="${key}">
        <span>${active ? "已盖章" : "待完成"}</span>
        <strong>${stamp.label}</strong>
      </button>
    `;
  }).join("");

  const latestKey = state.passport[state.passport.length - 1] || "coffee";
  const latest = stamps[latestKey];
  const done = completed === Object.keys(stamps).length;
  $("#passportTitle").textContent = done ? "四枚章集齐，可以发起一条社群路线了" : latest.title;
  $("#passportText").textContent = done
    ? "这套玩法已经具备线下落地的样子：章卡、补给、路线合作、活动报名都能串起来。"
    : latest.text;
}

function updatePrep() {
  const project = projects[state.selectedProject];
  const people = Math.max(1, Number($("#peopleInput").value || state.people));
  state.people = people;
  $("#projectSelect").value = state.selectedProject;
  $("#prepList").innerHTML = project.prep(people).map((item) => `<li>${item}</li>`).join("");
  const total = state.bookings.reduce((sum, item) => sum + Number(item.people || 0), 0);
  $("#prepCount").textContent = `${total} 人`;
}

function selectProject(project) {
  state.selectedProject = project;
  renderWeek();
  updatePrep();
  document.querySelectorAll(".mood").forEach((btn) => btn.classList.toggle("active", btn.dataset.mood === project));
}

function makeBookingMessage(data) {
  const project = projects[data.project];
  return [
    `蓝珀活动预约：${project.label}`,
    `时间：${project.time}`,
    `门店：${store.name}`,
    `地址：${store.address}`,
    `人数：${data.people}人`,
    `联系人：${data.name}`,
    `手机：${data.phone}`,
    `备注：${data.note || "无"}`,
    "",
    "门店提前2天准备：",
    project.prep(data.people).map((item) => `- ${item}`).join("\n"),
  ].join("\n");
}

function submitBooking(event) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const data = {
    project: form.get("project"),
    people: Number(form.get("people") || 1),
    name: String(form.get("name") || "").trim(),
    phone: String(form.get("phone") || "").trim(),
    note: String(form.get("note") || "").trim(),
    createdAt: new Date().toISOString(),
  };
  if (!data.name || !data.phone) {
    showToast("请填写联系人和手机");
    return;
  }
  state.bookings.push(data);
  localStorage.setItem("lapisBookings", JSON.stringify(state.bookings));
  updatePrep();
  copyText(makeBookingMessage(data), "预约信息已复制");
}

function bindEvents() {
  document.body.addEventListener("click", (event) => {
    const scrollTarget = event.target.closest("[data-scroll]");
    if (scrollTarget) {
      document.querySelector(scrollTarget.dataset.scroll).scrollIntoView({ behavior: "smooth" });
      return;
    }

    const book = event.target.closest("[data-book]");
    if (book) {
      selectProject(book.dataset.book);
      $("#booking").scrollIntoView({ behavior: "smooth" });
      return;
    }

    const project = event.target.closest("[data-project]");
    if (project) {
      selectProject(project.dataset.project);
      return;
    }

    const mood = event.target.closest("[data-mood]");
    if (mood) {
      selectProject(mood.dataset.mood);
      $("#booking").scrollIntoView({ behavior: "smooth" });
      return;
    }

    const culture = event.target.closest("[data-culture]");
    if (culture) {
      state.selectedCulture = culture.dataset.culture;
      renderCulture();
      return;
    }

    const nearby = event.target.closest("[data-nearby]");
    if (nearby) {
      state.selectedNearby = nearby.dataset.nearby;
      renderNearby();
      return;
    }

    const scene = event.target.closest("[data-scene]");
    if (scene) {
      state.selectedScene = scene.dataset.scene;
      renderScene();
      return;
    }

    const stamp = event.target.closest("[data-stamp]");
    if (stamp) {
      const key = stamp.dataset.stamp;
      if (!state.passport.includes(key)) {
        state.passport.push(key);
        localStorage.setItem("lapisPassport", JSON.stringify(state.passport));
        showToast("电子章已盖上");
      } else {
        showToast("这枚章已经有啦");
      }
      renderPassport();
      return;
    }

    if (event.target.closest("[data-reset-passport]")) {
      state.passport = [];
      localStorage.setItem("lapisPassport", JSON.stringify(state.passport));
      renderPassport();
      showToast("电子章已重置");
      return;
    }

    if (event.target.closest("[data-copy]")) {
      copyText(event.target.closest("[data-copy]").dataset.copy, "主理人微信已复制");
      return;
    }

    if (event.target.closest("[data-map]")) {
      copyText(`${store.name}\n${store.address}\n高德地图：${store.mapUrl}`, "高德导航已复制");
      return;
    }

    if (event.target.closest("[data-copy-address]")) {
      copyText(store.address, "地址已复制");
    }
  });

  $("#projectSelect").addEventListener("change", (event) => selectProject(event.target.value));
  $("#peopleInput").addEventListener("input", updatePrep);
  $("#bookingForm").addEventListener("submit", submitBooking);
}

renderNotices();
renderProjects();
renderWeek();
renderCulture();
renderNearby();
renderScene();
renderPassport();
setupGame();
bindEvents();
selectProject(state.selectedProject);
