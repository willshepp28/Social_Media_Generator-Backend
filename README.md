# Social Media Generator

This is a social media application generator, use this to quickly create an application skeleton.


## Technologies Used

  * Express
  * Sequelize
  * Postgres
  * Json Web Token
  * Bcrypt
  * Deepai - artifical intelligence api to create text from images. We use this to generate caption from posts photos, when seeding posts.
  * Pixaby - api to get pictures for applicaton posts
  * AWS S3 - api for creating and managing buckets. We'll use this to store posts, and user profile pictures.




## FYI
  * The production database connection assumes that you're using heroku
  * You will need to use rsa private and public keys to verfiy json web tokens
  * Using post-builder.seeder.js to seed the application with posts for each user requires a [Pixabay api key](https://pixabay.com/service/about/api/) and a [Deepai api key](https://deepai.org/machine-learning-model/text2img).
  * Youll need a [AWS S3](https://docs.aws.amazon.com/AmazonS3/latest/API/Welcome.html) to upload user profile pictures, and post photos