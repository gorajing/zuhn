# automation

## ai-automation
- AI automation applied to the RFP process promises dramatic efficiency gains in both proposal generation and vendor evaluation.

## content-creation
- Composing face-swap with inpainting solves the character consistency problem that previously made AI personas impractical.
- One 60-minute daily workflow — script rewrite, AI voiceover, AI image generation, AI video conversion, CapCut editing — produces Shorts that earn $2K+ on good days.
- An n8n workflow scrapes YouTube, Reddit, Twitter, and the web daily to identify content outliers and trending topics, then generates detailed content ideas with scripts, hooks, and storylines.
- CSV import and text manipulation functions (LEFT, MID, RIGHT, CONCATENATE) are the most transferable spreadsheet skills because they bridge every system that exports data.
- A daily n8n content research automation that scrapes multiple platforms, identifies trends, and delivers a content digest costs under $0.35 per day to operate.
- The 0-to-175K growth came from automating content research and ideation, not from automating content creation itself -- the competitive advantage is knowing what to create, not how to create it.
- Recurring audience funding lets creators pursue ambitious projects that sponsors would reject as too risky or long-timeline.
- Pivot tables let non-programmers perform GROUP BY aggregations on business data that would otherwise require SQL or programming knowledge.
- Filling a scene with randomly positioned objects via a simple loop creates richer environments than manual placement.
- Spreadsheet-based weighted decision matrices force explicit priority ranking that reveals preferences hidden from intuitive reasoning.

## labor-displacement
- AI-jobs debates feel unresolvable because optimists and pessimists are each describing a different causal layer of the same system.
- The length of tasks AI can perform autonomously doubles roughly every seven months, accelerating exposure of knowledge work.
- Buckminster Fuller's ephemeralization — doing more with less — means software will absorb every function it can, and this is a structural force, not a trend.
- 54.6% of U.S. adults use AI personally but fewer than 10% of businesses have integrated it into production, so the real disruption hasn't started yet.

## n8n-workflows
- Full pipeline: search query to scrape 100+ profiles, extract data, pull company info, AI-generate personalized opener, export to Google Sheets.
- Process items sequentially in n8n batch loops to respect API rate limits -- pull from a queue (e.g., Google Sheets rows), process one at a time, and skip already-completed items.
- An n8n workflow scrapes any business URL and generates a full analysis report (overview, audience personas, brand analysis, customer journey, E-E-A-T) for approximately $0.20 per run.
- Safety-first scraping: decouple your personal account from the scraping tool. If the tool gets flagged, your account is unaffected.
- Chain specialized AI agents in n8n -- scraper (Firecrawl) feeds analyst (Perplexity) feeds formatter (Gemini) -- each agent does one job well, keeping the pipeline modular and cheap.
- A single YouTube transcript can feed newsletter drafts, social media posts, blog articles, and email campaigns -- extend the base n8n workflow with parallel output branches.
- n8n workflows can be exported as JSON and shared on GitHub with Google Doc templates -- the business analysis workflow repo has 98 stars and is MIT licensed.
- Use Linkfinder AI as a proxy for LinkedIn scraping — no direct LinkedIn API connection means zero ban risk for your personal account.
- An n8n workflow pulls YouTube links from Google Sheets, extracts transcripts via Dumpling AI, transforms them into newsletter drafts with GPT-4o, and logs results back to Sheets.

## pipelines
- Sequential pipelines need periodic energy re-injection to sustain throughput, not just extraction at each stage.

## robotics
- Structured environments like factory floors let humanoid robots learn fast and fail cheaply before tackling complex unstructured domains.
- Doorways, staircases, and tools are built for human dimensions — a humanoid robot inherits compatibility with all existing infrastructure at no cost.

## self-improving-systems
- Replace subjective 'rate 1-10' evals with binary yes/no questions (e.g., 'Does the hook describe a result, not a feature?') to make optimization machine-readable and eliminate subjectivity.
- Track four quadrants — high eval + high views (validated winners), high eval + low views (false positives), low eval + high views (missed patterns), low eval + low views (confirmed failures) — to continuously improve both your eval and your prompts.
- The Autoresearch loop (change a file, measure the result, keep or discard) can optimize any prompt-driven process with measurable outputs — content, emails, landing pages, thumbnails.
- NASA chose aerogel for Mars rovers because passive thermal insulation requires zero maintenance, unlike active heating systems that would fail in unmaintainable environments.
- Log every change and the data that caused it in a structured research log — when a smarter model arrives, hand it the log and it picks up exactly where the last model left off.
