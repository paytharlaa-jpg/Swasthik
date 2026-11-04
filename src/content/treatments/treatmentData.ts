import { Condition } from "@/types";

export const conditionsData: Condition[] = [
  {
    slug: "sciatica",
    name: "Sciatica",
    badge: "Spine & Nerve Care",
    shortDescription:
      "Radiating nerve pain that travels from the lumbar spine down through the buttocks and leg.",
    heroHeadline: "Specialized Ayurvedic Care for Sciatica (Gridhrasi)",
    heroSubheadline:
      "A holistic, non-surgical pathway focused on alleviating nerve irritation, improving lumbar mobility, and restoring natural movement.",
    image: "/images/treatments/agnikarma-cupping-therapy.jpg",
    overview: [
      "Sciatica is characterized by radiating pain that travels along the path of the sciatic nerve, originating from the lower back through the hip and buttock down each leg.",
      "In classical Ayurvedic texts, this condition is understood as 'Gridhrasi', a condition primarily involving aggravated Vata dosha, often associated with Kapha stagnation, affecting the Kandara (tendons) and Sira (vessels/nerves) of the lumbosacral region.",
      "At Swasthik Ayurveda Hyderabad, care is focused on reducing inflammatory distress, improving blood circulation around the nerve root, relaxing hypertonic paraspinal muscles, and restoring functional spinal balance without rushing to invasive interventions.",
    ],
    symptoms: [
      "Sharp, burning, or shooting pain radiating from the lower back or buttock down the back of the thigh and calf.",
      "Numbness, tingling sensations (paresthesia), or 'pins and needles' in the leg or foot.",
      "Difficulty sitting, standing for prolonged intervals, or rising from a chair.",
      "Weakness in the affected leg or foot when attempting to walk or climb stairs.",
      "Aggravation of pain with sudden coughing, sneezing, or forward bending.",
    ],
    contributingFactors: [
      "Lumbar disc herniation or bulge compressing the sciatic nerve root (commonly L4-L5 or L5-S1).",
      "Degenerative disc changes associated with age, prolonged desk sitting, and sedentary lifestyle.",
      "Piriformis syndrome caused by deep gluteal muscle spasm entrapping the sciatic nerve.",
      "Lumbar spinal canal narrowing (stenosis) or spondylolisthesis.",
      "Occupational strain involving heavy lifting, repetitive spinal twisting, or prolonged vehicular vibration.",
    ],
    whenToSeekCare: [
      "Persistent lower back and leg pain lasting longer than 1 to 2 weeks without signs of improvement.",
      "Pain that interferes with work, driving, sleep, or daily personal mobility.",
      "Sudden loss of bowel or bladder control (Cauda Equina syndrome requires immediate emergency surgical evaluation).",
      "Progressive foot drop or significant motor weakness in the leg.",
    ],
    ayurvedicApproach: [
      "Classical categorization into Vataja Gridhrasi (characterized by sharp radiating pain, stiffness, and tremors) and Vata-Kaphaja Gridhrasi (characterized by heaviness, numbness, and cold sensations).",
      "Nidana Parivarjana: Identifying and eliminating mechanical triggers, poor postural ergonomics, and dietary Vata-aggravating factors.",
      "Snehana (Oleation) and Swedana (Sudation): Medicated herbal oils penetrate deep tissues to pacify aggravated Vata and relieve spasms in the piriformis and lumbar muscles.",
      "Vasti Chikitsa: Administering specialized medicated enemas (Matra Vasti and Kashaya Vasti), considered the supreme treatment for Vata dosha and pelvic neuromuscular health.",
    ],
    therapiesOffered: [
      "Agnikarma (Thermal micro-stimulation for targeted pain desensitization)",
      "Kati Vasti (Warm medicated herbal oil retention over the lumbar spine)",
      "Patra Pinda Sweda (Herbal leaf bolus fermentation)",
      "Vacuum & Dry Cupping Therapy (Myofascial release for piriformis and gluteal tension)",
      "Tailored Matra Vasti (Nourishing medicated lipid administration)",
    ],
    consultationSteps: [
      {
        step: 1,
        title: "Clinical & Postural Evaluation",
        description:
          "Dr. Krishna Mohan performs a detailed examination including Straight Leg Raise (SLR), spinal range of motion, neurological checks, and MRI review.",
      },
      {
        step: 2,
        title: "Ayurvedic Dosha Assessment",
        description:
          "Determining whether the presentation is purely Vataja or Vata-Kaphaja to calibrate the choice of medicated oils and internal herbal extracts.",
      },
      {
        step: 3,
        title: "Structured Therapy Schedule",
        description:
          "Executing individualized sessions (e.g., Kati Vasti, Agnikarma, Swedana) alongside posture correction and gentle spinal decompression exercises.",
      },
      {
        step: 4,
        title: "Long-Term Rehabilitation & Prevention",
        description:
          "Providing core strengthening yogasanas, workplace ergonomic guidance, and herbal nourishment to prevent recurrence.",
      },
    ],
    faqs: [
      {
        question: "Can Ayurveda treat sciatica without surgery?",
        answer:
          "For the vast majority of sciatica cases where there is no critical neurological emergency (such as progressive loss of bowel/bladder control), Ayurvedic conservative therapies including Kati Vasti, Agnikarma, and customized herbal protocols provide significant pain relief, reduce inflammation, and restore functional mobility naturally.",
      },
      {
        question: "How quickly can I expect relief from sciatica symptoms?",
        answer:
          "While acute muscle spasm and nerve irritation may begin easing within 3 to 7 sessions of therapies like Kati Vasti and Agnikarma, comprehensive stabilization typically requires a planned course over several weeks depending on chronicity and MRI findings.",
      },
      {
        question: "Should I bring my MRI or X-ray reports to the consultation?",
        answer:
          "Yes. Reviewing your recent MRI, CT scan, or X-ray films allows Dr. Krishna Mohan to accurately correlate imaging findings with your clinical presentation and ensure safe, targeted therapy.",
      },
    ],
    relatedConditionSlugs: ["slip-disc", "l4-l5-disc-bulge", "lower-back-pain"],
  },
  {
    slug: "slip-disc",
    name: "Slip Disc (Herniated Disc)",
    badge: "Spinal Disc Rehabilitation",
    shortDescription:
      "Displacement or protrusion of the intervertebral disc cushion causing localized and radiating spinal distress.",
    heroHeadline: "Integrative Ayurvedic Management for Slip Disc",
    heroSubheadline:
      "Targeted non-invasive therapies designed to decompress the intervertebral spaces, nourish dried disc tissues, and support long-term spinal stability.",
    image: "/images/treatments/spine-care-assessment.jpg",
    overview: [
      "The spinal disc acts as a shock-absorbing fibrocartilaginous cushion between adjacent vertebrae. When the outer annulus fibrosus weakens or tears, the inner nucleus pulposus can protrude, leading to localized inflammation and nerve root compression.",
      "Ayurveda addresses disc disease through the lens of Asthi-Majja Dhatu Kshaya (depletion of bone and bone marrow tissue vitality) and localized Vata vitiation, leading to dryness (Rukshata) and fragility of connective tissue structures.",
      "Rather than forcibly pushing displaced tissues, Swasthik Ayurveda's protocol utilizes therapeutic oleation, localized fomentation, and specific herbal lipid matrices to reduce perineural edema, rehydrate neighboring ligamentous structures, and strengthen spinal musculature.",
    ],
    symptoms: [
      "Intense lower back pain that sharpens when bending, lifting, or sitting.",
      "Radiating pain shooting into the buttocks, thighs, calves, or toes.",
      "Sensation of tingling, electric shock-like sensations, or localized numbness along specific dermatomes.",
      "Spinal stiffness, loss of natural lumbar lordosis, and compensatory lateral tilt.",
      "Muscle spasms across the erector spinae muscles preventing upright posture.",
    ],
    contributingFactors: [
      "Gradual age-related disc dehydration and loss of viscoelasticity.",
      "Improper lifting mechanics, sudden jarring spinal loads, or sports trauma.",
      "Sedentary lifestyle with prolonged sitting posture weakening core and spinal stabilizers.",
      "Excessive body weight placing mechanical stress on the lower lumbar segments.",
      "Chronic emotional stress and nutritional deficiencies affecting connective tissue resilience.",
    ],
    whenToSeekCare: [
      "Back pain lasting more than 7 days accompanied by radiating sensations or leg heaviness.",
      "Persistent stiffness that prevents you from performing your workplace or domestic duties.",
      "Numbness in the saddle area (groin/buttocks) or acute weakness in raising the foot (requires emergency surgical review).",
      "Recurrent episodes of back lock or sudden incapacitating spasm.",
    ],
    ayurvedicApproach: [
      "Dhatu Poshana: Nourishing the degenerative intervertebral segment with medicated ghee and herbal formulations possessing regenerative and anti-inflammatory properties.",
      "Kati Vasti: A specialized ring of gram dough is placed over the affected spinal segment and filled with warm medicated oils like Mahanarayana and Sahacharadi to relieve nerve compression and rehydrate tissues.",
      "Spinal Alignment & Traction Support: Integrating classical Ayurvedic gentle decompression modalities to relieve mechanical intradiscal pressure.",
      "Rasayana Therapy: Internal herbal medicines such as Guggulu preparations, Shallaki, and Ashwagandha to fortify spinal ligaments.",
    ],
    therapiesOffered: [
      "Kati Vasti (Segmental oil pooling therapy)",
      "Patra Pinda Sweda (Leaf bolus fomentation for acute muscle guarding)",
      "Agnikarma (Precision thermal therapy for stubborn trigger points)",
      "Matra Vasti (Medicated therapeutic enema for systemic Vata pacification)",
      "Nabhi Basti & Abhyanga (Supportive abdominal and spinal stabilization)",
    ],
    consultationSteps: [
      {
        step: 1,
        title: "MRI & Physical Diagnostic Evaluation",
        description:
          "Thorough evaluation of disc herniation severity (bulge, protrusion, or extrusion) and clinical dermatomal correlation.",
      },
      {
        step: 2,
        title: "Acute Decompression Protocol",
        description:
          "Immediate reduction of acute spasm and nerve swelling using tailored Kati Vasti and localized herbal poultices.",
      },
      {
        step: 3,
        title: "Deep Tissue Nourishment",
        description:
          "Administering systemic Dhatu-strengthening therapies and therapeutic enemas to nourish disc tissues.",
      },
      {
        step: 4,
        title: "Spinal Ergonomics & Core Stability",
        description:
          "Prescribing posture realignment exercises, sitting support guidelines, and lifestyle maintenance.",
      },
    ],
    faqs: [
      {
        question: "Can an Ayurvedic doctor fix a slipped disc without surgery?",
        answer:
          "Over 90% of lumbar disc herniations can be managed conservatively without surgery. Ayurvedic therapies significantly decrease inflammation around compressed nerves, promote reabsorption of disc edema, and build muscular support around the spine.",
      },
      {
        question: "Is bed rest necessary during treatment?",
        answer:
          "Strict prolonged bed rest is no longer recommended. While rest during acute flare-ups is essential, controlled gentle movement combined with Ayurvedic therapies promotes better fluid exchange and tissue healing.",
      },
      {
        question: "How does Kati Vasti help in a slip disc?",
        answer:
          "Kati Vasti retains warm, medicated lipid compounds directly over the herniated segment. The bioactive herbal constituents penetrate deep into the paraspinal ligaments, improving circulation, easing muscle contracture, and relieving pressure on the exiting nerve root.",
      },
    ],
    relatedConditionSlugs: ["l4-l5-disc-bulge", "sciatica", "back-pain"],
  },
  {
    slug: "l4-l5-disc-bulge",
    name: "L4-L5 Disc Bulge",
    badge: "Lumbar Segment Specialization",
    shortDescription:
      "Bulging of the disc between the 4th and 5th lumbar vertebrae, the most frequent epicenter of chronic lower back and leg distress.",
    heroHeadline: "Targeted Ayurvedic Protocol for L4-L5 Disc Bulge",
    heroSubheadline:
      "Focused non-surgical lumbar therapies designed to relieve L5 nerve root impingement and restore spinal flexibility.",
    image: "/images/treatments/panchakarma-therapy.jpg",
    overview: [
      "The L4-L5 motion segment bears the highest mechanical load and rotational torque in the human spine, making it the most vulnerable location for disc bulges and protrusions.",
      "An L4-L5 bulge often impinges the exiting L5 nerve root, precipitating pain down the outer thigh, front of the leg, and extending into the great toe.",
      "Swasthik Ayurveda delivers an evidence-informed Ayurvedic protocol combining warm medicated Kati Vasti, targeted Agnikarma, and customized anti-inflammatory Rasayana preparations to relieve root pressure without invasive spinal surgery.",
    ],
    symptoms: [
      "Dull, persistent ache or sudden sharp pain centered in the low back above the beltline.",
      "Radiating discomfort traversing the lateral hip, thigh, and outer calf towards the big toe.",
      "Weakness when attempting to lift the big toe upward (extensor hallucis longus weakness).",
      "Sensation of leg heaviness, calf cramping, or numbness upon standing for extended durations.",
      "Inability to sit comfortably for more than 15-20 minutes without needing to change position.",
    ],
    contributingFactors: [
      "Prolonged sedentary sitting with slouching posture flattening normal lumbar curvature.",
      "Repetitive forward flexion with heavy twisting loads at work or in gym activities.",
      "Weakness in the deep abdominal transversus and multifidus stabilizing musculature.",
      "Age-related desiccation of the nucleus pulposus.",
      "Pelvic tilt imbalances and leg length discrepancies.",
    ],
    whenToSeekCare: [
      "Symptoms persist beyond two weeks despite conventional rest and OTC analgesics.",
      "Difficulty in walking on heels or numbness spreading to the foot.",
      "Night pain or morning stiffness that takes over an hour to loosen up.",
      "Sudden numbness around the perineal region (urgent medical review required).",
    ],
    ayurvedicApproach: [
      "Identification of Kati Gata Vata with Dhatu Kshaya at the L4-L5 junction.",
      "Targeted Kati Vasti with specific polyherbal formulations to lubricate the facet joints and relieve hypertonicity.",
      "Agnikarma applied at precise Ashu-Vedana (pain-transmitting) points along the L5 dermatome to break the chronic pain loop.",
      "Internal Rasayanas rich in Asthishrinkhala, Shallaki, and Guggulu to nourish spinal bone density and fibrous integrity.",
    ],
    therapiesOffered: [
      "L4-L5 Focused Kati Vasti with Sahacharadi & Ksheerabala oils",
      "Agnikarma on primary pain trigger points",
      "Vasti Chikitsa (Medicated decoction & oil enemas)",
      "Pinda Sweda (Medicated herbal rice or leaf fomentation)",
      "Postural and pelvic alignment guidance",
    ],
    consultationSteps: [
      {
        step: 1,
        title: "Segmental Biomechanical Assessment",
        description:
          "In-depth correlation of MRI axial and sagittal views with physical tests for the L5 nerve root.",
      },
      {
        step: 2,
        title: "Localized Anti-Inflammatory Phase",
        description:
          "Relieving acute perineural inflammation and muscle spasms using Kati Vasti and Patra Pinda Sweda.",
      },
      {
        step: 3,
        title: "Regenerative Tissue Nourishment",
        description:
          "Restoring deep tissue vitality and pelvic stability through medicated Matra Vasti sessions.",
      },
      {
        step: 4,
        title: "Ergonomic & Core Rehabilitation",
        description:
          "Tailored micro-exercises and sitting posture adjustments to protect the L4-L5 disc from recurrent strain.",
      },
    ],
    faqs: [
      {
        question: "Can an L4-L5 disc bulge heal naturally?",
        answer:
          "Yes. Clinical evidence demonstrates that many disc bulges undergo natural resorption and inflammation reduction over time. Ayurvedic care accelerates this process by enhancing localized microcirculation, reducing muscle spasm, and relieving mechanical strain.",
      },
      {
        question: "What is the difference between a bulge and a herniation?",
        answer:
          "A bulge involves generalized outward protrusion of the disc perimeter beyond its normal boundary, whereas a herniation or slip occurs when the inner gel cracks through the outer wall. Both respond favorably to personalized Ayurvedic conservative treatment.",
      },
      {
        question: "Will I need to stop going to work during treatment?",
        answer:
          "Most patients continue their daily office work while attending outpatient therapy sessions. We provide ergonomic sitting guidance to protect the L4-L5 segment throughout your workday.",
      },
    ],
    relatedConditionSlugs: ["slip-disc", "sciatica", "lower-back-pain"],
  },
  {
    slug: "back-pain",
    name: "Back Pain",
    badge: "Spinal Health & Posture",
    shortDescription:
      "Comprehensive care for generalized spinal stiffness, postural strain, and recurrent muscular tension.",
    heroHeadline: "Holistic Ayurvedic Relief for Chronic Back Pain",
    heroSubheadline:
      "Addressing the true root cause of persistent spinal distress through traditional therapies and posture rehabilitation.",
    image: "/images/treatments/ayurvedic-wellness.jpg",
    overview: [
      "Back pain is one of the most widespread health complaints globally, affecting individuals of all age groups due to sedentary desk culture, muscular imbalance, and chronic stress.",
      "Ayurveda views back pain (Prishta Shoola) as an expression of vitiated Vata dosha accumulating in the musculoskeletal channels (Mamsa and Asthi Vaha Srotas), causing stiffness (Stambha) and pain (Ruk).",
      "At Swasthik Ayurveda, treatment goes beyond temporary symptom suppression to restore myofascial harmony, release muscular knots, and revitalize spinal alignment.",
    ],
    symptoms: [
      "Persistent dull ache or localized soreness across the mid or upper back.",
      "Sharp pain during transition from sitting to standing or vice versa.",
      "Inability to bend forward, backward, or rotate the torso smoothly.",
      "Spinal muscle fatigue and heaviness after minimal exertion.",
      "Tension headaches or shoulder tightness originating from upper spinal strain.",
    ],
    contributingFactors: [
      "Poor sitting ergonomics with rounded shoulders and forward head posture.",
      "Lack of core strength and tight hamstrings tilting the pelvic basin.",
      "Sedentary habits, lack of regular physical movement, and obesity.",
      "Chronic mental stress causing continuous paraspinal muscle contracture.",
      "Nutritional deficiencies, especially Calcium and Vitamin D3.",
    ],
    whenToSeekCare: [
      "Back pain that continues for more than 10-14 days without spontaneous recovery.",
      "Pain that wakes you from sleep or worsens when resting.",
      "Accompanying fever, unexplained weight loss, or history of trauma.",
      "Stiffness that hampers everyday activities like driving or walking.",
    ],
    ayurvedicApproach: [
      "Balancing localized Vata and Kapha through warm therapeutic oil application (Abhyanga) and herbal fomentation (Swedana).",
      "Deep tissue myofascial release using classical herbal liniments to melt paraspinal trigger points.",
      "Nourishing the Asthi Dhatu (bone tissue) with internal Ayurvedic formulations containing Guggulu and Laksha.",
      "Comprehensive lifestyle and Dinacharya adjustments to integrate therapeutic spinal stretches into daily life.",
    ],
    therapiesOffered: [
      "Full Spinal Abhyanga with tailored medicated oils",
      "Bashpa Sweda (Herbal steam chamber therapy)",
      "Patra Pinda Sweda (Herbal leaf bolus massage)",
      "Dry & Fire Cupping for muscular spasm release",
      "Agnikarma for localized tender trigger points",
    ],
    consultationSteps: [
      {
        step: 1,
        title: "Posture & Spine Mobility Analysis",
        description:
          "Assessing spinal curvature, pelvic symmetry, trigger points, and muscle balance.",
      },
      {
        step: 2,
        title: "Pain & Muscle Relaxation Phase",
        description:
          "Targeted fomentation and therapeutic oils to quickly dissolve paraspinal rigidity.",
      },
      {
        step: 3,
        title: "Deep Dhatu Nourishment",
        description:
          "Internal herbal medicine and tissue-rejuvenating therapies to rebuild spinal endurance.",
      },
      {
        step: 4,
        title: "Ergonomics & Home Maintenance",
        description:
          "Practical guidance on chair ergonomics, lifting techniques, and daily therapeutic asanas.",
      },
    ],
    faqs: [
      {
        question: "How is Ayurvedic back pain treatment different from painkillers?",
        answer:
          "Painkillers merely mask nerve sensation temporarily while potentially causing gastric or renal strain. Ayurveda tackles the root cause—dissolving muscular spasms, enhancing blood flow, rehydrating connective tissues, and rectifying structural imbalances.",
      },
      {
        question: "How many sessions are typically required?",
        answer:
          "Mild to moderate postural back pain often shows notable relief in 3 to 5 sessions, while chronic long-standing back pain may require a 7-day or 14-day comprehensive care plan.",
      },
      {
        question: "Can I take these treatments if I have high blood pressure or diabetes?",
        answer:
          "Yes. Dr. Krishna Mohan customizes every therapy and selects medicated oils suitable for patients with comorbidities like hypertension and diabetes.",
      },
    ],
    relatedConditionSlugs: ["lower-back-pain", "l4-l5-disc-bulge", "cervical-spondylosis"],
  },
  {
    slug: "lower-back-pain",
    name: "Lower Back Pain",
    badge: "Lumbar & Sacral Care",
    shortDescription:
      "Targeted clinical solutions for acute and chronic lumbosacral pain, muscle spasms, and lumbar stiffness.",
    heroHeadline: "Personalized Ayurvedic Care for Lower Back Pain (Kati Shoola)",
    heroSubheadline:
      "Restore pain-free lumbar mobility with time-tested Ayurvedic therapies and non-invasive spinal rejuvenation.",
    image: "/images/treatments/spine-care-assessment.jpg",
    overview: [
      "Lower back pain (LBP) centered in the lumbar and lumbosacral region is the leading cause of disability worldwide, impairing occupational productivity and quality of life.",
      "In Ayurveda, lower back pain is termed 'Kati Shoola' or 'Kati Graha', where Vata dosha lodges in the Kati (lumbar pelvic basin), causing pain, heaviness, and stiffness.",
      "Swasthik Ayurveda provides comprehensive non-surgical care designed to soothe aggravated Vata, strengthen paraspinal ligaments, and restore lumbar flexibility.",
    ],
    symptoms: [
      "Aching, stiffness, or throbbing pain located in the low back and sacral zone.",
      "Increased pain when standing up straight after prolonged sitting.",
      "Inability to lift moderate weights or bend forward without discomfort.",
      "Muscle spasms tightening across the hips, glutes, and lower lumbar region.",
      "Morning lumbar stiffness that improves slowly with daytime movement.",
    ],
    contributingFactors: [
      "Slouching in unsupportive ergonomic chairs for 8-10 hours daily.",
      "Sudden heavy lifting without engaging core and leg muscles.",
      "Pelvic torsion, sacroiliac joint dysfunction, and leg length discrepancies.",
      "Weak abdominal and gluteal muscles shifting load to the lumbar spine.",
      "Chronic Vata-aggravating dietary habits, irregular meals, and late-night routines.",
    ],
    whenToSeekCare: [
      "Lower back pain that does not ease after 5-7 days of self-care.",
      "Pain radiating into the buttock, thigh, or lower extremities.",
      "Inability to perform essential daily tasks like bathing, dressing, or walking.",
      "Any associated loss of bowel or bladder control (emergency red flag).",
    ],
    ayurvedicApproach: [
      "Pacification of Kati Gata Vata through targeted Snehana and Swedana.",
      "Kati Vasti: Retaining warm medicated taila within a herbal dough reservoir over the sacrolumbar junction.",
      "Vasti Chikitsa: Therapeutic herbal lipid enemas known classically as the ultimate therapy for lumbar and pelvic health.",
      "Prescription of anti-Vata herbal decoctions such as Rasnasaptaka Kashaya and Dashamoola.",
    ],
    therapiesOffered: [
      "Kati Vasti (Lumbar warm oil pooling)",
      "Patra Pinda Sweda (Medicated herbal leaf fomentation)",
      "Agnikarma (Localized micro-thermal therapy for trigger point release)",
      "Cupping Therapy (Decompression of lumbosacral myofascial tissues)",
      "Matra Vasti (Deep systemic tissue oleation)",
    ],
    consultationSteps: [
      {
        step: 1,
        title: "Lumbosacral Clinical Assessment",
        description:
          "Thorough evaluation of spinal range of motion, sacroiliac joints, and nerve stretch tests.",
      },
      {
        step: 2,
        title: "Immediate Spasm Reduction",
        description:
          "Applying warm herbal fomentation and Kati Vasti to ease acute lumbar muscle guarding.",
      },
      {
        step: 3,
        title: "Structural Strengthening",
        description:
          "Systemic lipid therapy (Vasti) and restorative herbs to reinforce spinal connective tissues.",
      },
      {
        step: 4,
        title: "Ergonomics & Relapse Prevention",
        description:
          "Instruction in core activation, lumbar-friendly sleeping postures, and daily routine maintenance.",
      },
    ],
    faqs: [
      {
        question: "Why does my lower back hurt more in the morning?",
        answer:
          "During nighttime sleep, reduced physical circulation allows inflammatory byproducts and Vata-Kapha stiffness to accumulate in paraspinal muscles. Ayurvedic oil therapies and herbal fomentation enhance nocturnal circulation and eliminate morning stiffness.",
      },
      {
        question: "Can lower back pain be treated without surgery?",
        answer:
          "Yes, more than 95% of lower back pain cases do not require surgical intervention. Ayurvedic therapies effectively relieve pain, relax paraspinal muscles, and restore normal mobility without surgery.",
      },
      {
        question: "Is Kati Vasti safe for acute pain?",
        answer:
          "Yes, Kati Vasti is exceptionally safe and soothing. The warm medicated oil provides immediate thermal relaxation and deep transdermal absorption of anti-inflammatory herbs.",
      },
    ],
    relatedConditionSlugs: ["back-pain", "l4-l5-disc-bulge", "sciatica"],
  },
  {
    slug: "knee-pain",
    name: "Knee Pain",
    badge: "Joint & Mobility Care",
    shortDescription:
      "Comprehensive Ayurvedic therapies for knee joint inflammation, tendonitis, stiffness, and meniscus strain.",
    heroHeadline: "Reclaim Pain-Free Steps with Ayurvedic Knee Care",
    heroSubheadline:
      "Targeted non-invasive therapies to nourish joint cartilage, relieve synovial inflammation, and restore stability.",
    image: "/images/treatments/joint-pain-therapy.jpg",
    overview: [
      "Knee pain can stem from sports strain, ligamentous sprain, meniscus irritation, patellofemoral syndrome, or early wear of joint cartilage.",
      "In Ayurveda, knee health relies on the integrity of Sandhi (the joint structure), Sleshaka Kapha (the synovial fluid maintaining lubrication), and Asthi Dhatu (bone tissue).",
      "Swasthik Ayurveda delivers tailored knee therapies including Janu Vasti, herbal poultice fomentation, and restorative botanical therapies to lubricate the joint and ease pain.",
    ],
    symptoms: [
      "Pain when walking, descending stairs, squatting, or standing up from a low chair.",
      "Clicking, popping, or crepitus sensations inside the knee during movement.",
      "Swelling, tenderness, and warm sensation around the patella or joint line.",
      "Inability to fully straighten or bend the knee joint.",
      "Feeling of knee instability or 'giving way' while walking.",
    ],
    contributingFactors: [
      "Excess body weight placing increased stress across the tibiofemoral joint.",
      "Repetitive knee strain, improper running mechanics, or sports-related trauma.",
      "Weak quadriceps and tight calf or hamstring muscles.",
      "Depletion of natural joint lubrication due to aging or sedentary lifestyle.",
      "Unbalanced Vata dosha leading to dryness and premature joint degeneration.",
    ],
    whenToSeekCare: [
      "Knee pain lasting longer than 10-14 days without spontaneous recovery.",
      "Noticeable joint swelling, redness, or inability to bear weight on the leg.",
      "Locking of the knee joint where it cannot be straightened.",
      "Progressive restriction of walking distance and climbing stairs.",
    ],
    ayurvedicApproach: [
      "Restoring Sleshaka Kapha to re-establish natural synovial lubrication.",
      "Janu Vasti: Retaining warm medicated herbal oil (such as Murivenna, Mahanarayana, or Ksheerabala) over the affected knee.",
      "Patra Pinda & Shastika Shali Sweda: Specialized herbal bolus therapies to relieve periarticular swelling and strengthen tendons.",
      "Internal Rasayanas including Shallaki, Ashwagandha, and Yogaraja Guggulu to nourish joint cartilage.",
    ],
    therapiesOffered: [
      "Janu Vasti (Knee joint oil pooling therapy)",
      "Patra Pinda Sweda (Herbal leaf fomentation)",
      "Upanaha Sweda (Warm medicinal herbal plaster application)",
      "Agnikarma for localized knee tendon and ligament pain points",
      "Medicated therapeutic massage (Abhyanga)",
    ],
    consultationSteps: [
      {
        step: 1,
        title: "Knee Biomechanical Assessment",
        description:
          "Evaluating range of motion, joint line tenderness, crepitus, and reviewing X-rays/MRIs.",
      },
      {
        step: 2,
        title: "Synovial De-inflammation",
        description:
          "Relieving acute joint effusion and swelling with specialized herbal lepam and gentle fomentation.",
      },
      {
        step: 3,
        title: "Janu Vasti Cartilage Lubrication",
        description:
          "Administering warm medicated lipid retention to deeply nourish and lubricate the joint surfaces.",
      },
      {
        step: 4,
        title: "Quadriceps Rehabilitation",
        description:
          "Guiding simple isometric quadriceps strengthening exercises and knee-protective daily habits.",
      },
    ],
    faqs: [
      {
        question: "Can Ayurvedic treatment help avoid knee surgery?",
        answer:
          "For mild, moderate, and many severe degenerative knee conditions without complete mechanical collapse, Ayurvedic therapies like Janu Vasti, herbal rejuvenation, and muscle strengthening provide durable pain relief and functional improvement, often helping patients postpone or avoid knee replacement.",
      },
      {
        question: "What is Janu Vasti and how does it work?",
        answer:
          "Janu Vasti involves creating a dough dam around the knee joint and pouring warm medicated herbal oil continuously for 30-40 minutes. The warmth and herbal lipids penetrate deep into the joint capsule, improving synovial fluid viscosity and soothing inflamed nerves.",
      },
      {
        question: "How soon can I walk comfortably after starting therapy?",
        answer:
          "Many patients report significant reductions in stiffness and pain after 3 to 5 sessions of Janu Vasti and Swedana, with walking comfort progressively improving as quadriceps strength is restored.",
      },
    ],
    relatedConditionSlugs: ["knee-osteoarthritis", "back-pain", "sciatica"],
  },
  {
    slug: "knee-osteoarthritis",
    name: "Knee Osteoarthritis",
    badge: "Degenerative Joint Care",
    shortDescription:
      "Natural joint lubrication and cartilage-protective Ayurvedic therapy for Sandhigata Vata.",
    heroHeadline: "Holistic Care for Knee Osteoarthritis (Sandhigata Vata)",
    heroSubheadline:
      "Nourish worn cartilage, preserve joint spacing, and restore mobility without premature joint replacement.",
    image: "/images/treatments/joint-pain-therapy.jpg",
    overview: [
      "Knee Osteoarthritis is a degenerative joint disease characterized by progressive breakdown of articular cartilage, subchondral bone remodeling, osteophyte formation, and loss of synovial fluid.",
      "In classical Ayurveda, this condition is diagnosed as 'Sandhigata Vata', where vitiated Vata settles in the Sandhi (joints), causing cartilage destruction (Kshaya), pain on movement (Shoola), swelling (Shotha), and joint crepitus (Atopa).",
      "Swasthik Ayurveda's integrative protocol focuses on halting progressive joint degeneration, enhancing synovial fluid lubrication, calming bone-on-bone friction, and strengthening supportive musculature.",
    ],
    symptoms: [
      "Deep, aching pain in the knee that worsens with weight-bearing activities and evening hours.",
      "Audible grating, cracking, or grinding sound (crepitus) during joint movement.",
      "Morning knee joint stiffness lasting 15 to 30 minutes that loosens with gentle activity.",
      "Bony enlargement of the knee joint with gradual bow-legged (varus) deformity.",
      "Difficulty in sitting cross-legged, using Indian toilets, or climbing flights of stairs.",
    ],
    contributingFactors: [
      "Age-related loss of proteoglycans and chondrocyte vitality in the articular cartilage.",
      "Previous knee injuries, ligament tears, or meniscal damage.",
      "Excess body weight accelerating mechanical wear on cartilage surfaces.",
      "Occupational kneeling, repetitive heavy loading, or genetic predisposition.",
      "Chronic Vata-provoking diet and lifestyle leading to systemic tissue dryness.",
    ],
    whenToSeekCare: [
      "Persistent knee pain that limits your walking distance to less than a few blocks.",
      "Night knee pain that disrupts restful sleep.",
      "Noticeable deformity or curvature developing in the knee alignment.",
      "Inability to climb stairs or stand for routine kitchen or household tasks.",
    ],
    ayurvedicApproach: [
      "Dhatu Poshana (Deep tissue rejuvenation) to nourish Asthi (bone) and Majja (marrow/articular) tissues.",
      "Janu Vasti with high-potency Ayurvedic lipids (Ksheerabala 101, Dhanwantharam, and Murivenna) to rehydrate dry joint capsules.",
      "Shastika Shali Pinda Sweda (Navarakizhi): Application of medicated rice boluses cooked in milk and decoction to strengthen joint ligaments and quadriceps muscles.",
      "Prescribing bioavailable Ayurvedic chondroprotective herbs such as Shallaki (Boswellia serrata), Guggulu, and Hadjod (Cissus quadrangularis).",
    ],
    therapiesOffered: [
      "Janu Vasti (Segmental knee oil pooling)",
      "Shastika Shali Pinda Sweda (Nourishing medicated rice bolus fomentation)",
      "Upanaha (Herbal warm medicinal poultice binding)",
      "Agnikarma for severe bone-on-bone pain relief",
      "Matra Vasti (Systemic Vata pacification and bone nourishment)",
    ],
    consultationSteps: [
      {
        step: 1,
        title: "Degenerative Staging & X-Ray Review",
        description:
          "Grading joint space narrowing (Kellgren-Lawrence grades I to IV) and assessing joint stability.",
      },
      {
        step: 2,
        title: "Intra-Articular Lubrication Phase",
        description:
          "Daily Janu Vasti sessions with warm herbal oils to soothe cartilage surfaces and reduce crepitus.",
      },
      {
        step: 3,
        title: "Musculotendinous Strengthening",
        description:
          "Shastika Shali Pinda Sweda and therapeutic basti to fortify the vastus medialis and patellar tendon.",
      },
      {
        step: 4,
        title: "Long-Term Joint Preservation Plan",
        description:
          "Anti-inflammatory diet guidelines, weight management strategies, and gentle joint preservation exercises.",
      },
    ],
    faqs: [
      {
        question: "Can Ayurvedic treatment reverse knee osteoarthritis?",
        answer:
          "While severely worn or completely eroded cartilage cannot be regenerated completely to youth levels, Ayurvedic care significantly restores synovial lubrication, stops further degeneration, relieves chronic pain, and restores functional walking capacity.",
      },
      {
        question: "Is knee replacement surgery the only option for Grade 3 or 4 osteoarthritis?",
        answer:
          "Not necessarily. Many patients with advanced osteoarthritis successfully manage pain and maintain active lifestyle through targeted Ayurvedic therapies, weight management, and quadriceps rehabilitation without undergoing joint replacement surgery.",
      },
      {
        question: "How long do the benefits of Janu Vasti last?",
        answer:
          "A structured course of 7 to 14 sessions of Janu Vasti combined with herbal Rasayanas often delivers lasting pain relief for 6 to 12 months or longer, especially when supported by regular exercises and healthy body weight.",
      },
    ],
    relatedConditionSlugs: ["knee-pain", "lower-back-pain", "sciatica"],
  },
  {
    slug: "cervical-spondylosis",
    name: "Cervical Spondylosis",
    badge: "Neck & Upper Spine Care",
    shortDescription:
      "Specialized Ayurvedic therapies for neck stiffness, vertigo, radiating arm pain, and cervical disc degeneration.",
    heroHeadline: "Ayurvedic Treatment for Cervical Spondylosis (Manyastambha)",
    heroSubheadline:
      "Relieve neck stiffness, radiating nerve pain, and vertigo naturally with targeted therapies and postural restoration.",
    image: "/images/treatments/shirodhara-therapy.jpg",
    overview: [
      "Cervical Spondylosis is an age and posture-related degeneration of the cervical vertebrae and intervertebral discs of the neck, increasingly seen in IT professionals and young adults due to 'text neck'.",
      "In Ayurveda, cervical conditions are categorized as 'Manyastambha' (cervical stiffness) and 'Greeva Hundana' (cervical spondylosis with radiculopathy), stemming from Vata-Kapha vitiation in the cervical spine.",
      "At Swasthik Ayurveda Hyderabad, care is focused on relieving suboccipital tension, nourishing cervical discs, improving cerebral and upper limb circulation, and restoring natural cervical lordosis.",
    ],
    symptoms: [
      "Stiffness, dull ache, or severe tenderness across the back of the neck and shoulders.",
      "Radiating pain, numbness, or tingling sensations traveling down the shoulder, arm, forearm, or fingers.",
      "Occipital headaches starting from the base of the skull.",
      "Dizziness, lightheadedness, or vertigo when turning the head quickly.",
      "Muscle spasms in the trapezius and levator scapulae muscles.",
    ],
    contributingFactors: [
      "Continuous downward tilting of the head while viewing smartphones, laptops, and tablets ('Tech Neck').",
      "Poor sleeping posture using overly thick or unsupportive pillows.",
      "Age-related degeneration of cervical discs and formation of bony spurs (osteophytes).",
      "Chronic mental stress causing continuous clenching and tension in shoulder muscles.",
      "Sedentary desk jobs with lack of upper spinal mobility exercises.",
    ],
    whenToSeekCare: [
      "Neck pain accompanied by numbness or weakness in the hands and fingers.",
      "Frequent episodes of dizziness, vertigo, or loss of balance when tilting the neck.",
      "Pain that radiates down the arm and makes sleeping on the side impossible.",
      "Stiffness that prevents checking blind spots while driving.",
    ],
    ayurvedicApproach: [
      "Greeva Vasti: Creating a reservoir over the cervical spine and retaining warm medicated oil to nourish cervical discs and ligaments.",
      "Nasya Chikitsa: Administering herbal medicated nasal drops (such as Ksheerabala 101 or Anu Taila), the classical Ayurvedic route for all disorders above the clavicle (Urdhva Jatrugata Roga).",
      "Patra Pinda Sweda to dissolve painful trapezius muscle knots and relieve peri-scapular tension.",
      "Prescription of cervical neuro-protective herbs such as Shallaki, Ashwagandha, and Rasnasaptaka Kashaya.",
    ],
    therapiesOffered: [
      "Greeva Vasti (Cervical warm oil pooling)",
      "Nasya Therapy (Medicated nasal oil administration)",
      "Shirodhara (Calming medicated oil stream for neck-related stress and vertigo)",
      "Patra Pinda Sweda (Herbal leaf bolus therapy for trapezius spasms)",
      "Agnikarma for localized tender trigger points along the neck and scapula",
    ],
    consultationSteps: [
      {
        step: 1,
        title: "Cervical & Neurological Examination",
        description:
          "Assessing cervical range of motion, Spurling test, upper limb reflexes, and MRI/X-ray review.",
      },
      {
        step: 2,
        title: "Acute Spasm & Vertigo Relief",
        description:
          "Targeted Greeva Vasti and gentle Swedana to quickly relieve muscular guarding and cervicogenic headaches.",
      },
      {
        step: 3,
        title: "Nasya & Neuro-Regenerative Care",
        description:
          "Administering specialized Nasya drops to clear upper nerve channels and nourish cervical nerves.",
      },
      {
        step: 4,
        title: "Ergonomic & Postural Re-Education",
        description:
          "Customizing laptop screen height, neck-supportive sleeping pillow recommendations, and gentle neck stretches.",
      },
    ],
    faqs: [
      {
        question: "Can Cervical Spondylosis cause dizziness and headache?",
        answer:
          "Yes. Cervical spine degeneration and severe muscle spasms can compress the vertebral artery and irritate suboccipital nerves, leading to cervicogenic headaches and dizziness. Ayurvedic therapies like Greeva Vasti, Shirodhara, and Nasya provide rapid relief.",
      },
      {
        question: "How does Nasya therapy help cervical spondylosis?",
        answer:
          "Ayurveda states 'Nasa Hi Shiraso Dvaram' (the nose is the gateway to the head and upper spine). Medicated nasal drops directly stimulate olfactory and cranial neural pathways, relieving nerve root irritation, stiffness, and neurological distress.",
      },
      {
        question: "What pillow should I use for cervical spondylosis?",
        answer:
          "We recommend an ergonomic cervical contour pillow or a thin pillow that maintains the natural curve of your neck without pushing your head forward. Our doctors guide you on proper sleep ergonomics during consultation.",
      },
    ],
    relatedConditionSlugs: ["back-pain", "lower-back-pain", "sciatica"],
  },
];

