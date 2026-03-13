export function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="min-h-screen pt-32 pb-16 px-4 flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-6">{title}</h1>
      <p className="text-lg text-gray-600 max-w-2xl">
        This page is a placeholder for the {title} content.
      </p>
    </div>
  );
}
