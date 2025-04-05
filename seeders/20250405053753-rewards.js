"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Rewards",
      [
        {
          name: "$5 e Voucher Subway",
          description: "$5 off on your next meal at Subway",
          creditRequired: 500,
          type: "Eat & Drink",
          imgsrc:
            "https://1000logos.net/wp-content/uploads/2017/06/Subway-logo.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "$5 e Voucher KFC",
          description: "$5 off on your next meal at KFC",
          creditRequired: 500,
          type: "Eat & Drink",
          imgsrc:
            "https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo-1536x864.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "$5 e Voucher A&W",
          description: "$5 off on your next meal at A&W",
          creditRequired: 500,
          type: "Eat & Drink",
          imgsrc:
            "https://1000logos.net/wp-content/uploads/2022/05/AW-Root-Beer-logo.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "$5 e Voucher McDonalds",
          description: "$5 off on your next meal at McDonalds",
          creditRequired: 500,
          type: "Eat & Drink",
          imgsrc:
            "https://1000logos.net/wp-content/uploads/2017/03/McDonalds-logo-1024x576.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "$5 NTUC Fairprice Voucher",
          description: "$5 off on your next purchase at NTUC Fairprice",
          creditRequired: 500,
          type: "Shopping",
          imgsrc:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR41q-7W2CyOLaqcg2UXAShOt_Ca5Zy4YEHMA&s",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "$5 Cold Storage Voucher",
          description: "$5 off on your next purchase at Cold Storage",
          creditRequired: 500,
          type: "Shopping",
          imgsrc:
            "https://www.whynotdeals.com/wp-content/uploads/2016/12/cold-storage_why-not-deals.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "$5 Don Don Donki Voucher",
          description: "$5 off on your next purchase at Don Don Donki",
          creditRequired: 500,
          type: "Shopping",
          imgsrc:
            "https://www.donki.com/en/official-character/asset/img/profile/donpenProf03.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Rewards", null, {});
  },
};
