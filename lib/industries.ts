/**
 * Dữ liệu ngành nghề — giữ thuần serializable (không chứa component)
 * để có thể truyền từ Server Component sang Client Component.
 * Icon được tham chiếu bằng tên (xem components/icon-map.ts).
 */
export type IconName =
  | "Stamp"
  | "Wrench"
  | "Sparkles"
  | "HandCoins"
  | "HandHeart"
  | "ShieldCheck"
  | "Dices"
  | "Bomb"
  | "FlaskConical"
  | "Factory"
  | "Mountain"
  | "Printer"
  | "Mic"
  | "Hotel"
  | "Swords";

export type Industry = {
  /** Mã định danh ngắn gọn */
  slug: string;
  /** Tên hiển thị trên thẻ */
  name: string;
  /** Mô tả ngắn hỗ trợ tìm kiếm & hiển thị */
  description: string;
  /** Tên icon lucide-react */
  icon: IconName;
  /** Từ khóa phụ (không dấu/đồng nghĩa) giúp tìm kiếm tốt hơn */
  keywords: string[];
  /** Ngành đang hoạt động (bấm được + redirect). Các ngành khác: sắp ra mắt */
  active?: boolean;
  /** Đường dẫn redirect khi bấm (chỉ với ngành active) */
  href?: string;
};

/**
 * Danh sách 15 ngành nghề kinh doanh có điều kiện.
 * "Kinh doanh dịch vụ cầm đồ" được đánh dấu active và đưa lên đầu danh sách.
 */
export const INDUSTRIES: Industry[] = [
  {
    slug: "cam-do",
    name: "Kinh doanh dịch vụ cầm đồ",
    description: "Dịch vụ cầm cố tài sản, cho vay có tài sản bảo đảm.",
    icon: "HandCoins",
    keywords: ["cam do", "cầm cố", "pawn", "vay", "tiệm cầm đồ"],
    active: true,
    href: "https://landing.nvina.vn/#lien-he",
  },
  {
    slug: "san-xuat-con-dau",
    name: "Sản xuất con dấu",
    description: "Khắc, chế tác và sản xuất con dấu các loại.",
    icon: "Stamp",
    keywords: ["con dau", "khắc dấu", "seal", "stamp"],
  },
  {
    slug: "cong-cu-ho-tro",
    name: "Kinh doanh công cụ hỗ trợ",
    description: "Kinh doanh công cụ hỗ trợ, bao gồm cả sửa chữa.",
    icon: "Wrench",
    keywords: ["cong cu ho tro", "sửa chữa", "support tools"],
  },
  {
    slug: "phao",
    name: "Kinh doanh các loại pháo, trò pháo nổ",
    description: "Kinh doanh các loại pháo và trò pháo nổ theo quy định.",
    icon: "Sparkles",
    keywords: ["phao", "pháo nổ", "firework", "pháo hoa"],
  },
  {
    slug: "xoa-bop",
    name: "Kinh doanh dịch vụ xoa bóp",
    description: "Dịch vụ xoa bóp, massage phục hồi sức khỏe.",
    icon: "HandHeart",
    keywords: ["xoa bop", "massage", "spa"],
  },
  {
    slug: "bao-ve",
    name: "Kinh doanh dịch vụ bảo vệ",
    description: "Cung cấp dịch vụ bảo vệ, vệ sĩ chuyên nghiệp.",
    icon: "ShieldCheck",
    keywords: ["bao ve", "security", "vệ sĩ"],
  },
  {
    slug: "tro-choi-co-thuong",
    name: "Kinh doanh trò chơi có thưởng",
    description:
      "Trò chơi điện tử có thưởng cho người nước ngoài, casino và đặt cược.",
    icon: "Dices",
    keywords: ["tro choi co thuong", "casino", "đặt cược", "betting", "game"],
  },
  {
    slug: "vat-lieu-no-cong-nghiep",
    name: "Kinh doanh vật liệu nổ công nghiệp",
    description: "Kinh doanh vật liệu nổ công nghiệp theo quy định.",
    icon: "Bomb",
    keywords: ["vat lieu no cong nghiep", "explosive", "thuốc nổ"],
  },
  {
    slug: "tien-chat-thuoc-no",
    name: "Kinh doanh tiền chất thuốc nổ",
    description: "Kinh doanh tiền chất thuốc nổ theo quy định.",
    icon: "FlaskConical",
    keywords: ["tien chat thuoc no", "precursor", "hóa chất"],
  },
  {
    slug: "nganh-su-dung-vlno",
    name: "Ngành nghề sử dụng vật liệu nổ & tiền chất thuốc nổ",
    description:
      "Kinh doanh ngành, nghề có sử dụng vật liệu nổ công nghiệp và tiền chất thuốc nổ.",
    icon: "Factory",
    keywords: ["su dung vat lieu no", "tiền chất", "sản xuất"],
  },
  {
    slug: "no-min",
    name: "Kinh doanh dịch vụ nổ mìn",
    description: "Cung cấp dịch vụ nổ mìn phục vụ khai thác, xây dựng.",
    icon: "Mountain",
    keywords: ["no min", "blasting", "khai thác"],
  },
  {
    slug: "in",
    name: "Kinh doanh dịch vụ in",
    description: "Cung cấp dịch vụ in ấn các loại.",
    icon: "Printer",
    keywords: ["in an", "printing", "nhà in"],
  },
  {
    slug: "karaoke-vu-truong",
    name: "Kinh doanh dịch vụ karaoke, vũ trường",
    description: "Kinh doanh dịch vụ karaoke và vũ trường.",
    icon: "Mic",
    keywords: ["karaoke", "vu truong", "club", "bar"],
  },
  {
    slug: "luu-tru",
    name: "Kinh doanh dịch vụ lưu trú",
    description: "Dịch vụ lưu trú, khách sạn, nhà nghỉ.",
    icon: "Hotel",
    keywords: ["luu tru", "khách sạn", "nhà nghỉ", "hotel", "homestay"],
  },
  {
    slug: "quan-trang-vu-khi",
    name: "Kinh doanh quân trang, vũ khí quân dụng",
    description:
      "Quân trang, dụng cụ cho lực lượng vũ trang, vũ khí quân dụng, trang thiết bị kỹ thuật, khí tài, linh kiện và vật tư chuyên dùng quân sự, Công an.",
    icon: "Swords",
    keywords: ["quan trang", "vu khi quan dung", "quân sự", "weapon", "military"],
  },
];
