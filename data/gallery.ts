// data/gallery.ts
// data/gallery.ts

export interface GalleryItem {
  type: "image" | "video";
  src: string;
  alt: string;
  category: string;
  poster?: string; // optional thumbnail for videos
}

export const galleryItems: GalleryItem[] = [
  {
    type: "image",
    src: "/images/gallery/photo-1.jpg",
    alt: "Online tutoring session",
    category: "Sessions",
  },
  {
    type: "image",
    src: "/images/gallery/photo-2.jpg",
    alt: "Student learning online",
    category: "Sessions",
  },
  {
    type: "image",
    src: "/images/gallery/photo-3.jpg",
    alt: "Mentorex tutor",
    category: "Tutors",
  },
  {
    type: "image",
    src: "/images/gallery/photo-4.jpg",
    alt: "Mentorex tutor",
    category: "Tutors",
  },
  {
    type: "image",
    src: "/images/gallery/photo-5.jpg",
    alt: "Student success",
    category: "Students",
  },
  {
    type: "image",
    src: "/images/gallery/photo-6.jpg",
    alt: "Student success",
    category: "Students",
  },
  {
    type: "image",
    src: "/images/gallery/photo-7.jpg",
    alt: "Student success",
    category: "Students",
  },
  {
    type: "image",
    src: "/images/gallery/photo-10.jpg",
    alt: "Student success",
    category: "Students",
  },
  {
    type: "image",
    src: "/images/gallery/photo-11.jpg",
    alt: "Student success",
    category: "Students",
  },
  {
    type: "image",
    src: "/images/gallery/photo-12.jpg",
    alt: "Student success",
    category: "Students",
  },
  {
    type: "image",
    src: "/images/gallery/photo-13.jpg",
    alt: "Student success",
    category: "Students",
  },

  // 👇 Add your video here
  {
    type: "video",
    src: "/videos/gallery/v1.mp4",
    poster: "/images/gallery/video-thumbnail.jpg", // Optional
    alt: "Mentorex Demo",
    category: "Students",
  },
  {
    type: "video",
    src: "/videos/gallery/v2.mp4",
    poster: "/images/gallery/video-thumbnail.jpg", // Optional
    alt: "Mentorex Demo",
    category: "Students",
  },
  {
    type: "video",
    src: "/videos/gallery/v3.mp4",
    poster: "/images/gallery/video-thumbnail.jpg", // Optional
    alt: "Mentorex Demo",
    category: "Students",
  },
];