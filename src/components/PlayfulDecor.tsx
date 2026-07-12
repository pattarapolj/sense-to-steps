type PlayfulDecorProps = {
  variant?: "a" | "b" | "c";
  className?: string;
};

/** Flat geometric accents — playful, brand-colored, non-interactive */
export function PlayfulDecor({ variant = "a", className = "" }: PlayfulDecorProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {variant === "a" && (
        <>
          <span className="absolute -left-6 top-10 h-24 w-24 rounded-full bg-[#0870B0]/15 sm:h-32 sm:w-32" />
          <span className="absolute -right-4 bottom-8 h-28 w-28 rounded-full bg-[#F87000]/20 sm:-right-8 sm:h-40 sm:w-40" />
          <span className="absolute right-[18%] top-16 h-3 w-10 rotate-[-28deg] rounded-full bg-[#F8B800]" />
          <span className="absolute right-[14%] top-24 h-3 w-14 rotate-[-12deg] rounded-full bg-[#10A068]" />
        </>
      )}
      {variant === "b" && (
        <>
          <span className="absolute left-[8%] top-8 h-3 w-12 rotate-[22deg] rounded-full bg-[#F8B800]" />
          <span className="absolute left-[6%] top-14 h-3 w-16 rotate-[8deg] rounded-full bg-[#F87000]" />
          <span className="absolute -bottom-10 right-[10%] h-36 w-36 rounded-full bg-[#0870B0]/12" />
          <span className="absolute bottom-0 right-[22%] h-16 w-32 rounded-t-full bg-[#F87000]/35" />
        </>
      )}
      {variant === "c" && (
        <>
          <span className="absolute -top-8 left-[20%] h-20 w-20 rounded-full bg-[#10A068]/20" />
          <span className="absolute right-[8%] top-20 h-3 w-11 rotate-[-35deg] rounded-full bg-[#F8B800]" />
          <span className="absolute bottom-12 left-[5%] h-3 w-9 rotate-[18deg] rounded-full bg-[#0870B0]" />
          <span className="absolute -bottom-12 -right-8 h-40 w-40 rounded-full bg-[#F87000]/15" />
        </>
      )}
    </div>
  );
}
