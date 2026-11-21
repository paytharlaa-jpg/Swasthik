export interface Therapy {
  slug: string;
  name: string;
  sanskrit: string;
  tagline: string;
  short: string;
  image: string;
  seoTitle: string;
  metaDescription: string;
  keywords: string[];
  whatItIs: string[];
  process: { title: string; description: string }[];
  benefits: string[];
  helpsWith: string[]; // condition slugs
  sessionLength: string;
  courseLength: string;
  safety: string[];
  faqs: { question: string; answer: string }[];
}

export const therapiesData: Therapy[] = [
  {
    slug: "agnikarma",
    name: "Agnikarma Therapy",
    sanskrit: "Agnikarma",
    tagline: "Precision heat for stubborn pain points.",
    short:
      "A classical Sushruta procedure that applies controlled heat with a metal shalaka to precise tender points to calm chronic pain.",
    image: "/images/treatments/agnikarma-cupping-therapy.jpg",
    seoTitle: "Agnikarma Therapy in Hyderabad for Sciatica, Heel & Joint Pain",
    metaDescription:
      "Agnikarma therapy in Kukatpally, Hyderabad by Dr. Krishna Mohan. Classical thermal micro-cautery for sciatica, heel pain, frozen shoulder, knee and back pain. Book on WhatsApp.",
    keywords: [
      "Agnikarma therapy Hyderabad",
      "Agnikarma for sciatica",
      "Agnikarma heel pain treatment",
      "Agnikarma Kukatpally",
      "thermal cautery Ayurveda",
    ],
    whatItIs: [
      "Agnikarma literally means 'fire procedure'. Described by Acharya Sushruta, it uses a heated metal instrument (shalaka, often made of panchadhatu or copper) to deliver brief, controlled heat to specific points on the skin.",
      "In Ayurvedic terms, the heat counters the cold, dry and mobile qualities of aggravated Vata and Kapha that cause pain and stiffness in muscles, tendons and joints.",
      "At Swasthik Ayurveda, Agnikarma is used as a targeted pain-relief tool within a wider treatment plan, never as a stand-alone 'miracle' procedure.",
    ],
    process: [
      { title: "Point mapping", description: "The doctor examines you and marks the most tender points along the affected muscle, tendon or joint." },
      { title: "Preparation", description: "The area is cleaned and the shalaka is heated to a controlled temperature." },
      { title: "Micro-application", description: "Very brief dot-like touches are made at each marked point. Each touch lasts a fraction of a second." },
      { title: "Soothing care", description: "Aloe vera or a cooling herbal paste is applied, with simple aftercare advice for the next 24 hours." },
    ],
    benefits: [
      "Fast relief of localised, point-specific pain",
      "Reduced muscle and tendon stiffness",
      "Improved range of movement after a few sessions",
      "Drug-free option that fits alongside oil therapies",
    ],
    helpsWith: ["sciatica", "back-pain", "lower-back-pain", "knee-pain", "knee-osteoarthritis", "cervical-spondylosis"],
    sessionLength: "15–20 minutes",
    courseLength: "Usually 3–5 sessions, 7 days apart",
    safety: [
      "Not done over open wounds, varicose veins or areas of reduced sensation.",
      "Tell the doctor if you have diabetes, bleeding disorders or are pregnant.",
      "Keep the area dry for 24 hours. Small dot marks fade over a few weeks.",
    ],
    faqs: [
      { question: "Is Agnikarma painful?", answer: "Most patients describe a quick, sharp warmth at each point that passes in a second. The procedure is short and you can walk out normally afterwards." },
      { question: "Will Agnikarma leave marks?", answer: "Tiny superficial dot marks are common and usually fade over a few weeks. The doctor keeps applications as small and precise as possible." },
      { question: "Which conditions respond best to Agnikarma?", answer: "Localised pain such as heel pain (plantar fasciitis), tennis elbow, frozen shoulder, sciatica trigger points, and knee or low back pain with clear tender spots tend to respond well." },
    ],
  },
  {
    slug: "kati-vasti",
    name: "Kati Vasti",
    sanskrit: "Kati Basti",
    tagline: "A warm oil pool for the lower spine.",
    short:
      "Warm medicated oil is held in a dough ring over the lower back to relax spasm, nourish tissues and ease disc and nerve pain.",
    image: "/images/treatments/spine-care-assessment.jpg",
    seoTitle: "Kati Vasti Treatment in Hyderabad for Back Pain & Disc Bulge",
    metaDescription:
      "Kati Vasti (Kati Basti) at Swasthik Ayurveda, Kukatpally, Hyderabad. Warm medicated oil therapy for lower back pain, L4-L5 disc bulge, slip disc and sciatica.",
    keywords: [
      "Kati Vasti Hyderabad",
      "Kati Basti treatment",
      "Kati Vasti for disc bulge",
      "Ayurvedic oil therapy for back pain",
      "Kati Vasti Kukatpally",
    ],
    whatItIs: [
      "Kati Vasti is a localised Snehana (oleation) therapy. A ring made of black gram dough is fixed on the lower back and filled with warm, medicated herbal oil chosen for your condition.",
      "The oil is kept at a steady warm temperature for the session. The heat and the oil together relax the paraspinal muscles, improve local circulation and soothe irritated nerve roots.",
      "It is one of the most used therapies at Swasthik Ayurveda for lumbar spine problems, often combined with Patra Pinda Sweda and internal medicines.",
    ],
    process: [
      { title: "Assessment", description: "Your MRI or X-ray and symptoms are reviewed to choose the right oil and duration." },
      { title: "Dough ring", description: "A leak-proof ring of herbal dough is shaped over the painful lumbar segment." },
      { title: "Warm oil pooling", description: "Warm medicated oil is poured in and replaced as it cools, keeping a constant gentle heat." },
      { title: "Massage & rest", description: "The area is gently massaged, followed by mild fomentation and a short rest." },
    ],
    benefits: [
      "Relaxes lumbar muscle spasm",
      "Eases radiating pain from disc bulges",
      "Improves flexibility when bending and sitting",
      "Nourishes and lubricates spinal tissues",
    ],
    helpsWith: ["l4-l5-disc-bulge", "slip-disc", "lower-back-pain", "back-pain", "sciatica"],
    sessionLength: "45–60 minutes",
    courseLength: "Commonly 7–14 consecutive days",
    safety: [
      "Not advised during fever, acute infection or on broken skin.",
      "Avoid cold drinks, cold baths and heavy lifting on therapy days.",
      "Red-flag symptoms such as loss of bladder control need emergency care first.",
    ],
    faqs: [
      { question: "Can Kati Vasti help an L4-L5 disc bulge?", answer: "Kati Vasti is commonly used to reduce muscle spasm and pain linked to lumbar disc bulges. Results depend on the size of the bulge, nerve involvement and how long symptoms have lasted, which the doctor assesses first." },
      { question: "How many Kati Vasti sessions are needed?", answer: "A typical course is 7 to 14 days, but the number is set after examination and may be adjusted based on your response." },
      { question: "Can I go to work after Kati Vasti?", answer: "Yes. Most people return to normal activity the same day. Avoid heavy lifting and cold exposure for the rest of the day." },
    ],
  },
  {
    slug: "janu-vasti",
    name: "Janu Vasti",
    sanskrit: "Janu Basti",
    tagline: "Warm oil therapy that keeps knees moving.",
    short:
      "Warm medicated oil is held over the knee joint to ease stiffness, crepitus and pain from osteoarthritis and wear.",
    image: "/images/treatments/joint-pain-therapy.jpg",
    seoTitle: "Janu Vasti Treatment in Hyderabad for Knee Pain & Osteoarthritis",
    metaDescription:
      "Janu Vasti (Janu Basti) knee therapy at Swasthik Ayurveda, Kukatpally, Hyderabad. Ayurvedic care for knee osteoarthritis, crepitus and knee stiffness by Dr. Krishna Mohan.",
    keywords: [
      "Janu Vasti Hyderabad",
      "Janu Basti knee treatment",
      "Ayurvedic knee pain treatment Hyderabad",
      "knee osteoarthritis Ayurveda",
      "Janu Vasti Kukatpally",
    ],
    whatItIs: [
      "Janu Vasti is the knee version of the classical Vasti oil-pooling therapies. A dough ring is built around the kneecap and filled with warm medicated oil.",
      "In Ayurveda, knee osteoarthritis is described as Sandhigata Vata, where dryness and wear reduce the joint's natural lubrication (Shleshaka Kapha). Warm oil therapy aims to counter that dryness.",
      "We pair Janu Vasti with strengthening exercises and diet advice so that gains hold up after the course ends.",
    ],
    process: [
      { title: "Knee evaluation", description: "Range of motion, swelling, crepitus and X-ray grade are checked." },
      { title: "Ring placement", description: "A herbal dough ring is fixed around one or both knees." },
      { title: "Warm oil retention", description: "Warm oil is held in place and refreshed to keep a steady temperature." },
      { title: "Fomentation", description: "Gentle massage and herbal steam or bolus fomentation finish the session." },
    ],
    benefits: [
      "Less morning stiffness",
      "Easier stair climbing and sitting down",
      "Reduced creaking and grinding sensation",
      "Supports quadriceps rehab exercises",
    ],
    helpsWith: ["knee-osteoarthritis", "knee-pain"],
    sessionLength: "40–50 minutes",
    courseLength: "Commonly 7–14 days",
    safety: [
      "Not done on acutely hot, red or infected joints.",
      "Severe deformity or grade 4 osteoarthritis may need orthopaedic opinion as well.",
    ],
    faqs: [
      { question: "Can Janu Vasti avoid knee replacement?", answer: "For early and moderate osteoarthritis, Janu Vasti with exercise and weight management can improve pain and function and may delay the need for surgery. Advanced bone-on-bone damage may still need a surgical opinion." },
      { question: "Is Janu Vasti suitable for elderly patients?", answer: "Yes, it is gentle and non-invasive. The doctor checks blood pressure, skin and joint condition before starting." },
      { question: "Do I need to stop my current medicines?", answer: "Do not stop any prescribed medicine on your own. Bring your list to the consultation and the doctor will advise." },
    ],
  },
  {
    slug: "greeva-vasti",
    name: "Greeva Vasti",
    sanskrit: "Greeva Basti",
    tagline: "Neck relief for the laptop generation.",
    short:
      "Warm medicated oil is pooled over the neck to ease cervical stiffness, tech-neck tension and radiating arm pain.",
    image: "/images/treatments/oil-therapy-massage.avif",
    seoTitle: "Greeva Vasti in Hyderabad for Neck Pain & Cervical Spondylosis",
    metaDescription:
      "Greeva Vasti (Greeva Basti) for neck pain and cervical spondylosis at Swasthik Ayurveda, Kukatpally, Hyderabad. Relief for stiffness, tech neck and arm tingling.",
    keywords: [
      "Greeva Vasti Hyderabad",
      "Greeva Basti neck pain",
      "cervical spondylosis Ayurvedic treatment",
      "neck pain treatment Kukatpally",
      "tech neck Ayurveda",
    ],
    whatItIs: [
      "Greeva Vasti is an oil-pooling therapy over the cervical spine. A dough ring is placed at the back of the neck and filled with warm medicated oil.",
      "It targets stiffness, muscle tightness and nerve irritation that cause neck pain, headaches, shoulder heaviness and tingling in the arms.",
      "For desk workers, it is combined with posture correction and simple neck exercises.",
    ],
    process: [
      { title: "Cervical exam", description: "Neck movement, nerve signs and imaging are reviewed." },
      { title: "Ring placement", description: "You lie face-down while a dough ring is fixed over the neck." },
      { title: "Warm oil pooling", description: "Warm oil is held and refreshed for the session." },
      { title: "Release", description: "Neck and shoulder massage, then gentle fomentation." },
    ],
    benefits: [
      "Eases neck stiffness and spasm",
      "Lighter shoulders and upper back",
      "Can reduce tension headaches",
      "Supports relief of arm tingling from nerve irritation",
    ],
    helpsWith: ["cervical-spondylosis", "back-pain"],
    sessionLength: "40–45 minutes",
    courseLength: "Commonly 7–10 days",
    safety: [
      "Sudden severe weakness or loss of balance needs urgent medical evaluation first.",
      "Avoid cold air and long screen sessions on therapy days.",
    ],
    faqs: [
      { question: "Does Greeva Vasti help with vertigo from cervical spondylosis?", answer: "Many patients with neck-related dizziness report improvement when neck stiffness eases. The doctor first rules out other causes of vertigo." },
      { question: "How soon will I feel relief?", answer: "Many people feel lighter after the first few sessions. A full course is planned for lasting change." },
    ],
  },
  {
    slug: "panchakarma",
    name: "Panchakarma",
    sanskrit: "Pancha Karma",
    tagline: "The deep reset. Five classical cleanses.",
    short:
      "The classical five-step Ayurvedic detox and rejuvenation programme, planned around your body type and condition.",
    image: "/images/treatments/panchakarma-therapy.jpg",
    seoTitle: "Panchakarma Treatment in Hyderabad | Authentic Ayurvedic Detox",
    metaDescription:
      "Authentic Panchakarma in Kukatpally, Hyderabad. Doctor-supervised Vasti, Virechana, Nasya and rejuvenation programmes for chronic pain, spine and joint conditions.",
    keywords: [
      "Panchakarma Hyderabad",
      "Panchakarma treatment Kukatpally",
      "Ayurvedic detox Hyderabad",
      "Vasti Chikitsa",
      "Panchakarma for back pain",
    ],
    whatItIs: [
      "Panchakarma means 'five actions': Vamana, Virechana, Vasti, Nasya and Raktamokshana. These are classical cleansing procedures that remove accumulated doshas and metabolic waste (Ama).",
      "Not every patient needs all five. At Swasthik Ayurveda, the doctor selects only the procedures that suit your constitution, condition and season.",
      "For spine and joint disorders, Vasti (medicated enema therapy) is the most important, as it is considered the prime treatment for Vata.",
    ],
    process: [
      { title: "Purva Karma", description: "Preparation with internal oleation (Snehapana), external oil massage (Abhyanga) and sweating therapy (Swedana)." },
      { title: "Pradhana Karma", description: "The main cleanse, for example Vasti or Virechana, done under supervision." },
      { title: "Paschat Karma", description: "A planned diet and routine (Samsarjana Krama) to rebuild digestion." },
      { title: "Rasayana", description: "Rejuvenating herbs and lifestyle steps to keep the results." },
    ],
    benefits: [
      "Deep support for chronic Vata disorders",
      "Better digestion and energy",
      "Prepares the body to respond better to treatment",
      "Structured lifestyle reset",
    ],
    helpsWith: ["sciatica", "slip-disc", "l4-l5-disc-bulge", "knee-osteoarthritis", "back-pain"],
    sessionLength: "60–90 minutes per day",
    courseLength: "Usually 7–21 days depending on the plan",
    safety: [
      "Only done after a full medical history and examination.",
      "Not suitable during pregnancy, acute illness or severe weakness.",
      "Diet and rest instructions during the programme are part of the treatment.",
    ],
    faqs: [
      { question: "Is Panchakarma only for detox?", answer: "No. In Ayurveda it is both cleansing and therapeutic. For spine and joint problems, Vasti-based Panchakarma is used to calm aggravated Vata." },
      { question: "Do I need to stay at the clinic?", answer: "Most of our Panchakarma programmes are outpatient. You visit daily for sessions and follow diet guidance at home." },
      { question: "How do I know which Panchakarma I need?", answer: "Dr. Krishna Mohan decides after assessing your constitution (Prakriti), current imbalance (Vikriti), condition and overall strength." },
    ],
  },
  {
    slug: "shirodhara",
    name: "Shirodhara",
    sanskrit: "Shiro Dhara",
    tagline: "A steady stream that quiets the nervous system.",
    short:
      "A continuous stream of warm medicated oil on the forehead to calm the mind, improve sleep and ease stress-linked pain.",
    image: "/images/treatments/shirodhara-therapy.jpg",
    seoTitle: "Shirodhara in Hyderabad for Stress, Sleep & Headaches",
    metaDescription:
      "Shirodhara therapy at Swasthik Ayurveda, Kukatpally, Hyderabad. Warm oil stream therapy for stress, insomnia, tension headaches and neck-related pain.",
    keywords: [
      "Shirodhara Hyderabad",
      "Shirodhara for insomnia",
      "Shirodhara for stress",
      "Shirodhara Kukatpally",
      "Ayurvedic therapy for headache",
    ],
    whatItIs: [
      "In Shirodhara, warm oil, medicated milk or buttermilk flows in a slow, steady stream onto the forehead from a vessel swinging gently above.",
      "It is one of Ayurveda's most calming therapies, used for stress, anxiety, poor sleep and tension headaches.",
      "Chronic pain and stress feed each other. We often add Shirodhara to spine and neck care when sleep and stress are slowing recovery.",
    ],
    process: [
      { title: "Head & shoulder massage", description: "A short oil massage prepares the body to relax." },
      { title: "The stream", description: "Warm liquid flows steadily across the forehead for 30–45 minutes." },
      { title: "Rest", description: "You rest quietly so the nervous system can settle." },
      { title: "Clean-up", description: "Oil is gently removed and you are advised to avoid cold wind." },
    ],
    benefits: [
      "Deep relaxation and calmer mind",
      "Better quality sleep",
      "Fewer tension headaches",
      "Supports recovery in chronic pain",
    ],
    helpsWith: ["cervical-spondylosis", "back-pain"],
    sessionLength: "45–60 minutes",
    courseLength: "Commonly 5–14 days",
    safety: [
      "Not done during cold, fever or sinus congestion.",
      "Avoid head bath with cold water on the same day.",
    ],
    faqs: [
      { question: "Will I fall asleep during Shirodhara?", answer: "Many people do. That is a normal sign the nervous system is relaxing." },
      { question: "Can Shirodhara help with neck pain?", answer: "It is not a direct neck treatment, but by reducing stress and muscle guarding it supports therapies like Greeva Vasti for cervical problems." },
    ],
  },
  {
    slug: "cupping-therapy",
    name: "Cupping Therapy",
    sanskrit: "Alabu / Ghati Yantra",
    tagline: "Suction that releases deep, locked tissue.",
    short:
      "Vacuum and dry cupping to release tight fascia, improve local blood flow and ease muscle knots in the back, hips and shoulders.",
    image: "/images/treatments/body-detox-therapy.jpg",
    seoTitle: "Cupping Therapy in Hyderabad for Back, Hip & Shoulder Pain",
    metaDescription:
      "Dry and vacuum cupping therapy at Swasthik Ayurveda, Kukatpally, Hyderabad. Myofascial release for back pain, piriformis tightness, sciatica and shoulder stiffness.",
    keywords: [
      "cupping therapy Hyderabad",
      "cupping for back pain",
      "cupping Kukatpally",
      "myofascial release Hyderabad",
      "cupping for sciatica",
    ],
    whatItIs: [
      "Cupping creates gentle negative pressure on the skin using cups. Ayurveda describes similar techniques using gourds (Alabu) and pots (Ghati Yantra).",
      "The suction lifts skin and fascia, which can loosen tight bands of muscle and improve circulation in the area.",
      "We use it for trigger points in the lower back, gluteal and piriformis muscles (often involved in sciatica), and the shoulders.",
    ],
    process: [
      { title: "Locate tension", description: "Tight bands and trigger points are identified by touch." },
      { title: "Oil & cups", description: "Light oil is applied and cups are placed with controlled suction." },
      { title: "Static or moving", description: "Cups stay in place or glide along the muscle for 5–15 minutes." },
      { title: "Aftercare", description: "Cups are removed and the area is kept warm." },
    ],
    benefits: [
      "Releases muscle knots and fascial tightness",
      "Improves local blood flow",
      "Eases piriformis-related leg pain",
      "Pairs well with Agnikarma and oil therapies",
    ],
    helpsWith: ["sciatica", "back-pain", "lower-back-pain", "cervical-spondylosis"],
    sessionLength: "20–30 minutes",
    courseLength: "Usually 3–6 sessions",
    safety: [
      "Circular marks are normal and fade in a few days.",
      "Not done on thin, fragile skin, during pregnancy over the abdomen, or with bleeding disorders.",
    ],
    faqs: [
      { question: "Are cupping marks bruises?", answer: "They are caused by suction drawing blood toward the surface. They are usually painless and fade in 3 to 7 days." },
      { question: "Does cupping help sciatica?", answer: "When sciatica is linked to tight gluteal or piriformis muscles, cupping can reduce that muscle tension as part of a wider plan." },
    ],
  },
  {
    slug: "patra-pinda-sweda",
    name: "Patra Pinda Sweda",
    sanskrit: "Elakizhi",
    tagline: "Hot herbal leaf boluses for stiff, cold pain.",
    short:
      "Warm bundles of medicinal leaves fried in oil are pressed rhythmically over painful areas to relieve stiffness and swelling.",
    image: "/images/treatments/herbal-rejuvenation.png",
    seoTitle: "Patra Pinda Sweda (Elakizhi) in Hyderabad for Joint & Back Pain",
    metaDescription:
      "Patra Pinda Sweda (Elakizhi) herbal bolus therapy at Swasthik Ayurveda, Kukatpally, Hyderabad, for back pain, sciatica, stiffness and joint swelling.",
    keywords: [
      "Patra Pinda Sweda Hyderabad",
      "Elakizhi treatment",
      "herbal bolus massage Hyderabad",
      "Ayurvedic treatment for stiffness",
      "Elakizhi for back pain",
    ],
    whatItIs: [
      "Patra Pinda Sweda, known in Kerala as Elakizhi, is a sweating therapy using boluses (kizhi) of fresh medicinal leaves such as Nirgundi, Eranda and Arka, fried with herbs and oil.",
      "The warm boluses are dipped in heated oil and pressed rhythmically over the body or a specific painful area.",
      "Heat plus the leaves' properties reduce stiffness, swelling and cold, heavy pain typical of Vata-Kapha conditions.",
    ],
    process: [
      { title: "Bolus preparation", description: "Fresh leaves and herbs are chopped, fried and tied in cloth bundles." },
      { title: "Oil massage", description: "Medicated oil is applied to the area first." },
      { title: "Rhythmic fomentation", description: "Heated boluses are pressed and rubbed in a set rhythm." },
      { title: "Rest", description: "A short rest and warm water bath later in the day." },
    ],
    benefits: [
      "Eases stiffness and heaviness",
      "Reduces swelling around joints",
      "Relaxes deep muscle spasm",
      "Improves circulation and mobility",
    ],
    helpsWith: ["sciatica", "lower-back-pain", "knee-osteoarthritis", "knee-pain", "back-pain"],
    sessionLength: "40–45 minutes",
    courseLength: "Commonly 7–14 days",
    safety: [
      "Heat is checked against your skin first to avoid burns.",
      "Not done during fever or on inflamed, burning-type pain without assessment.",
    ],
    faqs: [
      { question: "Is Elakizhi the same as Patra Pinda Sweda?", answer: "Yes. Elakizhi is the Malayalam name; Patra Pinda Sweda is the Sanskrit name." },
      { question: "Can it be combined with Kati Vasti?", answer: "Yes, they are often given together for lower back and disc problems." },
    ],
  },
  {
    slug: "nasya",
    name: "Nasya",
    sanskrit: "Nasya Karma",
    tagline: "Medicated drops for the head and neck channels.",
    short:
      "Medicated oil drops in the nostrils after facial massage and steam, used in Ayurveda for neck, head and sinus problems.",
    image: "/images/treatments/herbal-decoction.webp",
    seoTitle: "Nasya Treatment in Hyderabad for Neck Stiffness & Headaches",
    metaDescription:
      "Nasya therapy at Swasthik Ayurveda, Kukatpally, Hyderabad. Classical nasal oil therapy for cervical spondylosis, neck stiffness, headaches and sinus congestion.",
    keywords: [
      "Nasya treatment Hyderabad",
      "Nasya for cervical spondylosis",
      "Nasya for headache",
      "Nasya Kukatpally",
      "Ayurvedic nasal therapy",
    ],
    whatItIs: [
      "Nasya is one of the five Panchakarma procedures. Ayurveda calls the nose the gateway to the head (Nasa hi Shiraso Dwaram).",
      "After a face and neck massage and steam, a measured dose of medicated oil is placed in each nostril.",
      "For cervical spondylosis and neck stiffness, Nasya is used alongside Greeva Vasti to support the head-and-neck region.",
    ],
    process: [
      { title: "Massage", description: "Gentle oil massage of the face, forehead, neck and shoulders." },
      { title: "Steam", description: "Mild steam opens the sinuses." },
      { title: "Drops", description: "Measured warm medicated oil drops are placed in each nostril." },
      { title: "Gargle & rest", description: "Warm water gargle and a few minutes of rest." },
    ],
    benefits: [
      "Supports relief of neck and shoulder stiffness",
      "Clearer sinuses and lighter head",
      "May reduce frequency of headaches",
      "Complements cervical therapies",
    ],
    helpsWith: ["cervical-spondylosis"],
    sessionLength: "20–30 minutes",
    courseLength: "Commonly 7 days",
    safety: [
      "Not done right after meals, during acute cold or fever, or during pregnancy.",
      "Avoid cold water, cold wind and dust on Nasya days.",
    ],
    faqs: [
      { question: "Does Nasya feel uncomfortable?", answer: "There may be brief tingling or a strong herbal taste in the throat. It settles within minutes." },
      { question: "How is Nasya linked to neck pain?", answer: "In Ayurveda, Nasya acts on structures above the collarbone. It is used to support Greeva Vasti and other cervical care." },
    ],
  },
];

export function getTherapy(slug: string) {
  return therapiesData.find((t) => t.slug === slug);
}
