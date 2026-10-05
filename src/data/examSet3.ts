import { ExamSet } from '../types/exams';

export const EXAM_SET_3: ExamSet = {
  id: "de-03",
  title: "Bộ Đề Số 03: Châu Phi, Châu Mỹ & Đại Phát Kiến Địa Lí",
  subtitle: "Hoang mạc Xa-ha-ra, Rừng A-ma-dôn, Kênh đào Xuy-ê & Pa-na-ma, Cô-lôm-bô, Ma-gien-lăng (30 câu)",
  duration_minutes: 45,
  total_questions: 30,
  structure: {
    mcq_count: 20,
    true_false_count: 4,
    density_calc_count: 2,
    percentage_calc_count: 2,
    essay_count: 2
  },
  questions: [
    // --- PHẦN 1: TRẮC NGHIỆM KHÁCH QUAN (CÂU 1 - 20) ---
    {
      id: 1,
      category: 'mcq',
      subject: 'Địa lý',
      topic: 'Vị trí địa lý Châu Phi',
      question_text: 'Châu Phi là châu lục lớn thứ ba trên thế giới với diện tích khoảng bao nhiêu?',
      options: {
        A: 'Khoảng 44,4 triệu km²',
        B: 'Khoảng 30,3 triệu km²',
        C: 'Khoảng 10,5 triệu km²',
        D: 'Khoảng 8,5 triệu km²'
      },
      correct_answer: 'B',
      explanation: 'Châu Phi có diện tích khoảng 30,3 triệu km², đứng thứ ba sau châu Á và châu Mỹ (trang 127 SGK).',
      memory_tip: 'Ba mươi phẩy ba triệu cây vuông, châu Phi đứng thứ ba toàn cầu.',
      image_illustration: {
        title: 'Bản đồ tự nhiên châu Phi',
        source: 'Hình 1 trang 128 SGK Lịch sử & Địa lí 7',
        type: 'map',
        description: 'Đường xích đạo đi qua gần chính giữa chia lục địa thành 2 phần cân xứng.',
        svg_badge: '🌍 Lược đồ tự nhiên Châu Phi (30,3 tr km²)'
      }
    },
    {
      id: 2,
      category: 'mcq',
      subject: 'Địa lý',
      topic: 'Hoang mạc lớn nhất thế giới',
      question_text: 'Hoang mạc nhiệt đới rộng lớn nhất thế giới chiếm trọn phần bắc châu Phi là:',
      options: {
        A: 'Hoang mạc Ca-la-ha-ri',
        B: 'Hoang mạc Xa-ha-ra',
        C: 'Hoang mạc Na-míp',
        D: 'Hoang mạc Gô-bi'
      },
      correct_answer: 'B',
      explanation: 'Hoang mạc Xa-ha-ra ở Bắc Phi rộng trên 9 triệu km², là hoang mạc cát và đá nóng lớn nhất hành tinh (trang 128, 129 SGK).',
      memory_tip: 'Xa-ha-ra biển cát bao la, nắng thiêu cát bỏng Bắc Phi bạt ngàn.',
      image_illustration: {
        title: 'Bản đồ các đới khí hậu châu Phi',
        source: 'Hình 2 trang 129 SGK Lịch sử & Địa lí 7',
        type: 'map',
        description: 'Đới khí hậu nhiệt đới khô hạn chiếm diện tích khổng lồ ở Bắc Phi.',
        svg_badge: '🏜️ Hoang mạc Xa-ha-ra khổng lồ'
      }
    },
    {
      id: 3,
      category: 'mcq',
      subject: 'Địa lý',
      topic: 'Sông dài nhất thế giới',
      question_text: 'Dòng sông dài nhất hành tinh (6.695 km) chảy từ nam lên bắc đổ ra Địa Trung Hải là:',
      options: {
        A: 'Sông Công-gô',
        B: 'Sông Nin (Nile)',
        C: 'Sông Ni-giê',
        D: 'Sông Dăm-be-đi'
      },
      correct_answer: 'B',
      explanation: 'Sông Nin dài 6.695 km, là dòng sông duy nhất chảy xuyên qua hoang mạc Xa-ha-ra bồi đắp châu thổ Ai Cập màu mỡ (trang 130 SGK).',
      memory_tip: 'Sông Nin dòng nước ngọt lành, xuyên qua sa mạc nuôi xanh mùa màng.',
      image_illustration: {
        title: 'Đoạn sông Nin chảy qua hoang mạc Xa-ha-ra',
        source: 'Hình 3 trang 130 SGK Lịch sử & Địa lí 7',
        type: 'photo',
        description: 'Dải thung lũng xanh tươi nổi bật giữa đôi bờ cát hoang mạc khô cằn.',
        svg_badge: '🌊 Sông Nin dài nhất thế giới (6.695 km)'
      }
    },
    {
      id: 4,
      category: 'mcq',
      subject: 'Địa lý',
      topic: 'Kênh đào Xuy-ê',
      question_text: 'Kênh đào nhân tạo cắt qua eo đất Xuy-ê nối liền Địa Trung Hải với Biển Đỏ dài hơn 160 km là:',
      options: {
        A: 'Kênh đào Pa-na-ma',
        B: 'Kênh đào Xuy-ê (Suez)',
        C: 'Kênh đào Ki-en',
        D: 'Kênh đào Corin'
      },
      correct_answer: 'B',
      explanation: 'Kênh đào Xuy-ê hoàn thành năm 1869, rút ngắn hơn 11.000 km hải trình từ châu Âu sang châu Á (trang 138 SGK & trang 253 SGV).',
      memory_tip: 'Kênh Xuy-ê nối biển Hồng - Trung Hải, rút ngắn hải trình muôn dặm khơi.',
      image_illustration: {
        title: 'Vị trí kênh đào Xuy-ê trên bản đồ châu Phi',
        source: 'Mục Em có biết? trang 138 SGK',
        type: 'map',
        description: 'Tuyến hàng hải huyết mạch giữa châu Âu, Trung Đông và châu Á.',
        svg_badge: '🚢 Kênh đào Xuy-ê quốc tế'
      }
    },
    {
      id: 5,
      category: 'mcq',
      subject: 'Địa lý',
      topic: 'Vành đai xanh Châu Phi',
      question_text: 'Dự án "Bức tường xanh vĩ đại" dài hơn 8.000 km ở châu Phi được triển khai nhằm mục tiêu gì?',
      options: {
        A: 'Ngăn chặn sự mở rộng và hoang mạc hóa của sa mạc Xa-ha-ra xuống phía nam',
        B: 'Xây dựng đường sắt cao tốc xuyên lục địa',
        C: 'Khai thác mỏ kim cương lộ thiên',
        D: 'Nuôi thả động vật hoang dã lấy thịt'
      },
      correct_answer: 'A',
      explanation: 'Dự án Vành đai xanh (từ năm 2007) trồng hàng triệu cây xanh chạy từ tây sang đông ngăn chặn sa mạc hóa vùng Sa-hen (trang 137 SGK).',
      memory_tip: 'Vành đai xanh tám nghìn cây, chặn đứng cát cháy cứu bầy muông hoa.',
      image_illustration: {
        title: 'Sơ đồ dự án Vành đai xanh vĩ đại ở châu Phi',
        source: 'Trang 137 SGK & trang 178 giải thích thuật ngữ',
        type: 'diagram',
        description: 'Dải cây xanh chạy ngang qua 11 quốc gia vùng Sa-hen châu Phi.',
        svg_badge: '🌳 Vành đai xanh ngăn sa mạc hóa'
      }
    },
    {
      id: 6,
      category: 'mcq',
      subject: 'Địa lý',
      topic: 'Kích thước Châu Mỹ',
      question_text: 'Châu Mỹ có diện tích khoảng 42 triệu km², nằm hoàn toàn ở bán cầu nào?',
      options: {
        A: 'Bán cầu Đông',
        B: 'Bán cầu Tây',
        C: 'Bán cầu Nam',
        D: 'Khu vực cực Bắc'
      },
      correct_answer: 'B',
      explanation: 'Châu Mỹ nằm hoàn toàn ở bán cầu Tây, trải dài từ vùng cực Bắc đến sát cực Nam (khoảng 72°B đến 54°N) (trang 139 SGK).',
      memory_tip: 'Châu Mỹ bán cầu Tây biệt lập, bốn mươi hai triệu ki-lô-mét vuông.',
      image_illustration: {
        title: 'Bản đồ tự nhiên châu Mỹ',
        source: 'Hình 1 trang 140 SGK Lịch sử & Địa lí 7',
        type: 'map',
        description: 'Hai lục địa Bắc Mỹ và Nam Mỹ nối nhau qua eo đất hẹp Trung Mỹ.',
        svg_badge: '🌎 Châu Mỹ ở Bán cầu Tây (42 tr km²)'
      }
    },
    {
      id: 7,
      category: 'mcq',
      subject: 'Địa lý',
      topic: 'Hệ thống núi Cooc-đi-e',
      question_text: 'Hệ thống núi cao hiểm trở chạy dọc phía tây Bắc Mỹ dài khoảng 9.000 km là:',
      options: {
        A: 'Dãy A-pa-lát',
        B: 'Hệ thống Coóc-đi-e (Cordillera)',
        C: 'Dãy An-đét',
        D: 'Dãy U-ran'
      },
      correct_answer: 'B',
      explanation: 'Miền núi Coóc-đi-e đồ sộ cao trung bình 3.000 - 4.000m, gồm nhiều dãy núi chạy song song xen giữa các cao nguyên (trang 142 SGK).',
      memory_tip: 'Coóc-đi-e hiểm trở chạy dài, chín nghìn cây số miền tây Bắc Mỹ.',
      image_illustration: {
        title: 'Hẻm vực Grand Canyon (Hoa Kỳ) trên hệ thống Coóc-đi-e',
        source: 'Hình 1 trang 142 SGK Lịch sử & Địa lí 7',
        type: 'photo',
        description: 'Hẻm vực sâu tới 1.600m do sông Cô-lô-ra-đô bào mòn qua hàng triệu năm.',
        svg_badge: '🏜️ Hẻm vực Gran Ca-ny-on'
      }
    },
    {
      id: 8,
      category: 'mcq',
      subject: 'Địa lý',
      topic: 'Hệ thống Ngũ Hồ Bắc Mỹ',
      question_text: 'Hồ nước ngọt có diện tích mặt nước lớn nhất thế giới nằm trong hệ thống Ngũ Hồ Bắc Mỹ là:',
      options: {
        A: 'Hồ Mi-si-gân',
        B: 'Hồ Thượng (Lake Superior)',
        C: 'Hồ Hu-rôn',
        D: 'Hồ Ôn-ta-ri-ô'
      },
      correct_answer: 'B',
      explanation: 'Hồ Thượng có diện tích hơn 82.000 km², là hồ nước ngọt có diện tích lớn nhất thế giới (trang 143 SGK).',
      memory_tip: 'Hồ Thượng trong Ngũ Hồ bao la, tám mươi hai nghìn cây số nước ngọt mát lành.',
      image_illustration: {
        title: 'Hệ thống Ngũ Hồ và sông Mít-xu-ri - Mi-xi-xi-pi',
        source: 'Mục Em có biết? trang 143 SGK',
        type: 'map',
        description: 'Hệ thống hồ nước ngọt lớn nhất hành tinh biên giới Mỹ - Canada.',
        svg_badge: '🏞️ Hồ Thượng (>82.000 km²)'
      }
    },
    {
      id: 9,
      category: 'mcq',
      subject: 'Địa lý',
      topic: 'Rừng nhiệt đới A-ma-dôn',
      question_text: 'Rừng nhiệt đới ẩm A-ma-dôn ("lá phổi xanh của Trái Đất") có diện tích trên 5 triệu km² nằm ở lục địa nào?',
      options: {
        A: 'Lục địa Nam Mỹ',
        B: 'Lục địa Phi',
        C: 'Lục địa Bắc Mỹ',
        D: 'Lục địa Úc'
      },
      correct_answer: 'A',
      explanation: 'Rừng A-ma-dôn nằm ở lưu vực sông A-ma-dôn (Nam Mỹ), là khu rừng nhiệt đới lớn nhất và đa dạng sinh học phong phú nhất thế giới (trang 154 SGK).',
      memory_tip: 'A-ma-dôn lá phổi màu xanh, Nam Mỹ bao la muôn loài sinh sôi.',
      image_illustration: {
        title: 'Toàn cảnh rừng nhiệt đới A-ma-dôn',
        source: 'Mục 2a trang 154 SGK Lịch sử & Địa lí 7',
        type: 'photo',
        description: 'Tán rừng nhiều tầng xanh thẫm ôm trọn dòng sông A-ma-dôn uốn lượn.',
        svg_badge: '🌳 Lá phổi xanh A-ma-dôn (>5 tr km²)'
      }
    },
    {
      id: 10,
      category: 'mcq',
      subject: 'Địa lý',
      topic: 'Nơi khô hạn nhất thế giới',
      question_text: 'Hoang mạc A-ta-ca-ma nằm ở phía tây dãy An-đét (Chi-lê) được coi là nơi khô hạn nhất thế giới vì:',
      options: {
        A: 'Chịu ảnh hưởng của dòng biển lạnh Pê-ru và nằm ở sườn khuất gió của dãy An-đét',
        B: 'Nhiệt độ quanh năm luôn trên 60 độ C',
        C: 'Không có ánh sáng mặt trời chiếu tới',
        D: 'Nằm hoàn toàn ở độ cao 7.000m'
      },
      correct_answer: 'A',
      explanation: 'Dòng biển lạnh Pê-ru ven bờ ngăn chặn bốc hơi ẩm, kết hợp bức chắn địa hình An-đét khiến A-ta-ca-ma có nơi hàng chục năm không mưa (trang 149 SGK).',
      memory_tip: 'A-ta-ca-ma khô hạn ngàn năm, biển lạnh chắn ẩm An-đét ngăn mưa.',
      image_illustration: {
        title: 'Hoang mạc A-ta-ca-ma ở Chi-lê',
        source: 'Hình 1 trang 149 SGK Lịch sử & Địa lí 7',
        type: 'photo',
        description: 'Vùng đất cằn cỗi hoang vu như bề mặt Sao Hỏa ven biển Thái Bình Dương.',
        svg_badge: '🏜️ Hoang mạc A-ta-ca-ma khô nhất địa cầu'
      }
    },
    {
      id: 11,
      category: 'mcq',
      subject: 'Lịch sử',
      topic: 'Nguyên nhân đại phát kiến địa lí',
      question_text: 'Nguyên nhân trực tiếp thúc đẩy các nhà thám hiểm Tây Âu tìm kiếm con đường biển mới sang phương Đông là gì?',
      options: {
        A: 'Con đường buôn bán truyền thống qua Tây Á bị người Hồi giáo Ả-rập và Thổ Nhĩ Kỳ độc chiếm',
        B: 'Châu Âu thiếu đất nông nghiệp trầm trọng',
        C: 'Để di cư tránh bão tuyết vùng cực Bắc',
        D: 'Giáo hội La Mã cấm buôn bán hoàn toàn'
      },
      correct_answer: 'A',
      explanation: 'Thế kỉ XV, nhu cầu vàng bạc, hương liệu tăng cao nhưng con đường truyền thống qua Địa Trung Hải bị chiếm giữ, buộc phải tìm đường trên biển (trang 14 SGK & tr. 166).',
      memory_tip: 'Tây Á chặn đường tơ lụa, vượt trùng dương tìm lối sang Đông.',
      image_illustration: {
        title: 'Tàu Ca-ra-ven vượt đại dương',
        source: 'Hình 1 trang 167 SGK Lịch sử & Địa lí 7',
        type: 'photo',
        description: 'Loại tàu buồm lớn nhiều cột buồm có bánh lái đi ngược được hướng gió.',
        svg_badge: '⛵ Tàu buồm Ca-ra-ven vượt đại dương'
      }
    },
    {
      id: 12,
      category: 'mcq',
      subject: 'Lịch sử',
      topic: 'Chuyến hải trình của B. Đi-a-xơ',
      question_text: 'Năm 1487, nhà hàng hải Bồ Đào Nha B. Đi-a-xơ đã dẫn đầu đoàn tàu đi tới điểm nào ở cực nam châu Phi?',
      options: {
        A: 'Vịnh Ca-ri-bê',
        B: 'Mũi Hảo Vọng (mũi Bão Táp)',
        C: 'Eo biển Ma-gien-lăng',
        D: 'Quần đảo Phi-líp-pin'
      },
      correct_answer: 'B',
      explanation: 'B. Đi-a-xơ đi vòng qua cực nam châu Phi đặt tên là mũi Bão Táp, sau vua Bồ Đào Nha đổi thành Mũi Hảo Vọng (hy vọng đến Ấn Độ) (trang 15 SGK).',
      memory_tip: 'Đi-a-xơ mũi Bão Táp vượt qua, Mũi Hảo Vọng rạng rỡ niềm hy vọng.',
      image_illustration: {
        title: 'Lược đồ các cuộc phát kiến địa lí lớn trên thế giới',
        source: 'Hình 1 trang 14 SGK Lịch sử & Địa lí 7',
        type: 'map',
        description: 'Đường đi của B. Đi-a-xơ (1487) men theo bờ tây châu Phi đến Mũi Hảo Vọng.',
        svg_badge: '🧭 Mũi Hảo Vọng (B. Đi-a-xơ 1487)'
      }
    },
    {
      id: 13,
      category: 'mcq',
      subject: 'Lịch sử',
      topic: 'C. Cô-lôm-bô tìm ra Châu Mỹ',
      question_text: 'Năm 1492, C. Cô-lôm-bô chỉ huy đoàn tàu Tây Ban Nha vượt Đại Tây Dương và phát hiện ra châu lục nào?',
      options: {
        A: 'Châu Phi',
        B: 'Châu Mỹ (Tân thế giới)',
        C: 'Châu Đại Dương',
        D: 'Châu Nam Cực'
      },
      correct_answer: 'B',
      explanation: 'Tháng 10/1492, Cô-lôm-bô đặt chân đến quần đảo Ca-ri-bê, mở ra phát hiện vĩ đại về châu Mỹ (trang 15 SGK).',
      memory_tip: 'Một bốn chín hai (1492) Cô-lôm-bô dong buồm, tìm ra châu Mỹ tân kỳ rạng danh.',
      image_illustration: {
        title: 'Chân dung C. Cô-lôm-bô (1451 - 1506)',
        source: 'Hình 3 trang 168 SGK Lịch sử & Địa lí 7',
        type: 'photo',
        description: 'Nhà hàng hải dũng cảm người I-ta-li-a phục vụ hoàng gia Tây Ban Nha.',
        svg_badge: '⛵ C. Cô-lôm-bô tìm ra Châu Mỹ (1492)'
      }
    },
    {
      id: 14,
      category: 'mcq',
      subject: 'Lịch sử',
      topic: 'V. Ga-ma đến Ấn Độ',
      question_text: 'Nhà hàng hải đầu tiên cập bến Ca-li-cút ở bờ biển Ấn Độ bằng đường vòng qua châu Phi (năm 1498) là:',
      options: {
        A: 'V. Ga-ma (Vasco da Gama)',
        B: 'Ph. Ma-gien-lăng',
        C: 'Hen-ri',
        D: 'Ê-ca-nô'
      },
      correct_answer: 'A',
      explanation: 'Năm 1497-1498, V. Ga-ma vòng qua Mũi Hảo Vọng cập bến Ca-li-cút (Ấn Độ), mở ra tuyến đường thương mại biển sang châu Á (trang 15 SGK).',
      memory_tip: 'Vát-xcô đơ Ga-ma vượt muôn sóng xô, cập bến Ấn Độ mang hồ tiêu về.',
      image_illustration: {
        title: 'Đài tưởng niệm các nhà phát kiến địa lí Bồ Đào Nha tại Li-xbon',
        source: 'Hình 2 trang 15 SGK Lịch sử & Địa lí 7',
        type: 'photo',
        description: 'Tượng đài uy nghiêm vinh danh Hoàng tử Hen-ri, Đi-a-xơ và V. Ga-ma.',
        svg_badge: '⚓ Tuyến đường biển sang Ấn Độ (1498)'
      }
    },
    {
      id: 15,
      category: 'mcq',
      subject: 'Lịch sử',
      topic: 'Chuyến đi vòng quanh Trái Đất',
      question_text: 'Đoàn thám hiểm đầu tiên đi vòng quanh Trái Đất bằng đường biển (1519 - 1522) do ai chỉ huy?',
      options: {
        A: 'Ph. Ma-gien-lăng (Magellan)',
        B: 'C. Cô-lôm-bô',
        C: 'B. Đi-a-xơ',
        D: 'Giêm Cúc'
      },
      correct_answer: 'A',
      explanation: 'Ph. Ma-gien-lăng chỉ huy 5 chiến thuyền đi vòng quanh Trái Đất, chứng minh dứt khoát Trái Đất có hình cầu (trang 15 SGK).',
      memory_tip: 'Ma-gien-lăng vượt Thái Bình Dương êm đềm, chứng minh Trái Đất hình cầu tròn xoe.',
      image_illustration: {
        title: 'Hải trình vòng quanh thế giới của đoàn tàu Ma-gien-lăng',
        source: 'Hình 1 trang 14 SGK Lịch sử & Địa lí 7',
        type: 'map',
        description: 'Vòng qua eo Ma-gien-lăng ở Nam Mỹ, băng qua Thái Bình Dương về Tây Ban Nha.',
        svg_badge: '🌐 Vòng quanh Trái Đất (1519 - 1522)'
      }
    },
    {
      id: 16,
      category: 'mcq',
      subject: 'Lịch sử',
      topic: 'Tên gọi Thái Bình Dương',
      question_text: 'Tên gọi "Thái Bình Dương" (vùng biển yên bình) do nhà thám hiểm nào đặt tên khi vượt qua đại dương này?',
      options: {
        A: 'Ph. Ma-gien-lăng',
        B: 'C. Cô-lôm-bô',
        C: 'A-mê-ri-gô',
        D: 'B. Đi-a-xơ'
      },
      correct_answer: 'A',
      explanation: 'Cuối năm 1520, sau khi vượt qua eo biển sóng gió ở cực nam châu Mỹ, Ma-gien-lăng thấy biển phẳng lặng gió êm nên đặt tên là Thái Bình Dương (trang 168 SGK).',
      memory_tip: 'Biển êm gió lộng trăng thanh, Ma-gien-lăng đặt Thái Bình Dương ngời.',
      image_illustration: {
        title: 'Chân dung Ph. Ma-gien-lăng (1480 - 1521)',
        source: 'Hình 4 trang 168 SGK Lịch sử & Địa lí 7',
        type: 'photo',
        description: 'Nhà hàng hải Bồ Đào Nha chỉ huy hải trình vòng quanh thế giới lịch sử.',
        svg_badge: '🌊 Thái Bình Dương (Ma-gien-lăng 1520)'
      }
    },
    {
      id: 17,
      category: 'mcq',
      subject: 'Lịch sử',
      topic: 'Hệ quả tích cực của phát kiến địa lí',
      question_text: 'Hệ quả kinh tế tích cực lớn nhất của các cuộc đại phát kiến địa lí là gì?',
      options: {
        A: 'Mở rộng thị trường buôn bán quốc tế, thúc đẩy tích lũy tư bản ban đầu ở Tây Âu',
        B: 'Làm sụp đổ hoàn toàn các ngành thủ công nghiệp',
        C: 'Khiến các nước châu Âu từ bỏ hoàn toàn đường hàng hải',
        D: 'Chấm dứt việc sử dụng tiền tệ trong lưu thông'
      },
      correct_answer: 'A',
      explanation: 'Phát kiến địa lí đem lại vàng bạc, hương liệu khổng lồ, hình thành thị trường thế giới và thúc đẩy sự ra đời của chủ nghĩa tư bản (trang 16 SGK).',
      memory_tip: 'Thương mại mở rộng năm châu, tư bản trỗi dậy làm giàu Tây Âu.',
      image_illustration: {
        title: 'Sơ đồ hệ quả của các cuộc phát kiến địa lí',
        source: 'Mục b trang 16 SGK Lịch sử & Địa lí 7',
        type: 'diagram',
        description: 'Con đường mới, thị trường mới, vàng bạc nguyên liệu dồi dào chảy về châu Âu.',
        svg_badge: '📈 Thị trường thương mại toàn cầu'
      }
    },
    {
      id: 18,
      category: 'mcq',
      subject: 'Lịch sử',
      topic: 'Hệ quả tiêu cực của phát kiến địa lí',
      question_text: 'Mặt trái đen tối, tiêu cực của các cuộc đại phát kiến địa lí đối với nhân loại là:',
      options: {
        A: 'Nảy sinh nạn buôn bán nô lệ da đen và quá trình cướp bóc thuộc địa tàn bạo',
        B: 'Làm tuyệt chủng hoàn toàn các loài thực vật ở châu Âu',
        C: 'Khiến tất cả các tôn giáo phương Tây bị tiêu diệt',
        D: 'Làm biến mất ngành đóng tàu'
      },
      correct_answer: 'A',
      explanation: 'Người da đen châu Phi bị săn bắt bán làm nô lệ, các nền văn minh bản địa châu Mỹ bị tàn sát và tài nguyên thuộc địa bị cướp bóc (trang 16, 17 SGK).',
      memory_tip: 'Buôn nô lệ da đen nhói lòng, thực dân cướp bóc đẫm dòng máu lệ.',
      image_illustration: {
        title: 'Hình ảnh mô phỏng con tàu buôn bán nô lệ thời trung đại',
        source: 'Hình 3 trang 16 SGK Lịch sử & Địa lí 7',
        type: 'photo',
        description: 'Nô lệ bị xích chân tay chen chúc trong khoang tàu ẩm tối đầy bi kịch.',
        svg_badge: '⛓️ Nạn buôn bán nô lệ da đen'
      }
    },
    {
      id: 19,
      category: 'mcq',
      subject: 'Lịch sử',
      topic: 'Hiện tượng "Cừu ăn thịt người"',
      question_text: 'Hiện tượng "Cừu ăn thịt người" ở nước Anh thời hậu kì trung đại gắn liền với phong trào nào?',
      options: {
        A: 'Phong trào "Rào đất cướp ruộng" của quý tộc mới để nuôi cừu lấy lông',
        B: 'Dịch bệnh làm cừu phát điên tấn công người',
        C: 'Cuộc chiến tranh nông dân đòi mở rộng đồng cỏ',
        D: 'Chính sách khai hoang lấn biển của nông nô'
      },
      correct_answer: 'A',
      explanation: 'Quý tộc Anh dùng bạo lực cướp ruộng đất của nông dân rào lại nuôi cừu dệt len xuất khẩu, đẩy hàng vạn nông dân vào cảnh vô gia cư (trang 16 SGK).',
      memory_tip: 'Rào đất cướp ruộng nuôi cừu, nông dân mất đất phiêu lưu làm thuê.',
      image_illustration: {
        title: 'Tư liệu về phong trào rào đất cướp ruộng ở Anh',
        source: 'Mục Em có biết? trang 16 SGK',
        type: 'diagram',
        description: 'Nhà tư tưởng Tô-mát Mo-rơ lên án sâu sắc thảm cảnh của người nông dân.',
        svg_badge: '🐑 Rào đất cướp ruộng thời cận đại'
      }
    },
    {
      id: 20,
      category: 'mcq',
      subject: 'Lịch sử',
      topic: 'Hình thành giai cấp tư sản và vô sản',
      question_text: 'Sau các cuộc phát kiến địa lí, hai giai cấp mới được hình thành trong lòng xã hội Tây Âu là:',
      options: {
        A: 'Giai cấp tư sản và giai cấp vô sản',
        B: 'Chủ nô và Nô lệ',
        C: 'Lãnh chúa và Nông nô',
        D: 'Giáo hoàng và Tu sĩ'
      },
      correct_answer: 'A',
      explanation: 'Chủ xưởng, thương nhân giàu có trở thành giai cấp tư sản; nông dân mất đất và thợ làm thuê biến thành giai cấp vô sản (trang 17 SGK).',
      memory_tip: 'Tư sản nắm vốn trong tay, Vô sản bán sức miệt mài làm thuê.',
      image_illustration: {
        title: 'Sơ đồ biến đổi xã hội Tây Âu cuối thời trung đại',
        source: 'Hình 4 trang 17 SGK Lịch sử & Địa lí 7',
        type: 'diagram',
        description: 'Tư sản (chủ xưởng, buôn lớn) đối kháng với Vô sản (lao động làm thuê).',
        svg_badge: '🏭 Tư sản và Vô sản xuất hiện'
      }
    },

    // --- PHẦN 2: TRẮC NGHIỆM ĐÚNG - SAI (CÂU 21 - 24) ---
    {
      id: 21,
      category: 'true_false',
      subject: 'Địa lý',
      topic: 'Tự nhiên & Môi trường Châu Phi',
      question_text: 'Về đặc điểm tự nhiên và môi trường sinh thái của châu Phi:',
      true_false_items: [
        { subId: 'a', statement: 'Châu Phi có khí hậu khô nóng bậc nhất thế giới, các đới khí hậu phân bố đối xứng qua xích đạo.', is_correct: true, explanation: 'ĐÚNG: Đường xích đạo đi qua giữa lục địa nên cảnh quan đối xứng bắc - nam.' },
        { subId: 'b', statement: 'Hoang mạc Xa-ha-ra có tuyết rơi phủ dày quanh năm như Bắc Cực.', is_correct: false, explanation: 'SAI: Xa-ha-ra là hoang mạc nhiệt đới cát đá cực kì khô nóng.' },
        { subId: 'c', statement: 'Châu Phi sở hữu nhiều hồ kiến tạo sâu và dài như hồ Tan-ga-ni-ca, hồ Tuốc-ca-na.', is_correct: true, explanation: 'ĐÚNG: Hình thành từ vết nứt đứt gãy Đông Phi khổng lồ (trang 130 SGK).' },
        { subId: 'd', statement: 'Rừng nhiệt đới rậm rạp chiếm 90% diện tích toàn bộ châu Phi.', is_correct: false, explanation: 'SAI: Rừng xích đạo ẩm chỉ tập trung ở bồn địa Công-gô, phần lớn diện tích là xa van và hoang mạc.' }
      ],
      explanation: 'Châu Phi đặc trưng bởi tính khô nóng, hoang mạc khổng lồ và hệ thống đứt gãy Đông Phi nổi tiếng.',
      memory_tip: 'Khô nóng hàng đầu thế giới, đối xứng hai bên đường xích đạo phân kì.'
    },
    {
      id: 22,
      category: 'true_false',
      subject: 'Địa lý',
      topic: 'Khai thác rừng A-ma-dôn ở Nam Mỹ',
      question_text: 'Về thực trạng khai thác và bảo vệ rừng nhiệt đới A-ma-dôn:',
      true_false_items: [
        { subId: 'a', statement: 'Rừng A-ma-dôn là lá phổi xanh điều hòa khí hậu toàn cầu và lưu trữ nguồn gen vô giá.', is_correct: true, explanation: 'ĐÚNG: Hấp thụ CO2 khổng lồ và là nơi cư trú của hàng triệu loài sinh vật.' },
        { subId: 'b', statement: 'Diện tích rừng A-ma-dôn ở Bra-xin liên tục suy giảm do làm đường giao thông, đào mỏ và cháy rừng.', is_correct: true, explanation: 'ĐÚNG: Từ 4,0 triệu km² (1970) giảm xuống còn 3,39 triệu km² (2019) (trang 155 SGK).' },
        { subId: 'c', statement: 'Các quốc gia Nam Mỹ không cần bảo vệ rừng A-ma-dôn vì rừng có thể tự hồi phục vô tận trong vài ngày.', is_correct: false, explanation: 'SAI: Rừng bị phá hủy nặng nề làm mất cân bằng sinh thái, cần sự chung tay bảo vệ cấp bách.' },
        { subId: 'd', statement: 'Kênh đào Pa-na-ma được đào xuyên qua rừng rậm A-ma-dôn ở Bra-xin.', is_correct: false, explanation: 'SAI: Kênh Pa-na-ma nằm ở eo đất Trung Mỹ nối Đại Tây Dương với Thái Bình Dương.' }
      ],
      explanation: 'Vấn đề cấp bách bảo vệ rừng A-ma-dôn trước hiểm họa tàn phá và cháy rừng.',
      memory_tip: 'Bảo vệ A-ma-dôn lá phổi xanh, giữ gìn cân bằng cho toàn Trái Đất.'
    },
    {
      id: 23,
      category: 'true_false',
      subject: 'Lịch sử',
      topic: 'Các cuộc hải trình phát kiến địa lí',
      question_text: 'Về hành trình của các nhà phát kiến địa lí vĩ đại thế kỉ XV - XVI:',
      true_false_items: [
        { subId: 'a', statement: 'Bồ Đào Nha và Tây Ban Nha là hai quốc gia tiên phong đi đầu trong các cuộc phát kiến.', is_correct: true, explanation: 'ĐÚNG: Vị trí giáp Đại Tây Dương và sự bảo trợ của hoàng gia thúc đẩy hàng hải.' },
        { subId: 'b', statement: 'C. Cô-lôm-bô cho đến lúc qua đời vẫn tin rằng mình đã đặt chân đến vùng đất Ấn Độ.', is_correct: true, explanation: 'ĐÚNG: Ông gọi thổ dân bản địa châu Mỹ là người "In-đi-an" (người Ấn Độ).' },
        { subId: 'c', statement: 'Tên gọi châu lục "Châu Mỹ" (America) được đặt theo tên của nhà hàng hải A-mê-ri-gô Vex-pu-xi.', is_correct: true, explanation: 'ĐÚNG: Amerigo Vespucci khẳng định đây là "Tân thế giới" chứ không phải châu Á (trang 141 SGK).' },
        { subId: 'd', statement: 'Ma-gien-lăng đã hoàn thành trọn vẹn chuyến đi vòng quanh Trái Đất và trở về Li-xbon an toàn.', is_correct: false, explanation: 'SAI: Ma-gien-lăng bị thiệt mạng tại Phi-líp-pin năm 1521; cấp phó Ê-ca-nô đưa đoàn trở về.' }
      ],
      explanation: 'Những sự thật lịch sử thú vị về tên gọi châu Mỹ và chuyến đi vòng quanh thế giới.',
      memory_tip: 'A-mê-ri-gô đặt tên châu Mỹ, Ma-gien-lăng hy sinh tại Phi-líp-pin.'
    },
    {
      id: 24,
      category: 'true_false',
      subject: 'Lịch sử',
      topic: 'Sự hình thành quan hệ sản xuất tư bản chủ nghĩa',
      question_text: 'Về quá trình tích lũy ban đầu của chủ nghĩa tư bản ở Tây Âu:',
      true_false_items: [
        { subId: 'a', statement: 'Nguồn vốn ban đầu của tư sản chủ yếu đến từ cướp bóc vàng bạc ở thuộc địa và buôn bán nô lệ.', is_correct: true, explanation: 'ĐÚNG: Tích lũy tư bản nguyên thủy bằng bạo lực và bóc lột thuộc địa (trang 16 SGK).' },
        { subId: 'b', statement: 'Đội ngũ công nhân làm thuê được hình thành từ những nông dân bị cướp mất ruộng đất.', is_correct: true, explanation: 'ĐÚNG: Nông dân không còn ruộng cày cấy buộc phải vào xưởng bán sức lao động.' },
        { subId: 'c', statement: 'Chế độ phong kiến Tây Âu lập tức bị xóa bỏ hoàn toàn ngay sau năm 1492.', is_correct: false, explanation: 'SAI: Chế độ phong kiến vẫn tồn tại nhiều thế kỉ, mầm mống tư bản chỉ mới hình thành.' },
        { subId: 'd', statement: 'Hình thức kinh doanh công trường thủ công dựa trên máy móc hơi nước tự động hoàn toàn.', is_correct: false, explanation: 'SAI: Công trường thủ công chủ yếu dùng sức người và công cụ thủ công chuyên môn hóa.' }
      ],
      explanation: 'Bản chất quá trình tích lũy tư bản và hình thành quan hệ bóc lột chủ xưởng - thợ thuyền.',
      memory_tip: 'Công trường thủ công phân công lao động, tích lũy vốn bằng vàng thuộc địa.'
    },

    // --- PHẦN 3: BÀI TẬP TÍNH TOÁN ĐỊA LÝ (2 MẬT ĐỘ + 2 TỈ TRỌNG) ---
    {
      id: 25,
      category: 'density_calc',
      subject: 'Địa lý',
      topic: 'Tính Mật độ dân số Châu Phi năm 2020',
      question_text: 'Năm 2020, số dân của châu Phi là khoảng 1.340 triệu người, diện tích tự nhiên là 30,3 triệu km² (theo SGK trang 127 và trang 133). Hãy tính mật độ dân số trung bình của châu Phi (làm tròn số nguyên)?',
      calc_data: {
        formula: 'Mật độ dân số = Số dân / Diện tích (người/km²)',
        input_unit: 'người/km²',
        steps: [
          'Số dân châu Phi = 1.340 triệu người',
          'Diện tích châu Phi = 30,3 triệu km²',
          'Phép tính: 1.340 / 30,3 ≈ 44,22 người/km²',
          'Làm tròn đến hàng đơn vị: 44 người/km²'
        ],
        result: '44 người/km²'
      },
      correct_answer: '44 người/km²',
      explanation: 'Châu Phi có mật độ dân số trung bình khoảng 44 người/km², thuộc hàng thấp so với châu Á (150 ng/km²) và châu Âu (75 ng/km²). Dân cư phân bố không đều, thưa thớt ở sa mạc.',
      memory_tip: 'Một nghìn ba trăm bốn mươi chia ba mươi phẩy ba, ra bốn mươi tư (44) người/km².',
      image_illustration: {
        title: 'Bản đồ phân bố dân cư và đô thị châu Phi',
        source: 'Bài 10 trang 133 SGK Lịch sử & Địa lí 7',
        type: 'map',
        description: 'Dân cư tập trung đông ở thung lũng sông Nin và duyên hải vịnh Ghi-nê, hoang mạc hầu như không người.',
        svg_badge: '📊 Mật độ dân số Châu Phi: 44 ng/km²'
      }
    },
    {
      id: 26,
      category: 'density_calc',
      subject: 'Địa lý',
      topic: 'Tính Mật độ dân số Bắc Mỹ năm 2020',
      question_text: 'Năm 2020, khu vực Bắc Mỹ (gồm Hoa Kỳ và Ca-na-đa) có số dân khoảng 369 triệu người trên diện tích tự nhiên là 24,2 triệu km². Hãy tính mật độ dân số trung bình của Bắc Mỹ (làm tròn số nguyên)?',
      calc_data: {
        formula: 'Mật độ dân số = Số dân / Diện tích (người/km²)',
        input_unit: 'người/km²',
        steps: [
          'Số dân Bắc Mỹ = 369.000.000 người',
          'Diện tích Bắc Mỹ = 24.200.000 km²',
          'Phép tính: 369 / 24,2 ≈ 15,25 người/km²',
          'Làm tròn đến hàng đơn vị: 15 người/km²'
        ],
        result: '15 người/km²'
      },
      correct_answer: '15 người/km²',
      explanation: 'Bắc Mỹ có đất rộng người thưa, mật độ chỉ khoảng 15 người/km², dân cư phân bố rất không đều: đông ở duyên hải Ngũ Hồ và Đại Tây Dương, thưa ở miền núi Coóc-đi-e.',
      memory_tip: 'Đất rộng bao la Bắc Mỹ, trung bình chỉ mười lăm (15) người một cây số vuông.',
      image_illustration: {
        title: 'Lược đồ phân bố dân cư và đô thị Bắc Mỹ',
        source: 'Hình 1 trang 146 SGK Lịch sử & Địa lí 7',
        type: 'map',
        description: 'Các luồng nhập cư hội tụ về dải đô thị ven Ngũ Hồ và bờ đông Đại Tây Dương.',
        svg_badge: '🏙️ Mật độ Bắc Mỹ: 15 ng/km²'
      }
    },
    {
      id: 27,
      category: 'percentage_calc',
      subject: 'Địa lý',
      topic: 'Tính Tỉ lệ suy giảm diện tích rừng A-ma-dôn ở Bra-xin',
      question_text: 'Dựa vào bảng số liệu diện tích rừng A-ma-dôn ở Bra-xin giai đoạn 1970 - 2019 (trang 155 SGK): Năm 1970 đạt 4,0 triệu km², đến năm 2019 chỉ còn 3,39 triệu km² (mất đi 0,61 triệu km²). Hãy tính tỉ lệ diện tích rừng bị mất đi so với năm 1970 (làm tròn 2 chữ số thập phân)?',
      calc_data: {
        formula: 'Tỉ lệ mất (%) = (Diện tích mất đi / Diện tích năm 1970) * 100',
        input_unit: '%',
        steps: [
          'Diện tích rừng năm 1970 = 4,0 triệu km²',
          'Diện tích rừng năm 2019 = 3,39 triệu km²',
          'Diện tích rừng bị suy giảm = 4,0 - 3,39 = 0,61 triệu km²',
          'Phép tính: (0,61 / 4,0) * 100 = 15,25%'
        ],
        result: '15,25%'
      },
      correct_answer: '15,25%',
      explanation: 'Trong vòng 50 năm qua, Bra-xin đã mất đi tới 15,25% diện tích rừng nguyên sinh A-ma-dôn do khai thác gỗ, đốt nương rẫy và làm đường (trang 155 SGK).',
      memory_tip: 'Mất sáu trăm mười nghìn cây vuông, chiếm mười lăm phẩy hai lăm phần trăm rừng quý.',
      image_illustration: {
        title: 'Bảng diện tích rừng A-ma-dôn ở Bra-xin giai đoạn 1970 - 2019',
        source: 'Bảng trang 155 SGK Lịch sử & Địa lí 7',
        type: 'chart',
        description: 'Biểu đồ đường suy giảm liên tục từ 4,0 xuống 3,39 triệu km².',
        svg_badge: '📉 Rừng A-ma-dôn mất 15,25%'
      }
    },
    {
      id: 28,
      category: 'percentage_calc',
      subject: 'Địa lý',
      topic: 'Tính Tỉ trọng dân số Châu Phi so với thế giới năm 2020',
      question_text: 'Năm 2020, số dân thế giới là 7.794,8 triệu người, trong đó châu Phi có khoảng 1.340 triệu người (trang 133 SGK). Hãy tính tỉ trọng dân số châu Phi trong tổng dân số thế giới (làm tròn 1 chữ số thập phân)?',
      calc_data: {
        formula: 'Tỉ trọng (%) = (Dân số châu Phi / Dân số thế giới) * 100',
        input_unit: '%',
        steps: [
          'Dân số châu Phi = 1.340 triệu người',
          'Dân số toàn cầu = 7.794,8 triệu người',
          'Phép tính: (1.340 / 7.794,8) * 100 = 17,19%',
          'Làm tròn: 17,2% (SGK ghi nhận chiếm khoảng 17% thế giới)'
        ],
        result: '17,2% (hoặc ~17%)'
      },
      correct_answer: '17,2%',
      explanation: 'Châu Phi chiếm khoảng 17,2% dân số thế giới và là châu lục có tỉ lệ gia tăng dân số tự nhiên cao nhất hành tinh (2,54% giai đoạn 2015-2020) (trang 133 SGK).',
      memory_tip: 'Một phần sáu dân cư địa cầu, mười bảy phẩy hai phần trăm sinh sôi.',
      image_illustration: {
        title: 'Biểu đồ tỉ lệ tăng tự nhiên dân số châu Phi và thế giới',
        source: 'Bảng trang 133 SGK Lịch sử & Địa lí 7',
        type: 'chart',
        description: 'Tỉ lệ tăng tự nhiên châu Phi 2,54%, cao gấp 2,3 lần mức trung bình thế giới (1,09%).',
        svg_badge: '📈 Tỉ trọng dân số Châu Phi ~17,2%'
      }
    },

    // --- PHẦN 4: TỰ LUẬN VẬN DỤNG (CÂU 29 - 30) ---
    {
      id: 29,
      category: 'essay',
      subject: 'Địa lý',
      topic: 'Vấn đề khai thác và bảo vệ rừng A-ma-dôn',
      question_text: 'Dựa vào kiến thức đã học ở bài 17 (trang 154 - 155 SGK), hãy nêu vai trò sinh thái to lớn của rừng A-ma-dôn và phân tích những hậu quả môi trường nghiêm trọng khi khu rừng này bị tàn phá?',
      essay_rubric: {
        max_score: 3.0,
        criteria: [
          { point: 'Vai trò: "Lá phổi xanh của Trái Đất", hấp thụ khí CO2, thải ra O2, điều hòa khí hậu toàn cầu, lưu trữ nguồn dự trữ sinh học khổng lồ và nguồn nước ngọt dồi dào.', score: 1.5 },
          { point: 'Hậu quả tàn phá: Gây xói mòn rửa trôi đất, lũ lụt sạt lở; gia tăng khí nhà kính làm biến đổi khí hậu toàn cầu; làm mất môi trường sống dẫn tới tuyệt chủng nhiều loài động thực vật quý hiếm.', score: 1.5 }
        ]
      },
      explanation: 'Nội dung cốt lõi của bài 17 về khai thác, sử dụng và bảo vệ rừng A-ma-dôn bền vững.',
      memory_tip: 'Rừng A-ma-dôn hấp thụ CO2, tàn phá rừng đe dọa trực tiếp sự sống loài người.',
      image_illustration: {
        title: 'Cháy rừng và tàn phá rừng A-ma-dôn ở Bra-xin năm 2020',
        source: 'Hình 4 và Hình 5 trang 155 SGK Lịch sử & Địa lí 7',
        type: 'photo',
        description: 'Khói lửa ngút trời thiêu rụi cây gỗ quý và hủy hoại môi trường sống hoang dã.',
        svg_badge: '🔥 Cứu lấy rừng nhiệt đới A-ma-dôn'
      }
    },
    {
      id: 30,
      category: 'essay',
      subject: 'Lịch sử',
      topic: 'Hệ quả lịch sử của các cuộc đại phát kiến địa lí',
      question_text: 'Hãy phân tích những tác động tích cực và mặt trái tiêu cực của các cuộc đại phát kiến địa lí thế kỉ XV - XVI đối với tiến trình lịch sử nhân loại?',
      essay_rubric: {
        max_score: 2.0,
        criteria: [
          { point: 'Tác động tích cực: Mở ra những con đường biển mới, phát hiện châu lục mới; thúc đẩy giao lưu văn hóa giữa các châu lục; mở rộng thị trường thương mại thế giới và tích lũy tư bản cho giai cấp tư sản Tây Âu.', score: 1.0 },
          { point: 'Mặt trái tiêu cực: Làm nảy sinh nạn buôn bán nô lệ da đen châu Phi tàn bạo; mở đầu quá trình xâm chiếm, cướp bóc thuộc địa của chủ nghĩa thực dân đối với châu Á, châu Phi và châu Mỹ.', score: 1.0 }
        ]
      },
      explanation: 'Đánh giá biện chứng hai mặt của các cuộc phát kiến địa lí theo yêu cầu chuẩn môn Lịch sử lớp 7 (trang 16 SGK & trang 169).',
      memory_tip: 'Mở rộng thị trường giao lưu toàn cầu, nhưng gieo rắc bi kịch thực dân nô lệ.',
      image_illustration: {
        title: 'Lược đồ các tuyến phát kiến địa lí lớn trên thế giới',
        source: 'Hình 2 trang 167 SGK Lịch sử & Địa lí 7',
        type: 'map',
        description: 'Tuyến đường của Cô-lôm-bô (châu Mỹ), V. Ga-ma (Ấn Độ) và Ma-gien-lăng (vòng quanh Trái Đất).',
        svg_badge: '🌐 Tác động của Đại phát kiến địa lí'
      }
    }
  ]
};
