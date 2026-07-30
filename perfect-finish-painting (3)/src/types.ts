export interface Review {
  id: string;
  name: string;
  stars: number;
  text: string;
  date?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Feature {
  title: string;
  description: string;
  image: string;
}

export interface QuoteFormData {
  name: string;
  phone: string;
  projectType: string;
  projectSize: string;
  timeline: string;
  budget: string;
  location: string;
  details: string;
}
