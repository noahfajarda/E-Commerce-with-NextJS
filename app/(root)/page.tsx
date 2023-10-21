import { UserButton } from "@clerk/nextjs";

// this is the root url
export default function SetupPage() {
  return (
    <div className="p-4">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}

// {/* LOOK AT DOCUMENTATION FOR shadcn-ui */}
// import { Button } from "@/components/ui/button";
//       {/* size: adjust size */}
//       {/* variant: adjust color */}
//       <Button size="default" variant="destructive">
//         Click Me
//       </Button>
