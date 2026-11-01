Live demo: https://fine-arts-club-nith.vercel.app

FineArts Club Website

This is the website for the FineArts Club at NIT Hamirpur. I built it to give the club a proper home online, a place where people can see who runs the club, browse the artwork members have made, and keep track of upcoming events.

What's on the site
Home: a short introduction to the club, a quick look at what it does, and links to the gallery and social pages.
Team: members grouped by role (Heads, Co-Conveners, Coordinators and Executives), each with a photo and a short description.
Gallery: a masonry-style grid of artwork. Clicking a piece opens it larger in a popup, with the title and the artist's name.
Events: the club's regular and annual events, each with an image, date, location and a short description.

There's also a light and dark mode toggle, and the layout adjusts to phones and tablets.

Built with
React, set up with Vite
Tailwind CSS (v4)
react-icons for the social icons in the footer
Cloudinary for hosting team and gallery photos
Vercel for deployment
Running it locally

You'll need Node.js installed. The project lives in the fineartsclub folder, so start there:

bash
cd fineartsclub
npm install
npm run dev

Vite will print a local address, usually http://localhost:5173. To check that a production build works, run npm run build.

How the code is organised
fineartsclub/src/
  App.jsx            decides which page to show
  components/        Navbar, Home, Team, Gallery and Events,
                     plus a subfolder of smaller pieces for each page
  Data/              team, gallery and event details live here
  assets/            local images such as the logo

All the content that changes over time sits in the Data folder, so updating the site usually means editing a data file and not touching any components.

Updating content
Team members: edit src/Data/teamData.js. Each person has an id, a name, a role and a photo.
Gallery: edit src/Data/galleryData.js and add an entry with a title, an artist and an image.
Events: edit src/Data/eventData.js.

Photos for the team and gallery are stored on Cloudinary. The helpers in src/Data/cloudinaryImg.js build the image URLs, so you only need to pass in the image's public ID. Keep every id unique inside its list, because React uses it to tell the cards apart.

Deployment

The site is deployed on Vercel and connected to this repository. Pushing to the main branch triggers a new build automatically. Because the project sits inside the fineartsclub folder, the Root Directory in the Vercel project settings is set to fineartsclub.

A few notes
Page navigation is handled with React state instead of a router, so the whole site lives at a single URL.
File and folder names are case-sensitive on Vercel, so imports need to match the real names exactly, for example Data with a capital D.
Some text and images are still placeholders and will be replaced with real club content over time.
Author

Built by Nishant, a student at NIT Hamirpur.
