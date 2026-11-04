export interface AIPromptEntry {
  id: string;
  category: string;
  title: string;
  prompt: string;
  suggestedAspect: "16:9" | "4:3" | "1:1";
  intendedUse: string;
}

export const aiPromptLibrary: AIPromptEntry[] = [
  {
    id: "prompt-diwali-hero",
    category: "Diwali 3D Environment",
    title: "Diwali Night Sky & Indian Palace Backdrop",
    prompt:
      "Ultra-premium Indian cinematic visual design, photorealistic 3D rendering, vast midnight navy sky filled with soft atmospheric mist, distant silhouette of a magnificent Rajasthani palace with intricate carved jharokha arches, warm golden lit diyas on sandstone terraces, majestic fireworks bursts illuminating the clouds with royal gold and subtle saffron sparks, hyper-detailed, elegant composition, realistic materials, no text, no logos, no watermarks.",
    suggestedAspect: "16:9",
    intendedUse: "Hero background fallback, campaign banners, and promotional posters.",
  },
  {
    id: "prompt-palace-temple",
    category: "Architecture",
    title: "Palace and Temple Environment",
    prompt:
      "Ultra-premium Indian architectural rendering, grand carved sandstone pillared colonnade, traditional lotus domes (chhatris) with ornate golden finials, sacred marble water reflection pool reflecting golden candlelight, deep midnight atmosphere with warm amber torch sconces, cinematic volumetric lighting, photorealistic 3D depth, no text, no watermarks.",
    suggestedAspect: "16:9",
    intendedUse: "About page editorial backdrop, 3D scene lighting reference.",
  },
  {
    id: "prompt-fireworks",
    category: "Festive Particles",
    title: "Sacred Golden Fireworks & Rockets",
    prompt:
      "Ultra-realistic golden particle fireworks bursting across a deep starry midnight navy Indian sky, cascading trails of shimmering gold dust, delicate saffron motes, soft radiant bloom, high-speed shutter photograph aesthetic, cinematic depth of field, no text, no watermarks.",
    suggestedAspect: "16:9",
    intendedUse: "Diwali campaign visual assets.",
  },
  {
    id: "prompt-diya-closeup",
    category: "Festive Elements",
    title: "Aged Brass Diya Close-up",
    prompt:
      "Macro close-up photorealistic rendering of a handcrafted classical Indian brass diya lamp, warm glowing teardrop flame with pure golden illumination, floating in a reflective water vessel surrounded by fresh pink lotus petals, gentle depth of field, royal gold and saffron reflections, no text, no watermarks.",
    suggestedAspect: "4:3",
    intendedUse: "Festive campaign cards and seasonal promotional banners.",
  },
  {
    id: "prompt-ayurveda-garden",
    category: "Ayurveda Garden",
    title: "Medicinal Indian Herbal Garden",
    prompt:
      "Lush, tranquil Indian Ayurvedic medicinal botanical sanctuary, ancient carved stone pathways winding through fresh neem, tulsi, and ashwagandha flora, traditional hammered brass urli filled with clear water and floating pink lotus blossoms, warm dawn sunlight filtering through green leaves, floating pollen motes, peaceful morning atmosphere, realistic 3D foliage, no text, no watermarks.",
    suggestedAspect: "16:9",
    intendedUse: "Evergreen campaign mode, clinic philosophy sections.",
  },
  {
    id: "prompt-botanical-collection",
    category: "Ayurveda Garden",
    title: "Herbal Botanical Collection",
    prompt:
      "Artfully arranged raw Ayurvedic medicinal botanicals: fresh green Tulsi sprigs, golden turmeric roots, Shallaki resin crystals, Dashamoola bark, and sesame oil in an antique bell-metal Kansa vessel on dark slate stone, soft directional spotlight, luxury pharmaceutical editorial style, no text, no watermarks.",
    suggestedAspect: "4:3",
    intendedUse: "Herbal pharmacology section, blog articles.",
  },
  {
    id: "prompt-agnikarma",
    category: "Therapies",
    title: "Agnikarma Supporting Visual",
    prompt:
      "Cinematic close-up of a traditional Ayurvedic Agnikarma Shalaka (heated metal rod) with a soft warm golden thermal glow at its tip, medicinal herbal decoction bowls in soft focus in the background, clean sterile clinical atmosphere, warm amber illumination, professional healthcare elegance, no text, no watermarks.",
    suggestedAspect: "4:3",
    intendedUse: "Agnikarma therapy educational card.",
  },
  {
    id: "prompt-panchakarma",
    category: "Therapies",
    title: "Panchakarma Supporting Visual",
    prompt:
      "Classical Ayurvedic Panchakarma therapy setting, carved wooden Droni treatment bed polished to a deep teak luster, brass Shirodhara pot suspended overhead with a gentle stream of medicated oil, soft golden candlelight, spotless clinical tranquility, no text, no watermarks.",
    suggestedAspect: "16:9",
    intendedUse: "Panchakarma treatment page and therapy showcase.",
  },
  {
    id: "prompt-cupping",
    category: "Therapies",
    title: "Cupping Therapy Supporting Visual",
    prompt:
      "Professional therapeutic cupping set on dark slate, smooth glass cups reflecting warm golden clinic lighting, warm herbal compress boluses and medicated oil bottles arranged neatly, clean healthcare presentation, no text, no watermarks.",
    suggestedAspect: "4:3",
    intendedUse: "Cupping therapy card.",
  },
  {
    id: "prompt-sciatica-anatomy",
    category: "Anatomical Education",
    title: "Sciatica Spinal & Nerve Pathway",
    prompt:
      "Medically accurate aesthetic 3D anatomical visualization of the human lumbar spine, sacrum, and branching yellow sciatic nerve radiating gently downward, glowing with soft gold highlighting the nerve pathway against a dark midnight navy clinical background, sophisticated medical illustration, no text, no labels, no watermarks.",
    suggestedAspect: "4:3",
    intendedUse: "Sciatica condition detail page.",
  },
  {
    id: "prompt-l4-l5-anatomy",
    category: "Anatomical Education",
    title: "L4-L5 Lumbar Disc Segment",
    prompt:
      "Sophisticated 3D medical visualization of L4 and L5 lumbar vertebrae, highlighting the intervertebral disc with a gentle warm golden gradient indicating the annular structure, clean dark midnight background, elegant professional medical aesthetics, no text, no watermarks.",
    suggestedAspect: "4:3",
    intendedUse: "L4-L5 disc bulge treatment page.",
  },
  {
    id: "prompt-knee-anatomy",
    category: "Anatomical Education",
    title: "Knee Joint & Synovial Cartilage",
    prompt:
      "Detailed 3D anatomical rendering of human knee joint, highlighting smooth articular cartilage surfaces and synovial fluid capsule with a healthy emerald and gold illumination, dark clinical slate background, professional medical design, no text, no watermarks.",
    suggestedAspect: "4:3",
    intendedUse: "Knee osteoarthritis condition detail page.",
  },
  {
    id: "prompt-cervical-anatomy",
    category: "Anatomical Education",
    title: "Cervical Spine Segment",
    prompt:
      "Aesthetic 3D scientific visualization of the cervical neck vertebrae and nerve roots, delicate golden lines tracing spinal nerve pathways against a calm navy backdrop, medical clarity, elegant healthcare design, no text, no watermarks.",
    suggestedAspect: "4:3",
    intendedUse: "Cervical spondylosis treatment page.",
  },
  {
    id: "prompt-blog-thumbnails",
    category: "Editorial",
    title: "Ayurvedic Medical Editorial Background",
    prompt:
      "Luxury editorial healthcare background, warm amber and gold light spilling across dark emerald linen and polished teak wood, antique Ayurvedic brass pestle and mortar, fresh green herbs in shallow ceramic dishes, tranquil spa-clinic mood, photorealistic 3D, no text, no watermarks.",
    suggestedAspect: "16:9",
    intendedUse: "Blog thumbnails, social share cards.",
  },
  {
    id: "prompt-clinic-interior",
    category: "Editorial",
    title: "Clinic Editorial Consultation Atmosphere",
    prompt:
      "Serene, high-end Ayurvedic consultation suite interior, minimalist teak furniture, brass lamp accents, subtle Indian architectural jali screens in the background, soft warm lighting, calm professional medical environment, no text, no people, no watermarks.",
    suggestedAspect: "16:9",
    intendedUse: "About us and contact page backgrounds.",
  },
];

