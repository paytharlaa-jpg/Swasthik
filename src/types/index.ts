export interface Condition {
  slug: string;
  name: string;
  shortDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  overview: string[];
  symptoms: string[];
  contributingFactors: string[];
  whenToSeekCare: string[];
  ayurvedicApproach: string[];
  therapiesOffered: string[];
  consultationSteps: {
    step: number;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedConditionSlugs: string[];
  badge: string;
  image: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  excerpt: string;
  publishedDate: string;
  readTime: string;
  category: string;
  author: {
    name: string;
    role: string;
  };
  featuredImage: string;
  imagePrompt: string;
  tableOfContents: { id: string; text: string }[];
  content: {
    h2: string;
    body: string[];
    bullets?: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedTreatmentSlugs: string[];
}

export interface Testimonial {
  id: string;
  patientName: string;
  location: string;
  condition: string;
  quote: string;
  treatmentDuration?: string;
  verified: boolean;
}

