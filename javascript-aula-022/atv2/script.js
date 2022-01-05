function makeSizer(size) {
    return function() {
      document.body.style.fontSize = size + 'px';
    };
  }
  
let size12 = makeSizer(12);
let size14 = makeSizer(14);
let size16 = makeSizer(16);
let size18 = makeSizer(18);
let size20 = makeSizer(20);

document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;
document.getElementById('size-18').onclick = size18;
document.getElementById('size-20').onclick = size20;