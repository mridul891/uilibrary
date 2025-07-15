"use client"
import Button from "@/registry/default/ui/button";
import Image from "next/image";

export default function Home() {
  return <div className="flex flex-col items-center justify-center min-h-screen">
    <Button size="large" name="Button" variant="default" 
    onClick={() => alert("Button clicked!")}
    />
  </div>;
}
