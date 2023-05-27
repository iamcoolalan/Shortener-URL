# URL Shortener
Convert your URL to short URL 

![webside view 1](./README/short%20url%201.png)
![webside view 2](./README/short%20url%202.png)

## Features

- convert long URL to short URL 
- copy your short URL by click copy button
- use short URL redirect to original
- list history record

## How to use 

1. please confirm you have already installed node.js and npm first
2. clone this repository to your computer
3. use the terminal to access the folder , and then type the command below

   ```bash
   npm install
   ```

4. after the installation complete,set env params to connect your MongoDB

   ```bash
   MONGODB_URI=mongodb+srv://<Your MongoDB Account>:<Your MongoDB Password>@cluster0.xxxx.xxxx.net/<Your MongoDB Table><?retryWrites=true&w=majority
   ```

5. create test data

   ```bash
   npm run seed
   ```   

6. after you created test data , keep typing

   ```bash
   npm run start
   ```

7. if you see this message means the server is on, you can use that URL to go into the website

   ```bash
   App is running on http://localhost:3000
   ```  

8. if you want to stop it, use command below

   ```bash
   ctrl + c
   ```

## Tech/framework used

- Node.js v14.16.0
- express v4.17.1
- body-parser v1.20.2
- express-handlebars v4.0.2
- mongoose v5.9.7
- nanoid v3.3.6
- dotenv v16.0.3