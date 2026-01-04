
import { Project, ProcessStep } from './types.ts';

export const INITIAL_PROJECTS: Project[] = [
  {
    id: '1',
    brandName: 'Lumière Coffee',
    category: 'Cafe & Bakery',
    keywords: ['Minimal', 'Elegance', 'Warm'],
    thumbnailUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800',
    imageUrls: [
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1200'
    ],
    description: '프랑스 정통 베이커리의 따뜻함과 세련미를 담은 브랜드',
    background: '루미에르 커피는 파리 뒷골목의 한적하고 고급스러운 베이커리 분위기를 한국 시장에 맞게 재해석하려 했습니다.',
    problem: '기존 로고는 너무 복잡하여 작은 컵이나 패키지에 인쇄했을 때 시인성이 떨어졌습니다.',
    concept: '빛(Lumière)을 형상화한 미니멀한 라인 아트와 고풍스러운 세리프 서체의 조합.',
    sketchUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800',
    feedback: '브랜드가 추구하는 방향성을 정확히 꿰뚫어 보셨습니다. 패키지 디자인에서도 로고의 힘이 느껴집니다.',
    isFeatured: true
  },
  {
    id: '2',
    brandName: 'Zenith Tech',
    category: 'SaaS / AI Startup',
    keywords: ['Future', 'Global', 'Solid'],
    thumbnailUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
    imageUrls: [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200'
    ],
    description: '데이터의 정점을 향하는 클라우드 솔루션 브랜드',
    background: '제니스 테크는 복잡한 데이터 인프라를 단순화하여 고객에게 전달하는 서비스를 제공합니다.',
    problem: '기술력을 강조하다 보니 차갑고 접근하기 어려운 이미지가 강했습니다.',
    concept: '성장을 의미하는 상승 곡선과 유기적인 연결을 표현한 심볼.',
    sketchUrl: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800',
    feedback: '심플하면서도 확장성 있는 디자인이라 대만족입니다. 앱 아이콘으로도 완벽해요.',
    isFeatured: true
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  { title: '문의 & 상담', description: '브랜드의 가치와 타겟을 분석하는 첫 단계', icon: 'MessageSquare' },
  { title: '브랜드 분석', description: '시장 조사 및 경쟁사 분석을 통한 전략 수립', icon: 'Search' },
  { title: '컨셉 제안', description: '디자인 방향성을 담은 무드보드와 키워드 공유', icon: 'Lightbulb' },
  { title: '시안 작업', description: '확정된 컨셉을 바탕으로 3종 이상의 시안 제작', icon: 'PenTool' },
  { title: '수정', description: '디테일을 다듬고 완성도를 높이는 과정 (최대 3회)', icon: 'RefreshCcw' },
  { title: '최종 납품', description: 'AI, PNG, SVG 등 모든 용도에 맞는 파일 제공', icon: 'CheckCircle' }
];

export const STATS = [
  { label: '누적 작업 수', value: '250+' },
  { label: '클라이언트 업종', value: '30+' },
  { label: '평균 만족도', value: '4.9/5' },
  { label: '소요 시간', value: '14 Days' }
];