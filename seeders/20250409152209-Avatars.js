"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Avatars", [
      ,
      {
        name: "Ivysaur",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Venusaur",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Charmander",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Charmeleon",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Charizard",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Squirtle",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Wartortle",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Blastoise",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Caterpie",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Metapod",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Butterfree",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Weedle",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kakuna",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Beedrill",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pidgey",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pidgeotto",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pidgeot",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rattata",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Raticate",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Spearow",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Fearow",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ekans",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Arbok",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pikachu",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Raichu",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sandshrew",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sandslash",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nidoran♀",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nidorina",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nidoqueen",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nidoran♂",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nidorino",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nidoking",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Clefairy",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Clefable",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Vulpix",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ninetales",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jigglypuff",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Wigglytuff",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Zubat",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Golbat",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Oddish",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Gloom",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Vileplume",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Paras",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Parasect",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Venonat",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Venomoth",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Diglett",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dugtrio",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Meowth",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Persian",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Psyduck",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Golduck",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mankey",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Primeape",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Growlithe",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Arcanine",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Poliwag",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Poliwhirl",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Poliwrath",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Abra",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kadabra",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Alakazam",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Machop",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Machoke",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Machamp",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bellsprout",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Weepinbell",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Victreebel",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tentacool",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tentacruel",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Geodude",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Graveler",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Golem",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ponyta",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rapidash",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Slowpoke",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Slowbro",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Magnemite",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Magneton",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Farfetch’d",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Doduo",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dodrio",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Seel",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dewgong",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Grimer",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Muk",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Shellder",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cloyster",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Gastly",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Haunter",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Gengar",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Onix",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Drowzee",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hypno",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Krabby",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kingler",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Voltorb",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Electrode",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Exeggcute",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Exeggutor",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cubone",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Marowak",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hitmonlee",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hitmonchan",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Lickitung",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Koffing",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Weezing",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rhyhorn",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rhydon",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Chansey",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tangela",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kangaskhan",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Horsea",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Seadra",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Goldeen",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Seaking",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Staryu",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Starmie",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mr. Mime",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Scyther",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jynx",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Electabuzz",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Magmar",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pinsir",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tauros",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Magikarp",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Gyarados",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Lapras",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ditto",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Eevee",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Vaporeon",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jolteon",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Flareon",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Porygon",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Omanyte",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Omastar",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kabuto",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kabutops",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Aerodactyl",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Snorlax",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Articuno",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Zapdos",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Moltres",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dratini",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dragonair",

        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dragonite",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mewtwo",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mew",
        imgsrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Avatars", null, {});
  },
};
/**
 * Add commands to revert seed here.
 *
 * Example:
 * await queryInterface.bulkDelete('People', null, {});
 */
