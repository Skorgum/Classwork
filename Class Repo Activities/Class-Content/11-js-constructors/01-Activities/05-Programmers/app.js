function Programmer(name, title, age, favoriteLanguage) {
    this.name = name;
    this.title = title;
    this.age = age;
    this.favoriteLanguage = favoriteLanguage;
    this.printAttrs = function () {
        console.log(this.name);
        console.log(this.title);
        console.log(this.age);
        console.log(this.favoriteLanguage);

    }
}