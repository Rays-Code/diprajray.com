
export interface TestimonialProps extends Testimonial {
    isTop?: boolean;
    showContent?: boolean;
}

export interface Testimonial {
    avatar: string;
    description: string;
    rating: number;
    name: string;
    designation: string;
    company: string;
    companyLogo: string;
}