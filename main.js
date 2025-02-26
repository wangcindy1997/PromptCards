/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// testData.ts
var testData_exports = {};
__export(testData_exports, {
  testPrompts: () => testPrompts
});
var testPrompts;
var init_testData = __esm({
  "testData.ts"() {
    testPrompts = [
      {
        id: "1",
        title: "\u7FFB\u8BD1\u52A9\u7406",
        content: "\u4F60\u662F\u4E00\u4F4D\u4E13\u4E1A\u7684\u7FFB\u8BD1\u52A9\u7406\uFF0C\u8BF7\u5E2E\u6211\u5C06\u4EE5\u4E0B\u5185\u5BB9\u7FFB\u8BD1\u6210\u4E2D\u6587/\u82F1\u6587\uFF0C\u4FDD\u6301\u539F\u6587\u7684\u8BED\u6C14\u548C\u98CE\u683C\u3002",
        tags: ["\u7FFB\u8BD1", "\u8BED\u8A00"],
        category: "\u8BED\u8A00"
      },
      {
        id: "2",
        title: "\u4EE3\u7801\u4F18\u5316",
        content: "\u8BF7\u5E2E\u6211\u4F18\u5316\u4EE5\u4E0B\u4EE3\u7801\uFF0C\u63D0\u9AD8\u5176\u6027\u80FD\u548C\u53EF\u8BFB\u6027\uFF0C\u5E76\u8BF4\u660E\u4F18\u5316\u7684\u539F\u56E0\u3002",
        tags: ["\u7F16\u7A0B", "\u4F18\u5316"],
        category: "\u7F16\u7A0B"
      },
      {
        id: "3",
        title: "\u5199\u4F5C\u52A9\u624B",
        content: "\u4F60\u662F\u4E00\u4F4D\u4E13\u4E1A\u7684\u5199\u4F5C\u52A9\u624B\uFF0C\u8BF7\u5E2E\u6211\u4FEE\u6539\u4EE5\u4E0B\u6587\u7AE0\uFF0C\u4F7F\u5176\u66F4\u52A0\u6D41\u7545\u81EA\u7136\u3002",
        tags: ["\u5199\u4F5C", "\u7F16\u8F91"],
        category: "\u5199\u4F5C"
      }
    ];
  }
});

