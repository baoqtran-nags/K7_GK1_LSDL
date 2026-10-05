import { ExamSet } from '../types/exams';

export const EXAM_SET_2: ExamSet = {
  id: "de-02",
  title: "Bộ Đề Số 02: Châu Á & Trung Quốc, Ấn Độ Trung Đại",
  subtitle: "Địa hình, Khí hậu gió mùa, Mật độ dân số châu Á, Triều Đường/Minh, Ấn Độ Gúp-ta (30 câu)",
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
      topic: 'Kích thước Châu Á',
      question_text: 'Châu Á có diện tích phần đất liền và các đảo là khoảng bao nhiêu (rộng nhất hành tinh)?',
      options: {
        A: 'Khoảng 44,4 triệu km²',
        B: 'Khoảng 30,3 triệu km²',
        C: 'Khoảng 10,5 triệu km²',
        D: 'Khoảng 14,0 triệu km²'
      },
      correct_answer: 'A',
      explanation: 'Châu Á là châu lục rộng lớn nhất thế giới, diện tích kể cả các đảo khoảng 44,4 triệu km² (trang 109 SGK).',
      memory_tip: 'Bốn mươi tư phẩy bốn triệu cây, châu Á mênh mông đứng đầu hoàn cầu.',
      image_illustration: {
        title: 'Bản đồ tự nhiên châu Á',
        source: 'Hình 1 trang 110 SGK Lịch sử & Địa lí 7',
        type: 'map',
        description: 'Trải dài từ vòng cực Bắc đến xích đạo, tiếp giáp 3 đại dương lớn.',
        svg_badge: '🌏 Châu lục lớn nhất thế giới (44,4 tr km²)'
      }
    },
    {
      id: 2,
      category: 'mcq',
      subject: 'Địa lý',
      topic: 'Đỉnh núi cao nhất thế giới',
      question_text: 'Đỉnh núi cao nhất châu Á và thế giới (8.848m) nằm trên dãy núi nào?',
      options: {
        A: 'Dãy An-pơ',
        B: 'Dãy Hi-ma-lay-a',
        C: 'Dãy Côn Luân',
        D: 'Dãy Thiên Sơn'
      },
      correct_answer: 'B',
      explanation: 'Đỉnh Ê-vơ-rét (8.848,86m) nằm trên dãy Hi-ma-lay-a đồ sộ ở Nam Á (trang 110 SGK).',
      memory_tip: 'Hi-ma-lay-a nóc nhà thế giới, đỉnh Ê-vơ-rét chạm tới tầng mây.',
      image_illustration: {
        title: 'Dãy núi Hi-ma-lay-a trên bản đồ tự nhiên châu Á',
        source: 'Hình 1 trang 110 SGK Lịch sử & Địa lí 7',
        type: 'map',
        description: 'Dãy núi uốn nếp trẻ hình vòng cung cao trên 8.000m ngăn cách Nam Á và Trung Á.',
        svg_badge: '🏔️ Dãy Hi-ma-lay-a (Ê-vơ-rét 8.848m)'
      }
    },
    {
      id: 3,
      category: 'mcq',
      subject: 'Địa lý',
      topic: 'Khí hậu gió mùa châu Á',
      question_text: 'Khí hậu gió mùa ở châu Á phân bố chủ yếu ở những khu vực nào?',
      options: {
        A: 'Đông Á, Nam Á và Đông Nam Á',
        B: 'Bắc Á và Tây Á khô hạn',
        C: 'Trung Á nằm sâu trong lục địa',
        D: 'Khu vực quanh Bắc Băng Dương'
      },
      correct_answer: 'A',
      explanation: 'Khí hậu gió mùa phân bố ở Đông Á, Nam Á và Đông Nam Á: mùa hạ nóng ẩm mưa nhiều, mùa đông khô và lạnh (trang 111 SGK).',
      memory_tip: 'Đông, Nam, Đông Nam Á đón gió mùa: mưa hạ dạt dào mùa đông hanh khô.',
      image_illustration: {
        title: 'Bản đồ các đới và kiểu khí hậu ở châu Á',
        source: 'Hình 2 trang 112 SGK Lịch sử & Địa lí 7',
        type: 'map',
        description: 'Màu xanh lá thể hiện đới khí hậu gió mùa ẩm nhiệt đới và cận nhiệt.',
        svg_badge: '🌦️ Khí hậu gió mùa Châu Á'
      }
    },
    {
      id: 4,
      category: 'mcq',
      subject: 'Địa lý',
      topic: 'Sông ngòi Bắc Á',
      question_text: 'Đặc điểm chế độ nước của các con sông lớn ở khu vực Bắc Á (như Ô-bi, I-ê-nít-xây, Lê-na) là gì?',
      options: {
        A: 'Chảy quanh năm không bao giờ đóng băng',
        B: 'Bị đóng băng vào mùa đông và có lũ lớn vào mùa xuân do băng tan',
        C: 'Lượng nước cạn kiệt quanh năm vì nằm ở sa mạc',
        D: 'Mùa lũ trùng với mùa mưa tháng 7 - 8'
      },
      correct_answer: 'B',
      explanation: 'Mùa đông các sông Bắc Á đóng băng kéo dài; mùa xuân nhiệt độ tăng, băng ở thượng lưu tan chảy trước gây lũ băng nghẽn dòng ở hạ lưu (trang 112 SGK).',
      memory_tip: 'Bắc Á sông chảy ngược dòng: đông hàn đóng đá, xuân nồng băng tan thành lũ.',
      image_illustration: {
        title: 'Mạng lưới sông ngòi Bắc Á trên lược đồ',
        source: 'Hình 1 trang 110 SGK Lịch sử & Địa lí 7',
        type: 'map',
        description: 'Các hệ thống sông Ô-bi, I-ê-nít-xây, Lê-na chảy từ nam lên bắc đổ ra Bắc Băng Dương.',
        svg_badge: '❄️ Sông ngòi Bắc Á lũ mùa xuân'
      }
    },
    {
      id: 5,
      category: 'mcq',
      subject: 'Địa lý',
      topic: 'Hồ sâu nhất thế giới',
      question_text: 'Hồ nước ngọt sâu nhất và có thể tích lớn nhất thế giới nằm ở châu Á là hồ nào?',
      options: {
        A: 'Biển hồ Ca-xpi',
        B: 'Hồ Bai-can (Baikal)',
        C: 'Hồ A-ran',
        D: 'Hồ Ba-khát'
      },
      correct_answer: 'B',
      explanation: 'Hồ Bai-can ở vùng Xi-bia (Nga) sâu tới 1.642m, chứa khoảng 20% lượng nước ngọt không đóng băng của bề mặt Trái Đất (trang 113 SGK).',
      memory_tip: 'Bai-can mắt ngọc nước Nga, hồ sâu thăm thẳm ngát màu lam trong.',
      image_illustration: {
        title: 'Hồ Bai-can (Liên bang Nga)',
        source: 'Hình 4 trang 113 SGK Lịch sử & Địa lí 7',
        type: 'photo',
        description: 'Mặt hồ phẳng lặng trong vắt được hình thành từ đứt gãy kiến tạo sâu nhất hành tinh.',
        svg_badge: '💧 Hồ Bai-can sâu 1.642m'
      }
    },
    {
      id: 6,
      category: 'mcq',
      subject: 'Địa lý',
      topic: 'Dân số Châu Á',
      question_text: 'Năm 2020, số dân của châu Á (không tính dân số Liên bang Nga) đạt khoảng bao nhiêu?',
      options: {
        A: 'Khoảng 1.340 triệu người',
        B: 'Khoảng 4.641,1 triệu người',
        C: 'Khoảng 747 triệu người',
        D: 'Khoảng 590 triệu người'
      },
      correct_answer: 'B',
      explanation: 'Châu Á có số dân đông nhất thế giới: năm 2020 đạt 4.641,1 triệu người, chiếm hơn một nửa dân số toàn cầu (trang 115 SGK).',
      memory_tip: 'Bốn tỉ sáu trăm triệu người, chiếm gần sáu chục phần trăm thế trần.',
      image_illustration: {
        title: 'Bảng 1: Số dân, mật độ dân số châu Á và thế giới năm 2020',
        source: 'Bảng 1 trang 115 SGK Lịch sử & Địa lí 7',
        type: 'diagram',
        description: 'Châu Á chiếm 4.641,1 / 7.794,8 triệu người toàn cầu (59,5%).',
        svg_badge: '👥 Dân số Châu Á đông nhất (4,64 tỉ)'
      }
    },
    {
      id: 7,
      category: 'mcq',
      subject: 'Địa lý',
      topic: 'Nơi ra đời các tôn giáo lớn',
      question_text: 'Châu Á là nơi khởi nguồn của những tôn giáo lớn nào trên thế giới?',
      options: {
        A: 'Ấn Độ giáo, Phật giáo, Ki-tô giáo và Hồi giáo',
        B: 'Chỉ có Phật giáo và Đạo giáo',
        C: 'Chỉ có Hồi giáo và Do Thái giáo',
        D: 'Không có tôn giáo nào ra đời tại châu Á'
      },
      correct_answer: 'A',
      explanation: 'Châu Á là cái nôi của 4 tôn giáo lớn nhất nhân loại: Ấn Độ giáo và Phật giáo (tại Ấn Độ), Ki-tô giáo và Hồi giáo (tại Tây Á) (trang 116 SGK).',
      memory_tip: 'Bốn tôn giáo lớn toàn cầu, khởi sinh đất Á thâm sâu ngàn đời.',
      image_illustration: {
        title: 'Bản đồ các khu vực phân bố tôn giáo tại châu Á',
        source: 'Mục b trang 116 SGK Lịch sử & Địa lí 7',
        type: 'diagram',
        description: 'Sơ đồ cái nôi của Ấn Độ giáo, Phật giáo, Ki-tô giáo, Hồi giáo.',
        svg_badge: '🕊️ Cái nôi 4 tôn giáo lớn'
      }
    },
    {
      id: 8,
      category: 'mcq',
      subject: 'Địa lý',
      topic: 'Siêu đô thị châu Á',
      question_text: 'Năm 2020, đô thị nào ở châu Á có quy mô dân số đông nhất thế giới với trên 37 triệu người?',
      options: {
        A: 'Bắc Kinh (Trung Quốc)',
        B: 'Tô-ky-ô (Nhật Bản)',
        C: 'Đê-li (Ấn Độ)',
        D: 'Thượng Hải (Trung Quốc)'
      },
      correct_answer: 'B',
      explanation: 'Theo Bảng 2 trang 117 SGK, vùng thủ đô Tô-ky-ô (Nhật Bản) có 37.393 nghìn người (khoảng 37,4 triệu người), đông nhất thế giới.',
      memory_tip: 'Tô-ky-ô ba mươi bảy triệu người, siêu đô thị lớn hàng đầu thế gian.',
      image_illustration: {
        title: 'Bảng 2: Số dân của một số đô thị lớn ở châu Á năm 2020',
        source: 'Bảng 2 trang 117 SGK Lịch sử & Địa lí 7',
        type: 'diagram',
        description: 'Tô-ky-ô (37,39 tr), Đê-li (30,29 tr), Thượng Hải (27,05 tr), Đắc-ca (21,0 tr).',
        svg_badge: '🏙️ Đô thị Tô-ky-ô (37,4 triệu người)'
      }
    },
    {
      id: 9,
      category: 'mcq',
      subject: 'Địa lý',
      topic: 'Khu vực Tây Á',
      question_text: 'Tài nguyên khoáng sản có trữ lượng chiếm hơn 50% thế giới ở khu vực Tây Á là gì?',
      options: {
        A: 'Dầu mỏ và khí tự nhiên',
        B: 'Quặng than đá lộ thiên',
        C: 'Kim cương và vàng ròng',
        D: 'Quặng uranium và bô-xít'
      },
      correct_answer: 'A',
      explanation: 'Tây Á chiếm hơn 1/2 trữ lượng dầu mỏ thế giới, tập trung chủ yếu quanh vùng vịnh Péc-xích (trang 121 SGK).',
      memory_tip: 'Vịnh Péc-xích rốn dầu vàng đen, một nửa dầu mỏ thế gian nơi này.',
      image_illustration: {
        title: 'Bản đồ tự nhiên khu vực Tây Á',
        source: 'Hình 3 trang 121 SGK Lịch sử & Địa lí 7',
        type: 'map',
        description: 'Mỏ dầu dày đặc ở Ả-rập Xê-út, Cô-oét, I-rắc, UAE quanh vịnh Péc-xích.',
        svg_badge: '🛢️ Rốn dầu mỏ Tây Á (>50% thế giới)'
      }
    },
    {
      id: 10,
      category: 'mcq',
      subject: 'Địa lý',
      topic: 'Đặc điểm tự nhiên Đông Nam Á',
      question_text: 'Địa hình khu vực Đông Nam Á được chia thành hai bộ phận rõ rệt là:',
      options: {
        A: 'Đông Nam Á lục địa và Đông Nam Á hải đảo',
        B: 'Vùng cao nguyên đá và hoang mạc cát',
        C: 'Đồng bằng băng hà và núi lửa đóng băng',
        D: 'Rừng lá kim và thảo nguyên lạnh'
      },
      correct_answer: 'A',
      explanation: 'Đông Nam Á gồm phần đất liền (bán đảo Trung Ấn) và phần hải đảo (quần đảo Mã Lai) (trang 124 SGK).',
      memory_tip: 'Đông Nam Á hai phần gắn liền: lục địa bán đảo, hải đảo muôn trùng.',
      image_illustration: {
        title: 'Bản đồ tự nhiên khu vực Đông Nam Á',
        source: 'Hình 7 trang 124 SGK Lịch sử & Địa lí 7',
        type: 'map',
        description: 'Bán đảo Trung Ấn và quần đảo Mã Lai với hệ thống sông Mê Công, Hồng.',
        svg_badge: '🌴 Lược đồ Đông Nam Á'
      }
    },
    {
      id: 11,
      category: 'mcq',
      subject: 'Lịch sử',
      topic: 'Triều đại phong kiến Trung Quốc',
      question_text: 'Vị vua đầu tiên thống nhất Trung Quốc và lập ra nhà Tần năm 221 TCN là ai?',
      options: {
        A: 'Hán Cao Tổ Lưu Bang',
        B: 'Tần Thủy Hoàng',
        C: 'Đường Thái Tông',
        D: 'Tống Thái Tổ'
      },
      correct_answer: 'B',
      explanation: 'Năm 221 TCN, vua nước Tần là Doanh Chính thống nhất đất nước, tự xưng Hoàng đế (Tần Thủy Hoàng) (trang 25 SGK).',
      memory_tip: 'Năm hai hai một (221 TCN) Tần vương xưng đế, Vạn Lý Trường Thành tạc dấu xưa.',
      image_illustration: {
        title: 'Trục thời gian các triều đại phong kiến Trung Quốc',
        source: 'Trang 23 SGK Lịch sử & Địa lí 7',
        type: 'diagram',
        description: 'Tần, Hán, Đường, Tống, Nguyên, Minh, Thanh kéo dài đến đầu thế kỉ XX.',
        svg_badge: '👑 Tần Thủy Hoàng thống nhất Trung Hoa'
      }
    },
    {
      id: 12,
      category: 'mcq',
      subject: 'Lịch sử',
      topic: 'Thời kì thịnh vượng triều Đường',
      question_text: 'Dưới thời vua nào triều Đường bước vào giai đoạn đỉnh cao thịnh trị về chính trị và kinh tế?',
      options: {
        A: 'Đường Thái Tông (Lý Thế Dân)',
        B: 'Tần Nhị Thế',
        C: 'Càn Long',
        D: 'Khang Hy'
      },
      correct_answer: 'A',
      explanation: 'Đường Thái Tông kiện toàn bộ máy nhà nước, giảm nhẹ tô thuế, thực hiện chính sách quân điền, tạo nên thời kì Trinh Quán thịnh trị (trang 25 SGK).',
      memory_tip: 'Đường Thái Tông bậc minh quân: thuyền ví như vua, nước ví như dân.',
      image_illustration: {
        title: 'Tư liệu về sự phồn thịnh triều Đường',
        source: 'Trang 25 SGK Lịch sử & Địa lí 7',
        type: 'diagram',
        description: 'Cổng ngoài mấy tháng không đóng, ngựa bò đầy đồng, con đường tơ lụa sầm uất.',
        svg_badge: '🏮 Triều Đường thịnh trị'
      }
    },
    {
      id: 13,
      category: 'mcq',
      subject: 'Lịch sử',
      topic: 'Con đường tơ lụa',
      question_text: 'Tuyến đường thương mại huyết mạch kết nối buôn bán giữa Trung Quốc với Trung Á và châu Âu gọi là:',
      options: {
        A: 'Con đường gốm sứ trên biển',
        B: 'Con đường tơ lụa',
        C: 'Con đường hương liệu Ấn Độ',
        D: 'Con đường trà mã cổ đạo'
      },
      correct_answer: 'B',
      explanation: 'Con đường tơ lụa là hành trình giao thương và văn hóa kết nối Á - Âu nổi tiếng hình thành từ thời cổ đại và phồn vinh dưới thời Đường (trang 25, 26 SGK).',
      memory_tip: 'Tơ lụa nối nhịp Á - Âu, lạc đà chở ngọc qua ngàn đồi cát.',
      image_illustration: {
        title: 'Lược đồ Con đường tơ lụa xuyên lục địa Á - Âu',
        source: 'Mục Kết nối ngày nay trang 25 SGK',
        type: 'map',
        description: 'Nối từ Trường An qua Trung Á đến La Mã, chở tơ lụa, gốm sứ và gia vị.',
        svg_badge: '🐪 Con đường tơ lụa huyền thoại'
      }
    },
    {
      id: 14,
      category: 'mcq',
      subject: 'Lịch sử',
      topic: 'Tứ đại phát minh Trung Quốc',
      question_text: 'Bốn phát minh kĩ thuật vĩ đại nhất của người Trung Quốc thời cổ - trung đại là:',
      options: {
        A: 'Kĩ thuật làm giấy, kĩ thuật in, la bàn và thuốc súng',
        B: 'Động cơ hơi nước, điện thoại, máy bay và radio',
        C: 'Bánh xe, máy cày sắt, la bàn và thuyền buồm',
        D: 'Kính hiển vi, kính thiên văn, đồng hồ quả lắc và xi măng'
      },
      correct_answer: 'A',
      explanation: 'Tứ đại phát minh gồm: Giấy (thời Hán), In (thời Đường - Tống), La bàn và Thuốc súng, có ảnh hưởng to lớn đến văn minh nhân loại (trang 28 SGK).',
      memory_tip: 'Giấy - In - La bàn - Thuốc súng: Tứ đại phát minh rạng rỡ Trung Hoa.',
      image_illustration: {
        title: 'La bàn cổ hình chiếc thìa của Trung Quốc',
        source: 'Hình 5 trang 28 SGK Lịch sử & Địa lí 7',
        type: 'photo',
        description: 'Thìa nam châm chỉ nam trên đế đồng khắc phương vị bát quái.',
        svg_badge: '🧭 Tứ đại phát minh kĩ thuật'
      }
    },
    {
      id: 15,
      category: 'mcq',
      subject: 'Lịch sử',
      topic: 'Văn học thời Đường',
      question_text: 'Hai nhà thơ kiệt xuất, vĩ đại nhất của nền thi ca thời Đường là:',
      options: {
        A: 'Khuất Nguyên và Giả Nghị',
        B: 'Lý Bạch và Đỗ Phủ',
        C: 'Tào Tuyết Cần và Thi Nại Am',
        D: 'La Quán Trung và Ngô Thừa Ân'
      },
      correct_answer: 'B',
      explanation: 'Lý Bạch ("Thi tiên") và Đỗ Phủ ("Thi thánh") là đỉnh cao chói lọi của thơ Đường với hàng ngàn bài thơ bất hủ (trang 27 SGK).',
      memory_tip: 'Lý Bạch thi tiên phóng khoáng, Đỗ Phủ thi thánh ngẫm nỗi đời đau.',
      image_illustration: {
        title: 'Một trang trong bản in kinh sách thời Đường',
        source: 'Hình 4 trang 27 SGK Lịch sử & Địa lí 7',
        type: 'photo',
        description: 'Kinh Kim Cương (năm 868) - cuốn sách in hoàn chỉnh cổ nhất thế giới.',
        svg_badge: '📜 Đỉnh cao Thơ Đường'
      }
    },
    {
      id: 16,
      category: 'mcq',
      subject: 'Lịch sử',
      topic: 'Kiến trúc Tử Cấm Thành',
      question_text: 'Quần thể cung điện bằng gỗ lớn nhất thế giới được xây dựng dưới thời Minh - Thanh tại Bắc Kinh là:',
      options: {
        A: 'Di Hòa Viên',
        B: 'Tử Cấm Thành (Cố Cung)',
        C: 'Vạn Lý Trường Thành',
        D: 'Lăng Ly Sơn'
      },
      correct_answer: 'B',
      explanation: 'Tử Cấm Thành khởi công năm 1407 thời vua Minh Thành Tổ, có sự đóng góp thiết kế của thái giám người Việt là Nguyễn An (trang 24, 27 SGK).',
      memory_tip: 'Tử Cấm Thành chốn hoàng cung, Nguyễn An tổng đốc tài ba góp công.',
      image_illustration: {
        title: 'Toàn cảnh Tử Cấm Thành ở Bắc Kinh',
        source: 'Hình 1 trang 24 SGK Lịch sử & Địa lí 7',
        type: 'photo',
        description: 'Mái ngói lưu ly vàng rực rỡ, điện Thái Hòa uy nghiêm giữa Bắc Kinh.',
        svg_badge: '🏯 Tử Cấm Thành (Cố Cung Bắc Kinh)'
      }
    },
    {
      id: 17,
      category: 'mcq',
      subject: 'Lịch sử',
      topic: 'Vương triều Gúp-ta (Ấn Độ)',
      question_text: 'Thời kì phát triển hoàng kim của chế độ phong kiến Ấn Độ gắn liền với vương triều nào?',
      options: {
        A: 'Vương triều Hồi giáo Đê-li',
        B: 'Vương triều Gúp-ta (Gupta)',
        C: 'Vương triều Mô-gôn',
        D: 'Vương triều Hắc-sa'
      },
      correct_answer: 'B',
      explanation: 'Vương triều Gúp-ta (thế kỉ IV - VI) là thời kì hoàng kim của Ấn Độ: đất nước thống nhất, nông nghiệp và thương nghiệp phát triển, văn hóa rực rỡ (trang 30 SGK).',
      memory_tip: 'Gúp-ta thời kì hoàng kim, cột sắt không gỉ ngàn năm trơ gan.',
      image_illustration: {
        title: 'Cột sắt không gỉ đúc từ thế kỉ V thời Gúp-ta',
        source: 'Hình 2 trang 30 SGK Lịch sử & Địa lí 7',
        type: 'photo',
        description: 'Chứng minh kĩ thuật luyện kim siêu việt của người Ấn Độ cổ đại.',
        svg_badge: '🏛️ Vương triều Gúp-ta hoàng kim'
      }
    },
    {
      id: 18,
      category: 'mcq',
      subject: 'Lịch sử',
      topic: 'Vua A-cơ-ba (Mô-gôn)',
      question_text: 'Chính sách hòa hợp dân tộc và tôn giáo tiến bộ của vua A-cơ-ba được thực hiện dưới triều đại nào?',
      options: {
        A: 'Vương triều Mô-gôn (Mughal)',
        B: 'Vương triều Maurya',
        C: 'Vương triều Đê-li',
        D: 'Vương triều Kushan'
      },
      correct_answer: 'A',
      explanation: 'Vua A-cơ-ba (1556 - 1605) thuộc vương triều Mô-gôn đã thực hiện chính sách xóa bỏ kì thị tôn giáo, đoàn kết người Hin-đu và Hồi giáo (trang 31 SGK).',
      memory_tip: 'A-cơ-ba bậc minh vương, hòa hợp sắc tộc muôn phương thuận lòng.',
      image_illustration: {
        title: 'Chân dung vua A-cơ-ba (1556 - 1605)',
        source: 'Hình 3 trang 31 SGK Lịch sử & Địa lí 7',
        type: 'photo',
        description: 'Vị vua kiệt xuất nhất của vương triều Mô-gôn ở Ấn Độ.',
        svg_badge: '👑 Vua kiệt xuất A-cơ-ba'
      }
    },
    {
      id: 19,
      category: 'mcq',
      subject: 'Lịch sử',
      topic: 'Kiệt tác Lăng Ta-giơ Ma-han',
      question_text: 'Kiệt tác kiến trúc cẩm thạch trắng Ta-giơ Ma-han ở Ấn Độ được xây dựng vào thế kỉ nào?',
      options: {
        A: 'Thế kỉ X',
        B: 'Thế kỉ XVII',
        C: 'Thế kỉ IV TCN',
        D: 'Thế kỉ XIX'
      },
      correct_answer: 'B',
      explanation: 'Lăng Ta-giơ Ma-han tại Agra được vua Sa Gia-han xây dựng vào thế kỉ XVII bằng đá cẩm thạch trắng để tưởng nhớ hoàng hậu Muyn-ta (trang 23 SGK).',
      memory_tip: 'Ta-giơ Ma-han cẩm thạch trắng ngời, giọt lệ tình yêu lưu dấu muôn đời.',
      image_illustration: {
        title: 'Toàn cảnh Lăng Ta-giơ Ma-han (Ấn Độ)',
        source: 'Trang 23 SGK Lịch sử & Địa lí 7',
        type: 'photo',
        description: 'Di sản văn hóa thế giới UNESCO, đỉnh cao nghệ thuật kiến trúc Hồi giáo Ấn Độ.',
        svg_badge: '🕌 Lăng Ta-giơ Ma-han (Thế kỉ XVII)'
      }
    },
    {
      id: 20,
      category: 'mcq',
      subject: 'Lịch sử',
      topic: 'Chữ viết cổ Ấn Độ',
      question_text: 'Hệ thống chữ viết cổ hoàn chỉnh nhất của người Ấn Độ dùng để sáng tác các tác phẩm tôn giáo và văn học là:',
      options: {
        A: 'Chữ Hán phồn thể',
        B: 'Chữ Phạn (Sanskrit)',
        C: 'Chữ Nôm',
        D: 'Chữ tượng hình Ai Cập'
      },
      correct_answer: 'B',
      explanation: 'Chữ Phạn đạt đến độ hoàn chỉnh cao, là ngôn ngữ kinh điển của văn học, triết học và kinh sách Phật giáo, Hin-đu giáo (trang 32 SGK).',
      memory_tip: 'Chữ Phạn nguồn cội Hin-đi, văn học kịch nghệ khắc ghi muôn đời.',
      image_illustration: {
        title: 'Bản thảo chữ Phạn cổ trên lá buông',
        source: 'Mục b trang 32 SGK Lịch sử & Địa lí 7',
        type: 'photo',
        description: 'Vở kịch Sơ-kun-tơ-la của Ka-li-đa-sa được viết bằng chữ Phạn cổ.',
        svg_badge: '🪶 Chữ Phạn (Sanskrit) cổ đại'
      }
    },

    // --- PHẦN 2: TRẮC NGHIỆM ĐÚNG - SAI (CÂU 21 - 24) ---
    {
      id: 21,
      category: 'true_false',
      subject: 'Địa lý',
      topic: 'Địa hình và Khoáng sản Châu Á',
      question_text: 'Khi nhận xét về đặc điểm địa hình và khoáng sản của châu Á:',
      true_false_items: [
        { subId: 'a', statement: 'Địa hình châu Á rất đa dạng, có nhiều sơn nguyên và núi cao hiểm trở bậc nhất thế giới.', is_correct: true, explanation: 'ĐÚNG: Núi và sơn nguyên chiếm 3/4 diện tích, trung tâm là nóc nhà thế giới Tây Tạng.' },
        { subId: 'b', statement: 'Các đồng bằng rộng lớn nhất châu Á tập trung chủ yếu ở khu vực Tây Á khô cằn.', is_correct: false, explanation: 'SAI: Đồng bằng lớn tập trung ở Đông Á (Hoa Bắc, Hoa Trung) và Nam Á (Ấn-Hằng).' },
        { subId: 'c', statement: 'Châu Á có trữ lượng dầu mỏ, khí đốt và than đá vô cùng phong phú.', is_correct: true, explanation: 'ĐÚNG: Dầu mỏ tập trung ở Tây Á, than đá tập trung ở Trung Quốc, Ấn Độ, Nga.' },
        { subId: 'd', statement: 'Châu Á hoàn toàn không có hoạt động của động đất và núi lửa.', is_correct: false, explanation: 'SAI: Phía đông và đông nam châu Á nằm trên vành đai lửa Thái Bình Dương hoạt động dữ dội.' }
      ],
      explanation: 'Tổng hợp kiến thức địa hình phân hóa phức tạp và tài nguyên khoáng sản giàu có của châu Á.',
      memory_tip: 'Núi cao ở giữa, đồng bằng ven rìa, khoáng sản dồi dào bậc nhất địa cầu.'
    },
    {
      id: 22,
      category: 'true_false',
      subject: 'Địa lý',
      topic: 'Khí hậu và Sông ngòi Châu Á',
      question_text: 'Về mạng lưới sông ngòi và các kiểu khí hậu tại châu Á:',
      true_false_items: [
        { subId: 'a', statement: 'Khí hậu gió mùa châu Á đem lại lượng mưa lớn vào mùa hạ cho Nam Á và Đông Nam Á.', is_correct: true, explanation: 'ĐÚNG: Gió mùa tây nam từ Ấn Độ Dương mang theo ẩm dồi dào gây mưa lớn.' },
        { subId: 'b', statement: 'Tất cả các con sông ở châu Á đều đóng băng vĩnh viễn 12 tháng trong năm.', is_correct: false, explanation: 'SAI: Chỉ có sông ở Bắc Á đóng băng vào mùa đông; sông Nam Á, Đông Nam Á nước chảy quanh năm.' },
        { subId: 'c', statement: 'Sông Mê Công và Hoàng Hà là những con sông bồi đắp nên các đồng bằng châu thổ phì nhiêu.', is_correct: true, explanation: 'ĐÚNG: Sông mang lượng phù sa khổng lồ nuôi dưỡng nền văn minh lúa nước.' },
        { subId: 'd', statement: 'Khu vực nội địa Trung Á có lượng mưa trung bình năm trên 2000 mm.', is_correct: false, explanation: 'SAI: Trung Á nằm xa biển, khí hậu lục địa khô hạn, lượng mưa chỉ từ 200 - 400 mm/năm.' }
      ],
      explanation: 'Kiến thức về sự phân hóa khí hậu đa dạng và các hệ thống sông lớn ở châu Á.',
      memory_tip: 'Gió mùa ẩm ướt phù sa, nội địa khô khốc ngút ngàn thảo nguyên.'
    },
    {
      id: 23,
      category: 'true_false',
      subject: 'Lịch sử',
      topic: 'Chính sách cai trị triều Đường & Minh - Thanh',
      question_text: 'Về kinh tế và xã hội Trung Quốc thời phong kiến:',
      true_false_items: [
        { subId: 'a', statement: 'Nhà Đường thực hiện chế độ quân điền chia ruộng đất công cho nông dân cày cấy.', is_correct: true, explanation: 'ĐÚNG: Nông dân được cấp ruộng và nộp thuế tô, dung, điệu cho triều đình.' },
        { subId: 'b', statement: 'Dưới thời Minh - Thanh, mầm mống kinh tế tư bản chủ nghĩa đã bắt đầu xuất hiện trong các xưởng thủ công.', is_correct: true, explanation: 'ĐÚNG: Xuất hiện các xưởng dệt, gốm thuê mướn nhiều nhân công trả lương.' },
        { subId: 'c', statement: 'Nho giáo bị triều đình phong kiến Trung Quốc hoàn toàn bài trừ và cấm lưu hành.', is_correct: false, explanation: 'SAI: Nho giáo trở thành hệ tư tưởng thống trị chính thống bảo vệ quyền lực tuyệt đối của vua.' },
        { subId: 'd', statement: 'Bộ tiểu thuyết Tam quốc diễn nghĩa do tác giả Thi Nại Am sáng tác.', is_correct: false, explanation: 'SAI: Tam quốc diễn nghĩa do La Quán Trung viết; Thi Nại Am là tác giả Thủy hử.' }
      ],
      explanation: 'Phân tích các chính sách kinh tế quân điền thời Đường, mầm mống tư bản thời Minh và văn học cổ điển.',
      memory_tip: 'Quân điền ấm no thời Đường, Tứ đại danh tác lẫy lừng Minh - Thanh.'
    },
    {
      id: 24,
      category: 'true_false',
      subject: 'Lịch sử',
      topic: 'Văn hóa và Tôn giáo Ấn Độ cổ - trung đại',
      question_text: 'Về những thành tựu văn hóa tiêu biểu của Ấn Độ thời phong kiến:',
      true_false_items: [
        { subId: 'a', statement: 'Ấn Độ giáo (Hin-đu giáo) thờ ba vị thần tối cao: Brama, Siva và Visnu.', is_correct: true, explanation: 'ĐÚNG: Hin-đu giáo phát triển từ đạo Bà La Môn, tôn sùng bộ ba thần sáng tạo, bảo hộ, hủy diệt.' },
        { subId: 'b', statement: 'Chùa hang A-gian-ta là quần thể kiến trúc Phật giáo bằng đá đồ sộ được UNESCO công nhận.', is_correct: true, explanation: 'ĐÚNG: Gồm 31 hang động khoét sâu vào vách núi với tượng Phật và bích họa tinh xảo.' },
        { subId: 'c', statement: 'Người Ấn Độ không sáng tạo ra chữ số nào mà dùng chữ số La Mã.', is_correct: false, explanation: 'SAI: Người Ấn Độ là chủ nhân phát minh ra 10 chữ số (từ 0 đến 9), sau truyền qua A-rập.' },
        { subId: 'd', statement: 'Vua A-cơ-ba chủ trương bài trừ tuyệt đối người Hin-đu ra khỏi bộ máy nhà nước.', is_correct: false, explanation: 'SAI: Ông thực hiện hòa hợp dân tộc, bổ nhiệm quý tộc Hin-đu làm quan đại thần.' }
      ],
      explanation: 'Ấn Độ là cái nôi văn minh rực rỡ với chữ số thập phân, kiến trúc chùa hang và sự dung hợp tôn giáo.',
      memory_tip: 'Chữ số từ không đến chín, chùa hang A-gian-ta tuyệt tác muôn đời.'
    },

    // --- PHẦN 3: BÀI TẬP TÍNH TOÁN ĐỊA LÝ (2 MẬT ĐỘ + 2 TỈ TRỌNG) ---
    {
      id: 25,
      category: 'density_calc',
      subject: 'Địa lý',
      topic: 'Tính Mật độ dân số Châu Á năm 2020',
      question_text: 'Dựa vào Bảng 1 trang 115 SGK, năm 2020 số dân châu Á là 4.641,1 triệu người (không tính phần Liên bang Nga), diện tích lãnh thổ tương ứng khoảng 31,0 triệu km². Hãy tính mật độ dân số của châu Á (làm tròn số nguyên)?',
      calc_data: {
        formula: 'Mật độ dân số = Số dân / Diện tích (người/km²)',
        input_unit: 'người/km²',
        steps: [
          'Số dân châu Á = 4.641,1 triệu người',
          'Diện tích tính toán = 31,0 triệu km²',
          'Phép tính: 4.641,1 / 31,0 ≈ 149,71 người/km²',
          'Làm tròn đến hàng đơn vị: 150 người/km² (khớp hoàn toàn số liệu SGK ghi nhận 150 người/km²)'
        ],
        result: '150 người/km²'
      },
      correct_answer: '150 người/km²',
      explanation: 'Châu Á có mật độ dân số rất cao đạt 150 người/km², gấp 2,5 lần mật độ trung bình của toàn thế giới (60 người/km²) (trang 115 SGK).',
      memory_tip: 'Bốn nghìn sáu trăm chia ba mốt, ra tròn một trăm năm mươi (150) người/km².',
      image_illustration: {
        title: 'Bảng 1: Số dân và mật độ dân số châu Á và thế giới năm 2020',
        source: 'Bảng 1 trang 115 SGK Lịch sử & Địa lí 7',
        type: 'diagram',
        description: 'Mật độ dân số châu Á: 150 người/km²; mật độ toàn thế giới: 60 người/km².',
        svg_badge: '📊 Mật độ dân số Châu Á: 150 ng/km²'
      }
    },
    {
      id: 26,
      category: 'density_calc',
      subject: 'Địa lý',
      topic: 'Tính Mật độ dân số Thành phố Hồ Chí Minh năm 2019',
      question_text: 'Dựa vào bảng tư liệu SGV trang 232, năm 2019 Thành phố Hồ Chí Minh có số dân là 9.038,6 nghìn người và diện tích tự nhiên là 2.061 km². Hãy tính mật độ dân số của TP.HCM (làm tròn số nguyên)?',
      calc_data: {
        formula: 'Mật độ dân số = Số dân / Diện tích (người/km²)',
        input_unit: 'người/km²',
        steps: [
          'Đổi số dân ra người: 9.038,6 nghìn người = 9.038.600 người',
          'Diện tích = 2.061 km²',
          'Phép tính: 9.038.600 / 2.061 ≈ 4.385,5 người/km²',
          'Làm tròn số nguyên: 4.385 hoặc 4.386 người/km² (SGV ghi nhận 4.385 người/km²)'
        ],
        result: '4.385 người/km²'
      },
      correct_answer: '4.385 người/km²',
      explanation: 'TP. Hồ Chí Minh là đô thị đặc biệt có mật độ dân số cao nhất nước ta, đạt 4.385 người/km² (năm 2019).',
      memory_tip: 'Chín triệu dân trên hai nghìn cây số, bốn nghìn ba trăm tám lăm người chen vai.',
      image_illustration: {
        title: 'Bảng số liệu dân cư đô thị Việt Nam',
        source: 'Trang 232 SGV Lịch sử & Địa lí 7',
        type: 'chart',
        description: 'So sánh mật độ TP.HCM (4.385 ng/km²) và Hà Nội (2.410 ng/km²).',
        svg_badge: '🏙️ Mật độ TP.HCM: 4.385 ng/km²'
      }
    },
    {
      id: 27,
      category: 'percentage_calc',
      subject: 'Địa lý',
      topic: 'Tính Tỉ trọng dân số Châu Á trong dân số thế giới năm 2020',
      question_text: 'Năm 2020, dân số toàn thế giới đạt 7.794,8 triệu người, trong đó châu Á có 4.641,1 triệu người (theo Bảng 1 trang 115 SGK). Hãy tính tỉ trọng dân số của châu Á so với dân số toàn thế giới (làm tròn 1 chữ số thập phân)?',
      calc_data: {
        formula: 'Tỉ trọng (%) = (Dân số châu Á / Dân số thế giới) * 100',
        input_unit: '%',
        steps: [
          'Dân số châu Á = 4.641,1 triệu người',
          'Dân số thế giới = 7.794,8 triệu người',
          'Phép tính: (4.641,1 / 7.794,8) * 100 = 59,541%',
          'Làm tròn đến 1 chữ số thập phân: 59,5%'
        ],
        result: '59,5%'
      },
      correct_answer: '59,5%',
      explanation: 'Châu Á chiếm tới 59,5% (gần 60%) tổng dân số toàn cầu, là châu lục tập trung đông dân nhất hành tinh (SGV trang 231).',
      memory_tip: 'Gần sáu mươi phần trăm (59,5%) nhân loại cùng chung mái nhà châu Á.',
      image_illustration: {
        title: 'Biểu đồ tỉ lệ số dân châu Á trong tổng số dân thế giới',
        source: 'Mục Luyện tập trang 117 SGK & trang 231 SGV',
        type: 'chart',
        description: 'Châu Á 59,5%, các châu lục còn lại chiếm 40,5%.',
        svg_badge: '📈 Tỉ trọng dân số châu Á: 59,5%'
      }
    },
    {
      id: 28,
      category: 'percentage_calc',
      subject: 'Địa lý',
      topic: 'Tính Tỉ trọng GDP của Trung Quốc trong 4 trung tâm kinh tế lớn năm 2020',
      question_text: 'Năm 2020, tổng GDP của 4 trung tâm kinh tế lớn (Hoa Kỳ: 20.937 tỉ USD, EU: 15.276 tỉ USD, Trung Quốc: 14.723 tỉ USD, Nhật Bản: 4.975 tỉ USD) đạt 55.911 tỉ USD (trang 108 SGK). Hãy tính tỉ trọng GDP của Trung Quốc trong nhóm 4 trung tâm này (làm tròn 1 chữ số thập phân)?',
      calc_data: {
        formula: 'Tỉ trọng (%) = (GDP Trung Quốc / Tổng 4 trung tâm) * 100',
        input_unit: '%',
        steps: [
          'GDP Trung Quốc = 14.723 tỉ USD',
          'Tổng GDP 4 trung tâm = 20.937 + 15.276 + 14.723 + 4.975 = 55.911 tỉ USD',
          'Phép tính: (14.723 / 55.911) * 100 = 26,33%',
          'Làm tròn: 26,3%'
        ],
        result: '26,3%'
      },
      correct_answer: '26,3%',
      explanation: 'Trung Quốc là nền kinh tế lớn thứ hai thế giới, chiếm trên 26% tổng sản lượng của 4 trung tâm kinh tế hàng đầu hành tinh.',
      memory_tip: 'Mười bốn nghìn bảy chia năm lăm nghìn chín, đạt hai mươi sáu phẩy ba phần trăm.',
      image_illustration: {
        title: 'Bảng GDP của các trung tâm kinh tế lớn trên thế giới năm 2020',
        source: 'Bảng trang 108 SGK Lịch sử & Địa lí 7',
        type: 'diagram',
        description: 'Hoa Kỳ 20.937 tỉ, EU 15.276 tỉ, Trung Quốc 14.723 tỉ, Nhật Bản 4.975 tỉ USD.',
        svg_badge: '💹 Tỉ trọng GDP Trung Quốc ~26,3%'
      }
    },

    // --- PHẦN 4: TỰ LUẬN VẬN DỤNG (CÂU 29 - 30) ---
    {
      id: 29,
      category: 'essay',
      subject: 'Địa lý',
      topic: 'Đặc điểm địa hình & khoáng sản Châu Á',
      question_text: 'Dựa vào bản đồ tự nhiên châu Á (Hình 1 trang 110 SGK), hãy nêu và phân tích đặc điểm các khu vực địa hình chính và ý nghĩa của tài nguyên khoáng sản đối với phát triển kinh tế?',
      essay_rubric: {
        max_score: 3.0,
        criteria: [
          { point: 'Đặc điểm địa hình: Rất đa dạng; núi và sơn nguyên chiếm 3/4 diện tích tập trung ở trung tâm (Hi-ma-lay-a, Tây Tạng); đồng bằng rộng lớn ven biển (Hoa Bắc, Ấn-Hằng).', score: 1.5 },
          { point: 'Đặc điểm khoáng sản: Rất phong phú, trữ lượng lớn hàng đầu thế giới: dầu mỏ, khí đốt (Tây Á), than đá, sắt, thiếc (Đông Á, Nam Á).', score: 0.75 },
          { point: 'Ý nghĩa: Là cơ sở phát triển các ngành công nghiệp luyện kim, hóa chất, cơ khí; tuy nhiên cần khai thác hợp lý tránh cạn kiệt và bảo vệ môi trường.', score: 0.75 }
        ]
      },
      explanation: 'Câu hỏi tự luận trọng tâm bài 5 Địa lí 7 (trang 110 - 111 SGK).',
      memory_tip: 'Núi cao hiểm trở ở trung tâm, đồng bằng màu mỡ, rốn dầu Tây Á.',
      image_illustration: {
        title: 'Hình 1: Bản đồ tự nhiên châu Á',
        source: 'Hình 1 trang 110 SGK Lịch sử & Địa lí 7',
        type: 'map',
        description: 'Phân tầng địa hình từ 0 đến trên 5000m với các mỏ khoáng sản phong phú.',
        svg_badge: '🗺️ Địa hình & Khoáng sản Châu Á'
      }
    },
    {
      id: 30,
      category: 'essay',
      subject: 'Lịch sử',
      topic: 'Sự thịnh vượng của Trung Quốc thời Đường',
      question_text: 'Tại sao nói thời Đường (618 - 907) là thời kì phát triển thịnh vượng đỉnh cao của chế độ phong kiến Trung Quốc?',
      essay_rubric: {
        max_score: 2.0,
        criteria: [
          { point: 'Chính trị: Bộ máy nhà nước củng cố hoàn chỉnh, mở khoa thi tuyển chọn nhân tài, mở rộng lãnh thổ qua các cuộc chinh phạt.', score: 1.0 },
          { point: 'Kinh tế - Xã hội: Nông nghiệp bội thu nhờ chính sách quân điền và giảm thuế; thủ công nghiệp luyện sắt, đóng thuyền phát triển; Con đường tơ lụa buôn bán sầm uất.', score: 1.0 }
        ]
      },
      explanation: 'Thời Đường hội tụ đầy đủ đỉnh cao về sức mạnh quân sự, sự phồn vinh kinh tế và đỉnh cao văn hóa thi ca (trang 25, 26 SGK).',
      memory_tip: 'Quân điền ấm no, khoa cử chọn tài, con đường tơ lụa giao thương muôn phương.',
      image_illustration: {
        title: 'Tranh vẽ cảnh sinh hoạt buôn bán sầm uất thời Đường',
        source: 'Trang 25 SGK & trang 62 SGV',
        type: 'photo',
        description: 'Đô thị Trường An và Lạc Dương trở thành trung tâm văn minh bậc nhất phương Đông.',
        svg_badge: '🏮 Thịnh thế triều Đường rực rỡ'
      }
    }
  ]
};
