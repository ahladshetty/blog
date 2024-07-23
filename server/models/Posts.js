import sequelize from "../DB/db.js";
import { DataTypes, DATE } from "sequelize";

const Posts = sequelize.define('Posts', {
  sno: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  title: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  slug: {
    type: DataTypes.STRING(21),
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING(10000),
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  img_url: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
}, {
  indexes: [
    {
      unique: true,
      fields: ['sno']
    },
  ],
});

// async function addSamplePost() {
//   try {
//     // await sequelize.sync(); // Ensure the table is created

//     const samplePost = await Posts.create({
//       title: 'Sample Post',
//       slug: 'sample-post',
//       content: 'This is a sample content for the post.',
//       date: new Date(), // Sample date value
//       img_url: 'http://example.com/sample-image.jpg',
//     });

//     console.log('Sample Post Created:', samplePost);
//   } catch (error) {
//     console.error('Error creating sample post:', error);
//   }
// }

// addSamplePost();

export default Posts;
