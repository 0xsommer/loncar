export const metadata = {
  title: "Futter > Case Study > Sanda Loncar",
  description: "Sanda Loncar ist eine unabhängige Beraterin and Coachin aus Wien, Österreich – spezialisiert auf Digital Leadership in der Medienbranche.",
};

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full items-center pb-32 px-6">
      {children}
    </div>
  );
}
