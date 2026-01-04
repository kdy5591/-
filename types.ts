
export interface Project {
  id: string;
  brandName: string;
  category: string;
  keywords: string[];
  thumbnailUrl: string;
  imageUrls: string[]; // 다중 이미지 지원을 위한 배열
  description: string;
  background: string;
  problem: string;
  concept: string;
  sketchUrl: string;
  feedback: string;
  isFeatured: boolean;
}

export interface Review {
  id: string;
  clientName: string;
  company: string;
  content: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: string;
}
