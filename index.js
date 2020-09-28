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

// First Assignment

async function getCoursesFirst() {
  return await Course.find({
    author: 'Mosh',
    isPublished: true,
    tags: 'backend',
  })
    .sort({ name: 1 })
    .select({ name: 1, author: 1 });
}

async function runFirst() {
  const courses = await getCoursesFirst();
  console.log(courses);
}

// runFirst();

// Second Assignment

async function getCoursesSecond() {
  return await Course.find({ tags: { $in: ['frontend', 'backend'] } })
    .sort({ price: -1 })
    // .sort('-price')
    .select({ name: 1, author: 1, price: 1 });
}

async function runSecond() {
  const courses = await getCoursesSecond();
  console.log(courses);
}

runSecond();
