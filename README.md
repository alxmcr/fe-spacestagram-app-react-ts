
# Spacestagram App

Brought to you by NASA's image API.

![Spacestagram - Home](https://res.cloudinary.com/images-alex-projects/image/upload/v1629524596/Portfolio/appartify-assets/images/Spacestagram-home_nu9dkd.png)


## Features

- Fetch data from one of NASA’s APIs and display the resulting images.
- Display descriptive data for each image (for example: title, date, description, etc.)
- Like an image
- Unlike an image
- Save likes if the user leaves or reloads the page
- Animate the “like” action (might we suggest a heart?)
- Add a loading state while we wait for NASA’s API to return data

  
## Lessons Learned

I learned and practice more about `HTML`, `CSS`, `JS`, `TypeScript`, `React.js`, and `React Hooks`.

  
## Run Locally

Clone the project

```bash
  git clone https://github.com/alxmcr/spacestagram-react
```

Go to the project directory

```bash
  cd spacestagram-react
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

  
## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file

`VITE_NASA_API_KEY`

You should put as value the API KEY that you got from [NASA's API](https://https://api.nasa.gov/).

`VITE_NASA_API_BASE_URL_APOD`

Astronomy Picture of the Day Calendar. 
Value: `https://api.nasa.gov/planetary/apod`.

`VITE_NASA_API_BASE_URL_IMAGES`

NASA Image and Video Library.
Value: `https://images-api.nasa.gov`.

`VITE_NASA_API_RESOURCE_SEARCH`

Images Search resource - NASA Image and Video Library
Value: `search`.

`VITE_NASA_API_RESOURCE_ASSET`

Asset resource - NASA Image and Video Library
Value: `asset`.

Also we need to add them in `global.d.ts` (only vite):

```javascript
interface ImportMetaEnv {
    VITE_NASA_API_KEY: string;
    VITE_NASA_API_BASE_URL_APOD: string;
    VITE_NASA_API_BASE_URL_IMAGES: string;
    VITE_NASA_API_RESOURCE_SEARCH: string;
    VITE_NASA_API_RESOURCE_ASSET: string;
}
```
  
## Tech Stack

`HTML`, `CSS`, `JavaScript`, `TypeScript`, and `React.js`.

  
## Screenshots

![Apartments](https://res.cloudinary.com/images-alex-projects/image/upload/v1629524217/Portfolio/appartify-assets/images/apartments-map_repfwl.png)

![Apartment](https://res.cloudinary.com/images-alex-projects/image/upload/v1629524217/Portfolio/appartify-assets/images/aparment-image_zlfdvv.png)

  
## Demo

[https://Spacestagram-app.netlify.app/](https://Spacestagram-app.netlify.app/)

  
## Authors

- [Alejandro M. Coca Rojas (@alxmcr)](https://www.github.com/alxmcr)

  
## Feedback

If you have any feedback, please reach out to me at amcocarojas@gmail.com.

  