import ourArtist from "../assets/ourArtist.png"
import kala_sangam_banner from "../assets/kala_sangam_banner.jpeg"

export const events = [
  {
    id: 0,
    title: "Kala Sangam",
    date: "Expected to be held in February",
    location: "Admin Block",
    description:
      "Our flagship annual exhibition showcasing over 100 original works by club members — paintings, sculptures, digital art, and mixed media installations. Open to all students and faculty.",
    img: kala_sangam_banner,
    tag: "Exhibition",
  },
  {
    id: 1,
    title: "Sketch on Sundays (SOS)",
    date: "Every Sunday, 5-7 PM",
    location: "Campus Premises",
    description:
      "Weekly open life drawing sessions with live models. All skill levels welcome. Bring your own materials or borrow from the club supply. A relaxed space to practice observational drawing.",
    img: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?w=800&h=500&fit=crop&auto=format",
    tag: "Recurring",
  },
  {
    id: 2,
    title: "Collaborative Mural Project",
    date: "September to October",
    location: "Campus Premises",
    description:
      "A large-scale community mural painted across three days, open to the entire campus. Club members led thematic sections while students from all departments contributed.",
    img: ourArtist,
    tag: "Community",
  },
];
