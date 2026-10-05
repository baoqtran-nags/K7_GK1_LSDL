import { ExamSet } from '../types/exams';

export const EXAM_SET_4: ExamSet = {
  id: "de-04",
  title: "Bộ Đề Số 04: Châu Đại Dương, Nam Cực & Lịch Sử Đại Việt",
  subtitle: "Châu Đại Dương, Châu Nam Cực, Triều Ngô - Đinh - Tiền Lê - Lý - Trần - Lê Sơ (30 câu)",
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
      topic: 'Vị trí lục địa Ô-xtrây-li-a',
      question_text: 'Lục địa Ô-xtrây-li-a có diện tích nhỏ nhất trong các lục địa trên thế giới, khoảng bao nhiêu?',
      options: {
        A: 'Gần 7,7 triệu km²',
        B: 'Khoảng 14 triệu km²',
        C: 'Khoảng 10 triệu km²',
        D: 'Khoảng 3 triệu km²'
      },
      correct_answer: 'A',
      explanation: 'Lục địa Ô-xtrây-li-a nằm ở phía tây nam Thái Bình Dương, diện tích nhỏ chỉ gần 7,7 triệu km² (trang 156 SGK).',
      memory_tip: 'Bảy phẩy bảy triệu cây vuông, lục địa nhỏ nhất mọc giữa đại dương.',
      image_illustration: {
        title: 'Bản đồ tự nhiên châu Đại Dương',
        source: 'Hình 1 trang 157 SGK Lịch sử & Địa lí 7',
        type: 'map',
        description: 'Gồm lục địa Ô-xtrây-li-a và bốn khu vực đảo: Mê-la-nê-di, Mi-crô-nê-di, Pô-li-nê-di, Niu Di-len.',
        svg_badge: '🦘 Lược đồ Châu Đại Dương (7,7 tr km²)'
      }
    },
    {
      id: 2,
      category: 'mcq',
      subject: 'Địa lý',
      topic: 'Sinh vật đặc hữu Ô-xtrây-li-a',
      question_text: 'Loài động vật biểu tượng độc đáo của nước Úc thuộc nhóm thú có túi là:',
      options: {
        A: 'Gấu Bắc Cực',
        B: 'Chuột túi (Can-gu-ru) và gấu túi (Koala)',
        C: 'Chim cánh cụt hoàng đế',
        D: 'Hươu cao cổ'
      },
      correct_answer: 'B',
      explanation: 'Ô-xtrây-li-a bảo tồn hơn 100 loài thú có túi độc nhất vô nhị như chuột túi Can-gu-ru, gấu túi Koala, thú mỏ vịt (trang 159 SGK).',
      memory_tip: 'Can-gu-ru nhảy thoăn thoắt, gấu túi Koala đu cành bạch đàn.',
      image_illustration: {
        title: 'Sinh vật bản địa độc đáo ở Ô-xtrây-li-a',
        source: 'Hình 4 trang 159 SGK Lịch sử & Địa lí 7',
        type: 'photo',
        description: 'Hình ảnh chuột túi Can-gu-ru trên đồng cỏ và rừng cây bạch đàn.',
        svg_badge: '🦘 Động vật có túi Can-gu-ru'
      }
    },
    {
      id: 3,
      category: 'mcq',
      subject: 'Địa lý',
      topic: 'Đặc điểm Châu Nam Cực',
      question_text: 'Châu Nam Cực được mệnh danh là "cực lạnh của Trái Đất" với nhiệt độ thấp kỷ lục đo được là:',
      options: {
        A: '-94,5 độ C (năm 1967)',
        B: '-20 độ C',
        C: '-50 độ C',
        D: '0 độ C'
      },
      correct_answer: 'A',
      explanation: 'Nhiệt độ ở lục địa Nam Cực không bao giờ vượt quá 0°C, nhiệt độ thấp nhất thế giới đo được là -94,5°C vào năm 1967 (trang 164 SGK).',
      memory_tip: 'Âm chín mươi tư phẩy năm (-94,5°C), băng phủ ngút ngàn cực lạnh hành tinh.',
      image_illustration: {
        title: 'Băng hà và chim cánh cụt ở châu Nam Cực',
        source: 'Hình 3 trang 164 SGK Lịch sử & Địa lí 7',
        type: 'photo',
        description: 'Lớp phủ băng dày trung bình trên 1.720m, đàn chim cánh cụt chịu lạnh kiên cường.',
        svg_badge: '❄️ Cực lạnh thế giới (-94,5°C)'
      }
    },
    {
      id: 4,
      category: 'mcq',
      subject: 'Địa lý',
      topic: 'Dự trữ nước ngọt Nam Cực',
      question_text: 'Lớp băng khổng lồ phủ trên 98% diện tích châu Nam Cực chiếm bao nhiêu phần trăm lượng nước ngọt của Trái Đất?',
      options: {
        A: 'Khoảng 10%',
        B: 'Khoảng 60%',
        C: 'Khoảng 30%',
        D: 'Dưới 5%'
      },
      correct_answer: 'B',
      explanation: 'Châu Nam Cực là nơi dự trữ nước ngọt lớn nhất Trái Đất, lưu giữ khoảng 60% lượng nước ngọt toàn cầu dưới dạng băng tuyết (trang 164 SGK).',
      memory_tip: 'Sáu mươi phần trăm (60%) nước ngọt địa cầu, cô đọng băng ngàn tại chốn Nam Băng.',
      image_illustration: {
        title: 'Băng trôi khổng lồ ở châu Nam Cực',
        source: 'Hình 4 trang 165 SGK Lịch sử & Địa lí 7',
        type: 'photo',
        description: 'Khối núi băng vỡ ra trôi nổi trên đại dương Nam Băng Dương.',
        svg_badge: '💧 Dự trữ 60% nước ngọt Trái Đất'
      }
    },
    {
      id: 5,
      category: 'mcq',
      subject: 'Địa lý',
      topic: 'Hiệp ước Nam Cực',
      question_text: 'Hiệp ước Nam Cực kí kết năm 1959 quy định mục đích sử dụng châu lục này như thế nào?',
      options: {
        A: 'Chỉ vì mục đích hòa bình, nghiên cứu khoa học, không công nhận phân chia lãnh thổ và cấm quân sự hóa',
        B: 'Cho phép chia cắt đất đai để khai thác mỏ than',
        C: 'Xây dựng căn cứ quân sự thử nghiệm vũ khí hạt nhân',
        D: 'Thương mại hóa toàn bộ tài nguyên động vật'
      },
      correct_answer: 'A',
      explanation: 'Hiệp ước Nam Cực (1959) quy định khảo sát Nam Cực chỉ phục vụ hòa bình, cấm mọi hành vi thử vũ khí và không công nhận chủ quyền lãnh thổ quốc gia nào (trang 162 SGK).',
      memory_tip: 'Hiệp ước Nam Cực hòa bình, chung tay nghiên cứu khoa học văn minh.',
      image_illustration: {
        title: 'Một trạm nghiên cứu khoa học ở châu Nam Cực',
        source: 'Hình 1 trang 162 SGK Lịch sử & Địa lí 7',
        type: 'photo',
        description: 'Các nhà khoa học quốc tế luân phiên làm việc trong trạm nghiên cứu hiện đại.',
        svg_badge: '🕊️ Hiệp ước Nam Cực vì hòa bình'
      }
    },
    {
      id: 6,
      category: 'mcq',
      subject: 'Lịch sử',
      topic: 'Chiến thắng Bạch Đằng năm 938',
      question_text: 'Chiến thắng oanh liệt trên sông Bạch Đằng năm 938 do ai lãnh đạo, chấm dứt hơn 1.000 năm Bắc thuộc?',
      options: {
        A: 'Đinh Bộ Lĩnh',
        B: 'Ngô Quyền',
        C: 'Lê Hoàn',
        D: 'Lý Thường Kiệt'
      },
      correct_answer: 'B',
      explanation: 'Năm 938, Ngô Quyền dùng trận địa cọc ngầm đánh tan quân Nam Hán trên sông Bạch Đằng, mở ra kỉ nguyên độc lập lâu dài cho dân tộc (trang 45 SGK).',
      memory_tip: 'Ngô Quyền cọc nhọn cắm sâu, Bạch Đằng nổi sóng chôn đầu Nam Hán.',
      image_illustration: {
        title: 'Di tích Cổ Loa - Nơi Ngô Quyền đóng đô năm 939',
        source: 'Trang 44 SGK Lịch sử & Địa lí 7',
        type: 'photo',
        description: 'Ngô Quyền xưng Vương, bãi bỏ chức Tiết độ sứ, đóng đô ở Cổ Loa.',
        svg_badge: '🗡️ Chiến thắng Bạch Đằng năm 938'
      }
    },
    {
      id: 7,
      category: 'mcq',
      subject: 'Lịch sử',
      topic: 'Đinh Bộ Lĩnh dẹp 12 sứ quân',
      question_text: 'Nhân vật lịch sử có công dẹp loạn 12 sứ quân, thống nhất đất nước và lên ngôi Hoàng đế năm 968 là:',
      options: {
        A: 'Đinh Bộ Lĩnh (Đinh Tiên Hoàng)',
        B: 'Lê Đại Hành',
        C: 'Trần Thủ Độ',
        D: 'Lê Lợi'
      },
      correct_answer: 'A',
      explanation: 'Đinh Bộ Lĩnh (Vạn Thắng Vương) dẹp loạn 12 sứ quân, lập ra nhà Đinh, đặt tên nước là Đại Cồ Việt, đóng đô ở Hoa Lư (Ninh Bình) (trang 46, 48 SGK).',
      memory_tip: 'Vạn Thắng Vương dẹp sứ quân, lập Đại Cồ Việt Hoa Lư kinh thành.',
      image_illustration: {
        title: 'Lược đồ cát cứ của 12 sứ quân',
        source: 'Hình 1 trang 46 SGK Lịch sử & Địa lí 7',
        type: 'map',
        description: '12 căn cứ sứ quân cát cứ vùng đồng bằng Bắc Bộ sau khi Ngô Quyền mất.',
        svg_badge: '👑 Đinh Tiên Hoàng thống nhất non sông'
      }
    },
    {
      id: 8,
      category: 'mcq',
      subject: 'Lịch sử',
      topic: 'Quốc hiệu Đại Cồ Việt',
      question_text: 'Năm 968, Đinh Tiên Hoàng đặt tên nước ta là gì với ý nghĩa "Nước Việt lớn"?',
      options: {
        A: 'Đại Việt',
        B: 'Đại Cồ Việt',
        C: 'Đại Ngu',
        D: 'Vạn Xuân'
      },
      correct_answer: 'B',
      explanation: 'Đinh Bộ Lĩnh đặt tên nước là Đại Cồ Việt ("Cồ" tiếng Việt cổ nghĩa là lớn), xưng Hoàng đế sánh ngang với hoàng đế Trung Hoa (trang 48 SGK).',
      memory_tip: 'Đại Cồ Việt xưng Hoàng đế, khẳng định bờ cõi độc lập vững bền.',
      image_illustration: {
        title: 'Đền thờ Vua Đinh Tiên Hoàng tại Cố đô Hoa Lư (Ninh Bình)',
        source: 'Hình 2 trang 47 SGK Lịch sử & Địa lí 7',
        type: 'photo',
        description: 'Di sản thế giới Tràng An - Hoa Lư địa thế hiểm trở bốn bề núi đá.',
        svg_badge: '🏛️ Quốc hiệu Đại Cồ Việt (968)'
      }
    },
    {
      id: 9,
      category: 'mcq',
      subject: 'Lịch sử',
      topic: 'Kháng chiến chống Tống năm 981',
      question_text: 'Ai là người lãnh đạo cuộc kháng chiến chống quân xâm lược Tống thắng lợi vang dội năm 981?',
      options: {
        A: 'Lê Hoàn (Lê Đại Hành)',
        B: 'Lý Thường Kiệt',
        C: 'Trần Hưng Đạo',
        D: 'Ngô Quyền'
      },
      correct_answer: 'A',
      explanation: 'Năm 981, Thập đạo tướng quân Lê Hoàn được triều thần suy tôn lên làm vua, trực tiếp chỉ huy đánh tan quân Tống trên sông Bạch Đằng và Tây Kết (trang 49 SGK).',
      memory_tip: 'Lê Hoàn áo giáp xông pha, chém Hầu Nhân Bảo quân Tống tháo lui.',
      image_illustration: {
        title: 'Lược đồ cuộc kháng chiến chống Tống năm 981',
        source: 'Hình 1 trang 49 SGK Lịch sử & Địa lí 7',
        type: 'map',
        description: 'Quân Tống tiến vào theo 2 đường thủy bộ đều bị quân ta chặn đánh tiêu diệt.',
        svg_badge: '⚔️ Kháng chiến chống Tống (981)'
      }
    },
    {
      id: 10,
      category: 'mcq',
      subject: 'Lịch sử',
      topic: 'Lý Thái Tổ dời đô về Thăng Long',
      question_text: 'Năm 1010, vua Lý Thái Tổ quyết định dời đô từ Hoa Lư về thành nào và đổi tên thành Thăng Long?',
      options: {
        A: 'Thành Cổ Loa',
        B: 'Thành Đại La',
        C: 'Thành Tây Đô',
        D: 'Thành Phú Xuân'
      },
      correct_answer: 'B',
      explanation: 'Năm 1010, Lý Công Uẩn viết Chiếu dời đô chuyển kinh đô từ Hoa Lư về Đại La, thấy rồng vàng bay lên nên đổi tên thành Thăng Long (Hà Nội) (trang 52, 53 SGK).',
      memory_tip: 'Một không một không (1010) rồng cuộn hổ ngồi, Thăng Long rực rỡ nghìn năm văn hiến.',
      image_illustration: {
        title: 'Tượng đài vua Lý Thái Tổ tại Hà Nội',
        source: 'Hình 1 trang 52 SGK Lịch sử & Địa lí 7',
        type: 'photo',
        description: 'Vua Lý Thái Tổ một tay cầm Chiếu dời đô, một tay trỏ xuống vùng đất đắc địa Thăng Long.',
        svg_badge: '🐉 Chiếu dời đô Thăng Long (1010)'
      }
    },
    {
      id: 11,
      category: 'mcq',
      subject: 'Lịch sử',
      topic: 'Chính sách ngụ binh ư nông',
      question_text: 'Chính sách quân sự độc đáo "gửi binh ở nhà nông", vừa đảm bảo quân đội hùng mạnh vừa duy trì sản xuất nông nghiệp gọi là:',
      options: {
        A: 'Chính sách "Ngụ binh ư nông"',
        B: 'Chính sách "Quân điền"',
        C: 'Chính sách "Hạn điền hạn nô"',
        D: 'Chính sách "Vườn không nhà trống"'
      },
      correct_answer: 'A',
      explanation: 'Thời Lý, Trần, Lê sơ đều áp dụng "Ngụ binh ư nông": binh sĩ luân phiên về quê làm ruộng, khi có chiến tranh lập tức tập hợp chiến đấu (trang 54 SGK).',
      memory_tip: 'Ngụ binh ư nông vẹn đôi đường: cày ruộng thời bình, cầm gươm giữ nước.',
      image_illustration: {
        title: 'Tư liệu về chính sách Ngụ binh ư nông thời Lý',
        source: 'Mục Em có biết? trang 54 SGK',
        type: 'diagram',
        description: 'Vừa bảo đảm lực lượng quốc phòng, vừa phát triển nông nghiệp trù phú.',
        svg_badge: '🌾 Chính sách Ngụ binh ư nông'
      }
    },
    {
      id: 12,
      category: 'mcq',
      subject: 'Lịch sử',
      topic: 'Văn Miếu - Quốc Tử Giám',
      question_text: 'Trường đại học đầu tiên của nước ta được thành lập vào năm 1076 dưới thời vua nào?',
      options: {
        A: 'Lý Thái Tổ',
        B: 'Lý Nhân Tông',
        C: 'Lý Thánh Tông',
        D: 'Trần Thái Tông'
      },
      correct_answer: 'B',
      explanation: 'Năm 1070 Lý Thánh Tông lập Văn Miếu; năm 1076 Lý Nhân Tông mở Quốc Tử Giám - trường đại học quốc gia đầu tiên (trang 57 SGK).',
      memory_tip: 'Một không bảy sáu (1076) Quốc Tử Giám mở trường, đào tạo hiền tài nguyên khí quốc gia.',
      image_illustration: {
        title: 'Khuê Văn Các tại Văn Miếu - Quốc Tử Giám',
        source: 'Hình 7 trang 57 SGK Lịch sử & Địa lí 7',
        type: 'photo',
        description: 'Biểu tượng tinh hoa hiếu học của nền giáo dục khoa cử Việt Nam.',
        svg_badge: '🎓 Quốc Tử Giám thành lập 1076'
      }
    },
    {
      id: 13,
      category: 'mcq',
      subject: 'Lịch sử',
      topic: 'Bài thơ Nam quốc sơn hà',
      question_text: 'Bài thơ thần được coi là bản Tuyên ngôn Độc lập đầu tiên của dân tộc vang lên trên phòng tuyến sông Như Nguyệt là:',
      options: {
        A: 'Bình Ngô đại cáo',
        B: 'Nam quốc sơn hà',
        C: 'Hịch tướng sĩ',
        D: 'Bạch Đằng giang phú'
      },
      correct_answer: 'B',
      explanation: 'Trong cuộc kháng chiến chống Tống năm 1077, Lý Thường Kiệt cho người ngâm vang bài thơ "Nam quốc sơn hà Nam đế cư..." khích lệ tinh thần quân sĩ (trang 60 SGK).',
      memory_tip: 'Sông núi nước Nam vua Nam ở, rành rành định phận tại sách trời.',
      image_illustration: {
        title: 'Phòng tuyến sông Như Nguyệt năm 1077',
        source: 'Hình 3 trang 61 SGK Lịch sử & Địa lí 7',
        type: 'map',
        description: 'Lũy tre dày đặc và hầm chông bờ nam sông Cầu chặn đứng hơn 10 vạn quân Tống.',
        svg_badge: '📜 Tuyên ngôn độc lập Nam quốc sơn hà'
      }
    },
    {
      id: 14,
      category: 'mcq',
      subject: 'Lịch sử',
      topic: 'Hội nghị Diên Hồng thời Trần',
      question_text: 'Trước họa xâm lược của quân Mông - Nguyên năm 1285, vua Trần đã triệu tập các bô lão cả nước họp tại đâu để bàn kế đánh giặc?',
      options: {
        A: 'Hội nghị Bình Than',
        B: 'Hội nghị Diên Hồng',
        C: 'Hội thề Lũng Nhai',
        D: 'Hội thề Đông Quan'
      },
      correct_answer: 'B',
      explanation: 'Năm 1285, vua Trần mở Hội nghị Diên Hồng mời các bô lão; khi được hỏi nên đánh hay nên hòa, muôn người đồng thanh hô vang: "Đánh!" (trang 69 SGK).',
      memory_tip: 'Diên Hồng muôn triệu đồng lòng, cánh tay Thích Sát thề cùng hy sinh.',
      image_illustration: {
        title: 'Tư liệu về Hội nghị Diên Hồng và lời hô Đánh!',
        source: 'Trang 69 SGK Lịch sử & Địa lí 7',
        type: 'diagram',
        description: 'Biểu tượng của tinh thần đại đoàn kết toàn dân tộc thời Trần.',
        svg_badge: '🔥 Hội nghị Diên Hồng hô "ĐÁNH!"'
      }
    },
    {
      id: 15,
      category: 'mcq',
      subject: 'Lịch sử',
      topic: 'Trần Quốc Tuấn và Hịch tướng sĩ',
      question_text: 'Vị Tổng chỉ huy quân đội kiệt xuất ba lần lãnh đạo đánh tan quân xâm lược Mông - Nguyên là ai?',
      options: {
        A: 'Trần Thủ Độ',
        B: 'Trần Quốc Tuấn (Hưng Đạo Đại Vương)',
        C: 'Trần Quang Khải',
        D: 'Trần Nhật Duật'
      },
      correct_answer: 'B',
      explanation: 'Hưng Đạo Đại Vương Trần Quốc Tuấn soạn Hịch tướng sĩ, vận dụng tài tình chiến thuật "vườn không nhà trống" và cọc ngầm Bạch Đằng (trang 70 - 72 SGK).',
      memory_tip: 'Hưng Đạo Đại Vương vì dân vì nước, bệ hạ chém đầu tôi rồi hãy hàng.',
      image_illustration: {
        title: 'Tượng đài Hưng Đạo Đại Vương Trần Quốc Tuấn tại Bạch Đằng Giang',
        source: 'Hình 4 trang 72 SGK Lịch sử & Địa lí 7',
        type: 'photo',
        description: 'Pho tượng đồng sừng sững uy nghiêm bên dòng sông Bạch Đằng lịch sử.',
        svg_badge: '🛡️ Trần Hưng Đạo - Danh nhân quân sự'
      }
    },
    {
      id: 16,
      category: 'mcq',
      subject: 'Lịch sử',
      topic: 'Chiến thắng Bạch Đằng năm 1288',
      question_text: 'Trận thủy chiến tiêu diệt toàn bộ đạo thủy binh và bắt sống tướng giặc Ô Mã Nhi năm 1288 diễn ra trên dòng sông nào?',
      options: {
        A: 'Sông Như Nguyệt',
        B: 'Sông Bạch Đằng',
        C: 'Sông Đáy',
        D: 'Sông Hồng'
      },
      correct_answer: 'B',
      explanation: 'Tháng 4/1288, quân dân nhà Trần bố trí bãi cọc nhọn nhử thuyền giặc vào lúc nước triều rút, tiêu diệt hoàn toàn quân Nguyên (trang 72 SGK).',
      memory_tip: 'Bạch Đằng năm một hai tám tám (1288), cọc ngầm nghiền nát giấc mộng xâm lăng.',
      image_illustration: {
        title: 'Lược đồ trận chiến trên sông Bạch Đằng năm 1288',
        source: 'Hình 3 trang 71 SGK Lịch sử & Địa lí 7',
        type: 'map',
        description: 'Bãi cọc Tràng Kênh và chiến thuật mai phục đón lõng thuyền giặc.',
        svg_badge: '⛵ Đại thắng Bạch Đằng 1288'
      }
    },
    {
      id: 17,
      category: 'mcq',
      subject: 'Lịch sử',
      topic: 'Cải cách Hồ Quý Ly',
      question_text: 'Biện pháp tài chính mang tính cải cách mang tính đi trước thời đại của Hồ Quý Ly năm 1396 là gì?',
      options: {
        A: 'Phát hành tiền giấy "Thông bảo hội sao" thay cho tiền đồng',
        B: 'Đúc tiền vàng nguyên chất',
        C: 'Cấm trao đổi buôn bán bằng tiền',
        D: 'Chỉ dùng tiền xu bạc của nhà Minh'
      },
      correct_answer: 'A',
      explanation: 'Năm 1396, Hồ Quý Ly cho phát hành tiền giấy đầu tiên trong lịch sử nước ta mang tên "Thông bảo hội sao" (trang 75 SGK).',
      memory_tip: 'Hồ Quý Ly in tiền giấy đầu tiên, Thông bảo hội sao đi trước thời đại.',
      image_illustration: {
        title: 'Di tích Cửa Nam Thành Tây Đô (Thành nhà Hồ - Thanh Hóa)',
        source: 'Hình trang 74 SGK Lịch sử & Địa lí 7',
        type: 'photo',
        description: 'Tòa thành đá độc nhất vô nhị ở Đông Nam Á được xây dựng bằng các khối đá vôi xanh ghép khít.',
        svg_badge: '🏛️ Thành nhà Hồ (Di sản UNESCO)'
      }
    },
    {
      id: 18,
      category: 'mcq',
      subject: 'Lịch sử',
      topic: 'Khởi nghĩa Lam Sơn bùng nổ',
      question_text: 'Cuộc khởi nghĩa Lam Sơn (1418 - 1427) chống lại ách đô hộ của quân xâm lược nhà Minh do ai lãnh đạo?',
      options: {
        A: 'Lê Lợi và Nguyễn Trãi',
        B: 'Nguyễn Huệ',
        C: 'Quang Trung',
        D: 'Đinh Bộ Lĩnh'
      },
      correct_answer: 'A',
      explanation: 'Năm 1418, Lê Lợi phất cờ khởi nghĩa tại vùng núi Lam Sơn (Thanh Hóa), tự xưng là Bình Định Vương, cùng quân sư Nguyễn Trãi đánh giặc (trang 78, 79 SGK).',
      memory_tip: 'Núi Lam Sơn dấy nghĩa, Bình Định Vương diệt bạo tàn quân Minh.',
      image_illustration: {
        title: 'Tượng đài Lê Lợi tại thành phố Thanh Hóa',
        source: 'Hình 1 trang 78 SGK Lịch sử & Địa lí 7',
        type: 'photo',
        description: 'Vị thủ lĩnh anh minh của cuộc khởi nghĩa Lam Sơn toàn thắng.',
        svg_badge: '⚔️ Khởi nghĩa Lam Sơn (1418 - 1427)'
      }
    },
    {
      id: 19,
      category: 'mcq',
      subject: 'Lịch sử',
      topic: 'Chiến thắng Chi Lăng - Xương Giang',
      question_text: 'Trận đánh phục kích tiêu diệt tướng giặc Liễu Thăng tại ải Chi Lăng (năm 1427) đã khiến quân Minh:',
      options: {
        A: 'Hoảng sợ tan vỡ, buộc Vương Thông phải đầu hàng xin rút quân về nước',
        B: 'Tiếp tục chi viện thêm 50 vạn quân',
        C: 'Chiếm được kinh thành Đông Quan',
        D: 'Bắt sống toàn bộ quân khởi nghĩa'
      },
      correct_answer: 'A',
      explanation: 'Tháng 10/1427, Liễu Thăng bị chém đầu tại ải Chi Lăng, 10 vạn viện binh giặc tan rã, buộc Vương Thông phải mở Hội thề Đông Quan xin hàng (trang 81, 82 SGK).',
      memory_tip: 'Chi Lăng chém đầu Liễu Thăng, Mộc Thạnh tháo chạy giang sơn thái bình.',
      image_illustration: {
        title: 'Lược đồ trận Chi Lăng - Xương Giang năm 1427',
        source: 'Hình 4 trang 81 SGK Lịch sử & Địa lí 7',
        type: 'map',
        description: 'Trận phục kích hiểm hóc tại thung lũng ải Chi Lăng (Lạng Sơn).',
        svg_badge: '🏹 Chiến thắng Chi Lăng - Xương Giang'
      }
    },
    {
      id: 20,
      category: 'mcq',
      subject: 'Lịch sử',
      topic: 'Bộ Luật Hồng Đức thời Lê sơ',
      question_text: 'Bộ luật hoàn chỉnh, tiến bộ bậc nhất thời phong kiến Việt Nam được ban hành dưới thời vua Lê Thánh Tông là:',
      options: {
        A: 'Luật Hình thư',
        B: 'Quốc triều hình luật (Luật Hồng Đức)',
        C: 'Hoàng Việt luật lệ',
        D: 'Hình luật thời Trần'
      },
      correct_answer: 'B',
      explanation: 'Bộ luật Hồng Đức (722 điều) bảo vệ quyền lợi quốc gia, trừng trị tham nhũng và có nhiều điểm tiến bộ bảo vệ quyền lợi phụ nữ và con gái (trang 84, 88 SGK).',
      memory_tip: 'Luật Hồng Đức công minh chính trực, con gái được chia ruộng đất công bằng.',
      image_illustration: {
        title: 'Tư liệu về tính nhân văn của Luật Hồng Đức',
        source: 'Mục 2 trang 88 SGK Lịch sử & Địa lí 7',
        type: 'diagram',
        description: 'Quy định quyền thừa kế tài sản cho con gái và bảo vệ phụ nữ.',
        svg_badge: '⚖️ Quốc triều hình luật (Luật Hồng Đức)'
      }
    },

    // --- PHẦN 2: TRẮC NGHIỆM ĐÚNG - SAI (CÂU 21 - 24) ---
    {
      id: 21,
      category: 'true_false',
      subject: 'Địa lý',
      topic: 'Thiên nhiên Châu Đại Dương & Nam Cực',
      question_text: 'Về đặc điểm tự nhiên của châu Đại Dương và châu Nam Cực:',
      true_false_items: [
        { subId: 'a', statement: 'Phần lớn diện tích lục địa Ô-xtrây-li-a có khí hậu khô hạn và hoang mạc chiếm diện tích lớn.', is_correct: true, explanation: 'ĐÚNG: Chí tuyến Nam đi qua giữa lục địa và có dòng biển lạnh bờ tây.' },
        { subId: 'b', statement: 'Châu Nam Cực có dân cư bản địa sinh sống thành các làng bản đông đúc từ thời cổ đại.', is_correct: false, explanation: 'SAI: Châu Nam Cực không có dân cư sinh sống thường xuyên, chỉ có các nhà khoa học.' },
        { subId: 'c', statement: 'Bạch đàn và keo hoa vàng là các loài thực vật bản địa tiêu biểu của Ô-xtrây-li-a.', is_correct: true, explanation: 'ĐÚNG: Riêng bạch đàn có tới hơn 600 loài khác nhau (trang 159 SGK).' },
        { subId: 'd', statement: 'Biến đổi khí hậu làm băng tan ở Nam Cực không hề gây ảnh hưởng gì tới mực nước biển thế giới.', is_correct: false, explanation: 'SAI: Băng tan ở Nam Cực làm dâng mực nước biển toàn cầu, đe dọa các đồng bằng ven biển.' }
      ],
      explanation: 'Kiểm tra kiến thức tổng hợp về tính khô hạn của Úc và tính khắc nghiệt của Nam Cực.',
      memory_tip: 'Úc hoang mạc nắng cháy thú có túi, Nam Cực băng dày nước ngọt mênh mông.'
    },
    {
      id: 22,
      category: 'true_false',
      subject: 'Địa lý',
      topic: 'Dân cư và Đô thị hóa Ô-xtrây-li-a',
      question_text: 'Về đặc điểm dân cư và kinh tế của Ô-xtrây-li-a năm 2020:',
      true_false_items: [
        { subId: 'a', statement: 'Mật độ dân số trung bình của Ô-xtrây-li-a rất thưa thớt, chỉ khoảng 3 người/km².', is_correct: true, explanation: 'ĐÚNG: Dân số 25,5 triệu trên diện tích gần 7,7 triệu km² (trang 160 SGK).' },
        { subId: 'b', statement: 'Dân cư phân bố tập trung dày đặc ở các vùng hoang mạc trung tâm lục địa.', is_correct: false, explanation: 'SAI: Tập trung ở duyên hải phía đông, đông nam và tây nam; trung tâm hầu như không người.' },
        { subId: 'c', statement: 'Tỉ lệ dân sống ở thành thị của Ô-xtrây-li-a đạt mức rất cao (khoảng 86%).', is_correct: true, explanation: 'ĐÚNG: Các thành phố lớn như Xít-ni, Men-bơn tập trung phần lớn dân cư (trang 160 SGK).' },
        { subId: 'd', statement: 'Ô-xtrây-li-a là nước cấm tuyệt đối người nhập cư từ các châu lục khác đến sinh sống.', is_correct: false, explanation: 'SAI: Đây là quốc gia của những người nhập cư (hơn 150 sắc tộc từ khắp thế giới).' }
      ],
      explanation: 'Đặc trưng dân số Ô-xtrây-li-a: thưa thớt (3 ng/km²), đô thị hóa cao (86%) và đa sắc tộc nhập cư.',
      memory_tip: 'Ba người một cây số vuông, tám mươi sáu phần trăm sống nơi thành thị.'
    },
    {
      id: 23,
      category: 'true_false',
      subject: 'Lịch sử',
      topic: 'Sự nghiệp độc lập thời Ngô - Đinh - Tiền Lê',
      question_text: 'Về công cuộc xây dựng chính quyền thời Ngô, Đinh và Tiền Lê:',
      true_false_items: [
        { subId: 'a', statement: 'Ngô Quyền bỏ chức Tiết độ sứ của phong kiến phương Bắc, tự xưng Vương.', is_correct: true, explanation: 'ĐÚNG: Khẳng định nền độc lập tự chủ hoàn toàn của nước nhà (trang 45 SGK).' },
        { subId: 'b', statement: 'Đinh Tiên Hoàng quyết định đóng đô tại Thăng Long (Hà Nội).', is_correct: false, explanation: 'SAI: Đinh Bộ Lĩnh đóng đô tại Hoa Lư (Ninh Bình); Lý Thái Tổ mới dời về Thăng Long.' },
        { subId: 'c', statement: 'Nhà Đinh là triều đại đầu tiên cho đúc tiền đồng lưu hành trong nước (Thái Bình hưng bảo).', is_correct: true, explanation: 'ĐÚNG: Đúc tiền riêng khẳng định chủ quyền độc lập tài chính tiền tệ (trang 48 SGK).' },
        { subId: 'd', statement: 'Lê Hoàn chỉ huy đánh bại quân Tống năm 981 cả trên sông Bạch Đằng và đường bộ.', is_correct: true, explanation: 'ĐÚNG: Bẻ gãy cả 2 cánh quân thủy - bộ của tướng Hầu Nhân Bảo (trang 49 SGK).' }
      ],
      explanation: 'Giai đoạn bản lề củng cố nền độc lập và thể chế quân chủ Đại Cồ Việt thế kỉ X.',
      memory_tip: 'Ngô Quyền xưng Vương bỏ Tiết độ, Đinh Tiên Hoàng đúc Thái Bình hưng bảo.'
    },
    {
      id: 24,
      category: 'true_false',
      subject: 'Lịch sử',
      topic: 'Kháng chiến chống Mông - Nguyên và Khởi nghĩa Lam Sơn',
      question_text: 'Về tinh thần chống ngoại xâm thời Trần và cuộc khởi nghĩa Lam Sơn:',
      true_false_items: [
        { subId: 'a', statement: 'Thái sư Trần Thủ Độ khảng khái tâu vua: "Đầu thần chưa rơi xuống đất, xin bệ hạ đừng lo".', is_correct: true, explanation: 'ĐÚNG: Câu nói bất hủ thể hiện ý chí sắt đá trong kháng chiến năm 1258 (trang 69 SGK).' },
        { subId: 'b', statement: 'Kế sách "vườn không nhà trống" là nghệ thuật đánh giặc độc đáo của quân dân nhà Trần.', is_correct: true, explanation: 'ĐÚNG: Triệt tiêu lương thảo khiến kị binh Mông Cổ suy kiệt trước khi phản công.' },
        { subId: 'c', statement: 'Hội thề Lũng Nhai (1416) là sự kiện mở đầu quy tụ 18 hào kiệt cùng Lê Lợi đánh giặc Minh.', is_correct: true, explanation: 'ĐÚNG: Đồng lòng kết nghĩa sinh tử cứu nước (trang 79 SGK).' },
        { subId: 'd', statement: 'Nguyễn Trãi đã viết bài Hịch tướng sĩ để khích lệ quân sĩ khởi nghĩa Lam Sơn.', is_correct: false, explanation: 'SAI: Nguyễn Trãi viết Bình Ngô đại cáo; Hịch tướng sĩ là của Trần Quốc Tuấn.' }
      ],
      explanation: 'Những mốc son hào hùng chống xâm lăng của hào khí Đông A và khởi nghĩa Lam Sơn.',
      memory_tip: 'Hào khí Đông A ba lần thắng giặc, Lam Sơn dấy nghĩa Bình Ngô đại cáo.'
    },

    // --- PHẦN 3: BÀI TẬP TÍNH TOÁN ĐỊA LÝ (2 MẬT ĐỘ + 2 TỈ TRỌNG) ---
    {
      id: 25,
      category: 'density_calc',
      subject: 'Địa lý',
      topic: 'Tính Mật độ dân số Ô-xtrây-li-a năm 2020',
      question_text: 'Năm 2020, số dân của Ô-xtrây-li-a là 25,5 triệu người, diện tích tự nhiên là 7,7 triệu km² (trang 160 SGK). Hãy tính mật độ dân số của Ô-xtrây-li-a (làm tròn số nguyên)?',
      calc_data: {
        formula: 'Mật độ dân số = Số dân / Diện tích (người/km²)',
        input_unit: 'người/km²',
        steps: [
          'Số dân Ô-xtrây-li-a = 25,5 triệu người',
          'Diện tích Ô-xtrây-li-a = 7,7 triệu km²',
          'Phép tính: 25,5 / 7,7 = 3,311 người/km²',
          'Làm tròn đến hàng đơn vị: 3 người/km² (khớp chính xác SGK ghi nhận 3 người/km²)'
        ],
        result: '3 người/km²'
      },
      correct_answer: '3 người/km²',
      explanation: 'Ô-xtrây-li-a là nơi có mật độ dân số thuộc hàng thưa thớt nhất hành tinh, trung bình chỉ 3 người/km² (trang 160 SGK).',
      memory_tip: 'Hai mươi lăm triệu chia bảy phẩy bảy, trung bình ba người một cây số vuông.',
      image_illustration: {
        title: 'Lược đồ một số đô thị ở Ô-xtrây-li-a năm 2020',
        source: 'Hình 5 trang 160 SGK Lịch sử & Địa lí 7',
        type: 'map',
        description: 'Đô thị và dân cư tập trung thành dải hẹp ven bờ biển đông nam (Xít-ni, Men-bơn).',
        svg_badge: '📊 Mật độ Ô-xtrây-li-a: 3 ng/km²'
      }
    },
    {
      id: 26,
      category: 'density_calc',
      subject: 'Địa lý',
      topic: 'Tính Mật độ dân số Thủ đô Hà Nội năm 2019',
      question_text: 'Dựa vào bảng tư liệu SGV trang 232, năm 2019 Thủ đô Hà Nội có số dân là 8.093,9 nghìn người và diện tích tự nhiên là 3.358,6 km². Hãy tính mật độ dân số của Hà Nội (làm tròn số nguyên)?',
      calc_data: {
        formula: 'Mật độ dân số = Số dân / Diện tích (người/km²)',
        input_unit: 'người/km²',
        steps: [
          'Đổi số dân ra người: 8.093,9 nghìn người = 8.093.900 người',
          'Diện tích = 3.358,6 km²',
          'Phép tính: 8.093.900 / 3.358,6 ≈ 2.409,9 người/km²',
          'Làm tròn số nguyên: 2.410 người/km² (khớp hoàn toàn bảng số liệu SGV trang 232)'
        ],
        result: '2.410 người/km²'
      },
      correct_answer: '2.410 người/km²',
      explanation: 'Hà Nội là đô thị trung tâm chính trị có mật độ dân số rất cao, đạt 2.410 người/km² vào năm 2019 (SGV trang 232).',
      memory_tip: 'Tám triệu dân chia ba nghìn ba cây, hai nghìn bốn trăm mười người chen chân.',
      image_illustration: {
        title: 'Bảng số liệu số dân và mật độ Hà Nội',
        source: 'Trang 232 SGV Lịch sử & Địa lí 7',
        type: 'chart',
        description: 'Mật độ Hà Nội đạt 2.410 người/km² (năm 2019).',
        svg_badge: '🏙️ Mật độ Hà Nội: 2.410 ng/km²'
      }
    },
    {
      id: 27,
      category: 'percentage_calc',
      subject: 'Địa lý',
      topic: 'Tính Tỉ lệ dân đô thị của Ô-xtrây-li-a năm 2020',
      question_text: 'Năm 2020, số dân của Ô-xtrây-li-a là 25,5 triệu người, trong đó số dân sống ở khu vực đô thị là khoảng 21,93 triệu người (trang 160 SGK). Hãy tính tỉ lệ dân thành thị của Ô-xtrây-li-a?',
      calc_data: {
        formula: 'Tỉ lệ dân đô thị (%) = (Dân đô thị / Tổng số dân) * 100',
        input_unit: '%',
        steps: [
          'Dân đô thị = 21,93 triệu người',
          'Tổng dân số = 25,5 triệu người',
          'Phép tính: (21,93 / 25,5) * 100 = 86,0%',
          'Kết quả: 86% (khớp chính xác SGK ghi nhận 86%)'
        ],
        result: '86%'
      },
      correct_answer: '86%',
      explanation: 'Mức độ đô thị hoá của Ô-xtrây-li-a rất cao đạt tới 86% (năm 2020), phần lớn dân cư sống tại các đại đô thị ven biển như Sydney, Melbourne (trang 160 SGK).',
      memory_tip: 'Tám mươi sáu phần trăm dân số tập trung nơi phố xá văn minh.',
      image_illustration: {
        title: 'Biểu đồ tỉ lệ dân đô thị Ô-xtrây-li-a',
        source: 'Mục 3a trang 160 SGK Lịch sử & Địa lí 7',
        type: 'chart',
        description: 'Đô thị hóa đạt 86%, cao vượt trội so với mức trung bình thế giới.',
        svg_badge: '📈 Tỉ lệ đô thị hóa Úc: 86%'
      }
    },
    {
      id: 28,
      category: 'percentage_calc',
      subject: 'Địa lý',
      topic: 'Tính Tỉ lệ bề mặt phủ băng tại Châu Nam Cực',
      question_text: 'Châu Nam Cực có tổng diện tích hơn 14,0 triệu km², trong đó diện tích lớp phủ băng tuyết vĩnh cửu bao phủ là khoảng 13,72 triệu km² (trang 164 SGK). Hãy tính tỉ lệ bề mặt bị bao phủ bởi lớp băng khổng lồ này?',
      calc_data: {
        formula: 'Tỉ lệ phủ băng (%) = (Diện tích băng phủ / Tổng diện tích) * 100',
        input_unit: '%',
        steps: [
          'Diện tích phủ băng = 13,72 triệu km²',
          'Tổng diện tích = 14,0 triệu km²',
          'Phép tính: (13,72 / 14,0) * 100 = 98,0%',
          'Kết quả: 98% (khớp hoàn toàn SGK ghi nhận 98% bề mặt bị phủ băng)'
        ],
        result: '98%'
      },
      correct_answer: '98%',
      explanation: 'Toàn bộ châu Nam Cực được xem là cao nguyên băng khổng lồ, 98% bề mặt bị phủ bởi lớp băng dày bình quân trên 1.720 m (trang 164 SGK).',
      memory_tip: 'Chín mươi tám phần trăm (98%) diện tích quanh năm tuyết phủ băng dày.',
      image_illustration: {
        title: 'Bản đồ địa hình băng châu Nam Cực',
        source: 'Hình 2 trang 163 SGK Lịch sử & Địa lí 7',
        type: 'map',
        description: 'Vòm băng trung tâm dày tới hơn 2.040m phủ kín toàn lục địa.',
        svg_badge: '❄️ 98% diện tích phủ băng'
      }
    },

    // --- PHẦN 4: TỰ LUẬN VẬN DỤNG (CÂU 29 - 30) ---
    {
      id: 29,
      category: 'essay',
      subject: 'Địa lý',
      topic: 'Vị trí địa lý & Khí hậu Châu Nam Cực',
      question_text: 'Dựa vào kiến thức bài 19 (trang 163 - 165 SGK), hãy nêu vị trí địa lý của châu Nam Cực và giải thích vì sao nơi đây được gọi là "cực lạnh", "hoang mạc lạnh" của thế giới?',
      essay_rubric: {
        max_score: 3.0,
        criteria: [
          { point: 'Vị trí: Nằm hoàn toàn trong phạm vi phía nam vòng cực Nam (vĩ độ cao cực nam), được bao bọc bởi Nam Đại Dương, cách xa các lục địa khác.', score: 1.0 },
          { point: 'Nguyên nhân cực lạnh: Vĩ độ cực cao góc chiếu ánh sáng mặt trời rất nhỏ, mùa đông đêm vùng cực kéo dài; bề mặt tuyết trắng phản xạ trên 80% nhiệt lượng mặt trời.', score: 1.0 },
          { point: 'Hoang mạc lạnh: Nhiệt độ luôn dưới 0°C, áp cao trung tâm gió bão thổi mạnh (>60 km/h), lượng mưa tuyết rơi cực kì ít (chỉ dưới 200 mm/năm ở ven biển và thấp hơn nhiều ở sâu nội địa), sinh vật vô cùng nghèo nàn.', score: 1.0 }
        ]
      },
      explanation: 'Câu hỏi tự luận trọng tâm giải thích hiện tượng tự nhiên cực hạn của Trái Đất.',
      memory_tip: 'Vĩ độ cao tột cùng, phản xạ nhiệt trắng xóa, khí áp cao gió bão hoang mạc băng.',
      image_illustration: {
        title: 'Hình 2: Bản đồ châu Nam Cực',
        source: 'Hình 2 trang 163 SGK Lịch sử & Địa lí 7',
        type: 'map',
        description: 'Vòng cực Nam bao quanh, cách biệt đại dương mênh mông.',
        svg_badge: '🧭 Lược đồ địa lý Châu Nam Cực'
      }
    },
    {
      id: 30,
      category: 'essay',
      subject: 'Lịch sử',
      topic: 'Nghệ thuật quân sự trận Bạch Đằng năm 1288',
      question_text: 'Hãy phân tích nét độc đáo trong nghệ thuật quân sự của Hưng Đạo Đại Vương Trần Quốc Tuấn trong trận quyết chiến trên sông Bạch Đằng năm 1288?',
      essay_rubric: {
        max_score: 2.0,
        criteria: [
          { point: 'Nắm chắc quy luật tự nhiên: Nghiên cứu tỉ mỉ quy luật lên xuống của thủy triều trên sông Bạch Đằng và địa hình rừng rậm ven sông để phục kích.', score: 1.0 },
          { point: 'Nghệ thuật tác chiến cọc ngầm: Đóng cọc nhọn bịt sắt dưới lòng sông; dùng thuyền nhỏ nhử giặc lúc triều lên, khi triều rút phản công dồn dập khiến thuyền giặc đâm vào cọc vỡ nát, bắt sống tướng Ô Mã Nhi.', score: 1.0 }
        ]
      },
      explanation: 'Trận Bạch Đằng 1288 là đỉnh cao chói lọi của nghệ thuật thủy chiến Việt Nam, kết hợp "thiên thời - địa lợi - nhân hòa" đánh tan đế chế xâm lược hùng mạnh nhất thế giới (trang 72 SGK).',
      memory_tip: 'Dựa triều lên xuống cắm chông, vây bắt giặc dữ trên dòng Bạch Đằng.',
      image_illustration: {
        title: 'Bãi cọc Bạch Đằng được khai quật',
        source: 'Mục Tư liệu trang 144 - 145 SGV',
        type: 'photo',
        description: 'Những thân gỗ lim bịt sắt chôn ngầm dưới lòng bùn sông ngàn năm lưu dấu chiến công.',
        svg_badge: '🛡️ Trận cọc ngầm Bạch Đằng 1288'
      }
    }
  ]
};
