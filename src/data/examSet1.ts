import { ExamSet } from '../types/exams';

export const EXAM_SET_1: ExamSet = {
  id: "de-01",
  title: "Bộ Đề Số 01: Châu Âu & Tây Âu Trung Đại",
  subtitle: "Tự nhiên, Khí hậu, Sông ngòi, Dân cư, Đô thị hóa, Lãnh địa & Phục hưng (30 câu)",
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
      topic: 'Vị trí địa lý châu Âu',
      question_text: 'Châu Âu là bộ phận phía tây của lục địa nào sau đây?',
      options: {
        A: 'Lục địa Á - Âu',
        B: 'Lục địa Phi',
        C: 'Lục địa Bắc Mỹ',
        D: 'Lục địa Ô-xtrây-li-a'
      },
      correct_answer: 'A',
      explanation: 'Châu Âu là một bộ phận nằm ở phía tây của lục địa Á - Âu rộng lớn, diện tích trên 10 triệu km² (trang 96 SGK).',
      memory_tip: 'Âu liền với Á phía Tây, trên mười triệu cây số vuông.',
      image_illustration: {
        title: 'Bản đồ tự nhiên châu Âu',
        source: 'Hình 1 trang 97 SGK Lịch sử & Địa lí 7',
        type: 'map',
        description: 'Vị trí châu Âu phía tây lục địa Á - Âu, giáp Bắc Băng Dương (Bắc), Đại Tây Dương (Tây), Địa Trung Hải (Nam), dãy U-ran (Đông).',
        svg_badge: '🗺️ Lược đồ tự nhiên châu Âu (Trang 97)'
      }
    },
    {
      id: 2,
      category: 'mcq',
      subject: 'Địa lý',
      topic: 'Địa hình châu Âu',
      question_text: 'Dạng địa hình nào chiếm tới 2/3 diện tích của châu Âu?',
      options: {
        A: 'Miền núi cao uốn nếp',
        B: 'Đồng bằng rộng lớn',
        C: 'Cao nguyên đá vôi',
        D: 'Bồn địa hoang mạc'
      },
      correct_answer: 'B',
      explanation: 'Đồng bằng chiếm 2/3 diện tích châu lục, kéo dài liên tục từ tây sang đông: đồng bằng Bắc Âu, Đông Âu,... (trang 97 SGK).',
      memory_tip: 'Hai phần ba là đồng bằng, trải dài tít tắp từ Tây sang Đông.',
      image_illustration: {
        title: 'Lược đồ các đồng bằng lớn châu Âu',
        source: 'Hình 1 trang 97 SGK Lịch sử & Địa lí 7',
        type: 'map',
        description: 'Đồng bằng Đông Âu, đồng bằng Bắc Âu, hạ lưu Đa-nuýp chiếm ưu thế vượt trội.',
        svg_badge: '🏞️ Địa hình Đồng bằng chiếm 2/3 diện tích'
      }
    },
    {
      id: 3,
      category: 'mcq',
      subject: 'Địa lý',
      topic: 'Dãy núi Alps (An-pơ)',
      question_text: 'Hệ thống núi trẻ đồ sộ và cao nhất ở phía nam châu Âu là dãy núi nào?',
      options: {
        A: 'Dãy U-ran',
        B: 'Dãy An-pơ (Alps)',
        C: 'Dãy Xcan-đi-na-vi',
        D: 'Dãy Các-pát'
      },
      correct_answer: 'B',
      explanation: 'Dãy An-pơ có nhiều đỉnh trên 4000m, cao nhất là đỉnh Mông Blăng (4.810m) ở biên giới Pháp - I-ta-li-a (trang 98 SGK).',
      memory_tip: 'An-pơ núi trẻ đỉnh nhọn sườn dốc quanh năm tuyết phủ.',
      image_illustration: {
        title: 'Một phần dãy An-pơ ở Thụy Sĩ',
        source: 'Hình 2 trang 98 SGK Lịch sử & Địa lí 7',
        type: 'photo',
        description: 'Đỉnh núi phủ tuyết trắng xóa và thung lũng băng hà tuyệt đẹp ở Thụy Sĩ.',
        svg_badge: '🏔️ Dãy An-pơ (Mont Blanc 4.810m)'
      }
    },
    {
      id: 4,
      category: 'mcq',
      subject: 'Địa lý',
      topic: 'Khí hậu ôn đới hải dương',
      question_text: 'Đặc điểm nổi bật của khí hậu ôn đới hải dương ở Tây Âu là:',
      options: {
        A: 'Mùa đông ấm, mùa hạ mát, có mưa quanh năm',
        B: 'Mùa đông rất lạnh khô, mùa hạ nóng ẩm',
        C: 'Mùa hạ khô hạn, mùa thu đông mưa dầm',
        D: 'Quanh năm giá lạnh dưới 0 độ C'
      },
      correct_answer: 'A',
      explanation: 'Nhờ dòng biển nóng Bắc Đại Tây Dương và gió Tây ôn đới, Tây Âu có mùa đông tương đối ấm, mùa hạ mát, mưa điều hòa quanh năm (800 - 1000 mm) (trang 98 SGK).',
      memory_tip: 'Ôn đới hải dương gió Tây: đông ấm hè mát quanh năm mưa đều.',
      image_illustration: {
        title: 'Biểu đồ nhiệt độ & lượng mưa Gla-xgâu (Anh)',
        source: 'Mục Luyện tập trang 100 SGK',
        type: 'chart',
        description: 'Nhiệt độ trung bình 8,1°C, lượng mưa 1.228 mm quanh năm phân bố đều.',
        svg_badge: '📊 Biểu đồ Khí hậu Ôn đới Hải dương'
      }
    },
    {
      id: 5,
      category: 'mcq',
      subject: 'Địa lý',
      topic: 'Khí hậu Địa Trung Hải',
      question_text: 'Khu vực Nam Âu giáp Địa Trung Hải có mùa hạ với thời tiết như thế nào?',
      options: {
        A: 'Mưa rào nhiệt đới tầm tã',
        B: 'Nắng nóng và khô hạn',
        C: 'Bão tuyết kéo dài',
        D: 'Âm u sương mù dày đặc'
      },
      correct_answer: 'B',
      explanation: 'Khí hậu cận nhiệt Địa Trung Hải có mùa hạ nóng và khô; thời tiết ổn định; mùa đông ấm và mưa nhiều hơn (500 - 700 mm) (trang 99 SGK).',
      memory_tip: 'Địa Trung Hải: hè nóng khô hạn, thu đông mưa dầm.',
      image_illustration: {
        title: 'Biểu đồ khí hậu Rô-ma (I-ta-li-a)',
        source: 'Mục Luyện tập trang 100 SGK',
        type: 'chart',
        description: 'Mùa hạ tháng 6-8 lượng mưa cực thấp, nhiệt độ cao >25°C.',
        svg_badge: '☀️ Cận nhiệt Địa Trung Hải (Hè khô nóng)'
      }
    },
    {
      id: 6,
      category: 'mcq',
      subject: 'Địa lý',
      topic: 'Mạng lưới sông ngòi châu Âu',
      question_text: 'Đặc điểm quan trọng về mạng lưới sông ngòi của châu Âu là gì?',
      options: {
        A: 'Mạng lưới sông ngòi rất phát triển, dày đặc và nối với nhau bằng hệ thống kênh đào rộng khắp',
        B: 'Sông ngòi rất nghèo nàn, phần lớn sông cụt dòng trong cát',
        C: 'Chỉ chảy vào mùa hạ, mùa đông sông khô cạn trơ đáy',
        D: 'Không có sông nào đổ ra Đại Tây Dương'
      },
      correct_answer: 'A',
      explanation: 'Châu Âu có lượng nước dồi dào, hệ thống kênh đào nối liền các con sông lớn rất phát triển, thuận lợi cho giao thông đường thủy (trang 99 SGK).',
      memory_tip: 'Sông ngòi dày đặc dồi dào, kênh đào kết nối muôn phương giao thương.',
      image_illustration: {
        title: 'Đoạn sông Đa-nuýp chảy qua Thủ đô Bu-đa-pét (Hung-ga-ri)',
        source: 'Hình 4 trang 99 SGK Lịch sử & Địa lí 7',
        type: 'photo',
        description: 'Sông Đa-nuýp dài 2.850 km chảy qua nhiều thủ đô châu Âu, tàu bè tấp nập.',
        svg_badge: '🚢 Hệ thống Kênh đào & Sông ngòi dày đặc'
      }
    },
    {
      id: 7,
      category: 'mcq',
      subject: 'Địa lý',
      topic: 'Sông Vôn-ga',
      question_text: 'Sông dài nhất châu Âu chảy qua lãnh thổ Liên bang Nga đổ ra biển Cax-pi là con sông nào?',
      options: {
        A: 'Sông Đa-nuýp (Danube)',
        B: 'Sông Vôn-ga (Volga)',
        C: 'Sông Rai-nơ (Rhine)',
        D: 'Sông Thêm-xơ (Thames)'
      },
      correct_answer: 'B',
      explanation: 'Sông Vôn-ga dài 3.690 km, là con sông dài nhất và nhiều nước nhất châu Âu (trang 99 SGK).',
      memory_tip: 'Vôn-ga sông mẹ nước Nga, ba nghìn bảy trăm cây số dài nhất châu Âu.',
      image_illustration: {
        title: 'Bản đồ lưu vực sông Vôn-ga và biển Ca-xpi',
        source: 'Mục Em có biết? trang 99 SGK',
        type: 'map',
        description: 'Bắt nguồn từ đồi Van-đai, chảy qua đồng bằng Đông Âu đổ ra hồ Ca-xpi.',
        svg_badge: '🌊 Sông Vôn-ga (3.690 km)'
      }
    },
    {
      id: 8,
      category: 'mcq',
      subject: 'Địa lý',
      topic: 'Đới thiên nhiên Bắc Âu',
      question_text: 'Thảm thực vật đài nguyên (đồng rêu, địa y) phân bố chủ yếu ở khu vực nào của châu Âu?',
      options: {
        A: 'Ven bờ biển Địa Trung Hải',
        B: 'Các đảo, quần đảo ở Bắc Băng Dương và dải hẹp phía bắc châu lục',
        C: 'Đồng bằng hạ lưu sông Rai-nơ',
        D: 'Bán đảo I-bê-rích nắng ấm'
      },
      correct_answer: 'B',
      explanation: 'Đới lạnh ở các đảo bắc Bắc Băng Dương có sinh vật nghèo nàn, chủ yếu là rêu, địa y và cây bụi lùn (trang 99, 100 SGK).',
      memory_tip: 'Đài nguyên cực Bắc lạnh lùng, chỉ rêu địa y sống cùng gió sương.',
      image_illustration: {
        title: 'Đài nguyên ở Bắc Âu',
        source: 'Hình 5 trang 100 SGK Lịch sử & Địa lí 7',
        type: 'photo',
        description: 'Cảnh quan rêu phong, địa y và cây bụi cằn cỗi trên nền đất đóng băng.',
        svg_badge: '❄️ Cảnh quan Đài nguyên Bắc Âu'
      }
    },
    {
      id: 9,
      category: 'mcq',
      subject: 'Địa lý',
      topic: 'Rừng lá kim (Tai-ga)',
      question_text: 'Rừng lá kim trên đất pốt dôn ở châu Âu phát triển mạnh nhất tại vùng nào?',
      options: {
        A: 'Khu vực Bắc Âu có khí hậu lạnh và ẩm ướt',
        B: 'Đồng bằng duyên hải Nam Âu',
        C: 'Khu vực sa mạc Trung Á',
        D: 'Vùng đầm lầy ven biển Băng Đảo'
      },
      correct_answer: 'A',
      explanation: 'Phía bắc đới ôn hòa có khí hậu lạnh và ẩm ướt, thực vật chủ yếu là rừng lá kim (thông, tùng) phát triển trên đất pốt dôn (trang 99 SGK).',
      memory_tip: 'Bắc Âu giá lạnh ẩm dồi, bạt ngàn thông biếc đất pốt dôn xám.',
      image_illustration: {
        title: 'Rừng lá kim ở Trung và Bắc Âu',
        source: 'Hình 6 trang 100 SGK Lịch sử & Địa lí 7',
        type: 'photo',
        description: 'Những cánh rừng thông xanh ngát thẳng tắp của vùng ôn đới lạnh.',
        svg_badge: '🌲 Rừng lá kim Taiga'
      }
    },
    {
      id: 10,
      category: 'mcq',
      subject: 'Địa lý',
      topic: 'Cơ cấu dân số theo độ tuổi châu Âu',
      question_text: 'Hiện nay, xu hướng biến đổi cơ cấu dân số theo tuổi ở châu Âu là:',
      options: {
        A: 'Dân số ngày càng trẻ hóa nhanh chóng',
        B: 'Dân số già, tỉ lệ người trên 65 tuổi tăng nhanh',
        C: 'Tỉ lệ trẻ em dưới 15 tuổi tăng vọt gấp đôi',
        D: 'Số người trong độ tuổi lao động đạt 90%'
      },
      correct_answer: 'B',
      explanation: 'Châu Âu có cơ cấu dân số già: tỉ lệ dưới 15 tuổi giảm (năm 2020 còn 16,1%), tỉ lệ trên 65 tuổi tăng lên 19,1% (trang 101 SGK).',
      memory_tip: 'Dân số già hóa âu lo: trẻ em ít lại, người già tăng nhanh.',
      image_illustration: {
        title: 'Biểu đồ tròn cơ cấu dân số theo nhóm tuổi châu Âu năm 1990 và 2020',
        source: 'Trang 208 SGV & Bảng 1 trang 101 SGK',
        type: 'chart',
        description: 'Tỉ lệ >65 tuổi tăng từ 12,6% (1990) lên 19,1% (2020).',
        svg_badge: '👥 Biểu đồ Cơ cấu Dân số Già'
      }
    },
    {
      id: 11,
      category: 'mcq',
      subject: 'Địa lý',
      topic: 'Đô thị hóa châu Âu',
      question_text: 'Tỉ lệ dân số sống ở khu vực đô thị của châu Âu năm 2020 đạt khoảng bao nhiêu?',
      options: {
        A: 'Khoảng 45%',
        B: 'Khoảng 75%',
        C: 'Dưới 30%',
        D: 'Gần 99%'
      },
      correct_answer: 'B',
      explanation: 'Châu Âu là châu lục có mức độ đô thị hoá cao, năm 2020 khoảng 75% số dân sống ở khu vực đô thị (trang 103 SGK).',
      memory_tip: 'Ba phần tư dân số sống ở phố hoa đô hội.',
      image_illustration: {
        title: 'Bản đồ tỉ lệ dân đô thị và một số đô thị châu Âu năm 2020',
        source: 'Hình 1 trang 102 SGK Lịch sử & Địa lí 7',
        type: 'map',
        description: 'Các dải đô thị nối liền nhau từ Li-vơ-pun (Anh) đến Côn (Đức).',
        svg_badge: '🏙️ Tỉ lệ dân thành thị 75%'
      }
    },
    {
      id: 12,
      category: 'mcq',
      subject: 'Địa lý',
      topic: 'Liên minh châu Âu (EU)',
      question_text: 'Tính đến năm 2020, Liên minh châu Âu (EU) gồm bao nhiêu quốc gia thành viên?',
      options: {
        A: '15 quốc gia',
        B: '27 quốc gia',
        C: '35 quốc gia',
        D: '50 quốc gia'
      },
      correct_answer: 'B',
      explanation: 'Năm 2020, sau khi Vương quốc Anh rời EU (Brexit), Liên minh châu Âu có 27 quốc gia thành viên với số dân khoảng 447 triệu người (trang 108 SGK).',
      memory_tip: 'Hai mươi bảy nước EU, đồng tiền chung Ơ-rô thị trường mở.',
      image_illustration: {
        title: 'Bản đồ các quốc gia thành viên Liên minh châu Âu (EU)',
        source: 'Hình 1 trang 107 SGK Lịch sử & Địa lí 7',
        type: 'map',
        description: 'Trụ sở EU đặt tại Brúc-xen (Bỉ), liên kết kinh tế chính trị hàng đầu.',
        svg_badge: '🇪🇺 Liên minh châu Âu (27 thành viên)'
      }
    },
    {
      id: 13,
      category: 'mcq',
      subject: 'Lịch sử',
      topic: 'Sự sụp đổ của Tây La Mã',
      question_text: 'Sự kiện người Giéc-man lật đổ đế quốc Tây La Mã diễn ra vào năm nào?',
      options: {
        A: 'Năm 476',
        B: 'Năm 395',
        C: 'Năm 814',
        D: 'Năm 1492'
      },
      correct_answer: 'A',
      explanation: 'Năm 476, các bộ tộc người Giéc-man lật đổ hoàng đế Tây La Mã, thủ tiêu chế độ chiếm nô, lập các vương quốc mới, mở đầu thời kì phong kiến (trang 9 SGK).',
      memory_tip: 'Năm bốn bảy sáu (476) La Mã tan hoang, mở màn phong kiến Tây Âu bắt đầu.',
      image_illustration: {
        title: 'Trục thời gian các mốc lịch sử Tây Âu trung đại',
        source: 'Trang 8 SGK Lịch sử & Địa lí 7',
        type: 'diagram',
        description: 'Năm 476 sụp đổ Tây La Mã; thế kỉ XI thành thị ra đời; 1492 Cô-lôm-bô tìm ra châu Mỹ.',
        svg_badge: '⏳ Trục thời gian lịch sử Tây Âu'
      }
    },
    {
      id: 14,
      category: 'mcq',
      subject: 'Lịch sử',
      topic: 'Giai cấp phong kiến Tây Âu',
      question_text: 'Hai giai cấp cơ bản đối kháng trong xã hội phong kiến Tây Âu là:',
      options: {
        A: 'Chủ nô và Nô lệ',
        B: 'Lãnh chúa phong kiến và Nông nô',
        C: 'Tư sản và Vô sản',
        D: 'Địa chủ và Nông dân tự canh'
      },
      correct_answer: 'B',
      explanation: 'Xã hội hình thành hai giai cấp mới: Lãnh chúa phong kiến (chiếm ruộng đất, nắm quyền) và Nông nô (phụ thuộc, nộp tô) (trang 9 SGK).',
      memory_tip: 'Lãnh chúa có đất có quyền, Nông nô cày cấy nộp tiền nộp tô.',
      image_illustration: {
        title: 'Sơ đồ hình thành các giai cấp phong kiến Tây Âu',
        source: 'Hình 2 trang 10 SGK Lịch sử & Địa lí 7',
        type: 'diagram',
        description: 'Quý tộc Giéc-man + Quý tộc La Mã -> Lãnh chúa; Nông dân mất ruộng + Nô lệ -> Nông nô.',
        svg_badge: '👥 Sơ đồ Lãnh chúa & Nông nô'
      }
    },
    {
      id: 15,
      category: 'mcq',
      subject: 'Lịch sử',
      topic: 'Lãnh địa phong kiến',
      question_text: 'Bản chất kinh tế của lãnh địa phong kiến Tây Âu trung đại là:',
      options: {
        A: 'Tự nhiên, tự cấp tự túc và khép kín',
        B: 'Kinh tế hàng hóa trao đổi quốc tế',
        C: 'Kinh tế công xưởng cơ giới hóa',
        D: 'Hợp tác xã nông nghiệp tập thể'
      },
      correct_answer: 'A',
      explanation: 'Nền kinh tế lãnh địa mang tính chất tự cấp tự túc, nông nghiệp đóng vai trò chủ đạo, chỉ mua muối và sắt từ bên ngoài (trang 11 SGK).',
      memory_tip: 'Lãnh địa tự cấp tự dùng, hào sâu đóng kín chẳng cùng giao thương.',
      image_illustration: {
        title: 'Khu đất của lãnh chúa trong lãnh địa phong kiến',
        source: 'Hình 3 trang 10 SGK Lịch sử & Địa lí 7',
        type: 'diagram',
        description: 'Lâu đài lãnh chúa, hào nước bao bọc, nhà thờ, dinh thự và ruộng đất của nông nô.',
        svg_badge: '🏰 Pháo đài Lãnh địa phong kiến'
      }
    },
    {
      id: 16,
      category: 'mcq',
      subject: 'Lịch sử',
      topic: 'Thành thị trung đại',
      question_text: 'Thành thị trung đại ở Tây Âu bắt đầu xuất hiện vào khoảng thời gian nào?',
      options: {
        A: 'Thế kỉ I',
        B: 'Cuối thế kỉ XI',
        C: 'Thế kỉ XIV',
        D: 'Thế kỉ XVII'
      },
      correct_answer: 'B',
      explanation: 'Từ cuối thế kỉ XI, thủ công nghiệp phát triển, thợ thủ công trốn khỏi lãnh địa ra ngã ba đường lập xưởng bán hàng, hình thành thành thị (trang 12 SGK).',
      memory_tip: 'Cuối thế kỉ mười một (XI) bừng lên, thành thị thợ khéo đua nhau bán buôn.',
      image_illustration: {
        title: 'Thành phố Phi-ren-xê (Florence, Ý) hình thành từ thời trung đại',
        source: 'Hình 6 trang 12 SGK Lịch sử & Địa lí 7',
        type: 'photo',
        description: 'Thành phố buôn bán sầm uất với cầu vòm, nhà thờ mái vòm nổi tiếng.',
        svg_badge: '🏛️ Thành thị Phi-ren-xê thời trung đại'
      }
    },
    {
      id: 17,
      category: 'mcq',
      subject: 'Lịch sử',
      topic: 'Vai trò thành thị',
      question_text: 'Sự ra đời của các thành thị trung đại Tây Âu đã dẫn tới tác động to lớn nào?',
      options: {
        A: 'Phá vỡ nền kinh tế tự nhiên của lãnh địa, tạo tiền đề xóa bỏ cát cứ phong kiến',
        B: 'Làm cho chế độ chiếm nô phục hồi trở lại',
        C: 'Xóa bỏ hoàn toàn niềm tin tôn giáo của nhân dân',
        D: 'Biến Tây Âu thành thuộc địa của phương Đông'
      },
      correct_answer: 'A',
      explanation: 'Thành thị phá vỡ kinh tế tự nhiên, thúc đẩy kinh tế hàng hóa, góp phần xóa bỏ phong kiến phân quyền, mở ra các trường đại học (trang 12 SGK).',
      memory_tip: 'Thành thị như bông hoa rực rỡ, phá vỡ khép kín tự do mở đường.',
      image_illustration: {
        title: 'Sơ đồ vai trò của thành thị trung đại',
        source: 'Mục 4 trang 12 SGK Lịch sử & Địa lí 7',
        type: 'diagram',
        description: 'Tạo điều kiện kinh tế hàng hóa, xóa phân quyền, xuất hiện thị dân, trường đại học.',
        svg_badge: '💡 Vai trò lịch sử của Thành thị'
      }
    },
    {
      id: 18,
      category: 'mcq',
      subject: 'Lịch sử',
      topic: 'Văn hóa Phục hưng',
      question_text: 'Phong trào Văn hóa Phục hưng (thế kỉ XIV - XVII) bắt nguồn đầu tiên từ quốc gia nào?',
      options: {
        A: 'I-ta-li-a (Ý)',
        B: 'Nước Anh',
        C: 'Nước Pháp',
        D: 'Nước Đức'
      },
      correct_answer: 'A',
      explanation: 'Phong trào Văn hóa Phục hưng diễn ra đầu tiên ở I-ta-li-a thế kỉ XIV, sau đó lan nhanh sang các nước Tây Âu (trang 19 SGK).',
      memory_tip: 'I-ta-li-a cái nôi Phục hưng, ngọn cờ tư sản vươn tầm đỉnh cao.',
      image_illustration: {
        title: 'Tượng Đan-tê tại I-ta-li-a - Người mở đầu Phục hưng',
        source: 'Hình 2 trang 19 SGK Lịch sử & Địa lí 7',
        type: 'photo',
        description: 'Đan-tê (Dante Alighieri) với tác phẩm Thần khúc bất hủ.',
        svg_badge: '🇮🇹 Quê hương Phục hưng I-ta-li-a'
      }
    },
    {
      id: 19,
      category: 'mcq',
      subject: 'Lịch sử',
      topic: 'Lê-ô-na đơ Vanh-xi',
      question_text: 'Bức họa kiệt tác "Nàng La Giô-công-đơ" (Mona Lisa) và "Bữa tiệc cuối cùng" là của ai?',
      options: {
        A: 'Mi-ken-lăng-giơ',
        B: 'Lê-ô-na đơ Vanh-xi',
        C: 'Ra-pha-en',
        D: 'Sếch-xpia'
      },
      correct_answer: 'B',
      explanation: 'Leonardo da Vinci là danh họa, kỹ sư toàn năng thời Phục hưng, tác giả của nàng Mona Lisa với nụ cười bí ẩn (trang 19, 20 SGK).',
      memory_tip: 'Vanh-xi vẽ nàng Mô-na Li-sa, nụ cười bí ẩn ngàn năm say lòng.',
      image_illustration: {
        title: 'Bức tranh Nàng La Giô-công-đơ (Mona Lisa)',
        source: 'Hình 3 trang 20 SGK Lịch sử & Địa lí 7',
        type: 'photo',
        description: 'Bảo vật tại bảo tàng Louvre (Paris), đỉnh cao nghệ thuật vẽ sơn dầu.',
        svg_badge: '🎨 Kiệt tác Mona Lisa - Da Vinci'
      }
    },
    {
      id: 20,
      category: 'mcq',
      subject: 'Lịch sử',
      topic: 'Cải cách tôn giáo',
      question_text: 'Người đầu tiên khởi xướng phong trào Cải cách tôn giáo tại nước Đức vào năm 1517 là:',
      options: {
        A: 'Giăng Can-vanh',
        B: 'Mác-tin Lu-thơ (Martin Luther)',
        C: 'Tô-mát Muyn-xe',
        D: 'Cô-péc-ních'
      },
      correct_answer: 'B',
      explanation: 'Năm 1517, Martin Luther dán 95 luận đề phản đối việc bán thẻ miễn tội của Giáo hội lên cửa nhà thờ Vít-ten-béc (Đức) (trang 21 SGK).',
      memory_tip: 'Mác-tin Lu-thơ dán bản luận đề, thẻ miễn tội giả chẳng lừa được ai.',
      image_illustration: {
        title: 'Chân dung Mác-tin Lu-thơ (1483 - 1546)',
        source: 'Hình 4 trang 21 SGK Lịch sử & Địa lí 7',
        type: 'photo',
        description: 'Giáo sư thần học Đức dũng cảm lên án giáo hội bóc lột.',
        svg_badge: '📜 Luận đề Cải cách Tôn giáo 1517'
      }
    },

    // --- PHẦN 2: TRẮC NGHIỆM ĐÚNG - SAI (CÂU 21 - 24) ---
    {
      id: 21,
      category: 'true_false',
      subject: 'Địa lý',
      topic: 'Vị trí & Thiên nhiên Châu Âu',
      question_text: 'Khi tìm hiểu về đặc điểm tự nhiên của châu Âu:',
      true_false_items: [
        { subId: 'a', statement: 'Châu Âu nằm chủ yếu trong đới ôn hòa của bán cầu Bắc.', is_correct: true, explanation: 'ĐÚNG: Vĩ tuyến 36°B đến 71°B nằm trọn trong đới ôn hòa.' },
        { subId: 'b', statement: 'Dãy núi trẻ An-pơ nằm ở phía bắc châu lục, giáp Bắc Băng Dương.', is_correct: false, explanation: 'SAI: Dãy An-pơ nằm ở phía nam châu Âu; phía bắc là núi già Xcan-đi-na-vi.' },
        { subId: 'c', statement: 'Khí hậu ôn đới lục địa ở Đông Âu có mùa đông lạnh khô và tuyết rơi.', is_correct: true, explanation: 'ĐÚNG: Càng vào sâu nội địa phía đông, tính chất lục địa càng rõ nét.' },
        { subId: 'd', statement: 'Rừng lá cứng Địa Trung Hải phát triển mạnh ở vùng cực Bắc giá lạnh.', is_correct: false, explanation: 'SAI: Rừng lá cứng phát triển ở Nam Âu (khí hậu Địa Trung Hải); vùng cực bắc là đài nguyên.' }
      ],
      explanation: 'Kiểm tra kiến thức tổng hợp về vị trí, các dạng địa hình chính và thảm thực vật châu Âu.',
      memory_tip: 'Thuộc 4 đới tự nhiên: Cực Bắc đài nguyên, Bắc Taiga, Tây lá rộng, Nam lá cứng.',
      image_illustration: {
        title: 'Bản đồ các đới và kiểu khí hậu ở châu Âu',
        source: 'Hình 3 trang 98 SGK Lịch sử & Địa lí 7',
        type: 'map',
        description: 'Phân hóa từ bắc xuống nam và từ tây sang đông rất rõ rệt.',
        svg_badge: '🗺️ Phân hóa khí hậu châu Âu'
      }
    },
    {
      id: 22,
      category: 'true_false',
      subject: 'Địa lý',
      topic: 'Dân cư & Xã hội Châu Âu',
      question_text: 'Về cơ cấu dân số và đô thị hóa tại châu Âu năm 2020:',
      true_false_items: [
        { subId: 'a', statement: 'Cơ cấu dân số châu Âu có xu hướng già hóa rõ rệt.', is_correct: true, explanation: 'ĐÚNG: Nhóm >65 tuổi tăng nhanh từ 12,6% lên 19,1% (1990-2020).' },
        { subId: 'b', statement: 'Tỉ lệ nhóm tuổi 15 - 64 tuổi của châu Âu năm 2020 chiếm 64,8%.', is_correct: true, explanation: 'ĐÚNG: Theo Bảng 1 trang 101 SGK, nhóm tuổi 15-64 là 64,8%.' },
        { subId: 'c', statement: 'Quá trình đô thị hóa ở châu Âu diễn ra rất muộn, tỉ lệ dân thành thị dưới 40%.', is_correct: false, explanation: 'SAI: Đô thị hóa diễn ra sớm nhất thế giới, tỉ lệ dân đô thị khoảng 75%.' },
        { subId: 'd', statement: 'Châu Âu là châu lục nghèo nàn về nhập cư, không có người nhập cư quốc tế.', is_correct: false, explanation: 'SAI: Năm 2019, châu Âu đã tiếp nhận khoảng 82 triệu người di cư quốc tế.' }
      ],
      explanation: 'Dân cư châu Âu đặc trưng bởi già hóa dân số, đô thị hóa sớm tỉ lệ cao và thu hút đông đảo người nhập cư.',
      memory_tip: '75% ở thành thị, 64,8% lao động, dân số già hóa.'
    },
    {
      id: 23,
      category: 'true_false',
      subject: 'Lịch sử',
      topic: 'Kinh tế & Xã hội Lãnh địa Tây Âu',
      question_text: 'Về chế độ phong kiến và đời sống trong lãnh địa Tây Âu:',
      true_false_items: [
        { subId: 'a', statement: 'Lãnh địa phong kiến có quân đội, tòa án và tiền tệ riêng biệt.', is_correct: true, explanation: 'ĐÚNG: Mỗi lãnh địa như một quốc gia nhỏ biệt lập của lãnh chúa.' },
        { subId: 'b', statement: 'Nông nô là người có quyền tự do tuyệt đối và không phải nộp tô thuế.', is_correct: false, explanation: 'SAI: Nông nô phụ thuộc lãnh chúa, bị bóc lột nặng nề bằng tô thuế và lao dịch.' },
        { subId: 'c', statement: 'Kinh tế lãnh địa chủ yếu sản xuất hàng hóa lớn để xuất khẩu ra thế giới.', is_correct: false, explanation: 'SAI: Là nền kinh tế tự nhiên tự cấp tự túc, không có buôn bán bên ngoài.' },
        { subId: 'd', statement: 'Thành thị trung đại xuất hiện đã phá vỡ nền kinh tế tự nhiên khép kín của lãnh địa.', is_correct: true, explanation: 'ĐÚNG: Thúc đẩy sản xuất hàng hóa và giao lưu buôn bán tự do.' }
      ],
      explanation: 'Lãnh địa khép kín tự cấp, thành thị mở đường tự do buôn bán hàng hóa.',
      memory_tip: 'Lãnh địa đóng kín tự lo, thị dân mở cửa đẩy đò giao thương.'
    },
    {
      id: 24,
      category: 'true_false',
      subject: 'Lịch sử',
      topic: 'Phong trào Văn hóa Phục hưng',
      question_text: 'Về các danh nhân và ý nghĩa của phong trào Văn hóa Phục hưng:',
      true_false_items: [
        { subId: 'a', statement: 'Tư tưởng cốt lõi của phong trào Phục hưng là Chủ nghĩa nhân văn.', is_correct: true, explanation: 'ĐÚNG: Đề cao giá trị cao quý của con người và tự do cá nhân.' },
        { subId: 'b', statement: 'Bức tượng cẩm thạch Đa-vít (David) là tác phẩm kiệt xuất của Mi-ken-lăng-giơ.', is_correct: true, explanation: 'ĐÚNG: Michelangelo tạc tượng David và bích họa trên vòm nhà nguyện Xích-xtin.' },
        { subId: 'c', statement: 'Cô-péc-ních và Ga-li-lê kiên quyết bảo vệ thuyết Trái Đất là trung tâm vũ trụ.', is_correct: false, explanation: 'SAI: Các ông đề xướng và bảo vệ Thuyết Nhật tâm (Mặt Trời là trung tâm).' },
        { subId: 'd', statement: 'Phong trào Cải cách tôn giáo làm cho Ki-tô giáo phân chia thành Cựu giáo và Tân giáo.', is_correct: true, explanation: 'ĐÚNG: Tách ra Tân giáo (Tin Lành) và Cựu giáo (Công giáo).' }
      ],
      explanation: 'Phong trào Phục hưng và Cải cách tôn giáo giáng đòn quyết định vào hệ tư tưởng phong kiến đêm trường trung cổ.',
      memory_tip: 'Nhân văn rạng rỡ Phục hưng, khoa học bừng sáng đập tan mê lầm.'
    },

    // --- PHẦN 3: BÀI TẬP TÍNH TOÁN ĐỊA LÝ (2 MẬT ĐỘ + 2 TỈ TRỌNG) ---
    {
      id: 25,
      category: 'density_calc',
      subject: 'Địa lý',
      topic: 'Tính Mật độ dân số Châu Âu năm 2020',
      question_text: 'Năm 2020, số dân của châu Âu là khoảng 747 triệu người, diện tích tự nhiên là 10,5 triệu km². Hãy tính mật độ dân số của châu Âu (làm tròn đến hàng đơn vị)?',
      calc_data: {
        formula: 'Mật độ dân số = Số dân / Diện tích (người/km²)',
        input_unit: 'người/km²',
        steps: [
          'Số dân châu Âu = 747.000.000 người',
          'Diện tích châu Âu = 10.500.000 km²',
          'Mật độ dân số = 747 / 10,5 ≈ 71,14 người/km² (làm tròn là 71 người/km² - SGK ghi nhận khoảng ~75 người/km² khi tính vùng lãnh thổ mở rộng)'
        ],
        result: '71 người/km² (hoặc 75 người/km² theo chuẩn SGK làm tròn)'
      },
      correct_answer: '71 người/km²',
      explanation: 'Áp dụng công thức tính mật độ dân số: Lấy số dân chia cho diện tích lãnh thổ tương ứng.',
      memory_tip: 'Muốn tìm mật độ dân cư, lấy dân chia mét vuông bằng bao người.',
      image_illustration: {
        title: 'Bản đồ phân bố mật độ dân cư châu Âu',
        source: 'Hình 1 trang 102 SGK Lịch sử & Địa lí 7',
        type: 'map',
        description: 'Dân cư tập trung dày đặc trên 100 người/km² ở Tây và Trung Âu, thưa thớt ở Bắc Âu.',
        svg_badge: '📊 Tính Mật độ Dân số'
      }
    },
    {
      id: 26,
      category: 'density_calc',
      subject: 'Địa lý',
      topic: 'Tính Mật độ dân số Liên minh châu Âu (EU) năm 2020',
      question_text: 'Năm 2020, Liên minh châu Âu (EU) có số dân khoảng 447 triệu người và tổng diện tích lãnh thổ là 4,23 triệu km². Hãy tính mật độ dân số trung bình của EU (làm tròn số nguyên)?',
      calc_data: {
        formula: 'Mật độ dân số = Số dân / Diện tích (người/km²)',
        input_unit: 'người/km²',
        steps: [
          'Số dân EU = 447.000.000 người',
          'Diện tích EU = 4.230.000 km²',
          'Phép tính: 447 / 4,23 = 105,67 người/km²',
          'Làm tròn đến hàng đơn vị: 106 người/km²'
        ],
        result: '106 người/km²'
      },
      correct_answer: '106 người/km²',
      explanation: 'EU có mật độ dân số cao (106 người/km²), tập trung đông đúc tại các trung tâm kinh tế công nghiệp như Đức, Pháp, Bỉ, Hà Lan.',
      memory_tip: '447 triệu chia 4,23 triệu km² ra một trăm linh sáu (106) người/km².',
      image_illustration: {
        title: 'Lược đồ các nước thành viên EU năm 2020',
        source: 'Hình 1 trang 107 SGK Lịch sử & Địa lí 7',
        type: 'map',
        description: 'Mật độ trung bình 106 ng/km², tập trung ở dải châu thổ ven sông Rai-nơ.',
        svg_badge: '🇪🇺 Mật độ dân số EU: 106 ng/km²'
      }
    },
    {
      id: 27,
      category: 'percentage_calc',
      subject: 'Địa lý',
      topic: 'Tính Tỉ trọng GDP của EU so với thế giới năm 2020',
      question_text: 'Năm 2020, GDP toàn thế giới đạt 84.705,4 tỉ USD, trong đó GDP của Liên minh châu Âu (EU) đạt 15.276 tỉ USD (theo bảng số liệu trang 108 SGK). Hãy tính tỉ trọng GDP của EU trong tổng GDP thế giới (làm tròn 2 chữ số thập phân)?',
      calc_data: {
        formula: 'Tỉ trọng (%) = (GDP của EU / GDP thế giới) * 100',
        input_unit: '%',
        steps: [
          'GDP của EU = 15.276 tỉ USD',
          'Tổng GDP thế giới = 84.705,4 tỉ USD',
          'Tỉ trọng = (15.276 / 84.705,4) * 100 = 18,034% ≈ 18,05% (hoặc 17,9% theo số liệu 15.192,6 ở SGV trang 218)'
        ],
        result: '18,05% (hoặc ~18,1%)'
      },
      correct_answer: '18,05%',
      explanation: 'EU là 1 trong 4 trung tâm kinh tế lớn nhất thế giới, đóng góp trên 18% vào tổng sản phẩm quốc nội toàn cầu năm 2020.',
      memory_tip: 'Lấy phần chia tổng nhân trăm, mười tám phẩy linh năm phần trăm vững vàng.',
      image_illustration: {
        title: 'Biểu đồ tỉ lệ GDP của EU trong tổng GDP thế giới năm 2020',
        source: 'Trang 218 SGV Lịch sử & Địa lí 7',
        type: 'chart',
        description: 'Biểu đồ tròn thể hiện cơ cấu: EU chiếm gần 1/5 quy mô kinh tế toàn cầu.',
        svg_badge: '📈 Tỉ trọng GDP EU ~18%'
      }
    },
    {
      id: 28,
      category: 'percentage_calc',
      subject: 'Địa lý',
      topic: 'Tính Tỉ trọng nhóm tuổi 15 - 64 tuổi tại châu Âu năm 2020',
      question_text: 'Dựa vào bảng số liệu cơ cấu dân số châu Âu (trang 101 SGK), năm 2020 nhóm tuổi 0 - 14 tuổi chiếm 16,1%, nhóm từ 65 tuổi trở lên chiếm 19,1%. Hãy tính tỉ trọng của nhóm tuổi lao động (15 - 64 tuổi)?',
      calc_data: {
        formula: 'Tỉ trọng nhóm 15-64 = 100% - (% nhóm 0-14 + % nhóm >= 65)',
        input_unit: '%',
        steps: [
          'Tổng các nhóm tuổi = 100%',
          'Tổng nhóm phụ thuộc = 16,1% + 19,1% = 35,2%',
          'Tỉ trọng nhóm 15 - 64 tuổi = 100% - 35,2% = 64,8%'
        ],
        result: '64,8%'
      },
      correct_answer: '64,8%',
      explanation: 'Tỉ trọng nhóm tuổi 15 - 64 tuổi của châu Âu năm 2020 là 64,8%, giảm 2,1% so với năm 1990 (66,9%) do hiện tượng già hóa dân số.',
      memory_tip: '100 trừ 35,2 còn lại sáu mươi tư phẩy tám (64,8%).',
      image_illustration: {
        title: 'Bảng 1: Cơ cấu dân số theo nhóm tuổi ở châu Âu năm 1990 và 2020',
        source: 'Bảng 1 trang 101 SGK Lịch sử & Địa lí 7',
        type: 'diagram',
        description: 'Số liệu chứng minh xu hướng già hóa dân số rõ nét ở châu Âu.',
        svg_badge: '📊 Tỉ trọng lao động 64,8%'
      }
    },

    // --- PHẦN 4: TỰ LUẬN VẬN DỤNG (CÂU 29 - 30) ---
    {
      id: 29,
      category: 'essay',
      subject: 'Địa lý',
      topic: 'Vị trí địa lý & Phạm vi tiếp giáp châu Âu',
      question_text: 'Dựa vào lược đồ tự nhiên châu Âu, hãy trình bày đặc điểm vị trí địa lí, kích thước và giới hạn tiếp giáp 4 hướng của châu lục này?',
      essay_rubric: {
        max_score: 3.0,
        criteria: [
          { point: 'Vị trí: Bộ phận phía tây lục địa Á - Âu, nằm giữa vĩ tuyến 36°B và 71°B, chủ yếu thuộc đới ôn hòa bán cầu Bắc.', score: 1.0 },
          { point: 'Kích thước: Diện tích trên 10 triệu km² (khoảng 10,5 triệu km²), chỉ lớn hơn châu Đại Dương.', score: 0.5 },
          { point: 'Tiếp giáp 4 hướng: Bắc giáp Bắc Băng Dương; Tây giáp Đại Tây Dương; Nam giáp Địa Trung Hải; Đông ngăn cách với châu Á bởi dãy núi U-ran.', score: 1.5 }
        ]
      },
      explanation: 'Đây là câu hỏi tự luận cốt lõi bài 1 Địa lí 7 (trang 96 SGK). Cần chỉ rõ tọa độ vĩ tuyến và 4 hướng tiếp giáp.',
      memory_tip: 'Tây Á-Âu, 36-71 độ Bắc; Bắc Băng Dương, Đại Tây Dương, Địa Trung Hải, núi U-ran.',
      image_illustration: {
        title: 'Hình 1: Bản đồ tự nhiên châu Âu',
        source: 'Hình 1 trang 97 SGK Lịch sử & Địa lí 7',
        type: 'map',
        description: 'Bản đồ trực quan xác định 4 hướng tiếp giáp đại dương và dãy núi ranh giới U-ran.',
        svg_badge: '🧭 Sơ đồ tiếp giáp 4 hướng Châu Âu'
      }
    },
    {
      id: 30,
      category: 'essay',
      subject: 'Lịch sử',
      topic: 'Ý nghĩa phong trào Văn hóa Phục hưng',
      question_text: 'Hãy phân tích nguyên nhân bùng nổ và ý nghĩa lịch sử sâu sắc của phong trào Văn hóa Phục hưng đối với xã hội Tây Âu?',
      essay_rubric: {
        max_score: 2.0,
        criteria: [
          { point: 'Nguyên nhân: Giai cấp tư sản ra đời có thế lực kinh tế nhưng chưa có địa vị chính trị, bị giáo lý phong kiến hà khắc trói buộc nên phát động đấu tranh tư tưởng.', score: 1.0 },
          { point: 'Ý nghĩa: Lên án Giáo hội và phong kiến; đề cao giá trị con người (Chủ nghĩa nhân văn), tự do khoa học; mở đường cho văn minh cận - hiện đại.', score: 1.0 }
        ]
      },
      explanation: 'Phục hưng là cuộc cách mạng tư tưởng to lớn đánh thức Tây Âu khỏi đêm trường trung cổ, mở đường cho sự phát triển của chủ nghĩa tư bản (trang 18 - 22 SGK).',
      memory_tip: 'Đánh thức đêm trường trung cổ, giải phóng tư tưởng con người vươn cao.',
      image_illustration: {
        title: 'Bích họa Sáng tạo A-đam của Mi-ken-lăng-giơ',
        source: 'Hình 1 trang 18 SGK Lịch sử & Địa lí 7',
        type: 'photo',
        description: 'Tác phẩm trên vòm nhà nguyện Xích-xtin tôn vinh vẻ đẹp hoàn mỹ và sức sống con người.',
        svg_badge: '🎨 Văn hóa Phục hưng rực rỡ'
      }
    }
  ]
};
