# Next Insurance home assignment

## Stack
- Wordpress
- Next.js / React 
- Apollo - GraphQL client  

## WP Installation

To run WP with Docker  

```bash
cd backend/
docker-compose up -d
```
Now WP should run on http://localhost:8000
and phpmyadmin on http://localhost:8080

To import the wordpress.sql file
login to phpmyadmin with: 
```bash
user: wordpress
pass: wordpress
```
then import the wordpress.sql file that's located in the root of the repo. 

## Next.js Installation
To run the frontend app

```bash
cd frontend
yarn 
npm run dev
```
This should run the app on http://localhost:3000

IF you wish to change page data you can do that from the WP page. 
The frontend has dynamic routing, so any new page in WP will reflect in the frontend.
To test this you can duplicate a WP page, then go to http://localhost:3000/your-slug, and you should see the new page. 

Enjoy!



