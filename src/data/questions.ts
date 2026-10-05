import { Question, ShortAnswerQuestion, TrueFalseQuestion, EssayTopic } from '../types';

export const QUESTIONS_DATA: Question[] = [
  // --- TRANG 2 (CÂU 1 - 6) ---
  {
    id: 1,
    subject: "Địa lý",
    topic: "Vị trí địa lý & Phạm vi châu Âu",
    question_text: "Về mặt vị trí địa lý, châu Âu là một bộ phận nằm ở phía nào của lục địa Á - Âu?",
    options: {
      A: "Nằm ở phía tây của lục địa Á - Âu",
      B: "Nằm ở phía đông nam của lục địa Á - Âu",
      C: "Nằm trọn vẹn ở cực bắc và bán cầu Nam",
      D: "Nằm tách biệt hoàn toàn giữa Thái Bình Dương"
    },
    correct_answer: "A",
    explanation: "Châu Âu là bộ phận phía tây của lục địa Á - Âu, trải dài từ vĩ tuyến 36°B đến 71°B và chủ yếu thuộc đới ôn hòa bán cầu Bắc.",
    memory_tip: "Châu Âu hướng Tây, đất liền gắn liền Á - Âu rộng lớn!"
  },
  {
    id: 2,
    subject: "Địa lý",
    topic: "Kích thước & Diện tích châu Âu",
    question_text: "Diện tích tự nhiên của châu Âu đạt khoảng bao nhiêu (so với các châu lục khác)?",
    options: {
      A: "Dưới 5 triệu km² (nhỏ nhất thế giới)",
      B: "Trên 10 triệu km² (chỉ lớn hơn châu Đại Dương)",
      C: "Khoảng 30 triệu km² (lớn thứ nhì thế giới)",
      D: "Hơn 44 triệu km² (rộng nhất hành tinh)"
    },
    correct_answer: "B",
    explanation: "Châu Âu có diện tích trên 10 triệu km² (khoảng 10,5 triệu km²), trong các châu lục chỉ lớn hơn châu Đại Dương.",
    memory_tip: "Trên 10 triệu cây số vuông, chỉ nhỉnh hơn châu Đại Dương tí thôi!"
  },
  {
    id: 3,
    subject: "Địa lý",
    topic: "Giới hạn tiếp giáp châu Âu",
    question_text: "Phía tây của châu lục châu Âu tiếp giáp với đại dương nào sau đây?",
    options: {
      A: "Ấn Độ Dương",
      B: "Bắc Băng Dương",
      C: "Đại Tây Dương",
      D: "Thái Bình Dương"
    },
    correct_answer: "C",
    explanation: "Châu Âu giáp Bắc Băng Dương ở phía Bắc, Đại Tây Dương ở phía Tây và Địa Trung Hải ở phía Nam.",
    memory_tip: "Tây đón gió Đại Tây Dương, Bắc lạnh buốt Bắc Băng Dương kề bên."
  },
  {
    id: 4,
    subject: "Địa lý",
    topic: "Ranh giới tự nhiên châu Âu",
    question_text: "Dãy núi nào đóng vai trò là ranh giới tự nhiên ngăn cách giữa châu Âu và châu Á ở phía đông?",
    options: {
      A: "Dãy U-ran (Ural)",
      B: "Dãy An-pơ (Alps)",
      C: "Dãy Xcan-đi-na-vi",
      D: "Dãy Hi-ma-lay-a"
    },
    correct_answer: "A",
    explanation: "Dãy núi già U-ran (chạy dọc từ bắc xuống nam) là ranh giới tự nhiên quy ước phân chia châu Âu và châu Á ở phía đông.",
    memory_tip: "Dãy U-ran sừng sững làm biên giới tự nhiên ngăn đôi Âu - Á."
  },
  {
    id: 5,
    subject: "Địa lý",
    topic: "Vị trí & Đới khí hậu",
    question_text: "Phần lớn lãnh thổ châu Âu nằm trong phạm vi đới thiên nhiên và đới khí hậu nào?",
    options: {
      A: "Đới nóng (nhiệt đới gió mùa ẩm)",
      B: "Đới ôn hòa (ôn đới bán cầu Bắc)",
      C: "Đới lạnh (băng tuyết vĩnh cửu)",
      D: "Đới xích đạo mưa nhiều quanh năm"
    },
    correct_answer: "B",
    explanation: "Nằm trong khoảng vĩ tuyến 36°B đến 71°B, đại bộ phận diện tích châu Âu thuộc đới ôn hòa của bán cầu Bắc.",
    memory_tip: "36 đến 71 độ Bắc, đới ôn hòa chiếm trọn cảnh quan."
  },
  {
    id: 6,
    subject: "Địa lý",
    topic: "Đặc điểm địa hình châu Âu",
    question_text: "Dạng địa hình nào chiếm phần lớn diện tích (khoảng 2/3 diện tích) của châu Âu?",
    options: {
      A: "Cao nguyên đá vôi hiểm trở",
      B: "Đồng bằng rộng lớn",
      C: "Hệ thống đồi cát sa mạc",
      D: "Vùng núi cao quanh năm phủ tuyết"
    },
    correct_answer: "B",
    explanation: "Địa hình châu Âu chia làm 2 khu vực: đồng bằng chiếm tới 2/3 diện tích (Đông Âu, Bắc Âu, Tây và Trung Âu) và miền núi chiếm 1/3 diện tích.",
    memory_tip: "Hai phần ba là đồng bằng, trải dài tít tắp từ Tây sang Đông."
  },

  // --- TRANG 3 (CÂU 7 - 17) ---
  {
    id: 7,
    subject: "Địa lý",
    topic: "Phân bố địa hình đồng bằng",
    question_text: "Các đồng bằng lớn của châu Âu (như Đồng bằng Bắc Âu, Đồng bằng Đông Âu) phân bố chủ yếu ở khu vực nào?",
    options: {
      A: "Tập trung dày đặc ở các đảo ven Địa Trung Hải",
      B: "Phía tây nam bán đảo I-bê-rích",
      C: "Nằm xen kẽ giữa các thung lũng núi cao An-pơ",
      D: "Kéo dài liên tục từ Tây sang Đông, chiếm ưu thế ở phía bắc và đông"
    },
    correct_answer: "D",
    explanation: "Các đồng bằng châu Âu tạo thành dải rộng lớn kéo dài liên tục, chiếm trọn khu vực Bắc Âu và Đông Âu (nhất là đồng bằng Đông Âu rộng lớn).",
    memory_tip: "Đồng bằng mênh mông, ưu thế vượt trội ở mạn Bắc và Đông."
  },
  {
    id: 8,
    subject: "Địa lý",
    topic: "Khu vực miền núi trẻ",
    question_text: "Dãy núi uốn nếp trẻ nào đồ sộ, đỉnh cao nhọn và nổi tiếng nhất ở phía nam châu Âu?",
    options: {
      A: "Dãy U-ran",
      B: "Dãy An-pơ (Alps)",
      C: "Dãy Xcan-đi-na-vi",
      D: "Dãy A-pa-lat"
    },
    correct_answer: "B",
    explanation: "Dãy An-pơ (Alps) là hệ thống núi uốn nếp trẻ cao nhất châu Âu với đỉnh Blăng (Mont Blanc) cao trên 4.800m.",
    memory_tip: "Núi trẻ An-pơ đỉnh nhọn sườn dốc, nóc nhà trượt tuyết Tây Nam Âu."
  },
  {
    id: 9,
    subject: "Địa lý",
    topic: "Khí hậu ôn đới hải dương",
    question_text: "Đặc điểm tiêu biểu nhất của kiểu khí hậu ôn đới hải dương ở Tây Âu là gì?",
    options: {
      A: "Mùa đông ấm, mùa hè mát mẻ, có mưa quanh năm",
      B: "Mùa đông khô khốc rét buốt, mùa hè nắng nóng gay gắt",
      C: "Mùa hè khô hạn kéo dài, mùa đông mưa dông dữ dội",
      D: "Quanh năm băng giá, lượng mưa dưới 100mm/năm"
    },
    correct_answer: "A",
    explanation: "Do ảnh hưởng của dòng biển nóng Bắc Đại Tây Dương và gió Tây ôn đới, khí hậu ôn đới hải dương Tây Âu có mùa đông ấm, hè mát, độ ẩm và mưa điều hòa quanh năm.",
    memory_tip: "Gió Tây mang biển vào bờ: đông ấm, hè mát, mưa đều bốn mùa."
  },
  {
    id: 10,
    subject: "Địa lý",
    topic: "Khí hậu Địa Trung Hải",
    question_text: "Khu vực Nam Âu giáp Địa Trung Hải có đặc trưng khí hậu nổi bật nào?",
    options: {
      A: "Mưa rất nhiều vào mùa hè và tuyết dày vào mùa đông",
      B: "Khí hậu lạnh giá quanh năm không có mùa hạ",
      C: "Gió mùa nhiệt đới mang mưa rào vào tháng 6 - 8",
      D: "Mùa hè nóng, khô hạn ít mưa; mùa thu - đông có mưa nhiều"
    },
    correct_answer: "D",
    explanation: "Khí hậu cận nhiệt Địa Trung Hải có mùa hè nóng khô (do áp cao cận chí tuyến), còn mùa thu - đông lại ẩm và mưa nhiều do gió Tây ôn đới.",
    memory_tip: "Địa Trung Hải lạ lùng: hè khô rang nóng, thu đông mưa dầm."
  },
  {
    id: 11,
    subject: "Địa lý",
    topic: "Thảm thực vật ôn đới hải dương",
    question_text: "Thảm thực vật nguyên sinh đặc trưng cho vùng khí hậu ôn đới hải dương ở Tây và Trung Âu là gì?",
    options: {
      A: "Rừng lá cứng gai và cây bụi rậm",
      B: "Rừng xích đạo ẩm nhiều tầng tán",
      C: "Rừng lá rộng (sồi, dẻ) và rừng hỗn giao",
      D: "Thảo nguyên hoang mạc khô cằn"
    },
    correct_answer: "C",
    explanation: "Vùng ôn đới hải dương ấm ẩm thuận lợi cho rừng lá rộng phát triển (tiêu biểu cây sồi, dẻ), chuyển dần sang rừng hỗn giao khi đi sâu vào nội địa.",
    memory_tip: "Ôn đới hải dương xanh tươi, rợp bóng sồi dẻ rừng cây lá rộng."
  },
  {
    id: 12,
    subject: "Địa lý",
    topic: "Đới lạnh & Đài nguyên",
    question_text: "Ở các vùng vĩ độ cao phía bắc châu Âu (đới lạnh cực và cận cực), thảm thực vật chủ yếu là gì?",
    options: {
      A: "Rừng mưa nhiệt đới thường xanh",
      B: "Đài nguyên (đồng rêu, địa y và cây bụi lùn)",
      C: "Rừng cây lá cứng xanh bóng",
      D: "Xavan cỏ cao xen cây bao-báp"
    },
    correct_answer: "B",
    explanation: "Đới lạnh bắc châu Âu có mùa đông rất dài và giá buốt, đất đóng băng nên chỉ có rêu, địa y và đài nguyên phát triển trong mùa hè ngắn ngủi.",
    memory_tip: "Cực Bắc lạnh giá đài nguyên, chỉ rêu địa y kiên cường sống sót."
  },
  {
    id: 13,
    subject: "Địa lý",
    topic: "Sông dài nhất châu Âu",
    question_text: "Dòng sông dài nhất và có lưu vực lớn nhất châu Âu chảy qua lãnh thổ Liên bang Nga đổ ra biển Cax-pi là sông nào?",
    options: {
      A: "Sông Đa-nuýp (Danube)",
      B: "Sông Vôn-ga (Volga)",
      C: "Sông Rai-nơ (Rhine)",
      D: "Sông Thêm-xơ (Thames)"
    },
    correct_answer: "B",
    explanation: "Sông Vôn-ga (Volga) dài 3.690 km, là con sông dài nhất châu Âu, bắt nguồn từ đồi Van-đai và đổ ra biển Ca-xpi.",
    memory_tip: "Vôn-ga sông mẹ nước Nga, dài nhất châu lục đổ ra biển hồ."
  },
  {
    id: 14,
    subject: "Địa lý",
    topic: "Mạng lưới sông ngòi châu Âu",
    question_text: "Đặc điểm nổi bật của mạng lưới sông ngòi và hệ thống giao thông thủy nội địa ở châu Âu là gì?",
    options: {
      A: "Mạng lưới sông thưa thớt, hầu như cạn kiệt quanh năm và không thể đi thuyền",
      B: "Mạng lưới sông ngòi dày đặc, dồi dào nước và nối liền nhau bởi hệ thống kênh đào rất phát triển",
      C: "Chỉ có sông ngắn dốc ở miền núi, hoàn toàn không có sông chảy qua đồng bằng",
      D: "Sông ngòi đóng băng vĩnh viễn 12 tháng nên không có giá trị kinh tế"
    },
    correct_answer: "B",
    explanation: "Châu Âu có mạng lưới sông ngòi rất phát triển và dày đặc, nguồn cung cấp nước dồi dào. Đặc biệt hệ thống kênh đào nhân tạo phát triển đã kết nối các lưu vực sông lớn, tạo mạng lưới giao thông thủy xuyên lục địa thuận lợi.",
    memory_tip: "Mạng lưới sông ngòi dày đặc, kênh đào kết nối buôn bán giao thương!"
  },
  {
    id: 15,
    subject: "Địa lý",
    topic: "Khí hậu ôn đới lục địa",
    question_text: "Khu vực Đông Âu chịu ảnh hưởng của khí hậu ôn đới lục địa nên có mùa đông với đặc điểm như thế nào?",
    options: {
      A: "Mùa đông lạnh, khô ráo và có tuyết rơi kéo dài",
      B: "Mùa đông ấm áp như mùa hè miền nhiệt đới",
      C: "Mùa đông hoàn toàn không có gió và sương mù",
      D: "Mưa dông nhiệt đới ngập lụt diễn ra hàng ngày"
    },
    correct_answer: "A",
    explanation: "Càng đi sâu về phía đông lục địa xa biển, tính chất lục địa càng tăng: mùa đông lạnh buốt, nhiệt độ dưới 0°C, khô và tuyết rơi đóng băng nhiều tháng.",
    memory_tip: "Đông Âu xa biển lục địa, mùa đông buốt giá tuyết rơi trắng đồng."
  },
  {
    id: 16,
    subject: "Địa lý",
    topic: "Rừng lá kim (Taiga)",
    question_text: "Rừng lá kim (rừng Tai-ga gồm thông, tùng, vân sam) phát triển mạnh nhất ở khu vực nào của châu Âu?",
    options: {
      A: "Các đảo nhiệt đới ven bờ biển Địa Trung Hải",
      B: "Bắc Âu (bán đảo Xcan-đi-na-vi) và các sườn núi cao",
      C: "Đồng bằng châu thổ sông Đa-nuýp phía nam",
      D: "Các đô thị ven biển thuộc Tây Âu sương mù"
    },
    correct_answer: "B",
    explanation: "Rừng lá kim (taiga) thích nghi với khí hậu lạnh ôn đới lục địa và cận cực, mọc bạt ngàn ở Bắc Âu (Thụy Điển, Phần Lan, Na Uy) và sườn núi cao An-pơ.",
    memory_tip: "Tai-ga lá nhọn thông tùng, Bắc Âu lạnh giá bạt ngàn sắc xanh."
  },
  {
    id: 17,
    subject: "Địa lý",
    topic: "Tài nguyên khoáng sản châu Âu",
    question_text: "Khu vực đồng bằng Đông Âu và vùng núi U-ran có nguồn tài nguyên khoáng sản năng lượng dồi dào nào?",
    options: {
      A: "Chỉ duy nhất có đá hoa cương và cát biển",
      B: "Kim cương lộ thiên và uranium tự do",
      C: "Vàng bạc trầm tích ven vịnh biển",
      D: "Dầu mỏ, khí đốt tự nhiên và than đá phong phú"
    },
    correct_answer: "D",
    explanation: "Đồng bằng Đông Âu và chân núi U-ran là vùng giàu khoáng sản bậc nhất châu Âu, đặc biệt là than đá, quặng sắt, dầu mỏ và khí đốt tự nhiên.",
    memory_tip: "Đông Âu - U-ran trù phú: dầu mỏ, khí đốt, than quặng bao la."
  },

  // --- TRANG 4 (CÂU 18 - 29) ---
  {
    id: 18,
    subject: "Địa lý",
    topic: "Cơ cấu dân số châu Âu",
    question_text: "Hiện nay, đặc điểm nổi bật nhất về cơ cấu dân số theo độ tuổi ở châu Âu là gì?",
    options: {
      A: "Cơ cấu dân số già, tỉ lệ người trên 65 tuổi ngày càng tăng cao",
      B: "Cơ cấu dân số cực trẻ với tỉ lệ trẻ sơ sinh bùng nổ vượt bậc",
      C: "Số người trong độ tuổi lao động tăng vọt gấp 3 lần",
      D: "Tuổi thọ trung bình suy giảm nghiêm trọng dưới 50 tuổi"
    },
    correct_answer: "A",
    explanation: "Châu Âu có cơ cấu dân số già do tỉ lệ sinh thấp kéo dài và tuổi thọ trung bình tăng cao, nhóm tuổi từ 65 trở lên tăng nhanh dẫn tới thiếu hụt lao động.",
    memory_tip: "Dân số già hóa âu lo: trẻ em ít dần, người già tăng nhanh."
  },
  {
    id: 19,
    subject: "Địa lý",
    topic: "Mật độ dân số châu Âu",
    question_text: "Mật độ dân số trung bình của toàn châu lục châu Âu đạt xấp xỉ mức nào (làm tròn)?",
    options: {
      A: "Khoảng 15 người/km² (thuộc hàng thưa thớt nhất)",
      B: "Khoảng 35 người/km² (tương đương châu Phi)",
      C: "Khoảng 75 người/km² (và phân bố không đồng đều)",
      D: "Trên 500 người/km² (cao nhất địa cầu)"
    },
    correct_answer: "C",
    explanation: "Mật độ dân số trung bình của châu Âu xấp xỉ 75 người/km², tuy nhiên dân cư phân bố rất không đều, tập trung cao ở Tây và Trung Âu.",
    memory_tip: "Mật độ bảy lăm người một cây, tập trung trù phú đất Tây - Trung tròn."
  },
  {
    id: 20,
    subject: "Địa lý",
    topic: "Đặc điểm đô thị hóa",
    question_text: "Đặc điểm nào dưới đây phản ánh chính xác về quá trình đô thị hóa ở châu Âu?",
    options: {
      A: "Đô thị hóa diễn ra rất muộn, tỉ lệ dân thành thị dưới 30%",
      B: "Đô thị hóa diễn ra sớm, tỉ lệ dân thành thị cao (trên 75%) và đang mở rộng ra nông thôn",
      C: "Hầu như không có mạng lưới đô thị và thành phố lớn",
      D: "Dân cư rời bỏ hoàn toàn thành thị về làm nông nghiệp thuần túy"
    },
    correct_answer: "B",
    explanation: "Châu Âu là cái nôi của cách mạng công nghiệp nên đô thị hóa từ rất sớm, hiện có trên 75% dân sống ở đô thị và đô thị hóa nông thôn phát triển mạnh.",
    memory_tip: "Đô thị hóa sớm hàng đầu, ba phần tư sống ngập tràn phố hoa."
  },
  {
    id: 21,
    subject: "Địa lý",
    topic: "Liên minh châu Âu (EU)",
    question_text: "Liên minh châu Âu (EU) là tổ chức liên kết kinh tế - chính trị khu vực với mục tiêu trọng tâm là gì?",
    options: {
      A: "Độc quyền quân sự và cô lập buôn bán với các nước khác",
      B: "Sát nhập tất cả các nước thành một quốc gia đơn nhất",
      C: "Xây dựng thị trường chung tự do lưu thông hàng hóa, dịch vụ, con người và tiền tệ",
      D: "Giải thể nền kinh tế công nghiệp để quay lại kinh tế nông nghiệp"
    },
    correct_answer: "C",
    explanation: "Liên minh châu Âu thành lập nhằm hợp tác sâu rộng, tạo dựng 'bốn tự do': tự do di chuyển con người, hàng hóa, dịch vụ và vốn/tiền tệ (đồng Euro).",
    memory_tip: "EU thị trường chung hòa: bốn bề tự do, đồng tiền Ơ-rô."
  },
  {
    id: 22,
    subject: "Lịch sử",
    topic: "Sự hình thành chế độ phong kiến Tây Âu",
    question_text: "Sự kiện lịch sử nào vào năm 476 đã đánh dấu sự sụp đổ của đế quốc La Mã và mở đầu thời kì phong kiến ở Tây Âu?",
    options: {
      A: "Các bộ tộc người Giéc-man tràn vào xâm lược tiêu diệt Tây La Mã",
      B: "Sự ra đời của đế quốc Mông Cổ tại Trung Á",
      C: "Cách mạng tư sản Pháp bùng nổ lật đổ chế độ quân chủ",
      D: "Cuộc phát kiến địa lý của Cô-lôm-bô tìm ra châu Mỹ"
    },
    correct_answer: "A",
    explanation: "Năm 476, người Giéc-man lật đổ hoàng đế cuối cùng của Tây La Mã, thủ tiêu chế độ chiếm nô và thành lập các vương quốc mới, mở đầu thời kì phong kiến.",
    memory_tip: "Năm 476 Giéc-man tràn sang, La Mã sụp đổ mở màn phong kiến."
  },
  {
    id: 23,
    subject: "Lịch sử",
    topic: "Giai cấp trong chế độ phong kiến Tây Âu",
    question_text: "Xã hội phong kiến Tây Âu trung đại được cấu thành từ hai giai cấp cơ bản đối kháng nào?",
    options: {
      A: "Chủ nô và Nô lệ",
      B: "Tư sản và Vô sản công nghiệp",
      C: "Lãnh chúa phong kiến và Nông nô",
      D: "Địa chủ và Nông dân tự canh"
    },
    correct_answer: "C",
    explanation: "Trong xã hội phong kiến Tây Âu, Lãnh chúa phong kiến nắm toàn bộ ruộng đất và quyền cai trị, còn Nông nô phụ thuộc và phải nộp địa tô nặng nề.",
    memory_tip: "Lãnh chúa nắm đất trong tay, Nông nô cày cấy tháng ngày trả tô."
  },
  {
    id: 24,
    subject: "Lịch sử",
    topic: "Lãnh địa phong kiến",
    question_text: "Đơn vị kinh tế, chính trị cơ bản khép kín và tự cấp tự túc của quý tộc Tây Âu trung đại gọi là gì?",
    options: {
      A: "Trang trại tư nhân thời cận đại",
      B: "Lãnh địa phong kiến",
      C: "Hợp tác xã nông nghiệp",
      D: "Công xã nguyên thủy"
    },
    correct_answer: "B",
    explanation: "Lãnh địa phong kiến là một pháo đài khép kín có lâu đài, hào sâu, ruộng đất riêng, tự cung tự cấp mọi sản phẩm thiết yếu và không giao thương bên ngoài.",
    memory_tip: "Lãnh địa khép kín tự lo, hào sâu thành lũy chẳng chờ ngoại bang."
  },
  {
    id: 25,
    subject: "Lịch sử",
    topic: "Nguồn gốc hình thành Nông nô",
    question_text: "Tầng lớp nông nô trong xã hội phong kiến Tây Âu chủ yếu có nguồn gốc xuất thân từ đâu?",
    options: {
      A: "Nông dân bị mất hết ruộng đất và những người nô lệ được giải phóng",
      B: "Quý tộc La Mã phá sản do thất bại trong chiến tranh",
      C: "Tướng lĩnh quân đội người Giéc-man thoái hóa",
      D: "Thương nhân giàu có từ phương Đông di cư sang"
    },
    correct_answer: "A",
    explanation: "Nông dân công xã bị cướp đoạt ruộng đất cùng với nô lệ thời La Mã được giải phóng nhưng không có tư liệu sản xuất đã biến thành nông nô, phụ thuộc lãnh chúa.",
    memory_tip: "Nông dân mất đất ngậm ngùi, nô lệ giải phóng thành người nông nô."
  },
  {
    id: 26,
    subject: "Lịch sử",
    topic: "Bản chất kinh tế lãnh địa",
    question_text: "Đặc điểm căn bản của nền kinh tế bên trong lãnh địa phong kiến Tây Âu là gì?",
    options: {
      A: "Sản xuất hàng hóa lớn phục vụ xuất khẩu ra toàn cầu",
      B: "Dựa hoàn toàn vào máy móc công nghiệp hiện đại",
      C: "Sử dụng lao động làm thuê hưởng lương cao",
      D: "Nền kinh tế tự nhiên, tự cấp tự túc và bóc lột nông nô bằng địa tô"
    },
    correct_answer: "D",
    explanation: "Nền kinh tế lãnh địa mang tính chất tự nhiên, nông nô sản xuất ra lương thực, quần áo, vũ khí để dùng nội bộ, chỉ mua muối và sắt từ bên ngoài.",
    memory_tip: "Kinh tế tự cấp tự dùng, bóc lột địa tô đến cùng nông nô."
  },
  {
    id: 27,
    subject: "Lịch sử",
    topic: "Sự ra đời của Thành thị trung đại",
    question_text: "Thành thị trung đại ở Tây Âu bắt đầu xuất hiện và phát triển rực rỡ vào khoảng thời gian nào?",
    options: {
      A: "Thế kỉ I trước Công nguyên",
      B: "Thế kỉ V ngay sau khi La Mã sụp đổ",
      C: "Thế kỉ XI nhờ thủ công nghiệp phát triển và tách khỏi nông nghiệp",
      D: "Thế kỉ XIX trong thời kì cơ giới hóa động cơ hơi nước"
    },
    correct_answer: "C",
    explanation: "Đến thế kỉ XI, lực lượng sản xuất phát triển, thợ thủ công rời bỏ lãnh địa đến ngã ba sông, bến cảng lập xưởng bán hàng, từ đó các thành thị trung đại hình thành.",
    memory_tip: "Thế kỉ mười một (XI) bừng lên, thành thị buôn bán mọc lên ngã đường."
  },
  {
    id: 28,
    subject: "Lịch sử",
    topic: "Cư dân thành thị trung đại",
    question_text: "Cư dân chủ yếu sinh sống và làm việc tại các thành thị trung đại Tây Âu là ai?",
    options: {
      A: "Lãnh chúa phong kiến và tướng soái hoàng gia",
      B: "Thợ thủ công và thương nhân (gọi chung là thị dân)",
      C: "Nông nô gắn chặt với đồng ruộng",
      D: "Các giáo sĩ cấp cao của Tòa thánh La Mã"
    },
    correct_answer: "B",
    explanation: "Thị dân là cư dân chính của thành thị, bao gồm các thợ thủ công tổ chức thành phường hội và thương nhân lập ra thương hội buôn bán.",
    memory_tip: "Thị dân náo nức vào ra: thợ làm thợ khéo, lái buôn dập dìu."
  },
  {
    id: 29,
    subject: "Lịch sử",
    topic: "Vai trò lịch sử của Thành thị trung đại",
    question_text: "Sự ra đời của các thành thị trung đại có tác động lịch sử to lớn nào đối với xã hội Tây Âu?",
    options: {
      A: "Củng cố thêm nền kinh tế biệt lập cát cứ của các lãnh địa",
      B: "Xóa bỏ hoàn toàn tôn giáo và nhà nước phong kiến",
      C: "Phá vỡ nền kinh tế tự nhiên khép kín của lãnh địa, thúc đẩy kinh tế hàng hóa và tự do tư tưởng",
      D: "Làm bùng nổ chiến tranh hủy diệt giữa các quốc gia"
    },
    correct_answer: "C",
    explanation: "Thành thị đem lại luồng sinh khí mới: thúc đẩy trao đổi buôn bán, xóa dần cát cứ phong kiến, hình thành các trường đại học và gieo mầm tư tưởng dân chủ tự do.",
    memory_tip: "Thành thị phá vỡ khép kín, mở đường buôn bán, tự do rạng ngời."
  },

  // --- TRANG 5 (CÂU 30 - 40) ---
  {
    id: 30,
    subject: "Lịch sử",
    topic: "Cái nôi phong trào Phục hưng",
    question_text: "Phong trào Văn hóa Phục hưng (thế kỉ XIV - XVII) bắt nguồn đầu tiên từ quốc gia nào ở Tây Âu?",
    options: {
      A: "I-ta-li-a (Ý)",
      B: "Nước Anh",
      C: "Nước Pháp",
      D: "Nước Nga"
    },
    correct_answer: "A",
    explanation: "I-ta-li-a có các thành thị thương mại cực kì sầm uất (như Florence, Venice) và là nơi lưu giữ nhiều di sản văn hóa Hy Lạp - La Mã cổ đại nên Phục hưng bùng nổ đầu tiên tại đây.",
    memory_tip: "I-ta-li-a đất nước hình chiếc ủng, cái nôi Phục hưng rực rỡ ngàn năm."
  },
  {
    id: 31,
    subject: "Lịch sử",
    topic: "Bản chất phong trào Phục hưng",
    question_text: "Thực chất của phong trào Văn hóa Phục hưng là cuộc đấu tranh tư tưởng của giai cấp nào?",
    options: {
      A: "Giai cấp tư sản đang lên chống lại hệ tư tưởng phong kiến lỗi thời và Giáo hội Ki-tô",
      B: "Giai cấp nông nô chống lại sự bóc lột địa tô của lãnh chúa",
      C: "Tầng lớp tăng lữ bảo vệ quyền lực tuyệt đối của Tòa thánh Vatican",
      D: "Quý tộc quân sự chống lại sự trỗi dậy của thương nhân thành thị"
    },
    correct_answer: "A",
    explanation: "Giai cấp tư sản tuy có tiềm lực kinh tế nhưng chưa có địa vị chính trị, bị giáo lý hà khắc kìm hãm nên đã mượn văn hóa cổ đại để phát động cuộc đấu tranh tư tưởng.",
    memory_tip: "Tư sản đứng dậy đấu tranh, đập tan xiềng xích Giáo hoàng giáo điều."
  },
  {
    id: 32,
    subject: "Lịch sử",
    topic: "Tư tưởng cốt lõi thời Phục hưng",
    question_text: "Nội dung tư tưởng tiến bộ cốt lõi được các nhà văn hóa Phục hưng tôn vinh và đề cao là gì?",
    options: {
      A: "Sự phục tùng mù quáng trước số phận và thần linh",
      B: "Chủ nghĩa nhân văn, tôn trọng giá trị cao quý của con người và tự do khoa học",
      C: "Đề cao sự giàu có bất chấp đạo đức của giới quý tộc",
      D: "Phổ biến chủ nghĩa khổ hạnh, ép xác và tuyệt đối hóa thần quyền"
    },
    correct_answer: "B",
    explanation: "Chủ nghĩa nhân văn (Humanism) là linh hồn của Phục hưng: đề cao con người là thước đo vạn vật, giải phóng cá nhân và tôn vinh tri thức khoa học thực nghiệm.",
    memory_tip: "Chủ nghĩa nhân văn tỏa sáng: con người là quý, khoa học vươn cao."
  },
  {
    id: 33,
    subject: "Lịch sử",
    topic: "Danh nhân Lê-ô-na đơ Vanh-xi",
    question_text: "Vĩ nhân toàn năng thời Phục hưng - tác giả của hai bức họa kinh điển thế giới 'Nàng Mô-na Li-sa' và 'Bữa tiệc cuối cùng' là ai?",
    options: {
      A: "Mi-ken-lăng-giơ (Michelangelo)",
      B: "Ra-pha-en (Raphael)",
      C: "Lê-ô-na đơ Vanh-xi (Leonardo da Vinci)",
      D: "Đan-tê (Dante Alighieri)"
    },
    correct_answer: "C",
    explanation: "Leonardo da Vinci (1452 - 1519) là thiên tài toàn năng người Ý trong hội họa, giải phẫu, kỹ thuật, sáng tạo nên kiệt tác nụ cười bí ẩn Mona Lisa và Bữa ăn tối cuối cùng.",
    memory_tip: "Vanh-xi vẽ nàng Mô-na Li-sa, nụ cười bí ẩn lưu danh muôn đời."
  },
  {
    id: 34,
    subject: "Lịch sử",
    topic: "Danh nhân Mi-ken-lăng-giơ",
    question_text: "Bức tượng điêu khắc đá cẩm thạch kiệt tác 'Chàng Đa-vít' (David) và bích họa trên vòm nhà nguyện Xích-xtin là công trình của thiên tài nào?",
    options: {
      A: "Pi-cát-xô (Picasso)",
      B: "Mi-ken-lăng-giơ (Michelangelo)",
      C: "Sếch-xpia (Shakespeare)",
      D: "Rơ-nê Đê-các (Descartes)"
    },
    correct_answer: "B",
    explanation: "Michelangelo (1475 - 1564) là nhà điêu khắc và danh họa khổng lồ của thời Phục hưng với tượng David tràn đầy sức sống và bích họa 'Sáng tạo Adam' nhà nguyện Sistine.",
    memory_tip: "Mi-ken tạc tượng Đa-vít, cơ bắp cuồn cuộn sức sống trần gian."
  },
  {
    id: 35,
    subject: "Lịch sử",
    topic: "Văn hào Sếch-xpia",
    question_text: "Đại thi hào, nhà soạn kịch thiên tài người Anh với các kiệt tác sân khấu bất hủ như 'Rô-mê-ô và Giu-li-ét', 'Hăm-lét' là ai?",
    options: {
      A: "Vic-to Huy-gô (Victor Hugo)",
      B: "Mô-li-e (Molière)",
      C: "Xéc-van-téc (Cervantes)",
      D: "Uy-li-am Sếch-xpia (William Shakespeare)"
    },
    correct_answer: "D",
    explanation: "William Shakespeare (1564 - 1616) là đỉnh cao văn học kịch nghệ thời Phục hưng Anh với ngòi bút sâu sắc về tình yêu, công lý và nhân cách con người.",
    memory_tip: "Sếch-xpia viết kịch đắm say, Rô-mê-ô Giu-li-ét muôn đời ngợi ca."
  },
  {
    id: 36,
    subject: "Lịch sử",
    topic: "Thuyết Nhật tâm của Cô-péc-ních",
    question_text: "Nhà thiên văn học Ba Lan dũng cảm đề xướng 'Thuyết Nhật tâm' (Mặt Trời là trung tâm vũ trụ), bác bỏ thuyết địa tâm sai lầm của Giáo hội là ai?",
    options: {
      A: "I-sắc Niu-tơn (Isaac Newton)",
      B: "N. Cô-péc-ních (Nicolaus Copernicus)",
      C: "An-be Anh-xtanh (Albert Einstein)",
      D: "Tô-mát Ê-đi-xơn (Thomas Edison)"
    },
    correct_answer: "B",
    explanation: "Copernicus đã công bố công trình chứng minh Trái Đất và các hành tinh tự quay và quay quanh Mặt Trời, giáng đòn sấm sét vào quan điểm của Giáo hội thời bấy giờ.",
    memory_tip: "Cô-péc-ních chứng minh tỏ tường: Mặt Trời trung tâm, địa cầu quay quanh."
  },
  {
    id: 37,
    subject: "Lịch sử",
    topic: "Khởi nguồn Phong trào Cải cách tôn giáo",
    question_text: "Phong trào Cải cách tôn giáo thế kỉ XVI đã bùng phát đầu tiên tại quốc gia nào ở Tây Âu?",
    options: {
      A: "Bồ Đào Nha",
      B: "Hà Lan",
      C: "Tây Ban Nha",
      D: "Nước Đức"
    },
    correct_answer: "D",
    explanation: "Đức là nơi Giáo hội La Mã bóc lột nặng nề nhất ('con bò sữa của Giáo hoàng'). Năm 1517, Martin Luther dán 95 luận đề phản đối thẻ miễn tội tại Wittenberg (Đức).",
    memory_tip: "Nước Đức Cải cách tôn giáo bùng lên, Mác-tin Lu-thơ dán luận đề đấu tranh."
  },
  {
    id: 38,
    subject: "Lịch sử",
    topic: "Lãnh tụ Mác-tin Lu-thơ",
    question_text: "Nhà cải cách tôn giáo dũng cảm đứng lên viết 95 bản luận đề kịch liệt lên án việc bán 'thẻ miễn tội' của Giáo hoàng là ai?",
    options: {
      A: "Giăng Can-vanh (Jean Calvin)",
      B: "Mác-tin Lu-thơ (Martin Luther)",
      C: "Tô-mát Muyn-xe (Thomas Müntzer)",
      D: "Ga-li-lê (Galileo Galilei)"
    },
    correct_answer: "B",
    explanation: "Martin Luther (1483 - 1546) là linh mục người Đức công khai phê phán Giáo hoàng lạm dụng thẻ miễn tội trục lợi, kêu gọi quay về đức tin chân chính trong Kinh Thánh.",
    memory_tip: "Mác-tin Lu-thơ vạch trần: vé thẻ miễn tội chỉ là mị dân!"
  },
  {
    id: 39,
    subject: "Lịch sử",
    topic: "Hệ quả Cải cách tôn giáo",
    question_text: "Hệ quả trực tiếp và sâu sắc nhất của phong trào Cải cách tôn giáo đối với Giáo hội Ki-tô Tây Âu là gì?",
    options: {
      A: "Tôn giáo hoàn toàn bị tiêu diệt và cấm đoán tại châu Âu",
      B: "Đạo Hồi thay thế hoàn toàn Ki-tô giáo trên khắp lãnh thổ",
      C: "Tòa thánh La Mã giành thêm quyền lực tối thượng tuyệt đối",
      D: "Ki-tô giáo phân liệt thành hai dòng chính: Tân giáo (Tin Lành) và Cựu giáo (Công giáo)"
    },
    correct_answer: "D",
    explanation: "Cải cách tôn giáo làm Ki-tô giáo Tây Âu phân chia thành Tân giáo (Tin Lành) tiến bộ phù hợp giai cấp tư sản, tách biệt khỏi Cựu giáo (Công giáo truyền thống).",
    memory_tip: "Tôn giáo phân đôi rạch ròi: Cựu giáo Công giáo, Tân giáo Tin Lành."
  },
  {
    id: 40,
    subject: "Lịch sử",
    topic: "Ý nghĩa vĩ đại của Văn hóa Phục hưng",
    question_text: "Ý nghĩa lịch sử vĩ đại nhất của phong trào Văn hóa Phục hưng đối với nhân loại là gì?",
    options: {
      A: "Giải phóng tư tưởng con người khỏi sự trói buộc của Giáo hội, đặt nền tảng cho văn hóa và khoa học thời cận - hiện đại",
      B: "Khôi phục lại hoàn toàn thể chế chiếm nô của đế quốc La Mã cổ",
      C: "Ngăn chặn vĩnh viễn sự xuất hiện của các cỗ máy cơ khí và công xưởng",
      D: "Thu hẹp tri thức con người vào khuôn khổ kinh sách cổ"
    },
    correct_answer: "A",
    explanation: "Phong trào Phục hưng là cuộc cách mạng tư tưởng khổng lồ đánh thức châu Âu thời đêm trường trung cổ, mở đường cho cuộc cách mạng khoa học và văn minh cận hiện đại.",
    memory_tip: "Phục hưng đánh thức loài người, mở đường tư tưởng rạng ngời văn minh."
  }
];

