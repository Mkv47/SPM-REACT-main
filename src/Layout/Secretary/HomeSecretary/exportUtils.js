import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export const extractTableData = () => {
  const rows = document.querySelectorAll('.element');
  const data = [];

  rows.forEach(row => {
    const columns = row.querySelectorAll('strong');
    const rowData = Array.from(columns).map(col => col.textContent.trim());
    data.push(rowData);
  });

  return data;
};

export const exportToExcel = () => {
  const data = extractTableData();
  const worksheet = XLSX.utils.aoa_to_sheet([
    ['Course Code', 'Course Name', 'Instructor', 'Date', 'Time', 'Room'],
    ...data
  ]);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
  saveAs(blob, 'table.xlsx');
};

export const exportToPDF = () => {
  const data = extractTableData();
  const doc = new jsPDF();
  doc.autoTable({
    head: [['Course Code', 'Course Name', 'Instructor', 'Date', 'Time', 'Room']],
    body: data
  });
  doc.save('table.pdf');
};