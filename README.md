# KOSIN GitHub Pages Launcher

ไฟล์ชุดนี้เป็นหน้า Launcher สำหรับ iPhone / Android
โดยหน้า Home Screen จะใช้ไอคอน KOSIN จาก GitHub Pages
และโหลด Google Apps Script Web App ภายใน iframe

## 1) แก้ GAS URL

เปิด `index.html` แล้วหา:

```js
const GAS_WEB_APP_URL =
  "PASTE_YOUR_GAS_WEB_APP_URL_HERE";
```

เปลี่ยนเป็น URL Web App จริง เช่น:

```js
const GAS_WEB_APP_URL =
  "https://script.google.com/macros/s/xxxxxxxxxxxxxxxx/exec";
```

## 2) อัปโหลดไฟล์ทั้งหมดขึ้น GitHub Repository

ต้องอยู่ root เดียวกัน:

- index.html
- manifest.webmanifest
- service-worker.js
- kosin-app-icon-180.png
- kosin-app-icon-192.png
- kosin-app-icon-512.png

## 3) เปิด GitHub Pages

Repository > Settings > Pages

- Source: Deploy from a branch
- Branch: main
- Folder: / (root)

กด Save

จากนั้น GitHub จะให้ URL ประมาณ:

https://USERNAME.github.io/REPOSITORY/

## 4) iPhone

1. เปิด URL GitHub Pages ด้วย Safari
2. Share
3. Add to Home Screen
4. เปิด Open as Web App
5. Add

อย่า Add จาก URL script.google.com เพราะจะกลับไปใช้ไอคอนตัวอักษรของ Google Apps Script
