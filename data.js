/**
 * Your recommendation data goes here!
 *
 * Replace this example with your own domain (movies, restaurants, games, etc.)
 * Keep the same structure: an object with an "options" array.
 *
 * Each option should have properties that help you make recommendations.
 * Think about: What information do I need to match user preferences?
 */

const data = {
  // Describe your domain
  domain: "Video Games",
  description: "Games that I think you'll enjoy based on your preferences!",

  // Your options array - aim for 15-25 items
  options: [
    // Example structure - replace with your own!
    {
      title: "Elden Ring",
      category: "Open World RPG",
      mood: "adventurous",
      timeMinutes: 60,
      // Add more properties relevant to your domain
    },
    {
      title: "Destiny 2",
      category: "First-Person Sci-fi Shooter",
      mood: "action oriented",
      timeMinutes: 60,
    },
    {
      title: "Escape from Tarkov",
      category: "Extraction Shooter",
      mood: "intense",
      timeMinutes: 120,
    },
    {
      title: "Minecraft",
      category: "Sandbox",
      mood: "relaxed",
      timeMinutes: 30,
    },
    {
      title: "Overwatch",
      category: "Team-Based Shooter",
      mood: "competitive",
      timeMinutes: 60,
    },
    {
      title: "Grand Theft Auto V",
      category: "Open World Action-Adventure",
      mood: "mindless grinding",
      timeMinutes: 120,
    },
    {
      title: "Fortnite",
      category: "Battle Royale",
      mood: "strategic",
      timeMinutes: 60,
    },
    {
      title: "Dark Souls 3",
      category: "Action RPG",
      mood: "challenging",
      timeMinutes: 60,
    },
    {
      title: "Doom Eternal",
      category: "First-Person Arena Shooter",
      mood: "energetic",
      timeMinutes: 15,
    },
    {
      title: "Helldivers",
      category: "Extraction Shooter",
      mood: "energetic",
      timeMinutes: 30,
    },
    {
      title: "Warhammer 2",
      category: "Strategy",
      mood: "energetic",
      timeMinutes: 15,
    },
    {
      title: "Star Citizen",
      category: "Space Simulation",
      mood: "adventurous",
      timeMinutes: 60,
    },
    {
      title: "Rainbow Six Siege",
      category: "Tactical Shooter",
      mood: "focused",
      timeMinutes: 120,
    },
    {
      title: "God of War",
      category: "Action-Adventure",
      mood: "intense",
      timeMinutes: 15,
    },
    {
      title: "Monster Hunter Wilds",
      category: "Action RPG",
      mood: "adventurous",
      timeMinutes: 30,
    },
    // Add more options...
  ],
};

// Note: This file is loaded via a script tag, so `data` becomes a global variable
// that matching.js and app.js can access.
