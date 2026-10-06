# NVINA — Landing ngành nghề kinh doanh có điều kiện

Trang landing liệt kê 15 ngành nghề kinh doanh có điều kiện dưới dạng lưới (grid),
có tìm kiếm theo từ khóa (không phân biệt dấu). Ngành **Kinh doanh dịch vụ cầm đồ**
được làm nổi bật, đặt đầu danh sách và khi bấm sẽ chuyển tới
<https://landing-dev.nvina.com.vn/>. Các ngành còn lại hiển thị trạng thái "Sắp ra mắt".

## Công nghệ

- **Next.js 16** (App Router, xuất tĩnh `output: "export"` để tối ưu SSG)
- **React 19**
- **Tailwind CSS v4**
- **lucide-react** (bộ icon)
- Màu primary: `#0C5ADB`

## Phát triển

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build tĩnh

```bash
npm run build    # xuất ra thư mục ./out (deploy lên static host/CDN)
```
