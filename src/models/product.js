const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');

const p = path.join(rootDir, 'data', 'products.json');

const getProductsFromFile = cb => {		//cb is callback
	fs.readFile(p, (err, fileContent) => {
		if (err) {
			cb([]);
		} else {
			cb(JSON.parse(fileContent));
		}
	});
};

module.exports = class Product {
	constructor(name, imgUrl, price, desc) {
		this.title = name;
		this.imageUrl = imgUrl;
		this.price = price;
		this.description = desc;
	}

	save() {
		this.id = Math.random().toString();
		getProductsFromFile(products => {
			products.push(this);
			fs.writeFile(p, JSON.stringify(products), err => {
				console.log(err);
			});
		});
	}

	static fetchAll(cb) {
		getProductsFromFile(cb);
	}

	static findById(id, cb){
		getProductsFromFile(products => {
			const product = products.find(p => p.id === id);
			cb(product);
		});
	}
};
