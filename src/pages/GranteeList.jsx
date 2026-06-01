/**
 * @file GranteeList.jsx
 * @description Renders a grid of startup beneficiaries (grantees) from Saurashtra University, displaying their project details, images, contact numbers, websites, and user names.
 */

/**
 * List of startup grantees with project details and contact information
 * @type {Array<{img: string, title: string, desc: string, phone: string, site: string, user: string}>}
 */
const grantees = [
  {
    img: "img/beneficiary/susec png.png",
    title: "URI Identifier",
    desc: "The main purpose of the startup is to determine the sex of plant in early stage from its leaves by simple chemical method. Identifying male and female plants their early stages for the benefit of farmer and save their time, money & space which is occupied with growing male plants.",
    phone: "6353709499",
    site: "susec.ac.in",
    user: "Foram H. Vaghelal"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Keshorna Hair Oil",
    desc: "Alopesia, baldness and cancer patients no worry if you loss your hair Keshorna is helps you to grow up your face ornament your own and make happy faces.",
    phone: "8490991979",
    site: "susec.ac.in",
    user: "Ms. Shweta M. Atri"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Design and characterization of transferosomal patches",
    desc: "Design and characterization of transferosomal patches",
    phone: "8490991979",
    site: "susec.ac.in",
    user: "Ms. Kajal Goswami"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Stress free plant using novel microbial formulations.",
    desc: "Stress free plant using novel microbial formulations.",
    phone: "8490991979",
    site: "susec.ac.in",
    user: "Mr. Vishal Kothari"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Greener And an Efficient Metal",
    desc: "Free Singlet Oxygen Mediated Process Development For Glyphosate.",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Ashish Pravinbhai Dhamsaniya"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Embedded Data Acquisition system with Graphical User Interphase for Physics Experiments",
    desc: "",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Chintan D. Jethva"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Stress free plant using novel microbial formulations",
    desc: "",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Mr. Vishal Kothari"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Career with Entertainment web and mobile",
    desc: "",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Mr. Hardik Makwana"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Exploring Biodegradation and Plant Growth Promoting Potential of a Pesticide Degrading Bacterial Isolates",
    desc: "",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Ms. Jalpa K. Rank"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "FRESH MILK,TEA & COFFEEVENDING MACHINE",
    desc: "",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Mr. Nitish Jobanputra"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Formulation and evaluation of Nano Capsules containing insitu gel for treatment of vaginal infections",
    desc: "We can treat the prostate cancer by this drug.",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Priya Patel"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Adoption of Crystallo-co-agglomeration (CCA) technique for the functionality improvement of the drugs with having low potential of manufacturing.",
    desc: "",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Ms. Sejalba Chauhan"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Preparation of super-hydrophobic nano coating for carbon free construction.",
    desc: "",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Ms. Hetal Boricha"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Glibenclamide loaded Inhalation therapy for diabetes.",
    desc: "Glibenclamide loaded Inhalation therapy for diabetes.",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Bhavisha Bharatbhai kacha"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Formulation and Evaluation of Targeted nanoparticulate drug delivery system for breast cancer",
    desc: "To formulate the targeted nanoparticulate drug delivery system for the treatment of breast cancer.",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Raviraj Bera"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "ACETOF SR TABLET",
    desc: "In rheumatoid arthritis, pain in joints is severe. So, for immediate release patients take analgesic drugs and anti-arthritic drugs differently. Analgesic and anti-arthritic drugs are combined for patient compliance in rheumatoid arthritics due to extreme pain.",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Majethiya Harshil Yogeshbhai"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Fluconazole with celendula oil Emulgel",
    desc: "synergistic anti-fungal effect by celendula oil bases fluconazole emulgel.",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Kagathara Mayank Rameshbhai"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "JTW management",
    desc: "Chemical Waste Management",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Dr. Devendra Vaishnav"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "SmartFarm24",
    desc: "Automation Engineering of Hydroponics systems.",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Mayur Chavda"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Heavy vertical axis wind turbine",
    desc: "",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Mr. Ashish Varvediya"
  },
  {
    img: "img/beneficiary/1.jpg",
    title: "Novel approach of nano particles for cosmetic health care",
    desc: "The Current Problem faced in the field of Cosmetics is that the cosmetic products contain chemicals which are having side-effects on health and also the cost of the product are high.",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Vaishalee Rashikbhai Chandegara"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "A multipurpose 80K(LN2) Cryostat for measuring electrical properties in material science.",
    desc: "",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Mr. Bhargav Rajyaguru"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "IP Evaluator",
    desc: "We Providing Platform where any innovator came and enlist the Protected IP with detail specification for same. As IP Evaluator will validate and valuate the Idea and find the relevant industries. Also assisting for licensing or selling the protected IP. On other side we take problem statement from industries and try to find solution from patent database. As IP Evaluator will validate and valuate the Idea and find the relevant industries. Also assisting for licensing or selling the protected IP.",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Dabhi Sandeepsinh Narendrasinh"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Toothbrush Hygiene Care Solution",
    desc: "We are developing an advanced electronic gadget to which will prevent bacterial, germs, and viral growth, and sterilized toothbrush, tongue cleaner, toothpaste with 99% efficiency.",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "SHYAM AJUDIYA"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "SMART SCHOOL BAG",
    desc: "GPS Enabled smart Digital School ID which helps parent to track their kids 24x7 through an online mobile application. A product specially designed for kids safety and parent comfort. Parent can also set Geographical limits of their kids.",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Rinkal Kacha"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Formulation and Evaluation of oak gall loaded Patient friendly Film forming spray for the treatment of Mouth ulcer",
    desc: "Film forming spray can be a promising drug delivery system with various benefits. Natural or synthetic polymers can be used as drug matrices and film formers following the need for increased stability and therapeutic effectiveness of the active substance.",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Anand Nimavat"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "FnLabs - Gas Sensor Testing Apparatus with Controlled Ambience",
    desc: "We would like to design and develop a gas sensor testing instrument which would have the advantage for the customization.",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Chintan M. Panchasara"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Development of Determination Technique to Identify Male and Female Plant of Carica Papaya L. From Its Leaves",
    desc: "The main aim of the study is to determine the sex of plant in early stage from its leaves by simple chemical method.",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Vaghela Foram H."
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Novel synthesis approach of carbon quantum dot from effluent and their application as UV protector",
    desc: "Effects of harmful uv radiation on human body.",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Sandhya H. Dodia"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Novel Nano Suspension based Nasal Spray to improve therapeutic effect of amisulpride in the treatment of schizophrenia",
    desc: "Bioavailability. Solubility, enhancement and given to direct nose to brain. Reduced dosing frequency. Low dose of the drug will required",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Chavda Pratibha H."
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Development of novel herbal formulation for the hair growing activity",
    desc: "\"Now days hair fall is burning problem, our herbal formulation will claim to have a hair growing effect on cancer chemotherapeutic patients due its rejuvenation property \"",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Shweta Atri"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Development of Methotrexate Prodrug with enhanced therapeutic effect for Cancer",
    desc: "we develop the methotrexate prodrug .So there is a need for innovative approaches to design anticancer drugs with reduced toxicity and improved therapeutic indices. For that prodrug therapy provides an alternative approach to design new anticancer drugs.",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Faldu Pooja"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Silibinin Loaded mesoporous nanoparticulate formulation.",
    desc: "To Treat the prostate cancer",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Maharshi Pandya"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "A novel formulation comprising of hesperetin and dapagliflozin for the synergistic neuroprotective action in diabetic stroke model.",
    desc: "synergistic neuroprotective potential of the novel powedered formulation comprising of hesperetin and dapagliflozin in diabetic stroke model.",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Bhuvnesh thakar"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Formulation and development of directly compressible multi purpose co-processed excipient.",
    desc: "manufacturing process of cefuroxime axetil tablet is very lengthy, drug are getting hydrolyzed when it comes in contact with the water during manufacturing process, lower bioavailibility of drug , qnd short half life of drug",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Rakshit Joshi"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Design and characterization of losartan potassium containing transferosomal patch for the management of hypertension",
    desc: "Formulated the transferosomal patch and reduce the dose frequency and improve the patient compliance and avoid the hepatic Frist pass metabolism of drug",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Kajal Goswami"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Novel design of manganite based Field Effect Transistor",
    desc: "Few disadvantages of conventional Field Effect Transistor are there. Manganite based FET overcomes most of disadvantages of conventional FET. it having a great electrical and magnetic properties which are very important.",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Kush Vachhani"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Process for preparing Metformin HCl using Crystallo-co-agglomeration approach",
    desc: "",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Mr. Namish Vyas"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Lalitkala Paper Solutions.",
    desc: "We are making paper & packaging materials from Agricultural waste materials which can have positive effect on environment as well as can save the trees from being cut down. Hemp Use is in rise because of its sustainability & environmental benefits. Hemp fiber & stems contains about 70% of cellulose compared to trees which contains 45-55% of cellulose. It needs less chemicals to process and can be recycles up to 6 times compared to 3 of traditional paper",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Pratik Lalitbhai Vaghela"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "WounDealer",
    desc: "By looking the current scenario innovations are required for wound healing because still no fair alternative for treatment is available. So by considering all these aspects Film forming spray is one of the emerging strategy growing in the healthcare sector. It offers many advantages like- It is favorable to achieve Continuous / sustain drug release, Sprayers help form droplets with better and more uniform distribution and dosage of drugs, Increased stability and therapeutic effectiveness of the active substance, Accelerated wound healing through moisture control, no need of third person for application, non irritant, inexpensive and cost friendly. Ultimately, the use of film forming spray (tranexamic acid) will accelerate wound healing process and improve patient compliances and give many advantages over traditional wound healing method.",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Deep Moradiya"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Formulation and evaluation of herbal hair dye",
    desc: "Herbs are used in various cosmetic such as herbal shampoo, herbal tablets, herbal hair dye, herbal toothpaste etc. In comparison to natural hair dyes, synthetic hair dyes are reported to cause skin and other skin related diseases.the herbal dye was prepared in house according to the proposed composition using all the natural ingredients. The word “herabal” is a symbol of safety. In the current examination different blends of powdered leaves and hair care plant like henna,indigo,bhringraj,,amla,shikakai,brahmi,jatamansi,and assessed for their shading and awareness responses. Henna,indigo,nagarmoth,kapurkachli,sukhad, bavchi, trifala,aritha detailed was viewed as reasonable normal colorant.conclusion herbal based hair dye has been prepared and evaluated using the various parameters. It offers a natural alternate which can be used. Irrespective of any side effects.",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Renish Mathakiya"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "KERGA",
    desc: "A photometer is an instrument that measures light intensity or optical properties of solutions or surfaces. We have built such a photometer which consists of a piece of paper with an oil spot on it that makes the paper slightly more transparent. This device measures unknown power and luminous efficacy of different light sources and can even be used to measure these parameters for sun and full moon. Hence the temperature of these light sources can also be known. By using this device, reflection from different reflecting objects can be measured. Also, we can measure absorption of light by using films of different colours. Thus, this photometer can be used to measure and compare many different optical properties like transmission, emission, reflection and absorption.",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Aayushi Umeshbhai Kotecha"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Battery Pack with Thermal Integrated Cooling System",
    desc: "The battery pack consists of a thermal management system of unique design integrated with sensors which prevents short circuiting of the individual cells or the entire battery pack and also, helps in maintaining the charge/discharge rate of the cells to improve the SOH of the battery pack. This will help in removing the range anxiety in vehicles and also give more efficiency in stationary storages as well, the design is flexible with any number of cells- be it 20kw or 2200kw- the principles on which it works remains the same.",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Vatsal Trivedi"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Cacgel-NC",
    desc: "In the development of more effective and less harmful anticancer therapeutic agents, improved carrier systems are urgently needed that’s why we are utilizing nanotechnology to overcome such problem related conventional therapies. so we are going to formulate Nano-capsule in which the Herbal API (Quercetin) is proven effective against ovarian cancer. By formulating Nano capsule will shows improvement in cancer therapy. to provide maximum amount of API at specific target site we are adding targeting agent which will increase the effectiveness of API , Now to deliver this whole carries system we are utilizing biodegradable and bio compatible hydrogel with having the additional benefit of proving long term release of formulation. After combing all these elements of our formulation we are expecting that the formulation will modernize the treatment of cancer as delivering formulation for up to week can directly improve patient compliance which also shows greater advantage of formulation to treat patient with cancers, Utilization of Nano technology is opening the new, effective and less harmful treatment of cancer, So with the use of nanotechnology medical field will open new domain of treating new disease",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Rohit Pal"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Its My Project Management (IMPM)",
    desc: "We have solved this problem by making IMPM. In our software, the project owner can hide the identity of every member. One can assign a unique name to each member so that no member can communicate with each other directly other than IMPM.",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Pratik Mehta"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "ikisan",
    desc: "Farmers sell their crops through our app to direct industries and export companies.",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Vishal Narensdrabhai Gojiya"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Immersive Therapeutics",
    desc: "We are Developing a unified medical metaverse platform with wide variety of use-cases, Such as applications to decrease pain, anxiety, and medication, or using VR simulations for patient education and training of medical professionals",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Bhoomi Jhaveri"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "REVIVE - THE PERFECT SOLUTION FOR CLINICAL EXPERIENECE",
    desc: "Our app aims to revolutionize medical education by providing a solution to the challenges of engagement, accessibility, and practical experience. With a gamified learning approach, the app will transform the vast course material into interactive games and clinical scenarios, making the learning process engaging and enjoyable for students. Moreover, our app will offer a cost-effective and accessible alternative to expensive medical education resources, ensuring that students from different backgrounds can access high-quality educational content effortlessly without facing significant financial burdens. Finally, the app will provide students with the opportunity to simulate real-world clinical scenarios, enabling them to gain practical experience and improve their clinical skills. By doing so, we aim to enhance the self-confidence of students and prepare them for success in clinical settings and entrance exams like NEET, USMLE, and PLAB. This comprehensive approach to medical education will not only improve learning outcomes but also empower a diverse group of aspiring healthcare professionals with the knowledge, skills, and confidence to provide high-quality care to communities across the world.",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Dr. Prachi Shah"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "ClassToDigital.com",
    desc: "In C2D, we have standardized the syllabus of different streams and focused on conceptual clarity of topics, short videos on such topics with animations, actual practical application at the industrial level, case studies, thesis, and important takeaways for students which may help them to ace competitive exams after graduation as well. Moreover, since students after admission gets confused about various domains, projects, mentors and important tools and equipment’s related to it. We would make sure to reach them out in the best possible way. For this we would be making them a part of our community under the community portal of our start- up where they can",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Dilip Chaubisa"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "IndiGAims",
    desc: "NEP suggests holistic development of children but the tools for the same are missing in the Indian schools. While Yoga is originated from India, only 7% of Indians practice Yoga regularly. Yoga is mostly associated with exercise and fitness but has to do a lot with spiritual, mental, and physical equilibrium and therefore it is a way of life every Indian must follow to stay physically and mentally fit while rising spiritually. This gap in people knowing about yoga and practicing yoga is the knowledge gap which can be filled by adequate knowledge resources. The most interesting, innovative, and indulging way of learning for individuals, friends, and family is play and we are developing the first ever board game based on the science of yoga. This will not only educate the players about the fundamentals of yoga in a fun way but would also help them initiate their yoga journey thereby promoting yoga and a healthy lifestyle. We wish to promote holistic education in schools and this is an innovative move for children to learn and practice yoga and become yogis for lifetime. This innovation would not only promote yoga, but also promote game based learning, emotional, social, spiritual development, improvement in reading, focus, bonding, and providing an aim to the future of India.",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Raviraj singh Naruka"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "HYBRID CAUTERY PENCIL",
    desc: "COMBINE HANDLE MONOPOLAR+BIPOLAR CAUTERY PENCIL ,WHICH IS USER FRIENDLY DURING SURGERY",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Dr. Tushar .I .Kanajariya"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "AUTOMATED DERMATOME",
    desc: "A DEVICE WHICH WILL MAKE, SKIN GRAFTING EASY, SIMPLE AND IS OPERATOR INDEPENDENT",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Dr. Mohini Parmar"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "PATectual IP Law Services LLP",
    desc: "We are trying to build a data repository and anlytical tool with respect to free to use and cutting edge latest technology based on the patent information. Based on which we will categorize industry wise information and use to solve the industry problems with less investment on solution developments.",
    phone: "9898801467",
    site: "www.susec.ac.in",
    user: "Kinjalben Patel"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "J M Patel Engineering Private Limited",
    desc: "1.Multi feature allowing multi task without switching time 2.Rotavator and Cultivator are flexible and can be handled through lever 3.Machine in control of driver while seating during field work and turning 4.Only 5-10 minutes required for the use of other equipment for furrow & making of seeds drilling compare to 1 hours of competitors machines. 5. Saving time, fuel & cost compare to competitors i.e. 25% to 50% more efficient",
    phone: "9714643757",
    site: "www.susec.ac.in",
    user: "Jignesh Mafatbhai Patel"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Innovative Unmanned Systems",
    desc: "Over compact design and folding methodology will make the drone carrying that easy that it can be carried even on an activa type scooter from one location to another. Out of the box, it can be made Ready to Fly in 2 minutes. Also, this all compactness does not affect the performance. This drone will increase the overall efficiency of the project.",
    phone: "7229066651",
    site: "www.susec.ac.in",
    user: "Garvit Pandya"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Bijoi",
    desc: "Some of our products have a Handloom tag authorized by the Government of Gujarat. This demonstrates an authenticity of our product. We strive to be a resource that inspires people by sharing ideas and narratives about the crafts processes and techniques. Our goal is to benefit these artisans both on a social and economic level. At BIJOI, we constantly strive to recognize these nameless artisans who contribute so much to the creation of the products but are unable to receive credit for it. That is how customers too are able connect with these artisans on a deeper level with an increased trust and a confidence.",
    phone: "7621054747",
    site: "www.susec.ac.in",
    user: "Hardi Shah"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "SocioBee",
    desc: "SocioBee is solving the problem of inefficient and time-consuming social media management. Many businesses struggle to keep up with the demands of managing multiple social media accounts across various platforms. It often involves logging in and out of different accounts, manually scheduling posts, and analyzing data from separate sources. This fragmented approach leads to inefficiencies, missed opportunities, and difficulty in maintaining a consistent and engaging social media presence. SocioBee provides a centralized solution, offering a single platform to manage all social media accounts, automate scheduling, and access comprehensive analytics. By streamlining these processes, SocioBee eliminates the hassle and empowers businesses to effectively manage their social media presence with ease.",
    phone: "9428245134",
    site: "www.susec.ac.in",
    user: "Bhavya Pandya"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Vulfosec",
    desc: "Vulfosec is a bug bounty platform that hosts a program in which companies offer monetary rewards to individuals who are able to find and report software vulnerabilities. Our platform features a transparent tracking system for submissions, a proprietary methodology to reduce duplicate reports, and a conflict-resolution system for both researchers and companies. We are committed to advancing the bug bounty industry by standardizing the process and creating a more cohesive ecosystem.",
    phone: "9737886502",
    site: "www.susec.ac.in",
    user: "Mitul Kalsariya"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "QuantumEV Tech",
    desc: "Our startup is dedicated to improving the manufacturing capabilities and efficiency of electric motor components, with a focus on researching and developing new technologies and processes. By investing in R&D, we are able to produce high-quality electric motor components that meet the needs of the Indian market, and have the potential to be competitive on a global scale. We are committed to supporting the growth of local industries and driving the shift towards electric transformation. To achieve this, we have developed and are continuing to design specialised machinery that is not currently available from Indian manufacturers, which will allow us to increase our production capacity and improve our product offerings. Our ultimate goal is to help reduce dependency on foreign sources for electric motor components and contribute to the growth of a strong domestic supply chain.",
    phone: "9033794951",
    site: "www.susec.ac.in",
    user: "Harshil Dobairya"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Passdn",
    desc: "Passdn solves these problems by providing ONDC-integrated subscription-based SaaS to Cab/Auto Drivers with 0% Commission, Our SaaS allows drivers to get multiple bookings with the help of the ONDC ecosystem",
    phone: "8160869109",
    site: "www.susec.ac.in",
    user: "Keval Sondarva"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Mexvolt",
    desc: "An electrical connector with over-mold and press lock comprising a contact type male and female connector having at least one electrical contact connected to male type housing piece; a second housing piece female type having electrical contact on another end. lock latching surfaces, and a third housing piece over-moulded onto rear ends of the first and second housing pieces.",
    phone: "9426858334",
    site: "www.susec.ac.in",
    user: "Chirag Khant"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "018mm",
    desc: "Our product made of more than 90% plant derived ingredient. Also the synthetic ingredient we are using are inherent to human skin plus we are using vivo and vitro test certified ingredient for their assured results. Majority of the customer claims their hair condition is damaged after the treatment. we at 0.18mm do everything and anything that helps to improve the quality of hair and scalp.",
    phone: "8511102407",
    site: "www.susec.ac.in",
    user: "Bansi thoriya"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "citynect",
    desc: "Our platform directly connects bachelors with verified property owners, removing the need for intermediaries and significantly reducing costs. Through AI-driven algorithms, we provide personalized property recommendations that match individual preferences, saving time and effort. Additionally, we prioritize data security, safeguarding sensitive information to ensure a safe environment for all users. We aim to empower bachelors, especially females and those with limited parental control, to easily find accommodations without compromising on safety and comfort. By offering a trusted, one-stop platform, we aim to streamline the accommodation search process, making it accessible, efficient, and free from exploitation.",
    phone: "7226876755",
    site: "www.susec.ac.in",
    user: "Hemant Solanki"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Remark",
    desc: "Erasable Ink for Inkjet printers & A low cost device. Through our developed ink a user can print the information on currently available copier paper, put the paper in our device which erases the ink and same paper can be used to print again. USP of the product concept is that same paper, same inkjet printer is able function differently through our newly developed ink & device to erase the ink. The projected cost of the Ink and erasing device is very low cost & affordable. Instead of using new paper every Time for temporary use, you can use the same paper more than 5 times. The method is very effective & low cost that can be pitched into market very easily. The Method Works!",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Kalpit Doshi"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Chemical Free Preservator",
    desc: "Preservative made without mercury and chemical free",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Kotadiya Chirag"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "The Forest Flame",
    desc: "To overcome the problem here natural and herbal ingredients were used to formulate poly herbal products. There are so many herbal products available in the market already, but no any product containing the combination of herbal material used in these products. “Flame of forest” (kesudo) was introduced for the first time in these two different products. Also the one single product may have several uses as liquid wash and poly herbal soap may useful for the skin and hair wash both, along with this it may useful as a hand wash and face wash too.",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Stuti Pandya"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "HerVagiCure",
    desc: "My startup is focused towards the indication of vaginal infections that occur in women at their reproductive age. This may lead to harmful infections within them and for pregnant females may also hinder their condition of the foetus. Currently suppositories exist in the market to cure this condition however due to the comparitively acidic pH (3.8 to 5) many drugs get dissolved before they reach to the site of action. Hence novel measures to make sure that the drug reaches the site of action and it is released in a controlled manner are necessary. To cope up with this idea I’m in the process of developing an in-situ gel which comprises of certain oils such as tree tea oil, coconut oil, sesame oil, lavender oil, etc that are basically antibacterial in nature and can hinder the growth of microorganisms present in the vagina. This in situ gel starts with the administration of my dosage form in the form of suppositories which when administered in the body will be stable as such and as it enters the vagina and comes in contact with the vaginal fluid pH, the covering will disintegrate and hence the drug will be released in liquid form. I will develop my product in such a way that when the liquid oil will get released in the vagina, it will convert to gel and stick to the vaginal surface from where the drug will be released in a controlled manner. Thus due to this the problem of uncontrolled drug release and loss of drug from vaginal area will be avoided.",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Bhavarth Dave"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Happy Migraine Devices",
    desc: "Migraine is a complex neurological disease with a genetic background. Migraine is characterised by spontaneous attacks of unilateral, frequently throbbing headaches that are aggravated by movements and accompanied by additional central symptoms like nausea and hypersensitivity to light and sound. Cause of disability in people under 50 years of age & its prevalence affecting 14.4% of the population worldwide. Although the pain of migraine is most commonly perceived in the ophthalmic distribution of the trigeminal nerve, a substantial percentage of migraines are reported to experience pain in the neck (39.7%) and occiput (39.8%) with their attacks. Migraine triggers are patient specific. Examples include food additives, caffeine, artificial sweeteners, and delayed or missed meals. To determine the probability of an item being a trigger, patients should avoid the item for at least 4 weeks and then slowly reintroduce it, keeping in mind that migraines may start 24 to 48 hours before headache onset. Methodology: A 30 Patients diagnosed with past migraine historywere recruited based on the inclusion and exclusion criteria. Happy placement device was use for pain and disabilityfor 20 minute session, alternating days for 2 week.Pre and Post NPRS and MIDAS scale for Pain and Disability, was taken as an outcome measure and analysis was performed by using SPSS. Results:The study showedsignificant difference was seen in NPRS (P= <0.01)AndMIDAS (P= <0.01). The data was analysed using SPSS version 26 and Microsoft Excel 2007.Level of significance was kept at 5% with confidence interval (CI) at 95%. Paired t-test was applied for comparison of pre and post for all outcome measures. Conclusion:The Present Study Concluded that Happy placement device was effectivefor reduction in Pain and Disabilityin patients with Migraine. Keywords: Pain management, Disability, Migraine, Aura, TENS.",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Harshil Dudhagara"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Allergone",
    desc: "Homeopathic Nasal Spray is best placed to treat all sorts of allergies or allergic disorders. The reason for this is that it does not try to treat the symptoms of the allergies. Instead, it works to root out the cause of the allergies. The root cause in allergies happens to be a hyperactivity of the immune system. This hyperactive immune system goes into overdrive when it comes in contact with certain things. These things may be harmless in themselves. But the immune system tends to look at them as offenders and tries to react in a defensive manner. It tries to wash them off by producing excess mucus. The homeopathic nasal spray repair the immune system and the hyperactivity is corrected. Then the body reacts normally to the same things that used to cause the allergies.",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Dr. Nirav J Ganatra"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "CHAKRAGAJ SPRAY",
    desc: "CHAKRAGAJ SPRAY FOR THE SKIN INFECTION.",
    phone: "6359136381",
    site: "www.susec.ac.in",
    user: "Bhatt Amit Umeshbhai"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Agro-Welly",
    desc: "Our system provides a clean, germ-free, and dry toilet seat after every use. The product is fully autonomous and retrofittable, i.e. it can fit into any existing western toilets and will clean the seat every time after it is used.",
    phone: "9426374740",
    site: "www.susec.ac.in",
    user: "Denish Ghodasara"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "ATSC",
    desc: "Our system provides a clean, germ-free, and dry toilet seat after every use. The product is fully autonomous and retrofittable",
    phone: "9004528799",
    site: "www.susec.ac.in",
    user: "Purva Sharma"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "SOUL BAR",
    desc: "To address the pressing need for a cruelty-free Health bar rooted in Ayurvedic principles, a comprehensive solution can be implemented. A new product, named \"Soul Bar\" introduced to the market.",
    phone: "9998999978",
    site: "www.susec.ac.in",
    user: "Dr.RAHUL MODI"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "To Evaluate the Therapeutic honey for using Botanical Composition from the nature",
    desc: "The innovation aims to produce the rare honey produced by Trigona bees which is having significant medicinal properties.",
    phone: "9033695306",
    site: "www.susec.ac.in",
    user: "Rajatkumar Rameshbhai Patel"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "DHARTIPUTRA",
    desc: "Our platform introduces a game-changing solution by seamlessly connecting all APMCs across Gujarat State onto a unified platform.",
    phone: "7878779790",
    site: "www.susec.ac.in",
    user: "SAGAR TADA"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Semiconductor Ceramic",
    desc: "1. Unique Heating Solution to all Industries",
    phone: "8690252486",
    site: "www.susec.ac.in",
    user: "Sanjay Patel"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "32 DAANTO KI SEVA",
    desc: "appointment booking with maintaining EMR records documenting every case",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Dr.Gaurav Borde"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "MedITravels",
    desc: "EMR , documenting every case and with AI and ABHA by providing government data which enable them to make polices for the people",
    phone: "9033339035",
    site: "www.susec.ac.in",
    user: "Dr Ravi Gondaliya"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "IncomeTaxSimplified",
    desc: "One click filing of an income tax return through the integration of Income Tax portal and Digi locker for individual taxpayers.",
    phone: "8200362890",
    site: "www.susec.ac.in",
    user: "Shubham Makhecha"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Advait Ayurveda",
    desc: "We are healthtech start-up which enables users to connect with us/their physician everyday which will provide early detection of any illness which results in better treatment outcomes.",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Harshit Solanki"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "TruBruh Coffee",
    desc: "TruBruh brings you delicious flavored instant coffee made from 100% natural ingredients. Enjoy cafe-like coffee at home with ease and convenience. Enjoy black, Hot or Cold",
    phone: "8490991979",
    site: "www.susec.ac.in",
    user: "Akash Sangani"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Sahdik Enviro Tech",
    desc: "The Automatic Water Filling System (AWFS) is an innovative solution designed to optimize water usage in industrial and agricultural settings. It automates the water filling process, reducing the chances of overfilling, spillage, and wastage. The system uses advanced sensors and control mechanisms to precisely manage water levels, ensuring that only the required amount of water is used. By improving efficiency and reducing manual intervention, the AWFS addresses the global issue of water scarcity. It has the potential to save up to 35 crore liters of water per day, offering a scalable and sustainable solution to water management challenges across various sectors. The system is faster, easier to operate, and can be customized to meet the specific needs of different industries and agricultural applications.",
    phone: "7203843686",
    site: "www.susec.ac.in",
    user: "Mr. Sahil R. Rathod"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "HydroGen",
    desc: "ADVANCED PRESSURE SYSTEM: Replaces old model with a pressure driven design for more efficient water circulation. NET ZERO WATER USAGE: improves cooling performance with net zero water consumption compared to previous condensor.",
    phone: "8155928626",
    site: "www.susec.ac.in",
    user: "DHOKIYA BHARGAV MAGANBHAI"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Microneedle transdermal formulation",
    desc: "Arthritis is a very common chronic disease but drugs given by oral route has major side effects. So I am going to prepare a formulation that overcome the challenges of the drug administration by oral route.",
    phone: "9825774154",
    site: "www.susec.ac.in",
    user: "Dhwani Bhatt"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "\"AgriVision\" : UAV-Based Crop Detection with ML",
    desc: "Here we come up with the solution of plant detection of plants using Drone. This system will provide real-time monitoring and analysis, allowing farmers to take action on the disease spread and protect crops. 1. Hardware: High-performance drones capable of carrying imaging equipment and sensors, with features such as GPS navigation, stable flight control, Digital signal processing, RGB Camera. 2. Software: An App for Real-time image processing and execute automated flight paths covering entire fields efficiently. 3. RGB Cameras: Capture high-resolution images and though machine learning it will give output to App. 4. Image Processing Algorithms: Analyse captured images to identify patterns in the plant. 5. Data processing: Managing and analysing large volumes of data captured by drones to ML model.",
    phone: "9426970573",
    site: "www.susec.ac.in",
    user: "Vyomendrasinh D. Jadav"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Metal oxide based nanoparticles and its composites for removal of chemical impurities from water",
    desc: "Our innovation introduces metal oxide-based nanoparticles and their composites as a groundbreaking solution for removing chemical impurities from water. Conventional water purification systems often fall short in tackling complex contaminants like heavy metals, toxic industrial chemicals, and persistent organic pollutants. Our technology utilizes nanoparticles of metal oxides, such as MgO and CdO, which exhibit remarkable surface reactivity, adsorption capabilities, and catalytic properties. These nanoscale particles offer a significantly higher surface area-to-volume ratio compared to conventional materials, resulting in improved efficacy in binding and neutralizing harmful impurities.",
    phone: "9664739693",
    site: "www.susec.ac.in",
    user: "Nirali N. Udani"
  },
  {
    img: "img/beneficiary/IMG-20230406-WA0009 - Swati Gharat.jpg",
    title: "Keenkey LLP (Indigaims)",
    desc: "NEP suggests holistic development of children but the tools for the same are missing in the Indian schools. While Yoga is originated from India, only 7% of Indians practice Yoga regularly. Yoga is mostly associated with exercise and fitness but has to do a lot with spiritual, mental, and physical equilibrium and therefore it is a way of life every Indian must follow to stay physically and mentally fit while rising spiritually. This gap in people knowing about yoga and practicing yoga is the knowledge gap which can be filled by adequate knowledge resources. The most interesting, innovative, and indulging way of learning for individuals, friends, and family is play and we are developing the first ever board game based on the science of yoga. This will not only educate the players about the fundamentals of yoga in a fun way but would also help them initiate their yoga journey thereby promoting yoga and a healthy lifestyle. We wish to promote holistic education in schools and this is an innovative move for children to learn and practice yoga and become yogis for lifetime. This innovation would not only promote yoga, but also promote game based learning, emotional, social, spiritual development, improvement in reading, focus, bonding, and providing an aim to the future of India.",
    phone: "9265348978",
    site: "http://www.indigaims.com",
    user: "Raviraj singh Naruka"
  },
  {
    img: "img/beneficiary/susec png.png",
    title: "Galaxy EcoEnergy Private Limited",
    desc: "Galaxy EcoEnergy Private Limited",
    phone: "7990561767",
    site: "www.susec.ac.in",
    user: "Tulshi Shiyani"
  }
];

