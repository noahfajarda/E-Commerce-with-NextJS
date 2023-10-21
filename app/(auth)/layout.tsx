// auth WRAPPER
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // wrapper for ALL auth routes (sign-in & sign-up)
    // used for consistent styles for a bundle of routes (i.e. sign-in & sign-up)
    <div className="flex items-center justify-center h-full">{children}</div>
  );
}
// Center a page: justify & items AND h-full
