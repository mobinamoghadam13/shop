function addToCart(){
    alert("محصول به سبد خرید اضافه شد! ");
}
var button = document.querySelectorAll("button");
for ( var i=0; i < buttons.length; i++)
 {
  buttons[i].addEventListener("click",addToCart):
    }
    const products=[
        {id: 1, name: 's24', price:115,000,000 T}
        { id: 2, name: 's23' , price:66,000,000 T}
    ];
    const cart =[];
    function renderProducts(){
        document.getElementById('products');
    }
    function updateTime() {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        
        document.getElementById("time").innerText = `${hours}:${minutes}:${seconds}`;
    }
    function updateDate() {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
    
        document.getElementById("date").innerText = `${year}-${month}-${day}`;
    }
    setInterval(updateTime, 1000);
updateTime();

updateDate();

let itemCount = 0;

document.getElementById("cart").addEventListener("click", function() {
    itemCount++;
    document.getElementById("item-count").innerText = `${itemCount} items`;
});