var pricestable = document.querySelector(".prices__table");

var pt1 = document.querySelector(".pt1-js");
var pt2 = document.querySelector(".pt2-js");
var pt3 = document.querySelector(".pt3-js");

pt1.addEventListener("click", function (evt) {
	evt.preventDefault();
	pricestable.classList.add("prices__table--start");
	pricestable.classList.remove("prices__table--middle");
	pricestable.classList.remove("prices__table--end");

	pt1.classList.add("price__toggle--active");
	pt2.classList.remove("price__toggle--active");
	pt3.classList.remove("price__toggle--active");
});

pt2.addEventListener("click", function (evt) {
	evt.preventDefault();
	pricestable.classList.add("prices__table--middle");
	pricestable.classList.remove("prices__table--start");
	pricestable.classList.remove("prices__table--end");

	pt1.classList.remove("price__toggle--active");
	pt2.classList.add("price__toggle--active");
	pt3.classList.remove("price__toggle--active");
});

pt3.addEventListener("click", function (evt) {
	evt.preventDefault();
	pricestable.classList.add("prices__table--end");
	pricestable.classList.remove("prices__table--start");
	pricestable.classList.remove("prices__table--middle");

	pt1.classList.remove("price__toggle--active");
	pt2.classList.remove("price__toggle--active");
	pt3.classList.add("price__toggle--active");
});
