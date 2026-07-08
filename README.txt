HƯỚNG DẪN DÙNG WEBSITE CỔNG TOẠI
=================================

Bản này đã được tối ưu lại:
- Font chữ Be Vietnam Pro, dễ đọc và chuyên nghiệp hơn.
- Responsive cho điện thoại, tablet và desktop.
- Tối ưu bố cục, khoảng cách, heading, form và nút CTA.
- Form gửi trực tiếp về Google Form bằng entry ID.
- Hỗ trợ tự nhận ảnh .webp nếu bạn đặt đúng tên file trong thư mục assets.

1. Chạy website
- Giải nén file zip.
- Mở file index.html để xem thử trên máy.
- Khi up online, đưa toàn bộ thư mục gồm index.html, style.css, app.js và thư mục assets lên hosting/GitHub Pages.

2. Ảnh .webp
Nếu bạn muốn dùng ảnh WebP riêng, copy ảnh vào thư mục assets và đặt đúng tên:
- assets/hero.webp
- assets/cccd.webp
- assets/van-phong.webp
- assets/khach-hang.webp

Nếu chưa có các ảnh .webp này, website vẫn tự dùng ảnh mặc định có sẵn, không bị lỗi hình.

3. Google Form đã được gắn sẵn
Form trên website đang gửi dữ liệu trực tiếp về Google Form:
https://docs.google.com/forms/d/e/1FAIpQLSdK0EWcjnfC3TfkItl8h7hiB7nYwpe2oI3YdKBsSX-lThzu9w/formResponse

Các mã entry đã gắn:
- Họ và tên: entry.42376990
- Số điện thoại: entry.900389994
- Số tiền muốn vay (VNĐ): entry.942649490
- Đã từng trả góp tại Home Credit?: entry.1114453400
- Ghi chú: entry.998931217

4. Cách kiểm tra dữ liệu
- Mở website.
- Điền thử một khách mẫu.
- Bấm Gửi đăng ký.
- Vào Google Form > Responses hoặc Google Sheet liên kết để kiểm tra dữ liệu.

5. Lưu ý
- Số điện thoại được kiểm tra đủ 10 số và bắt đầu bằng số 0.
- Số tiền trên giao diện có dấu chấm cho dễ nhìn, nhưng khi gửi về Google Form sẽ gửi dạng số liền, ví dụ 20000000.
- File google-apps-script.gs là bản dự phòng nếu sau này muốn chuyển qua Google Sheet trực tiếp. Hiện tại không cần dùng file này.


6. Ảnh đã được sửa sẵn
Bản này đã thay trực tiếp 4 ảnh bạn gửi vào thư mục assets:
- assets/hero-consultant.webp
- assets/id-check.webp
- assets/office.webp
- assets/customer-phone.webp

Website đã trỏ thẳng vào các ảnh này, không còn phụ thuộc tên hero.webp, cccd.webp, van-phong.webp, khach-hang.webp nữa.


7. Nút gọi + Zalo cố định
Bản này đã thay nút gọi nổi cũ bằng cụm 2 nút cố định bên phải màn hình:
- Gọi ngay: tel:0836974486
- Chat Zalo: https://zalo.me/84836974486
Trên điện thoại, nút gọi trong thanh menu được ẩn để tránh trùng với nút gọi nổi.


8. Cập nhật giao diện chuyên nghiệp
- Đã thay ô chữ CT bằng logo thật trong file assets/ct-logo.webp.
- Đã tăng khoảng cách giữa logo, tên Công Toại và dòng Tư vấn tài chính.
- Đã căn lại header: logo bên trái, menu gọn ở giữa, hotline bên phải trên máy tính.
- Trên điện thoại: ẩn hotline header để tránh rối, menu nằm trong nút mở, nút gọi/Zalo cố định bên phải.
- Tối ưu lại cỡ chữ hero, khoảng cách menu và trải nghiệm mobile.


9. Cập nhật ảnh hero
- Đã thay ảnh người tư vấn viên bằng banner vay nhanh 3 phút.
- Ảnh mới nằm tại: assets/hero-consultant.webp
- Đã bỏ badge nổi trong khung ảnh hero để không che nội dung banner mới.


10. Đã xử lý trong file mới nhất
- Đã giữ banner vay nhanh 3 phút tại assets/hero-consultant.webp.
- Đã chèn Google Tag Manager thật: GTM-TRWRXT2S.
- Đã tối ưu title, meta description, Open Graph, Twitter card và Schema JSON-LD.
- Đã kiểm tra app.js không lỗi cú pháp.
