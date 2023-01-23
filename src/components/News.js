import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
 
  articles = [
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": null,
    "title": "COVID travel curbs against Chinese visitors 'discriminatory'- state media - Reuters",
    "description": "Chinese state-media have railed against the growing number of foreign governments imposing COVID tests on travellers from China, calling the measures \"discriminatory.\"",
    "url": "https://www.reuters.com/business/healthcare-pharmaceuticals/covid-travel-curbs-against-chinese-visitors-discriminatory-state-media-2022-12-30/",
    "urlToImage": "https://www.reuters.com/resizer/G2OicmukxGH6EWLOWJGZmXPdwT8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/QXKXOAUUINNYDD5NEFHUYF5Q7A.jpg",
    "publishedAt": "2022-12-30T12:19:00Z",
    "content": "BEIJING/MADRID, Dec 30 (Reuters) - Chinese state-media have railed against the growing number of foreign governments imposing COVID tests on travellers from China, calling the measures \"discriminator… [+5300 chars]"
    },
    {
    "source": {
    "id": "the-wall-street-journal",
    "name": "The Wall Street Journal"
    },
    "author": "Caitlin McCabe, Caitlin Ostroff, Weilun Soon",
    "title": "Stock Market Today: Dow Futures Fall in Year's Last Trading Day - The Wall Street Journal",
    "description": "Follow The Wall Street Journal’s full markets coverage.",
    "url": "https://www.wsj.com/livecoverage/stock-market-news-today-12-30-2022",
    "urlToImage": "https://images.wsj.net/im-589547/social",
    "publishedAt": "2022-12-30T12:19:00Z",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "BBC News"
    },
    "author": "https://www.facebook.com/bbcnews",
    "title": "Andrew Tate detained in Romania over rape and human trafficking case - BBC",
    "description": "The controversial online influencer has been detained in Romania alongside his brother Tristan.",
    "url": "https://www.bbc.com/news/world-europe-64122628",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/267F/production/_128155890_tate-index-reuters.jpg",
    "publishedAt": "2022-12-30T12:08:06Z",
    "content": "Media caption, Andrew Tate: Police release raid video after influencer arrested\r\nControversial online influencer Andrew Tate has been detained in Romania as part of a human trafficking and rape inves… [+4592 chars]"
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": null,
    "title": "Southwest promises refunds as airline sees 'certain' financial impact - Reuters",
    "description": "Southwest Airlines <a href=\"https://www.reuters.com/companies/LUV.N\" target=\"_blank\">(LUV.N)</a> promised to reimburse passengers for expenses such as hotels and car rentals in addition to refunding tickets after it canceled thousands of flights due to a mass…",
    "url": "https://www.reuters.com/business/aerospace-defense/southwest-unions-say-they-warned-company-about-outdated-systems-years-2022-12-29/",
    "urlToImage": "https://www.reuters.com/resizer/eg2W2Cy0Xn04IR1rM7Qm6aAkA7w=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/I4GO5UPG4ZKPFKRCDDB6K2L5KM.jpg",
    "publishedAt": "2022-12-30T11:52:00Z",
    "content": "WASHINGTON, Dec 29 (Reuters) - Southwest Airlines (LUV.N) promised to reimburse passengers for expenses such as hotels and car rentals in addition to refunding tickets after it canceled thousands of … [+4314 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Detroit Free Press"
    },
    "author": ", Detroit Free Press",
    "title": "Benches clear during Detroit Pistons-Orlando Magic altercation sparked by Moritz Wagner - Detroit Free Press",
    "description": "After a lengthy delay, the officials ruled that Mo Wagner committed a Flagrant-2 foul. Hamidou Diallo and Killian Hayes were also ejected.",
    "url": "https://www.freep.com/story/sports/nba/pistons/2022/12/29/benches-clear-detroit-pistons-orlando-magic-altercation-mo-wagner-killian-hayes/69763100007/",
    "urlToImage": "https://www.gannett-cdn.com/presto/2022/12/29/PDTF/4069e57e-61fa-439c-917a-fcb985730408-SI_20221228_lah_aa1_01_7.jpg?auto=webp&crop=2399,1350,x0,y122&format=pjpg&width=1200",
    "publishedAt": "2022-12-30T11:33:32Z",
    "content": "Moritz Wagner is no stranger to the fans in the Motor City. The former Michigan basketball star was a main cog on the last U-M team to reach the national championship game. And his irritant style, wh… [+1120 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "BBC News"
    },
    "author": "https://www.facebook.com/bbcnews",
    "title": "Hershey sued in US over metal in dark chocolate claim - BBC",
    "description": "The lawsuit alleges that three Hershey products contain harmful levels of lead and cadmium.",
    "url": "https://www.bbc.com/news/business-64123157",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/4DDF/production/_128153991_7ad82c3ef6b27b0d6ff8d7880758d76ffd47936c.jpg",
    "publishedAt": "2022-12-30T10:30:37Z",
    "content": "Chocolate manufacturer Hershey has been sued in the US over claims the firm is selling products containing harmful levels of metal.\r\nThe lawsuit brought by Christopher Lazazzaro alleges the firm misl… [+2322 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Sharif Paget, Elizabeth Wolfe",
    "title": "'I had to do it to save everyone': Man breaks into school and shelters nearly a dozen people from blizzard - CNN",
    "description": "As a deadly and historic blizzard barreled through Erie County, New York, last weekend, some residents found themselves in a dire scenario -- stranded in howling snow with nowhere to go, their cars dwindling in gas supply with police unable to come to the res…",
    "url": "https://www.cnn.com/2022/12/30/us/blizzard-new-york-rescue-school-break-in/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221230014632-01-jay-withey-storm-school.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2022-12-30T10:07:00Z",
    "content": "As a deadly and historic blizzard barreled through Erie County, New York, last weekend, some residents found themselves in a dire scenario stranded in howling snow with nowhere to go, their cars dwin… [+5571 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "TMZ"
    },
    "author": "TMZ Staff",
    "title": "'General Hospital' Star Sonya Eddy's Twitter Posting Cryptic Horoscope Tweets Post Death - TMZ",
    "description": "Sonya Eddy's dead, but her Twitter account is still very much alive ... her page is posting cryptic tweets every day, and the company behind it says its hands are tied.",
    "url": "https://www.tmz.com/2022/12/30/general-hospital-sonya-eddy-twitter-still-posting-cryptic-horoscope-tweets-after-death/",
    "urlToImage": "https://imagez.tmz.com/image/f5/16by9/2022/12/23/f5278679fda8430e9ca2043be58cf5e3_xl.jpg",
    "publishedAt": "2022-12-30T09:00:00Z",
    "content": "Sonya Eddy's dead, but her Twitter account is still very much alive ... her page is posting cryptic tweets every day, and the company behind it says its hands are tied.\r\nThe late \"General Hospital\" a… [+855 chars]"
    },
    {
    "source": {
    "id": "associated-press",
    "name": "Associated Press"
    },
    "author": "Carolyn Thompson",
    "title": "Death toll climbs as blizzard-battered Buffalo area digs out - The Associated Press - en Español",
    "description": "BUFFALO, N.Y. (AP) — Roads reopened Thursday in storm-besieged Buffalo  as authorities continued searching for people who may have died or are stuck and suffering after last week's blizzard.",
    "url": "https://apnews.com/article/weather-buffalo-natural-disasters-new-york-city-storms-6cb9f31599be5f698a927fa971fcf019",
    "urlToImage": "https://storage.googleapis.com/afs-prod/media/736bc8e1768e4b628495629ead25f18a/3000.webp",
    "publishedAt": "2022-12-30T07:51:21Z",
    "content": "BUFFALO, N.Y. (AP) Roads reopened Thursday in storm-besieged Buffalo as authorities continued searching for people who may have died or are stuck and suffering after last weeks blizzard.\r\nThe driving… [+3206 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CBS Sports"
    },
    "author": "",
    "title": "The advancement of American soccer has Pelé's arrival to NASL, New York Cosmos to thank - CBS Sports",
    "description": "The legend passed away on Thursday, but his impact is still felt everywhere, especially in the U.S.",
    "url": "https://www.cbssports.com/soccer/news/the-advancement-of-american-soccer-has-peles-arrival-to-nasl-new-york-cosmos-to-thank/",
    "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/12/29/6c4b5021-0314-4050-9738-dc5147770b3a/thumbnail/1200x675/be00031afabee09d5911e7ca3b6cc3ae/pele.jpg",
    "publishedAt": "2022-12-30T07:14:00Z",
    "content": "The soccer world lost a legend Thursday with the passing of Pelé at 82. The king of Brazillian soccer, Pelé has amassed quite the trophy list winning the World Cup three times, the intercontinental c… [+2994 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Rhea Mogul",
    "title": "Myanmar court extends Aung San Suu Kyi's prison sentence to 33 years - CNN",
    "description": "A court in military-run Myanmar has sentenced Aung San Suu Kyi to seven years in prison for corruption, a source familiar with the case told CNN, bringing an end to a string of secretive and highly-politicized proceedings against the ousted former leader.",
    "url": "https://www.cnn.com/2022/12/30/asia/myanmar-aung-san-suu-kyi-court-verdict-intl-hnk/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220902133407-aung-san-suu-kyi-file-081816.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2022-12-30T07:13:00Z",
    "content": "A court in military-run Myanmar has sentenced Aung San Suu Kyi to seven years in prison for corruption, a source familiar with the case told CNN, bringing an end to a string of secretive and highly-p… [+2853 chars]"
    },
    {
    "source": {
    "id": "fox-news",
    "name": "Fox News"
    },
    "author": "Louis Casiano, Elizabeth Pritchett",
    "title": "California deputy shot, killed by man with 'extensive criminal history' during traffic stop: sheriff - Fox News",
    "description": "A California sheriff's deputy was killed and a suspect was fatally shot Thursday on a freeway about 50 miles east of Los Angeles in Riverside County.",
    "url": "https://www.foxnews.com/us/california-sheriffs-deputy-shot-killed-suspect-dies-freeway-chase",
    "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/12/Deputy-Isaiah-Cordero-e1672378031930.jpg",
    "publishedAt": "2022-12-30T06:06:29Z",
    "content": "A California sheriff's deputy was shot and killed Thursday afternoon during a traffic stop, which led to a massive manhunt for the suspect and resulted in him being fatally shot by authorities.\r\nIn a… [+4774 chars]"
    },
    {
    "source": {
    "id": "al-jazeera-english",
    "name": "Al Jazeera English"
    },
    "author": "Al Jazeera",
    "title": "China fighter jet flew within six metres of US surveillance plane - Al Jazeera English",
    "description": "Video of incident shows a Chinese J-11 jet flying dangerously close to a US surveillance plane over the South China Sea.",
    "url": "https://www.aljazeera.com/news/2022/12/30/chinese-fighter-jet-flew-within-20-feet-of-american-plane-us-say",
    "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2022/12/2022-12-29T192623Z_1748025666_RC2QFY9Y3FT1_RTRMADP_3_USA-CHINA-MILITARY.jpg?resize=1920%2C1238",
    "publishedAt": "2022-12-30T06:00:59Z",
    "content": "A Chinese fighter jet flew within six metres (20 feet) of a United States Air Force surveillance plane over the hotly contested South China Sea earlier this month, the US military said on Thursday.\r\n… [+3574 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "PhoneArena"
    },
    "author": "Alan Friedman",
    "title": "New OnePlus 11 leak reveals more images, what's in the box, and the phone's key specs - PhoneArena",
    "description": "Reliable tipster Evan Blass leaks more images of the OnePlus 11 along with the handset's specs.",
    "url": "https://www.phonearena.com/news/oneplus-11-leak_id144529",
    "urlToImage": "https://m-cdn.phonearena.com/images/article/144529-wide-two_1200/New-OnePlus-11-leak-reveals-more-images-whats-in-the-box-and-the-phones-key-specs.jpg",
    "publishedAt": "2022-12-30T05:39:26Z",
    "content": null
    },
    {
    "source": {
    "id": "independent",
    "name": "Independent"
    },
    "author": "Namita Singh",
    "title": "Pope Benedict news - latest: Vatican gives update on former Pope’s condition - The Independent",
    "description": "Pope Benedict XVI is very ill, with Pope Francis asking for prayers ‘to accompany him in these difficult hours’",
    "url": "https://www.independent.co.uk/news/world/europe/pope-benedict-xvi-emeritus-francis-vatican-b2253348.html",
    "urlToImage": "https://static.independent.co.uk/2022/12/28/09/SEI138674643.jpg?quality=75&width=1200&auto=webp",
    "publishedAt": "2022-12-30T04:00:00Z",
    "content": "The major events of Pope Benedicts papacy and retirement\r\n19 April 2005 - German Cardinal Joseph Ratzinger, the head of the Vaticans doctrinal office, is elected to succeed Pope John Paul II as the 2… [+3134 chars]"
    },
    {
    "source": {
    "id": "usa-today",
    "name": "USA Today"
    },
    "author": "Thao Nguyen, USA TODAY",
    "title": "Coast Guard suspends search for 4 people after helicopter crash in Gulf of Mexico - USA TODAY",
    "description": "The helicopter was in the process of departing an oil platform in the Gulf when it crashed on Thursday, the Coast Guard's 8th District announced.",
    "url": "https://www.usatoday.com/story/news/nation/2022/12/29/coast-guard-gulf-mexico-helicopter-crash/10966860002/",
    "urlToImage": "https://www.gannett-cdn.com/presto/2022/12/29/USAT/c7d9b13c-6845-4ca2-8c1c-bb4052e17d64-AFP_AFP_33438BX.JPG?auto=webp&crop=2590,1457,x815,y498&format=pjpg&width=1200",
    "publishedAt": "2022-12-30T03:47:14Z",
    "content": "The U.S. Coast Guard suspended its hourslong search after a helicopter with four people on board crashed in the Gulf of Mexico on Thursday, officials said.\r\nThe helicopter was in the process of depar… [+1734 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "NBCSports.com"
    },
    "author": "Charean Williams",
    "title": "Joshua Dobbs’ first career touchdown pass has Titans within 17-13 - NBC Sports",
    "description": "It’s safe to say Joshua Dobbs has won the starting job in Tennessee.With Ryan Tannehill on injured reserve, Dobbs is keeping rookie quarterback Malik Willis on the bench.Dobbs, in his first career start, has completed 14 of 24 passes for 188 yards and a touch…",
    "url": "https://profootballtalk.nbcsports.com/2022/12/29/joshua-dobbs-first-career-touchdown-pass-has-titans-within-17-13/",
    "urlToImage": "https://profootballtalk.nbcsports.com/wp-content/uploads/sites/25/2022/12/GettyImages-1245876743-e1672370723471.jpg",
    "publishedAt": "2022-12-30T03:25:00Z",
    "content": "Its safe to say Joshua Dobbs has won the starting job in Tennessee.\r\nWith Ryan Tannehill on injured reserve, Dobbs is keeping rookie quarterback Malik Willis on the bench.\r\nDobbs, in his first career… [+606 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MarketWatch"
    },
    "author": "Jeremy C. Owens",
    "title": "Tesla is not alone: 18 (and a half) other big stocks are headed for their worst year on record - MarketWatch",
    "description": "Meta Platforms and PayPal are also among S&P 1500 stocks with $30 billion market cap or larger that are headed for their biggest percentage declines yet in 2022",
    "url": "https://www.marketwatch.com/story/tesla-is-not-alone-18-and-a-half-other-big-stocks-are-headed-for-their-worst-year-on-record-11672361991",
    "urlToImage": "https://images.mktw.net/im-587536/social",
    "publishedAt": "2022-12-30T00:59:00Z",
    "content": "In the worst year for stocks since the Great Recession, several big names are headed for their worst year on record with just one trading day left in 2022.The S&amp;P 500 index \r\n SPX,\r\n +1.75%\r\nand … [+4511 chars]"
    },
    {
    "source": {
    "id": "cbs-news",
    "name": "CBS News"
    },
    "author": "Irina Ivanova",
    "title": "Here's what tax pros are looking for in Donald Trump's returns - CBS News",
    "description": "A House committee investigating the former president is set to release more details of his returns on Friday.",
    "url": "https://www.cbsnews.com/news/trump-tax-returns-heres-what-tax-pros-are-looking-for/",
    "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2022/11/14/438b44df-0cb3-4c07-8f2a-73f1ba62715c/thumbnail/1200x630/f1476b33753d083712187b710054b83e/gettyimages-1244627968.jpg",
    "publishedAt": "2022-12-29T23:54:06Z",
    "content": "Donald Trump's tax returns — long the subject of speculation and a bitter legal fight — are set to be made public. After last week releasing a summary of the IRS' efforts to audit the former presiden… [+7094 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Yahoo Entertainment"
    },
    "author": "COLLEEN SLEVIN",
    "title": "Judge: Voting machine tampering suspect is incompetent - Yahoo News",
    "description": "A man accused of tampering with a voting machine during Colorado's primary election is mentally incompetent and cannot continue with court proceedings, a...",
    "url": "https://news.yahoo.com/judge-voting-machine-tampering-suspect-230302548.html",
    "urlToImage": "https://s.yimg.com/ny/api/res/1.2/iMIActKzQa8jD_1bFJmfBg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/ap.org/14a3517d6811042178331c816bc63d1e",
    "publishedAt": "2022-12-29T23:03:02Z",
    "content": "DENVER (AP) A man accused of tampering with a voting machine during Colorado's primary election is mentally incompetent and cannot continue with court proceedings, a judge ruled Thursday.\r\nAt the req… [+1996 chars]"
    }
    ]
  constructor(){
    super();
    console.log("hello");
    this.state ={
      articles : this.articles
    }
  }

  async componentDidMount(){
    let url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=08cc389e02e843d999278e57b4f472a6"
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles: parsedData.articles})
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>NewsApp - Top headlines</h2>
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
              <NewsItem  title={element.title?element.title.slice(0, 40):""} description={element.description?element.description.slice(0,80):""} imgUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
          })}
        </div>
      </div>
    )
  }
}

export default News