// --- PHẦN ĐIỀN SỐ / TRẢ LỜI NGẮN (TRANG 6) ---
export const SHORT_ANSWER_DATA: ShortAnswerQuestion[] = [
  {
    id: 1,
    title: "Tỉ lệ nhóm tuổi lao động (15–64 tuổi)",
    question_text: "Dựa vào bảng số liệu cơ cấu dân số châu Âu, tỉ lệ dân số trong nhóm tuổi từ 15 đến 64 tuổi của châu Âu năm 2020 đạt bao nhiêu phần trăm?",
    standard_answer: "64,8%",
    accepted_answers: ["64.8%", "64,8%", "64.8", "64,8", "64.8 %", "64,8 %"],
    unit: "%",
    explanation: "Theo số liệu chuẩn sách giáo khoa Lịch sử & Địa lý 7 (Trang 6 đề ôn tập), tỉ lệ nhóm tuổi 15–64 tuổi của châu Âu là 64,8%. Nhóm tuổi dưới 15 tuổi đang giảm còn nhóm từ 65 tuổi trở lên có xu hướng tăng nhanh.",
    memory_tip: "Nhóm tuổi lao động châu Âu chiếm sáu mươi tư phẩy tám phần trăm (64,8%)."
  },
  {
    id: 2,
    title: "Mật độ dân số trung bình châu Âu",
    question_text: "Mật độ dân số trung bình của toàn châu lục châu Âu (làm tròn số nguyên) là bao nhiêu người trên một kilômét vuông (người/km²)?",
    standard_answer: "75 người/km²",
    accepted_answers: ["75", "75 người/km2", "75 người/km²", "75 nguoi/km2", "75nguoi/km2"],
    unit: "người/km²",
    explanation: "Mật độ dân số trung bình của châu Âu xấp xỉ 75 người/km². Dân cư phân bố không đều giữa miền núi cao thưa thớt và dải đồng bằng công nghiệp tập trung rất đông.",
    memory_tip: "Mỗi cây số vuông châu Âu trung bình có 75 người cùng sinh sống."
  },
  {
    id: 3,
    title: "Tỉ trọng GDP của EU so với Thế giới",
    question_text: "Năm 2020, tỉ trọng tổng sản phẩm quốc nội (GDP) của Liên minh châu Âu (EU) đóng góp trong tổng GDP toàn thế giới là bao nhiêu phần trăm?",
    standard_answer: "18,05%",
    accepted_answers: ["18.05%", "18,05%", "18.05", "18,05", "18.1%", "18,1%", "18.1", "18,1"],
    unit: "%",
    explanation: "Năm 2020, EU đóng góp 18,05% (làm tròn ~18,1%) vào GDP toàn cầu, khẳng định vị thế là một trong 4 trung tâm kinh tế - tài chính lớn nhất hành tinh cùng với Hoa Kỳ, Trung Quốc và Nhật Bản.",
    memory_tip: "EU chiếm trọn mười tám phẩy linh năm phần trăm (18,05%) GDP toàn cầu."
  }
];

