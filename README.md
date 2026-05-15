# 🎭 Playwright

> A hands-on journey into **Playwright** automation with **JavaScript** 🚀

[![GitHub last commit](https://img.shields.io/github/last-commit/Hemalatha-R17/Playwright)](https://github.com/Hemalatha-R17/Playwright)
[![GitHub repo size](https://img.shields.io/github/repo-size/Hemalatha-R17/Playwright)](https://github.com/Hemalatha-R17/Playwright)
[![GitHub](https://img.shields.io/github/license/Hemalatha-R17/Playwright)](https://github.com/Hemalatha-R17/Playwright)

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='110' viewBox='0 0 400 110'%3E%3Cstyle%3E@keyframes fillBar%7B0%25%7Bwidth:0%7D100%25%7Bwidth:200px%7D%7D@keyframes fadeIn%7B0%25%7Bopacity:0%7D100%25%7Bopacity:1%7D%7D.bar%7Banimation:fillBar 2s ease-out forwards%7D.chapter%7Banimation:fadeIn 0.5s ease-out forwards;opacity:0%7D.c0%7Banimation-delay:0.3s%7D.c1%7Banimation-delay:0.6s%7D.c2%7Banimation-delay:0.9s%7D.c3%7Banimation-delay:1.2s%7D.c4%7Banimation-delay:1.5s%7D.c5%7Banimation-delay:1.8s%7D%3C/style%3E%3Crect width='400' height='110' rx='12' fill='%231e1e2e'/%3E%3Ctext x='200' y='32' font-family='Segoe UI,sans-serif' font-size='15' fill='%23cdd6f4' text-anchor='middle' font-weight='700'%3E📚 Course Progress%3C/text%3E%3Crect x='30' y='50' width='340' height='8' rx='4' fill='%23313244'/%3E%3Crect x='30' y='50' class='bar' height='8' rx='4' fill='%2389b4fa' width='200'/%3E%3Ctext x='200' y='75' font-family='Segoe UI,sans-serif' font-size='13' fill='%23a6adc8' text-anchor='middle'%3E6 / 6 Chapters%3C/text%3E%3Ccircle cx='45' cy='95' r='5' fill='%23a6e3a1' class='chapter c0'/%3E%3Ccircle cx='75' cy='95' r='5' fill='%23a6e3a1' class='chapter c1'/%3E%3Ccircle cx='105' cy='95' r='5' fill='%23a6e3a1' class='chapter c2'/%3E%3Ccircle cx='135' cy='95' r='5' fill='%23a6e3a1' class='chapter c3'/%3E%3Ccircle cx='165' cy='95' r='5' fill='%23a6e3a1' class='chapter c4'/%3E%3Ccircle cx='195' cy='95' r='5' fill='%23a6e3a1' class='chapter c5'/%3E%3Ctext x='215' y='99' font-family='Segoe UI,sans-serif' font-size='11' fill='%2358596b'%3Echs 1-6%3C/text%3E%3C/svg%3E">
  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='110' viewBox='0 0 400 110'%3E%3Cstyle%3E@keyframes fillBar%7B0%25%7Bwidth:0%7D100%25%7Bwidth:200px%7D%7D@keyframes fadeIn%7B0%25%7Bopacity:0%7D100%25%7Bopacity:1%7D%7D.bar%7Banimation:fillBar 2s ease-out forwards%7D.chapter%7Banimation:fadeIn 0.5s ease-out forwards;opacity:0%7D.c0%7Banimation-delay:0.3s%7D.c1%7Banimation-delay:0.6s%7D.c2%7Banimation-delay:0.9s%7D.c3%7Banimation-delay:1.2s%7D.c4%7Banimation-delay:1.5s%7D.c5%7Banimation-delay:1.8s%7D%3C/style%3E%3Crect width='400' height='110' rx='12' fill='%23ffffff'/%3E%3Ctext x='200' y='32' font-family='Segoe UI,sans-serif' font-size='15' fill='%231e1e2e' text-anchor='middle' font-weight='700'%3E📚 Course Progress%3C/text%3E%3Crect x='30' y='50' width='340' height='8' rx='4' fill='%23e0e0e0'/%3E%3Crect x='30' y='50' class='bar' height='8' rx='4' fill='%234a90d9' width='200'/%3E%3Ctext x='200' y='75' font-family='Segoe UI,sans-serif' font-size='13' fill='%23555' text-anchor='middle'%3E6 / 6 Chapters%3C/text%3E%3Ccircle cx='45' cy='95' r='5' fill='%2350b86c' class='chapter c0'/%3E%3Ccircle cx='75' cy='95' r='5' fill='%2350b86c' class='chapter c1'/%3E%3Ccircle cx='105' cy='95' r='5' fill='%2350b86c' class='chapter c2'/%3E%3Ccircle cx='135' cy='95' r='5' fill='%2350b86c' class='chapter c3'/%3E%3Ccircle cx='165' cy='95' r='5' fill='%2350b86c' class='chapter c4'/%3E%3Ccircle cx='195' cy='95' r='5' fill='%2350b86c' class='chapter c5'/%3E%3Ctext x='215' y='99' font-family='Segoe UI,sans-serif' font-size='11' fill='%23999'%3Echs 1-6%3C/text%3E%3C/svg%3E" alt="Course Progress">
</picture>

---

## 🗺️ Learning Flow

```mermaid
flowchart LR
    A[Chapter 01<br/>Playwright Basics] --> B[Chapter 02<br/>JS Concepts]
    B --> C[Chapter 03<br/>JS Identifier & Literals]
    C --> D[Chapter 04<br/>Java Concepts]
    D --> E[Chapter 05<br/>Literals]
    E --> F[Chapter 06<br/>Operators]
    F --> G[VS Code Shortcuts]

    A --> A1["✅ 01_Basics.js"]
    A --> A2["✅ 02_JS_Verify_Setup.js"]
    A --> A3["✅ 03_JS.js"]
    A --> A4["✅ 04_HotCode.js"]

    B --> B1["✅ 05_JS_Basics.js"]

    C --> C1["✅ Identifier Rules"]
    C --> C2["✅ Case Rules"]
    C --> C3["✅ Comments"]
    C --> C4["✅ Identifier Rules (extra)"]

    D --> D1["✅ var / let / const"]
    D --> D2["✅ Functions"]
    D --> D3["✅ Hoisting"]

    E --> E1["✅ Literals"]
    E --> E2["✅ Template Literals"]

    F --> F1["✅ Operator Intro"]
    F --> F2["✅ Arithmetic / Mod / Expo"]
    F --> F3["✅ Comparison / Strict"]
    F --> F4["✅ Logical / Ternary"]
    F --> F5["✅ Increment / Decrement"]
    F --> F6["✅ Nullish Coalescing"]

    style A fill:#4a90d9,color:#fff
    style B fill:#50b86c,color:#fff
    style C fill:#e6a23c,color:#fff
    style D fill:#a855f7,color:#fff
    style E fill:#e67e22,color:#fff
    style F fill:#2ecc71,color:#fff
    style G fill:#e74c3c,color:#fff
```

---

## 📂 Chapters

| #   | Chapter                      | 📄 Files                                                                                                                                                             |
| --- | ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 01  | **Playwright Basics**        | `01_Basics.js` · `02_JS_Verify_Setup.js` · `03_JS.js` · `04_HotCode.js`                                                                                              |
| 02  | **JS Concepts**              | `05_JS_Basics.js`                                                                                                                                                    |
| 03  | **JS Identifier & Literals** | `06_Identifier_Rules.js` · `07_Identifier_Case_Rules.js` · `08_Comments.js` · `js_identifier_rules.js` · `VS_Code_shortcuts_mac.md` · `VS_Code_shortcuts_windows.md` |
| 04  | **Java Concepts**            | `09_var_let_const.js` · `10_functions.js` · `11_var_explained.js` · `12_let_people_love.js` · `13_const_explained.js` · `14_var_functionscope.js` · `15_let_scope.js` · `16_Hoisting.js` · `17_hoisting_fn.js` |
| 05  | **Literals**                 | `22_Literal.js` · `23_null_undefined.js` · `24_null.js` · `25_Literal_All.js` · `26_Literal_Number_all.js` · `27_String.js` · `28_Template_Literal.js` · `29_Backtick_single_double.js` |
| 06  | **Operators**                | `30_Operator.js` · `31_Arithmetic_OP.js` · `32_Module_OP.js` · `33_Expo_OP.js` · `34_IQ_Compound_OP.js` · `35_Comparision_OP.js` · `36_Comparision_Strict_loose.js` · `37_IQ_Loose_Strict.js` · `38_Confusing_Comparision.js` · `39_Logical_OP.js` · `40_String_Con_OP.js` · `41_Ternary_OP.js` · `42_Type_OP.js` · `43_Incre_Decre_OP.js` · `44_Null_OP.js` |

---

## 📁 Folder Structure

```
Playwright/
├── README.md
├── .gitignore
├── Chapter_01_Basics/
│   ├── 01_Basics.js
│   ├── 02_JS_Verify_Setup.js
│   ├── 03_JS.js
│   └── 04_HotCode.js
├── Chapter_02_JS_Concepts/
│   └── 05_JS_Basics.js
├── Chapter_03_JS_Identifier_Literals/
│   ├── 06_Identifier_Rules.js
│   ├── 07_Identifier_Case_Rules.js
│   ├── 08_Comments.js
│   ├── js_identifier_rules.js
│   ├── VS_Code_shortcuts_mac.md
│   └── VS_Code_shortcuts_windows.md
├── Chapter_04_JavaConcepts/
│   ├── 09_var_let_const.js
│   ├── 10_functions.js
│   ├── 11_var_explained.js
│   ├── 12_let_people_love.js
│   ├── 13_const_explained.js
│   ├── 14_var_functionscope.js
│   ├── 15_let_scope.js
│   ├── 16_Hoisting.js
│   ├── 17_hoisting_fn.js
│   ├── 18_let_hoisting.js
│   ├── 19_let_hoisting_block.js
│   ├── 20_let_const.js
│   └── 21_Jr_QA.js
├── Chapter_05_Literal/
│   ├── 22_Literal.js
│   ├── 23_null_undefined.js
│   ├── 24_null.js
│   ├── 25_Literal_All.js
│   ├── 26_Literal_Number_all.js
│   ├── 27_String.js
│   ├── 28_Template_Literal.js
│   └── 29_Backtick_single_double.js
└── Chapter_06_Operator/
    ├── 30_Operator.js
    ├── 31_Arithmetic_OP.js
    ├── 32_Module_OP.js
    ├── 33_Expo_OP.js
    ├── 34_IQ_Compound_OP.js
    ├── 35_Comparision_OP.js
    ├── 36_Comparision_Strict_loose.js
    ├── 37_IQ_Loose_Strict.js
    ├── 38_Confusing_Comparision.js
    ├── 39_Logical_OP.js
    ├── 40_String_Con_OP.js
    ├── 41_Ternary_OP.js
    ├── 42_Type_OP.js
    ├── 43_Incre_Decre_OP.js
    └── 44_Null_OP.js
```

---

## ⌨️ VS Code Shortcuts

Quick reference guides for **Mac** and **Windows**:

| Platform   | File                                                                                             |
| ---------- | ------------------------------------------------------------------------------------------------ |
| 🍎 Mac     | [`VS_Code_shortcuts_mac.md`](Chapter_03_JS_Identifier_Literals/VS_Code_shortcuts_mac.md)         |
| 🪟 Windows | [`VS_Code_shortcuts_windows.md`](Chapter_03_JS_Identifier_Literals/VS_Code_shortcuts_windows.md) |

---

## 🛠️ Tech Stack

- **Playwright** — Browser automation
- **JavaScript (ES6+)** — Programming language
- **Node.js** — Runtime environment

---

<div align="center">
  <sub>Built with ❤️ by Hemalatha</sub>
</div>
