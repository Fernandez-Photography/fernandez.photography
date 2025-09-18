export interface NavLink {
    name: string;
    href: string;
}

export interface GalleryImage {
    id: number;
    src: string;
    alt: string;
    category: 'wedding' | 'engagement' | 'portrait' | 'branding';
    height: number;
}

export interface PricingPlan {
    title: string;
    price: string;
    description: string;
    features: string[];
}

export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    imageUrl: string;
    link: string;
}