module.exports = {
  // API Rate Limits
  RATE_LIMIT: {
    WINDOW_MS: 15 * 60 * 1000, // 15 minutes
    MAX_REQUESTS: 100
  },

  // Pagination
  PAGINATION: {
    DEFAULT_PAGE: 1,
    DEFAULT_LIMIT: 10,
    MAX_LIMIT: 100
  },

  // Paper Sources
  PAPER_SOURCES: {
    ARXIV: 'arxiv',
    SEMANTIC_SCHOLAR: 'semantic_scholar'
  },

  // Chat Settings
  CHAT: {
    MAX_HISTORY: 50,
    MAX_PAPERS_PER_QUERY: 10
  },

  // User Roles
  USER_ROLES: {
    USER: 'user',
    ADMIN: 'admin'
  }
};