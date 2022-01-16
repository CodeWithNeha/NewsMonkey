import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    articles= [
            {
            "source": {
            "id": null,
            "name": "TMZ"
            },
            "author": "TMZ Staff",
            "title": "Lori Loughlin and Mossimo Giannulli's Home Burglarized, $1 Million in Jewelry Stolen - TMZ",
            "description": "Lori Loughlin And Mossimo's Home Robbed, $1million In Jewelry Stolen.",
            "url": "https://www.tmz.com/2022/01/15/lori-loughlin-mossimo-giannulli-home-burglary-robbed-1million-jewelry-stolen/",
            "urlToImage": "https://imagez.tmz.com/image/f7/16by9/2022/01/15/f74b9ebb139749f58b729ae3651b024b_xl.jpg",
            "publishedAt": "2022-01-15T09:00:00Z",
            "content": "Lori Loughlin and Mossimo Giannulli are now crime victims ... because we've learned their house was hit by burglars who walked away with a million bucks in jewelry.\r\nIt went down January 3 ... we're … [+989 chars]"
            },
            {
            "source": {
            "id": "cnn",
            "name": "CNN"
            },
            "author": "Alex Stambaugh, Rhea Mogul and Sophie Jeong, CNN",
            "title": "Tsunami warning issued for Tonga following volcanic eruption - CNN",
            "description": "A tsunami has hit Tonga's largest island, Tongatapu, and reportedly sent waves flooding into the capital after an underwater volcano in the South Pacific exploded in a violent eruption on Saturday, sending a cloud of ash and gas steam into the air.",
            "url": "https://www.cnn.com/2022/01/15/asia/tsunami-warning-tonga-volcano-intl-hnk/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220115024259-tonga-volcano-eruption-satellite-loop-011522-super-tease.jpg",
            "publishedAt": "2022-01-15T07:56:00Z",
            "content": "(CNN)A tsunami has hit Tonga's largest island, Tongatapu, and reportedly sent waves flooding into the capital after an underwater volcano in the South Pacific exploded in a violent eruption on Saturd… [+2614 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "NorthJersey.com"
            },
            "author": "Katie Sobko, Anne-Marie Caruso, Michael Karas and Scott Fallon, North Jersey Media Group",
            "title": "11-alarm chemical fire in Passaic injures firefighter, burns into morning hours Saturday - NorthJersey.com",
            "description": "An 11-alarm fire at a chemical plant near Canal Street in Passaic is causing evacuations, Mayor Hector Lora said.",
            "url": "https://www.northjersey.com/story/news/passaic/passaic-city/2022/01/14/passaic-nj-downtown-fire-chemical-plant/6534555001/",
            "urlToImage": "https://www.gannett-cdn.com/presto/2022/01/15/PNJM/9f5fa658-cd58-483c-b1b3-af57af10878c-011422PassaicFire05Presto.JPG?auto=webp&crop=6015,3384,x0,y0&format=pjpg&width=1200",
            "publishedAt": "2022-01-15T07:39:30Z",
            "content": "PASSAIC — More than 200 firefighters continued to battle an 11-alarm chemical fire that sent one to the hospital early Saturday morning.\r\nFrigid temperatures caused runoff water to freeze and create … [+7240 chars]"
            },
            {
            "source": {
            "id": "reuters",
            "name": "Reuters"
            },
            "author": null,
            "title": "U.S. CDC urges Americans to wear 'most protective mask you can' - Reuters",
            "description": "The U.S. Centers for Disease Control and Prevention (CDC) on Friday revised <a href=\"https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/types-of-masks.html\" target=\"_blank\">its guidance</a> for Americans on wearing masks to protect against COVID-1…",
            "url": "https://www.reuters.com/world/us/us-cdc-recommends-americans-wear-most-protective-mask-you-can-2022-01-14/",
            "urlToImage": "https://www.reuters.com/resizer/fEfL11S17LGg3ORt7U_1tRe4lAU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ZJOQARLH4RP65GZIVLN7IS257A.jpg",
            "publishedAt": "2022-01-15T07:09:00Z",
            "content": "WASHINGTON, Jan 14 (Reuters) - The U.S. Centers for Disease Control and Prevention (CDC) on Friday revised its guidance for Americans on wearing masks to protect against COVID-19, recommending donnin… [+4684 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "ESPN India"
            },
            "author": "Adam Rittenberg",
            "title": "Hawai'i Rainbow Warriors football coach Todd Graham resigns amid allegations of mistreating players - ESPN India",
            "description": "Todd Graham, facing mounting allegations of mistreating players in the program, resigned Friday after two seasons with Hawai'i.",
            "url": "https://www.espn.in/college-football/story/_/id/33069304/hawaii-rainbow-warriors-coach-todd-graham-resigns-amid-allegations-mistreating-players",
            "urlToImage": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0109%2Fr959348_1296x729_16%2D9.jpg",
            "publishedAt": "2022-01-15T05:55:50Z",
            "content": "Hawai'i football coach Todd Graham, facing mounting allegations of mistreating players in the program, resigned Friday after two seasons with the school.\r\nGraham's decision comes a week after a state… [+2138 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Rolling Stone"
            },
            "author": "Rolling Stone",
            "title": "Bob Saget Mourned By ‘Full House’ Cast, Comedians At Funeral - Rolling Stone",
            "description": "Bob Saget was mourned Friday during a Los Angeles funeral service attended by his Full House […]",
            "url": "https://www.rollingstone.com/tv/tv-news/bob-saget-funeral-1285306/",
            "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2022/01/AP18193174063673.jpeg",
            "publishedAt": "2022-01-15T05:38:14Z",
            "content": "Bob Saget was mourned Friday during a Los Angeles funeral service attended by his Full House costars and numerous other Hollywood celebrities.\r\nAccording to TMZ, hundreds gathered at Mt. Sinai Memori… [+1903 chars]"
            },
            {
            "source": {
            "id": "cnn",
            "name": "CNN"
            },
            "author": "By <a href=\"/profiles/rhea-mogul\">Rhea Mogul</a> and <a href=\"/profiles/brad-lendon\">Brad Lendon</a>, CNN",
            "title": "Live updates: Novak Djokovic's visa and Australian Open news - CNN",
            "description": "Novak Djokovic has been placed back in detention by Australian authorities after his visa was revoked for a second time. Follow here for live updates.",
            "url": "https://www.cnn.com/asia/live-news/novak-djokovic-australia-visa-news-01-15-21/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220114103845-djokovic-visa-tennis-011422-super-tease.jpg",
            "publishedAt": "2022-01-15T05:26:00Z",
            "content": "Novak Djokovic has returned to the Park Hotel detention facility in Melbourne, according to CNN affiliate Nine News. \r\nThe men's world No. 1 was seen in a white van arriving at the hotel, which is al… [+1032 chars]"
            },
            {
            "source": {
            "id": "reuters",
            "name": "Reuters"
            },
            "author": null,
            "title": "As Omicron fuels surge, U.S. students stage walkouts to protest in-person classes - Reuters",
            "description": "Hundreds of students in Boston and Chicago walked out of classes on Friday in protests demanding a switch to remote learning as a surge in COVID-19 cases fueled by the Omicron variant disrupted efforts at returning to in-person education around the United Sta…",
            "url": "https://www.reuters.com/world/us/omicron-fuels-surge-us-students-stage-walkouts-protest-in-person-classes-2022-01-14/",
            "urlToImage": "https://www.reuters.com/resizer/xcc_pWet3knn1S00PaItBkkMHnI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/MVJERKHMLZPWFIHDD2YXDKZML4.jpg",
            "publishedAt": "2022-01-15T04:06:00Z",
            "content": "BOSTON/CHICAGO, Jan 14 (Reuters) - Hundreds of students in Boston and Chicago walked out of classes on Friday in protests demanding a switch to remote learning as a surge in COVID-19 cases fueled by … [+4093 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "KSL.com"
            },
            "author": "Diane Bartz, Reuters, Jonathan Stempel, Reuters",
            "title": "US judge bars Martin Shkreli from drug industry, orders $64.6 million payment - KSL.com",
            "description": "A U.S. judge on Friday barred Martin Shkreli from the pharmaceutical industry for life and ordered him to pay $64.6 million after he famously raised the price of the drug Daraprim and fought to block generic competitors.",
            "url": "https://www.ksl.com/article/50328600/us-judge-bars-martin-shkreli-from-drug-industry-orders-646-million-payment",
            "urlToImage": "https://img.ksl.com/slc/2859/285977/28597737.JPG?filter=kslv2/responsive_story_lg",
            "publishedAt": "2022-01-15T03:34:25Z",
            "content": "Estimated read time: 2-3 minutes\r\nWASHINGTON A U.S. judge on Friday barred Martin Shkreli from the pharmaceutical industry for life and ordered him to pay $64.6 million after he famously raised the p… [+1897 chars]"
            },
            {
            "source": {
            "id": "reuters",
            "name": "Reuters"
            },
            "author": null,
            "title": "Philippines to acquire missile system from India for $375 mln - Reuters",
            "description": "The Philippines has finalised a deal to acquire a shore-based anti-ship missile system from India for nearly $375 million to beef up its navy, the Southeast Asian nation's defence minister said.",
            "url": "https://www.reuters.com/world/asia-pacific/philippines-acquire-missile-system-india-375-mln-2022-01-15/",
            "urlToImage": "https://www.reuters.com/resizer/V6pA08stuz4sg74sboirvouo-3E=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/A7GXIRA73BL6XNGNTJFCP7Z2BI.jpg",
            "publishedAt": "2022-01-15T03:07:00Z",
            "content": "MANILA, Jan 15 (Reuters) - The Philippines has finalised a deal to acquire a shore-based anti-ship missile system from India for nearly $375 million to beef up its navy, the Southeast Asian nation's … [+1577 chars]"
            },
            {
            "source": {
            "id": "abc-news",
            "name": "ABC News"
            },
            "author": "Alexander Mallin, Luke Barr",
            "title": "Oath Keepers leader makes 1st court appearance following arrest on seditious conspiracy charge - ABC News",
            "description": "",
            "url": "https://abcnews.go.com/US/oath-keepers-leader-makes-1st-court-appearance-arrest/story?id=82272182",
            "urlToImage": "https://s.abcnews.com/images/US/capitol-riot-sedition-oath-keepers-elmer-stewart-rhodes-01-gty-iwb-220114_1642193380040_hpMain_16x9_992.jpg",
            "publishedAt": "2022-01-15T03:00:56Z",
            "content": "The leader of the Oath Keepers militia group, who was indicted Thursday on a series of charges including seditious conspiracy in connection with the Jan. 6 assault on the U.S. Capitol, made his first… [+6039 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Sports Illustrated"
            },
            "author": "Data Skrive",
            "title": "Cincinnati Bengals vs. Las Vegas Raiders NFL Wild Card Round Odds, Plays and Insights - Sports Illustrated",
            "description": "Check out odds, plays and more for the Cincinnati Bengals vs. Las Vegas Raiders AFC Wild Card matchup on January 15, 2022.",
            "url": "https://www.si.com/betting/2022/01/15/cincinnati-bengals-vs-las-vegas-raiders-afc-wild-card-odds-plays-insights",
            "urlToImage": "https://www.si.com/.image/t_share/MTg2MzI4MjQ5OTg3NzY5NDcz/image-placeholder-title.jpg",
            "publishedAt": "2022-01-15T02:47:09Z",
            "content": "The Cincinnati Bengals will meet the Las Vegas Raiders in the AFC Wild Card round.\r\nFor more great betting and fantasy insight, join the SI Winners Club Newsletter.\r\nOdds for Bengals vs. Raiders\r\nOve… [+3298 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "AZCentral"
            },
            "author": ", The Arizona Republic",
            "title": "Trump rally in Arizona: Conservative forum leads to police calls at Dream City Church - The Arizona Republic",
            "description": "Former President Trump's first rally of 2022 will be in Florence, Arizona, where several Republican candidates will take the stage as well.",
            "url": "https://www.azcentral.com/story/news/politics/arizona/2022/01/14/trump-rally-arizona-live-updates-florence/6529316001/",
            "urlToImage": "https://www.gannett-cdn.com/presto/2021/12/20/PPHX/70660bca-ec94-452d-9a5a-da9fdcb19887-AMFestDay2_12192021_AT_028.JPG?auto=webp&crop=2499,1406,x0,y126&format=pjpg&width=1200",
            "publishedAt": "2022-01-15T02:46:38Z",
            "content": "Former President Donald Trump's first rally of 2022 will be in Florence, where several Republican candidates will take the stage as well.\r\nTrump's appearance Saturday will be his second in the state … [+2673 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "The Guardian"
            },
            "author": "Johana Bhuiyan",
            "title": "Lawsuit claims Facebook and Google CEOs were aware of deal to control advertising sales - The Guardian",
            "description": "Newly revealed documents from the complaint against Google shed light on potential advertising sales manipulation",
            "url": "https://amp.theguardian.com/technology/2022/jan/14/facebook-google-lawsuit-advertising-deal",
            "urlToImage": null,
            "publishedAt": "2022-01-15T02:12:00Z",
            "content": "TechnologyNewly revealed documents from the complaint against Google shed light on potential advertising sales manipulation\r\nSat 15 Jan 2022 02.12 GMT\r\nFacebook CEO Mark Zuckerberg and Google CEO Sun… [+3709 chars]"
            },
            {
            "source": {
            "id": "usa-today",
            "name": "USA Today"
            },
            "author": "Kelly Tyko",
            "title": "Insurance covers at-home COVID testing starting Saturday. How to get free tests or reimbursement - USA TODAY",
            "description": "Health insurance plans will cover at-home COVID-19 tests starting Jan. 15 but with most policies, you'll need to save receipts to submit reimbursement.",
            "url": "https://www.usatoday.com/story/money/shopping/2022/01/14/covid-tests-insurance-reimbursement/6518277001/",
            "urlToImage": "https://www.gannett-cdn.com/presto/2021/12/02/USAT/be98fbcb-b2d8-4bc4-821f-94bf468db655-IMG_8560.jpg?crop=4031,2268,x0,y373&width=3200&height=1680&fit=bounds",
            "publishedAt": "2022-01-15T01:57:38Z",
            "content": "President Biden also announced that 1,000 military medical personnel will begin deploying to help overwhelmed medical facilities.\r\nUSA TODAY\r\nAmericans with health insurance can get up to eight at-ho… [+6867 chars]"
            },
            {
            "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
            },
            "author": "Amy Cheng",
            "title": "Epstein-Barr virus may increase risk of multiple sclerosis, 'Science' study says - The Washington Post",
            "description": "The finding could incentivize pharmaceutical companies to invest in vaccines for the Epstein-Barr virus, which infects many people and is usually mild.",
            "url": "https://www.washingtonpost.com/health/2022/01/14/epstein-barr-virus-multiple-sclerosis-mononucleosis/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/IEETAPDUUUI6ZITNDQQ4C2Y4SM.jpg&w=1440",
            "publishedAt": "2022-01-15T01:51:03Z",
            "content": "The study said contracting EBV could increase by 32 times the risk of developing MS, and while the findings were praised by experts, they also noted that the results did not provide a definitive link… [+2840 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "KING5.com"
            },
            "author": "Steve Bunin",
            "title": "Washington state borrowers to get $35M in Navient settlement | king5.com - KING5.com",
            "description": "It's part of a $1.7 billion settlement from a lawsuit against lender Navient led by state Attorney General Bob Ferguson",
            "url": "https://www.king5.com/article/money/navient-student-loan-lawsuit-settlement-attorney-general-bob-ferguson/281-816af3c6-3f65-4089-8bba-1a95e6fb6171",
            "urlToImage": "https://media.king5.com/assets/KING/images/c96f3365-f5d6-4b34-997b-3096bc97f380/c96f3365-f5d6-4b34-997b-3096bc97f380_1140x641.jpg",
            "publishedAt": "2022-01-15T01:39:00Z",
            "content": "SEATTLE Around 1,400 Washington residents will have their student loan debt erased, as part of a $1.7 billion settlement from a lawsuit led by state Attorney General Bob Ferguson.\r\nFerguson started t… [+2263 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "YouTube"
            },
            "author": null,
            "title": "Kyle Shanahan Congratulates Samuel, Williams on 'Well Deserved' All-Pro Honors | 49ers - San Francisco 49ers",
            "description": "Shanahan spoke about Deebo Samuel and Trent Williams earning first-team All-Pro honors, shared final injury updates before the 49ers Wild Card matchup in Dal...",
            "url": "https://www.youtube.com/watch?v=9N1XpsVgexk",
            "urlToImage": "https://i.ytimg.com/vi/9N1XpsVgexk/hqdefault.jpg",
            "publishedAt": "2022-01-15T01:11:26Z",
            "content": null
            },
            {
            "source": {
            "id": "the-hill",
            "name": "The Hill"
            },
            "author": "Lexi Lonas",
            "title": "WHO recommends two new drugs to combat COVID-19 infection | TheHill - The Hill",
            "description": "The World Health Organization (WHO) ...",
            "url": "https://thehill.com/policy/healthcare/589869-who-recommends-two-new-drugs-to-combat-covid-19-infection",
            "urlToImage": "https://thehill.com/sites/default/files/whoheadquartersworldhealthorganization_111620getty.jpg",
            "publishedAt": "2022-01-15T00:49:37Z",
            "content": "The World Health Organization (WHO) recommended two new drugs to combat COVID-19 infections.\r\nThe first new drug that is recommended for critical COVID-19 cases is baricitinib, an oral drug that supp… [+1218 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "YouTube"
            },
            "author": null,
            "title": "NFL Experts Share Super Wild Card Weekend Game Picks [Teams to Advance] | CBS Sports HQ - CBS Sports HQ",
            "description": "Pete Prisco and Todd Furhman join CBS Sports HQ to share their bets for every NFL Wild Card game!0:00-3:16 Raiders vs Bengals3:17-5:32 Patriots vs Bills5:35-...",
            "url": "https://www.youtube.com/watch?v=nKK3o6P3icc",
            "urlToImage": "https://i.ytimg.com/vi/nKK3o6P3icc/hqdefault.jpg",
            "publishedAt": "2022-01-15T00:34:14Z",
            "content": null
            }
            ]
    constructor(){
        super();
        console.log("Hello Constructor News Component")
        this.state = {
            articles: this.articles, 
            loading: false
        }
    }
    render() {
        return (
            <div className="container my-3">
                <h2>NewsMonkey - Top Headlines</h2>
              
                <div className="row">
                {this.state.articles.map((element)=>{
                    return(
                        <div className="col-md-4" key={element.url} >
                    <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>
                    )
                })}
                    
                </div>
            </div>
        )
    }
}
 