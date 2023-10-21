import { Button } from "@/components/ui/button";

// this is the root url
export default function Home() {
  return (
    <div className="p-4">
      {/* LOOK AT DOCUMENTATION FOR shadcn-ui */}
      {/* size: adjust size */}
      {/* variant: adjust color */}
      <Button size="default" variant="destructive">
        Click Me
      </Button>
    </div>
  );
}
