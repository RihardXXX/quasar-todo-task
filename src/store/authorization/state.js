export default function () {
  return {
    isLoggedIn: false,
    isLoading: false,
    error: null,
    user: undefined,
    // отзывы по аккаунту
    reviews: [],
    // эта шл]па нужна для пагинации отзывов
    limit: 10,
    offset: 0,
    reviewsCount: 0,
  }
}
