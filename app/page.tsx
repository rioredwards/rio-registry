import { OpenInV0Button } from "@/components/open-in-v0-button";
import { ImageOverlay } from "@/registry/new-york/image-overlay/image-overlay";
import { LightboxGallery } from "@/registry/new-york/lightbox-image/lightbox-gallery";
import { LightboxImage } from "@/registry/new-york/lightbox-image/lightbox-image";
import { LightboxProvider } from "@/registry/new-york/lightbox-image/lightbox-provider";
import { LightboxVideo } from "@/registry/new-york/lightbox-image/lightbox-video";
import { VideoPlayer } from "@/registry/new-york/video-player/video-player";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-svh max-w-3xl flex-col gap-8 px-4 py-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Rio Registry</h1>
        <p className="text-muted-foreground">
          Reusable shadcn-compatible components by Rio Edwards.
        </p>
      </header>

      <main className="flex flex-1 flex-col gap-8">
        <section className="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              Video player with custom controls, progress, and fullscreen.
            </h2>
            <OpenInV0Button name="video-player" className="w-fit" />
          </div>
          <div className="relative flex min-h-[400px] items-center justify-center">
            <VideoPlayer
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            />
          </div>
        </section>

        <section className="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              Pointer-aware image overlays with optional custom content.
            </h2>
            <OpenInV0Button name="image-overlay" className="w-fit" />
          </div>
          <div className="relative flex min-h-[400px] items-center justify-center">
            <ImageOverlay
              src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=800&q=80"
              alt="Demo dog"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 640px"
            >
              <div className="absolute inset-x-4 bottom-4 rounded-md bg-black/60 px-3 py-2 text-sm text-white backdrop-blur-sm">
                Hover or tap to reveal overlay content.
              </div>
            </ImageOverlay>
          </div>
        </section>

        <section className="relative flex min-h-[500px] flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              Lightbox gallery with both image and video slides.
            </h2>
            <OpenInV0Button name="lightbox-image" className="w-fit" />
          </div>
          <div className="relative flex min-h-[440px] items-center justify-center">
            <LightboxProvider>
              <LightboxGallery>
                <LightboxImage
                  src="https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=1000&q=80"
                  alt="Dog portrait"
                  caption="Image slide"
                />
                <LightboxVideo
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                  caption="Video slide"
                />
              </LightboxGallery>
            </LightboxProvider>
          </div>
        </section>
      </main>
    </div>
  );
}
