
	const modal = {
		currentCat: null,
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
				click: 0,
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
				click: 0,
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



	const octopus = {
		init: function() {

			modal.currentCat = modal.cats[0];

			cat_view.init()
			view.init()

			},
		getCurrentCat : function() {

			this.cat = modal.currentCat
			return this.cat

		},
		setCurrenCat: function (e) {
			modal.currentCat = modal.cats[e];

		},
		catData: function () {

			return modal.cats[this.cat].name

		},
		clickData: function () {

			return modal.cats[this.cat].click
		},
		incrementCounter: function () {

			modal.currentCat.click++
			view.render()
		}
	};

	const cat_view = {

		init: function () {

			let catImg = document.getElementById('catImg');
			const currentCat = octopus.getCurrentCat()

			catImg.addEventListener('click', function () {

				octopus.incrementCounter()

			})
		}
	}

	let view = {

		init: function() {

			this.elements = document.querySelectorAll('li')

			this.elements.forEach((item,index) => {

				item.addEventListener('click', function(e){

					octopus.setCurrenCat(index)
					view.render()

				}, false);

			});


			this.render()
		},

		render: function() {

			const currentCat = octopus.getCurrentCat()
			const idName = document.getElementById('name')
			const idClick = document.getElementById('count')
			const catImg = document.getElementById('catImg')


			idName.innerHTML = currentCat.name;
			idClick.innerHTML = currentCat.click;
			catImg.src = currentCat.img
		}
	};
// make it go!
octopus.init();
