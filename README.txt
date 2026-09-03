KOSIN GitHub Frontend V2

เป้าหมาย
- GitHub Pages เป็น Frontend จริง
- URL คงเป็น:
  https://demokosin-cmd.github.io/kosin-borrow-app/
- Apps Script เป็น Backend เท่านั้น
- ถ้าเปิด Apps Script /exec โดยตรง จะไม่เห็นระบบ
  และมีปุ่มบังคับให้กลับ GitHub ในหน้าเดิม

ไฟล์ Google Apps Script
1) Code.gs.txt
   - เอาไปแทน Code.gs / รหัส.gs ปัจจุบัน
   - Deploy เป็น New version
   - LastestV6 เดิมใน GAS เก็บไว้ได้เพื่อ compatibility
     แต่ผู้ใช้จะไม่เข้า frontend ผ่าน GAS แล้ว

ไฟล์ GitHub repo kosin-borrow-app
1) index.html
2) manifest.webmanifest
3) service-worker.js
4) kosin-app-icon-180.png
5) kosin-app-icon-192.png
6) kosin-app-icon-512.png

LastestV6_GitHub.html
- เป็น LastestV6 ที่แปลงเป็น GitHub frontend แล้ว
- เนื้อหาเดียวกับ index.html
- ให้ใช้ index.html เป็นไฟล์จริงบน GitHub

Backend bridge
- GitHub สร้าง hidden iframe ไป:
  https://script.google.com/macros/s/AKfycbzZF6SI1BU1xUiwgOYBPLtsNBtAeh8aAOZ6JY9rp-uD54G2hySJ5vIQAzPw2BiXfGQ/exec?page=bridge
- google.script.run เดิมใน LastestV6 ถูกจำลองด้วย bridge
- จึงไม่ต้อง rewrite google.script.run ทีละจุด
- RPC allowlist มี 31 ฟังก์ชัน

หลังอัปโหลด GitHub ให้รอ Pages deploy สีเขียว
แล้วเปิด:
https://demokosin-cmd.github.io/kosin-borrow-app/

สำคัญ:
หลังเปลี่ยน Code.gs ต้อง Deploy New version ก่อน
เพราะ GitHub frontend จะเรียก ?page=bridge จาก deployment ใหม่
