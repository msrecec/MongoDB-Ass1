const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/mongo-exercises')
  .then(() => console.log('Connected to MongoDB...'))
  .catch((err) => console.error('Could not connect to MongoDB...', err));

const courseSchema = new mongoose.Schema({
  tags: [String],
  date: { type: Date, default: Date.now },
  name: String,
  author: String,
  isPublished: Boolean,
  price: Number,
});

const Course = mongoose.model('Course', courseSchema);

async function getCourses() {
  const courses = await Course.find({
    author: 'Mosh',
    isPublished: true,
  })
    .sort({ name: 1 })
    .select({ name: 1, author: 1 });
  console.log(courses);
}

getCourses();
