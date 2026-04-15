export const bookPages = [
  // Page 0 - Cover
  {
    type: 'cover',
    title: 'TƯ TƯỞNG\nHỒ CHÍ MINH',
    subtitle: 'Hệ thống quan điểm tư tưởng về các vấn đề\nđộc lập dân tộc và chủ nghĩa xã hội',
    image: '/images/1eda7e30-ed73-4b79-8eb4-a552b4494b31.jpg',
  },
  // Page 1 - Table of Contents
  {
    type: 'toc',
    title: 'MỤC LỤC',
    items: [
      { chapter: 'I', name: 'Độc lập dân tộc và Chủ nghĩa xã hội', page: '3' },
      { chapter: 'II', name: 'Đại đoàn kết toàn dân tộc và Đoàn kết quốc tế', page: '5' },
      { chapter: 'III', name: 'Xây dựng Đảng Cộng sản và Nhà nước', page: '7' },
      { chapter: 'IV', name: 'Đạo đức, Văn hóa và Phát triển con người', page: '9' },
      { chapter: '', name: 'Bảng tóm tắt các nội dung chính', page: '11' },
    ]
  },
  // Page 2 - Chapter 1 intro
  {
    type: 'chapter-intro',
    chapterNum: 'CHƯƠNG I',
    title: 'ĐỘC LẬP DÂN TỘC\nVÀ CHỦ NGHĨA XÃ HỘI',
    image: '/images/4f59ae28-653c-4438-a725-51f950294c95.jpg',
    quote: '"Không có gì quý hơn\nđộc lập, tự do"',
  },
  // Page 3 - Độc lập dân tộc
  {
    type: 'content',
    sectionTitle: 'Độc lập dân tộc là quyền thiêng liêng, bất khả xâm phạm',
    content: [
      {
        label: 'Tư tưởng cốt lõi',
        text: 'Độc lập, tự do là quyền đầu tiên và thiêng liêng nhất của mỗi dân tộc; "Không có gì quý hơn độc lập, tự do".'
      },
      {
        label: 'Nguyên tắc chính',
        text: 'Độc lập phải là độc lập thật sự, hoàn toàn và triệt để trên tất cả các mặt ngoại giao, kinh tế, quân sự; gắn liền với thống nhất và toàn vẹn lãnh thổ.'
      },
      {
        label: 'Vai trò',
        text: 'Là tiền đề, là mục tiêu trước hết của cách mạng Việt Nam.'
      },
      {
        label: 'Giải thích',
        text: 'Hồ Chí Minh khẳng định nếu nước độc lập mà dân không được hưởng hạnh phúc, tự do thì độc lập đó cũng không có nghĩa lý gì.'
      }
    ],
    pageNum: 3,
  },
  // Page 4 - CNXH
  {
    type: 'content',
    sectionTitle: 'Chủ nghĩa xã hội và con đường phát triển',
    content: [
      {
        label: 'Định nghĩa',
        text: 'CNXH là một xã hội do nhân dân lao động làm chủ, không còn áp bức, bóc lột, mọi người đều có công ăn việc làm, được học hành và ấm no.'
      },
      {
        label: 'Nguyên tắc chuyển đổi',
        text: 'Việt Nam đi lên CNXH bằng con đường quá độ gián tiếp, bỏ qua giai đoạn tư bản chủ nghĩa.'
      },
      {
        label: 'Mục tiêu',
        text: 'Làm cho dân giàu, nước mạnh, xã hội công bằng, văn minh.'
      },
      {
        label: 'Mối liên hệ',
        text: 'Độc lập dân tộc gắn liền với CNXH; độc lập dân tộc là điều kiện để xây dựng CNXH và CNXH là nền tảng vững chắc để giữ vững độc lập.'
      }
    ],
    pageNum: 4,
  },
  // Page 5 - Chapter 2 intro
  {
    type: 'chapter-intro',
    chapterNum: 'CHƯƠNG II',
    title: 'ĐẠI ĐOÀN KẾT\nTOÀN DÂN TỘC\nVÀ ĐOÀN KẾT QUỐC TẾ',
    image: '/images/5464c82f-48ac-4a63-a78f-88b9557e8ddc.jpg',
    quote: '"Đoàn kết, đoàn kết, đại đoàn kết.\nThành công, thành công, đại thành công"',
  },
  // Page 6 - Đại đoàn kết
  {
    type: 'content',
    sectionTitle: 'Sức mạnh của Đại đoàn kết toàn dân tộc',
    content: [
      {
        label: 'Định nghĩa',
        text: 'Là chiến lược tập hợp mọi người Việt Nam vào một khối thống nhất, không phân biệt giai cấp, tôn giáo, dân tộc, lứa tuổi.'
      },
      {
        label: 'Nguyên tắc chính',
        text: 'Xây dựng trên nền tảng liên minh công - nông - trí thức dưới sự lãnh đạo của Đảng.'
      },
      {
        label: 'Hình thức tổ chức',
        text: 'Mặt trận dân tộc thống nhất là nơi quy tụ sức mạnh của toàn dân.'
      },
      {
        label: 'Ý nghĩa',
        text: 'Là nhân tố quyết định thắng lợi của cách mạng.'
      }
    ],
    pageNum: 6,
  },
  // Page 7 - Đoàn kết quốc tế
  {
    type: 'content',
    sectionTitle: 'Đoàn kết quốc tế và Sức mạnh thời đại',
    content: [
      {
        label: 'Tư tưởng cốt lõi',
        text: 'Kết hợp sức mạnh dân tộc với sức mạnh thời đại (phong trào cách mạng thế giới, khoa học kĩ thuật) để tạo ra sức mạnh tổng hợp.'
      },
      {
        label: 'Nguyên tắc',
        text: 'Đoàn kết trên cơ sở thống nhất mục tiêu và lợi ích; giữ vững độc lập tự chủ; "giúp bạn là tự giúp mình".'
      },
      {
        label: 'Vai trò',
        text: 'Việt Nam muốn làm bạn với tất cả các nước dân chủ và không gây thù oán với một ai.'
      },
      {
        label: 'Ví dụ',
        text: 'Đoàn kết với nhân dân Lào và Campuchia trong cuộc chiến chống kẻ thù chung.'
      }
    ],
    pageNum: 7,
  },
  // Page 8 - Chapter 3 intro
  {
    type: 'chapter-intro',
    chapterNum: 'CHƯƠNG III',
    title: 'XÂY DỰNG ĐẢNG\nCỘNG SẢN VÀ\nNHÀ NƯỚC',
    image: '/images/645b423a-de7f-449e-9f9b-b1ae1238e98e.jpg',
    quote: '"Đảng phải là đạo đức,\nlà văn minh"',
  },
  // Page 9 - Đảng CSVN
  {
    type: 'content',
    sectionTitle: 'Đảng Cộng sản Việt Nam',
    content: [
      {
        label: 'Bản chất',
        text: 'Đảng là đội tiên phong của giai cấp công nhân, đồng thời là đội tiên phong của nhân dân lao động và của dân tộc Việt Nam.'
      },
      {
        label: 'Nguyên tắc tổ chức',
        text: 'Tập trung dân chủ là nguyên tắc cơ bản nhất; đi đôi với tự phê bình và phê bình thường xuyên như "rửa mặt hàng ngày".'
      },
      {
        label: 'Vai trò',
        text: 'Đảng là người lãnh đạo duy nhất, là nhân tố hàng đầu quyết định mọi thắng lợi của cách mạng Việt Nam.'
      },
      {
        label: 'Đạo đức của Đảng',
        text: 'Đảng phải "là đạo đức, là văn minh"; đảng viên vừa là người lãnh đạo vừa là người đầy tớ trung thành của nhân dân.'
      }
    ],
    pageNum: 9,
  },
  // Page 10 - Nhà nước
  {
    type: 'content',
    sectionTitle: 'Nhà nước "Của dân, do dân, vì dân"',
    content: [
      {
        label: 'Định nghĩa',
        text: 'Một nhà nước dân chủ, nơi tất cả quyền lực thuộc về nhân dân.'
      },
      {
        label: 'Ba trụ cột',
        text: 'CỦA DÂN: Dân là chủ, dân là gốc của nước. DO DÂN: Dân bầu ra đại diện và tham gia quản lý nhà nước. VÌ DÂN: Mọi hoạt động của nhà nước đều vì lợi ích và hạnh phúc của nhân dân.'
      },
      {
        label: 'Quản lý',
        text: 'Xây dựng một nhà nước pháp quyền xã hội chủ nghĩa, quản lý bằng pháp luật đi đôi với giáo dục đạo đức.'
      },
    ],
    pageNum: 10,
  },
  // Page 11 - Chapter 4 intro
  {
    type: 'chapter-intro',
    chapterNum: 'CHƯƠNG IV',
    title: 'ĐẠO ĐỨC, VĂN HÓA\nVÀ PHÁT TRIỂN\nCON NGƯỜI',
    image: '/images/848d000a-36c1-4ed9-b9dd-7ca6bb555eef.jpg',
    quote: '"Vì lợi ích mười năm thì phải trồng cây,\nvì lợi ích trăm năm thì phải trồng người"',
  },
  // Page 12 - Đạo đức cách mạng
  {
    type: 'content',
    sectionTitle: 'Đạo đức Cách mạng',
    content: [
      {
        label: 'Tư tưởng cốt lõi',
        text: 'Đạo đức là cái gốc, là nền tảng của người cách mạng.'
      },
      {
        label: 'Chuẩn mực',
        text: 'Cần, Kiệm, Liêm, Chính (chăm chỉ, tiết kiệm, trong sạch, thẳng thắn) và Chí công vô tư (đặt lợi ích chung lên trên hết).'
      },
      {
        label: 'Nguyên tắc thực hành',
        text: '"Nói đi đôi với làm", "Xây đi đôi với chống" và bền bỉ tự rèn luyện suốt đời.'
      },
    ],
    pageNum: 12,
  },
  // Page 13 - Văn hóa
  {
    type: 'content',
    sectionTitle: 'Văn hóa là nền tảng tinh thần',
    content: [
      {
        label: 'Định nghĩa',
        text: 'Là sự tổng hợp của mọi phương thức sinh hoạt và sáng tạo của loài người nhằm mục đích sinh tồn.'
      },
      {
        label: 'Tính chất',
        text: 'Nền văn hóa mới phải có tính Dân tộc, Khoa học và Đại chúng.'
      },
      {
        label: 'Vai trò',
        text: 'Văn hóa không thể đứng ngoài mà phải "ở trong chính trị và kinh tế", phục vụ nhiệm vụ chính trị và thúc đẩy kinh tế phát triển.'
      },
    ],
    pageNum: 13,
  },
  // Page 14 - Con người
  {
    type: 'content',
    sectionTitle: 'Chiến lược phát triển con người',
    content: [
      {
        label: 'Tư tưởng cốt lõi',
        text: 'Con người là vốn quý nhất, là mục tiêu và động lực của cách mạng.'
      },
      {
        label: 'Mục tiêu',
        text: 'Đào tạo những con người phát triển toàn diện, vừa "Hồng" (có đạo đức cách mạng) vừa "Chuyên" (có năng lực chuyên môn).'
      },
      {
        label: 'Giải thích',
        text: '"Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người".'
      },
    ],
    pageNum: 14,
  },
  // Page 15 - Summary table
  {
    type: 'summary',
    title: 'BẢNG TÓM TẮT',
    rows: [
      {
        topic: 'Độc lập & CNXH',
        core: 'Độc lập là tiền đề để tiến tới CNXH',
        principle: 'Độc lập thật sự; Quá độ bỏ qua TBCN',
        meaning: 'Đường lối chiến lược xuyên suốt',
      },
      {
        topic: 'Đoàn kết',
        core: 'Đoàn kết tạo nên sức mạnh vô địch',
        principle: 'Liên minh công - nông - trí; Quốc tế vô sản',
        meaning: 'Nhân tố quyết định thắng lợi',
      },
      {
        topic: 'Đảng & Nhà nước',
        core: 'Đảng lãnh đạo, Nhân dân làm chủ',
        principle: 'Tập trung dân chủ; Của, Do, Vì dân',
        meaning: 'Xây dựng hệ thống chính trị vững mạnh',
      },
      {
        topic: 'Đạo đức & Văn hóa',
        core: 'Đạo đức là gốc; Văn hóa là nền tảng',
        principle: 'Cần, Kiệm, Liêm, Chính; Dân tộc - Khoa học - Đại chúng',
        meaning: 'Xây dựng con người "Hồng" và "Chuyên"',
      },
    ],
    pageNum: 15,
  },
  // Page 16 - Back cover
  {
    type: 'back-cover',
    image: '/images/aa87a39a-5306-4ef4-9aad-eb74f2aa1beb.jpg',
    quote: '"Không có gì quý hơn\nđộc lập, tự do"',
    author: '— Hồ Chí Minh —',
  },
];
