function Character(name, profession, gender, age, str, hp,) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.str = str;
    this.hp = hp;
    this.printStats = function() {
        console.log("Name: " + this.name + "\nProfession: " + this.profession + "\nGender: " + this.gender + "\nStrength: " + this.str + "\nHit Points: " + this.hp)
    };
    this.isAlive = function() {
        if (this.hp > 0) {
            console.log(this.name + " is alive")
        } else {
            console.log(this.name + " is dead!")
        }
    };
    this.attack = function(opponent) {
        opponent.hp -= this.str
    };
    this.levelUp = function() {
        this.age += 1;
        this.str += 5;
        this.hp += 25;
    }
}

var grizzledHero = new Character("Vlad", "Impaler", "Male", 32, 160, 800);
var newb = new Character("Donald", "Impalee", "Male", 15, 75, 375);

grizzledHero.attack(newb);
newb.isAlive()
newb.printStats()