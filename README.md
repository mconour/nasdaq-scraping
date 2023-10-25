
# NASDAQ Stock Scraper

This is a simple Node.js application for scraping data from the NASDAQ stock exchange. It fetches information about companies listed on NASDAQ, such as their symbols, names, last sale prices, market capitalization, IPO years, sectors, industries, and summary quotes.

## Getting Started

Make sure you have [Node.js](https://nodejs.org/) installed on your system.

### Installation

1. Clone this repository or download the source code.

```bash
git clone https://github.com/yourusername/nasdaq-scraper.git
cd nasdaq-scraper
```

2. Install the required dependencies using npm or yarn.

```bash
npm install
# or
yarn install
```

### Usage

To start the server, run:

```bash
npm start
# or
yarn start
```

The application will start a server on the specified port (default is 5000). You can access the data by sending an HTTP GET request to the root endpoint (e.g., `http://localhost:5000/`).

## Data Format

The data is returned in JSON format and includes the following fields for each company:

- `symbol`: The stock symbol of the company.
- `name`: The name of the company.
- `lastSale`: The last sale price of the stock.
- `marketCap`: The market capitalization of the company.
- `ipoYear`: The year of the company's initial public offering (IPO).
- `sector`: The sector to which the company belongs.
- `industry`: The industry to which the company belongs.
- `summaryQuote`: A summary quote or link for the company.

## Dependencies

This project uses the following Node.js packages:

- [Express](https://expressjs.com/): A web framework for Node.js.
- [Axios](https://axios-http.com/): A promise-based HTTP client for making requests.
- [CORS](https://expressjs.com/en/resources/middleware/cors.html): Middleware for handling Cross-Origin Resource Sharing.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

You can save this description in a `README.md` file in your project's repository to provide information and usage instructions for others who want to use or contribute to your NASDAQ stock scraper.