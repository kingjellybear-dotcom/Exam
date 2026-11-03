/* ===== 사이트 기본 설정 =====
   name : 사이트 제목
   date : 시험 첫날 "YYYY-MM-DD" (비워두면 D-day가 "날짜 미정"으로 표시)
   end  : 시험 마지막 날 "YYYY-MM-DD" (첫날 다음 날부터 마지막 날까지 "시험 중", 이후 "시험 끝". 하루짜리 시험이면 비워둬도 돼)
   SUBJECTS : 탭/카드에 나오는 과목 목록. id는 data/ 폴더의 파일 이름과 같아야 해 (id가 sci면 data/sci.js).
   과목을 추가하려면 아래에 한 줄 추가하고, data/새id.js 파일을 만들면 돼. */
const EXAM = { name: "시험 자료 정리", date: "2026-11-13", end: "2026-11-17" };

const SUBJECTS = [
  { id: "kor",  name: "국어", book: "비상 · 박현숙" },
  { id: "math", name: "수학", book: "동아출판 · 강병학" },
  { id: "sci",  name: "과학", book: "미래엔" },
  { id: "hist", name: "역사", book: "비상 · 이병인" },
  { id: "eng",  name: "영어", book: "천재 · 소영순" }
];
