import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "1",
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "AdarshBalika123",
    bio: "Reverse Engineer, CyberSecurity Enthusiast",
    bookmarks: [],
    avatarUrl: "",
    website: "https://example.com",
    createdAt: formatDate(),
    updatedAt: formatDate()
  },
  {
    _id: "2",
    firstName: "Arya",
    lastName: "Shah",
    username: "Arya009",
    password: "ArSh@09",
    bio: "Bug Hunter, CyberSec Professional",
    bookmarks: [],
    avatarUrl: "",
    website: "https://arya-stellar.netlify.app",
    createdAt: new Date("2023-06-24T10:30:00"),
    updatedAt: new Date("2023-06-24T10:30:00")
  },
  {
    _id: "3",
    firstName: "Devansh",
    lastName: "Patel",
    username: "DevaP2001",
    password: "DePa@01",
    bio: "Cyber Security Aficionado, Network & Web Application Pentester",
    bookmarks: [],
    avatarUrl: "",
    website: "https://evil.com",
    createdAt: new Date("2023-06-24T11:45:00"),
    updatedAt: new Date("2023-06-24T11:45:00")
  }
];
