// Unique per-city content for service-location SEO pages.
// Har city ka intro, industries aur areas genuinely alag hai — yahi data
// service templates ke saath mil kar har page ko unique banata hai.

export interface LocationContent {
  slug: string;
  /** Unique 2–3 sentence business-landscape intro for the city */
  intro: string;
  /** Key industries / business sectors of the city */
  industries: string[];
  /** Prominent business areas & localities (local SEO signals) */
  areas: string[];
}

export const locationContent: LocationContent[] = [
  {
    slug: 'delhi',
    intro:
      'Delhi is where India\'s biggest wholesale markets meet its newest startups. From the trading lanes of Chandni Chowk and Karol Bagh to the IT corridors of Nehru Place and the corporate offices of Connaught Place, the capital runs on businesses that compete hard for every customer — and increasingly, that competition starts with a Google search.',
    industries: ['wholesale and retail trade', 'IT and software services', 'education and coaching', 'healthcare', 'real estate', 'export houses'],
    areas: ['Connaught Place', 'Nehru Place', 'Karol Bagh', 'Lajpat Nagar', 'Okhla Industrial Area', 'Dwarka', 'Rohini', 'Saket'],
  },
  {
    slug: 'mumbai',
    intro:
      'Mumbai is India\'s financial capital, and its business culture shows it — everything moves fast, from the corporate towers of BKC and Lower Parel to the thousands of SMEs packed into Andheri and the trading houses of Fort. In a city where office rent is measured per square foot per month, a strong digital presence is often the most cost-effective real estate a business can own.',
    industries: ['finance and fintech', 'media and entertainment', 'real estate', 'retail', 'logistics and shipping', 'pharmaceuticals'],
    areas: ['Andheri', 'Bandra-Kurla Complex', 'Lower Parel', 'Powai', 'Borivali', 'Dadar', 'Goregaon', 'Malad'],
  },
  {
    slug: 'bangalore',
    intro:
      'Bangalore sets the pace for digital India. The city that houses Koramangala\'s startups, Whitefield\'s tech parks and Electronic City\'s IT giants also runs a massive traditional economy — garment factories, aerospace suppliers and one of India\'s densest education markets. Customers here are the most digitally demanding in the country, and they judge a business by its website within seconds.',
    industries: ['IT and SaaS', 'startups', 'biotechnology', 'aerospace and defence', 'garment manufacturing', 'education'],
    areas: ['Koramangala', 'Indiranagar', 'Whitefield', 'Electronic City', 'HSR Layout', 'Jayanagar', 'Marathahalli', 'MG Road'],
  },
  {
    slug: 'hyderabad',
    intro:
      'Hyderabad balances two economies with ease — the global tech campuses of HITEC City and Gachibowli on one side, and the centuries-old trading tradition of the old city\'s pearl and bangle markets on the other. Add India\'s largest pharma cluster and Genome Valley\'s biotech corridor, and you get a city where businesses of every size are moving their customer acquisition online.',
    industries: ['IT services', 'pharmaceuticals', 'biotechnology', 'real estate', 'jewellery and retail', 'food processing'],
    areas: ['HITEC City', 'Gachibowli', 'Madhapur', 'Banjara Hills', 'Jubilee Hills', 'Secunderabad', 'Kukatpally', 'Ameerpet'],
  },
  {
    slug: 'chennai',
    intro:
      'Chennai is the Detroit of India — its automobile belt in Ambattur and Sriperumbudur feeds global carmakers — but it is equally a powerhouse in healthcare, IT along the OMR corridor, and the retail energy of T. Nagar, one of the highest-turnover shopping districts in Asia. Businesses here are famously value-conscious, which makes results-driven digital work an easy sell and hype a hard one.',
    industries: ['automobile manufacturing', 'IT services', 'healthcare', 'textiles and leather exports', 'port logistics', 'education'],
    areas: ['OMR', 'T. Nagar', 'Guindy', 'Ambattur', 'Anna Nagar', 'Velachery', 'Nungambakkam', 'Porur'],
  },
  {
    slug: 'kolkata',
    intro:
      'Kolkata\'s commercial heart still beats in Burrabazar, one of Asia\'s largest wholesale markets, while Salt Lake Sector V and New Town have grown into the east\'s biggest IT hub. The city\'s businesses — from heritage tea and jute houses to new-age D2C brands — share a common shift: customers who once came through decades-old relationships now arrive through search engines and social media.',
    industries: ['trading and distribution', 'tea and jute', 'IT services', 'education', 'healthcare', 'leather exports'],
    areas: ['Salt Lake Sector V', 'Park Street', 'Burrabazar', 'New Town Rajarhat', 'Ballygunge', 'Behala', 'Dalhousie', 'Gariahat'],
  },
  {
    slug: 'pune',
    intro:
      'Pune runs three strong engines at once — the IT parks of Hinjewadi and Kharadi, the auto and engineering belt of Pimpri-Chinchwad and Chakan, and an education ecosystem that earns it the "Oxford of the East" tag. The result is a young, digitally fluent customer base and a business community that expects modern, professional online experiences as the default.',
    industries: ['IT and software', 'automobile and engineering', 'education', 'real estate', 'manufacturing', 'startups'],
    areas: ['Hinjewadi', 'Kharadi', 'Baner', 'Viman Nagar', 'Pimpri-Chinchwad', 'Kothrud', 'Hadapsar', 'Shivajinagar'],
  },
  {
    slug: 'ahmedabad',
    intro:
      'Ahmedabad\'s entrepreneurial DNA is unmistakable — the city that built India\'s textile industry now leads in pharmaceuticals, chemicals and ceramics trading, with the SG Highway corridor turning into a gleaming commercial spine. Gujarati businesses are famously quick to adopt anything that improves margins, and digital-first selling has become exactly that.',
    industries: ['textiles and apparel', 'pharmaceuticals', 'chemicals and dyes', 'ceramics trading', 'real estate', 'finance'],
    areas: ['SG Highway', 'CG Road', 'Prahlad Nagar', 'Maninagar', 'Naroda', 'Vastrapur', 'Satellite', 'Bopal'],
  },
  {
    slug: 'jaipur',
    intro:
      'Jaipur\'s economy sparkles quite literally — the city is a global hub for gems and jewellery, while Sanganer\'s block prints, the handicraft exports of Sitapura and a booming tourism trade round out a business landscape built on craft and hospitality. Increasingly, Jaipur\'s exporters and retailers are discovering that a strong online presence reaches buyers that trade fairs never could.',
    industries: ['gems and jewellery', 'tourism and hospitality', 'handicrafts and textiles', 'education', 'real estate', 'IT startups'],
    areas: ['MI Road', 'C-Scheme', 'Malviya Nagar', 'Vaishali Nagar', 'Sitapura Industrial Area', 'Johari Bazaar', 'Mansarovar', 'Tonk Road'],
  },
  {
    slug: 'lucknow',
    intro:
      'Lucknow blends nawabi heritage with a fast-modernising economy — Chikankari exporters in Chowk, a swelling government and services sector, and Gomti Nagar\'s emergence as the city\'s new commercial address. As the capital of India\'s most populous state, it offers businesses an enormous local market that is rapidly coming online.',
    industries: ['chikankari and handicrafts', 'government services', 'education', 'healthcare', 'real estate', 'food and hospitality'],
    areas: ['Hazratganj', 'Gomti Nagar', 'Aliganj', 'Indira Nagar', 'Chowk', 'Alambagh', 'Aminabad', 'Vibhuti Khand'],
  },
  {
    slug: 'noida',
    intro:
      'Noida has grown from a Delhi suburb into a digital economy of its own — home to major IT and BPO campuses in Sectors 62 and 63, the media hub of Film City, and one of India\'s largest electronics manufacturing clusters along the Expressway. Businesses here operate in one of the country\'s most competitive online markets, where page-one visibility directly decides revenue.',
    industries: ['IT and BPO', 'electronics manufacturing', 'media and broadcasting', 'e-commerce', 'real estate', 'apparel exports'],
    areas: ['Sector 62', 'Sector 63', 'Sector 18', 'Noida Expressway', 'Sector 125', 'Film City Sector 16A', 'Sector 135', 'Greater Noida'],
  },
  {
    slug: 'gurgaon',
    intro:
      'Gurgaon is corporate India\'s showcase — Cyber City and Golf Course Road host Fortune 500 offices, Udyog Vihar runs a dense startup and export economy, and IMT Manesar anchors serious manufacturing. Expectations here are set by global standards: a business that looks dated online simply does not get the meeting.',
    industries: ['corporate services', 'IT and consulting', 'fintech and startups', 'automobile manufacturing', 'real estate', 'hospitality'],
    areas: ['Cyber City', 'Golf Course Road', 'Udyog Vihar', 'Sohna Road', 'MG Road', 'Sector 29', 'IMT Manesar', 'DLF Phase 3'],
  },
  {
    slug: 'chandigarh',
    intro:
      'Chandigarh anchors the Tricity economy along with Mohali and Panchkula — a planned city with a high concentration of professionals, educational institutions and a growing IT park, serving as the commercial gateway for Punjab, Haryana and Himachal. Its affluent, brand-aware customers do most of their discovery online before spending anywhere.',
    industries: ['IT services', 'education', 'healthcare', 'retail', 'government services', 'startups'],
    areas: ['Sector 17', 'Sector 34', 'IT Park Kishangarh', 'Industrial Area Phase 1', 'Mohali', 'Panchkula', 'Zirakpur', 'Sector 22'],
  },
  {
    slug: 'indore',
    intro:
      'Indore is the commercial capital of Madhya Pradesh and India\'s cleanest city — a title it wears with the same efficiency it applies to business. From the pharma and engineering units of the Pithampur belt to the namkeen brands exporting nationwide and a trading community that dominates central India\'s distribution, Indore\'s businesses move fast and expect their digital partners to keep up.',
    industries: ['trading and distribution', 'pharmaceuticals', 'namkeen and food processing', 'textiles', 'education', 'real estate'],
    areas: ['Vijay Nagar', 'Palasia', 'MG Road', 'AB Road', 'Rau', 'Pithampur industrial belt', 'Sapna Sangeeta', 'Bhawarkua'],
  },
  {
    slug: 'surat',
    intro:
      'Surat cuts and polishes roughly nine out of every ten diamonds in the world, and its Ring Road textile market moves sarees and dress materials to every corner of India. It is one of the fastest-growing cities on the planet, with businesses in Varachha and Katargam that think in volumes most cities cannot imagine — and that are now taking those volumes online.',
    industries: ['diamond cutting and polishing', 'textiles and sarees', 'embroidery and zari work', 'chemicals and dyes', 'real estate'],
    areas: ['Ring Road textile market', 'Varachha', 'Katargam', 'Adajan', 'Vesu', 'Sachin GIDC', 'Udhna', 'Piplod'],
  },
  {
    slug: 'bhopal',
    intro:
      'Bhopal pairs the administrative weight of a state capital with a quietly diversifying economy — electrical equipment manufacturing in Govindpura, a large education and healthcare sector, and MP Nagar\'s dense commercial grid where most of the city\'s professional services operate. Its businesses serve customers across Madhya Pradesh, and digital reach is how they get there.',
    industries: ['government services', 'education', 'electrical equipment manufacturing', 'tourism', 'healthcare', 'retail'],
    areas: ['MP Nagar', 'New Market', 'Arera Colony', 'Kolar Road', 'Hoshangabad Road', 'Bairagarh', 'Govindpura Industrial Area', 'Habibganj'],
  },
  {
    slug: 'nagpur',
    intro:
      'Nagpur sits at the exact centre of India, and its economy is built on that geography — the MIHAN SEZ has made it a logistics and IT hub, its orange trade is nationally famous, and the mineral wealth of Vidarbha flows through its markets. For businesses here, a central location plus an online presence means the whole country is a customer.',
    industries: ['logistics and warehousing', 'orange trade and agro processing', 'mining and minerals', 'IT services', 'education', 'healthcare'],
    areas: ['Sitabuldi', 'Dharampeth', 'Sadar', 'MIHAN SEZ', 'Wardha Road', 'Civil Lines', 'Itwari', 'Manish Nagar'],
  },
  {
    slug: 'kochi',
    intro:
      'Kochi has traded with the world for five centuries, and it still does — through its port, its spice and marine exports, and now through Infopark\'s IT campuses in Kakkanad. Kerala\'s most commercial city combines a global outlook with a highly literate, mobile-first customer base that researches everything online before buying.',
    industries: ['shipping and port logistics', 'IT services', 'spice and marine exports', 'tourism', 'gold retail', 'healthcare'],
    areas: ['MG Road', 'Kakkanad Infopark', 'Edappally', 'Fort Kochi', 'Vyttila', 'Palarivattom', 'Kaloor', 'Marine Drive'],
  },
  {
    slug: 'coimbatore',
    intro:
      'Coimbatore earned the "Manchester of South India" title through its spinning mills, but its real strength is diversity — the city practically owns India\'s pump and motor industry, runs a formidable engineering cluster, and its Saravanampatti corridor is growing into a serious IT destination. Businesses here are builders by nature, and they want digital assets engineered with the same rigour.',
    industries: ['textiles and spinning mills', 'pumps and motors manufacturing', 'engineering', 'jewellery', 'education', 'IT services'],
    areas: ['RS Puram', 'Gandhipuram', 'Peelamedu', 'Avinashi Road', 'Saravanampatti IT corridor', 'Singanallur', 'SIDCO Industrial Estate', 'Race Course'],
  },
  {
    slug: 'visakhapatnam',
    intro:
      'Visakhapatnam is Andhra Pradesh\'s industrial anchor — a natural harbour that hosts one of India\'s busiest ports, a major steel plant, pharma SEZs and a fast-rising IT hub in Madhurawada. As the city positions itself as the state\'s executive capital, its businesses are investing in the digital infrastructure to match.',
    industries: ['port and shipping', 'steel and heavy industry', 'pharmaceuticals', 'fisheries and marine exports', 'IT services', 'tourism'],
    areas: ['Dwaraka Nagar', 'MVP Colony', 'Gajuwaka', 'Madhurawada IT hub', 'Siripuram', 'Rushikonda', 'Seethammadhara', 'NAD Junction'],
  },
  {
    slug: 'patna',
    intro:
      'Patna is the commercial nerve centre of Bihar — its coaching institutes on Boring Road prepare lakhs of students, its agro-trading networks feed eastern India, and a construction boom is reshaping the skyline from Bailey Road to Kankarbagh. With one of India\'s youngest populations coming online, Patna\'s businesses are seeing digital demand grow faster than almost anywhere.',
    industries: ['education and coaching', 'healthcare', 'agro trading', 'retail', 'real estate', 'government services'],
    areas: ['Boring Road', 'Fraser Road', 'Kankarbagh', 'Patliputra Colony', 'Bailey Road', 'Danapur', 'Rajendra Nagar', 'Exhibition Road'],
  },
  {
    slug: 'varanasi',
    intro:
      'Varanasi weaves commerce and culture together like no other city — its Banarasi silk looms supply weddings across India, while millions of pilgrims and international tourists power a vast hospitality economy from Godowlia to Assi Ghat. For the city\'s weavers, hoteliers and traders, the internet has become the newest route to buyers who once had to come to Kashi themselves.',
    industries: ['Banarasi silk weaving', 'tourism and pilgrimage services', 'handicrafts', 'hospitality', 'education', 'retail'],
    areas: ['Lanka', 'Sigra', 'Godowlia', 'Bhelupur', 'Mahmoorganj', 'Cantonment', 'Sarnath', 'Assi Ghat'],
  },
  {
    slug: 'agra',
    intro:
      'Agra hosts one of the wonders of the world, and an economy has grown around that privilege — hotels and tour operators along Fatehabad Road, marble inlay workshops carrying Mughal-era craft, and a leather and footwear industry that quietly exports worldwide. Every one of these businesses now competes for customers who plan and book everything online.',
    industries: ['tourism and hospitality', 'leather and footwear', 'marble handicrafts', 'petha and food processing', 'education'],
    areas: ['Sadar Bazaar', 'Sanjay Place', 'Tajganj', 'Kamla Nagar', 'Sikandra', 'Dayalbagh', 'Fatehabad Road', 'Civil Lines'],
  },
  {
    slug: 'kanpur',
    intro:
      'Kanpur built its reputation as the leather capital of India, and its tanneries and footwear units still export globally — alongside textiles, plastics and an engineering base that dates back over a century. UP\'s biggest industrial city is now watching a new generation take family businesses online, from Panki\'s factories to Mall Road\'s retail.',
    industries: ['leather and tanneries', 'textiles and hosiery', 'plastic products', 'engineering', 'education', 'trading'],
    areas: ['Mall Road', 'Swaroop Nagar', 'Kakadeo', 'Govind Nagar', 'Panki Industrial Area', 'Kidwai Nagar', 'Civil Lines', 'Kalyanpur'],
  },
  {
    slug: 'nashik',
    intro:
      'Nashik is India\'s wine capital and one of Maharashtra\'s most balanced economies — vineyards and agro-exporters on one side, the Satpur and Ambad MIDC industrial estates on the other, and a steady stream of pilgrims visiting Panchavati and Trimbakeshwar. Its businesses span farm to factory, and all of them are finding their next customers online.',
    industries: ['wine and viticulture', 'agro processing and exports', 'engineering and auto components', 'pilgrimage tourism', 'real estate', 'defence manufacturing'],
    areas: ['College Road', 'Gangapur Road', 'Ambad MIDC', 'Satpur MIDC', 'Panchavati', 'Nashik Road', 'Indira Nagar', 'Deolali'],
  },
  {
    slug: 'rajkot',
    intro:
      'Rajkot makes things — the city\'s casting and forging units, machine tool workshops and auto component factories in the Aji and Shapar belts supply industries across the world, while its imitation jewellery and kitchenware brands dominate national markets. Saurashtra\'s commercial capital pairs manufacturing muscle with classic Gujarati trading instinct.',
    industries: ['auto components and engineering', 'castings and forgings', 'imitation jewellery', 'kitchenware manufacturing', 'machine tools', 'trading'],
    areas: ['Kalawad Road', 'Yagnik Road', '150 Feet Ring Road', 'Aji Industrial Estate', 'Shapar-Veraval industrial zone', 'Mavdi', 'University Road', 'Gondal Road'],
  },
  {
    slug: 'faridabad',
    intro:
      'Faridabad is one of north India\'s original industrial towns — its factories along Mathura Road produce auto components, tractors and machinery for brands across the globe, while Greater Faridabad\'s residential boom is creating a large new consumer market. The city\'s manufacturers are increasingly using digital channels to reach buyers directly instead of through layers of middlemen.',
    industries: ['auto components', 'engineering and machinery', 'tractors and farm equipment', 'garments', 'real estate'],
    areas: ['Sector 15', 'NIT Faridabad', 'Ballabhgarh', 'Sector 31', 'Mathura Road industrial belt', 'Greater Faridabad', 'Old Faridabad', 'Sector 21'],
  },
  {
    slug: 'meerut',
    intro:
      'Meerut equips India\'s athletes — the city produces the majority of the country\'s sports goods, from cricket bats to gym equipment — and its gold jewellery market and publishing houses add further depth to a robust trading economy just an hour from Delhi. Its manufacturers are discovering that e-commerce and search visibility open doors that traditional distribution never did.',
    industries: ['sports goods manufacturing', 'gold and jewellery', 'scissors and metalware', 'publishing', 'education', 'agriculture trading'],
    areas: ['Abu Lane', 'Shastri Nagar', 'Begum Bridge Road', 'Garh Road', 'Delhi Road', 'Pallavpuram', 'Modipuram', 'Sadar Bazaar'],
  },
  {
    slug: 'amritsar',
    intro:
      'Amritsar receives more daily visitors than almost any city in India thanks to the Golden Temple, sustaining a huge hospitality and food economy — and beyond tourism, the city runs Punjab\'s biggest textile and shawl trade along with bustling wholesale markets like Hall Bazaar. Businesses here serve both a global pilgrim audience and a prosperous local one, and both audiences search online first.',
    industries: ['religious tourism and hospitality', 'textiles and shawls', 'food processing', 'agriculture trading', 'retail'],
    areas: ['Hall Bazaar', 'Lawrence Road', 'Ranjit Avenue', 'Majitha Road', 'GT Road', 'Green Avenue', 'Chheharta', 'Batala Road'],
  },
  {
    slug: 'vadodara',
    intro:
      'Vadodara is Gujarat\'s engineering and chemicals powerhouse — home to heavy electrical manufacturing, a dense pharma and chemicals belt around Makarpura GIDC, and a strong professional class anchored by MS University. The city\'s industrial businesses are B2B to the core, and a credible digital presence has become essential to winning their tenders and export inquiries.',
    industries: ['chemicals and pharmaceuticals', 'heavy engineering', 'power equipment', 'education', 'IT services', 'banking operations'],
    areas: ['Alkapuri', 'Sayajigunj', 'Gotri', 'Makarpura GIDC', 'Fatehgunj', 'Karelibaug', 'Waghodia Road', 'Manjalpur'],
  },
  {
    slug: 'ghaziabad',
    intro:
      'Ghaziabad is the gateway to UP from Delhi and an industrial workhorse — steel processing, electronics assembly and fabrication units fill Sahibabad\'s industrial area, while Indirapuram and Raj Nagar Extension have exploded into massive residential markets full of new consumers. Businesses here compete in the wider Delhi-NCR digital market, where visibility is everything.',
    industries: ['steel and metal fabrication', 'electronics assembly', 'real estate', 'distribution and logistics', 'education', 'retail'],
    areas: ['Raj Nagar Extension', 'Indirapuram', 'Vaishali', 'Kaushambi', 'Sahibabad Industrial Area', 'Crossings Republik', 'Mohan Nagar', 'Govindpuram'],
  },
  {
    slug: 'prayagraj',
    intro:
      'Prayagraj carries unique institutional weight — the Allahabad High Court, a storied university and one of India\'s largest civil services coaching ecosystems in Civil Lines and Katra. Between the legal fraternity, lakhs of students and the periodic scale of the Kumbh, the city\'s service businesses have audiences that are increasingly reached online.',
    industries: ['education and coaching', 'legal services', 'government services', 'religious tourism', 'retail', 'agriculture trading'],
    areas: ['Civil Lines', 'Katra', 'Tagore Town', 'Jhunsi', 'Naini Industrial Area', 'Allahpur', 'George Town', 'Mumfordganj'],
  },
  {
    slug: 'gorakhpur',
    intro:
      'Gorakhpur is eastern UP\'s rising commercial centre — AIIMS and a growing medical ecosystem, the GIDA industrial corridor, a revived fertiliser plant and trade routes running to Nepal all feed the city\'s momentum. Its famous terracotta craft now ships nationwide, and local businesses are riding a wave of new infrastructure and new digital customers.',
    industries: ['education and healthcare', 'terracotta handicrafts', 'agriculture trading', 'fertiliser and industry', 'cross-border trade', 'retail'],
    areas: ['Golghar', 'Civil Lines', 'Medical College Road', 'Taramandal', 'Mohaddipur', 'Gorakhnath', 'Rustampur', 'GIDA industrial area'],
  },
  {
    slug: 'bareilly',
    intro:
      'Bareilly\'s jhumka may be Bollywood-famous, but the city\'s real economy runs on zari-zardozi embroidery, a furniture manufacturing cluster and one of the world\'s biggest mentha (menthol) trading hubs. Sitting midway between Delhi and Lucknow, its traders and manufacturers serve national markets — and are learning that online buyers pay better than local mandis.',
    industries: ['zari and embroidery', 'furniture manufacturing', 'mentha and agro trading', 'jewellery', 'education', 'retail'],
    areas: ['Civil Lines', 'Rampur Garden', 'DD Puram', 'Izatnagar', 'Badaun Road', 'Pilibhit Road', 'Cantt', 'Subhash Nagar'],
  },
  {
    slug: 'aligarh',
    intro:
      'Aligarh locks up a genuinely global niche — the city\'s lock and hardware industry, centred on the Tala Nagri cluster, exports to markets worldwide, while Aligarh Muslim University anchors a large education economy. Its hardware manufacturers were among UP\'s earliest exporters, and the next step for many is selling directly through digital channels.',
    industries: ['locks and hardware manufacturing', 'brass and metal products', 'education', 'agriculture trading', 'retail'],
    areas: ['Centre Point', 'Ramghat Road', 'Marris Road', 'Civil Lines', 'Tala Nagri industrial area', 'AMU Circle', 'Sasni Gate', 'Quarsi'],
  },
  {
    slug: 'moradabad',
    intro:
      'Moradabad is Peetal Nagri — the Brass City — whose handicraft exports light up homes from Europe to the Middle East, making it one of India\'s largest handicraft export hubs. Thousands of workshops and export houses operate here, and the smart ones are adding direct online channels to reduce their dependence on trade fairs and buying agents.',
    industries: ['brass handicrafts and exports', 'metalware manufacturing', 'agriculture trading', 'education', 'retail'],
    areas: ['Civil Lines', 'Peetal Nagri', 'Kanth Road', 'Delhi Road', 'Ramganga Vihar', 'Ashiyana', 'Buddhi Vihar', 'Majhola'],
  },
  {
    slug: 'jhansi',
    intro:
      'Jhansi is the gateway to Bundelkhand — a major railway junction, a defence and cantonment centre, and the trading point where the region\'s agricultural produce meets national markets. As government investment flows into the Bundelkhand corridor, the city\'s businesses are positioning themselves for growth, and digital visibility is part of that preparation.',
    industries: ['agriculture trading', 'railways and logistics', 'education', 'defence establishments', 'retail', 'healthcare'],
    areas: ['Civil Lines', 'Sadar Bazaar', 'Sipri Bazaar', 'Gwalior Road', 'Kanpur Road', 'Elite Crossing', 'Nagra', 'Bijauli industrial area'],
  },
  {
    slug: 'ludhiana',
    intro:
      'Ludhiana is Punjab\'s industrial giant — the hosiery and knitwear capital of India, home to the country\'s bicycle industry, and a machine tools and auto parts powerhouse spread across Gill Road and Focal Point. Its manufacturers clothe half of India each winter, and a growing number now sell directly to consumers online instead of only through wholesale chains.',
    industries: ['hosiery and knitwear', 'bicycle manufacturing', 'machine tools', 'auto components', 'sewing machines', 'garment exports'],
    areas: ['Model Town', 'Sarabha Nagar', 'Ferozepur Road', 'Gill Road industrial belt', 'Chandigarh Road', 'Dugri', 'Civil Lines', 'Focal Point'],
  },
  {
    slug: 'jalandhar',
    intro:
      'Jalandhar\'s sports goods travel to every major tournament on earth — the city manufactures for global brands alongside a strong hand tools and leather industry. Add Punjab\'s deep NRI connections driving real estate and services, and you get a business community that already thinks internationally and increasingly sells that way too.',
    industries: ['sports goods manufacturing', 'leather goods', 'hand tools and engineering', 'education', 'real estate', 'retail'],
    areas: ['Model Town', 'Civil Lines', 'GT Road', 'Leather Complex', 'Urban Estate', 'Rama Mandi', 'Lajpat Nagar', 'Focal Point'],
  },
  {
    slug: 'panipat',
    intro:
      'Panipat is the City of Weavers and the world\'s biggest textile recycling hub — its looms produce the handloom exports, carpets, blankets and home furnishings found in stores across Europe and America. Between the export houses on GT Road and a major refinery on its outskirts, Panipat\'s businesses operate at global scale from a compact city.',
    industries: ['handloom and home furnishings', 'textile recycling', 'carpets and blankets exports', 'pickles and food products', 'petrochemicals'],
    areas: ['GT Road', 'Model Town', 'Barsat Road', 'Sanoli Road industrial belt', 'Tehsil Camp', 'HUDA sectors', 'Refinery Township', 'Samalkha'],
  },
  {
    slug: 'rohtak',
    intro:
      'Rohtak combines Haryana\'s agricultural wealth with new industrial ambition — the IMT Rohtak zone has drawn manufacturing investment, while Maharshi Dayanand University and a cluster of institutes make it a regional education centre. Its businesses serve a prosperous rural hinterland whose consumers have gone mobile-first almost overnight.',
    industries: ['education', 'agriculture trading', 'manufacturing', 'dairy', 'retail', 'healthcare'],
    areas: ['Model Town', 'Civil Road', 'Delhi Road', 'Sonipat Road', 'IMT Rohtak', 'Jhajjar Road', 'Medical Mor', 'Subhash Nagar'],
  },
  {
    slug: 'hisar',
    intro:
      'Hisar is Haryana\'s steel city — its galvanised steel and pipe industry supplies construction nationwide, while the surrounding cotton belt and one of Asia\'s biggest agricultural universities keep agro-commerce at the city\'s heart. Businesses here bridge farm and factory, and both sides of that bridge are rapidly digitising.',
    industries: ['steel and galvanising', 'cotton and agriculture trading', 'dairy and livestock', 'education', 'retail'],
    areas: ['Urban Estate', 'Red Square Market', 'Delhi Road', 'Rajgarh Road', 'Hisar Industrial Area', 'Sector 14', 'Azad Nagar', 'Camp Chowk'],
  },
  {
    slug: 'jodhpur',
    intro:
      'Jodhpur\'s blue lanes hide a serious export economy — the city is one of the world\'s largest hubs for handicraft and wooden furniture exports through the Boranada zone, while heritage hotels and desert tourism fill its calendar year-round. Its craftsmen and exporters increasingly meet international buyers online long before any container ships.',
    industries: ['handicraft and furniture exports', 'tourism and heritage hotels', 'guar gum processing', 'textiles and bandhej', 'agriculture trading', 'education'],
    areas: ['Sardarpura', 'Ratanada', 'Paota', 'Basni Industrial Area', 'Boranada Export Zone', 'Shastri Nagar', 'Chopasni Road', 'Clock Tower area'],
  },
  {
    slug: 'udaipur',
    intro:
      'Udaipur sells an experience the world queues up for — the City of Lakes is India\'s destination-wedding capital and a global tourism magnet, backed by a solid marble, minerals and handicrafts trade. For its hotels, wedding planners and artisans, being discoverable online is not marketing; it is the entire sales funnel.',
    industries: ['tourism and destination weddings', 'hotels and hospitality', 'marble and minerals', 'handicrafts', 'education', 'retail'],
    areas: ['Bapu Bazaar', 'Chetak Circle', 'Sukhadia Circle', 'Hiran Magri', 'Fatehpura', 'Shobhagpura', 'Madri Industrial Area', 'Pratap Nagar'],
  },
  {
    slug: 'kota',
    intro:
      'Kota runs on ambition — lakhs of students arrive every year for the city\'s legendary coaching institutes, powering an economy of hostels, mess services and student businesses, while Kota stone and the delicate Kota Doria weave carry its name beyond education. Every institute and student service here fights for attention online, where admissions decisions actually begin.',
    industries: ['coaching and education', 'hostels and student services', 'Kota stone', 'Kota Doria weaving', 'retail', 'agriculture'],
    areas: ['Rajeev Gandhi Nagar', 'Vigyan Nagar', 'Talwandi', 'Jawahar Nagar', 'Gumanpura', 'Dadabari', 'Indraprastha Industrial Area', 'Kunhari'],
  },
  {
    slug: 'ajmer',
    intro:
      'Ajmer welcomes millions to the Dargah of Khwaja Moinuddin Chishti, with Pushkar\'s ghats and camel fair next door — a pilgrimage economy that sustains hotels, transport and retail across the city. Alongside tourism, Ajmer\'s educational institutions and regional trade give its businesses a steady local base that is steadily moving online.',
    industries: ['religious tourism', 'education', 'hospitality', 'handicrafts', 'retail', 'agriculture trading'],
    areas: ['Station Road', 'Vaishali Nagar', 'Civil Lines', 'Ana Sagar Circular Road', 'Madar Gate', 'Kutchery Road', 'Adarsh Nagar', 'Beawar Road'],
  },
  {
    slug: 'gwalior',
    intro:
      'Gwalior carries royal heritage into modern commerce — its fort watches over a city of traders at Maharaj Bada, growing education institutions, and the Malanpur industrial belt on its doorstep. As one of Madhya Pradesh\'s counter-magnet cities, it is drawing investment that its business community is matching with digital ambition.',
    industries: ['education', 'tourism and heritage', 'agriculture trading', 'stone and minerals', 'manufacturing', 'government services'],
    areas: ['City Centre', 'Lashkar', 'Morar', 'Thatipur', 'Maharaj Bada', 'DD Nagar', 'Malanpur industrial belt', 'Gole Ka Mandir'],
  },
  {
    slug: 'jabalpur',
    intro:
      'Jabalpur balances defence, law and marble — its ordnance factories are among India\'s oldest, the MP High Court makes it the state\'s legal capital, and the marble rocks of Bhedaghat anchor tourism alongside a large minerals trade. Its professional and industrial community is substantial, and both increasingly find their clients through digital channels.',
    industries: ['defence establishments', 'legal services', 'marble and minerals', 'agriculture trading', 'education', 'retail'],
    areas: ['Wright Town', 'Napier Town', 'Sadar', 'Ranjhi', 'Adhartal Industrial Estate', 'Vijay Nagar', 'Civic Centre', 'Madan Mahal'],
  },
  {
    slug: 'ujjain',
    intro:
      'Ujjain\'s economy moves to a sacred rhythm — the Mahakaleshwar Jyotirlinga draws unbroken streams of pilgrims, and the Simhastha Kumbh periodically scales the city to tens of millions of visitors. Hotels, transport operators, prasad and retail businesses all ride this flow, and online discovery increasingly decides which of them the pilgrim chooses.',
    industries: ['religious tourism', 'hospitality', 'agriculture trading', 'education', 'retail'],
    areas: ['Freeganj', 'Mahakal Marg', 'Dewas Gate', 'Nanakheda', 'Tower Chowk', 'University Road', 'Agar Road', 'Chimanganj Mandi'],
  },
  {
    slug: 'aurangabad',
    intro:
      'Aurangabad (Chhatrapati Sambhajinagar) pairs world heritage with world-class manufacturing — Ajanta and Ellora draw global tourists while the Waluj and Shendra MIDC belts host automobile, engineering and brewing giants on the DMIC corridor. Its industries think in exports and its tourism thinks in international visitors; both live online.',
    industries: ['automobile and engineering', 'tourism', 'breweries and beverages', 'pharmaceuticals', 'seeds and agro', 'Himroo textiles'],
    areas: ['CIDCO', 'Waluj MIDC', 'Shendra MIDC', 'Jalna Road', 'Nirala Bazaar', 'Osmanpura', 'Garkheda', 'Beed Bypass'],
  },
  {
    slug: 'thane',
    intro:
      'Thane has stepped out of Mumbai\'s shadow into a commercial identity of its own — the Wagle Estate belt hosts hundreds of SMEs and IT offices, Ghodbunder Road has become a retail and residential corridor, and the city\'s consumer base rivals many state capitals. Businesses here compete in the Mumbai Metropolitan digital market, where online visibility decides footfall.',
    industries: ['IT and corporate offices', 'engineering SMEs', 'real estate', 'retail', 'logistics', 'education'],
    areas: ['Ghodbunder Road', 'Wagle Estate', 'Majiwada', 'Naupada', 'Manpada', 'Kolshet Road', 'Pokhran Road', 'Vartak Nagar'],
  },
  {
    slug: 'navi-mumbai',
    intro:
      'Navi Mumbai was planned for business — the APMC market in Vashi is among Asia\'s largest wholesale hubs, JNPT moves more containers than any Indian port, and Airoli-Mahape\'s IT parks employ lakhs. A city built on infrastructure understands the value of digital infrastructure, and its businesses invest accordingly.',
    industries: ['IT and BPO', 'APMC wholesale trading', 'port and logistics', 'real estate', 'education', 'retail'],
    areas: ['Vashi', 'Nerul', 'CBD Belapur', 'Airoli', 'Mahape MIDC', 'Kharghar', 'Panvel', 'Turbhe'],
  },
  {
    slug: 'solapur',
    intro:
      'Solapur\'s looms are in homes across India — the city\'s chaddar and towel industry is nationally famous, backed by a garment manufacturing base and the sugar belt that surrounds it. Its textile makers built their reputation on quality at scale, and direct online selling is helping them capture margins that middlemen once took.',
    industries: ['textiles and bedsheets', 'towel and garment manufacturing', 'sugar processing', 'agriculture trading', 'education'],
    areas: ['Railway Lines', 'Saat Rasta', 'Akkalkot Road MIDC', 'Hotgi Road MIDC', 'Jule Solapur', 'Vijapur Road', 'Dufferin Chowk', 'Budhwar Peth'],
  },
  {
    slug: 'kolhapur',
    intro:
      'Kolhapur crafts things the rest of India cannot copy — GI-tagged Kolhapuri chappals, the distinctive saaj jewellery, and jaggery from its sugar belt — while the Shivaji Udyamnagar and Gokul Shirgaon foundry clusters make it a serious engineering town. Craft plus industry gives its businesses two very different audiences, both now reached online.',
    industries: ['foundry and engineering', 'Kolhapuri chappals and leather', 'jaggery and sugar', 'jewellery', 'dairy', 'textiles'],
    areas: ['Shahupuri', 'Rajarampuri', 'Tarabai Park', 'Shivaji Udyamnagar', 'Gokul Shirgaon MIDC', 'Shiroli MIDC', 'Laxmipuri', 'Mahadwar Road'],
  },
  {
    slug: 'mysore',
    intro:
      'Mysore refines everything it touches — silk sarees and sandalwood from its heritage industries, a palace that anchors Karnataka\'s tourism, global yoga students in Gokulam, and a growing IT presence led by major campuses. Its businesses trade on quality and reputation, exactly the attributes a polished digital presence is built to convey.',
    industries: ['tourism and heritage', 'silk and sandalwood', 'IT services', 'education', 'incense and agarbatti', 'yoga and wellness'],
    areas: ['VV Mohalla', 'Saraswathipuram', 'Kuvempunagar', 'Hebbal Industrial Area', 'Gokulam', 'Jayalakshmipuram', 'Nazarbad', 'Bannimantap'],
  },
  {
    slug: 'mangalore',
    intro:
      'Mangalore gave India several of its banks, and the coastal city still runs on enterprise — a busy port, cashew and fisheries exports, tile-making heritage and a strong education sector feeding its professional class. Its globally connected business families were early adopters of everything, and digital commerce is no exception.',
    industries: ['port and logistics', 'cashew processing', 'fisheries and exports', 'banking and finance', 'education', 'IT services'],
    areas: ['Hampankatta', 'Bejai', 'Kadri', 'Bunder', 'Kankanady', 'Surathkal', 'Baikampady Industrial Area', 'Falnir'],
  },
  {
    slug: 'hubli',
    intro:
      'Hubli-Dharwad is North Karnataka\'s commercial engine — the region\'s cotton, agri-produce and machine tools flow through its markets, and its position on the Pune-Bangalore corridor makes it a natural logistics hub. Businesses here serve a vast semi-urban hinterland whose consumers have leapfrogged straight to smartphones.',
    industries: ['agriculture trading', 'cotton and textiles', 'machine tools and engineering', 'logistics', 'education', 'retail'],
    areas: ['Vidyanagar', 'Deshpande Nagar', 'Gokul Road industrial area', 'Keshwapur', 'Unkal', 'Navanagar', 'Old Hubli', 'Station Road'],
  },
  {
    slug: 'belgaum',
    intro:
      'Belgaum (Belagavi) is a foundry town with border-city energy — its Udyambag cluster supplies precision castings and hydraulics to industry worldwide, while the sugarcane belt and Maharashtra-Karnataka trade keep its markets busy. Its engineering exporters compete globally, and their buyers evaluate them online first.',
    industries: ['foundries and hydraulics', 'engineering', 'sugarcane and agriculture', 'dairy', 'education', 'retail'],
    areas: ['Tilakwadi', 'Camp', 'Shahapur', 'Udyambag industrial area', 'Angol', 'Nehru Nagar', 'Hindwadi', 'Sadashiv Nagar'],
  },
  {
    slug: 'madurai',
    intro:
      'Madurai never sleeps — the Meenakshi temple keeps the city\'s markets open late into the night, its jasmine (Madurai Malli) carries a GI tag, and Sungudi sarees and agro-trade round out an economy built on temple-town commerce. Businesses here have served pilgrims for two millennia; today\'s pilgrims simply search on Google first.',
    industries: ['temple tourism', 'jasmine and flower trade', 'textiles and Sungudi sarees', 'agriculture trading', 'education', 'healthcare'],
    areas: ['Anna Nagar', 'KK Nagar', 'Simmakkal', 'Tallakulam', 'Mattuthavani', 'Kappalur Industrial Estate', 'Palanganatham', 'Vilangudi'],
  },
  {
    slug: 'tiruchirappalli',
    intro:
      'Trichy builds heavy — the BHEL complex spawned a fabrication ecosystem that makes the city a national hub for boiler components and engineering, while Srirangam\'s great temple sustains a year-round pilgrimage economy. Its workshops export precision; its hotels host devotees; both find their next customers online.',
    industries: ['heavy engineering and fabrication', 'boiler components', 'temple tourism', 'education', 'gems and jewellery', 'healthcare'],
    areas: ['Thillai Nagar', 'Cantonment', 'Srirangam', 'Thuvakudi', 'Ariyamangalam', 'KK Nagar', 'Woraiyur', 'Palakkarai'],
  },
  {
    slug: 'salem',
    intro:
      'Salem trades in steel and starch — its steel market is among South India\'s largest, its sago and tapioca industry dominates the national supply, and mango orchards and handloom weavers in Ammapet add agricultural depth. A city of traders and processors, Salem moves commodities at scale and is steadily moving its commerce online.',
    industries: ['steel and metal trading', 'sago and starch processing', 'textiles and handlooms', 'mango and agriculture', 'silver jewellery', 'education'],
    areas: ['Fairlands', 'Hasthampatti', 'Five Roads', 'Junction Main Road', 'Suramangalam', 'Ammapet', 'Shevapet', 'Kondalampatti'],
  },
  {
    slug: 'thiruvananthapuram',
    intro:
      'Thiruvananthapuram launched India\'s IT-park era with Technopark and its space age with ISRO — the state capital combines government, research institutions and a deep pool of technical talent with Kovalam\'s tourism nearby. Its residents are among India\'s most educated consumers, and they expect businesses to meet them online with the same sophistication.',
    industries: ['IT services', 'government services', 'tourism', 'space and research institutions', 'healthcare', 'education'],
    areas: ['Technopark Kazhakkoottam', 'MG Road', 'Pattom', 'Kowdiar', 'Vellayambalam', 'Sasthamangalam', 'Kesavadasapuram', 'Palayam'],
  },
  {
    slug: 'kozhikode',
    intro:
      'Kozhikode has traded spices with the world since Vasco da Gama landed — today its timber and plywood industry, footwear cluster, legendary halwa shops of SM Street and the growing Cyberpark keep the Malabar coast\'s commercial capital humming. Its merchants have always found new routes to buyers; the newest route is digital.',
    industries: ['timber and plywood', 'spice trading', 'footwear manufacturing', 'food and bakery', 'healthcare', 'education'],
    areas: ['SM Street', 'Mavoor Road', 'Palayam', 'West Hill', 'Cyberpark', 'Kallai', 'Nadakkavu', 'Feroke'],
  },
  {
    slug: 'thrissur',
    intro:
      'Thrissur is the gold capital of India — a majority of the country\'s gold jewellery passes through its manufacturing units in Ollur and its showrooms around Swaraj Round — while its banking heritage, ayurveda institutions and the thunder of Thrissur Pooram define Kerala\'s cultural capital. Gold buyers research designs online long before they visit a showroom, and Thrissur\'s jewellers know it.',
    industries: ['gold and jewellery manufacturing', 'banking and chit funds', 'ayurveda and wellness', 'textiles retail', 'education', 'film and events'],
    areas: ['Swaraj Round', 'MG Road', 'Punkunnam', 'Ollur', 'East Fort', 'Ayyanthole', 'Kokkalai', 'Amala Nagar'],
  },
  {
    slug: 'vijayawada',
    intro:
      'Vijayawada is Andhra\'s commercial capital — the Bezawada trading tradition runs through its agro markets, Auto Nagar\'s dealerships and the dense retail of Governorpet, all amplified by its position as South India\'s busiest railway junction and the Amaravati capital region next door. Trade is the city\'s language, and digital is its newest dialect.',
    industries: ['agriculture trading', 'textiles and retail', 'education', 'logistics', 'real estate', 'media'],
    areas: ['MG Road', 'Benz Circle', 'Governorpet', 'Labbipet', 'Auto Nagar', 'Patamata', 'One Town', 'Gunadala'],
  },
  {
    slug: 'guntur',
    intro:
      'Guntur sets the price of heat — its chilli yard is Asia\'s largest, and the city\'s cotton and tobacco trade adds to an agro-export economy of national importance, now supercharged by the Amaravati capital region rising nearby. Its commodity traders work with buyers across continents, and professional digital presence has become part of the deal.',
    industries: ['chilli and spice trading', 'cotton and tobacco', 'agriculture exports', 'education', 'real estate', 'healthcare'],
    areas: ['Brodipet', 'Arundelpet', 'Lakshmipuram', 'Pattabhipuram', 'Auto Nagar', 'Gorantla', 'Mangalagiri Road', 'Amaravati Road'],
  },
  {
    slug: 'tirupati',
    intro:
      'Tirupati serves one of the world\'s most visited pilgrimage destinations — tens of millions climb to Tirumala each year, sustaining an enormous hospitality, transport and retail economy, while the Sri City corridor nearby brings global electronics manufacturing to the region. Pilgrims plan every detail of their visit online, and Tirupati\'s businesses compete for those searches.',
    industries: ['temple tourism and pilgrim services', 'hospitality', 'electronics manufacturing', 'education', 'retail', 'healthcare'],
    areas: ['AIR Bypass Road', 'Renigunta Road', 'Balaji Colony', 'Korlagunta', 'Tiruchanoor Road', 'MR Palli', 'Kapila Theertham Road', 'Sri City corridor'],
  },
  {
    slug: 'warangal',
    intro:
      'Warangal carries Kakatiya-era grandeur into a new economic chapter — Telangana\'s second city runs major grain and agro markets, a granite industry, and an emerging IT hub at Madikonda that is giving its NIT graduates reasons to stay. Its businesses serve a large agrarian region whose commerce is rapidly formalising and digitising.',
    industries: ['agriculture trading', 'granite and stone', 'education', 'IT services', 'handlooms', 'healthcare'],
    areas: ['Hanamkonda', 'Kazipet', 'Subedari', 'Hunter Road', 'Madikonda IT hub', 'Naim Nagar', 'Station Road', 'Excise Colony'],
  },
  {
    slug: 'bhubaneswar',
    intro:
      'Bhubaneswar planned its way into the future — the Temple City is now eastern India\'s IT and education hub, with Infocity\'s campuses, KIIT\'s sprawling ecosystem and a smart-city administration that digitised early. Its young professional population expects modern digital experiences, setting the bar for every business that serves them.',
    industries: ['IT and software', 'government services', 'education', 'tourism and temples', 'real estate', 'startups'],
    areas: ['Saheed Nagar', 'Jaydev Vihar', 'Patia', 'Chandrasekharpur', 'Khandagiri', 'Nayapalli', 'Old Town', 'Rasulgarh Industrial Estate'],
  },
  {
    slug: 'cuttack',
    intro:
      'Cuttack is Odisha\'s millennium city of commerce — its silver filigree (Tarakasi) craft is world-renowned, its wholesale markets at Buxi Bazaar and Malgodown feed the state\'s trade, and the High Court anchors a large professional community. A thousand years of trading instinct is now being applied to digital storefronts.',
    industries: ['silver filigree', 'trading and wholesale', 'legal services', 'textiles retail', 'food processing', 'education'],
    areas: ['Buxi Bazaar', 'Choudhury Bazaar', 'College Square', 'Badambadi', 'Link Road', 'Jagatpur Industrial Estate', 'Bidanasi', 'Mangalabag'],
  },
  {
    slug: 'rourkela',
    intro:
      'Rourkela was built around steel — the SAIL plant and its ecosystem of fabrication and engineering units define the city, while NIT Rourkela feeds it technical talent and the surrounding mineral belt keeps industry supplied. Its B2B businesses are discovering that procurement teams now find vendors through search engines, not just trade directories.',
    industries: ['steel and metallurgy', 'engineering fabrication', 'mining support services', 'education', 'retail', 'healthcare'],
    areas: ['Udit Nagar', 'Civil Township', 'Panposh', 'Chhend Colony', 'Basanti Colony', 'Bisra Road', 'Fertilizer Township', 'Kalunga Industrial Estate'],
  },
  {
    slug: 'ranchi',
    intro:
      'Ranchi runs Jharkhand — the state capital hosts the headquarters of major mining companies, the HEC heavy engineering complex, and a fast-growing education and healthcare sector serving the entire state. Its mix of corporate offices and aspirational consumers makes digital visibility valuable on both the B2B and B2C sides.',
    industries: ['government services', 'heavy engineering', 'mining corporate offices', 'education', 'healthcare', 'retail'],
    areas: ['Main Road', 'Lalpur', 'Kanke Road', 'Doranda', 'Harmu Housing Colony', 'Hinoo', 'Tupudana Industrial Area', 'Morabadi'],
  },
  {
    slug: 'jamshedpur',
    intro:
      'Jamshedpur is India\'s original planned industrial city — Tata Steel and Tata Motors anchor an ecosystem of auto component and engineering firms in Adityapur, one of the country\'s largest small-industry clusters. A city literally built by industry appreciates well-engineered things, websites included.',
    industries: ['steel', 'automobile and auto components', 'engineering', 'education', 'retail', 'healthcare'],
    areas: ['Bistupur', 'Sakchi', 'Sonari', 'Kadma', 'Adityapur Industrial Area', 'Telco Colony', 'Golmuri', 'Jugsalai'],
  },
  {
    slug: 'dhanbad',
    intro:
      'Dhanbad powers India — the coal capital\'s mines and the businesses that serve them, from equipment suppliers to logistics fleets, form the region\'s economic core, with IIT (ISM) adding a premier technical institution to the mix. Its industrial buyers and young student population both live increasingly online.',
    industries: ['coal and mining', 'mining equipment and services', 'transport and logistics', 'education', 'retail', 'healthcare'],
    areas: ['Bank More', 'Hirapur', 'Saraidhela', 'City Centre', 'Jharia', 'Katras', 'Govindpur', 'Sindri'],
  },
  {
    slug: 'raipur',
    intro:
      'Raipur trades in steel and rice — Chhattisgarh\'s capital runs one of India\'s biggest sponge iron and steel trading hubs alongside hundreds of rice mills, while Naya Raipur\'s planned government city rises next door. Its traders operate on thin margins and big volumes, and they adopt any channel that brings buyers — digital included.',
    industries: ['steel and sponge iron', 'rice milling and agro', 'government services', 'trading and distribution', 'education', 'healthcare'],
    areas: ['Pandri', 'Shankar Nagar', 'Telibandha', 'Devendra Nagar', 'Urla Industrial Area', 'Bhanpuri', 'Naya Raipur', 'Civil Lines'],
  },
  {
    slug: 'bhilai',
    intro:
      'Bhilai grew from a steel plant into a city of makers and learners — the SAIL plant remains its heart, ringed by fabrication units in Hathkhoj, while IIT Bhilai and a strong school culture (the city famously produces IIT rankers) define its aspirations. Precision and education run deep here, shaping how its businesses present themselves.',
    industries: ['steel', 'engineering and fabrication', 'education', 'transport', 'retail'],
    areas: ['Civic Centre', 'Supela', 'Power House', 'Nehru Nagar', 'Smriti Nagar', 'Hathkhoj Industrial Area', 'Sector 6', 'Risali'],
  },
  {
    slug: 'guwahati',
    intro:
      'Guwahati is the gateway to the Northeast — its tea auction centre is among the world\'s largest, Fancy Bazaar\'s wholesale trade supplies seven states, and every major brand entering the region sets up here first. Businesses in Guwahati serve an eight-state hinterland, and digital reach multiplies that advantage like nothing else.',
    industries: ['tea trading and auctions', 'oil and gas', 'trading and distribution', 'tourism', 'education', 'healthcare'],
    areas: ['Fancy Bazaar', 'Paltan Bazaar', 'GS Road', 'Six Mile', 'Zoo Road', 'Ulubari', 'Beltola', 'Bamunimaidan Industrial Area'],
  },
  {
    slug: 'siliguri',
    intro:
      'Siliguri commands the chicken\'s neck — the corridor connecting mainland India to the Northeast, Nepal, Bhutan and Bangladesh — making it a trading and logistics hub of strategic importance, with tea gardens and Darjeeling-bound tourism on its doorstep. Its traders move goods across four borders; moving their business online is the easy part.',
    industries: ['tea processing and trading', 'tourism gateway services', 'timber and plywood', 'trading and distribution', 'logistics', 'education'],
    areas: ['Hill Cart Road', 'Sevoke Road', 'Bidhan Market', 'Champasari', 'Pradhan Nagar', 'Matigara', 'Salbari', 'City Centre'],
  },
  {
    slug: 'howrah',
    intro:
      'Howrah forged its name as the Sheffield of India — its foundries and engineering workshops in Dasnagar and Liluah have supplied industry for over a century, while the Mangla Haat textile wholesale market draws traders from across the east. Heritage industry is modernising here, and digital channels are part of that renewal.',
    industries: ['engineering and foundries', 'jute processing', 'wholesale textiles', 'logistics', 'retail'],
    areas: ['Shibpur', 'Salkia', 'Liluah', 'Dasnagar industrial area', 'Belur', 'Santragachi', 'Bally', 'Andul Road'],
  },
  {
    slug: 'durgapur',
    intro:
      'Durgapur is Bengal\'s steel city — the Durgapur Steel Plant and a corridor of power and engineering industries built the city, and its City Centre now hosts eastern India\'s growing retail and services economy. Industrial B2B suppliers and new consumer businesses alike are finding their markets shift steadily online.',
    industries: ['steel', 'power generation', 'engineering and fabrication', 'education', 'retail'],
    areas: ['City Centre', 'Benachity', 'Bidhannagar', 'Muchipara', 'Angadpur', 'Steel Township', 'Fuljhore', 'Sagarbhanga'],
  },
  {
    slug: 'asansol',
    intro:
      'Asansol sits on coal and steel country — the Raniganj coal belt around it, IISCO\'s Burnpur plant within it, and a dense railway and trading economy running through its GT Road spine. As one of Bengal\'s largest cities, its businesses serve an industrial workforce whose shopping and searching have moved to smartphones.',
    industries: ['coal and mining', 'steel', 'railways', 'trading and distribution', 'education', 'retail'],
    areas: ['GT Road', 'Court More', 'Burnpur', 'Murgasol', 'Asansol Bazaar', 'Ushagram', 'Kulti', 'Raniganj'],
  },
  {
    slug: 'dehradun',
    intro:
      'Dehradun is India\'s education capital in the hills — its legendary schools and universities draw students nationwide, the state government drives a large services economy, and the IT park on Sahastradhara Road signals its next chapter as tourists stream through toward Mussoorie. Its educated, affluent population researches everything online, from schools to services.',
    industries: ['education', 'tourism gateway services', 'government services', 'IT and startups', 'healthcare', 'real estate'],
    areas: ['Rajpur Road', 'Paltan Bazaar', 'Clement Town', 'Ballupur', 'Sahastradhara Road IT Park', 'Clock Tower', 'Vasant Vihar', 'Patel Nagar'],
  },
  {
    slug: 'haridwar',
    intro:
      'Haridwar channels two mighty flows — the Ganga that brings millions of pilgrims to Har Ki Pauri, and the SIDCUL industrial estate where FMCG, ayurveda and electronics giants manufacture at national scale, with BHEL\'s township adding engineering heritage. Pilgrimage and production both generate businesses that customers now find through search.',
    industries: ['religious tourism', 'ayurveda and FMCG manufacturing', 'industrial manufacturing', 'hospitality', 'retail'],
    areas: ['Har Ki Pauri area', 'Ranipur More', 'SIDCUL', 'Jwalapur', 'Kankhal', 'Bahadarabad', 'Shivalik Nagar', 'BHEL Township'],
  },
  {
    slug: 'shimla',
    intro:
      'Shimla runs Himachal — the state capital\'s government offices, a tourism economy that fills The Mall year-round, and the apple trade that moves the state\'s most valuable crop through its markets. Hotels, tour operators and services here live and die by online bookings and reviews.',
    industries: ['tourism and hospitality', 'government services', 'apple and horticulture trade', 'education', 'real estate'],
    areas: ['The Mall', 'Lower Bazaar', 'Sanjauli', 'Chhota Shimla', 'Kasumpti', 'New Shimla', 'Lakkar Bazaar', 'Tara Devi'],
  },
  {
    slug: 'jammu',
    intro:
      'Jammu is the city of temples and the gateway to Vaishno Devi — crores of pilgrims pass through annually, feeding hotels, transport and retail, while Bari Brahmana\'s industrial estate and the region\'s dry fruit trade anchor commerce beyond tourism. Every pilgrim journey now begins with online planning, and Jammu\'s businesses compete at that starting line.',
    industries: ['religious tourism', 'trading and distribution', 'government services', 'dry fruits and agriculture', 'transport', 'education'],
    areas: ['Gandhi Nagar', 'Bahu Plaza', 'Raghunath Bazaar', 'Channi Himmat', 'Trikuta Nagar', 'Talab Tillo', 'Bari Brahmana Industrial Area', 'Satwari'],
  },
  {
    slug: 'srinagar',
    intro:
      'Srinagar crafts beauty the world collects — pashmina shawls, hand-knotted carpets and papier-mâché from generations-old workshops, alongside houseboat tourism on Dal Lake and the saffron and apple trade of the Valley. For its artisans and houseboat owners, reaching buyers directly online transforms both price and pride.',
    industries: ['pashmina and carpets', 'handicrafts', 'tourism and houseboats', 'horticulture and apples', 'saffron and dry fruits', 'retail'],
    areas: ['Lal Chowk', 'Residency Road', 'Rajbagh', 'Dalgate', 'Hyderpora', 'Bemina', 'Sanat Nagar Industrial Estate', 'Karan Nagar'],
  },
  {
    slug: 'panaji',
    intro:
      'Panaji runs Goa\'s good life — the capital\'s hospitality, events and real estate businesses serve one of the world\'s favourite destinations, while Patto Plaza hosts the state\'s corporate offices and the pharma belt works quietly inland. In a market where every tourist books online, digital presence is simply the price of entry.',
    industries: ['tourism and hospitality', 'real estate', 'government services', 'events and entertainment', 'pharmaceuticals', 'retail'],
    areas: ['18th June Road', 'Patto Plaza', 'Miramar', 'Dona Paula', 'Campal', 'Porvorim', 'Taleigao', 'Caranzalem'],
  },
  {
    slug: 'gaya',
    intro:
      'Gaya hosts the world twice over — Bodh Gaya draws Buddhist pilgrims from every continent to the seat of enlightenment, while Vishnupad temple makes the city the centre of pind-daan rituals for Hindus nationwide. Its hotels, travel services and famous tilkut trade serve an international audience that plans every journey online.',
    industries: ['religious tourism', 'hospitality', 'agriculture trading', 'handicrafts', 'retail', 'education'],
    areas: ['Bodh Gaya', 'GB Road', 'Station Road', 'Civil Lines', 'AP Colony', 'Delha', 'Manpur', 'Chand Chaura'],
  },
  {
    slug: 'muzaffarpur',
    intro:
      'Muzaffarpur is the litchi capital of India — its Shahi litchi carries a GI tag and ships nationwide each summer — while the lac bangle craft of Islampur and north Bihar\'s distribution trade run through the city year-round. Its agro-traders and artisans are finding that online demand pays better than any mandi.',
    industries: ['litchi and agriculture trading', 'lac bangles and handicrafts', 'retail and distribution', 'education', 'healthcare'],
    areas: ['Motijheel', 'Saraiyaganj', 'Juran Chapra', 'Aghoria Bazar', 'Kalambagh Road', 'Bela Industrial Area', 'Mithanpura', 'Brahmpura'],
  },
  {
    slug: 'bhagalpur',
    intro:
      'Bhagalpur weaves silk the world knows by its name — Bhagalpuri Tussar from the looms of Nathnagar reaches fashion houses across continents, making the Silk City one of Bihar\'s most export-oriented economies alongside its agriculture trade. Its weavers and exporters increasingly meet international buyers on the internet rather than at exhibitions.',
    industries: ['Tussar silk weaving and exports', 'handlooms', 'agriculture trading', 'education', 'retail'],
    areas: ['Tilkamanjhi', 'Adampur', 'Nathnagar', 'Khalifabag', 'Bhikhanpur', 'Aliganj', 'Sabour', 'Barari Industrial Area'],
  },
];

export function getLocationContentBySlug(slug: string): LocationContent | undefined {
  return locationContent.find((c) => c.slug === slug);
}
