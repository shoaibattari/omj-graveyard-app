export default function GiveName({
  params,
}: {
  params: { graveyard: string };
}) {
  return (
    <div className="text-7xl py-24 h-svh uppercase text-center">{params.graveyard} Data Searching App</div>
  );
}
