KOSIN GitHub Router + Smooth Refresh

1) Google Apps Script
- ใช้ Code_GAS_MODIFIED.gs.txt แทนโค้ด backend ปัจจุบัน
- ใช้ LastestV6_MODIFIED.html แทน LastestV6
- Deploy เป็น New version

2) GitHub repo kosin-borrow-app
อัปโหลดทับ:
- index.html
- manifest.webmanifest
- service-worker.js
- kosin-app-icon-180.png
- kosin-app-icon-192.png
- kosin-app-icon-512.png

3) ลิงก์หลักที่แจกผู้ใช้
https://demokosin-cmd.github.io/kosin-borrow-app/

4) หน้าติดตั้งโดยตรง
https://demokosin-cmd.github.io/kosin-borrow-app/?install=1

5) Routing
- GAS /exec ตรง ๆ -> พยายามไป GitHub
- GitHub -> GAS พร้อม kmsLauncher=1 เพื่อกัน loop
- App ที่ติดตั้ง -> GitHub start_url ?app=1 -> GAS kmsApp=1
- refreshPage:
  * App มือถือ = overlay smooth + reload
  * Desktop/browser = hard refresh แบบเดิม

หมายเหตุ:
Apps Script HtmlService มี sandbox ทำให้ automatic top redirect จาก GAS อาจถูก browser บล็อกได้
จึงมีปุ่ม "เปิดแอป" เป็น fallback เสมอ
