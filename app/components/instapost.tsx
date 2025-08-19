"use client";

import { useState, useCallback, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa";
import Image from "next/image";

interface InstagramPost {
  id: string;
  media_url: string;
  media_type: string;
  thumbnail_url?: string;
  timestamp: string;
}

export default function InstaCarousel() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentSetIndex, setCurrentSetIndex] = useState(0);

  // Fetch posts from our API endpoint
  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const response = await fetch("/api/instagram");
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        // Limit to first 8 posts
        setPosts((data.posts || []).slice(0, 8));
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError("Failed to load Instagram posts");
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  // Calculate total sets (4 posts per set, maximum 2 sets)
  const postsPerSet = 4;
  const totalSets = Math.min(2, Math.ceil(posts.length / postsPerSet));

  // Get current posts to display
  const getCurrentPosts = () => {
    const startIndex = currentSetIndex * postsPerSet;
    return posts.slice(startIndex, startIndex + postsPerSet);
  };

  const nextSlide = useCallback(() => {
    setCurrentSetIndex((prevIndex) => (prevIndex + 1) % totalSets);
  }, [totalSets]);

  const prevSlide = useCallback(() => {
    setCurrentSetIndex((prevIndex) => (prevIndex - 1 + totalSets) % totalSets);
  }, [totalSets]);

  if (loading) {
    return <div className="text-center py-12">Loading Instagram posts...</div>;
  }

  if (error) {
    return <div className="text-center py-12 text-red-600">{error}</div>;
  }

  const currentPosts = getCurrentPosts();

  const MediaContent = ({ post }: { post: InstagramPost }) => {
    if (post.media_type === "VIDEO") {
      return (
        <div className="relative" style={{ aspectRatio: "3/4" }}>
          <Image
            src={post.thumbnail_url || post.media_url}
            alt="Instagram video thumbnail"
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            priority={currentSetIndex === 0}
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <FaPlay className="text-white text-3xl z-10" />
          </div>
        </div>
      );
    }

    return (
      <div className="relative" style={{ aspectRatio: "3/4" }}>
        <Image
          src={post.media_url}
          alt="Instagram post"
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          priority={currentSetIndex === 0}
          className="object-cover"
        />
      </div>
    );
  };

  return (
    <div className="relative w-full">
      {/*left arrow*/}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-16 z-10">
        <button
          onClick={prevSlide}
          className="bg-purple-100 hover:bg-purple-200 rounded-full p-3"
        >
          <FaChevronLeft className="text-purple-800" />
        </button>
      </div>

      {/*post section*/}
      <div className="grid grid-cols-4 gap-4 py-12">
        {currentPosts.map((post) => (
          <div
            key={post.id}
            className="col-span-1 overflow-hidden flex flex-col"
          >
            <MediaContent post={post} />
            <div className="py-2 flex-grow flex items-center justify-center"></div>
          </div>
        ))}
      </div>

      {/*right arrow*/}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-16 z-10">
        <button
          onClick={nextSlide}
          className="bg-purple-100 hover:bg-purple-200 rounded-full p-3"
        >
          <FaChevronRight className="text-purple-800" />
        </button>
      </div>

      {/*post dots*/}
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalSets }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSetIndex(index)}
            className={`mx-1 h-2 w-2 rounded-full ${
              currentSetIndex === index ? "bg-purple-800" : "bg-purple-200"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