/**
 * GranteeList Page Component
 */
const GranteeList = () => {
  return (
    <main id="main" className="startup-beneficiary-page space">
      <section id="about_us">
        <div className="startup-beneficiary-container">
          <div className="startup-beneficiary-card">
            <div className="startup-beneficiary-section-header">
              <h2>Startup Beneficiary</h2>
            </div>

            <div className="startup-beneficiary-card-body">
              <div className="startup-beneficiary-row">
                {grantees.map((grantee) => (
                  <div key={`${grantee.title}-${grantee.user}`} className="startup-beneficiary-col">
                    <div className="startup-beneficiary-gallery">
                      <div className="startup-beneficiary-main-row">
                        <div className="startup-beneficiary-image-col">
                          <img
                            src={`/susec-assets/${grantee.img}`}
                            alt={grantee.title}
                            onError={(event) => {
                              event.currentTarget.src = '/susec-assets/img/su_logo.png';
                            }}
                          />
                        </div>

                        <div className="startup-beneficiary-content-col">
                          <div className="startup-beneficiary-content">
                            <h6>
                              <b>{grantee.title}</b>
                            </h6>
                            <div className="startup-beneficiary-text-truncate">
                              <p>{grantee.desc}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <table className="startup-beneficiary-info-table">
                        <tbody>
                          <tr>
                            <td><i className="fa fa-phone text-primary"></i> {grantee.phone}</td>
                            <td><i className="fa fa-search text-primary"></i> {grantee.site}</td>
                            <td><i className="fa fa-user text-primary"></i> {grantee.user}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GranteeList;
