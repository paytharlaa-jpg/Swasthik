export interface AssetEntry {
  id: string;
  name: string;
  path: string;
  source: "official_brand" | "clinic_archive" | "verified_camera" | "art_directed_svg" | "procedural_3d";
  format: "png" | "jpg" | "webp" | "avif" | "svg" | "mp4";
  dimensions?: string;
  intendedUse: string;
}

export const assetManifest: AssetEntry[] = [
  {
    id: "logo-main",
    name: "Swasthik Ayurveda Official Logo",
    path: "/images/brand/swasthik-ayurveda-logo.png",
    source: "official_brand",
    format: "png",
    dimensions: "500x160",
    intendedUse: "Main navigation, sticky header, cinematic intro, footer, and brand schema.",
  },
  {
    id: "doctor-krishna-mohan",
    name: "Dr. Krishna Mohan - Lead Ayurvedic Physician",
    path: "/images/doctor/dr-krishna-mohan.jpg",
    source: "verified_camera",
    format: "jpg",
    dimensions: "1200x1600",
    intendedUse: "Homepage Doctor section, Doctors directory, About clinic page, and consultation cards.",
  },
  {
    id: "treatment-panchakarma",
    name: "Authentic Panchakarma Therapy",
    path: "/images/treatments/panchakarma-therapy.jpg",
    source: "clinic_archive",
    format: "jpg",
    dimensions: "800x600",
    intendedUse: "Panchakarma treatment showcase, detoxification feature.",
  },
  {
    id: "treatment-shirodhara",
    name: "Shirodhara Therapeutic Oil Treatment",
    path: "/images/treatments/shirodhara-therapy.jpg",
    source: "clinic_archive",
    format: "jpg",
    dimensions: "800x600",
    intendedUse: "Ayurvedic neurological & stress-relief therapy showcase.",
  },
  {
    id: "treatment-agnikarma-cupping",
    name: "Agnikarma & Specialized Cupping Therapy",
    path: "/images/treatments/agnikarma-cupping-therapy.jpg",
    source: "clinic_archive",
    format: "jpg",
    dimensions: "800x600",
    intendedUse: "Acute pain relief, sciatica & lumbar disc therapy feature.",
  },
  {
    id: "treatment-spine-assessment",
    name: "Ayurvedic Spine Assessment & Alignment",
    path: "/images/treatments/spine-care-assessment.jpg",
    source: "clinic_archive",
    format: "jpg",
    dimensions: "800x600",
    intendedUse: "Spinal condition analysis and conservative orthopedic care.",
  },
  {
    id: "treatment-joint-pain",
    name: "Targeted Joint & Knee Therapy",
    path: "/images/treatments/joint-pain-therapy.jpg",
    source: "clinic_archive",
    format: "jpg",
    dimensions: "800x600",
    intendedUse: "Knee osteoarthritis, knee stiffness, and joint mobility rehabilitation.",
  },
  {
    id: "treatment-herbs",
    name: "Medicinal Botanical Herbs & Oils",
    path: "/images/treatments/ayurvedic-herbs.webp",
    source: "clinic_archive",
    format: "webp",
    dimensions: "800x600",
    intendedUse: "Ayurveda Garden and herbal pharmacology section.",
  },
  {
    id: "treatment-body-detox",
    name: "Body Detox & Rejuvenation",
    path: "/images/treatments/body-detox-therapy.jpg",
    source: "clinic_archive",
    format: "jpg",
    dimensions: "800x600",
    intendedUse: "General wellness, posture rehabilitation, and metabolic balance.",
  },
  {
    id: "treatment-oil-massage",
    name: "Therapeutic Medicated Oil Abhyanga",
    path: "/images/treatments/oil-therapy-massage.avif",
    source: "clinic_archive",
    format: "avif",
    dimensions: "800x600",
    intendedUse: "Muscle relaxation and circulation improvement.",
  },
];