// main.ts
var main_exports = {};
__export(main_exports, {
  VIEW_TYPE_PROMPT_CARDS: () => VIEW_TYPE_PROMPT_CARDS,
  default: () => PromptCardsPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian5 = require("obsidian");

// view.ts
var import_obsidian2 = require("obsidian");

// modal.ts
var import_obsidian = require("obsidian");
var PromptModal = class extends import_obsidian.Modal {
  constructor(app, onSubmit, initialData) {
    super(app);
    this.title = "";
    this.content = "";
    this.tags = "";
    this.category = "";
    this.onSubmit = onSubmit;
    if (initialData) {
      this.title = initialData.title;
      this.content = initialData.content;
      this.tags = initialData.tags.join(", ");
      this.category = initialData.category || "";
      this.initialData = initialData;
    }
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.empty();
    contentEl.createEl("h2", { text: this.initialData ? "\u7F16\u8F91\u63D0\u793A\u8BCD" : "\u65B0\u5EFA\u63D0\u793A\u8BCD" });
    new import_obsidian.Setting(contentEl).setName("\u6807\u9898").setDesc("\u63D0\u793A\u8BCD\u7684\u6807\u9898").addText((text) => text.setValue(this.title).onChange((value) => this.title = value));
    new import_obsidian.Setting(contentEl).setName("\u5185\u5BB9").setDesc("\u63D0\u793A\u8BCD\u7684\u5177\u4F53\u5185\u5BB9").addTextArea(
      (text) => text.setValue(this.content).onChange((value) => this.content = value).setPlaceholder("\u5728\u6B64\u8F93\u5165\u63D0\u793A\u8BCD\u5185\u5BB9...")
    );
    new import_obsidian.Setting(contentEl).setName("\u6807\u7B7E").setDesc("\u7528\u9017\u53F7\u5206\u9694\u591A\u4E2A\u6807\u7B7E").addText((text) => text.setValue(this.tags).setPlaceholder("\u6807\u7B7E1, \u6807\u7B7E2, ...").onChange((value) => this.tags = value));
    new import_obsidian.Setting(contentEl).setName("\u5206\u7C7B").setDesc("\u63D0\u793A\u8BCD\u7684\u5206\u7C7B\uFF08\u53EF\u9009\uFF09").addText((text) => text.setValue(this.category).setPlaceholder("\u8F93\u5165\u5206\u7C7B\u540D\u79F0").onChange((value) => this.category = value));
    new import_obsidian.Setting(contentEl).addButton((btn) => btn.setButtonText(this.initialData ? "\u4FDD\u5B58" : "\u521B\u5EFA").setCta().onClick(() => {
      if (!this.title || !this.content) {
        return;
      }
      this.onSubmit({
        title: this.title,
        content: this.content,
        tags: this.tags.split(",").map((t) => t.trim()).filter((t) => t),
        category: this.category || void 0
      });
      this.close();
    })).addButton((btn) => btn.setButtonText("\u53D6\u6D88").onClick(() => this.close()));
  }
  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
};

// view.ts
var PromptCardsView = class extends import_obsidian2.ItemView {
  // 声明 handleSearch 属性
  constructor(leaf, promptManager) {
    super(leaf);
    this.currentCategory = null;
    this.promptManager = promptManager;
    this.handleSearch = () => {
      const searchInput = this.containerEl.querySelector(".prompt-search-input");
      const tagSelect = this.containerEl.querySelector(".prompt-tag-select");
      const cardsContainer = this.containerEl.querySelector(".prompt-cards-container");
      if (!searchInput || !tagSelect || !(cardsContainer instanceof HTMLElement)) return;
      const searchTerm = searchInput.value.toLowerCase();
      const selectedTag = tagSelect.value;
      let prompts = this.currentCategory === null ? this.promptManager.getPrompts() : this.promptManager.getPrompts().filter((p) => p.category === this.currentCategory);
      if (selectedTag) {
        prompts = prompts.filter((p) => p.tags.includes(selectedTag));
      }
      if (searchTerm) {
        prompts = prompts.filter(
          (prompt) => prompt.title.toLowerCase().includes(searchTerm) || prompt.content.toLowerCase().includes(searchTerm)
        );
      }
      this.renderCards(cardsContainer, prompts);
    };
  }
  getViewType() {
    return "prompt-cards-view";
  }
  getDisplayText() {
    return "Prompt Cards";
  }
  async onOpen() {
    const container = this.containerEl.children[1];
    container.empty();
    container.createEl("h1", {
      text: "Prompt\u4ED3\u5E93",
      cls: "prompt-title"
    });
    const syncContainer = container.createEl("div", { cls: "sync-buttons-container" });
    const syncToFeishuBtn = syncContainer.createEl("button", {
      text: "\u540C\u6B65\u5230\u98DE\u4E66",
      cls: "sync-button"
    });
    syncToFeishuBtn.addEventListener("click", async () => {
      const plugin = this.app.plugins.plugins["obsidian-prompt-cards"];
      if (plugin) {
        let progressModal;
        const confirm = await new Promise((resolve) => {
          const modal = new import_obsidian2.Modal(this.app);
          modal.contentEl.createEl("h2", { text: "\u786E\u8BA4\u540C\u6B65" });
          modal.contentEl.createEl("p", {
            text: "\u8BE5\u64CD\u4F5C\u5C06\u5B8C\u5168\u8986\u76D6\u98DE\u4E66\u8868\u683C\u4E2D\u7684\u6570\u636E\uFF0C\u8BF7\u6CE8\u610F\u5907\u4EFD\uFF0C\u786E\u5B9A\u7EE7\u7EED\u5417\uFF1F"
          });
          const buttonContainer = modal.contentEl.createEl("div", {
            cls: "prompt-modal-buttons"
          });
          buttonContainer.createEl("button", { text: "\u53D6\u6D88" }).addEventListener("click", () => {
            modal.close();
            resolve(false);
          });
          const confirmBtn = buttonContainer.createEl("button", {
            text: "\u786E\u5B9A",
            cls: "mod-cta"
          });
          confirmBtn.addEventListener("click", () => {
            modal.close();
            resolve(true);
          });
          modal.open();
        });
        if (!confirm) return;
        try {
          new import_obsidian2.Notice("\u5F00\u59CB\u540C\u6B65\u5230\u98DE\u4E66...");
          const prompts = plugin.promptManager.getPrompts();
          progressModal = new import_obsidian2.Modal(this.app);
          progressModal.titleEl.setText("\u540C\u6B65\u8FDB\u5EA6");
          const progressText = progressModal.contentEl.createEl("p");
          progressModal.open();
          plugin.feishuService.onProgress = (current, total, message) => {
            progressText.setText(`${message} (${current}/${total})`);
          };
          await plugin.feishuService.uploadToFeishu(prompts);
          progressModal.close();
          new import_obsidian2.Notice("\u6210\u529F\u540C\u6B65\u5230\u98DE\u4E66");
        } catch (error) {
          console.error("\u540C\u6B65\u5230\u98DE\u4E66\u5931\u8D25:", error);
          new import_obsidian2.Notice("\u540C\u6B65\u5230\u98DE\u4E66\u5931\u8D25: " + (error.message || "\u672A\u77E5\u9519\u8BEF"), 5e3);
          progressModal == null ? void 0 : progressModal.close();
        }
      }
    });
    const syncFromFeishuBtn = syncContainer.createEl("button", {
      text: "\u4ECE\u98DE\u4E66\u540C\u6B65",
      cls: "sync-button"
    });
    syncFromFeishuBtn.addEventListener("click", async () => {
      const plugin = this.app.plugins.plugins["obsidian-prompt-cards"];
      if (plugin) {
        let progressModal;
        const confirm = await new Promise((resolve) => {
          const modal = new import_obsidian2.Modal(this.app);
          modal.contentEl.createEl("h2", { text: "\u786E\u8BA4\u540C\u6B65" });
          modal.contentEl.createEl("p", {
            text: "\u6B64\u64CD\u4F5C\u5C06\u5B8C\u5168\u8986\u76D6\u672C\u5730\u6570\u636E\uFF0C\u786E\u5B9A\u8981\u7EE7\u7EED\u5417\uFF1F"
          });
          const buttonContainer = modal.contentEl.createEl("div", {
            cls: "prompt-modal-buttons"
          });
          buttonContainer.createEl("button", { text: "\u53D6\u6D88" }).addEventListener("click", () => {
            modal.close();
            resolve(false);
          });
          const confirmBtn = buttonContainer.createEl("button", {
            text: "\u786E\u5B9A",
            cls: "mod-cta"
          });
          confirmBtn.addEventListener("click", () => {
            modal.close();
            resolve(true);
          });
          modal.open();
        });
        if (!confirm) return;
        try {
          new import_obsidian2.Notice("\u5F00\u59CB\u4ECE\u98DE\u4E66\u540C\u6B65...");
          progressModal = new import_obsidian2.Modal(this.app);
          progressModal.titleEl.setText("\u540C\u6B65\u8FDB\u5EA6");
          const progressText = progressModal.contentEl.createEl("p");
          progressModal.open();
          const prompts = await plugin.feishuService.downloadFromFeishu();
          await plugin.promptManager.setPrompts(prompts);
          progressModal.close();
          new import_obsidian2.Notice("\u6210\u529F\u4ECE\u98DE\u4E66\u540C\u6B65");
          await this.onOpen();
        } catch (error) {
          console.error("\u4ECE\u98DE\u4E66\u540C\u6B65\u5931\u8D25:", error);
          new import_obsidian2.Notice("\u4ECE\u98DE\u4E66\u540C\u6B65\u5931\u8D25: " + (error.message || "\u672A\u77E5\u9519\u8BEF"), 5e3);
          progressModal == null ? void 0 : progressModal.close();
        }
      }
    });
    this.addSearchBar(container);
    const addButton = container.createEl("button", {
      text: "\u6DFB\u52A0\u65B0\u5361\u7247",
      cls: "add-prompt-button"
    });
    addButton.addEventListener("click", () => this.openAddPromptModal());
    const tabsContainer = container.createEl("div", { cls: "prompt-tabs" });
    const contentContainer = container.createEl("div", { cls: "prompt-content" });
    const categories = this.getCategories();
    this.createTab(tabsContainer, contentContainer, "\u5168\u90E8", null);
    categories.forEach((category) => {
      this.createTab(tabsContainer, contentContainer, category, category);
    });
    this.showCategory(contentContainer, null);
  }
  // 获取所有分类
  getCategories() {
    const categories = /* @__PURE__ */ new Set();
    this.promptManager.getPrompts().forEach((prompt) => {
      if (prompt.category) {
        categories.add(prompt.category);
      }
    });
    return Array.from(categories).sort();
  }
  // 创建标签页
  createTab(tabsContainer, contentContainer, label, category) {
    const tab = tabsContainer.createEl("div", {
      text: label,
      cls: "prompt-tab"
    });
    tab.addEventListener("click", () => {
      tabsContainer.querySelectorAll(".prompt-tab").forEach((t) => t.removeClass("active"));
      tab.addClass("active");
      this.currentCategory = category;
      this.showCategory(contentContainer, category);
    });
    if (category === null) {
      tab.addClass("active");
    }
  }
  // 显示指定分类的卡片
  showCategory(container, category) {
    container.empty();
    const cardsContainer = container.createEl("div", { cls: "prompt-cards-container" });
    this.handleSearch();
  }
  async renderCards(container, prompts) {
    container.empty();
    const cardsToRender = prompts || this.promptManager.getPrompts();
    cardsToRender.forEach((prompt, index) => {
      const card = container.createEl("div", {
        cls: "prompt-card",
        attr: {
          "draggable": "true",
          "data-id": prompt.id,
          "data-index": index.toString()
        }
      });
      card.addEventListener("dragstart", (e) => this.handleDragStart(e, prompt));
      card.addEventListener("dragover", this.handleDragOver);
      card.addEventListener("drop", (e) => this.handleDrop(e));
      card.addEventListener("dragenter", this.handleDragEnter);
      card.addEventListener("dragleave", this.handleDragLeave);
      const contentEl = card.createEl("div", { cls: "prompt-card-content" });
      contentEl.createEl("h3", { text: prompt.title });
      const tagsEl = contentEl.createEl("div", { cls: "prompt-tags" });
      prompt.tags.forEach((tag) => {
        tagsEl.createEl("span", { text: tag, cls: "prompt-tag" });
      });
      const contentP = contentEl.createEl("p");
      contentP.innerHTML = prompt.content.replace(/\n/g, "<br>");
      const buttons = card.createEl("div", { cls: "prompt-buttons" });
      const insertBtn = buttons.createEl("button", { text: "\u590D\u5236" });
      insertBtn.addEventListener("click", () => this.insertPromptToEditor(prompt));
      const editBtn = buttons.createEl("button", { text: "\u7F16\u8F91" });
      editBtn.addEventListener("click", () => this.openEditPromptModal(prompt));
      const deleteBtn = buttons.createEl("button", { text: "\u5220\u9664" });
      deleteBtn.addEventListener("click", async () => {
        await this.promptManager.deletePrompt(prompt.id);
        await this.onOpen();
      });
    });
  }
  async openAddPromptModal() {
    new PromptModal(this.app, async (data) => {
      await this.promptManager.addPrompt(data);
      await this.onOpen();
    }).open();
  }
  async openEditPromptModal(prompt) {
    new PromptModal(this.app, async (data) => {
      await this.promptManager.editPrompt(prompt.id, data);
      await this.onOpen();
    }, prompt).open();
  }
  async insertPromptToEditor(prompt) {
    await navigator.clipboard.writeText(prompt.content);
    new import_obsidian2.Notice("\u63D0\u793A\u8BCD\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F");
  }
  // 添加拖拽相关的处理方法
  handleDragStart(e, prompt) {
    if (!e.dataTransfer) return;
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", prompt.id);
    const target = e.target;
    target.classList.add("dragging");
    if (e.dataTransfer.setDragImage && target instanceof HTMLElement) {
      const ghost = target.cloneNode(true);
      ghost.style.opacity = "0.5";
      ghost.style.position = "absolute";
      ghost.style.top = "-1000px";
      document.body.appendChild(ghost);
      e.dataTransfer.setDragImage(ghost, 0, 0);
      setTimeout(() => {
        document.body.removeChild(ghost);
      }, 0);
    }
  }
  handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  }
  handleDragEnter(e) {
    const target = e.target;
    if (target.classList.contains("prompt-card")) {
      target.classList.add("drag-over");
    }
  }
  handleDragLeave(e) {
    const target = e.target;
    if (target.classList.contains("prompt-card")) {
      target.classList.remove("drag-over");
    }
  }
  async handleDrop(e) {
    e.preventDefault();
    const target = e.target;
    const card = target.closest(".prompt-card");
    if (!card) return;
    card.classList.remove("drag-over");
    const draggedId = e.dataTransfer.getData("text/plain");
    const fromIndex = this.promptManager.getPromptIndex(draggedId);
    const toIndex = parseInt(card.getAttribute("data-index") || "0", 10);
    if (fromIndex === toIndex) return;
    await this.promptManager.reorderPrompts(fromIndex, toIndex);
    this.renderCards(this.containerEl.querySelector(".prompt-cards-container"));
  }
  // 修改 addSearchBar 方法
  addSearchBar(container) {
    const searchContainer = container.createEl("div", { cls: "prompt-search-container" });
    const searchInput = searchContainer.createEl("input", {
      type: "text",
      placeholder: "\u641C\u7D22\u63D0\u793A\u8BCD...",
      cls: "prompt-search-input"
    });
    const tagSelect = searchContainer.createEl("select", { cls: "prompt-tag-select" });
    tagSelect.createEl("option", { text: "\u6240\u6709\u6807\u7B7E", value: "" });
    const allTags = /* @__PURE__ */ new Set();
    this.promptManager.getPrompts().forEach((prompt) => {
      prompt.tags.forEach((tag) => allTags.add(tag));
    });
    Array.from(allTags).sort().forEach((tag) => {
      tagSelect.createEl("option", { text: tag, value: tag });
    });
    const resetButton = searchContainer.createEl("button", {
      text: "\u91CD\u7F6E",
      cls: "reset-search-button"
    });
    resetButton.addEventListener("click", () => {
      searchInput.value = "";
      tagSelect.value = "";
      this.handleSearch();
    });
    searchInput.addEventListener("input", () => this.handleSearch());
    tagSelect.addEventListener("change", () => this.handleSearch());
  }
};

// promptManager.ts
var PromptCardManager = class {
  constructor(app) {
    this.prompts = [];
    this.app = app;
  }
  // 设置提示词数据
  async setPrompts(prompts) {
    this.prompts = prompts;
    await this.savePrompts();
  }
  // 添加新的提示词卡片
  async addPrompt(prompt) {
    const newPrompt = {
      id: Date.now().toString(),
      ...prompt
    };
    this.prompts.push(newPrompt);
    await this.savePrompts();
    return newPrompt;
  }
  // 编辑提示词卡片
  async editPrompt(id, updates) {
    const index = this.prompts.findIndex((p) => p.id === id);
    if (index === -1) return null;
    this.prompts[index] = { ...this.prompts[index], ...updates };
    await this.savePrompts();
    return this.prompts[index];
  }
  // 删除提示词卡片
  async deletePrompt(id) {
    const index = this.prompts.findIndex((p) => p.id === id);
    if (index === -1) return false;
    this.prompts.splice(index, 1);
    await this.savePrompts();
    return true;
  }
  // 获取所有提示词卡片
  getPrompts() {
    return [...this.prompts];
  }
  // 按标签筛选提示词卡片
  getPromptsByTag(tag) {
    return this.prompts.filter((p) => p.tags.includes(tag));
  }
  // 保存提示词数据到文件
  async savePrompts() {
    const data = JSON.stringify(this.prompts, null, 2);
    const pluginDir = ".obsidian/plugins/obsidian-prompt-cards";
    try {
      await this.app.vault.adapter.mkdir(pluginDir);
    } catch (error) {
    }
    try {
      await this.app.vault.adapter.write(`${pluginDir}/prompts.json`, data);
    } catch (error) {
      console.error("\u4FDD\u5B58\u63D0\u793A\u8BCD\u6570\u636E\u5931\u8D25:", error);
    }
  }
  // 从文件加载提示词数据
  async loadPrompts() {
    try {
      const data = await this.app.vault.adapter.read(".obsidian/plugins/obsidian-prompt-cards/prompts.json");
      this.prompts = JSON.parse(data);
    } catch (error) {
      console.log("\u52A0\u8F7D\u63D0\u793A\u8BCD\u6570\u636E\u5931\u8D25\uFF0C\u4F7F\u7528\u6D4B\u8BD5\u6570\u636E:", error);
      const { testPrompts: testPrompts2 } = await Promise.resolve().then(() => (init_testData(), testData_exports));
      this.prompts = testPrompts2;
      await this.savePrompts();
    }
  }
  // 更新提示词顺序
  async reorderPrompts(fromIndex, toIndex) {
    const [prompt] = this.prompts.splice(fromIndex, 1);
    this.prompts.splice(toIndex, 0, prompt);
    await this.savePrompts();
  }
  // 获取提示词索引
  getPromptIndex(id) {
    return this.prompts.findIndex((p) => p.id === id);
  }
};

// settings.ts
var import_obsidian3 = require("obsidian");
var DEFAULT_SETTINGS = {
  feishu: {
    appId: "",
    appSecret: "",
    tableId: "",
    baseToken: ""
  }
};
var PromptCardsSettingTab = class extends import_obsidian3.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "\u98DE\u4E66\u591A\u7EF4\u8868\u683C\u540C\u6B65\u8BBE\u7F6E" });
    const settingsDiv = containerEl.createEl("div", { cls: "prompt-cards-settings" });
    new import_obsidian3.Setting(containerEl).setName("App ID").setDesc("\u98DE\u4E66\u5E94\u7528\u7684 App ID").addText((text) => text.setPlaceholder("\u8F93\u5165 App ID").setValue(this.plugin.settings.feishu.appId).onChange(async (value) => {
      this.plugin.settings.feishu.appId = value;
    }));
    new import_obsidian3.Setting(containerEl).setName("App Secret").setDesc("\u98DE\u4E66\u5E94\u7528\u7684 App Secret").addText((text) => text.setPlaceholder("\u8F93\u5165 App Secret").setValue(this.plugin.settings.feishu.appSecret).onChange(async (value) => {
      this.plugin.settings.feishu.appSecret = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian3.Setting(containerEl).setName("Base Token").setDesc("\u98DE\u4E66\u591A\u7EF4\u8868\u683C\u7684 Base Token").addText((text) => text.setPlaceholder("\u8F93\u5165 Base Token").setValue(this.plugin.settings.feishu.baseToken).onChange(async (value) => {
      this.plugin.settings.feishu.baseToken = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian3.Setting(containerEl).setName("Table ID").setDesc("\u98DE\u4E66\u591A\u7EF4\u8868\u683C\u7684 Table ID").addText((text) => text.setPlaceholder("\u8F93\u5165 Table ID").setValue(this.plugin.settings.feishu.tableId).onChange(async (value) => {
      this.plugin.settings.feishu.tableId = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian3.Setting(containerEl).addButton((btn) => btn.setButtonText("\u4FDD\u5B58\u8BBE\u7F6E").setCta().onClick(async () => {
      await this.plugin.saveSettings();
      new import_obsidian3.Notice("\u8BBE\u7F6E\u5DF2\u4FDD\u5B58");
    }));
  }
};

// feishuService.ts
var import_obsidian4 = require("obsidian");
var FeishuService = class {
  constructor(settings) {
    this.tenantAccessToken = null;
    this.tokenExpireTime = 0;
    this.settings = settings;
  }
  async getTenantAccessToken() {
    if (this.tenantAccessToken && Date.now() < this.tokenExpireTime) {
      console.log("\u4F7F\u7528\u7F13\u5B58\u7684 token");
      return this.tenantAccessToken;
    }
    console.log("\u5F00\u59CB\u83B7\u53D6\u65B0\u7684 token...");
    const response = await (0, import_obsidian4.requestUrl)({
      url: "https://open.feishu.cn/open-apis/auth/v3/tenant_access_token/internal",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        app_id: this.settings.appId,
        app_secret: this.settings.appSecret
      })
    });
    const data = response.json;
    console.log("\u83B7\u53D6 token \u54CD\u5E94:", data);
    if (data.code !== 0) {
      throw new Error(`\u83B7\u53D6tenant_access_token\u5931\u8D25: ${data.msg}`);
    }
    this.tenantAccessToken = data.tenant_access_token;
    this.tokenExpireTime = Date.now() + (data.expire - 60) * 1e3;
    console.log("\u6210\u529F\u83B7\u53D6\u65B0\u7684 token");
    return this.tenantAccessToken;
  }
  async uploadToFeishu(prompts) {
    var _a, _b, _c;
    const token = await this.getTenantAccessToken();
    console.log("\u5F00\u59CB\u4E0A\u4F20\u6570\u636E\u5230\u98DE\u4E66", prompts);
    (_a = this.onProgress) == null ? void 0 : _a.call(this, 0, prompts.length + 1, "\u6B63\u5728\u6E05\u7406\u73B0\u6709\u6570\u636E...");
    await this.deleteAllRecords(token);
    for (let i = 0; i < prompts.length; i++) {
      (_b = this.onProgress) == null ? void 0 : _b.call(this, i + 1, prompts.length, "\u6B63\u5728\u540C\u6B65\u6570\u636E...");
      const prompt = prompts[i];
      const response = await (0, import_obsidian4.requestUrl)({
        url: `https://open.feishu.cn/open-apis/bitable/v1/apps/${this.settings.baseToken}/tables/${this.settings.tableId}/records`,
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fields: {
            title: prompt.title,
            content: prompt.content,
            tags: prompt.tags.join(","),
            category: prompt.category || "",
            local_id: prompt.id
          }
        })
      });
      const data = response.json;
      if (data.code !== 0) {
        throw new Error(`\u4E0A\u4F20\u6570\u636E\u5931\u8D25: ${data.msg}`);
      }
    }
    (_c = this.onProgress) == null ? void 0 : _c.call(this, prompts.length, prompts.length, "\u540C\u6B65\u5B8C\u6210");
  }
  // 删除所有记录的辅助方法
  async deleteAllRecords(token) {
    const response = await (0, import_obsidian4.requestUrl)({
      url: `https://open.feishu.cn/open-apis/bitable/v1/apps/${this.settings.baseToken}/tables/${this.settings.tableId}/records`,
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    const data = response.json;
    if (data.code !== 0) {
      throw new Error("\u83B7\u53D6\u8BB0\u5F55\u5931\u8D25");
    }
    const records = data.data.items || [];
    for (const record of records) {
      await (0, import_obsidian4.requestUrl)({
        url: `https://open.feishu.cn/open-apis/bitable/v1/apps/${this.settings.baseToken}/tables/${this.settings.tableId}/records/${record.record_id}`,
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
    }
  }
  async downloadFromFeishu() {
    var _a, _b, _c;
    const token = await this.getTenantAccessToken();
    (_a = this.onProgress) == null ? void 0 : _a.call(this, 0, 2, "\u6B63\u5728\u4ECE\u98DE\u4E66\u83B7\u53D6\u6570\u636E...");
    console.log("\u5F00\u59CB\u4ECE\u98DE\u4E66\u4E0B\u8F7D\u6570\u636E");
    const url = `https://open.feishu.cn/open-apis/bitable/v1/apps/${this.settings.baseToken}/tables/${this.settings.tableId}/records`;
    console.log("\u8BF7\u6C42URL:", url);
    const response = await (0, import_obsidian4.requestUrl)({
      url,
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    const data = response.json;
    console.log("\u98DE\u4E66\u8FD4\u56DE\u6570\u636E:", data);
    if (data.code !== 0) {
      throw new Error(`\u4E0B\u8F7D\u6570\u636E\u5931\u8D25: ${data.msg}`);
    }
    (_b = this.onProgress) == null ? void 0 : _b.call(this, 1, 2, "\u6B63\u5728\u5904\u7406\u6570\u636E...");
    const results = data.data.items.filter((item) => {
      return item.fields && item.fields.title && item.fields.content && Object.keys(item.fields).length > 0;
    }).map((item) => ({
      id: item.fields.local_id || Date.now().toString(),
      title: item.fields.title,
      content: item.fields.content,
      tags: item.fields.tags ? item.fields.tags.split(",") : [],
      category: item.fields.category || void 0
    }));
    (_c = this.onProgress) == null ? void 0 : _c.call(this, 2, 2, "\u540C\u6B65\u5B8C\u6210");
    return results;
  }
  // 添加测试方法
  async testConnection() {
    try {
      console.log("\u5F00\u59CB\u6D4B\u8BD5\u98DE\u4E66API\u8FDE\u63A5...");
      console.log("App ID:", this.settings.appId);
      console.log("\u4F7F\u7528\u7684\u8868\u683CID:", this.settings.tableId);
      console.log("\u4F7F\u7528\u7684Base Token:", this.settings.baseToken);
      const token = await this.getTenantAccessToken();
      console.log("\u6210\u529F\u83B7\u53D6 token:", token.substring(0, 10) + "...");
      const url = `https://open.feishu.cn/open-apis/bitable/v1/apps/${this.settings.baseToken}/tables/${this.settings.tableId}/records`;
      const response = await (0, import_obsidian4.requestUrl)({
        url,
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      const data = response.json;
      console.log("API\u8FD4\u56DE\u6570\u636E:", data);
      if (data.code === 0) {
        console.log("API\u6D4B\u8BD5\u6210\u529F\uFF01");
        return true;
      } else {
        console.error("API\u6D4B\u8BD5\u5931\u8D25:", data.msg);
        return false;
      }
    } catch (error) {
      console.error("API\u6D4B\u8BD5\u51FA\u9519:", error);
      return false;
    }
  }
};

// main.ts
var VIEW_TYPE_PROMPT_CARDS = "prompt-cards-view";
var PromptCardsPlugin = class extends import_obsidian5.Plugin {
  constructor() {
    super(...arguments);
    this.isPinned = false;
  }
  async onload() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    this.feishuService = new FeishuService(this.settings.feishu);
    this.addSettingTab(new PromptCardsSettingTab(this.app, this));
    this.promptManager = new PromptCardManager(this.app);
    this.registerView(
      VIEW_TYPE_PROMPT_CARDS,
      (leaf) => new PromptCardsView(leaf, this.promptManager)
    );
    const ribbonIconEl = this.addRibbonIcon("cards", "Prompt Cards", () => {
      this.activateView("center");
    });
    ribbonIconEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      const menu = new import_obsidian5.Menu();
      menu.addItem((item) => {
        item.setTitle(this.isPinned ? "\u53D6\u6D88\u56FA\u5B9A" : "\u56FA\u5B9A\u5230\u4FA7\u8FB9\u680F").setIcon(this.isPinned ? "pin-off" : "pin").onClick(() => {
          this.isPinned = !this.isPinned;
          if (!this.isPinned) {
            this.app.workspace.detachLeavesOfType(VIEW_TYPE_PROMPT_CARDS);
          } else {
            this.activateView("sidebar");
          }
        });
      });
      menu.showAtPosition({ x: e.pageX, y: e.pageY });
    });
    this.addCommand({
      id: "open-prompt-cards",
      name: "\u6253\u5F00\u63D0\u793A\u8BCD\u5361\u7247\u89C6\u56FE",
      callback: () => {
        this.activateView("center");
      }
    });
    this.addCommand({
      id: "sync-to-feishu",
      name: "\u540C\u6B65\u5230\u98DE\u4E66",
      callback: async () => {
        try {
          new import_obsidian5.Notice("\u5F00\u59CB\u540C\u6B65\u5230\u98DE\u4E66...");
          if (!await this.feishuService.testConnection()) {
            throw new Error("\u65E0\u6CD5\u8FDE\u63A5\u5230\u98DE\u4E66API\uFF0C\u8BF7\u68C0\u67E5\u914D\u7F6E");
          }
          await this.feishuService.uploadToFeishu(this.promptManager.getPrompts());
          new import_obsidian5.Notice("\u6210\u529F\u540C\u6B65\u5230\u98DE\u4E66");
        } catch (error) {
          console.error("\u540C\u6B65\u5230\u98DE\u4E66\u5931\u8D25:", error);
          new import_obsidian5.Notice("\u540C\u6B65\u5230\u98DE\u4E66\u5931\u8D25: " + (error.message || "\u672A\u77E5\u9519\u8BEF"), 5e3);
        }
      }
    });
    this.addCommand({
      id: "sync-from-feishu",
      name: "\u4ECE\u98DE\u4E66\u540C\u6B65",
      callback: async () => {
        try {
          new import_obsidian5.Notice("\u5F00\u59CB\u4ECE\u98DE\u4E66\u540C\u6B65...");
          if (!await this.feishuService.testConnection()) {
            throw new Error("\u65E0\u6CD5\u8FDE\u63A5\u5230\u98DE\u4E66API\uFF0C\u8BF7\u68C0\u67E5\u914D\u7F6E");
          }
          const prompts = await this.feishuService.downloadFromFeishu();
          await this.promptManager.setPrompts(prompts);
          new import_obsidian5.Notice("\u6210\u529F\u4ECE\u98DE\u4E66\u540C\u6B65");
          this.app.workspace.getLeavesOfType(VIEW_TYPE_PROMPT_CARDS).forEach((leaf) => {
            if (leaf.view instanceof PromptCardsView) {
              leaf.view.onOpen();
            }
          });
        } catch (error) {
          console.error("\u4ECE\u98DE\u4E66\u540C\u6B65\u5931\u8D25:", error);
          new import_obsidian5.Notice("\u4ECE\u98DE\u4E66\u540C\u6B65\u5931\u8D25: " + (error.message || "\u672A\u77E5\u9519\u8BEF"), 5e3);
        }
      }
    });
    await this.promptManager.loadPrompts();
    if (this.isPinned) {
      this.activateView("sidebar");
    }
  }
  async onunload() {
    await this.promptManager.savePrompts();
    this.app.workspace.detachLeavesOfType(VIEW_TYPE_PROMPT_CARDS);
  }
  async activateView(location) {
    var _a;
    const workspace = this.app.workspace;
    let leaf = workspace.getLeavesOfType(VIEW_TYPE_PROMPT_CARDS)[0];
    if (!leaf) {
      let newLeaf = null;
      if (location === "center") {
        newLeaf = workspace.getLeaf("tab");
        if (newLeaf) {
          await newLeaf.setViewState({
            type: VIEW_TYPE_PROMPT_CARDS,
            active: true
          });
        }
      } else {
        newLeaf = workspace.getRightLeaf(false);
        if (newLeaf) {
          await newLeaf.setViewState({
            type: VIEW_TYPE_PROMPT_CARDS,
            active: true
          });
        }
      }
      if (!newLeaf) return;
      leaf = newLeaf;
    }
    workspace.revealLeaf(leaf);
    if (location === "center") {
      (_a = this.app.workspace.activeLeaf) == null ? void 0 : _a.setGroupMember(leaf);
    }
  }
  async saveSettings() {
    await this.saveData(this.settings);
    this.feishuService = new FeishuService(this.settings.feishu);
  }
};
