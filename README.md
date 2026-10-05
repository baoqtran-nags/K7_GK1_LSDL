# 🌍 FlashGeography Class 7 - Ôn tập Lịch sử & Địa lý Châu Âu

Ứng dụng EdTech ôn tập chuyên sâu môn **Lịch sử & Địa lý Lớp 7 (Chuyên đề Châu Âu)** theo Chương trình GDPT 2018 (Kết nối tri thức / Cánh Diều / Chân trời sáng tạo).

---

## 🚀 1. Xem và Sử Dụng Trực Tiếp (Không cần cài đặt)

Bạn có thể mở ứng dụng ngay trên trình duyệt điện thoại hoặc máy tính thông qua đường link Cloud Run:
👉 **[Mở ứng dụng FlashGeography Class 7](https://ais-pre-4ymorbkjygyjlpzvrkaezp-46348951848.asia-southeast1.run.app)**

> 💡 **Mẹo:** Trên điện thoại, bạn có thể nhấn nút **"Cài đặt App"** (hoặc chọn *Thêm vào Màn hình chính* trên Safari/Chrome) để sử dụng như một ứng dụng độc lập hoạt động **100% ngoại tuyến (Offline)** mà không cần kết nối mạng.

---

## 💻 2. Hướng Dẫn Mở & Chạy Dự Án Từ GitHub Trên Máy Tính (Localhost)

Nếu bạn tải mã nguồn từ GitHub về máy tính cá nhân (hoặc dùng Git clone), hãy làm theo các bước sau:

### Yêu cầu tiên quyết:
- Đã cài đặt **[Node.js](https://nodejs.org/)** (Khuyên dùng phiên bản LTS: Node.js 18, 20 hoặc 22).
- Trình quản lý gói `npm` (đi kèm sẵn với Node.js).

### Các bước thực hiện:

#### Bước 1: Mở Terminal / Command Prompt tại thư mục dự án
```bash
# Di chuyển vào thư mục chứa mã nguồn (nếu chưa vào)
cd ten-thu-muc-du-an
```

#### Bước 2: Cài đặt các thư viện phụ thuộc (Dependencies)
```bash
npm install
```
*(Nếu gặp cảnh báo về mạng hoặc bảo mật, có thể chạy `npm install --legacy-peer-deps`)*

#### Bước 3: Khởi động máy chủ phát triển (Development Server)
```bash
npm run dev
```

Sau khi chạy lệnh trên, màn hình Terminal sẽ hiển thị đường link:
```text
  VITE v8.x.x  ready in 300 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: http://192.168.x.x:3000/
```

#### Bước 4: Mở trình duyệt web
Truy cập vào địa chỉ: **`http://localhost:3000`** để trải nghiệm ứng dụng.

---

## 🌐 3. Hướng Dẫn Đưa Lên Mạng (Deploy Miễn Phí)

Nếu bạn muốn tạo đường link riêng từ kho lưu trữ GitHub của mình:

### Cách 1: Đưa lên Vercel (Khuyên dùng - Cực nhanh & Đơn giản nhất)
1. Truy cập **[vercel.com](https://vercel.com/)** và đăng nhập bằng tài khoản GitHub.
2. Bấm **"Add New..."** -> **"Project"**.
3. Chọn kho lưu trữ GitHub chứa mã nguồn ứng dụng này.
4. Ở mục Framework Preset, chọn **Vite**.
5. Bấm **"Deploy"**. Trong vòng 1 phút, bạn sẽ có đường link web công khai miễn phí (dạng `ten-du-an.vercel.app`).

### Cách 2: Đưa lên Netlify
1. Truy cập **[netlify.com](https://netlify.com/)** -> Chọn **"Import from Git"**.
2. Chọn repo GitHub của bạn.
3. Build command: `npm run build` | Publish directory: `dist`.
4. Bấm **"Deploy site"**.

---

## 📂 4. Cấu Trúc Mã Nguồn Dự Án

```text
├── index.html                   # File HTML gốc tích hợp meta PWA & Google Fonts
├── package.json                 # Danh sách thư viện (React 19, Tailwind CSS, VitePWA, Lucide Icons)
├── vite.config.ts               # Cấu hình Vite, Tailwind và Service Worker PWA
├── public/                      # Biểu tượng PWA (192px, 512px, Maskable, Apple Touch Icon)
├── src/
│   ├── main.tsx                 # Điểm khởi chạy ứng dụng & đăng ký Service Worker
│   ├── App.tsx                  # Điều hướng các màn hình, thanh Header, chân trang
│   ├── context/
│   │   └── ThemeContext.tsx     # Quản lý chế độ Sáng Dịu Mắt, Giấy Ấm (Sepia), Lọc ánh sáng xanh
│   ├── data/
│   │   ├── questions.ts         # Bộ 40 câu hỏi gốc (khóa đáp án chuẩn, lưu ý Câu 14)
│   │   ├── allExams.ts          # Danh sách 04 Bộ Đề Thi chuẩn
│   │   ├── examSet1.ts          # Bộ Đề 01 (30 câu phân dạng + hình minh họa)
│   │   ├── examSet2.ts          # Bộ Đề 02 (30 câu phân dạng + hình minh họa)
│   │   ├── examSet3.ts          # Bộ Đề 03 (30 câu phân dạng + hình minh họa)
│   │   └── examSet4.ts          # Bộ Đề 04 (30 câu phân dạng + hình minh họa)
│   ├── components/
│   │   ├── HomeScreen.tsx       # Bản đồ hành trình ôn tập 5 chặng
│   │   ├── ExamSetsView.tsx     # Giao diện ôn tập 4 bộ đề với bộ lọc & tải ngoại tuyến
│   │   ├── FlashcardMode.tsx    # Lật thẻ Flashcard 3D & mẹo nhớ Gen Z
│   │   ├── QuizMode.tsx         # Thi thử bấm giờ, tự động chấm điểm & xem lại câu sai
│   │   ├── ShortAnswerMode.tsx  # Trắc nghiệm điền số (mật độ, tỉ lệ tuổi, GDP)
│   │   ├── TrueFalseMode.tsx    # Dạng trắc nghiệm Đúng / Sai theo form mới
│   │   ├── EssayMode.tsx        # Ôn tập tự luận vị trí địa lý & tiếp giáp
│   │   ├── SmartReviewMode.tsx  # Ngân hàng câu sai thông minh lưu trữ vĩnh viễn
│   │   ├── PWAInstallButton.tsx # Nút cài đặt ứng dụng trên Android, Chrome, iOS
│   │   └── OfflineManagerModal.tsx # Quản lý bộ nhớ ngoại tuyến PWA
│   └── utils/
│       ├── audio.ts             # Bộ tạo âm thanh hiệu ứng Web Audio API offline
│       ├── storage.ts           # Lưu trữ tiến độ, XP, Streak, huy hiệu vào LocalStorage
│       └── offlineStorage.ts    # Cơ chế lưu trữ offline trọn bộ 120 câu hỏi
```

---

## ✨ 5. Các Tính Năng Nổi Bật

1. **Hệ Thống 04 Bộ Đề Thi (120 câu hỏi toàn diện):**
   - Đầy đủ 5 phân dạng: Trắc nghiệm khách quan, Đúng/Sai, Bài tập tính Mật độ dân số, Bài tập tính Tỉ trọng GDP, Tự luận kèm thang điểm chấm.
   - Minh họa trực quan bản đồ và sơ đồ hình học SVG từ SGK.
2. **Khóa Đáp Án Chuẩn Xác:** Đặc biệt Câu 14 khóa đáp án **Mạng lưới sông ngòi dày đặc & Hệ thống kênh đào rất phát triển**.
3. **PWA Offline 100%:** Hoạt động mượt mà không cần mạng Internet sau khi cài đặt hoặc tải về máy.
4. **Bảo Vệ Thị Lực & Sáng Dịu Mắt:** Chế độ màu ấm chống lóa, bộ lọc ánh sáng xanh và tùy chỉnh cỡ chữ cho học sinh.
5. **Gamification:** Tích lũy XP, tính chuỗi ngày học liên tục (Streak), mở khóa huy hiệu thám hiểm.
