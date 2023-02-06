const searchEl = document.querySelector('div.search');
const searchInputEl = searchEl.querySelector('input');
console.log(searchEl, searchInputEl);

// 돋보기를 클릭해도 focus가 적용되도록 수정
searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});
// 클래스를 추가하고 focus가 되면 속성추가
// 클릭하면 돋보기 안보이게 처리
// input에 요소 추가
searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  this.setAttribute('placeholder', '통합검색');
});
// focus가 해제되면 속성삭제
searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  this.setAttribute('placeholder', '');
});


// footer year
const thisYear = document.querySelector('span.this-year');
thisYear.textContent = new Date().getFullYear();