/**
 * Matching functions for your recommendation system
 *
 * Write functions that check if an item matches user preferences.
 * You need at least 4 functions using different JS concepts:
 *
 * 1. Single criteria match (simple conditional)
 * 2. Range check (comparison operators)
 * 3. Multiple criteria match (logical operators: &&)
 * 4. Classification function (if/else chain)
 */

// ============================================================
// EXAMPLE FUNCTIONS - Replace these with your own!
// ============================================================

/**
 * Checks if a game matches the desired mood
 * @param {Object} game - A game from your data
 * @param {string} desiredMood - The mood the user wants
 * @returns {boolean} - True if the game matches the mood
 */
function matchesMood(game, desiredMood) {
  // If no mood preference, everything matches
  if (!desiredMood) {
    return true;
  }

  // Check if the game's mood matches the desired mood
  return game.mood === desiredMood;
}

/**
 * Checks if a game fits within the available time
 * @param {Object} game - A game from your data
 * @param {number} availableMinutes - Maximum time available
 * @returns {boolean} - True if the game fits in the time
 */
function fitsTimeAvailable(game, availableMinutes) {
  // If no time constraint, everything fits
  if (!availableMinutes) {
    return true;
  }

  // Check if game's duration is within available time
  return game.timeMinutes <= availableMinutes;
}

/**
 * Checks if a game matches multiple criteria at once
 * @param {Object} game - A game from your data
 * @param {Object} preferences - Object with user preferences
 * @returns {boolean} - True if game matches ALL criteria
 */
function meetsAllCriteria(game, preferences) {
  // Use && to combine multiple checks
  return (
    matchesMood(game, preferences.mood) &&
    fitsTimeAvailable(game, preferences.time) &&
    matchesCategory(game, preferences.category)
  );
}

/**
 * Returns a message based on how well a game matches user preferences
 * @param {number} matchScore - How many criteria matched (0-3)
 * @returns {string} - A recommendation message
 */
function getMatchMessage(matchScore) {
  if (matchScore === 3) {
    return "🎮 Perfect match!";
  } else if (matchScore === 2) {
    return "👍 Great option";
  } else if (matchScore === 1) {
    return "🤔 Worth considering";
  } else {
    return "💭 Might work";
  }
}

// ============================================================
// ADDITIONAL MATCHING FUNCTIONS
// ============================================================

/**
 * Checks if a game matches the desired category
 * @param {Object} game - A game from your data
 * @param {string} desiredCategory - The category the user wants
 * @returns {boolean} - True if the game matches the category
 */
function matchesCategory(game, desiredCategory) {
  // If no category preference, everything matches
  if (!desiredCategory || desiredCategory === "any") {
    return true;
  }

  // Check if the game's category matches the desired category
  return game.category === desiredCategory;
}

/**
 * Checks if a game is suitable for a quick play session
 * @param {Object} game - A game from your data
 * @returns {boolean} - True if the game can be played in 30 minutes or less
 */
function isQuickPlay(game) {
  return game.timeMinutes <= 30;
}

/**
 * Gets all unique categories from the data
 * @returns {Array} - Array of unique category names
 */
function getAllCategories() {
  const categories = data.options.map(game => game.category);
  return [...new Set(categories)].sort();
}

/**
 * Gets all unique moods from the data
 * @returns {Array} - Array of unique mood names
 */
function getAllMoods() {
  const moods = data.options.map(game => game.mood);
  return [...new Set(moods)].sort();
}
