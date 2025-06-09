import coachProfile from "../assets/images/coach-profile.png";
import ICONS from "./icons";

export const careerCoachPageData = {
  title: {
    headline: "Unlock Your Career Potential",
    subheadline:
      "I help professionals like you land their dream jobs, negotiate better salaries and build a career they love.",
    ctaButton: "Schedule a Free Discovery Call",
    image: coachProfile,
  },
  about: {
    title: "About Coach Sanjam",
    subtitle: "Your Career Growth Partner",
    bio: "As a certified career coach, I am dedicated to helping you navigate the complexities of the modern job market. I provide personalized guidance and proven strategies to help you achieve your career goals. Whether you're a recent graduate or an experienced professional looking for a change, I'm here to support you on your journey to success.",
  },
  services: {
    title: "How I Can Help You",
    subtitle: "My Coaching Services",
    items: [
      {
        title: "Resume & LinkedIn Optimization",
        description:
          "Craft a compelling resume and a powerful LinkedIn profile that gets you noticed by recruiters.",
        features: [
          "ATS-optimized resume formatting",
          "Achievement-focused content",
          "LinkedIn & Naukri profile optimization",
        ],
        icon: ICONS.DOCUMENT_TEXT,
      },
      {
        title: "Interview Preparation",
        description:
          "Gain the confidence and skills to ace your interviews and land the job offer.",
        features: [
          "Mock interview sessions",
          "Behavioral question strategies",
          "Salary negotiation tactics",
        ],
        icon: ICONS.CHAT_BUBBLES,
      },
      {
        title: "Career Transition Strategy",
        description:
          "Get a clear roadmap for a successful career change, from exploring new options to making a smooth transition.",
        features: [
          "Skills gap analysis",
          "Industry transition planning",
          "Personal branding strategy",
        ],
        icon: ICONS.ROCKET,
      },
    ],
  },
  testimonials: {
    title: "Success Stories",
    subtitle: "What My Clients Say About Me",
    items: [
      {
        name: "Client Name",
        story:
          "Sanjam's guidance was a game-changer for my job search. I landed my dream job within a month of working with him!",
        image: "/path/to/your/client-image.jpg", 
      },
    ],
  },
};
