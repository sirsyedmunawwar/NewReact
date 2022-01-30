import React, { useState, createContext } from "react";
export const ContextAPI = createContext();

export const BlogData = (props) => {
  const [rows] = useState([
    { 
        id: "1000", 
        image: "https://images.unsplash.com/photo-1619525839474-e54f0cd01af7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80", 
        alt:"Picture",
        title: "RED LEAVES", 
        description: "Why are some leaves red and what does it mean?We assume leaves to be green, but also notice how there are exceptions – we expect a show of reds, golds and yellows each autumn.But what about all those red leaves we see turning up at other times of the year, even in the middle of summer?The red colour is caused by pigments called anthocyanins. The pigments cause not only the red of some leaves, grapes and onions, but also the blue of blueberries and the black of soy beans.Some trees are naturally very high in these pigments and will have strong colours at all times of the year. These trees are usually marked out by both their appearance and their name, eg. the copper beech:", 
        category: "NATURE", 
        date: "/JAN 10 2020"
    },
    { 
        id: "1001", 
        image: "https://images.unsplash.com/photo-1495164606704-19412de896f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHRyZWUlMjBjb2xvcmZ1bHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", 
        title: "Joshua Tree Overnight Adventure", 
        description: "Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces", 
        category: "NATURE", 
        date: "/JAN 10 2020"
    },
    // The latest
    { 
        id: "1", 
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80", 
        title: "Joshua Tree Overnight Adventure", 
        description: "Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces", 
        category: "NATURE", 
        date: "/JAN 10 2020"
    },
    { 
      id: "2", 
      image: "https://techcrunch.com/wp-content/uploads/2022/01/Screen-Shot-2022-01-27-at-9.52.52-PM.png?w=1390&crop=1 ", 
      title: "South Korea’s Naver Z launches $100M fund for metaverse creators", 
      description: "South Korean internet conglomerate Naver Group continues to ride the hottest internet trends targeting young users. It has been the name behind messaging giant Line and popular selfie app Snow. And now, it’s charging into the metaverse, the red hot concept that makes Roblox, Epic Games and other gaming giants the talk of the town", 
      category: "TECHNOLOGY", 
      date: "/ JAN 25 2022"
    },
    { 
      id: "3", 
      image: "https://techcrunch.com/wp-content/uploads/2014/05/8442476626_f74894c161_b.jpg?w=1390&crop=1 ", 
      title: "Bug bounty giant HackerOne lands $49M, thanks to cloud adoption boon", 
      description: "Bug bounty and penetration testing startup HackerOne has raised $49 million at Series E following a year of massive cloud adoption fueled by work-from-home orders The company — which mediates between hackers finding security issues and companies keen to fix them — said its recent growth was driven by a rise in zero-day vulnerabilities like the flaw in the ubiquitous open source logging platform Log4j, which put the internet on notice ahead of the December holiday. The number of cloud misconfigurations that can lead to exposed systems or user data doubled in the past year, the company said.", 
      category: "TECHNOLOGY", 
      date: "/ JAN 25 2022"
  
    },
    { 
      id: "4", 
      image: "https://techcrunch.com/wp-content/uploads/2021/09/GettyImages-1317958548.jpg?w=1390&crop=1  ", 
      title: "Propy launches NFT platform in the US, allowing real-world property to be bought as an NFT  ", 
      description: "Last year we covered how early blockchain startup Propy planned to use the technology to smooth real-world real estate sales by introducing the concept of smart contracts. It went on to actually sell an apartment as an NFT, using the NFT to effectively rubber stamps the legal process. However, that apart was in Ukraine. Today it launches the whole concept in the US, an entirely different kettle of legal fish.", 
      category: "TECHNOLOGY", 
      date: "/ JAN 25 2022"
    },
    { 
      id: "5", 
      image: "https://techcrunch.com/wp-content/uploads/2022/01/GettyImages-1350442887.jpg?w=1390&crop=1  ", 
      title: "As Finmark finds its footing, it moves up market and takes on additional investment", 
      description: "When Finmark founder Rami Essaid built a previous startup, he saw firsthand how hard it is to build accurate financial models. When he sold that startup, Distil Networks, to Imperva 2019, he decided to build a new company that could help Finmark, which launched in July 2020, helps companies build sophisticated financial models without having to use Excel. “We had a thesis around helping startups from pre-revenue to pre-IPO build out financial models and get out of Excel,” Essaid explained to me.", 
      category: "TECHNOLOGY", 
      date: "/ JAN 25 2022"
    },
    { 
      id: "6", 
      image: " https://images.hindustantimes.com/img/2022/01/25/550x309/kartik_aaryan_1643102557220_1643102557371.png", 
      title: "Shehzada producers deny allegations of Kartik Aaryan threatening to walk out", 
      description: "Shehzada producers and director Rohit Dhawan defended Kartik Aaryan after producer Manish Shah, who has the rights to the Hindi-dubbed version of Ala Vaikunthapurramuloo, alleged that he threatened to walk out of the film if the Hindi-dubbed version of the Telugu hit is released in theatres.After producer Manish Shah, who has the rights to the Hindi-dubbed version of Ala Vaikunthapurramuloo, called Kartik Aaryan ‘extremely unprofessional’ and claimed that he opposed the release of the Hindi-dubbed version in theatres, the producers of Shehzada came to his defence. Kartik is playing the lead role in Shehzada, the Hindi remake of the Telugu hit Ala Vaikunthapurramuloo.", 
      category: "BOLLYWOOD", 
      date: "/ JAN 31 2022"
    },
    { 
      id: "7", 
      image: " https://images.hindustantimes.com/img/2022/01/27/550x309/Untitled_design_(83)_1643283616249_1643283628024.png", 
      title: "Javed reacts to row over Netaji's statue at India Gate: ‘Choice is not right’", 
      description: "PM Narendra Modi announced recently that a statue of Netaji Subhas Chandra Bose will be installed at India Gate. Lyricist Javed Akhtar has criticised the choice of the statue and has said “it is not right.Last week,  Prime Minister Narendra Modi’s unveiled a hologram statue of Netaji Subhas Chandra Bose, which will be installed near Delhi's India Gate. But lyricist Javed Akhtar has said that even though the idea to install Neta Ji's statue is fine, the ", 
      category: "BOLLYWOOD", 
        date: "/ JAN 31 2022"
    },
    { 
      id: "8", 
      image: " https://images.hindustantimes.com/img/2022/01/27/550x309/7adde1be-7e9a-11ec-93a3-bea8dbb6b540_1643258510733.jpg", 
      title: "Pankaj Tripathi: As a celebrity, it’s a duty to use my voice to uplift the underprivileged", 
      description: "Actor Pankaj Tripathi understands the power of his actions as a public figure, and wishes to use it well toeards a good cause. During his recent family holiday to his hometown in Bihar, the actor honoured a promise he had made to khadi artisans in a village of Gopalganj, on his last visit..The 45-year-old spent time with these artisans, heard their stories and extended support to their craft by buying their products.", 
      category: "BOLLYWOOD", 
      date: "/ JAN 31 2022"
    },
    { 
      id: "9", 
      image: "https://images.hindustantimes.com/img/2022/01/27/550x309/bceaac62-7e91-11ec-93a3-bea8dbb6b540_1643258150597.jpg ", 
      title: "Ajay Devgn: I don’t believe in cutting any slack for myself, Covid-19 compulsorily slowed us down", 
      description: "“The year 2022 looks super packed and super good because a host of things that were meant to happen in the previous year got pushed due to (Covid-19) lockdown and subsequent restrictions. I like to think I’m going to work every day. That’s all I ever want and wish for. I don’t believe in cutting any slack for myself because COVID-19 compulsorily slowed us down in the last two years. And that is precious time lost,” feels the 52-year-old.", 
      category: "BOLLYWOOD", 
      date: "/ JAN 31 2022"
    },
    { 
      id: "10", 
      image: "https://images.hindustantimes.com/img/2022/01/16/550x309/HT4_1642331065244_1642331078064.jpg ", 
      title: "Hotel Transylvania Transformania review: The sequel nobody needed or wanted", 
      description: "Let's face it. The Hotel Transylvannia series was never Shrek or Ice Age. It had half decent films, propped up by some amazing inventive animation and direction from a master - Genndy Tartakovsky. The star power of Adam Sandler helped as well. The fourth and final instalment of the series - Hotel Transylvania: Transformania - lacks both of these. And that, along with some unimaginative writing, makes the film the worst chapter of an already mediocre franchise.", 
      category: "HOLLYWOOD", 
      date: "/ JAN 20 2022"
      },
      { 
      id: "11", 
      image: "https://images.hindustantimes.com/img/2022/01/16/550x309/John_Cena_1642318500491_1642318518844.jpeg ", 
      title: "John Cena reveals he was rejected for these Marvel, DC superhero roles", 
      description: "Speaking to Josh Horowitz on The Happy Sad Confused podcast, John said, I can't tell you how many superhero roles Ive been rejected for. Shazam is certainly one. I think like a child, so Shazam was super interesting to me…And when I read the script, a lot of times, like… this is the thing, I don’t chase ‘I want to do this,’ I always have to read it. Shazam was eventually played by Zachary Levi.", 
      category: "HOLLYWOOD", 
      date: "/ JAN 20 2022"
      },
      { 
      id: "12", 
      image: "https://images.hindustantimes.com/img/2022/01/14/550x309/Chris_and_Robert_1642177518821_1642177536966.jpg ", 
      title: "Robert Downey Jr was jealous of Chris Hemsworth, reveals Jeremy Renners", 
      description: "This surprising revelation was made by their MCU co-star Jeremy Renner in a recent interaction, where he said Robert was jealous of Chris when he first met him. Jeremy played Hawkeye in the Marvel films and is currently headlining his own web series. It was in the 2012 film Avengers when these three--as well as Chris Evans, Mark Ruffalo, and Scarlett Johansson--came together.", 
      category: "HOLLYWOOD", 
      date: "/ JAN 20 2022"
      },
      { 
      id: "13", 
      image: "https://images.hindustantimes.com/img/2022/01/14/550x309/267698674_392490959334488_8978975498648809168_n_1642153824953_1642153839295.jpg", 
      title: "Nick Jonas' fans say ‘please don’t scare us' as he takes break from social media", 
      description: "Singer Nick Jonas tweeted about his ‘unintentional’ social media break. The tweet comes after Nick took a two-week break from Instagram and Twitter.On Friday, Nick tweeted, “Didn’t plan this way by any means, but I have (unintentionally) taken a break from social over the past two weeks to just be present… and it’s felt great. Hope you’ve all been doing really well. Much love.”", 
      category: "HOLLYWOOD", 
      date: "/ JAN 20 2022"
      },
      { 
        id: "14", 
        image: " https://images.indianexpress.com/2022/01/Untitled-design-2022-01-27T123302.494.jpg ", 
        title: "England first team to reach U-19 World Cup semifinals", 
        description: "George Thomas was a delighted onlooker at the non-striker's end only moving into double figures in the tenth over, before smacking a six to bring up England's hundred.U-19 World Cup, england, U-19 World Cup england, england U-19 World Cup, sports news, indian expressEngland advance to the semi-finals of the ICC U-19 World Cup with a six-wicket win over South Africa.(Twitter/England Cricket)Jacob Bethell’s blistering batting display helped England advance to the semi-finals of the ICC U-19 World Cup with a six-wicket win over South Africa. Bethell was one of the bowlers to restrict South Africa to 209 all out before hitting 88 to see England set up a clash with either Sri Lanka or Afghanistan.", 
        category: "SPORTS", 
        date: "/ JAN 15 2022"
        },
        { 
        id: "15", 
        image: " https://images.indianexpress.com/2022/01/india-odis.jpg", 
        title: "India vs West Indies series squad selection: Wrist spinners back in business", 
        description: "India’s limited-overs squad selection for the upcoming home assignments against the West Indies marked the return of an old template, wrist-spin taking centre-stage again. After a long hiatus, Kuldeep Yadav is back to the 50-over fold to pair up with Yuzvendra Chahal, while Ravichandran Ashwin hasn’t been included either in the ODI squad or for the T20Is. India will play three ODIs and as many T20Is against the West Indies, in Ahmedabad and Kolkata respectively, starting from February 6. Rohit Sharma has recovered from his hamstring injury to lead India in the series.", 
        category: "SPORTS", 
        date: "/ JAN 15 2022"
        },
        { 
        id: "16", 
        image: "https://images.indianexpress.com/2022/01/Medvedev-4.jpg", 
        title: "‘I asked myself what would Novak do’: Medvedev booed by crowd after Djokovic comment", 
        description: "Top seed Daniil Medvedev battled back from two sets down and saved a match point against Canada’s Felix Auger-Aliassime to reach the Australian Open semi-finals with a 6-7(4) 3-6 7-6(2) 7-5 6-4 victory on Wednesday.Medvedev had his back firmly up against the wall for much of an absorbing contest as Auger-Aliassime produced some stunning tennis at the Rod Laver Arena. But he simply refused to lie down as he overturned a two-set deficit for only the second time in his career to set up a Friday semi-final against Greek Stefanos Tsitsipas.", 
        category: "SPORTS", 
        date: "/ JAN 15 2022"
        },
        { 
        id: "17", 
        image: "https://images.indianexpress.com/2022/01/Qatar-WC.jpg ", 
        title: "What’s at stake as World Cup qualifying resumes", 
        description: "The eight stadiums are ready in Qatar and World Cup tickets have been on sale for a week. Now the mission to snap up remaining tournament slots resumes.With qualifying disrupted by the pandemic, fixtures have been squeezed in over the next week or so for teams in the Americas and Asia.It means Europe’s top leagues having to take a mid-season break even though the continent’s national teams aren’t playing next until March, when the World Cup playoffs are staged as scheduled.", 
        category: "SPORTS", 
        date: "/ JAN 15 2022"
        },
        { 
          id: "18", 
          image: "https://images.everydayhealth.com/images/healthier-cinnamon-roll-alternative-recipe-1440x810.jpg?w=1110 ", 
          title: "A Cinnamon Bun Inspired Apple Bread Pudding Recipe", 
          description: "If you’ve ever been to a shopping mall, you know the irresistible pull of freshly baked cinnamon rolls. And maybe their mouthwatering scent has compelled you to sink your teeth into one in the past. If so, that’s not necessarily a bad thing: Dessert — in moderation and occasionally — can be a part of a healthy self-care routine. But when it comes to this particular treat, registered dietitians would agree it’s not an everyday thing, and anyone who likes cinnamon buns needs to be clear-eyed about the nutritional cost involved. ", 
          category: "FOOD", 
        date: "/ JAN 10 2022"
        },
        { 
          id: "19", 
          image: 'https://images.unsplash.com/photo-1640868618785-5f5db98d0f76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80', 
          title: "Importance of Trees", 
          description: "Trees are important to us in a lot of ways and we cannot ignore their importance. They are important because they give us fresh air to breathe, food to eat and shelter/shade from sunlight and rainfall. Besides this, there are many medicines in the market that are made up of trees extracts. Apart from this, there are plants and trees that have medicinal value. They bring peacefulness; create a pleasing and relaxing environment. Also, they help in reflecting the harmful rays of the sun and maintaining a balanced temperature. Besides, they also help in water conservation and preventing soil erosion. They also manage the ecosystem and from ancient times several varieties of plants are worshipped.", 
          category: "NATURE", 
        date: "/ JAN 10 2020"
        },
       
    { 
        id: "101", 
        image: "https://st1.bollywoodlife.com/wp-content/uploads/2022/01/Bobby_Deol_Biggest_Hit_Movies.jpg?impolicy=Medium_Widthonly&w=800  ", 
        title: "Happy birthday Bobby Deol: Aashram star delivered 7 hits in first 4 years since debut; rare feat in the 90s – view list and box office collections", 
        description: "Bobby Deol celebrates his 53rd birthday today, 27th January. It's a testament to the kind love and popularity the star enjoys to this day from his fan, even after more than 25 years in the film industry, that he keeps being showered with wishes, blessings and all manner of fan-made gifts on his special day, be it virtually or in person. Even Bobby Deol's debut web series, Aashram, receiving the kind of acclaim and viewership that it did, reminiscent of his heyday back in the 90s and early 2000s on the big screen, is testament to the stardom that he still enjoys. ", 
        category: "BOLLYWOOD", 
        date: "/ JAN 31 2022"
    },
    { 
        id: "102", 
        image: "https://images.hindustantimes.com/img/2022/01/26/550x309/amitabh-bachchan-pic_1643162593344_1643162603793.jpg", 
        title: "Amitabh Bachchan wishes fans on Republic Day, Kapil Sharma cracks up", 
        description: "Amitabh Bachchan was among the first ones to wish his fans on the occasion of Republic Day on Wednesday. He shared a picture of himself on Instagram in which he sported a tricolour themed beard. He captioned the picture in Hindi, “Many many congratulations for the Republic Day.” His post was liked by more than 1.9 lakh fans within a few hours, including his granddaughter Navya Naveli Nanda. Comedian Kapil Sharma cracked up at the post as he reacted to it with, “Hahahaha.” The photo shared by Amitabh also left his fans in splits, who reacted with the crying-laughing emojis in the comments. ", 
        category: "BOLLYWOOD", 
        date: "/ JAN 31 2022"
    },
    { 
        id: "103", 
        image: "https://st1.bollywoodlife.com/wp-content/uploads/2022/01/Nagarjuna-Denies-Revealing-Reason-Behind-Samantha-Ruth-Prabhu-And-Naga-Chaitanya-Divorce.jpg?impolicy=Medium_Widthonly&w=800  ", 
        title: "Nagarjuna RUBBISHES reports of him revealing the reason behind Samantha Ruth Prabhu-Naga Chaitanya divorce – view tweet", 
        description: "Nagarjuna might be a father aggrieved after his son, Naga Chaitanya went through a much publicised split from ex-wife Samantha Ruth Prabhu. However, it seems that has provided fodder for some portals to run wild with their imagination and quote the actor on fabricated statements. Late last night, 26th January, a report from media portal IndiaGlitz began doing the rounds that Akkineni Nagarjuna had hinted the reason behind the acrimonious separation of Naga Chaitanya and Samantha Ruth Prabhu. However, it now turns out that these reports were completely uncorroborated, after the superstar himself has categorically denied it. ", 
        category: "BOLLYWOOD", 
        date: "/ JAN 31 2022"
    },
    { 
        id: "104", 
        image: " https://images.hindustantimes.com/img/2022/01/27/550x309/a22ceba4-7f7e-11ec-93a3-bea8dbb6b540_1643294516069.jpg ", 
        title: "Ahan Shetty on wedding rumours: It’s not fair but you can’t control these things", 
        description: "A few days back, rumours mills were abuzz that actor Ahan Shetty is all set to tie the knot with girlfriend, fashion designer and influencer, Tania Shroff this year. But Shetty tells us that there’s no truth to the story. “Right now, my main focus is my work, and I’m working towards my second film. When I feel like I need to say something about my personal life, I’m not going to hide it,” he shares.",
        category: "BOLLYWOOD", 
        date: "/ JAN 31 2022"
    },
    { 
      id: "105", 
      image: "https://images.hindustantimes.com/img/2022/01/27/550x309/Twinkle_Khanna__1643290908997_1643290909111.jpg ", 
      title: "Twinkle shares pic of her ‘maal’ Akshay, says he's 'ageing like whiskey'", 
      description: "In the photo, Akshay is seen in a blue shirt and white pants, flaunting his grey beard and salt and pepper hair. He is squinting at something in the distance while posing next to a table.Sharing the photo, Twinkle wrote, “Apna maal (our item) Ageing like whiskey in a charred wood barrel. Do you agree?” Twinkle and Akshay often pull each other’s leg in their social media posts, this is a rare occasion when Twinkle chose to get a bit cheeky with her love for him.", 
      category: "BOLLYWOOD", 
      date: "/ JAN 31 2022"
  },
  { 
        id: "106", 
        image: "https://images.hindustantimes.com/img/2022/01/27/550x309/_d4f77b32-beb2-11ea-b1db-f4c281a9a9e5_1643285858227.jpg ", 
        title: "Sonam amplifies husband Anand's complaint against a brand, calls it shameful", 
        description: "Actor Sonam Kapoor's husband Anand Ahuja complained about an e-commerce brand on Twitter after a “horrible experience.” Sonam supported Anand's tweet and re-tweeted it, calling the e-commerce brand “terrible.”On Thursday, Anand tweeted, “Does anyone know someone at @MyUS_Shopaholic. I’ve been having HORRIBLE experience recently. They are holding items improperly, rejecting formal paperwork & refusing to acknowledge any reasoning.” Sonam shared the tweet on her handle and said, “Terrible customer service is shameful.”", 
        category: "BOLLYWOOD", 
        date: "/ JAN 31 2022"
    },
    { 
      id: "107", 
      image: "https://images.hindustantimes.com/img/2022/01/27/550x309/nawazuddinsiddiqui_1643284360092_1643284369025.jpg ", 
      title: "Nawazuddin gets a lavish bungalow in Mumbai with sprawling garden. See photos", 
      description: "Nawazuddin Siddiqui has a new home in Mumbai--a lavish bungalow--which the actor has named Nawab, in memory of his late father Nawabuddin Siddiqui. Earlier on Instagram, the 47-year-old actor had shared a glimpse of his new home with a sprawling garden and sun-kissed balconies bordering the bungalow.", 
      category: "BOLLYWOOD", 
      date: "/ JAN 31 2022"
    },
    { 
    id: "108", 
    image: " https://images.hindustantimes.com/img/2022/01/25/550x309/kartik_aaryan_1643102557220_1643102557371.png", 
    title: "Shehzada producers deny allegations of Kartik Aaryan threatening to walk out", 
    description: "Shehzada producers and director Rohit Dhawan defended Kartik Aaryan after producer Manish Shah, who has the rights to the Hindi-dubbed version of Ala Vaikunthapurramuloo, alleged that he threatened to walk out of the film if the Hindi-dubbed version of the Telugu hit is released in theatres.After producer Manish Shah, who has the rights to the Hindi-dubbed version of Ala Vaikunthapurramuloo, called Kartik Aaryan ‘extremely unprofessional’ and claimed that he opposed the release of the Hindi-dubbed version in theatres, the producers of Shehzada came to his defence. Kartik is playing the lead role in Shehzada, the Hindi remake of the Telugu hit Ala Vaikunthapurramuloo.", 
    category: "BOLLYWOOD", 
    date: "/ JAN 31 2022"
  },
  { 
    id: "109", 
    image: " https://images.hindustantimes.com/img/2022/01/27/550x309/Untitled_design_(83)_1643283616249_1643283628024.png", 
    title: "Javed reacts to row over Netaji's statue at India Gate: ‘Choice is not right’", 
    description: "PM Narendra Modi announced recently that a statue of Netaji Subhas Chandra Bose will be installed at India Gate. Lyricist Javed Akhtar has criticised the choice of the statue and has said “it is not right.Last week,  Prime Minister Narendra Modi’s unveiled a hologram statue of Netaji Subhas Chandra Bose, which will be installed near Delhi's India Gate. But lyricist Javed Akhtar has said that even though the idea to install Neta Ji's statue is fine, the ", 
    category: "BOLLYWOOD", 
      date: "/ JAN 31 2022"
  },
  { 
    id: "110", 
    image: " https://images.hindustantimes.com/img/2022/01/27/550x309/7adde1be-7e9a-11ec-93a3-bea8dbb6b540_1643258510733.jpg", 
    title: "Pankaj Tripathi: As a celebrity, it’s a duty to use my voice to uplift the underprivileged", 
    description: "Actor Pankaj Tripathi understands the power of his actions as a public figure, and wishes to use it well toeards a good cause. During his recent family holiday to his hometown in Bihar, the actor honoured a promise he had made to khadi artisans in a village of Gopalganj, on his last visit..The 45-year-old spent time with these artisans, heard their stories and extended support to their craft by buying their products.", 
    category: "BOLLYWOOD", 
    date: "/ JAN 31 2022"
  },
  { 
    id: "111", 
    image: "https://images.hindustantimes.com/img/2022/01/27/550x309/bceaac62-7e91-11ec-93a3-bea8dbb6b540_1643258150597.jpg ", 
    title: "Ajay Devgn: I don’t believe in cutting any slack for myself, Covid-19 compulsorily slowed us down", 
    description: "“The year 2022 looks super packed and super good because a host of things that were meant to happen in the previous year got pushed due to (Covid-19) lockdown and subsequent restrictions. I like to think I’m going to work every day. That’s all I ever want and wish for. I don’t believe in cutting any slack for myself because COVID-19 compulsorily slowed us down in the last two years. And that is precious time lost,” feels the 52-year-old.", 
    category: "BOLLYWOOD", 
    date: "/ JAN 31 2022"
  },
  { 
    id: "112", 
    image: "https://images.hindustantimes.com/img/2022/01/27/550x309/agneepath_1643256991841_1643257000443.jpg ", 
    title: "Hrithik on 10 years of Agneepath: The thought alone has me reliving the anxiety", 
    description: "Sharing glimpses of the film on Instagram, Hrithik wrote, “10 years already... The thought alone has me reliving the anxiety and towering responsibility I felt being a part of Agneepath remake. A big Thank you to everyone who gave a chance to my version of Vijay Dinanath Chauhan. My love to the talented Karan Malhotra, the wonderful team at Dharma under the guidance of Karan johar, my dearest Priyanka Chopra, Sanjay Dutt Sir and the brilliant cast + crew. Sharing screen with Rishi (Kapoor) uncle will always be a milestone in my career.”", 
    category: "BOLLYWOOD", 
    date: "/ JAN 31 2022"
  },
  { 
    id: "113", 
    image: "https://images.hindustantimes.com/img/2022/01/26/550x309/BobbyDeol_1643200734118_1643200748601.jpg ", 
    title: "When Bobby Deol recalled meeting Salman for the first time: ‘He was so cool’", 
    description: "Bobby Deol has often credited Salman Khan for his comeback in Bollywood. Bobby, who celebrates his 53rd birthday on Thursday, had once shared his experience of meeting Salman for the first time. Bobby and Salman have been contemporaries in Bollywood – while Salman became a superstar, Bobby was a star in the 90s, best known for films such as Soldier and Barsaat.", 
    category: "BOLLYWOOD", 
    date: "/ JAN 31 2022"
  },
  { 
    id: "114", 
    image: " https://images.hindustantimes.com/img/2022/01/26/550x309/salman-khan-spotted_1643164014064_1643164021527.jpg", 
    title: "Mobbed outside restaurant, Salman Khan walks away quietly; fans react. Watch", 
    description: "A paparazzo account shared a video of Salman as he calmly made his way to the car and took off. A fan reacted to the video and wrote, “Bhaijaan ki jhalak sabse alag (a glimpse of Salman is different from all),” while another wrote, “Bhai ka swag hai (Brother has swag).” Another one wrote: “Inki to baat hi alag hai (There's something about him).”", 
    category: "BOLLYWOOD", 
    date: "/ JAN 31 2022"
  },
  { 
    id: "115", 
    image: "https://images.hindustantimes.com/img/2022/01/25/550x309/Dharmendra_1643077809764_1643077809890.jpg", 
    title: "Dharmendra has the perfect reply for troll who wonders if the actor is mad", 
    description: "Dharmendra was his humble self as he responded to a Twitter user who wondered if the actor had gone crazy. The Bollywood star took the conversation to a philosophical level as he told the user that it is the craziness that has the potential to bring revolution in life. Dharmendra had shared a picture of the proposed granite statue of Netaji Subhash Chandra Bose at India Gate, and wrote on the late freedom fighter's birth anniversary, I salute you Neeta ji ….Zindgi hai qom ki ….tu Qom par lutaye ja (This life belongs to the community and must be sacrificed for the sake of the community)“ He also replied to his own tweet, Dharam, your belief, your faith in yourself has changed your life. Be yourself.",
    category: "BOLLYWOOD", 
    date: "/ JAN 31 2022"
  },
  
  { 
    id: "201", 
    image: "https://techcrunch.com/wp-content/uploads/2022/01/Screen-Shot-2022-01-27-at-9.52.52-PM.png?w=1390&crop=1 ", 
    title: "South Korea’s Naver Z launches $100M fund for metaverse creators", 
    description: "South Korean internet conglomerate Naver Group continues to ride the hottest internet trends targeting young users. It has been the name behind messaging giant Line and popular selfie app Snow. And now, it’s charging into the metaverse, the red hot concept that makes Roblox, Epic Games and other gaming giants the talk of the town", 
    category: "TECHNOLOGY", 
    date: "/ JAN 25 2022"
  },
  { 
    id: "202", 
    image: "https://techcrunch.com/wp-content/uploads/2014/05/8442476626_f74894c161_b.jpg?w=1390&crop=1 ", 
    title: "Bug bounty giant HackerOne lands $49M, thanks to cloud adoption boon", 
    description: "Bug bounty and penetration testing startup HackerOne has raised $49 million at Series E following a year of massive cloud adoption fueled by work-from-home orders The company — which mediates between hackers finding security issues and companies keen to fix them — said its recent growth was driven by a rise in zero-day vulnerabilities like the flaw in the ubiquitous open source logging platform Log4j, which put the internet on notice ahead of the December holiday. The number of cloud misconfigurations that can lead to exposed systems or user data doubled in the past year, the company said.", 
    category: "TECHNOLOGY", 
    date: "/ JAN 25 2022"

  },
  { 
    id: "203", 
    image: "https://techcrunch.com/wp-content/uploads/2021/09/GettyImages-1317958548.jpg?w=1390&crop=1  ", 
    title: "Propy launches NFT platform in the US, allowing real-world property to be bought as an NFT  ", 
    description: "Last year we covered how early blockchain startup Propy planned to use the technology to smooth real-world real estate sales by introducing the concept of smart contracts. It went on to actually sell an apartment as an NFT, using the NFT to effectively rubber stamps the legal process. However, that apart was in Ukraine. Today it launches the whole concept in the US, an entirely different kettle of legal fish.", 
    category: "TECHNOLOGY", 
    date: "/ JAN 25 2022"
  },
  { 
    id: "204", 
    image: "https://techcrunch.com/wp-content/uploads/2022/01/GettyImages-1350442887.jpg?w=1390&crop=1  ", 
    title: "As Finmark finds its footing, it moves up market and takes on additional investment", 
    description: "When Finmark founder Rami Essaid built a previous startup, he saw firsthand how hard it is to build accurate financial models. When he sold that startup, Distil Networks, to Imperva 2019, he decided to build a new company that could help Finmark, which launched in July 2020, helps companies build sophisticated financial models without having to use Excel. “We had a thesis around helping startups from pre-revenue to pre-IPO build out financial models and get out of Excel,” Essaid explained to me.", 
    category: "TECHNOLOGY", 
    date: "/ JAN 25 2022"
  },
  { 
    id: "205", 
    image: "https://techcrunch.com/wp-content/uploads/2022/01/FKGxkFBX0AEl75u.jpeg?w=1390&crop=1  ", 
    title: "Renault Nissan Mitsubishi Alliance confirms plans to build 35 new EVs by 2030’", 
    description: "The Renault Nissan Mitsubishi Alliance has announced plans to spend $25.8 billion (€23 billion) with the aim of having 35 EVs by 2030. As part of that, the group will develop five new platforms shared across brands with 80 percent common usage as part of a “smart differentiation” strategy. Nissan teased one of the first cars based on one those platforms, an all-electric compact that will be sold in Europe to replace the automaker’s popular Micra.", 
    category: "TECHNOLOGY", 
    date: "/ JAN 25 2022"
  },
  { 
    id: "206", 
    image: "https://techcrunch.com/wp-content/uploads/2016/10/gettyimages-595163150.png?w=1390&crop=1 ", 
    title: "Sigfox, the French IoT startup that had raised more than $300M, files for bankruptcy protection as it seeks a buyer", 
    description: "We are continuing to see fallout from the Covid-19 pandemic and its impact on the tech industry, with one of the latest developments coming out from France. Sigfox — a high-profile IoT startup that had raised over $300 million in venture funding and had ambitions to build a global communications network using a new approach to wireless networking — has filed for bankruptcy protection in France, citing slow sales of its products and challenging conditions in the IoT industry due to Covid-19.It said it would be using the process, which will initially last six months, to seek a buyer “to support Sigfox’s long-term development and propose to maintain jobs.” It will continue operations in the meantime: Sixfox says says its network spans 75 countries, stitching together capacity from 75 carriers, and that it connects 20 million objects and sends 80 million messages per day.", 
    category: "TECHNOLOGY", 
    date: "/ JAN 25 2022"
  },
  { 
      id: "207", 
      image: " https://techcrunch.com/wp-content/uploads/2022/01/Rocky-Road-Founders.jpg?w=1390&crop=1 ", 
      title: "After QuizUp and Trivia Royale, Thor Fridriksson’s next act is a mobile MMO", 
      description: "QuizUp founder Thor Fridriksson is at it again. The Icelandic serial entrepreneur is two-for-two in creating viral mobile games, but has thus far struck out in turning those into viable businesses. Today, he’s (kind of) coming out of stealth to announce his third attempt: Rocky Road. Rocky Road, named for Fridriksson’s entrepreneurial journey, is a casual open world mobile game. Yes, a casual MMO for mobile.Fridriksson isn’t getting into the weeds on the details of the game — launch is still about a year away — but one thing we do know is that it’s based on real-world map data", 
      category: "TECHNOLOGY", 
      date: "/ JAN 25 2022"
  },
  { 
      id: "208", 
      image: " https://techcrunch.com/wp-content/uploads/2020/07/GettyImages-519417096.jpg?w=1390&crop=1", 
      title: "WhatsApp quizzed over consumer protection concerns in EU", 
      description: "A complaint against WhatsApp’s updated T&Cs was filed by a number of EU-based consumer protection organizations back in July. It called out how aggressively the Facebook/Meta-owned messaging giant has been pushing the opaque terms on users, via “persistent, recurrent and intrusive notifications”, and (at least initially) giving people little time to consider what the changes might mean and whether they wanted to agree to them.", 
      category: "TECHNOLOGY", 
      date: "/ JAN 25 2022"
  },
  { 
      id: "209", 
      image: " https://techcrunch.com/wp-content/uploads/2022/01/PhotoPictureResizer_220127_142847496_crop_2400x1711.jpg?w=1390&crop=1", 
      title: "Esusu becomes unicorn with SoftBank Vision Fund 2-led $130M funding", 
      description: "More than 100 million Americans spend an average of $1,100 (over $1.4 trillion per year) on their largest monthly household spend: rent. But reports say 90% of these people don’t get credit for paying their rent on time. On a sub-level, over 45 million people in the U.S. don’t have credit scores, according to a 2020 report by the Consumer Financial Protection Bureau. Most of this demography are financially marginalized due to their background and race.", 
      category: "TECHNOLOGY", 
      date: "/ JAN 25 2022"
  },
  { 
      id: "210", 
      image: "https://techcrunch.com/wp-content/uploads/2022/01/censys.jpg?w=1390&crop=1 ", 
      title: "IoT search engine Censys secures $35M — and a new CEO", 
      description: "The internet security startup, based in Michigan tech hub Ann Arbor, which started as an open-source research project at the University of Michigan seven years ago, claims to provide a “complete database” of all devices hooked up to the internet in a bid to help organizations locate poorly protected assets. Censys’ attack surface management platform continuously discovers businesses’ internet assets and monitors them, identifying security issues and preventing oversights from becoming vulnerabilities by ensuring that assets are protected by integrating with existing security solutions. ", 
      category: "TECHNOLOGY", 
    date: "/ JAN 25 2022"
  },
  { 
      id: "211", 
      image: "https://cdn.vox-cdn.com/thumbor/nE5MjN3RNpLBqjUyjUTgApb4_e0=/0x0:1920x1080/920x613/filters:focal(807x387:1113x693):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70439280/0.0.png  ", 
      title: "Warner Music Group is launching a metaverse concert hall where you can pay to be its neighbor", 
      description: "Warner Music Group will open an outpost in virtual world The Sandbox, and it hopes music buffs will express their fandom by acquiring nearby property. In an announcement, WMG described its new home as a “combination of musical theme park and concert venue.” It will work with The Sandbox to host concerts and other “musical experiences.” But so far, it’s only discussed one specific event: a special sale of digital real estate called Land, which Sandbox users can buy “coveted” plots of in March. ", 
      category: "TECHNOLOGY", 
    date: "/ JAN 25 2022"
  },
  { 
      id: "212", 
      image: "https://www.howtogeek.com/wp-content/uploads/2020/12/Person-using-the-YouTube-app-on-a-smartphone-and-computer.jpeg?width=1198&trim=1,1&bg-color=000&pad=1,1 ", 
      title: "How to Speed Up YouTube’s Playback Speed (or Slow It Down)", 
      description: "YouTube’s playback speed feature doesn’t change the pitch of the video when you speed it up or slow it down. If it did, a person’s voice might sound like a squeaky mouse when fast or like a lumbering giant when slow. Instead, it compresses or expands the audio and video samples to maintain the same audio pitch during playback—so it really just sounds like the same person is talking faster or slower. Music will also play faster or slower without altering the musical key.", 
      category: "TECHNOLOGY", 
    date: "/ JAN 25 2022"
  },
  { 
      id: "213", 
      image: " https://www.howtogeek.com/wp-content/uploads/2021/12/powerful-personal-gaming-computer.jpg?width=1198&trim=1,1&bg-color=000&pad=1,1 ", 
      title: "3 Critical Stats Every PC Gamer Should Monitor", 
      description: "Unlike consoles and some pre-built PCs that are tested and re-tested, you won’t really know how well your PC works until you start using it. For that reason, it’s a good idea to understand if your PC is getting too hot, which can damage all those brand new parts. Plus, as time goes on components can degrade and perform worse over time. Keeping an eye on these three critical factors will keep your PC humming along, and alert you to when it’s time to fix something that’s gone wrong or replace a part.", 
      category: "TECHNOLOGY", 
    date: "/ JAN 25 2022"
  },
  { 
    id: "214", 
    image: "https://www.howtogeek.com/wp-content/uploads/2021/06/windows_11_basic_hero_6-1.jpg?width=1198&trim=1,1&bg-color=000&pad=1,1 ", 
    title: "How to Boot Into Safe Mode on Windows 11", 
    description: "With Windows 7 and earlier, you could typically start Safe Mode by pressing a function key (such as F8) just after turning on your PC. Microsoft removed this feature starting in Windows 8 because, thanks to new technologies, startup times became too fast for someone to quickly hit F8 in time before Windows loaded.How to Use Safe Mode to Fix Your Windows PC (and When You Should) Instead, Microsoft designed an “automatic failover” workaround for times when your PC malfunctions and Windows won’t load properly. Your PC will automatically enter an advanced startup troubleshooting mode if it fails to start twice in a row. You can force this by powering on the PC, and then pushing its physical power button just as you see the manufacturer’s logo appear. Do this twice, and you’ll see a “Choose an Option” advanced startup screen. Then, follow the directions described in the section below to enter Safe Mode.", 
    category: "TECHNOLOGY", 
    date: "/ JAN 25 2022"
  },
  { 
    id: "215", 
    image: "https://i.gadgets360cdn.com/large/xiaomi_12_pro_1643290337284.jpg?downsize=950:* ", 
    title: "Xiaomi 12 Pro Appears on US FCC, Geekbench, HTML5Test; Global Launch Expected Soon", 
    description: "iaomi 12 Pro has been reportedly spotted on the US' Federal Communications Commission (FCC) certification site. The Xiaomi device bearing the model number 2201122G is shown to support n5, n7, n38, n51, n66, n77, and n78 sub-6GHz 5G bands. The handset is tipped to be the global variant of the Xiaomi 12 Pro. It has previously surfaced on Geekbench and HTML5Test benchmark databases. The Xiaomi 12 lineup was officially released last year in China in late December. The Chinese tech giant is yet to reveal any details regarding the phone's global launch.", 
    category: "TECHNOLOGY", 
    date: "/ JAN 25 2022"
  },
 
  { 
  id: "301", 
  image: "https://images.hindustantimes.com/img/2022/01/27/550x309/spider_man_1643271601929_1643271602058.jpeg", 
  title: "Andrew, Tobey and Tom come together for their first interview after No Way Home", 
  description: "Spider-Man: No Way Home witnessed an epic crossover, featuring Tobey Maguire and Andrew Garfield's respective Peter Parkers, who joined forces with Tom Holland's Spider-Man.Over a month after the film's release, the three Spidey actors reunited for an interview and talked about experiencing a sense of ‘brotherhood’ in the movie. Tobey and Andrew also revealed their respective reasons behind joining Tom's latest Spider-Man movie. Tobey portrayed Spider-Man in three movies directed by Sam Raimi while Andrew played the web slinging superhero in Spidey films helmed by Marc Webb.", 
  category: "HOLLYWOOD", 
  date: "/ JAN 20 2022"
  },
  { 
  id: "302", 
  image: "https://images.hindustantimes.com/img/2022/01/25/550x309/63a7601a-7dcd-11ec-93a3-bea8dbb6b540_1643113994853.jpg  ", 
  title: "Post Rust incident, Sebastian Stan wants Hollywood to reassess gun protocols: I’m fine with rubber weapons", 
  description: "The star of films such as the Captain America franchise, Avengers series, The Last Full Measure (2019) and The 355, shares, “It is so unfortunate and tragic. It is the scariest thing in the world, because when you come to set it is supposed to be the safest possible place. That is what the intention is. I know from my experience from some of those action films, there was so much communication going on at all times between the actors in all action sequences. Whether we were holding props or weapon of any sort of just hand-to-hand combat, we were always careful about where is that going , where is that pointing , do we need that for this shot. Can we get away without it.”", 
  category: "HOLLYWOOD", 
  date: "/ JAN 20 2022"
  },
  { 
  id: "303", 
  image: "https://images.hindustantimes.com/img/2022/01/25/550x309/Tobey_1643100174365_1643100199998.jpg ", 
  title: "Instagram post hints Tobey will return as Spider-Man in Doctor Strange sequel", 
  description: "The Marvel Cinematic Universe introduced the concept of multiverse in its recent Phase 4 of films and series, showing variants of the same characters existing in other universes. Things came to a head in Spider-Man: No Way Home, which saw cameos from Tobey Maguire and Andrew Garfield, who had played Spider-Man in previous Sony films.", 
  category: "HOLLYWOOD", 
  date: "/ JAN 20 2022"
  },
  { 
  id: "304", 
  image: " https://images.hindustantimes.com/img/2022/01/22/550x309/Arnold_1642828181704_1642828206514.jpg ", 
  title: "Arnold Schwarzenegger involved in ‘bad’ car accident, escapes unhurt", 
  description: "“There was a four-vehicle traffic accident on Sunset and Allenford at 4:35 p.m. One vehicle on top of another...one female was transported to a local hospital with an abrasion,” Los Angeles Police Department Officer Drake Madison told Fox News Digital.Apparently, the former governor of California was inside of a Yukon that hit a red Toyota Prius, causing the SUV’s airbags to deploy. Several pictures from the scene went viral on the internet. The images show a number of cars with severe damage.", 
  category: "HOLLYWOOD", 
  date: "/ JAN 20 2022"
  },
  { 
  id: "305", 
  image: "https://images.hindustantimes.com/img/2022/01/24/550x309/Batman_1643031019052_1643031035190.jpeg", 
  title: "The Batman leaked clip shows Robert Pattinson save a child from speeding car", 
  description: "Robert Pattinson-starrer The Batman is inching closer to release. And even as the producers are releasing promotional material frequently, it is a leak that has caught the attention of fans. On Saturday evening, a leaked clip from the film surfaced on YouTube, giving fans the first long look at the new Bruce Wayne and his world.", 
  category: "HOLLYWOOD", 
  date: "/ JAN 20 2022"
  },
  { 
  id: "306", 
  image: "https://images.hindustantimes.com/img/2022/01/20/550x309/Robert_Pattinson_1642681700840_1642681719067.jpg ", 
  title: "Robert Pattinson says comment about not working out for The Batman was a joke", 
  description: "Robert Pattinson is all set to take over the mantle of Batman from Ben Affleck with his upcoming release, The Batman. The actor's casting in the iconic role wasn't without controversy with many fans unconvinced if the actor was the right fit for the role.", 
  category: "HOLLYWOOD", 
  date: "/ JAN 20 2022"
  },
  { 
  id: "307", 
  image: "https://images.hindustantimes.com/img/2022/01/18/550x309/Untitled_design_(28)_1642491689335_1642491700148.png  ", 
  title: "Joss Whedon denies threatening Gal Gadot on Justice League set. She reacts", 
  description: "Filmmaker Joss Whedon refuted actor Gal Gadot's allegations that he threatened her career, claiming that there was no conflict between Gal and him on the sets of Justice League. Joss has said that the controversy happened because of a misunderstanding due to language barrier.Joss, who directed Gal in the 2017 film Justice League, addressed her 2021 claims in a new interview with New York Magazine. Gal had, in a previous interview, said that he threatened my career and said that if I do something, he will make sure my career is miserable,reported People magazine.", 
  category: "HOLLYWOOD", 
  date: "/ JAN 20 2022"
  },
  { 
  id: "308", 
  image: "https://images.hindustantimes.com/img/2022/01/16/550x309/HT4_1642331065244_1642331078064.jpg ", 
  title: "Hotel Transylvania Transformania review: The sequel nobody needed or wanted", 
  description: "Let's face it. The Hotel Transylvannia series was never Shrek or Ice Age. It had half decent films, propped up by some amazing inventive animation and direction from a master - Genndy Tartakovsky. The star power of Adam Sandler helped as well. The fourth and final instalment of the series - Hotel Transylvania: Transformania - lacks both of these. And that, along with some unimaginative writing, makes the film the worst chapter of an already mediocre franchise.", 
  category: "HOLLYWOOD", 
  date: "/ JAN 20 2022"
  },
  { 
  id: "309", 
  image: "https://images.hindustantimes.com/img/2022/01/16/550x309/John_Cena_1642318500491_1642318518844.jpeg ", 
  title: "John Cena reveals he was rejected for these Marvel, DC superhero roles", 
  description: "Speaking to Josh Horowitz on The Happy Sad Confused podcast, John said, I can't tell you how many superhero roles Ive been rejected for. Shazam is certainly one. I think like a child, so Shazam was super interesting to me…And when I read the script, a lot of times, like… this is the thing, I don’t chase ‘I want to do this,’ I always have to read it. Shazam was eventually played by Zachary Levi.", 
  category: "HOLLYWOOD", 
  date: "/ JAN 20 2022"
  },
  { 
  id: "310", 
  image: "https://images.hindustantimes.com/img/2022/01/14/550x309/Chris_and_Robert_1642177518821_1642177536966.jpg ", 
  title: "Robert Downey Jr was jealous of Chris Hemsworth, reveals Jeremy Renners", 
  description: "This surprising revelation was made by their MCU co-star Jeremy Renner in a recent interaction, where he said Robert was jealous of Chris when he first met him. Jeremy played Hawkeye in the Marvel films and is currently headlining his own web series. It was in the 2012 film Avengers when these three--as well as Chris Evans, Mark Ruffalo, and Scarlett Johansson--came together.", 
  category: "HOLLYWOOD", 
  date: "/ JAN 20 2022"
  },
  { 
  id: "311", 
  image: "https://images.hindustantimes.com/img/2022/01/14/550x309/267698674_392490959334488_8978975498648809168_n_1642153824953_1642153839295.jpg", 
  title: "Nick Jonas' fans say ‘please don’t scare us' as he takes break from social media", 
  description: "Singer Nick Jonas tweeted about his ‘unintentional’ social media break. The tweet comes after Nick took a two-week break from Instagram and Twitter.On Friday, Nick tweeted, “Didn’t plan this way by any means, but I have (unintentionally) taken a break from social over the past two weeks to just be present… and it’s felt great. Hope you’ve all been doing really well. Much love.”", 
  category: "HOLLYWOOD", 
  date: "/ JAN 20 2022"
  },
  { 
  id: "312", 
  image: "https://images.hindustantimes.com/img/2022/01/14/550x309/MACBETH_movie_review_1642139782789_1642139782941.PNG  ", 
  title: "The Tragedy of Macbeth review: Shadows and star turns in Joel Coen’s bard noir", 
  description: "In no particular order, Joel Coen’s 105-minute The Tragedy of Macbeth--out on Apple TV+--reminded me of German expressionist films, film noir, gothic horror, Robert Rodriguez’s Sin City (2005), Orson Welles’ Macbeth adaptation from 1948, Denzel Washington’s performance in Training Day (2001), and Frances McDormand’s calculative and nervy roles in several Coen brothers’ films.", 
  category: "HOLLYWOOD", 
  date: "/ JAN 20 2022"
  },
  { 
  id: "313", 
  image: "https://images.hindustantimes.com/img/2022/01/10/550x309/Bill_Murray_1641793977998_1641793996499.jpg ", 
  title: "Bill Murray reveals he is playing a Marvel villain in Ant-Man 3", 
  description: "In October, Bill had accidentally revealed in an interview he had been cast in an undisclosed role in Marvel’s upcoming superhero film Ant-Man and the Wasp: Quantumania. Later on, when quizzed by talk show host Jimmy Kimmel about his role in the film, he simply said, “I am not at liberty to talk about it.” Even the film’s star Paul Rudd did not deny the news, but did not confirm it either.", 
  category: "HOLLYWOOD", 
  date: "/ JAN 20 2022"
  },
  { 
  id: "314", 
  image: "https://images.hindustantimes.com/img/2022/01/09/550x309/Keanu_1641705243888_1641705262095.jpg ", 
  title: "Keanu flies family and staff on private jet to Matrix Resurrections premiere", 
  description: "As per a recent report, Keanu took all his reps--including managers, publicists-- as well members of his inner circle and even stunt performers, make-up artistes and trainers to the film’s world premiere in San Francisco last month. Keanu took care of their travel via private jet, accommodation at a hotel and tickets for the premiere. He even arranged a special post-premiere brunch for his invitees as part of the whole experience.", 
  category: "HOLLYWOOD", 
  date: "/ JAN 20 2022"
  },
  { 
    id: "315", 
    image: "https://images.hindustantimes.com/img/2022/01/10/550x309/golden_globes_1641778980442_1641778987626.png", 
    title: "'We're not going to see much': Golden Globes to be star-less ceremony", 
    description: "The Globes -- in the past billed as Tinseltown's biggest party and the key first stop on the film awards circuit -- have this year been stripped of their usual A-list glamour, as a row swirls over organisers' ethical practices.NBC has scrapped its TV broadcast, and instead the Hollywood Foreign Press Association -- whose members vote on the Globes -- will announce the winners on social media from 6:00 pm (0200 GMT Monday).", 
    category: "HOLLYWOOD", 
    date: "/ JAN 20 2022"
  },
  { 
      id: "401", 
      image: "https://images.indianexpress.com/2022/01/amad-diallo.jpg", 
      title: "Man United sends teenage winger Amad Diallo on loan to Rangers", 
      description: "We independently selected these deals and products because we love them, and we think you might like them at these prices. E! has affiliate relationships, so we may get a commission if you...", 
      category: "SPORTS", 
      date: "/ JAN 15 2022"
  },
  { 
      id: "402", 
      image: "https://images.indianexpress.com/2022/01/shakib-al-hasan.jpg  ", 
      title: "Shakib Al Hasan joins the trend, mimics Allu Arjun after snaring Faf du Plessis", 
      description: "Movie star Allu Arjun has become a popular figure in the ongoing edition of the Bangladesh Premier League (BPL). Ever since his film Pushpa: The Rise, has released, it has become a trendsetter with many cricketers imitating his dance step including the likes of Hardik Pandya and David Warner.Even Bangladeshi players like Nazmul Islam Apu and West Indian allrounder Dwayne Bravo have joined the bandwagon emulating the Telugu superstar. Now, Shakib Al Hasan showed his skills as well after dismissing former South African skipper Faf du Plessis during a league match between Comilla Victorians and Fortune Barishal.",
      category: "SPORTS", 
      date: "/ JAN 15 2022"
  },
  { 
      id: "403", 
      image: " https://images.indianexpress.com/2022/01/icc-1200.jpg", 
      title: "ICC unveils NFT in partnership with ‘FanCraze’", 
      description: "The International Cricket Council on Thursday released ‘ICC Crictos’, the official range of digital (NFT) collectibles, in partnership with FanCraCrictos enables fans to collect and trade their own slice of cricket history from a range of ICC events.Featuring 75 unforgettable moments from the 2015 and 2019 editions of the ICC Men’s Cricket World Cup, fans can start their Crictos collection with one of three packs: a Base Pack, a Booster Pack and a Hotshots Pack.",
      category: "SPORTS", 
      date: "/ JAN 15 2022"
  },
  { 
    id: "404", 
    image: "https://images.indianexpress.com/2022/01/Nick-2.jpg", 
    title: "Watch: Krygios smashes racquet, makes rude gesture at Australian Open crowd", 
    description: "Nick Kyrgios made sure he lived up to his bad boy image on Thursday when he smashed a racquet and made a rude gesture at the crowd as he and partner Thanasi Kokkinakis beat the pair of Horacio Zeballos and Marcel Granollers 7-6 (7/4), 6-4. They will now face fellow Australians Matt Ebden and Max Purcell in the final match.Kyrgios complained about the net cord machine, then pulled out of a service motion at 4-2 in the first set. He also said that the Rod Laver Arena crowd were yelling in between the first and second serves. He flipped a finger at one section of the crowd, threw a ball against a wall and smashed his racquet.", 
    category: "SPORTS", 
      date: "/ JAN 15 2022"
  },
  { 
      id: "405", 
      image: "https://images.indianexpress.com/2016/05/justin-langer_ap-fb.jpg", 
      title: "Justin Langer inducted into Australian cricket Hall of Fame, Raelee Thompson too honoured", 
      description: "Former opener and head coach of the senior men’s side, Justin Langer has been inducted into the Australian Cricket Hall of Fame alongside Raelee Thompson, one of the pioneers of the women’s game in the country.During his successful career as a player, Langer had formed a formidable pairing with Matthew Hayden in Test cricket, playing a key role in Australia’s dominance in the early and mid 2000s.",
      category: "SPORTS", 
      date: "/ JAN 15 2022"
  },
  { 
    id: "406", 
    image: "https://images.indianexpress.com/2022/01/Malvika-Bansod-2.jpg", 
    title: "Malvika Bansod defeats Tasnim Mir, cruises to quarterfinals of Odisha Opent", 
    description: "Bansod, who had lost to PV Sindhu in the final of the Syed Modi International last week before defeating her idol Saina Nehwal at the India Open earlier this month, will take on the winner of the second clash between Tanya Hemanth and Vijetha Harish.Continuing her good run of form, young Indian shuttler Malvika Bansod got the better of compatriot and junior world No. 1 Tasnim Mir in straight games to advance to the quarterfinals of the Odisha Open on Thursday.", 
    category: "SPORTS", 
    date: "/ JAN 15 2022"
  },
  { 
  id: "407", 
  image: " https://images.indianexpress.com/2016/07/brettleepti-fvb.jpg", 
  title: "Pacers should play each and every game, don’t like them rested: Brett Lee", 
  description: "Former Australia pacer Brett Lee is against the whole concept of workload management for fast bowlers, something that has become a trend amid a packed international calendar.Besides the hectic schedule, bubble life amid the COVID-19 pandemic has also taken a toll on cricketers, forcing them to switch off from the game.“I’m against the whole resting rule. I don’t like bowlers resting, I like bowlers to play each and every single game,” Lee told PTI in an exclusive interaction on the sidelines of the Legends League Cricket here.", 
  category: "SPORTS", 
  date: "/ JAN 15 2022"
  },
  { 
  id: "408", 
  image: " https://images.indianexpress.com/2022/01/Untitled-design-2022-01-27T123302.494.jpg ", 
  title: "England first team to reach U-19 World Cup semifinals", 
  description: "George Thomas was a delighted onlooker at the non-striker's end only moving into double figures in the tenth over, before smacking a six to bring up England's hundred.U-19 World Cup, england, U-19 World Cup england, england U-19 World Cup, sports news, indian expressEngland advance to the semi-finals of the ICC U-19 World Cup with a six-wicket win over South Africa.(Twitter/England Cricket)Jacob Bethell’s blistering batting display helped England advance to the semi-finals of the ICC U-19 World Cup with a six-wicket win over South Africa. Bethell was one of the bowlers to restrict South Africa to 209 all out before hitting 88 to see England set up a clash with either Sri Lanka or Afghanistan.", 
  category: "SPORTS", 
  date: "/ JAN 15 2022"
  },
  { 
  id: "409", 
  image: " https://images.indianexpress.com/2022/01/india-odis.jpg", 
  title: "India vs West Indies series squad selection: Wrist spinners back in business", 
  description: "India’s limited-overs squad selection for the upcoming home assignments against the West Indies marked the return of an old template, wrist-spin taking centre-stage again. After a long hiatus, Kuldeep Yadav is back to the 50-over fold to pair up with Yuzvendra Chahal, while Ravichandran Ashwin hasn’t been included either in the ODI squad or for the T20Is. India will play three ODIs and as many T20Is against the West Indies, in Ahmedabad and Kolkata respectively, starting from February 6. Rohit Sharma has recovered from his hamstring injury to lead India in the series.", 
  category: "SPORTS", 
  date: "/ JAN 15 2022"
  },
  { 
  id: "410", 
  image: "https://images.indianexpress.com/2022/01/Medvedev-4.jpg", 
  title: "‘I asked myself what would Novak do’: Medvedev booed by crowd after Djokovic comment", 
  description: "Top seed Daniil Medvedev battled back from two sets down and saved a match point against Canada’s Felix Auger-Aliassime to reach the Australian Open semi-finals with a 6-7(4) 3-6 7-6(2) 7-5 6-4 victory on Wednesday.Medvedev had his back firmly up against the wall for much of an absorbing contest as Auger-Aliassime produced some stunning tennis at the Rod Laver Arena. But he simply refused to lie down as he overturned a two-set deficit for only the second time in his career to set up a Friday semi-final against Greek Stefanos Tsitsipas.", 
  category: "SPORTS", 
  date: "/ JAN 15 2022"
  },
  { 
  id: "411", 
  image: "https://images.indianexpress.com/2022/01/Qatar-WC.jpg ", 
  title: "What’s at stake as World Cup qualifying resumes", 
  description: "The eight stadiums are ready in Qatar and World Cup tickets have been on sale for a week. Now the mission to snap up remaining tournament slots resumes.With qualifying disrupted by the pandemic, fixtures have been squeezed in over the next week or so for teams in the Americas and Asia.It means Europe’s top leagues having to take a mid-season break even though the continent’s national teams aren’t playing next until March, when the World Cup playoffs are staged as scheduled.", 
  category: "SPORTS", 
  date: "/ JAN 15 2022"
  },
  { 
  id: "412", 
  image: "https://images.indianexpress.com/2022/01/Chappell-Dhoni.jpg ", 
  title: "MS Dhoni is one of the sharpest cricket minds I have encountered: Greg Chappell", 
  description: "Australian great Greg Chappell has rated former India captain Mahendra Singh Dhoni as “one of the sharpest cricket minds”, saying his decision-making skills set him apart from his great contemporaries.Chappell, who had a tumultuous two-year tenure as India’s chief coach from 2005 to 2007, had often spoken highly of the two-time World Cup-winning captain who ended his glorious career as one of the country’s greatest players.",
  category: "SPORTS", 
  date: "/ JAN 15 2022"
  },
  { 
  id: "413", 
  image: " https://images.indianexpress.com/2021/12/Rohit-Sharma-and-Virat-Kohli.jpg", 
  title: "ICC men’s ODI rankings: Kohli retains 2nd spot in ICC batting rankings, Rohit remains at 3rd", 
  description: "India stalwart Virat Kohli retained his second spot in the ICC men’s ODI batting rankings on the back of his decent performance in the recently-concluded South Africa series.Kohli, who stepped down from the Indian team Test captaincy after the away series against South Africa, scored 116 runs in the three-match ODI rubber against the Proteas, including two half-centuries.", 
  category: "SPORTS", 
  date: "/ JAN 15 2022"
  },
  { 
  id: "414", 
  image: "https://images.indianexpress.com/2022/01/tsitsipas.jpg", 
  title: "Stefanos Tsitsipas advances to last four of the Australian Open", 
  description: "Stefanos Tsitsipas maintained his perfect record in Grand Slam quarterfinals, beating No. 11-seeded Jannick Sinner 6-3, 6-4, 6-2 Wednesday to reach the last four of the Australian Open.The 23-year-old, No. 4-ranked Tsitsipas improved to 5-0 at this stage of a major. It’s the semifinals he’s yet to master, winning just one — at Roland Garros last year — from four so far.", 
  category: "SPORTS", 
  date: "/ JAN 15 2022"
  },
  { 
  id: "415", 
  image: "https://images.indianexpress.com/2021/12/cummins-australia.jpg ", 
  title: "Australian cricketers nervous about Pakistan tour: report", 
  description: "Australian cricketers are on edge barely a month before their first tour of Pakistan in 24 years, amid an uptick in terror attacks in the Asian nation, the Sydney Morning Herald reported on Wednesday.”We’re all toey about it,” a source close to the team told the newspaper, using an informal Australian term for being anxious or worried.",
  category: "SPORTS", 
  date: "/ JAN 15 2022"
  },
  { 
  id: "501", 
  image: "https://c.ndtvimg.com/2019-05/kluidolg_sweets_625x300_09_May_19.jpg  ", 
  title: "Best Khoya Recipe | Easy Mawa Recipe", 
  description: "Indian sweets aren't just about the sweetness; it is also about the delicate mix of nuts, milk and ghee that churn out the irresistible flavours. These flavours are actually what khoya is all about, a magic ingredients that can turn around not just desserts but even savouries. Also known as mawa, khoya is the ultimate, solid, thickened milk used extensively in preparing a variety of dishes not only in India but across Pakistan, Nepal, Bangladesh and Sri Lanka.", 
  category: "FOOD", 
  date: "/ JAN 10 2022"
  },
  { 
  id: "502", 
  image: "https://c.ndtvimg.com/2021-06/kvfe6hsg_seekh-kebab_625x300_11_June_21.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350 ", 
  title: "Seekh Kebab Recipe That Will Surely Make You Drool", 
  description: "There's something extraordinary about kebabs that can't be put in mere words. Every bite of this Mughal treat offers indulgence and satisfaction to the taste buds as well as appetite. The mushy and melt in mouth texture, soothing aroma, crunchy veggies, juicy meat, or chicken make us fall in love with kebabs time and again. Generally, kebabs are made with meat along with a pool of spices. However, with emerging experiments and re-inventions in the culinary world, kebab now is made with several ingredients; for instance, paneer, soya, mixed veg, chicken and more. If you are a fan of kebabs (just like us), then we have something that may wow you.", 
  category: "FOOD", 
  date: "/ JAN 10 2022"
  },
  { 
  id: "503", 
  image: "https://c.ndtvimg.com/2021-11/8dmk5frg_kerala-egg-curry_625x300_19_November_21.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350", 
  title: "Dim'er Kalia Recipe: Make A Quick And Comforting Bengali Egg Curry For Weekday Meal Spread", 
  description: "The Bengali cuisine is a delicious medley of simple and fiery flavours. Those rich and robust dishes are teeming with homemade masalas and seasoned with the most commonly found spices, but yet, manage to tingle our taste buds every single time. From the succulent and juicy Kosha mangsho to the ever-famous Bengali Maach-bhaat combo, the cuisine of West Bengal loves its non-vegetarian dishes to a great extent. However, if you thought the Bengali spread was all about the fish or mutton, you will be surprised to know that egg curries in Bengali cuisine taste just as decadent as any other delicacy. One such popular egg dish is Dim'er Kalia, The dish is a sweet and spicy explosion of flavours that can be enjoyed for a comforting weekday spread.", 
  category: "FOOD", 
  date: "/ JAN 10 2022"
  },
  { 
  id: "504", 
  image: "https://c.ndtvimg.com/2021-02/9uhvq73o_poori_625x300_18_February_21.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350", 
  title: "Puri Bhaji Recipe: The Ultimate Desi Comfort Food For A Quick And Easy Dinner", 
  description: "After A long and tiring day, all we crave is something wholesome and delicious that would uplift our mood and put a smile on our faces. We don't want something elaborate, just something quick that can be easily whipped in minutes. What we desire is comfort food! A bowl full of steaming hot rajma chawal, or a wholesome plate of roti sabzi, these scrumptious combinations makes for the perfect meal after work. Another such delicious combination is the puri bhaji. Just thinking about crispy and fluffy puris dipped in spicy, hot bhaji reminds us of carefree days, making it the ultimate comfort food for all occasions! Make this desi combination to sate your cravings.", 
  category: "FOOD", 
  date: "/ JAN 10 2022"
  },
  { 
    id: "505", 
    image: " https://c.ndtvimg.com/2020-07/jgc0hg78_noodles-cooking_625x300_10_July_20.jpg ", 
    title: "Quick And Easy Noodles Recipe: Make Chilli Garlic Veg Noodles In Just 20 Min", 
    description: "Are you a vegetarian and end up making the same kind of noodles with the same bunch of veggies every single time? You are not alone. Veg noodles are made in the similar fashion all over the country with no or little variation. Unlike, non-veg chowmein recipes, we can't really experiment much by adding different meats (veggies in this case) with different flavours and textures, requiring different spices. To add some excitement to your veg chowmein, here is a unique and easy recipe of chilli garlic noodles that will let you enjoy noodles in a whole new avatar. Also, these noodles are pretty quick to make, so this can be your go-to recipe for an instant noodles meal to satiate sudden cravings.", 
    category: "FOOD", 
  date: "/ JAN 10 2022"
  },
  { 
    id: "506", 
    image: " https://c.ndtvimg.com/2020-12/rthfdlso_kebab_625x300_29_December_20.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350", 
    title: "How To Make Pahadi Kebab: A Juicy And Flavourful Kebab Recipe That You Must Try", 
    description: "If you have ever been to the pristine mountain ranges of Himachal Pradesh or Uttarakhand, you will agree that you are bound to fall in love with the breath-taking views, alluring landscapes and the adorable people of the hills. Commonly referred to as 'Pahad' in Hindi, these trips to the mountains are never complete without tasting some fiery and delicious 'Pahadi' food to warm you up from within. And no, we are not talking about the overhyped 'Pahado ki maggi'; instead what will get you hooked about this raw and mystic cuisine is the simpler and more homely dishes.", 
    category: "FOOD", 
  date: "/ JAN 10 2022"
  },
  { 
    id: "507", 
    image: " https://c.ndtvimg.com/2020-06/49iajf7g_mattar-paneer_625x300_17_June_20.jpg ", 
    title: "Chef-Special Paneer Recipe: How To Make Creamy And Delicious Mattar Paneer", 
    description: "Mattar Paneer is one classic, evergreen recipe which never goes out of style. Soft, moist cottage cheese cubes with freshly shelled peas in an onion-tomato gravy - no vegetarian recipe comes close to this delicious preparation. The fact that its recipe is also a no-brainer makes this a win-win situation. But have you ever wondered what exactly goes into the making of a mattar paneer recipe at a restaurant? What are the specific methods and the exact ingredients that chefs use to make the recipe a stellar one? Well, we have the answer to your question through this mind-blowing preparation of Mattar Paneer.  ", 
    category: "FOOD", 
    date: "/ JAN 10 2022"
  },
  { 
    id: "508", 
    image: "https://images.everydayhealth.com/images/healthier-cinnamon-roll-alternative-recipe-1440x810.jpg?w=1110 ", 
    title: "A Cinnamon Bun Inspired Apple Bread Pudding Recipe", 
    description: "If you’ve ever been to a shopping mall, you know the irresistible pull of freshly baked cinnamon rolls. And maybe their mouthwatering scent has compelled you to sink your teeth into one in the past. If so, that’s not necessarily a bad thing: Dessert — in moderation and occasionally — can be a part of a healthy self-care routine. But when it comes to this particular treat, registered dietitians would agree it’s not an everyday thing, and anyone who likes cinnamon buns needs to be clear-eyed about the nutritional cost involved. ", 
    category: "FOOD", 
  date: "/ JAN 10 2022"
  },
  { 
    id: "509", 
    image: "https://images.everydayhealth.com/images/diet-nutrition/healthy-recipes/chocolate-pumpkin-football-brownies-722x406.jpg?w=1110  ", 
    title: "Chocolate Pumpkin Football Brownies", 
    description: "Preheat the oven to 350  Make the icing: Mix together nondairy yogurt with powdered sugar in a small bowl. Transfer to a pastry bag with a thin tip or a zipper-top sandwich bag. Place in refrigerator Lightly coat a 9-inch square baking dish with coconut oil spray and set aside Whisk together flour, cocoa powder, baking powder, pumpkin pie spice, and salt in a medium bowl. Set aside Combine almond milk, pumpkin purée, vanilla extract, oil, and egg in large bowl using an electric mixer. Add brown sugar and beat until smooth. Add dry ingredients to wet ingredients and beat well to combine In a small bowl, combine the baking soda and apple cider vinegar. When the mixture fizzes, use a spatula to stir into the brownie batter. Gently fold in the chocolate chips. Scrape batter into the prepared baking dish, and smooth the  ", 
    category: "FOOD", 
  date: "/ JAN 10 2022"
  },
  { 
    id: "510", 
    image: "https://images.indianexpress.com/2022/01/pizza-pexels.jpg  ", 
    title: "Here’s the perfect recipe for ‘2 ingredient dough pizza’", 
    description: "Pizzas are an emotion; they can fix any bad day. The dish, which is originally from Italy, is extremely popular in India with many brands, home chefs and cafes serving up their version of Neapolitan or New York-style preparations.As such, would you like to try an easy recipe to make pizza at home tonight? Made with only 2 ingredients, Chef Guntas’ recipe doesn’t require “fancy ingredients, yeast or proofing downtime.”", 
    category: "FOOD", 
  date: "/ JAN 10 2022"
  },
  { 
    id: "511", 
    image: "https://images.indianexpress.com/2022/01/Tricolour-Dips.jpg ", 
    title: "This Republic Day, try these vegan tricolour dips", 
    description: "I have often seen people giving up their millet journey midway, thinking it’s not meant for them. Little do they understand that by adding a few interesting dips and playing with a few ingredients, they can make a boring millet meal interesting. If your health condition has compelled you to go gluten-free, it is your choice as to how you can make it fun.You don’t have to rely on any processed sauces or commercial ingredients to make millets work for you. This Republic Day, make sure you use seasonal ingredients and churn out something interesting and tasty for your loved ones.", 
    category: "FOOD", 
    date: "/ JAN 10 2022"
  },
  { 
    id: "512", 
    image: " https://images.indianexpress.com/2022/01/Gajar-Ka-Halwa_1200.jpeg", 
    title: "Desi, healthy winter desserts to keep you warm this January", 
    description: "Festival time in India is synonymous with good food, and desserts top the list of most-favourite foods. As we celebrate one festival after another, it is important to be mindful of our diet as well, as binge-eating can lead to health issues, and worsen existing health conditions for some.If you are craving something sweet this season, dietitian Vidhi Chawla has a healthy solution. She shares recipes for some desi, healthy winter desserts that can increase body heat and make you feel comfortable. Read on.", 
    category: "FOOD", 
  date: "/ JAN 10 2022"
  },
  { 
    id: "513", 
    image: "https://images.indianexpress.com/2022/01/cake.jpg ", 
    title: "Here’s a cake that complies with your weight loss resolutions; recipe inside", 
    description: "The year, click the ‘reset’ button, reassess your habits, lifestyle, and health. Most people have taken up weight loss goals to not only shed some pounds gained during the holidays, but also come a little closer to their fitness goals.But, sustaining it requires mindfulness as opposed to an adrenaline-fueled resolve that is most likely to crash in a few days. One of the easiest ways to keep yourself on track with your weight loss goals is to practise discipline as well as give in to the occassional cravings. And since sweet cravings are one of the biggest vices for many, there is a way to satiate yourself while also ensuring you don’t stray from your goal. This recipe is one such way.", 
    category: "FOOD", 
    date: "/ JAN 10 2022"
  },
  { 
    id: "514", 
    image: "https://images.indianexpress.com/2021/12/vegetables-pexels.jpg ", 
    title: "Winter special recipes: Try these two lip-smacking vegetarian dishes", 
    description: "Pickles are a staple in every Indian household and can be added to any basic meal to instantly elevate its taste. The humble ‘achaar’, not only adds a tart taste to food but is also filled with health benefits such as vitamin K, vitamin A  and probiotic bacteria, depending upon the ingredients used and the amount of time it was left alone.", 
    category: "FOOD", 
    date: "/ JAN 10 2022"
  },
  { 
    id: "515", 
    image: " https://images.indianexpress.com/2022/01/seeds-pexels.jpg ", 
    title: "Seed mix: The quick and easy health tip when you don’t have the time", 
    description: "Come winter, our grandmothers always advised us to up our intake of nuts and seeds with generous amounts of jaggery and hot spices. This being an age old Ayurvedic recipe for seasonal health, one would be wise to follow it.Seeds are a quick and easy addition for today’s work day life, where time is at a premium. Fitness influencer and nutritionist, Juhi Kapoor brings us this uncomplicated seed mix recipe which can be stored and added to breakfast oats, dips, or eaten on their own.", 
    category: "FOOD", 
  date: "/ JAN 10 2022"
  }
  ]);
  return (
    <ContextAPI.Provider value={[rows]}>
      {props.children}
    </ContextAPI.Provider>
  );
};
