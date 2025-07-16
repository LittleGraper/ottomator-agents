import asyncio
from crawl4ai import AsyncWebCrawler, CrawlerRunConfig

async def main():
    """
    This function demonstrates the minimal usage of the arun_many method
    to crawl multiple URLs.
    """
    # Using an async context manager to handle the crawler's lifecycle
    async with AsyncWebCrawler() as crawler:
        # Minimal usage: The default dispatcher will be used
        # Replace with the URLs you want to crawl
        urls_to_crawl = ["https://docs.crawl4ai.com/", "https://github.com/unclecode/crawl4ai"]
        
        print(f"Crawling {len(urls_to_crawl)} URLs...")
        
        results = await crawler.arun_many(
            urls=urls_to_crawl,
            config=CrawlerRunConfig()
        )

        print("\n--- Crawl Results ---")
        for res in results:
            if res.success:
                print(f"URL: {res.url} crawled successfully!")
                # You can access the crawled content via res.markdown
                print(f"  Markdown length: {len(res.markdown)}")
            else:
                print(f"Failed to crawl {res.url}: {res.error_message}")
        print("---------------------\n")


if __name__ == "__main__":
    # Running the main asynchronous function
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("\nCrawling interrupted by user.")
