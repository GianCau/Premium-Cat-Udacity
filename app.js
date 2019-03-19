const count = document.querySelector('#count');

let counter = 0;


let catObject = [
	{
		name: 'Miao',
		img: 'img/cat.jpg',
		click: 0,
		show: true
	},
	{
		name: 'Ade',
		img: 'img/cat2.jpg',
		click: 3,
		show: false
	},
	{
		name: 'Zeus',
		img: 'img/cat3.jpg',
		click: 0,
		show: false
	},
	{
		name: 'Rusty',
		img: 'img/cat4.jpg',
		click: 4,
		show: false
	},
	{
		name: 'Katty',
		img: 'img/cat5.jpg',
		click: 0,
		show: false
	},
]

// cats.forEach((item,index,)=> {

// 	item.addEventListener('click', function(){


// 		//show(index)


// 	}, false);
// })

//give the output to show the values
function show(pos){

	name.innerHTML = catObject[pos].name;
	count.innerHTML = catObject[pos].click;
	remove()
	showImg(catObject[pos].img)
}



//show the image
function showImg(par) {
	var img = document.createElement("img");
	img.style.width = "300px";
	img.style.height = "300px";

	//img.src = par;
	img.style.backgroundImage= `url(${par})`;
	document.getElementById("imageContainer").appendChild(img);
}

//dovro creare un image object



	let modal = {
		init: function () {

		},
		cats: [
			{
				name: 'Miao',
				img: 'img/cat.jpg',
				click: 0,
				show: true
			},
			{
				name: 'Ade',
				img: 'img/cat2.jpg',
				click: 3,
				show: false
			},
			{
				name: 'Zeus',
				img: 'img/cat3.jpg',
				click: 0,
				show: false
			},
			{
				name: 'Rusty',
				img: 'img/cat4.jpg',
				click: 4,
				show: false
			},
			{
				name: 'Katty',
				img: 'img/cat5.jpg',
				click: 0,
				show: false
			},
		]


	};




	let octopus = {
		init: function() {
				//model.init();

				view.init();
			},
		currentCat : function(num) {

			 console.log(modal.cats[num]);

		}

	};

	let view = {

		init: function() {

			const cats = document.querySelectorAll('li');

			cats.forEach((item,index)=> {

				item.addEventListener('click', function(){


					octopus.currentCat(index)

				}, false);
			})

			view.render()
		},
		render = function() {

			const name = document.querySelector('#name')
		}

	};




// make it go!
octopus.init();



// $(function(){

//     var model = {
//         init: function() {
//             if (!localStorage.notes) {
//                 localStorage.notes = JSON.stringify([]);
//             }
//         },
//         add: function(obj) {
//             console.log(obj);

//             var data = JSON.parse(localStorage.notes);
//             data.push(obj);
//             localStorage.notes = JSON.stringify(data);
//         },
//         getAllNotes: function() {
//             return JSON.parse(localStorage.notes);
//         }
//     };


//     var octopus = {
//         addNewNote: function(noteStr) {

//             model.add({
//                 content: noteStr,
//                 date: Date.now()
//             });
//             view.render();
//         },

//         getNotes: function() {
//             return model.getAllNotes();
//         },

//         init: function() {
//             model.init();
//             view.init();
//         }
//     };


//     var view = {
//         init: function() {
//             this.noteList = $('#notes');
//             var newNoteForm = $('#new-note-form');
//             var newNoteContent = $('#new-note-content');
//             newNoteForm.submit(function(e){
//                 octopus.addNewNote(newNoteContent.val());
//                 newNoteContent.val('');
//                 e.preventDefault();
//             });
//             view.render();
//         },
//         render: function(){
//             var htmlStr = '';
//             octopus.getNotes().forEach(function(note){

//                 htmlStr += `<li class="note">
//                         ${note.content} ${note.content}
//                     </li>`;
//             });
//             this.noteList.html( htmlStr );
//         }
//     };

//     octopus.init();
// });