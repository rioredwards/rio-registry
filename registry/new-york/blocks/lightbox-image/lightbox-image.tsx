"use client";

import { cn } from "@/lib/utils";
import { usePointerType } from "@/registry/new-york/blocks/image-overlay/hooks/use-pointer-type";
import { Maximize2 } from "lucide-react";
import { StaticImageData } from "next/image";
import { ImageOverlay } from "@/registry/new-york/blocks/image-overlay/image-overlay";
import { LightboxTrigger } from "@/registry/new-york/blocks/lightbox-image/lightbox/lightbox-trigger";
import { useLightbox } from "@/registry/new-york/blocks/lightbox-image/lightbox/lightbox-provider";
import type { LightboxSlide } from "@/registry/new-york/blocks/lightbox-image/lightbox/types";

interface LightboxImageProps {
  src: string | StaticImageData;
  alt: string;
  caption?: React.ReactNode;
  enableLightbox?: boolean;
  gallery?: LightboxSlide[];
  galleryIndex?: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
}

export function LightboxImage({
  src,
  alt,
  caption,
  enableLightbox = false,
  gallery,
  galleryIndex = 0,
  priority = false,
  className,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 640px",
}: LightboxImageProps) {
  const pointerType = usePointerType();
  const { openSingle, openGallery } = useLightbox();

  const isStaticImage = typeof src === "object";
  const imgSrc = isStaticImage ? src.src : src;
  const aspectRatio = isStaticImage
    ? `${src.width} / ${src.height}`
    : undefined;

  const slide: LightboxSlide = isStaticImage
    ? { ...src, alt, description: caption }
    : { src, alt, description: caption };

  const handleImageClick = () => {
    if (pointerType === "fine" && enableLightbox) {
      if (gallery && gallery.length > 0) {
        openGallery(gallery, galleryIndex);
      } else {
        openSingle(slide);
      }
    }
  };

  return (
    <figure className="my-6">
      <ImageOverlay
        src={imgSrc}
        alt={alt}
        sizes={sizes}
        priority={priority}
        className={cn("aspect-auto rounded-2xl", className)}
        overlayClassName="rounded-2xl"
        style={aspectRatio ? { aspectRatio } : undefined}
        zoomOnHover={enableLightbox}
        onClick={handleImageClick}
      >
        {enableLightbox && (
          <LightboxTrigger
            {...(gallery && gallery.length > 0
              ? { slides: gallery, index: galleryIndex }
              : { slide })}
            className="backdrop-blur-sm bg-background/70 absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full text-foreground shadow-md transition-all duration-200 ease-in-out hover:bg-primary hover:text-primary-foreground"
            aria-label="View fullscreen"
          >
            <Maximize2 className="w-4 h-4" />
          </LightboxTrigger>
        )}
      </ImageOverlay>
      {caption && (
        <figcaption className="mt-2 text-sm text-muted-foreground text-center italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
