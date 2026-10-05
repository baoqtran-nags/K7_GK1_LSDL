export const TECH_SPEC_DATA = {
  appName: "FlashGeography Class 7",
  version: "1.0.0-PROD",
  targetAudience: "Học sinh Lớp 7 (12-13 tuổi), giáo viên bộ môn Lịch sử & Địa lý THCS",
  curriculum: "Chương trình GDPT 2018 - Môn Lịch sử & Địa lý 7 (Chuyên đề Châu Âu)",
  
  architectureOverview: {
    framework: "React 19 + TypeScript + Vite + Tailwind CSS 4",
    stateManagement: "Local State + Reactive localStorage persistent store",
    accessibility: "WCAG 2.1 AA compliant, High Contrast Colors, Screen Reader Labels",
    audioEngine: "Web Audio API Synths (Zero external latency, works offline)",
    speechEngine: "HTML5 Web Speech API (SpeechSynthesis) for Vietnamese TTS"
  },

  modules: [
    {
      name: "Chế độ Flashcard & Micro-learning",
      description: "Thẻ lật 3D hai mặt mô phỏng phương pháp lặp lại ngắt quãng (Spaced Repetition).",
      features: [
        "Mặt trước: Câu hỏi, chủ đề, huy hiệu môn học (Địa lý / Lịch sử), số thứ tự.",
        "Mặt sau: Đáp án chính xác in đậm nổi bật, đoạn giải thích khoa học ngắn gọn, và 'Mẹo Gen Z' dí dỏm.",
        "Cử chỉ & Thao tác: Chạm để lật (Flip 3D), Vuốt trái (Chưa thuộc / Ôn lại), Vuốt phải (Đã thuộc), Nút Đọc giọng nói (TTS).",
        "Bộ lọc chủ đề: Tất cả, Địa lý tự nhiên, Dân cư & Đô thị, Lịch sử Trung đại & Phục hưng."
      ]
    },
    {
      name: "Chế độ Luyện đề (Quiz Mode)",
      description: "Mô phỏng phòng thi trắc nghiệm chuẩn với đồng hồ đếm ngược và bảng câu hỏi tương tác.",
      features: [
        "Bộ 40 câu hỏi trắc nghiệm khóa đáp án chuẩn (Riêng Câu 14 chốt chuẩn hệ thống kênh đào và mạng lưới sông dày đặc).",
        "Đồng hồ đếm ngược: Tùy chọn 15 phút, 30 phút, 45 phút hoặc Chế độ luyện tập không giới hạn.",
        "Bảng lưới điều hướng (Question Palette) 40 ô: Màu xám (Chưa làm), Màu tím (Đang làm), Màu xanh lục (Đã trả lời).",
        "Hai chế độ: 'Chấm điểm tức thì' (Hiện giải thích ngay sau mỗi câu) hoặc 'Thi thử nghiêm túc' (Nộp bài mới chấm điểm).",
        "Phòng ngừa gian lận: Tự động lưu bài làm dở dang vào localStorage đề phòng tải lại trang."
      ]
    },
    {
      name: "Ngân hàng câu sai thông minh (Smart Review)",
      description: "Kho riêng tự động thu thập các câu người dùng trả lời sai ở các vòng Quiz.",
      features: [
        "Tự động gắn cờ: Mọi câu trả lời sai lập tức được thêm vào mảng `mistakeIds`.",
        "Luyện tập tập trung: Người dùng làm lại riêng bộ câu sai cho đến khi đạt điểm tuyệt đối.",
        "Logic thăng hạng: Khi trả lời đúng lại câu trong Smart Review 2 lần liên tiếp, câu hỏi được xóa khỏi danh sách câu sai và chuyển sang danh sách Đã Thuộc."
      ]
    },
    {
      name: "Gamification & Tâm lý học hành vi",
      description: "Thúc đẩy động lực học tập hằng ngày thông qua hệ thống thưởng tức thì.",
      features: [
        "Hệ thống XP: +10 XP cho mỗi Flashcard đã học, +20 XP cho mỗi câu Quiz đúng, +50 XP khi hoàn thành bộ đề.",
        "Chuỗi ngày học (Streak 🔥): Theo dõi số ngày đăng nhập liên tiếp, nhắc nhở bảo vệ chuỗi.",
        "Hệ thống Huy hiệu (Badges):",
        "  - 🌍 Nhà thám hiểm châu Âu: Hoàn thành 100% câu hỏi Địa lý",
        "  - 🎨 Bậc thầy Phục hưng: Trả lời đúng toàn bộ câu hỏi Lịch sử thế kỉ XIV - XVII",
        "  - ⚡ Tia chớp tri thức: Hoàn thành 40 câu dưới 10 phút với tỉ lệ đúng > 90%",
        "  - 🔥 Siêu chiến binh Streak: Duy trì chuỗi học tập 3 ngày liên tiếp"
      ]
    },
    {
      name: "Ôn tập Tự luận, Đúng/Sai & Điền số (Special Exam Modes)",
      description: "Hỗ trợ 100% cấu trúc đề kiểm tra mới của Bộ Giáo dục:",
      features: [
        "Phần Tự luận (Câu 5 Trang 2): Vị trí địa lý, kích thước và giới hạn 4 hướng tiếp giáp của châu Âu kèm sơ đồ trực quan.",
        "Phần Điền số / Trả lời ngắn (Trang 6): 3 câu trắc nghiệm điền số (Tỉ lệ 15-64 tuổi: 64,8%; Mật độ: 75 người/km²; GDP EU: 18,05%).",
        "Phần Đúng/Sai (Trang 6): 2 câu chùm với 8 nhận định chi tiết kiểm tra kiến thức đa chiều."
      ]
    }
  ],

  aiPrompts: [
    {
      screen: "Home Screen (Màn hình chính)",
      target: "Midjourney v6 / DALL-E 3",
      prompt: "A high-fidelity mobile app UI design for an EdTech geography and history learning app named 'FlashGeography Class 7', home screen showcasing an interactive European expedition roadmap journey with 5 floating island stages (European Geography, Alps Mountains, Renaissance Florence, Medieval Castles, Modern EU), vibrant modern duotone aesthetic with deep indigo (#0F172A) and electric violet (#6366F1) theme, neon emerald (#10B981) and amber (#F59E0B) milestone badges, daily streak fire counter widget with flame icon, student XP level bar, sleek glassmorphism bottom navigation bar with rounded icons, premium iOS Figma design, hyper-clean typography, 8k resolution, UI/UX Behance trending --ar 9:16 --v 6.0"
    },
    {
      screen: "Quiz Screen (Màn hình làm trắc nghiệm)",
      target: "Midjourney v6 / DALL-E 3",
      prompt: "A modern mobile app UI interface for a student multiple choice quiz screen in 'FlashGeography Class 7', minimalist flashcard style container on dark slate background, countdown timer pill widget at the top (14:59 remaining), dynamic progress indicator showing 'Question 14 of 40', elegant question card reading geography topic with clear typography, four distinct modern rounded option buttons (A, B, C, D) with one selected showing vivid green state (#10B981) with checkmark icon and another showing soft crimson state (#EF4444) for error feedback, floating 'Gen Z Memory Tip' popover card with lightning bolt icon, smooth rounded corners, clean micro-interactions, dribbble edtech app showcase, Figma prototype, high contrast readable UI --ar 9:16 --v 6.0"
    },
    {
      screen: "Result & Analytics Screen (Màn hình tổng kết điểm số)",
      target: "Midjourney v6 / DALL-E 3",
      prompt: "A celebratory game-like mobile app UI results and performance analytics screen for a student who finished a 40-question European geography test, triumphant trophy illustration at center surrounded by golden particle confetti bursts, circular SVG progress donut chart showing 95% accuracy score (38/40 Correct), breakdown metric cards: Time Taken (08:45), XP Earned (+350 XP), Accuracy Rate, newly unlocked glowing badge 'Master of the Renaissance', two primary call-to-action buttons: 'Smart Review 2 Mistakes' in vibrant purple and 'Try Another Quiz' in outline glass style, clean modern dashboard typography, award-winning mobile game UI design, 8k --ar 9:16 --v 6.0"
    }
  ]
};
