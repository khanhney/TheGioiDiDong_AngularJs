app.controller('headerController', function($scope){
	var headers = [
		{name: 'Điện Thoại',thisClass: 'fa fa-mobile'},
		{name: 'Tablet',thisClass: 'fa fa-tablet'},
		{name: 'Laptop',thisClass: 'fa fa-laptop'},
		{name: 'Phụ Kiện',thisClass: 'fa fa-gamepad'},
		{name: 'Cũ Gía Rẻ',thisClass: 'fa fa-exclamation-triangle'},
		{name: 'Sim,Thẻ',thisClass: 'fa fa-rss'},
		{name: 'Công Nghệ',thisClass: 'fa fa-search-plus'},
		{name: 'Hỏi Đáp',thisClass: 'fa fa-phone-square'},
		{name: 'Game App',thisClass: 'fa fa-gamepad'},
		{name: 'Khuyến Mãi',thisClass: 'fa fa-search-plus'}
	];
	$scope.headers = headers;
})

app.controller('slideController', function($scope){
	var sildes = [
		{thisClass: 'carousel-caption', thisSrc:'./image/222.png'},
		{thisClass: 'carousel-caption', thisSrc:'./image/333.png'}
	];
	$scope.sildes = sildes;

})
app.controller('slideController2', function($scope){
	var coupons = [
		{thisHref: '', thisClass: '', thisInfo: 'Tra điểm Thi \n Nhận Coupon giảm giá'},
		{thisHref: '', thisClass: '', thisInfo: 'Tra điểm Thi \n Nhận Coupon giảm giá'},
		{thisHref: '', thisClass: '', thisInfo: 'Tra điểm Thi \n Nhận Coupon giảm giá'},
		{thisHref: '', thisClass: '', thisInfo: 'Tra điểm Thi \n Nhận Coupon giảm giá'},
		{thisHref: '', thisClass: '', thisInfo: 'Tra điểm Thi \n Nhận Coupon giảm giá'}
	];
	$scope.coupons = coupons;
})
app.controller('productController', function($scope){
	var products = [
		{thisImg: './image/a.jpg', thisTitle: 'Samsum Galaxy J7 Pro', price: '6.900.000đ'},
		{thisImg: './image/2.jpg', thisTitle: 'Samsum Galaxy S8+', price: '13.900.000đ'},
		{thisImg: './image/3.png', thisTitle: 'Pin Sạc Dự Phòng', price: '850.000đ'},
		{thisImg: './image/4.jpg', thisTitle: 'OPPO F3', price: '5.900.000đ'},
		{thisImg: './image/5.jpg', thisTitle: 'Samsum Galaxy J7 Prime', price: '4.950.000đ'},
		{thisImg: './image/6.jpg', thisTitle: 'Iphone 6 32GB', price: '15.900.000đ'},
		{thisImg: './image/7.jpg', thisTitle: 'Iphone 6 32GB', price: '15.900.000đ'},
		{thisImg: './image/8.jpg', thisTitle: 'OPPO A37(NEO)', price: '9.500.000đ'},
		{thisImg: './image/9.png', thisTitle: 'Sony Xperia XA1', price: '11.900.000đ'},
		{thisImg: './image/10.png', thisTitle: 'Samsum Galaxy Tab E 9.6', price: '17.900.000đ'},
		{thisImg: './image/11.png', thisTitle: 'HP14 AM065TU', price: '11.900.000đ'},
		{thisImg: './image/12.jpg', thisTitle: 'LapTop Asus UX410UQ', price: '20.900.000đ'}
	];
	$scope.products = products;
})
app.controller('top_utilityController', function($scope){
	var utilitys = [
		{thisHref: '', thisInfo:'Ốp lưng, Bao da'},
		{thisHref: '', thisInfo:'Pin sạc dự phòng'},
		{thisHref: '', thisInfo:'Cáp sạc'},
		{thisHref: '', thisInfo:'Thẻ Nhớ'},
		{thisHref: '', thisInfo:'Tai nghe'},
		{thisHref: '', thisInfo:'Gậy tự sướng'},
		{thisHref: '', thisInfo:'USB'},
		{thisHref: '', thisInfo:'Chuột'},
		{thisHref: '', thisInfo:'Loa'},
		{thisHref: '', thisInfo:'Phụ kiện khác'},
	];
	$scope.utilitys = utilitys;
})
app.controller('item_utilityController', function($scope){
	var items = [
		{thisImg: './image/22.jpg', thisContent: 'Pin Sạc dự phòng eSAYER 5.000mAh',thisPriceCurrent: '160.000đ', thisOldPrice: '280.000đ'},
		{thisImg: './image/33.jpg', thisContent: 'Pin Sạc dự phòng eSAYER 5.000mAh',thisPriceCurrent: '162.000đ', thisOldPrice: '220.000đ'},
		{thisImg: './image/44.jpg', thisContent: 'Dây cáp Micro USB 0.2m eSaver',thisPriceCurrent: '210.000đ', thisOldPrice: '275.000đ'},
		{thisImg: './image/55.jpg', thisContent: 'Pin Sạc dự phòng eSAYER 5.000mAh',thisPriceCurrent: '162.000đ', thisOldPrice: '220.000đ'},
		{thisImg: './image/66.jpg', thisContent: 'Dây cáp Micro USB 0.2m eSaver',thisPriceCurrent: '162.000đ', thisOldPrice: '275.000đ'},
		{thisImg: './image/77.jpg', thisContent: 'Pin Sạc dự phòng eSAYER 5.000mAh',thisPriceCurrent: '210.000đ', thisOldPrice: '280.000đ'},
		{thisImg: './image/88.jpg', thisContent: 'Dây cáp Micro USB 0.2m eSaver',thisPriceCurrent: '160.000đ', thisOldPrice: '275.000đ'}
	]; 
	$scope.items = items;
})
