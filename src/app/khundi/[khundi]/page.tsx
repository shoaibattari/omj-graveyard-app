export default function GiveName({ params }: { params: { khundi: string } }) {
  return (
    <div className="text-7xl py-24 h-svh uppercase text-center">
      {params.khundi} khundi Data Searching App
    </div>
  );
}
