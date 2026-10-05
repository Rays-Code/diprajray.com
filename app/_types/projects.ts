import SectionHeadingProps from "./sectionHeading";

type Screen = {
    name: string;
    pos: string; // left, middle or right
    src: string;
};

type Logo = {
    name: string;
    src: string;
};

type Technology = {
    name: string;
    src: string;
};

type BannerBase = {
    screens?: Screen[];
    pos: string; // left, right
    Logo: Logo;
};

type ImageBanner = BannerBase & {
    type: "image";
    video?: never;
};

type VideoBanner = BannerBase & {
    type: "video";
    videoWidth: string;
    video: string;
};

type ProjectBanner = ImageBanner | VideoBanner;

type ProjectHeading = {
    text: string;
};

type ProjectLive = {
    url: string;
    color: string;
};

type DescriptionObj = {
    text: string
}

export type Project = {
    banner: ProjectBanner;
    technologies: Technology[];
    heading: ProjectHeading;
    description: DescriptionObj;
    live: ProjectLive;
    githubUrl: string;
};

export type ProjectData = {
    heading: SectionHeadingProps[];
    projects: Project[];
};