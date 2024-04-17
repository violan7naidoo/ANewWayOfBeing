export function Gallery() {
  return (
    <section>
      <div className="w-full grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="grid items-center justify-center gap-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Gallery
          </h2>
        </div>
        <div className="grid w-full grid-cols-2 items-stretch justify-center md:grid-cols-2 lg:grid-cols-4">
          <img
            alt="Photo"
            className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
            height="300"
            src="/1.jpeg"
            width="500"
          />
          <img
            alt="Photo"
            className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
            height="300"
            src="/2.jpeg"
            width="500"
          />
          <img
            alt="Photo"
            className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
            height="300"
            src="/3.jpeg"
            width="500"
          />
          <img
            alt="Photo"
            className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
            height="300"
            src="/20.jpeg"
            width="500"
          />
          <img
            alt="Photo"
            className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
            height="300"
            src="/21.jpeg"
            width="500"
          />
          <img
            alt="Photo"
            className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
            height="300"
            src="22.jpeg"
            width="500"
          />
          <img
            alt="Photo"
            className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
            height="300"
            src="/23.jpeg"
            width="500"
          />
          <img
            alt="Photo"
            className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
            height="300"
            src="/24.jpeg"
            width="500"
          />
          <img
            alt="Photo"
            className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
            height="300"
            src="/25.jpeg"
            width="500"
          />
          <img
            alt="Photo"
            className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
            height="300"
            src="/26.jpeg"
            width="500"
          />
          <img
            alt="Photo"
            className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
            height="300"
            src="/27.jpeg"
            width="500"
          />
          <img
            alt="Photo"
            className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
            height="300"
            src="/28.jpeg"
            width="500"
          />
        </div>
        <div className="grid items-center justify-center gap-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Banner Feature
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            This is some text that describes the banner feature. It could be a
            call to action or a feature highlight.
          </p>
        </div>
        <div className="mx-auto grid w-full grid-cols-1 items-center justify-center gap-4">
          <div className="aspect-[2/1] overflow-hidden rounded-xl">
            <img
              alt="Banner Feature"
              className="object-cover object-center"
              height="full"
              src="/29.jpeg"
              style={{
                aspectRatio: "full/full",
                objectFit: "cover",
              }}
              width="full"
            />

            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Banner Feature
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              This is some text that describes the banner feature. It could be a
              call to action or a feature highlight.
            </p>
          </div>
        </div>

        <div className="grid items-center justify-center gap-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Large Image Section
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            This is some text that describes the large image section. It could
            be a feature highlight or a description of the image.
          </p>
        </div>
        <div className="mx-auto grid grid-cols-1 items-center justify-center gap-4 lg:grid-cols-2">
          <div className="aspect-video overflow-hidden rounded-lg border">
            <img
              alt="Large Image"
              className="object-cover object-center"
              height="300"
              src="/30.jpeg"
              style={{
                aspectRatio: "600/300",
                objectFit: "cover",
              }}
              width="600"
            />
          </div>
          <div className="mx-auto space-y-4 text-center lg:space-y-6 lg:text-left">
            <h3 className="text-2xl font-bold tracking-tight">Image Title</h3>
            <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              This is some text that describes the large image. It could be a
              feature highlight or a description of the image.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Gallery;
