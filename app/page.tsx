import { OpenInV0Button } from "@/components/open-in-v0-button";
import PokemonPage from "@/registry/new-york/blocks/complex-component/page";
import { ExampleForm } from "@/registry/new-york/blocks/example-form/example-form";
import { ExampleCard } from "@/registry/new-york/blocks/example-with-css/example-card";
import { HelloWorld } from "@/registry/new-york/blocks/hello-world/hello-world";
import { ImageOverlay } from "@/registry/new-york/image-overlay/image-overlay";
import { LightboxProvider } from "@/registry/new-york/lightbox-image/lightbox-provider";
import { LightboxImage } from "@/registry/new-york/lightbox-image/lightbox-image";
// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
  return (
    <div className="mx-auto flex min-h-svh max-w-3xl flex-col gap-8 px-4 py-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Custom Registry</h1>
        <p className="text-muted-foreground">
          A custom registry for distributing code using shadcn.
        </p>
      </header>
      <main className="flex flex-1 flex-col gap-8">
        <div className="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              An image component with hover/touch overlay effects and
              pointer-type-aware interactions.
            </h2>
            <OpenInV0Button name="image-overlay" className="w-fit" />
          </div>
          <div className="relative flex min-h-[400px] items-center justify-center">
            <ImageOverlay
              src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=800&q=80"
              alt="Demo image"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              priority={false}
              className=""
            >
              <div className="absolute inset-x-4 bottom-4 flex flex-col items-start gap-1 rounded-md bg-black/60 px-3 py-2 text-left text-xs text-white shadow-lg backdrop-blur-sm">
                <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium tracking-wide uppercase">
                  <span className="h-1 w-1 rounded-full bg-emerald-400" />
                  yes
                </span>
                <p className="text-sm font-semibold">
                  Hover or tap to explore the overlay
                </p>
                <p className="text-[11px] text-white/80">
                  This content is rendered as children of the{" "}
                  <code>ImageOverlay</code> component.
                </p>
              </div>
            </ImageOverlay>
          </div>
        </div>

        <div className="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              An image component with fullscreen lightbox support, gallery mode,
              captions, and optimized Next.js image rendering.
            </h2>
            <OpenInV0Button name="lightbox-image" className="w-fit" />
          </div>
          <div className="relative flex min-h-[400px] items-center justify-center">
            <LightboxProvider>
              <LightboxImage
                src="https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=80"
                alt="Demo image"
                enableLightbox
                caption="Click to open in lightbox"
              />
            </LightboxProvider>
          </div>
        </div>

        <div className="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A simple hello world component
            </h2>
            <OpenInV0Button name="hello-world" className="w-fit" />
          </div>
          <div className="relative flex min-h-[400px] items-center justify-center">
            <HelloWorld />
          </div>
        </div>

        <div className="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A contact form with Zod validation.
            </h2>
            <OpenInV0Button name="example-form" className="w-fit" />
          </div>
          <div className="relative flex min-h-[500px] items-center justify-center">
            <ExampleForm />
          </div>
        </div>

        <div className="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A complex component showing hooks, libs and components.
            </h2>
            <OpenInV0Button name="complex-component" className="w-fit" />
          </div>
          <div className="relative flex min-h-[400px] items-center justify-center">
            <PokemonPage />
          </div>
        </div>

        <div className="relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A login form with a CSS file.
            </h2>
            <OpenInV0Button name="example-with-css" className="w-fit" />
          </div>
          <div className="relative flex min-h-[400px] items-center justify-center">
            <ExampleCard />
          </div>
        </div>
      </main>
    </div>
  );
}
