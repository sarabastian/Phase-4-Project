# RVnB
Looking for your next adventure? Look no further with RVnB, your marketplace to browse, save, and rent RVs, campervans, & trailers.


![Alt text](https://github.com/sarabastian/RVnB/blob/main/frontend/public/screenshot.png)
## Setup and Installation
To get started, clone this repository onto your local machine.

Open up your terminal, and clone down the repository.

```
git clone git@github.com:sarabastian/RVnB.git
```

In your terminal, navigate to the project directory.

```
cd RVnB
```

Next, navigate to the backend directory.
```
cd backend
```

Install the dependencies and seed the database:
```
bundle install
```
```
rails db:migrate && rails db:seed
```

Start up the Rails server.
```
rails s -p 3001
```
Open up another terminal, and navigate to the front-end directory.
```
cd frontend
```

Install the inlcuded packages and start the front-end server.
```
npm install && npm start
```

Once the local server has opened, you are ready to start using the app. Enjoy!

### About

RVnB was built on a Rails API and a React front-end.
