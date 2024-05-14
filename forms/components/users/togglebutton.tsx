import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function ToggleButton() {
  return (
    <ToggleGroup variant="outline" type="single">
      <ToggleGroupItem value="male">Male</ToggleGroupItem>
      <ToggleGroupItem value="female">Female</ToggleGroupItem>
      <ToggleGroupItem value="none">None</ToggleGroupItem>
    </ToggleGroup>
  );
}
