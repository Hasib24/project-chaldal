let order_img_array = ["img/order_slider11.webp", "img/order_slider2.webp", "img/order_slider33.webp"]
let orderSliderImg = document.getElementById('order_slider_img');
let count = 0;

setInterval(() => {
    count++
    
    switch (count) {
        case 1:
            document.getElementById(`order_carosol_2`).style.backgroundColor = `#D61C4E`
            document.getElementById(`order_carosol_1`).style.backgroundColor = `#dddeee`
            document.getElementById(`order_carosol_3`).style.backgroundColor = `#dddeee`
            break;
        case 2:
            document.getElementById(`order_carosol_3`).style.backgroundColor = `#D61C4E`
            document.getElementById(`order_carosol_1`).style.backgroundColor = `#dddeee`
            document.getElementById(`order_carosol_2`).style.backgroundColor = `#dddeee`
            break;
        case 3:
            document.getElementById(`order_carosol_1`).style.backgroundColor = `#D61C4E`
            document.getElementById(`order_carosol_2`).style.backgroundColor = `#dddeee`
            document.getElementById(`order_carosol_3`).style.backgroundColor = `#dddeee`
            break;
    }
    if (count >= order_img_array.length) {
        count = 0;
        orderSliderImg.src = order_img_array[count];
    } else {
        orderSliderImg.src = order_img_array[count];  
    }
}, 5000);



