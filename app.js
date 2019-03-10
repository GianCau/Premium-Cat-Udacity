const count = document.querySelector('#count');
const cats =document.querySelectorAll('li')
const name = document.querySelector('#name')
let counter = 0;


let catObject = [
	{
		name: 'Miao',
		img: 'img/cat.jpg',
		click: 0
	},
	{
		name: 'Ade',
		img: 'img/cat2.jpg',
		click: 3
	},
	{
		name: 'Zeus',
		img: 'img/cat3.jpg',
		click: 0
	},
	{
		name: 'Rusty',
		img: 'img/cat4.jpg',
		click: 4
	},
	{
		name: 'Katty',
		img: 'img/cat5.jpg',
		click: 0
	},
]

cats.forEach((item,index)=> {

	item.addEventListener('click', function(){

		show(index)

	}, false);
})

//give the output to show the values
function show(pos){

	name.innerHTML = catObject[pos].name;
	count.innerHTML = catObject[pos].click;
	showImg(catObject[pos].img)
}


//show the image
function showImg(par) {
	var img = document.createElement("img");
	img.style.width = "300px";
	img.style.height = "300px";
	img.src = par;
	document.getElementById("imageContainer").appendChild(img);
}


//dovro creare un image object