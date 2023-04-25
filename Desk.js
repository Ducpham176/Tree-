const ToggleElement = document.getElementById('Toggle');
const deleteElement = document.getElementById('delete');
const appendElement = document.getElementById('append');
let ValueStart = 1;
function Delete() {
    deleteElement.addEventListener('click', () => {
            if(ValueStart > 0) {
                ValueStart -= 1;
            }
            ToggleElement.value = ValueStart;
    })
}

function Append() {
    appendElement.addEventListener('click', () => {
        ValueStart += 1;
            ToggleElement.value = ValueStart;
    })
}
Delete();
Append();
ToggleElement.value = ValueStart;
// The end
// Xử lí Tăng Giảm Số Lượng 

const LeftImage = document.querySelector('.left');
const whiteColor = document.getElementById('white');
const blackColor = document.getElementById('black');
const greenColor = document.getElementById('green');

function White() {
    whiteColor.addEventListener('click', () => {
      LeftImage.style.filter = 'hue-rotate(0deg)';
    });
}

function Black() {
    blackColor.addEventListener('click', () => {
      LeftImage.style.filter = 'hue-rotate(100deg)';
    });
}

function Green() {
    greenColor.addEventListener('click', () => {
      LeftImage.style.filter = 'hue-rotate(200deg)';
    });
}

White();
Black();
Green();

// The  end
// Slider Banenr 

let ListCard = document.querySelectorAll('.card');
ListCard[3].classList.add('active');
var n = ListCard.length;
document.getElementById('next').onclick = () => {
    let firstCard = ListCard[0];
    document.querySelector('.main').appendChild(firstCard);
    ListCard[3].classList.remove('active');
    ListCard = Array.from(document.querySelectorAll('.card'));
};

// The end
const leftBackground = document.querySelector('.left');
const product_banner1 = document.querySelector('.product_banner1');
const product_banner2 = document.querySelector('.product_banner2');
const product_banner3 = document.querySelector('.product_banner3');
const product_banner4 = document.querySelector('.product_banner4');


const fa_plussElemnet = document.querySelectorAll('#fa_pluss');
for(let i = 0; i < fa_plussElemnet.length; i++)
{
    fa_plussElemnet[i].addEventListener('click', () => {
        if(i === 0) {
            leftBackground.style.backgroundImage = 'url("https://free.vector6.com/wp-content/uploads/2021/03/0000000117-cay-xanh-chau-cay-tai-hinh-cay-canh-png-3.png")'
        }
        if(i === 1) {
            leftBackground.style.backgroundImage = 'url("https://free.vector6.com/wp-content/uploads/2021/03/0000000167-cay-xanh-chau-cay-tai-hinh-cay-canh-png-53.png")'
        }
        if(i === 2) {
            leftBackground.style.backgroundImage = 'url("https://free.vector6.com/wp-content/uploads/2021/03/0000000294-cay-xanh-tai-hinh-cay-canh-png-180.png")'
        }
        if(i === 3) {
            leftBackground.style.backgroundImage = 'url("https://free.vector6.com/wp-content/uploads/2021/03/0000000156-cay-xanh-chau-cay-tai-hinh-cay-canh-png-42.png")'
        }
    })
}

// Xử lí trên điện thoại 
if(window.matchMedia("(max-width: 700px)").matches) {
    // Xử lí lại phần slide trên mobile
    let ListCard = document.querySelectorAll('.card');
    ListCard[2].classList.add('active');
    var n = ListCard.length;
    document.getElementById('next').onclick = () => {
        let firstCard = ListCard[0];
        document.querySelector('.main').appendChild(firstCard);
        ListCard[2].classList.remove('active');
        ListCard = Array.from(document.querySelectorAll('.card'));
    };

    var isTrue = false;
    function Hide(item) {
        if(!isTrue) {
            item.style.display = 'grid';
            isTrue = true;
            logoId.src = 'eraser.png';
        }
        else {
            item.style.display = 'none';
            isTrue = false;
            logoId.src = 'logo.png';
        }

    }
    // 
    const logoId = document.getElementById('logo');
    const Menu = document.querySelector('#menu');
    const Logo = document.querySelector('.logo');
    Logo.addEventListener('click', () =>  {
        Hide(Menu)
    })
}
  