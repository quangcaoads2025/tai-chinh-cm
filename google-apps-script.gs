/**
 * Google Apps Script nhận lead từ website Cổng Toại.
 * Cách dùng:
 * 1. Tạo Google Sheet mới.
 * 2. Extensions > Apps Script > dán code này.
 * 3. Deploy > New deployment > Web app.
 * 4. Execute as: Me. Who has access: Anyone.
 * 5. Copy Web app URL dán vào GOOGLE_SCRIPT_URL trong app.js.
 */
function doPost(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheetName = 'Leads';
  let sheet = ss.getSheetByName(sheetName);

  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    sheet.appendRow([
      'Thời gian',
      'Họ tên',
      'Số điện thoại',
      'Số tiền muốn vay',
      'Lịch sử Home Credit',
      'Ghi chú',
      'Nguồn'
    ]);
  }

  const raw = e && e.postData && e.postData.contents ? e.postData.contents : '{}';
  const data = JSON.parse(raw);

  sheet.appendRow([
    new Date(),
    data.fullName || '',
    "'" + (data.phone || ''),
    data.amount || '',
    data.history || '',
    data.note || '',
    data.source || ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
