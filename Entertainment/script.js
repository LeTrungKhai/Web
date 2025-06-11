const pikachuContainer = document.getElementById('pikachuContainer');
const motionToggle = document.getElementById('motionToggle');

let motionOn = false;
let currentShape = 'circle'; // Mặc định hoặc từ lựa chọn user

const pikachuImgs = [
  'pikachu1.png',
  'pikachu2.png',
  'pikachu3.png',
  'pikachu4.png',
  'pikachu5.png',
  'pikachu6.png',
  'pikachu7.png',
  'pikachu8.png',
  'pikachu9.png'
];

// Hàm hiển thị ảnh theo hình dạng
function showShape(shape) {
  currentShape = shape;
  pikachuContainer.innerHTML = '';
  
  for(let i = 0; i < 9; i++) {
    const img = document.createElement('img');
    img.src = pikachuImgs[i];
    pikachuContainer.appendChild(img);
  }
  
  // Đặt vị trí ảnh theo hình dạng
  const imgs = pikachuContainer.querySelectorAll('img');
  switch(shape) {
    case 'circle':
      // Xếp hình tròn
      imgs.forEach((img, i) => {
        let angle = i * 40; // 360/9 = 40 độ
        let rad = angle * Math.PI / 180;
        let r = 80; // bán kính
        img.style.left = (r * Math.cos(rad) + 100) + 'px';
        img.style.top = (r * Math.sin(rad) + 100) + 'px';
      });
      break;
    case 'square':
      // Xếp hình vuông 3x3, mỗi ảnh cách nhau 80px
      imgs.forEach((img, i) => {
        img.style.left = (i % 3) * 80 + 50 + 'px';
        img.style.top = Math.floor(i / 3) * 80 + 50 + 'px';
      });
      break;
    case 'heart':
      // Xếp hình tim (ví dụ vị trí tĩnh, bạn có thể tùy chỉnh)
      const heartPos = [
        [1,0],[0,1],[2,1],[0,2],[1,2],[2,2],[1,3],[0,4],[2,4]
      ];
      imgs.forEach((img, i) => {
        let [x,y] = heartPos[i];
        img.style.left = x * 80 + 50 + 'px';
        img.style.top = y * 80 + 30 + 'px';
      });
      break;
    case 'diamond':
      // Hình thoi - cũng tạm thời ví dụ
      const diamondPos = [
        [1,0],[2,1],[3,2],[2,3],[1,4],[0,3],[ -1, 2],[0,1],[1,2]
      ];
      imgs.forEach((img, i) => {
        let [x,y] = diamondPos[i];
        img.style.left = x * 60 + 100 + 'px';
        img.style.top = y * 60 + 50 + 'px';
      });
      break;
    case 'trapezoid':
      // Hình thang, ví dụ đơn giản
      const trapPos = [
        [1,0],[2,0],[0,1],[3,1],[0,2],[3,2],[1,3],[2,3],[1,4]
      ];
      imgs.forEach((img, i) => {
        let [x,y] = trapPos[i];
        img.style.left = x * 70 + 60 + 'px';
        img.style.top = y * 70 + 50 + 'px';
      });
      break;
  }
  
  updateAnimationForShape(shape);
}

// Hàm cập nhật animation cho ảnh theo shape và trạng thái motionOn
function updateAnimationForShape(shape) {
  const imgs = pikachuContainer.querySelectorAll('img');
  imgs.forEach((img, i) => {
    img.style.animation = 'none'; // reset
    
    if(!motionOn) return; // nếu tắt chuyển động thì thôi

    let anim = '';
    let delay = (i * 0.3) + 's';

    switch(shape) {
      case 'circle':
        // Quay tròn quanh tâm container
        anim = `rotateCircle 6s linear infinite`;
        img.style.transformOrigin = '50% 50%';
        break;
      case 'square':
        anim = `moveSquare 4s linear infinite`;
        break;
      case 'heart':
        anim = `shakeHeart 1s ease-in-out infinite`;
        break;
      case 'diamond':
        anim = `moveDiamond 5s linear infinite`;
        break;
      case 'trapezoid':
        anim = `moveTrapezoid 3s ease-in-out infinite`;
        break;
    }

    img.style.animation = anim;
    img.style.animationDelay = delay;
  });
}

motionToggle.addEventListener('click', () => {
  motionOn = !motionOn;
  motionToggle.classList.toggle('active', motionOn);
  updateAnimationForShape(currentShape);
});

// Giả sử bạn có một cách chọn hình dạng, gọi showShape('circle'), showShape('square')... vd:
showShape('circle');
