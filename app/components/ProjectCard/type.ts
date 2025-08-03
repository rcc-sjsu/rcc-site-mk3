export type projectProps = {
  color: "blue" | "pink",
  photoURL: string,
  projectName: string,
  teamName: string,
  description: string,
  teamMembers: {[key: string]: string[]};
}