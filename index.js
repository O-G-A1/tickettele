const search = document.getElementById("search");
const articlesList = document.querySelector(".articles-list");

const articles = [
  {
    title: "Understanding Blockchain",
    url: "https://www.blockchain-council.org",
  },
  {
    title: "Top Crypto Solutions for 2024",
    url: "https://www.coindesk.com/",
  },
  {
    title: "Benefits of Decentralized Finance",
    url: "https://www.investopedia.com",
  },
  {
    title: "How Crypto is Changing Banking",
    url: "https://www.weforum.org",
  },
  {
    title: "Crypto Wallet Best Practices",
    url: "https://www.coindesk.com",
  },
  {
    title: "The Future of NFTs Beyond Art",
    url: "https://www.artnews.com/",
  },
  {
    title: "How to Start Investing in Cryptocurrency",
    url: "https://www.nerdwallet.com",
  },
  {
    title: "Exploring Smart Contracts and Their Use Cases",
    url: "https://www.blockchain-council.org/",
  },
  {
    title: "Top Blockchain Trends to Watch in 2024",
    url: "https://www.forbes.com/blockchain/",
  },
  {
    title: "Risks and Rewards of Crypto Investing",
    url: "https://www.coindesk.com",
  },
  {
    title: "The Environmental Impact of Cryptocurrencies",
    url: "https://www.weforum.org",
  },
  {
    title: "What is Web3 and Why Does it Matter?",
    url: "https://ethereum.org/en/web3/",
  },
  {
    title: "Comparing Proof of Work vs Proof of Stake",
    url: "https://ethereum.org",
  },
  {
    title: "Blockchain’s Role in Supply Chain Management",
    url: "https://www.ibm.com/blockchain/supply-chain/",
  },
  {
    title: "How to Secure Your Digital Assets",
    url: "https://www.ledger.com/academy",
  },
];
function searchArticles() {
  const query = search.value.toLowerCase();
  if (query.trim() === "") {
    articlesList.style.display = "none";
    return;
  }
  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(query)
  );
  articlesList.style.display = "block";

  articlesList.innerHTML = filteredArticles
    .map(
      (article) =>
        `<li><a href="${article.url}" target="_blank">${article.title}</a></li>`
    )
    .join("");
  if (filteredArticles.length === 0) {
    articlesList.innerHTML = `<li>No results found</li>`;
  }
}
search.addEventListener("input", searchArticles);
