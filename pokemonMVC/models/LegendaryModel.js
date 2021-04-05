function LegendaryModel(id, name, photo, slug , description, type, healthPoints, specialAttack, defense, attack, experience, specialDefense) {
    this.id = id;
    this.name = name;
    this.photo = photo;
    this.slug = slug;
    this.description = description;
    this.type = type;
    this.healthPoints = healthPoints;
    this.specialAttack = specialAttack;
    this.defense = defense;
    this.attack = attack;
    this.experience = experience;
    this.specialDefense = specialDefense;
}

module.exports = LegendaryModel;