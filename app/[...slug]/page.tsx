import { redirect } from "next/navigation"

export default function CatchAllPage() {
  // Redirect any path to the homepage
  redirect("/")
}