// --- PHẦN ĐÚNG / SAI (TRANG 6) ---
export const TRUE_FALSE_DATA: TrueFalseQuestion[] = [
  {
    id: 1,
    title: "Đặc điểm tự nhiên & Địa hình châu Âu (Câu 1 Trang 6)",
    context: "Khi tìm hiểu về vị trí địa lý, phạm vi và địa hình của châu Âu:",
    items: [
      {
        id: "a",
        statement: "Châu Âu là một bộ phận nằm ở phía tây lục địa Á - Âu rộng lớn.",
        is_correct: true,
        explanation: "ĐÚNG: Châu Âu nằm ở phía tây của lục địa Á - Âu, diện tích trên 10 triệu km²."
      },
      {
        id: "b",
        statement: "Đồng bằng chiếm tới 2/3 diện tích châu lục và kéo dài liên tục từ tây sang đông.",
        is_correct: true,
        explanation: "ĐÚNG: Địa hình đồng bằng chiếm ưu thế tuyệt đối (khoảng 2/3 diện tích toàn châu lục)."
      },
      {
        id: "c",
        statement: "Dãy An-pơ là dãy núi già chạy từ bắc xuống nam chia cắt châu Âu và châu Á.",
        is_correct: false,
        explanation: "SAI: Dãy phân cách châu Âu và châu Á là dãy núi già U-ran (Ural); còn dãy An-pơ là dãy núi trẻ ở Nam Âu."
      },
      {
        id: "d",
        statement: "Khí hậu châu Âu khô hạn như sa mạc Xa-ha-ra do nằm hoàn toàn trong đới nóng.",
        is_correct: false,
        explanation: "SAI: Đại bộ phận châu Âu nằm trong đới ôn hòa, khí hậu mát mẻ ẩm ướt, không có sa mạc cát nhiệt đới."
      }
    ]
  },
  {
    id: 2,
    title: "Dân cư & Văn hóa thời Trung đại châu Âu (Câu 2 Trang 6)",
    context: "Khi nhận định về biến chuyển kinh tế, xã hội và văn hóa châu Âu:",
    items: [
      {
        id: "a",
        statement: "Châu Âu có cơ cấu dân số già hóa với tỉ lệ người trên 65 tuổi tăng nhanh.",
        is_correct: true,
        explanation: "ĐÚNG: Tuổi thọ cao kết hợp tỉ lệ sinh thấp dẫn tới quá trình già hóa dân số nhanh chóng ở châu Âu."
      },
      {
        id: "b",
        statement: "Phong trào Văn hóa Phục hưng khởi phát đầu tiên tại I-ta-li-a vào thế kỉ XIV.",
        is_correct: true,
        explanation: "ĐÚNG: Các đô thị phồn thịnh tại Ý (Florence, Venice) là cái nôi nảy nở phong trào Phục hưng."
      },
      {
        id: "c",
        statement: "Lãnh địa phong kiến hoạt động hoàn toàn bằng buôn bán quốc tế và xuất khẩu vũ khí.",
        is_correct: false,
        explanation: "SAI: Lãnh địa phong kiến là đơn vị kinh tế tự nhiên, tự cấp tự túc, đóng kín và hầu như không buôn bán ra ngoài."
      },
      {
        id: "d",
        statement: "Phong trào Cải cách tôn giáo thế kỉ XVI do Leonardo da Vinci khởi xướng.",
        is_correct: false,
        explanation: "SAI: Leonardo da Vinci là danh họa/kỹ sư vĩ đại thời Phục hưng; người khởi xướng Cải cách tôn giáo tại Đức là Martin Luther."
      }
    ]
  }
];

