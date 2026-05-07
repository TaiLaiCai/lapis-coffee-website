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
    desc: "烘焙演示、杯测、仓储参观，把一支豆从生豆讲到出杯。",
    prep: (n) => [`迎宾饮品 ${n} 杯`, `杯测杯 ${n * 3} 只`, `体验熟豆约 ${n * 45}g`, `讲解席位 ${n} 个`],
  },
  brew: {
    label: "手冲培训",
    tag: "手冲",
    time: "周二 14:00",
    desc: "研磨、水温、注水节奏，新手也能冲出一杯稳定的甜感。",
    prep: (n) => [`手冲豆约 ${n * 40}g`, `滤纸 ${n * 3} 张`, `分享杯 ${n * 2} 只`, `参数卡 ${n} 张`],
  },
  latte: {
    label: "意式拉花",
    tag: "拉花",
    time: "周三 14:30",
    desc: "打奶泡、心形、郁金香，练两杯，带走一张好看的照片。",
    prep: (n) => [`牛奶约 ${n * 450}ml`, `意式浓缩豆约 ${n * 36}g`, `练习杯 ${n * 2} 杯`, `拉花缸 / 杯具 ${n} 套`],
  },
  route: {
    label: "乡村打卡路线",
    tag: "路线",
    time: "周日 09:30-12:00",
    desc: "适合公路车、摩托和自驾，工厂中转补给，再去村里打卡。",
    prep: (n) => [`冰美式 / 补给饮品 ${n} 杯`, `饮用水 ${n} 瓶`, `打卡章卡 ${n} 张`, `停车 / 骑行停靠位 ${Math.ceil(n / 2)} 组`],
  },
};

const week = [
  ["周一", "咖啡知识入门", "10:30", "认识产区、处理法、风味轮", "factory"],
  ["周二", "手冲咖啡培训", "14:00", "研磨、水温、注水节奏", "brew"],
  ["周三", "意式拉花体验", "14:30", "打奶泡、心形、郁金香", "latte"],
  ["周四", "手工体验课", "10:30", "挂耳包、香气瓶、咖啡渣手作", "factory"],
  ["周五", "社群杯测小局", "15:00", "3 支豆盲喝，投票选下周豆单", "brew"],
  ["周六", "工厂参观开放日", "14:00", "烘焙机演示、仓储参观、主理人答疑", "factory"],
  ["周日", "乡村咖啡打卡", "09:30", "骑行、摩托、自驾中转补给", "route"],
];

const products = [
  {
    name: "精品 SOE 意式烘焙豆",
    notes: "深烘 · 坚果 · 奶油 · 醇厚",
    price: "¥155",
    image: "./assets/products/lapis-soe-italian-454.png",
  },
  {
    name: "蓝山风味挂耳咖啡",
    notes: "中烘 · 莓果 · 杏仁 · 焦糖",
    price: "¥78",
    image: "./assets/products/lapis-blue-mountain-drip.png",
  },
  {
    name: "蓝珀红日焙炒 AAA 咖啡豆",
    notes: "中烘 · 菠萝蜜 · 莓果 · 红酒",
    price: "¥118",
    image: "./assets/products/lapis-redsun-aaa-227.png",
  },
  {
    name: "HOLOHOLO 联名植绒礼盒",
    notes: "8袋挂耳 · 精美水杯 · 礼赠",
    price: "¥356",
    image: "./assets/products/lapis-holoholo-gift.png",
  },
];

const state = {
  selectedProject: "factory",
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

function renderNotices() {
  const notices = [
    ["周六", "工厂开放日", "14:00-16:30", "factory", "预约"],
    ["周日", "乡村咖啡打卡", "09:30-12:00", "route", "报名"],
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

function renderProducts() {
  $("#products").innerHTML = products.map((item) => `
    <article class="product">
      <div class="product-img"><img src="${item.image}" alt="${item.name}" /></div>
      <div class="product-body">
        <strong>${item.name}</strong>
        <p>${item.notes}</p>
        <div class="price">${item.price}</div>
      </div>
    </article>
  `).join("");
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
renderProducts();
renderWeek();
bindEvents();
selectProject(state.selectedProject);
