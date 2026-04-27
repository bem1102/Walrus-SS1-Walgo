document.addEventListener("DOMContentLoaded", () => {
  const NFTs = [
    "https://images.suipassport.app/88afd1ac-7743-439f-ab57-9685989705b6.png",
    "https://cdn.jsdelivr.net/gh/ganbitlabs/walgo@main/walgo-logo.svg",
    "https://cdn.galxe.com/galaxy/walrus/4648e47c-e275-4dd5-83bc-e9a8b6066cc7.png",
    "https://ipfs.io/ipfs/bafkreidt2vj2ccc7rl3bmlsprlfea7g4miks3lex4lf6jgufz5jeh4hlkm"
  ];

  const carousel = document.getElementById("carousel");
  if (carousel) {
    NFTs.forEach((img, index) => {
      const card = document.createElement("article");
      card.className = "card";
      card.innerHTML = `<img src="${img}" alt="Hot Walrus NFT ${index + 1}" loading="lazy" decoding="async">`;
      carousel.appendChild(card);
    });
  }

  const posts = [
    {
      title: "Build your personal website",
      img: "https://res.cloudinary.com/dzskv2ixh/image/upload/v1777202175/a5cdf51e-b399-4e59-ab81-d9ef450d6549_oqmcub.jpg"
    },
    {
      title: "Walrus Sessions Hackathon",
      img: "https://res.cloudinary.com/dzskv2ixh/image/upload/v1777202482/a5cdf51e-b399-4e59-ab81-d9ef450d6549_bwqjc8.jpg"
    }
  ];

  const postsContainer = document.getElementById("posts");
  if (postsContainer) {
    posts.forEach((post) => {
      const article = document.createElement("article");
      article.className = "post";
      article.innerHTML = `<img src="${post.img}" alt="${post.title}" loading="lazy" decoding="async"><h4>${post.title}</h4>`;
      postsContainer.appendChild(article);
    });
  }

  const walletButton = document.querySelector(".wallet-connect");
  if (walletButton) {
    walletButton.addEventListener("click", () => {
      alert("Wallet Connected (demo)");
    });
  }

  const coinsContainer = document.getElementById("coins");
  if (coinsContainer) {
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,sui&vs_currencies=usd")
      .then((r) => r.json())
      .then((data) => {
        const formatPrice = (value) =>
          typeof value === "number" ? value.toLocaleString(undefined, { maximumFractionDigits: 2 }) : "N/A";

        coinsContainer.innerHTML = `
          <div class="coin">
            <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" alt="Bitcoin logo" loading="lazy" decoding="async">
            <span>BTC</span>
            <span>$${formatPrice(data?.bitcoin?.usd)}</span>
          </div>
          <div class="coin">
            <img src="https://cryptologos.cc/logos/ethereum-eth-logo.png" alt="Ethereum logo" loading="lazy" decoding="async">
            <span>ETH</span>
            <span>$${formatPrice(data?.ethereum?.usd)}</span>
          </div>
          <div class="coin">
            <img src="https://cryptologos.cc/logos/solana-sol-logo.png" alt="Solana logo" loading="lazy" decoding="async">
            <span>SOL</span>
            <span>$${formatPrice(data?.solana?.usd)}</span>
          </div>
          <div class="coin">
            <img src="https://cryptologos.cc/logos/sui-sui-logo.png" alt="Sui logo" loading="lazy" decoding="async">
            <span>SUI</span>
            <span>$${formatPrice(data?.sui?.usd)}</span>
          </div>
        `;
      })
      .catch(() => {
        coinsContainer.innerHTML = `<p class="muted">Coin prices are temporarily unavailable.</p>`;
      });
  }

  const storiesList = document.getElementById("storiesList");
  if (storiesList) {
    ["Walrus NFT trending", "Web3 adoption rising"].forEach((item) => {
      const d = document.createElement("div");
      d.textContent = item;
      storiesList.appendChild(d);
    });
  }
});
