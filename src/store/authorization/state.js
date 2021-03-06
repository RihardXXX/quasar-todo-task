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
    // список перформеров или кастомеров
    performers: [],
    customers: [],
    // лимит офсет и количество для мастеров и клиентов
    limitAccount: 2,
    offsetAccount: 0,
    accountsCount: 0,
    // список аккаунтов который лайкал анкету
    whoLikedList: [],
  }
}