// --- PHẦN TỰ LUẬN CÂU 5 (TRANG 2) ---
export const ESSAY_TOPIC_DATA: EssayTopic = {
  id: 5,
  title: "Câu 5 Tự luận (Trang 2): Vị trí địa lý, Kích thước & Giới hạn tiếp giáp châu Âu",
  subtitle: "Kiến thức trọng tâm bài học Địa lý Lớp 7 - Điểm 10 tuyệt đối khi viết tự luận",
  location_size: {
    heading: "1. Vị trí địa lý & Kích thước",
    points: [
      "Bộ phận phía tây: Châu Âu là một bộ phận nằm ở phía tây của lục địa Á - Âu rộng lớn.",
      "Kích thước diện tích: Diện tích tự nhiên trên 10 triệu km² (khoảng 10,5 triệu km²), trong các châu lục chỉ lớn hơn châu Đại Dương.",
      "Tọa độ vĩ tuyến: Lãnh thổ trải dài trong khoảng vĩ tuyến từ 36°B đến 71°B.",
      "Đới khí hậu chủ đạo: Đại bộ phận diện tích thuộc đới ôn hòa của bán cầu Bắc (ôn đới bán cầu Bắc)."
    ]
  },
  borders: {
    heading: "2. Giới hạn tiếp giáp (4 hướng)",
    points: [
      { direction: "Phía Bắc", border: "Giáp Bắc Băng Dương (vùng biển lạnh giá cực bắc)", icon: "Compass" },
      { direction: "Phía Tây", border: "Giáp Đại Tây Dương (đón gió Tây ôn đới và dòng biển nóng mang ẩm)", icon: "Waves" },
      { direction: "Phía Nam", border: "Giáp Địa Trung Hải (ngăn cách với châu Phi bằng biển kín ấm áp)", icon: "Sun" },
      { direction: "Phía Đông", border: "Ngăn cách với châu Á bởi ranh giới tự nhiên là dãy núi già U-ran (Ural)", icon: "Mountain" }
    ]
  },
  mnemonic: "Mẹo chốt điểm 10 tự luận: 'Tây lục địa Á-Âu, trên 10 triệu km²; 36°B đến 71°B; Bắc giáp Bắc Băng Dương, Tây giáp Đại Tây Dương, Nam giáp Địa Trung Hải, Đông ngăn bởi dãy U-ran!'"
};
