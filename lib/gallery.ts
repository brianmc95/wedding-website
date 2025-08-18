export interface GalleryImage {
  src: string
  alt: string
  filename: string
}

// Static list of gallery images - this works in both development and production
export function getGalleryImages(): GalleryImage[] {
  const images: GalleryImage[] = [
    {
      src: "/images/gallery/formal-coastal.jpg",
      alt: "Megan and Brian at a coastal location in formal attire",
      filename: "formal-coastal.jpg",
    },
    {
      src: "/images/gallery/street-art-selfie.jpg",
      alt: "Fun selfie against colorful street art",
      filename: "street-art-selfie.jpg",
    },
    {
      src: "/images/gallery/wedding-guest.jpg",
      alt: "Dressed up as wedding guests",
      filename: "wedding-guest.jpg",
    },
    {
      src: "/images/gallery/beach-blanket.jpg",
      alt: "Cozy moment wrapped in a blanket on the beach",
      filename: "beach-blanket.jpg",
    },
    {
      src: "/images/gallery/hiking-adventure.jpg",
      alt: "Adventure selfie during a hike with mountain views",
      filename: "hiking-adventure.jpg",
    },
    {
      src: "/images/gallery/city-street.jpg",
      alt: "Street photo in a European city",
      filename: "city-street.jpg",
    },
    {
      src: "/images/gallery/formal-garden.jpg",
      alt: "Elegant photo in a beautiful garden setting",
      filename: "formal-garden.jpg",
    },
    {
      src: "/images/gallery/bamboo-forest.jpg",
      alt: "Travel photo in a bamboo forest",
      filename: "bamboo-forest.jpg",
    },
    {
      src: "/images/gallery/celebration-dinner.jpg",
      alt: "Celebrating at a special dinner",
      filename: "celebration-dinner.jpg",
    },
    {
      src: "/images/gallery/engagement-photo.jpg",
      alt: "The engagement photo showing off the ring",
      filename: "engagement-photo.jpg",
    },
  ]

  return images
}
