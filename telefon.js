function Phone(brend, model, balance, chargeBalance) {
	
    this.brand = brend;
    this.model = model;
    this.balance = balance;
    this.chargeBalance = chargeBalance;
    this.getinfo = function () {
        return "Telefon: " + this.brand + " " + this.model + " / "
            + "Sizin balansiniz: " + this.getBalance() + " | "
            + "Balansdan silindi: " + this.getChargeBalance();
    };
    this.getBalance = function () {
        return this.balance
    };
    this.getChargeBalance = function () {
        return this.chargeBalance
    }
}

var iphone = new Phone("Iphone", "8plus", "30azn", "2azn");
var samsung = new Phone("Samsung", "Note4", "27azn", "1azn");
var nokia = new Phone("Nokia", "pureview", "13azn", "3azn");

console.log(iphone.getinfo())
console.log(samsung.getinfo())
console.log(nokia.getinfo())

